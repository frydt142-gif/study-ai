import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, Plugin } from 'vite';
import dotenv from 'dotenv';

dotenv.config();

function studyAiApiPlugin(): Plugin {
  return {
    name: 'study-ai-api',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (req.url === '/api/health' && req.method === 'GET') {
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({
            status: 'ok',
            app: 'Study AI',
            hasApiKey: Boolean(process.env.GEMINI_API_KEY && process.env.GEMINI_API_KEY !== 'MY_GEMINI_API_KEY')
          }));
          return;
        }

        if (req.url === '/api/generate-notes' && req.method === 'POST') {
          const chunks: Buffer[] = [];
          req.on('data', chunk => {
            chunks.push(chunk);
          });
          req.on('end', async () => {
            try {
              const bodyStr = Buffer.concat(chunks).toString('utf-8');
              const body = JSON.parse(bodyStr);
              const { generateStudyNotes } = await import('./src/server/geminiService.ts');
              const result = await generateStudyNotes(body);
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify(result));
            } catch (err: any) {
              console.error('API middleware error:', err);
              let message = err?.message || 'Failed to generate study notes';
              let statusCode = err?.status === 503 || err?.code === 503 ? 503 : 500;
              try {
                if (typeof message === 'string' && message.trim().startsWith('{') && message.trim().endsWith('}')) {
                  const parsed = JSON.parse(message.trim());
                  if (parsed?.error?.message) {
                    message = parsed.error.message;
                    if (parsed?.error?.code === 503 || parsed?.error?.status === 'UNAVAILABLE') {
                      statusCode = 503;
                    }
                  }
                }
              } catch {}
              const isHighDemand = statusCode === 503 || message.toLowerCase().includes('high demand') || message.toLowerCase().includes('unavailable');
              if (isHighDemand) statusCode = 503;
              res.statusCode = statusCode;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ error: message, isHighDemand, statusCode }));
            }
          });
          return;
        }

        next();
      });
    }
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), studyAiApiPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
