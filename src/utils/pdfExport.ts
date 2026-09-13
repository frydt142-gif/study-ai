import html2pdf from 'html2pdf.js';
import { StudyNotesData } from '../types/study';

/**
 * Clean helper to sanitize file names for download
 */
function sanitizeFileName(name: string): string {
  return name.replace(/[^a-zA-Z0-9_-]/g, '_').replace(/_+/g, '_').slice(0, 50);
}

/**
 * Returns sticker styling and icon for callout stickers
 */
function getStickerMeta(stickerType: string) {
  switch (stickerType) {
    case 'important':
      return {
        icon: '⭐',
        title: 'IMPORTANT (هام جداً)',
        bg: '#fffbeb',
        border: '#fde68a',
        tapeBg: '#fef08a',
        tapeText: '#854d0e',
        text: '#78350f'
      };
    case 'remember':
      return {
        icon: '🧠',
        title: 'REMEMBER (تذكر دائماً)',
        bg: '#f0f9ff',
        border: '#bae6fd',
        tapeBg: '#bae6fd',
        tapeText: '#0369a1',
        text: '#0c4a6e'
      };
    case 'dont-confuse':
      return {
        icon: '⚠️',
        title: "DON'T CONFUSE (لا تخلط)",
        bg: '#fff1f2',
        border: '#fecdd3',
        tapeBg: '#fecdd3',
        tapeText: '#be123c',
        text: '#881337'
      };
    case 'key-point':
    default:
      return {
        icon: '💡',
        title: 'KEY POINT (نقطة جوهرية)',
        bg: '#f0fdf4',
        border: '#bbf7d0',
        tapeBg: '#bbf7d0',
        tapeText: '#15803d',
        text: '#14532d'
      };
  }
}

/**
 * Builds a complete, standalone HTML string for university study handouts.
 * Styled with handwritten notebook aesthetics, paper textures, pastel highlights, and page break rules.
 */
