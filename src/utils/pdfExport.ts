import html2pdf from 'html2pdf.js';
import { StudyNotesData } from '../types/study';

function sanitizeFileName(name: string): string {
  return name.replace(/[^a-zA-Z0-9_-]/g, '_').replace(/_+/g, '_').slice(0, 50);
}

export function generateUniversityHandoutHtml(notes: StudyNotesData): string {
  const safeTitle = notes.lectureTitle || 'Study Notes';
  const safeTitleArabic = notes.lectureTitleArabic || '';

  const highYieldHtml = notes.highYieldPoints?.map((pt, idx) => `
    <div class="card avoid-break sticky-note">
      <div style="font-weight: 800; font-size: 16px; color: #854d0e; margin-bottom: 6px;">
        ⭐ نقطة جوهرية #${idx + 1}: ${pt.english}
      </div>
      <div dir="rtl" class="font-arabic arabic-explain-box">
        <strong>ببساطة بالعربي: </strong>${pt.arabic}
      </div>
    </div>
  `).join('') || '';

  const sectionsHtml = notes.sections?.map(sec => `
    <section class="avoid-break" style="margin-bottom: 30px;">
      <h2>📌 Section ${sec.sectionNumber}: ${sec.title} / ${sec.titleArabic}</h2>
      
      <div class="handwritten-card">
        <p style="font-size: 16px; margin: 0 0 8px 0;"><strong>English Overview:</strong> ${sec.overview}</p>
        <p dir="rtl" class="font-arabic" style="font-size: 16px; color: #475569; margin: 0;"><strong>ملخص تمهيدي:</strong> ${sec.overviewArabic}</p>
      </div>

      ${sec.concepts?.map(c => `
        <div class="card avoid-break handwritten-card" style="border-top: 4px solid #3b82f6;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
            <span style="font-size: 18px; font-weight: 800; color: #0f172a;">${c.term}</span>
            <span dir="rtl" class="font-arabic" style="font-size: 18px; font-weight: 700; color: #2563eb;">${c.termArabic}</span>
          </div>
          
          <div style="font-size: 15px; color: #334155; margin-bottom: 8px;">
            <strong>English Point:</strong> ${c.englishContent}
          </div>

          <div dir="rtl" class="font-arabic arabic-explain-box">
            <strong style="color: #0284c7;">الشرح البلدي: </strong>${c.arabicExplanation}
          </div>
        </div>
      `).join('') || ''}
    </section>
  `).join('') || '';

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>${safeTitle}</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&family=IBM+Plex+Sans+Arabic:wght@400;600;700&family=Kalam:wght@400;700&display=swap');

    @page {
      size: A4 portrait;
      margin: 8mm 10mm;
    }
    * {
      box-sizing: border-box;
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }
    body {
      font-family: 'Kalam', 'IBM Plex Sans Arabic', sans-serif;
      margin: 0;
      padding: 24px;
      color: #0f172a;
      background-color: #fffdfa;
      background-image: linear-gradient(#e2e8f0 1px, transparent 1px);
      background-size: 100% 30px;
      font-size: 16px;
      line-height: 1.6;
    }
    .font-arabic {
      font-family: 'IBM Plex Sans Arabic', sans-serif;
    }
    .avoid-break, .card {
      page-break-inside: avoid !important;
      break-inside: avoid !important;
    }
    h1 {
      font-size: 28px !important;
      font-weight: 800;
      color: #0f172a;
      text-align: center;
      border-bottom: 3px dashed #3b82f6;
      padding-bottom: 10px;
      margin-bottom: 20px;
    }
    h2 {
      font-size: 20px !important;
      color: #1d4ed8;
      background: #eff6ff;
      padding: 10px 16px;
      border-radius: 12px;
      border-left: 6px solid #3b82f6;
      margin-bottom: 14px;
    }
    .handwritten-card {
      background: #ffffff;
      border: 2px solid #cbd5e1;
      border-radius: 16px;
      padding: 18px;
      margin-bottom: 16px;
      box-shadow: 0 4px 6px rgba(0,0,0,0.02);
    }
    .sticky-note {
      background: #fef9c3;
      border: 2px solid #fef08a;
      border-radius: 14px;
      padding: 16px;
      margin-bottom: 16px;
    }
    .arabic-explain-box {
      background: #f0f9ff;
      border: 1.5px solid #bae6fd;
      border-radius: 12px;
      padding: 12px 14px;
      font-size: 16px;
      color: #0369a1;
      margin-top: 8px;
    }
  </style>
</head>
<body>
  <h1>${safeTitle} ${safeTitleArabic ? '— ' + safeTitleArabic : ''}</h1>
  ${highYieldHtml}
  ${sectionsHtml}
</body>
</html>
  `;
}

function buildRenderableContainer(notes: StudyNotesData): HTMLElement {
  const fullHtml = generateUniversityHandoutHtml(notes);

  const container = document.createElement('div');
  container.id = 'temp-pdf-export-container';
  container.style.position = 'absolute';
  container.style.top = '0px';
  container.style.left = '0px';
  container.style.width = '800px';
  container.style.backgroundColor = '#fffdfa';
  container.style.zIndex = '9999';
  container.style.visibility = 'visible';
  container.style.overflow = 'visible';

  const parser = new DOMParser();
  const doc = parser.parseFromString(fullHtml, 'text/html');

  const styles = doc.querySelectorAll('style, link[rel="stylesheet"]');
  styles.forEach(s => container.appendChild(s.cloneNode(true)));

  while (doc.body.firstChild) {
    container.appendChild(doc.body.firstChild);
  }

  return container;
}

export async function downloadStudyNotesPdfFile(notes: StudyNotesData): Promise<void> {
  let container: HTMLElement | null = null;

  try {
    container = buildRenderableContainer(notes);
    document.body.appendChild(container);

    if (document.fonts && document.fonts.ready) {
      await document.fonts.ready;
    }
    await new Promise((resolve) => setTimeout(resolve, 500));

    const fileName = `${sanitizeFileName(notes.lectureTitle || 'study-notes')}-${Date.now()}.pdf`;

    const opt = {
      margin: 0,
      filename: fileName,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        scrollX: 0,
        scrollY: 0,
        windowWidth: 800,
        height: container.scrollHeight,
        windowHeight: Math.max(container.scrollHeight, window.innerHeight),
      },
      jsPDF: {
        unit: 'mm',
        format: 'a4',
        orientation: 'portrait',
        compress: true,
      },
      pagebreak: {
        mode: ['css', 'legacy'],
        avoid: ['.avoid-break', '.card', 'table', 'tr'],
      },
    };

    const worker = (html2pdf() as any).set(opt).from(container);
    await worker.save();
  } catch (error) {
    console.error('Failed to export PDF:', error);
  } finally {
    if (container && document.body.contains(container)) {
      document.body.removeChild(container);
    }
  }
}

export function openPrintableHandout(notes: StudyNotesData): void {
  const htmlContent = generateUniversityHandoutHtml(notes);
  const printWindow = window.open('', '_blank');
  if (printWindow) {
    printWindow.document.write(htmlContent);
    printWindow.document.close();
  }
}
