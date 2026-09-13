import React, { useState } from 'react';
import { 
  BookMarked, 
  Volume2, 
  Copy, 
  Check, 
  Stethoscope, 
  ListChecks, 
  Sparkles,
  GitCommit,
  GraduationCap
} from 'lucide-react';
import { StudyConcept } from '../types/study';
import { VisualRenderer } from './VisualRenderer';

interface ConceptCardProps {
  concept: StudyConcept;
  viewMode: 'bilingual' | 'english-only' | 'arabic-only';
}

export const ConceptCard: React.FC<ConceptCardProps> = ({ concept, viewMode }) => {
  const [copied, setCopied] = useState(false);
  const [speaking, setSpeaking] = useState(false);

  const handleCopy = () => {
    const textToCopy = `${concept.term} (${concept.termArabic})\n\nEnglish point:\n${concept.englishContent}\n\nالشرح بالعربي:\n${concept.arabicExplanation}\n\nKey Points:\n${concept.keyPoints.join('\n')}`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSpeak = () => {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    if (speaking) {
      setSpeaking(false);
      return;
    }

    const utterance = new SpeechSynthesisUtterance(`${concept.term}. ${concept.englishContent}`);
    utterance.lang = 'en-US';
    utterance.rate = 0.95;
    utterance.onend = () => setSpeaking(false);
    utterance.onerror = () => setSpeaking(false);
    setSpeaking(true);
    window.speechSynthesis.speak(utterance);
  };

  const getTypeStyle = (type: string) => {
    switch (type) {
      case 'definition':
        return 'bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 border-blue-200 dark:border-blue-800';
      case 'mechanism':
        return 'bg-purple-50 text-purple-700 dark:bg-purple-950/60 dark:text-purple-300 border-purple-200 dark:border-purple-800';
      case 'classification':
        return 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800';
      case 'clinical':
        return 'bg-rose-50 text-rose-700 dark:bg-rose-950/60 dark:text-rose-300 border-rose-200 dark:border-rose-800';
      case 'cause':
        return 'bg-amber-50 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300 border-amber-200 dark:border-amber-800';
      case 'comparison':
        return 'bg-cyan-50 text-cyan-700 dark:bg-cyan-950/60 dark:text-cyan-300 border-cyan-200 dark:border-cyan-800';
      case 'process':
        return 'bg-teal-50 text-teal-700 dark:bg-teal-950/60 dark:text-teal-300 border-teal-200 dark:border-teal-800';
      default:
        return 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border-slate-200 dark:border-slate-700';
    }
  };

  const showEnglish = viewMode === 'bilingual' || viewMode === 'english-only';
  const showArabic = viewMode === 'bilingual' || viewMode === 'arabic-only';

  return (
    <article 
      id={`concept-${concept.id}`}
      className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs hover:shadow-sm transition-all overflow-hidden page-break-inside-avoid"
    >
      {/* Concept Header */}
      <div className="p-4 sm:p-5 border-b border-slate-100 dark:border-slate-800 flex items-start justify-between gap-3 bg-slate-50/60 dark:bg-slate-900/50">
        <div className="space-y-1">
          <div className="flex items-center gap-2 flex-wrap">
            <span className={`text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full border ${getTypeStyle(concept.type)}`}>
              {concept.type}
            </span>
          </div>

          <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <span>{concept.term}</span>
          </h4>

          {showArabic && (
            <p dir="rtl" className="font-arabic text-sm font-semibold text-blue-700 dark:text-blue-400">
              {concept.termArabic}
            </p>
          )}
        </div>

        {/* Action icons */}
        <div className="flex items-center gap-1 shrink-0 no-print">
          <button
            onClick={handleSpeak}
            title={speaking ? "Stop reading" : "Listen to medical pronunciation"}
            className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
              speaking 
                ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300' 
                : 'text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            <Volume2 className="w-4 h-4" />
          </button>

          <button
            onClick={handleCopy}
            title="Copy concept"
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="p-4 sm:p-5 space-y-4">
        {/* 1. BILINGUAL PRIMARY TEACHING UNIT */}
        <div className="space-y-3">
          {/* English point (Source content first) */}
          {showEnglish && (
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-bold text-blue-700 dark:text-blue-400 uppercase tracking-wide">
                <BookMarked className="w-3.5 h-3.5" />
                <span>English point:</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50/70 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800 text-slate-800 dark:text-slate-200 text-sm sm:text-base leading-relaxed font-normal">
                {concept.englishContent}
              </div>
            </div>
          )}

          {/* Simplified professor-style Arabic explanation (Immediately underneath) */}
          {showArabic && (
            <div 
              dir="rtl" 
              className="p-4 rounded-xl bg-gradient-to-br from-blue-50/70 to-indigo-50/40 dark:from-slate-800/80 dark:to-blue-950/30 border border-blue-100/90 dark:border-blue-900/50 space-y-1.5 shadow-2xs"
            >
              <div className="flex items-center gap-1.5 text-xs font-bold text-blue-800 dark:text-blue-300">
                <Sparkles className="w-3.5 h-3.5" />
                <span className="font-arabic">الشرح بالعربي:</span>
                <span className="text-[10px] font-normal text-slate-500 dark:text-slate-400 mr-2">
                  (شرح مبسط وواضح بأسلوب أستاذ جامعي مع الحفاظ على المصطلحات بالإنجليزية)
                </span>
              </div>
              <p className="font-arabic text-sm sm:text-base text-slate-800 dark:text-slate-200 leading-relaxed font-normal">
                {concept.arabicExplanation}
              </p>
            </div>
          )}
        </div>

        {/* 2. GRANULAR POINT PAIRS (If available: subpoints with English point + Arabic explanation) */}
        {concept.pointPairs && concept.pointPairs.length > 0 && (
          <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80 space-y-3">
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider">
              <GraduationCap className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>Sub-Points & Detailed Mechanisms (Bilingual Breakdown)</span>
            </div>

            <div className="space-y-3">
              {concept.pointPairs.map((pair, idx) => (
                <div 
                  key={idx} 
                  className="rounded-xl border border-slate-200/80 dark:border-slate-800 overflow-hidden bg-slate-50/40 dark:bg-slate-900/40"
                >
                  {showEnglish && (
                    <div className="p-3 border-b border-slate-100 dark:border-slate-800/80">
                      <div className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                        English point:
                      </div>
                      <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-medium">
                        {pair.englishPoint}
                      </p>
                    </div>
                  )}

                  {showArabic && (
                    <div dir="rtl" className="p-3 bg-blue-50/40 dark:bg-slate-800/60">
                      <div className="text-[11px] font-bold text-blue-700 dark:text-blue-300 font-arabic mb-1">
                        الشرح بالعربي:
                      </div>
                      <p className="font-arabic text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                        {pair.arabicExplanation}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 3. FALLBACK KEY POINTS (If pointPairs not available) */}
        {(!concept.pointPairs || concept.pointPairs.length === 0) && concept.keyPoints && concept.keyPoints.length > 0 && (
          <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80">
            <div className="flex items-center gap-1 text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
              <ListChecks className="w-3.5 h-3.5 text-emerald-500" />
              <span>Key Points & Core Takeaways</span>
            </div>
            <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              {concept.keyPoints.map((point, pIdx) => (
                <li key={pIdx} className="flex items-start gap-2">
                  <GitCommit className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-1" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* 4. SMART VISUAL AT CONCEPT LEVEL (If attached directly to concept) */}
        {concept.smartVisual && (
          <div className="pt-2">
            <VisualRenderer visual={concept.smartVisual} />
          </div>
        )}

        {/* 4.5. HANDWRITTEN CALLOUT STICKER (⭐ Important, 🧠 Remember, ⚠️ Don't Confuse, 💡 Key Point) */}
        {concept.callout && (
          <div className="pt-1">
            <div className={`p-3.5 rounded-xl border relative shadow-2xs ${
              concept.callout.stickerType === 'important'
                ? 'bg-amber-50/80 dark:bg-amber-950/40 border-amber-300 dark:border-amber-800 text-amber-950 dark:text-amber-100'
                : concept.callout.stickerType === 'remember'
                ? 'bg-sky-50/80 dark:bg-sky-950/40 border-sky-300 dark:border-sky-800 text-sky-950 dark:text-sky-100'
                : concept.callout.stickerType === 'dont-confuse'
                ? 'bg-rose-50/80 dark:bg-rose-950/40 border-rose-300 dark:border-rose-800 text-rose-950 dark:text-rose-100'
                : 'bg-emerald-50/80 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-800 text-emerald-950 dark:text-emerald-100'
            }`}>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-base">
                  {concept.callout.stickerType === 'important' ? '⭐' :
                   concept.callout.stickerType === 'remember' ? '🧠' :
                   concept.callout.stickerType === 'dont-confuse' ? '⚠️' : '💡'}
                </span>
                <span className="text-xs font-bold uppercase tracking-wider font-handwritten text-slate-800 dark:text-slate-200">
                  {concept.callout.stickerType === 'important' ? 'Important • هام جداً' :
                   concept.callout.stickerType === 'remember' ? 'Remember • تذكر دائماً' :
                   concept.callout.stickerType === 'dont-confuse' ? "Don't Confuse • لا تخلط" : 'Key Point • نقطة جوهرية'}
                </span>
              </div>
              {showEnglish && (
                <p className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white leading-relaxed">
                  {concept.callout.english}
                </p>
              )}
              {showArabic && (
                <p dir="rtl" className="font-arabic text-xs sm:text-sm text-slate-800 dark:text-slate-200 mt-1.5 leading-relaxed pt-1.5 border-t border-black/10 dark:border-white/10">
                  {concept.callout.arabic}
                </p>
              )}
            </div>
          </div>
        )}

        {/* 5. CLINICAL CORRELATION (If available) */}
        {concept.clinicalCorrelation && (
          <div className="p-3.5 rounded-xl bg-rose-50/70 dark:bg-rose-950/30 border border-rose-200/70 dark:border-rose-900/40 text-xs sm:text-sm space-y-2">
            <div className="flex items-center gap-1.5 text-rose-800 dark:text-rose-300 font-bold text-xs">
              <Stethoscope className="w-4 h-4" />
              <span>Clinical Correlation / Practical Application</span>
            </div>
            {showEnglish && (
              <p className="text-slate-800 dark:text-slate-200 leading-relaxed">
                {concept.clinicalCorrelation.english}
              </p>
            )}
            {showArabic && (
              <p dir="rtl" className="font-arabic text-rose-900 dark:text-rose-200 leading-relaxed font-normal pt-1.5 border-t border-rose-200/50 dark:border-rose-900/40">
                {concept.clinicalCorrelation.arabic}
              </p>
            )}
          </div>
        )}
      </div>
    </article>
  );
};
