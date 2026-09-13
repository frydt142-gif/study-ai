import JSZip from 'jszip';

export interface ProcessedFile {
  fileName: string;
  fileSizeFormatted: string;
  fileType: string;
  base64Data?: string;
  extractedText?: string;
  estimatedPagesOrSlides?: number;
}

export function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export async function processUploadedFile(file: File): Promise<ProcessedFile> {
  const fileName = file.name;
  const fileExt = fileName.split('.').pop()?.toLowerCase() || '';
  const sizeFormatted = formatFileSize(file.size);

  if (fileExt === 'txt' || fileExt === 'md' || fileExt === 'csv' || fileExt === 'tsv') {
    const text = await file.text();
    return {
      fileName,
      fileSizeFormatted: sizeFormatted,
      fileType: 'text/plain',
      extractedText: text,
      estimatedPagesOrSlides: Math.max(1, Math.ceil(text.length / 2500))
    };
  }

  if (fileExt === 'pdf') {
    const arrayBuffer = await file.arrayBuffer();
    const bytes = new Uint8Array(arrayBuffer);
    let binary = '';
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    const base64Data = btoa(binary);

    return {
      fileName,
      fileSizeFormatted: sizeFormatted,
      fileType: 'application/pdf',
      base64Data,
      estimatedPagesOrSlides: Math.max(1, Math.ceil(file.size / 60000))
    };
  }

  if (fileExt === 'docx') {
    try {
      const zip = new JSZip();
      const content = await zip.loadAsync(file);
      const docXml = await content.file('word/document.xml')?.async('text');
      
      if (docXml) {
        // Strip XML tags and clean spacing
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(docXml, 'text/xml');
        const paragraphs = xmlDoc.getElementsByTagName('w:p');
        const lines: string[] = [];
        for (let i = 0; i < paragraphs.length; i++) {
          const text = paragraphs[i].textContent?.trim();
          if (text) lines.push(text);
        }
        const fullText = lines.join('\n\n');
        return {
          fileName,
          fileSizeFormatted: sizeFormatted,
          fileType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
          extractedText: fullText || 'Document content extracted.',
          estimatedPagesOrSlides: Math.max(1, Math.ceil(lines.length / 25))
        };
      }
    } catch (err) {
      console.warn('DOCX extraction fallback:', err);
    }

    // Fallback: read text
    const text = await file.text();
    return {
      fileName,
      fileSizeFormatted: sizeFormatted,
      fileType: 'application/docx',
      extractedText: text.replace(/[^\x20-\x7E\t\n\r]/g, ' ').slice(0, 50000),
      estimatedPagesOrSlides: 5
    };
  }

  if (fileExt === 'pptx') {
    try {
      const zip = new JSZip();
      const content = await zip.loadAsync(file);
      const slideFiles = Object.keys(content.files).filter(name =>
        name.startsWith('ppt/slides/slide') && name.endsWith('.xml')
      );

      // Sort slide filenames naturally (slide1, slide2, ..., slide10)
      slideFiles.sort((a, b) => {
        const numA = parseInt(a.replace(/[^0-9]/g, ''), 10) || 0;
        const numB = parseInt(b.replace(/[^0-9]/g, ''), 10) || 0;
        return numA - numB;
      });

      const slideTexts: string[] = [];
      const parser = new DOMParser();

      for (let i = 0; i < slideFiles.length; i++) {
        const slideXml = await content.file(slideFiles[i])?.async('text');
        if (slideXml) {
          const xmlDoc = parser.parseFromString(slideXml, 'text/xml');
          const texts = xmlDoc.getElementsByTagName('a:t');
          const words: string[] = [];
          for (let j = 0; j < texts.length; j++) {
            const val = texts[j].textContent?.trim();
            if (val) words.push(val);
          }
          if (words.length > 0) {
            slideTexts.push(`[Slide ${i + 1}]\n${words.join(' ')}`);
          }
        }
      }

      const fullText = slideTexts.join('\n\n---\n\n');
      return {
        fileName,
        fileSizeFormatted: sizeFormatted,
        fileType: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
        extractedText: fullText || 'Slide presentation content.',
        estimatedPagesOrSlides: slideFiles.length || 10
      };
    } catch (err) {
      console.warn('PPTX extraction fallback:', err);
    }
  }

  // General text fallback
  const text = await file.text();
  return {
    fileName,
    fileSizeFormatted: sizeFormatted,
    fileType: file.type || 'text/plain',
    extractedText: text.replace(/[^\x20-\x7E\t\n\r]/g, ' ').slice(0, 40000),
    estimatedPagesOrSlides: 3
  };
}
