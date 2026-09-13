import express, { Request, Response } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { generateStudyNotes } from './src/server/geminiService.ts';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

// Support large lecture files (up to 50MB for PDFs and slide decks)
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// Healthcheck & status
app.get('/api/health', (_req: Request, res: Response) => {
  res.json({
    status: 'ok',
    app: 'Study AI',
    hasApiKey: Boolean(process.env.GEMINI_API_KEY && process.env.GEMINI_API_KEY !== 'MY_GEMINI_API_KEY')
  });
});

// Main Study Notes generation endpoint
app.post('/api/generate-notes', async (req: Request, res: Response) => {
  try {
    const { fileData, lectureText, summaryLevel, enableSmartVisuals, presetTopic } = req.body;
    
    if (!fileData && !lectureText && !presetTopic) {
      return res.status(400).json({
        error: 'Please provide either a lecture file, lecture text, or select a sample topic.'
      });
    }

    const studyNotes = await generateStudyNotes({
      fileData,
      lectureText,
      summaryLevel: summaryLevel || 'standard',
      enableSmartVisuals: enableSmartVisuals !== false,
      presetTopic
    });

    return res.json(studyNotes);
  } catch (error: any) {
    console.error('Error generating study notes with Gemini:', error);
    let message = error?.message || 'Failed to generate study notes. Please try again.';
    let statusCode = error?.status === 503 || error?.code === 503 ? 503 : 500;

    // In case message is stringified JSON
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

    return res.status(statusCode).json({
      error: message,
      isHighDemand,
      statusCode
    });
  }
});

// In production, serve static files from dist
const distPath = path.resolve(__dirname, 'dist');
app.use(express.static(distPath));

app.get('*', (_req: Request, res: Response) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Study AI Server running on http://0.0.0.0:${PORT}`);
});