export function generateUniversityHandoutHtml(notes: StudyNotesData): string {
  const safeTitle = notes.lectureTitle || 'University Lecture Notes';
  const safeTitleArabic = notes.lectureTitleArabic || '';
  const domain = notes.academicDomain || 'General Pathology & Medical Sciences';
  const studyTime = notes.estimatedStudyTimeMinutes || 30;
  const level = notes.summaryLevel ? notes.summaryLevel.toUpperCase().replace('-', ' ') : 'DETAILED';
  const sourceFile = notes.sourceFileName || 'Uploaded_Lecture.pdf';
  const dateStr = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  // Render high-yield points as sticky notes
  const highYieldHtml = notes.highYieldPoints?.map((pt, idx) => {
    return `
      <div class="card avoid-break" style="margin-bottom: 10px; background: #fffdf5; border: 1.5px solid #fde68a; border-radius: 12px; padding: 12px 14px; position: relative; box-shadow: 0 1px 4px rgba(0,0,0,0.03);">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
          <span style="display: inline-block; background: #fef08a; color: #854d0e; font-size: 10px; font-weight: 800; text-transform: uppercase; padding: 2px 8px; border-radius: 4px; letter-spacing: 0.05em;">
            ⭐ Takeaway #${idx + 1} • ${pt.tag ? pt.tag.replace('-', ' ').toUpperCase() : 'HIGH-YIELD'}
          </span>
          <span style="font-size: 10px; color: #94a3b8; font-family: 'Patrick Hand', cursive;">Strict Source Fact</span>
        </div>
        
        <div style="font-size: 12.5px; font-weight: 600; color: #0f172a; line-height: 1.5; margin-bottom: 6px;">
          <span style="background: #fef9c3; padding: 1px 4px; border-radius: 3px; font-weight: 700; color: #713f12; font-size: 11px;">English point:</span>
          ${pt.english}
        </div>

        <div dir="rtl" class="font-arabic" style="background: #eff6ff; border-radius: 8px; padding: 8px 12px; font-size: 12px; color: #1e3a8a; line-height: 1.6; border: 1px solid #dbeafe;">
          <strong style="color: #2563eb;">الشرح بالعربي: </strong>
          ${pt.arabic}
        </div>
      </div>
    `;
  }).join('') || '';

  // Render sections
  const sectionsHtml = notes.sections?.map(sec => {
    // Section Callout Sticker
    let sectionCalloutHtml = '';
    if (sec.callout) {
      const meta = getStickerMeta(sec.callout.stickerType);
      sectionCalloutHtml = `
        <div class="avoid-break" style="margin: 10px 0; background: ${meta.bg}; border: 1.5px dashed ${meta.border}; border-radius: 10px; padding: 10px 14px; position: relative;">
          <div style="display: inline-block; background: ${meta.tapeBg}; color: ${meta.tapeText}; font-size: 10px; font-weight: 800; padding: 2px 8px; border-radius: 4px; margin-bottom: 4px;">
            ${meta.icon} ${meta.title}
          </div>
          <div style="font-size: 12px; font-weight: 600; color: ${meta.text}; margin-bottom: 4px;">
            ${sec.callout.english}
          </div>
          <div dir="rtl" class="font-arabic" style="font-size: 11.5px; color: ${meta.text}; line-height: 1.5;">
            ${sec.callout.arabic}
          </div>
        </div>
      `;
    }

    // Section Visual Diagram
    let visualHtml = '';
    if (sec.sectionVisual) {
      const v = sec.sectionVisual;
      let diagramContent = '';

      if ((v.visualType === 'process' || v.visualType === 'flowchart') && v.steps) {
        diagramContent = `
          <div style="display: flex; flex-direction: column; gap: 8px; margin-top: 8px;">
            ${v.steps.map((s, sIdx) => `
              <div style="border: 1px solid #cbd5e1; border-radius: 8px; padding: 8px 12px; background: #ffffff; display: flex; gap: 10px; align-items: flex-start;">
                <div style="background: #059669; color: white; border-radius: 50%; width: 22px; height: 22px; font-size: 11px; display: flex; align-items: center; justify-content: center; font-weight: bold; shrink-0; margin-top: 2px;">
                  ${s.stepNumber || sIdx + 1}
                </div>
                <div style="flex: 1;">
                  <div style="display: flex; justify-content: space-between; align-items: center;">
                    <span style="font-weight: 700; font-size: 12px; color: #0f172a;">${s.title}</span>
                    ${s.badge ? `<span style="font-size: 9px; font-weight: bold; background: #d1fae5; color: #065f46; padding: 1px 6px; border-radius: 8px;">${s.badge}</span>` : ''}
                  </div>
                  <div dir="rtl" class="font-arabic" style="font-size: 11px; color: #059669; font-weight: 600; margin-top: 1px;">
                    ${s.arabicTitle}
                  </div>
                  <div style="font-size: 11px; color: #334155; margin-top: 3px; line-height: 1.4;">
                    ${s.description}
                  </div>
                  <div dir="rtl" class="font-arabic" style="font-size: 11px; color: #475569; margin-top: 2px; line-height: 1.4;">
                    ${s.arabicDescription}
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        `;
      } else if (v.visualType === 'comparison-table' && v.comparisonTable) {
        diagramContent = `
          <table style="width: 100%; border-collapse: collapse; margin-top: 8px; font-size: 11px;">
            <thead>
              <tr style="background: #fef08a;">
                ${v.comparisonTable.headers.map((h, i) => `
                  <th style="padding: 7px 10px; border: 1px solid #cbd5e1; text-align: left; color: #713f12; font-weight: 800;">
                    <div>${h}</div>
                    ${v.comparisonTable?.headersArabic?.[i] ? `<div dir="rtl" class="font-arabic" style="font-size: 10px; font-weight: normal; color: #854d0e;">${v.comparisonTable.headersArabic[i]}</div>` : ''}
                  </th>
                `).join('')}
              </tr>
            </thead>
            <tbody>
              ${v.comparisonTable.rows.map((r, rIdx) => `
                <tr style="background: ${rIdx % 2 === 0 ? '#ffffff' : '#f8fafc'};">
                  <td style="padding: 6px 10px; border: 1px solid #cbd5e1; font-weight: bold; color: #0f172a; width: 22%;">
                    <div>${r.criteria}</div>
                    <div dir="rtl" class="font-arabic" style="font-size: 10px; font-weight: normal; color: #64748b;">${r.criteriaArabic}</div>
                  </td>
                  ${r.values.map((val, vi) => `
                    <td style="padding: 6px 10px; border: 1px solid #cbd5e1; color: #1e293b; line-height: 1.45;">
                      <div style="font-weight: 500;">${val}</div>
                      ${r.valuesArabic?.[vi] ? `<div dir="rtl" class="font-arabic" style="font-size: 10.5px; color: #0369a1; margin-top: 3px;">${r.valuesArabic[vi]}</div>` : ''}
                    </td>
                  `).join('')}
                </tr>
              `).join('')}
            </tbody>
          </table>
        `;
      } else if (v.visualType === 'timeline' && v.timeline) {
        diagramContent = `
          <div style="border-left: 3px solid #f59e0b; margin-left: 10px; padding-left: 14px; margin-top: 8px;">
            ${v.timeline.map(t => `
              <div style="margin-bottom: 10px;">
                <div style="display: flex; gap: 6px; align-items: center;">
                  <span style="background: #fef3c7; color: #92400e; font-size: 10px; font-weight: bold; padding: 1px 6px; border-radius: 4px;">${t.phase}</span>
                  <span dir="rtl" class="font-arabic" style="font-size: 10px; color: #b45309;">${t.phaseArabic}</span>
                </div>
                <div style="font-weight: bold; font-size: 12px; color: #0f172a; margin-top: 2px;">${t.title}</div>
                <div dir="rtl" class="font-arabic" style="font-size: 11px; color: #475569;">${t.arabicTitle}</div>
                <div style="font-size: 11px; color: #334155; line-height: 1.4;">${t.details}</div>
                <div dir="rtl" class="font-arabic" style="font-size: 11px; color: #64748b; line-height: 1.4;">${t.arabicDetails}</div>
              </div>
            `).join('')}
          </div>
        `;
      }

      visualHtml = `
        <div class="card avoid-break" style="margin: 12px 0; background: #fafafa; border: 1.5px solid #cbd5e1; border-radius: 12px; padding: 12px; box-shadow: 0 1px 3px rgba(0,0,0,0.02);">
          <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #e2e8f0; padding-bottom: 6px;">
            <span style="font-size: 10px; font-weight: 800; text-transform: uppercase; background: #e0e7ff; color: #3730a3; padding: 2px 8px; border-radius: 4px;">
              📊 Academic Diagram: ${v.title}
            </span>
            <span dir="rtl" class="font-arabic" style="font-size: 11px; color: #4338ca; font-weight: bold;">
              ${v.titleArabic}
            </span>
          </div>
          <div style="font-size: 11px; color: #475569; margin-top: 4px;">${v.description}</div>
          ${diagramContent}
        </div>
      `;
    }

    // Concepts Rendering
    const conceptsHtml = sec.concepts?.map(c => {
      // Concept Callout Sticker if present
      let conceptCalloutHtml = '';
      if (c.callout) {
        const meta = getStickerMeta(c.callout.stickerType);
        conceptCalloutHtml = `
          <div style="margin-top: 8px; background: ${meta.bg}; border: 1px dashed ${meta.border}; border-radius: 8px; padding: 8px 10px;">
            <div style="display: inline-block; background: ${meta.tapeBg}; color: ${meta.tapeText}; font-size: 9.5px; font-weight: 800; padding: 1px 6px; border-radius: 3px; margin-bottom: 3px;">
              ${meta.icon} ${meta.title}
            </div>
            <div style="font-size: 11.5px; font-weight: 600; color: ${meta.text};">
              ${c.callout.english}
            </div>
            <div dir="rtl" class="font-arabic" style="font-size: 11px; color: ${meta.text}; margin-top: 2px;">
              ${c.callout.arabic}
            </div>
          </div>
        `;
      }

      // Bilingual Point Pairs
      let pointPairsHtml = '';
      if (c.pointPairs && c.pointPairs.length > 0) {
        pointPairsHtml = `
          <div style="margin-top: 8px; padding-top: 8px; border-top: 1px dashed #e2e8f0;">
            <div style="font-size: 10px; font-weight: 700; text-transform: uppercase; color: #64748b; margin-bottom: 4px;">
              Bilingual Sub-Points & Cascades:
            </div>
            ${c.pointPairs.map(pp => `
              <div style="margin-bottom: 6px; padding: 6px 8px; background: #f8fafc; border-radius: 6px; border: 1px solid #e2e8f0;">
                <div style="font-size: 11px; font-weight: 600; color: #1e293b; line-height: 1.4;">
                  <strong style="color: #2563eb;">• English: </strong> ${pp.englishPoint}
                </div>
                <div dir="rtl" class="font-arabic" style="font-size: 11px; color: #0369a1; margin-top: 3px; line-height: 1.45;">
                  <strong>الشرح بالعربي: </strong> ${pp.arabicExplanation}
                </div>
              </div>
            `).join('')}
          </div>
        `;
      }

      return `
        <div class="card avoid-break" style="margin-bottom: 12px; border: 1.5px solid #cbd5e1; border-radius: 12px; background: #ffffff; padding: 12px; box-shadow: 0 1px 3px rgba(0,0,0,0.02);">
          <div style="display: flex; justify-content: space-between; align-items: baseline; border-bottom: 1px solid #f1f5f9; padding-bottom: 4px; margin-bottom: 8px;">
            <div style="font-weight: 800; font-size: 13.5px; color: #0f172a;">
              <span style="font-size: 9px; font-weight: 800; text-transform: uppercase; background: #fef08a; color: #713f12; padding: 2px 6px; border-radius: 4px; margin-right: 6px;">
                ${c.type}
              </span>
              ${c.term}
            </div>
            <div dir="rtl" class="font-arabic" style="font-weight: 700; font-size: 13.5px; color: #2563eb;">
              ${c.termArabic}
            </div>
          </div>

          <!-- English Point (Source First) -->
          <div style="margin-bottom: 6px;">
            <div style="font-size: 10px; font-weight: 800; text-transform: uppercase; color: #2563eb; margin-bottom: 2px; letter-spacing: 0.03em;">
              English point:
            </div>
            <div style="font-size: 12px; color: #1e293b; line-height: 1.5; font-weight: 500;">
              ${c.englishContent}
            </div>
          </div>

          <!-- Simplified Professor-Style Arabic Explanation (Immediately underneath) -->
          <div dir="rtl" class="font-arabic" style="background: #f0f9ff; border: 1px solid #bae6fd; border-radius: 8px; padding: 8px 10px; margin-bottom: 6px;">
            <div style="font-size: 10px; font-weight: bold; color: #0284c7; margin-bottom: 2px;">
              الشرح بالعربي:
            </div>
            <div style="font-size: 12px; color: #0f172a; line-height: 1.55;">
              ${c.arabicExplanation}
            </div>
          </div>

          ${pointPairsHtml}
          ${conceptCalloutHtml}

          <!-- Clinical Correlation -->
          ${c.clinicalCorrelation ? `
            <div style="margin-top: 8px; padding: 6px 10px; background: #fff1f2; border: 1px solid #fecdd3; border-radius: 8px; font-size: 11px;">
              <div style="font-weight: 800; color: #9f1239; font-size: 9.5px; text-transform: uppercase; margin-bottom: 2px;">
                🏥 Clinical Correlation / التطبيق السريري
              </div>
              <div style="color: #4c0519; margin-bottom: 2px;">${c.clinicalCorrelation.english}</div>
              <div dir="rtl" class="font-arabic" style="color: #881337;">${c.clinicalCorrelation.arabic}</div>
            </div>
          ` : ''}
        </div>
      `;
    }).join('') || '';

    return `
      <section class="avoid-break" style="margin-bottom: 24px;">
        <div style="border-bottom: 2px solid #0f172a; padding-bottom: 6px; margin-bottom: 10px;">
          <div style="display: flex; justify-content: space-between; align-items: baseline;">
            <h2 style="font-size: 16px; font-weight: 800; color: #0f172a; margin: 0; font-family: 'Kalam', 'Plus Jakarta Sans', sans-serif;">
              Section ${sec.sectionNumber}: ${sec.title}
            </h2>
            <div dir="rtl" class="font-arabic" style="font-size: 15px; font-weight: 700; color: #2563eb;">
              ${sec.titleArabic}
            </div>
          </div>
        </div>

        <div style="margin-bottom: 10px; font-size: 12px; color: #334155; line-height: 1.5; background: #f8fafc; border-radius: 8px; padding: 8px 12px; border: 1px solid #e2e8f0;">
          <p style="margin: 0 0 4px 0;"><strong>English Overview:</strong> ${sec.overview}</p>
          <p dir="rtl" class="font-arabic" style="color: #475569; margin: 0;"><strong>ملخص تمهيدي بالعربية:</strong> ${sec.overviewArabic}</p>
        </div>

        ${sectionCalloutHtml}
        ${visualHtml}
        ${conceptsHtml}
      </section>
    `;
  }).join('') || '';

  // Render glossary
  const glossaryHtml = notes.glossary && notes.glossary.length > 0 ? `
    <section class="avoid-break" style="margin-top: 24px; border-top: 2px solid #0f172a; padding-top: 12px;">
      <h3 style="font-size: 15px; font-weight: 800; color: #0f172a; margin: 0 0 10px 0; font-family: 'Kalam', sans-serif;">
        📖 High-Yield Terminology Index & Glossary (معجم المصطلحات الأكاديمية)
      </h3>
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px;">
        ${notes.glossary.map(g => `
          <div style="border: 1px solid #cbd5e1; border-radius: 8px; padding: 8px 10px; background: #ffffff;">
            <div style="display: flex; justify-content: space-between; font-weight: 800; font-size: 11.5px; margin-bottom: 3px;">
              <span style="color: #0f172a;">${g.term}</span>
              <span dir="rtl" class="font-arabic" style="color: #2563eb;">${g.termArabic}</span>
            </div>
            <div style="font-size: 10.5px; color: #334155; line-height: 1.4;">${g.definition}</div>
            <div dir="rtl" class="font-arabic" style="font-size: 10.5px; color: #475569; margin-top: 3px; line-height: 1.4;">${g.definitionArabic}</div>
          </div>
        `).join('')}
      </div>
    </section>
  ` : '';

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>${safeTitle} — Study Notes</title>
  <style>
    @page {
      size: A4 portrait;
      margin: 10mm 12mm 10mm 12mm;
    }
    * {
      box-sizing: border-box;
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }
    body {
      font-family: 'Plus Jakarta Sans', system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
      margin: 0;
      padding: 16px;
      color: #0f172a;
      background: #faf8f5;
      font-size: 12px;
      line-height: 1.45;
    }
    .font-arabic {
      font-family: 'IBM Plex Sans Arabic', 'Tajawal', 'Plus Jakarta Sans', sans-serif;
    }
    .font-handwritten {
      font-family: 'Kalam', 'Patrick Hand', cursive, sans-serif;
    }
    .avoid-break, .card {
      page-break-inside: avoid !important;
      break-inside: avoid !important;
    }
    .header-banner {
      border-bottom: 2.5px solid #0f172a;
      padding-bottom: 10px;
      margin-bottom: 14px;
    }
    .header-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 6px;
    }
    .university-badge {
      font-size: 10px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: #713f12;
      background: #fef08a;
      border: 1px solid #fde047;
      padding: 3px 8px;
      border-radius: 4px;
    }
    .meta-tags {
      font-size: 10px;
      color: #64748b;
    }
    h1 {
      font-size: 20px;
      font-weight: 800;
      margin: 4px 0 2px 0;
      color: #0f172a;
      font-family: 'Kalam', 'Plus Jakarta Sans', sans-serif;
      line-height: 1.25;
    }
    .title-arabic {
      font-size: 17px;
      font-weight: 700;
      color: #2563eb;
      margin-bottom: 6px;
    }
    .source-info {
      font-size: 10px;
      color: #64748b;
      margin-top: 4px;
    }
    @media print {
      body {
        padding: 0;
        background: #ffffff !important;
      }
      .no-print {
        display: none !important;
      }
    }
  </style>
</head>
<body>
  <div class="header-banner">
    <div class="header-top">
      <span class="university-badge">STUDY AI • UNIVERSITY STUDY HANDOUT</span>
      <span class="meta-tags">
        ${domain} • ${studyTime} min study • Level: ${level} • ${dateStr}
      </span>
    </div>
    <h1>${safeTitle}</h1>
    <div dir="rtl" class="font-arabic title-arabic">${safeTitleArabic}</div>
    <div class="source-info">
      <strong>Source Document:</strong> ${sourceFile} | <strong>Fidelity:</strong> 100% Preserved from Original Lecture Source
    </div>
  </div>

  <!-- Executive Overview -->
  <div class="card avoid-break" style="background: #ffffff; border: 1.5px solid #cbd5e1; border-radius: 10px; padding: 12px; margin-bottom: 14px; box-shadow: 0 1px 3px rgba(0,0,0,0.02);">
    <div style="font-size: 10px; font-weight: 800; text-transform: uppercase; color: #475569; margin-bottom: 4px;">
      Executive Overview & Core Theme
    </div>
    <div style="font-size: 12px; color: #1e293b; line-height: 1.55; margin-bottom: 6px; font-weight: 500;">
      <strong style="color: #2563eb;">English point: </strong>${notes.overview?.english || ''}
    </div>
    <div dir="rtl" class="font-arabic" style="font-size: 12px; color: #0369a1; background: #eff6ff; padding: 8px 12px; border-radius: 6px; line-height: 1.55;">
      <strong>الشرح بالعربي: </strong>${notes.overview?.arabic || ''}
    </div>
  </div>

  <!-- High-Yield Pearls -->
  <div style="margin-bottom: 16px;">
    <h3 style="font-size: 13px; font-weight: 800; text-transform: uppercase; color: #0f172a; margin-bottom: 8px; font-family: 'Kalam', sans-serif;">
      ⭐ High-Yield Key Points & Board Exam Takeaways
    </h3>
    ${highYieldHtml}
  </div>

  <!-- Structured Sections -->
  ${sectionsHtml}

  <!-- Glossary -->
  ${glossaryHtml}

  <footer style="margin-top: 24px; padding-top: 8px; border-top: 1px solid #cbd5e1; display: flex; justify-content: space-between; font-size: 9.5px; color: #64748b;">
    <span>Study AI — Verified University Medical & Scientific Notes</span>
    <span>Source fidelity strictly preserved • Bilingual English/Arabic teaching</span>
    <span>Generated: ${dateStr}</span>
  </footer>
</body>
</html>
  `;
}

/**
 * Builds the inner DOM node specifically for html2pdf conversion.
 * Avoids <html> inside <div> parsing quirks and offscreen coordinate clipping.
 */
function buildRenderableContainer(notes: StudyNotesData): HTMLElement {
  const fullHtml = generateUniversityHandoutHtml(notes);

  const container = document.createElement('div');
  container.id = 'temp-pdf-export-container';
  
  // Position in visible space for canvas capture
  container.style.position = 'absolute';
  container.style.top = '0px';
  container.style.left = '0px';
  container.style.width = '794px';
  container.style.minHeight = '1123px';
  container.style.backgroundColor = '#ffffff';
  container.style.color = '#0f172a';
  container.style.zIndex = '9999';
  container.style.visibility = 'visible';
  container.style.opacity = '1';
  container.style.pointerEvents = 'none';
  container.style.overflow = 'visible';

  // Extract body content and style elements from generated HTML
  const parser = new DOMParser();
  const doc = parser.parseFromString(fullHtml, 'text/html');

  // Copy stylesheets & styles
  const styles = doc.querySelectorAll('style, link[rel="stylesheet"]');
  styles.forEach(s => container.appendChild(s.cloneNode(true)));

  // Copy body children
  while (doc.body.firstChild) {
    container.appendChild(doc.body.firstChild);
  }

  return container;
}


/**
 * Directly downloads the study notes as a cleanly formatted .pdf file using html2pdf.js
 */
export async function downloadStudyNotesPdfFile(notes: StudyNotesData): Promise<void> {
  let container: HTMLElement | null = null;

  try {
    // 1. إنشاء الحاوية المجهزة وتحميلها في الـ DOM
    container = buildRenderableContainer(notes);
    document.body.appendChild(container);

    // 2. انتظار تحميل الخطوط والصور لضمان عدم ظهور صفحات فارغة
    if (document.fonts && document.fonts.ready) {
      await document.fonts.ready;
    }
    await new Promise((resolve) => setTimeout(resolve, 500));

    // 3. إعداد اسم الملف والمواصفات المطلوبة
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
        windowWidth: 794,
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

    // 4. استدعاء html2pdf والحفظ
    const worker = (html2pdf() as any).set(opt).from(container);
    await worker.save();
  } catch (error) {
    console.error('Failed to export PDF:', error);
  } finally {
    // 5. التنظيف وإزالة العنصر المؤقت من الـ DOM
    if (container && document.body.contains(container)) {
      document.body.removeChild(container);
    }
  }
}


/**
 * Native print trigger with full styling, perfect Arabic typography, and automatic print dialog.
 * Students can choose "Save as PDF" which produces 100% crisp vector typography.
 */
export function openPrintableHandout(notes: StudyNotesData): void {
  // If we are in the main window, window.print() will use @media print defined in index.css
  window.print();
}
