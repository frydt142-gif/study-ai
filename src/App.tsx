import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { UploadSection } from './components/UploadSection';
import { AnalyzingState } from './components/AnalyzingState';
import { NotesView } from './components/NotesView';
import { StudyNotesData, SummaryLevel } from './types/study';
import { ProcessedFile } from './utils/fileParser';
import { 
  MOCK_INFLAMMATION_STUDY_NOTES,
  MOCK_CARDIOLOGY_STUDY_NOTES, 
  MOCK_BIOCHEM_STUDY_NOTES, 
  MOCK_PHARM_STUDY_NOTES 
} from './data/sampleLectures';
import { AlertCircle, RefreshCw, Flame, Heart, Dna, Pill } from 'lucide-react';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('study_ai_theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const [notes, setNotes] = useState<StudyNotesData | null>(() => {
    if (typeof window !== 'undefined') {
      const saved = sessionStorage.getItem('study_ai_active_notes');
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch {
          return null;
        }
      }
    }
    return null;
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [loadingMeta, setLoadingMeta] = useState<{
    fileName?: string;
    summaryLevel: SummaryLevel;
    enableSmartVisuals: boolean;
  }>({
    summaryLevel: 'detailed',
    enableSmartVisuals: true
  });
  const [error, setError] = useState<string | null>(null);
  const [isHighDemandError, setIsHighDemandError] = useState<boolean>(false);
  const [lastPayload, setLastPayload] = useState<{
    fileData?: ProcessedFile;
    lectureText?: string;
    summaryLevel: SummaryLevel;
    enableSmartVisuals: boolean;
    presetTopic?: string;
  } | null>(null);

  // Sync dark mode class with root html
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('study_ai_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('study_ai_theme', 'light');
    }
  }, [darkMode]);

  // Persist notes to sessionStorage for seamless refresh
  useEffect(() => {
    if (notes) {
      sessionStorage.setItem('study_ai_active_notes', JSON.stringify(notes));
    } else {
      sessionStorage.removeItem('study_ai_active_notes');
    }
  }, [notes]);

  const handleGenerate = async (payload: {
    fileData?: ProcessedFile;
    lectureText?: string;
    summaryLevel: SummaryLevel;
    enableSmartVisuals: boolean;
    presetTopic?: string;
  }) => {
    setError(null);
    setIsHighDemandError(false);
    setIsLoading(true);
    setLastPayload(payload);
    setLoadingMeta({
      fileName: payload.fileData?.fileName,
      summaryLevel: payload.summaryLevel,
      enableSmartVisuals: payload.enableSmartVisuals
    });

    try {
      const response = await fetch('/api/generate-notes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          fileData: payload.fileData,
          lectureText: payload.lectureText,
          summaryLevel: payload.summaryLevel,
          enableSmartVisuals: payload.enableSmartVisuals,
          presetTopic: payload.presetTopic
        })
      });

      if (!response.ok) {
        const errJson = await response.json().catch(() => ({}));
        let errMsg = errJson.error || `Server responded with status ${response.status}`;
        
        // Sanitize in case backend returned stringified JSON error
        if (typeof errMsg === 'string' && errMsg.startsWith('{') && errMsg.endsWith('}')) {
          try {
            const parsed = JSON.parse(errMsg);
            if (parsed?.error?.message) {
              errMsg = parsed.error.message;
            }
          } catch {}
        }

        const is503 = response.status === 503 || errJson.isHighDemand || 
          errMsg.toLowerCase().includes('high demand') || 
          errMsg.toLowerCase().includes('503') || 
          errMsg.toLowerCase().includes('unavailable');

        setIsHighDemandError(is503);
        throw new Error(errMsg);
      }

      const data: StudyNotesData = await response.json();
      setNotes(data);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err: any) {
      console.error('Error generating notes:', err);
      let message = err.message || 'Failed to generate study notes. Please check your network or try again.';
      if (message.startsWith('{') && message.endsWith('}')) {
        try {
          const parsed = JSON.parse(message);
          if (parsed?.error?.message) message = parsed.error.message;
        } catch {}
      }
      setError(message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleNewSummary = () => {
    setNotes(null);
    setError(null);
    setIsHighDemandError(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePrintPdf = () => {
    window.print();
  };

  const handleLoadDemo = (type: 'inflammation' | 'cardio' | 'biochem' | 'pharm' = 'inflammation') => {
    if (type === 'inflammation') {
      setNotes(MOCK_INFLAMMATION_STUDY_NOTES);
    } else if (type === 'biochem') {
      setNotes(MOCK_BIOCHEM_STUDY_NOTES);
    } else if (type === 'pharm') {
      setNotes(MOCK_PHARM_STUDY_NOTES);
    } else {
      setNotes(MOCK_CARDIOLOGY_STUDY_NOTES);
    }
    setError(null);
    setIsHighDemandError(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors">
      {/* Top Navbar */}
      <Navbar
        darkMode={darkMode}
        onToggleDarkMode={() => setDarkMode(!darkMode)}
        hasNotes={Boolean(notes)}
        onNewSummary={handleNewSummary}
        onPrintPdf={handlePrintPdf}
      />

      {/* Error Alert Bar */}
      {error && (
        <div className="max-w-4xl mx-auto w-full px-4 pt-4 no-print">
          <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/90 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/60 text-amber-950 dark:text-amber-200 shadow-sm space-y-3">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-400 shrink-0">
                  <AlertCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm sm:text-base text-amber-950 dark:text-amber-100">
                    {isHighDemandError 
                      ? 'AI Model Traffic Spike (503 Service Unavailable)' 
                      : 'Error Generating Study Notes'}
                  </h4>
                  <p className="mt-1 text-xs sm:text-sm text-amber-800/90 dark:text-amber-300/90 leading-relaxed">
                    {error}
                  </p>
                  {isHighDemandError && (
                    <p className="mt-1 text-xs text-amber-700 dark:text-amber-400">
                      Demand spikes are usually transient. We automatically attempted retries across alternate model channels.
                    </p>
                  )}
                </div>
              </div>
              <button
                onClick={() => { setError(null); setIsHighDemandError(false); }}
                className="p-1 rounded text-amber-600 dark:text-amber-400 hover:text-amber-900 dark:hover:text-amber-100 cursor-pointer text-xs"
              >
                Dismiss
              </button>
            </div>

            {/* Quick Actions */}
            <div className="pt-2 border-t border-amber-200/70 dark:border-amber-900/50 flex flex-wrap items-center gap-2 sm:gap-3">
              {lastPayload && (
                <button
                  onClick={() => handleGenerate(lastPayload)}
                  disabled={isLoading}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-amber-600 hover:bg-amber-700 text-white shadow-sm cursor-pointer transition-colors"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Retry Analysis Now</span>
                </button>
              )}

              <span className="text-xs text-amber-700/80 dark:text-amber-400/80 font-medium">
                Or explore immediate verified study notes:
              </span>

              <button
                onClick={() => handleLoadDemo('inflammation')}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-semibold bg-amber-200/80 hover:bg-amber-300/80 dark:bg-amber-800/60 dark:hover:bg-amber-800/90 text-amber-950 dark:text-amber-100 cursor-pointer transition-colors"
              >
                <Flame className="w-3 h-3 text-orange-600" />
                <span>Pathology (Inflammation)</span>
              </button>

              <button
                onClick={() => handleLoadDemo('cardio')}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium bg-amber-100 hover:bg-amber-200/80 dark:bg-amber-900/40 dark:hover:bg-amber-900/70 text-amber-900 dark:text-amber-200 cursor-pointer transition-colors"
              >
                <Heart className="w-3 h-3 text-rose-500" />
                <span>Cardiology (MI)</span>
              </button>

              <button
                onClick={() => handleLoadDemo('biochem')}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium bg-amber-100 hover:bg-amber-200/80 dark:bg-amber-900/40 dark:hover:bg-amber-900/70 text-amber-900 dark:text-amber-200 cursor-pointer transition-colors"
              >
                <Dna className="w-3 h-3 text-indigo-500" />
                <span>Biochemistry (Krebs)</span>
              </button>

              <button
                onClick={() => handleLoadDemo('pharm')}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium bg-amber-100 hover:bg-amber-200/80 dark:bg-amber-900/40 dark:hover:bg-amber-900/70 text-amber-900 dark:text-amber-200 cursor-pointer transition-colors"
              >
                <Pill className="w-3 h-3 text-emerald-500" />
                <span>Pharmacology (ANS)</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Content views */}
      <div className="flex-1">
        {isLoading ? (
          <AnalyzingState
            fileName={loadingMeta.fileName}
            summaryLevel={loadingMeta.summaryLevel}
            enableSmartVisuals={loadingMeta.enableSmartVisuals}
          />
        ) : notes ? (
          <NotesView
            notes={notes}
            onNewSummary={handleNewSummary}
            onPrint={handlePrintPdf}
          />
        ) : (
          <UploadSection
            onGenerate={handleGenerate}
            isLoading={isLoading}
          />
        )}
      </div>

      {/* Footer */}
      <footer className="mt-auto border-t border-slate-200/80 dark:border-slate-800 py-6 px-4 text-center text-xs text-slate-500 dark:text-slate-400 no-print">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-700 dark:text-slate-300">Study AI</span>
            <span>—</span>
            <span>Intelligent Medical & Scientific Lecture Study Assistant</span>
          </div>
          <div className="flex items-center gap-4 text-slate-400 dark:text-slate-500">
            <span>Powered by Gemini 3.8</span>
            <span>•</span>
            <span>Bilingual English & Arabic</span>
            <span>•</span>
            <span>Semantic Smart Visuals</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
