import React, { useState, useRef } from 'react';
import { 
  UploadCloud, 
  FileText, 
  Check, 
  Sparkles, 
  Zap, 
  Layers, 
  BookOpen, 
  Microscope, 
  Eye, 
  X, 
  FileCheck,
  ChevronRight,
  Info
} from 'lucide-react';
import { SummaryLevel } from '../types/study';
import { ProcessedFile, processUploadedFile } from '../utils/fileParser';
import { SAMPLE_LECTURE_TOPICS } from '../data/sampleLectures';

interface UploadSectionProps {
  onGenerate: (payload: {
    fileData?: ProcessedFile;
    lectureText?: string;
    summaryLevel: SummaryLevel;
    enableSmartVisuals: boolean;
    presetTopic?: string;
  }) => void;
  isLoading: boolean;
}

export const UploadSection: React.FC<UploadSectionProps> = ({ onGenerate, isLoading }) => {
  const [dragActive, setDragActive] = useState(false);
  const [selectedFile, setSelectedFile] = useState<ProcessedFile | null>(null);
  const [parsingFile, setParsingFile] = useState(false);
  const [summaryLevel, setSummaryLevel] = useState<SummaryLevel>('detailed');
  const [enableSmartVisuals, setEnableSmartVisuals] = useState(true);
  const [activeTab, setActiveTab] = useState<'upload' | 'text' | 'samples'>('upload');
  const [lectureText, setLectureText] = useState('');
  const [selectedSampleId, setSelectedSampleId] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      await handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      await handleFile(e.target.files[0]);
    }
  };

  const handleFile = async (file: File) => {
    setParsingFile(true);
    try {
      const processed = await processUploadedFile(file);
      setSelectedFile(processed);
      setSelectedSampleId(null);
    } catch (err) {
      console.error('Failed to parse file:', err);
      alert('Could not read this file. Please make sure it is a valid PDF, PPTX, DOCX, or TXT file.');
    } finally {
      setParsingFile(false);
    }
  };

  const handleSelectSample = (sampleId: string) => {
    const sample = SAMPLE_LECTURE_TOPICS.find(s => s.id === sampleId);
    if (!sample) return;
    setSelectedSampleId(sampleId);
    setSelectedFile({
      fileName: sample.fileName,
      fileSizeFormatted: '1.4 MB',
      fileType: 'application/pdf',
      extractedText: sample.previewText,
      estimatedPagesOrSlides: 18
    });
  };

  const handleSubmit = () => {
    if (isLoading) return;

    if (activeTab === 'text') {
      if (!lectureText.trim()) {
        alert('Please paste or type lecture text first.');
        return;
      }
      onGenerate({
        lectureText,
        summaryLevel,
        enableSmartVisuals
      });
      return;
    }

    if (!selectedFile) {
      alert('Please upload a lecture file (PDF, PPTX, DOCX, TXT) or select a sample lecture.');
      return;
    }

    onGenerate({
      fileData: selectedFile,
      summaryLevel,
      enableSmartVisuals,
      presetTopic: selectedSampleId || undefined
    });
  };

  const levels: { id: SummaryLevel; label: string; desc: string; icon: any; badge: string }[] = [
    {
      id: 'quick',
      label: 'Quick Review',
      desc: 'Core definitions & high-yield pearls. Fast revision.',
      icon: Zap,
      badge: '~5 min'
    },
    {
      id: 'standard',
      label: 'Standard',
      desc: 'Balanced sections, concepts, and primary pathways.',
      icon: BookOpen,
      badge: '~12 min'
    },
    {
      id: 'detailed',
      label: 'Detailed Study',
      desc: 'In-depth mechanisms, clinical correlations & classifications.',
      icon: Layers,
      badge: '~20 min'
    },
    {
      id: 'deep-study',
      label: 'Deep Study (Board Exam)',
      desc: 'Exhaustive medical analysis, step-by-step cascades & diagnostic criteria.',
      icon: Microscope,
      badge: '~35 min'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12 space-y-8">
      {/* Hero Title */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/70 text-blue-700 dark:text-blue-300 border border-blue-200/70 dark:border-blue-800">
          <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
          <span>AI Study Assistant for University Students</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Transform Lectures into <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-500 bg-clip-text text-transparent">
            Structured Bilingual Study Notes
          </span>
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Upload your medical or scientific lecture in PDF, PPTX, DOCX, or TXT format.
          Study AI analyzes the complete source to build clear English concepts with simplified Arabic explanations and smart diagrams.
        </p>
      </div>

      {/* Main Card */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/90 dark:border-slate-800 shadow-sm p-5 sm:p-8 space-y-8">
        
        {/* Step 1: Input source tabs */}
        <div className="space-y-4">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center font-bold">1</span>
              <span>Select or Upload Lecture</span>
            </h3>

            {/* Tabs */}
            <div className="flex items-center p-1 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-medium">
              <button
                onClick={() => setActiveTab('upload')}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  activeTab === 'upload' 
                    ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-300 shadow-xs font-semibold' 
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                }`}
              >
                Upload File
              </button>
              <button
                onClick={() => setActiveTab('samples')}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer flex items-center gap-1 ${
                  activeTab === 'samples' 
                    ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-300 shadow-xs font-semibold' 
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                }`}
              >
                <span>Sample Lectures</span>
                <span className="px-1 py-0.2 rounded text-[10px] bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300">Ready</span>
              </button>
              <button
                onClick={() => setActiveTab('text')}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  activeTab === 'text' 
                    ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-300 shadow-xs font-semibold' 
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                }`}
              >
                Paste Text
              </button>
            </div>
          </div>

          {/* Tab 1: File Upload */}
          {activeTab === 'upload' && (
            <div>
              {!selectedFile ? (
                <div
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                  onClick={() => fileInputRef.current?.click()}
                  className={`border-2 border-dashed rounded-2xl p-8 sm:p-12 text-center transition-all cursor-pointer select-none ${
                    dragActive
                      ? 'border-blue-500 bg-blue-50/60 dark:bg-blue-950/30 scale-[0.99]'
                      : 'border-slate-300 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-500 bg-slate-50/50 dark:bg-slate-950/40'
                  }`}
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".pdf,.pptx,.docx,.txt"
                    onChange={handleFileChange}
                    className="hidden"
                    id="lecture-file-input"
                  />

                  <div className="w-14 h-14 mx-auto rounded-2xl bg-blue-50 dark:bg-blue-950/80 border border-blue-200 dark:border-blue-800 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4 shadow-xs">
                    {parsingFile ? (
                      <div className="w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <UploadCloud className="w-7 h-7" />
                    )}
                  </div>

                  <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                    {parsingFile ? 'Analyzing & extracting document...' : 'Drop your lecture here, or browse'}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-sm mx-auto">
                    Supports <strong className="text-slate-700 dark:text-slate-200">PDF, PPTX (PowerPoint), DOCX (Word)</strong>, or <strong className="text-slate-700 dark:text-slate-200">TXT</strong> files up to 50MB.
                  </p>

                  <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-red-50 text-red-700 dark:bg-red-950/60 dark:text-red-300 border border-red-200 dark:border-red-900">
                      PDF Slides
                    </span>
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-orange-50 text-orange-700 dark:bg-orange-950/60 dark:text-orange-300 border border-orange-200 dark:border-orange-900">
                      PPTX Deck
                    </span>
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 border border-blue-200 dark:border-blue-900">
                      DOCX Notes
                    </span>
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                      TXT Transcript
                    </span>
                  </div>
                </div>
              ) : (
                /* File Selected Card */
                <div className="p-4 sm:p-5 rounded-2xl border border-blue-200 dark:border-blue-800/80 bg-blue-50/40 dark:bg-blue-950/30 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                      <FileCheck className="w-6 h-6" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white truncate">
                          {selectedFile.fileName}
                        </h4>
                        <span className="shrink-0 text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800">
                          Ready
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                        {selectedFile.fileSizeFormatted} • ~{selectedFile.estimatedPagesOrSlides} pages/slides • Complete lecture queued
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setSelectedFile(null);
                      setSelectedSampleId(null);
                    }}
                    className="p-2 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                    title="Remove file"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Tab 2: Sample Lectures */}
          {activeTab === 'samples' && (
            <div className="space-y-3">
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Click any pre-loaded lecture to test Study AI instantly:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {SAMPLE_LECTURE_TOPICS.map(sample => {
                  const isChosen = selectedSampleId === sample.id;
                  return (
                    <div
                      key={sample.id}
                      onClick={() => handleSelectSample(sample.id)}
                      className={`p-4 rounded-xl border text-left cursor-pointer transition-all ${
                        isChosen
                          ? 'border-blue-600 bg-blue-50/60 dark:bg-blue-950/40 ring-2 ring-blue-500/20 shadow-xs'
                          : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-slate-300 dark:hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                          {sample.domain}
                        </span>
                        {isChosen && <Check className="w-4 h-4 text-blue-600" />}
                      </div>
                      <h4 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white line-clamp-2">
                        {sample.title}
                      </h4>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                        {sample.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Tab 3: Paste Text */}
          {activeTab === 'text' && (
            <div className="space-y-2">
              <textarea
                value={lectureText}
                onChange={e => setLectureText(e.target.value)}
                placeholder="Paste the full lecture transcript, slide notes, or medical syllabus here..."
                rows={6}
                className="w-full p-4 text-xs sm:text-sm rounded-2xl border border-slate-300 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-950/40 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                {lectureText.length > 0 ? `${lectureText.split(/\s+/).filter(Boolean).length} words entered` : 'Supports unformatted text, slide transcripts, and notes.'}
              </p>
            </div>
          )}
        </div>

        {/* Step 2: Summary Level Selector */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center font-bold">2</span>
              <span>Choose Summary Level</span>
            </h3>
            <span className="text-xs text-slate-500 dark:text-slate-400">
              Depth of scientific synthesis
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {levels.map(lvl => {
              const Icon = lvl.icon;
              const isSelected = summaryLevel === lvl.id;

              return (
                <div
                  key={lvl.id}
                  onClick={() => setSummaryLevel(lvl.id)}
                  className={`p-4 rounded-xl border text-left cursor-pointer transition-all ${
                    isSelected
                      ? 'border-blue-600 bg-blue-50/50 dark:bg-blue-950/40 shadow-xs ring-2 ring-blue-500/20'
                      : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className={`p-1.5 rounded-lg ${isSelected ? 'bg-blue-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-semibold text-slate-400 dark:text-slate-500">
                      {lvl.badge}
                    </span>
                  </div>

                  <h4 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">
                    {lvl.label}
                  </h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 leading-snug">
                    {lvl.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Step 3: Smart Visuals Toggle */}
        <div className="p-4 sm:p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/60 flex items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/80 border border-indigo-200 dark:border-indigo-800 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shrink-0">
              <Eye className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                  Smart Visuals
                </h4>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-indigo-100 dark:bg-indigo-950 text-indigo-800 dark:text-indigo-300">
                  Semantic
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">
                When enabled, AI determines if a concept benefits from a <strong>Flowchart, Comparison Matrix, Timeline, or Structural Diagram</strong>. Never includes decorative fluff.
              </p>
            </div>
          </div>

          {/* Toggle button */}
          <button
            id="toggle-smart-visuals"
            type="button"
            role="switch"
            aria-checked={enableSmartVisuals}
            onClick={() => setEnableSmartVisuals(!enableSmartVisuals)}
            className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
              enableSmartVisuals ? 'bg-blue-600' : 'bg-slate-300 dark:bg-slate-700'
            }`}
          >
            <span
              className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${
                enableSmartVisuals ? 'translate-x-5' : 'translate-x-0'
              }`}
            />
          </button>
        </div>

        {/* Generate Button */}
        <div className="pt-2">
          <button
            id="btn-generate-notes"
            onClick={handleSubmit}
            disabled={isLoading || (activeTab === 'upload' && !selectedFile) || (activeTab === 'text' && !lectureText.trim())}
            className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-600 hover:from-blue-700 hover:via-indigo-700 hover:to-teal-700 text-white font-bold text-sm sm:text-base shadow-lg shadow-blue-500/25 hover:shadow-blue-500/35 transition-all transform active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>AI Analyzing Complete Lecture...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5" />
                <span>Generate Structured Study Notes</span>
                <ChevronRight className="w-4 h-4" />
              </>
            )}
          </button>

          <p className="text-[11px] text-center text-slate-400 dark:text-slate-500 mt-2.5">
            Full lecture scanned • No hallucinated facts • English with pedagogical Arabic explanations
          </p>
        </div>

      </div>
    </div>
  );
};
