import React, { useEffect, useState } from 'react';
import { 
  Sparkles, 
  FileSearch, 
  Dna, 
  Languages, 
  Network, 
  CheckCircle2, 
  BookCheck,
  BrainCircuit
} from 'lucide-react';
import { SummaryLevel } from '../types/study';

interface AnalyzingStateProps {
  fileName?: string;
  summaryLevel: SummaryLevel;
  enableSmartVisuals: boolean;
}

export const AnalyzingState: React.FC<AnalyzingStateProps> = ({
  fileName,
  summaryLevel,
  enableSmartVisuals
}) => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      title: 'Ingesting & Scanning Source',
      arabic: 'مسح وقراءة المحاضرة بالكامل واستخراج النصوص والشرائح',
      icon: FileSearch,
      desc: `Reading ${fileName || 'lecture file'} from beginning to end without omissions.`
    },
    {
      title: 'Dissecting Scientific Mechanisms',
      arabic: 'تحليل وتفكيك الآليات الحيوية والمفاهيم الطبية الرئيسية',
      icon: Dna,
      desc: 'Identifying classifications, cellular pathways, causes, and clinical correlations.'
    },
    {
      title: 'Formulating Bilingual Explanations',
      arabic: 'صياغة المحتوى بالإنجليزية مع الشرح التوضيحي باللغة العربية',
      icon: Languages,
      desc: 'English concept first, followed by clear pedagogical Arabic keeping key terms visible.'
    },
    {
      title: enableSmartVisuals ? 'Synthesizing Semantic Visuals' : 'Organizing High-Yield Notes',
      arabic: enableSmartVisuals ? 'بناء المخططات التوضيحية (تدفق، مقارنات، جداول زمنية)' : 'ترتيب النقاط الهامة واللآلئ السريرية',
      icon: enableSmartVisuals ? Network : BrainCircuit,
      desc: enableSmartVisuals ? 'Structuring flowcharts, comparison matrices & clinical timelines.' : 'Structuring sections and concept hierarchy.'
    },
    {
      title: 'Finalizing University Study Guide',
      arabic: 'مراجعة الملاحظات النهائية وقاموس المصطلحات الأكاديمية',
      icon: BookCheck,
      desc: `Applying ${summaryLevel} depth and compiling exam pearls.`
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep(prev => (prev < steps.length - 1 ? prev + 1 : prev));
    }, 2800);
    return () => clearInterval(timer);
  }, [steps.length]);

  return (
    <div className="max-w-2xl mx-auto px-4 py-16 text-center space-y-8 animate-fade-in">
      {/* Central Pulsing Brain/Shield Icon */}
      <div className="relative w-24 h-24 mx-auto">
        <div className="absolute inset-0 rounded-3xl bg-blue-500/20 dark:bg-blue-500/30 animate-ping" />
        <div className="relative w-24 h-24 rounded-3xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-teal-500 flex items-center justify-center text-white shadow-xl shadow-blue-500/25">
          <BrainCircuit className="w-12 h-12 text-white animate-pulse" />
        </div>
      </div>

      {/* Title */}
      <div className="space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/70 text-blue-700 dark:text-blue-300 border border-blue-200/60 dark:border-blue-800">
          <Sparkles className="w-3.5 h-3.5 animate-spin" />
          <span>Gemini 3.8 Medical Engine Active</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
          Analyzing Entire Lecture
        </h2>
        <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto">
          Examining the full source to preserve essential definitions, pathways, and clinical nuances.
        </p>
      </div>

      {/* Progress Card */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 text-left space-y-5 shadow-sm">
        {steps.map((step, idx) => {
          const StepIcon = step.icon;
          const isDone = idx < currentStep;
          const isCurrent = idx === currentStep;

          return (
            <div 
              key={idx} 
              className={`flex items-start gap-3.5 transition-all duration-300 ${
                isCurrent 
                  ? 'opacity-100 scale-[1.01]' 
                  : isDone 
                  ? 'opacity-80' 
                  : 'opacity-40'
              }`}
            >
              <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                isDone 
                  ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300' 
                  : isCurrent 
                  ? 'bg-blue-600 text-white shadow-sm ring-2 ring-blue-500/30' 
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-400'
              }`}>
                {isDone ? (
                  <CheckCircle2 className="w-4 h-4" />
                ) : isCurrent ? (
                  <StepIcon className="w-4 h-4 animate-pulse" />
                ) : (
                  <span className="text-xs font-bold">{idx + 1}</span>
                )}
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between">
                  <h4 className={`text-sm font-semibold ${isCurrent ? 'text-blue-600 dark:text-blue-400' : 'text-slate-800 dark:text-slate-200'}`}>
                    {step.title}
                  </h4>
                  {isCurrent && (
                    <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 animate-pulse">
                      In progress...
                    </span>
                  )}
                </div>
                <p dir="rtl" className="font-arabic text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  {step.arabic}
                </p>
                <p className="text-[11px] text-slate-400 dark:text-slate-500 mt-0.5">
                  {step.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="text-xs text-slate-400 dark:text-slate-500 flex items-center justify-center gap-2">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        <span>Synthesizing structured notes • No hallucinated facts</span>
      </div>
    </div>
  );
};
