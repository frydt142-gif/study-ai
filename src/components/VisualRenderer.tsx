import React, { useState } from 'react';
import { 
  GitBranch, 
  ArrowRight, 
  ArrowDown, 
  Layers, 
  Table as TableIcon, 
  Clock, 
  Network, 
  Activity, 
  AlertCircle,
  Maximize2,
  Minimize2,
  CheckCircle2,
  Microscope,
  Compass
} from 'lucide-react';
import { SemanticVisual } from '../types/study';

interface VisualRendererProps {
  visual: SemanticVisual;
}

export const VisualRenderer: React.FC<VisualRendererProps> = ({ visual }) => {
  const [expanded, setExpanded] = useState(false);
  const [activeStepIndex, setActiveStepIndex] = useState<number | null>(null);

  const getVisualIcon = () => {
    switch (visual.visualType) {
      case 'process':
      case 'flowchart':
        return <GitBranch className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />;
      case 'comparison-table':
        return <TableIcon className="w-4 h-4 text-blue-600 dark:text-blue-400" />;
      case 'timeline':
        return <Clock className="w-4 h-4 text-amber-600 dark:text-amber-400" />;
      case 'hierarchy':
        return <Network className="w-4 h-4 text-purple-600 dark:text-purple-400" />;
      case 'structure-diagram':
        return <Layers className="w-4 h-4 text-teal-600 dark:text-teal-400" />;
      case 'scientific-illustration':
        return <Microscope className="w-4 h-4 text-rose-600 dark:text-rose-400" />;
      default:
        return <Activity className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />;
    }
  };

  const getVisualTypeBadge = () => {
    switch (visual.visualType) {
      case 'process':
      case 'flowchart':
        return 'Process Flowchart';
      case 'comparison-table':
        return 'Comparison Matrix';
      case 'timeline':
        return 'Clinical Timeline';
      case 'hierarchy':
        return 'Classification Tree';
      case 'structure-diagram':
        return 'Structural Diagram';
      case 'scientific-illustration':
        return 'Scientific Illustration & Schematic';
      default:
        return 'Smart Visual';
    }
  };

  return (
    <div 
      id={`visual-card-${visual.id}`}
      className="my-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-gradient-to-b from-white to-slate-50/50 dark:from-slate-900 dark:to-slate-950 shadow-sm overflow-hidden transition-all duration-200"
    >
      {/* Header bar */}
      <div className="p-4 sm:p-5 border-b border-slate-100 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-3 bg-slate-50/70 dark:bg-slate-900/60">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center shadow-xs">
            {getVisualIcon()}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-200/70 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                {getVisualTypeBadge()}
              </span>
            </div>
            <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mt-0.5">
              {visual.title}
            </h4>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setExpanded(!expanded)}
            className="p-1.5 rounded-lg text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 hover:bg-slate-200/60 dark:hover:bg-slate-800 transition-colors cursor-pointer text-xs flex items-center gap-1"
            title={expanded ? "Collapse visual" : "Expand visual"}
          >
            {expanded ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
            <span className="hidden sm:inline">{expanded ? "Compact" : "Expand"}</span>
          </button>
        </div>
      </div>

      {/* Subtitles & Descriptions (Bilingual) */}
      <div className="px-4 sm:px-6 pt-3 pb-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 space-y-1">
        <p className="font-medium text-slate-700 dark:text-slate-200">
          {visual.description}
        </p>
        <p dir="rtl" className="font-arabic text-slate-500 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">
          {visual.arabicDescription}
        </p>
      </div>

      {/* Main Diagram Area */}
      <div className="p-4 sm:p-6 overflow-x-auto">
        {/* 1. PROCESS / FLOWCHART */}
        {(visual.visualType === 'process' || visual.visualType === 'flowchart') && visual.steps && (
          <div className="space-y-4">
            <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3">
              {visual.steps.map((step, idx) => {
                const isSelected = activeStepIndex === idx;
                const isLast = idx === (visual.steps?.length || 0) - 1;

                return (
                  <React.Fragment key={step.stepNumber}>
                    <div 
                      onClick={() => setActiveStepIndex(isSelected ? null : idx)}
                      className={`flex-1 min-w-[200px] p-4 rounded-xl border transition-all cursor-pointer ${
                        isSelected 
                          ? 'border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/30 shadow-md ring-2 ring-emerald-500/20' 
                          : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-slate-300 dark:hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="w-6 h-6 rounded-full bg-emerald-600 text-white text-xs font-bold flex items-center justify-center">
                          {step.stepNumber}
                        </span>
                        {step.badge && (
                          <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-300">
                            {step.badge}
                          </span>
                        )}
                      </div>

                      <h5 className="font-semibold text-xs sm:text-sm text-slate-900 dark:text-white leading-snug">
                        {step.title}
                      </h5>
                      <p dir="rtl" className="font-arabic text-xs text-slate-600 dark:text-slate-300 font-medium mt-1">
                        {step.arabicTitle}
                      </p>

                      {/* Expandable or detailed content */}
                      <div className="mt-2.5 pt-2.5 border-t border-slate-100 dark:border-slate-800/80 text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 space-y-1.5">
                        <p>{step.description}</p>
                        <p dir="rtl" className="font-arabic text-slate-500 dark:text-slate-400 leading-relaxed">
                          {step.arabicDescription}
                        </p>
                        {step.clinicalNote && (
                          <div className="p-1.5 rounded bg-amber-50 dark:bg-amber-950/40 border border-amber-200/60 dark:border-amber-900/50 text-amber-800 dark:text-amber-300 text-[10px]">
                            <strong>Clinical Pearl:</strong> {step.clinicalNote}
                          </div>
                        )}
                      </div>
                    </div>

                    {!isLast && (
                      <div className="hidden md:flex items-center justify-center text-slate-400 dark:text-slate-600 shrink-0">
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    )}
                    {!isLast && (
                      <div className="flex md:hidden items-center justify-center text-slate-400 dark:text-slate-600 py-1">
                        <ArrowDown className="w-4 h-4" />
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        )}

        {/* 2. COMPARISON TABLE */}
        {visual.visualType === 'comparison-table' && visual.comparisonTable && (
          <div className="rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden bg-white dark:bg-slate-900">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-100/90 dark:bg-slate-800/90 border-b border-slate-200 dark:border-slate-700">
                    {visual.comparisonTable.headers.map((hdr, hIdx) => {
                      const arabicHdr = visual.comparisonTable?.headersArabic?.[hIdx];
                      return (
                        <th 
                          key={hIdx} 
                          className="px-4 py-3 font-semibold text-slate-900 dark:text-white first:w-1/4"
                        >
                          <div>{hdr}</div>
                          {arabicHdr && (
                            <div dir="rtl" className="font-arabic text-[11px] font-normal text-slate-500 dark:text-slate-400 mt-0.5">
                              {arabicHdr}
                            </div>
                          )}
                        </th>
                      );
                    })}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {visual.comparisonTable.rows.map((row, rIdx) => (
                    <tr 
                      key={rIdx} 
                      className="hover:bg-slate-50/70 dark:hover:bg-slate-800/40 transition-colors"
                    >
                      <td className="px-4 py-3 font-semibold text-slate-800 dark:text-slate-200 bg-slate-50/40 dark:bg-slate-900/40">
                        <div>{row.criteria}</div>
                        <div dir="rtl" className="font-arabic text-xs font-normal text-slate-500 dark:text-slate-400 mt-0.5">
                          {row.criteriaArabic}
                        </div>
                      </td>
                      {row.values.map((val, vIdx) => {
                        const valArabic = row.valuesArabic?.[vIdx];
                        return (
                          <td key={vIdx} className="px-4 py-3 text-slate-700 dark:text-slate-300">
                            <div>{val}</div>
                            {valArabic && (
                              <div dir="rtl" className="font-arabic text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                                {valArabic}
                              </div>
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* 3. TIMELINE */}
        {visual.visualType === 'timeline' && visual.timeline && (
          <div className="relative pl-6 sm:pl-8 border-l-2 border-amber-300 dark:border-amber-700/60 ml-2 sm:ml-4 space-y-6 py-2">
            {visual.timeline.map((item, tIdx) => (
              <div key={tIdx} className="relative group">
                {/* Milestone Node */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white dark:bg-slate-900 border-2 border-amber-500 flex items-center justify-center shadow-xs">
                  <div className="w-2 h-2 rounded-full bg-amber-500 group-hover:scale-125 transition-transform" />
                </div>

                <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs hover:border-amber-300 dark:hover:border-amber-800/70 transition-colors">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950/70 text-amber-800 dark:text-amber-300">
                        {item.phase}
                      </span>
                      <span dir="rtl" className="font-arabic text-xs text-amber-700 dark:text-amber-400">
                        {item.phaseArabic}
                      </span>
                    </div>
                    {item.tag && (
                      <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700">
                        {item.tag}
                      </span>
                    )}
                  </div>

                  <h5 className="text-sm font-semibold text-slate-900 dark:text-white">
                    {item.title}
                  </h5>
                  <p dir="rtl" className="font-arabic text-xs font-medium text-slate-600 dark:text-slate-300 mt-0.5">
                    {item.arabicTitle}
                  </p>

                  <div className="mt-2 text-xs text-slate-600 dark:text-slate-400 space-y-1">
                    <p>{item.details}</p>
                    <p dir="rtl" className="font-arabic text-slate-500 dark:text-slate-400 leading-relaxed">
                      {item.arabicDetails}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 4. HIERARCHY / CONCEPT MAP */}
        {visual.visualType === 'hierarchy' && visual.hierarchy && (
          <div className="space-y-4">
            <div className="p-3.5 rounded-xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-900/60 text-center">
              <div className="text-xs uppercase font-bold text-purple-600 dark:text-purple-400 tracking-wider">
                Root System
              </div>
              <h4 className="text-base font-bold text-purple-950 dark:text-purple-100">
                {visual.hierarchy.rootTitle}
              </h4>
              <p dir="rtl" className="font-arabic text-xs text-purple-700 dark:text-purple-300 mt-0.5">
                {visual.hierarchy.rootTitleArabic}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {visual.hierarchy.categories.map((cat, cIdx) => (
                <div 
                  key={cIdx} 
                  className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900"
                >
                  <h5 className="font-bold text-sm text-slate-900 dark:text-white">
                    {cat.name}
                  </h5>
                  <p dir="rtl" className="font-arabic text-xs font-medium text-slate-500 dark:text-slate-400 mb-2">
                    {cat.nameArabic}
                  </p>
                  {cat.items && (
                    <ul className="space-y-2 mt-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                      {cat.items.map((it, itIdx) => (
                        <li key={itIdx} className="text-xs">
                          <span className="font-semibold text-slate-800 dark:text-slate-200">{it.title}</span>
                          <span dir="rtl" className="font-arabic text-slate-500 dark:text-slate-400 mr-1 block text-[11px]">
                            {it.arabicTitle}
                          </span>
                          <p className="text-slate-600 dark:text-slate-400 mt-0.5">{it.detail}</p>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 5. STRUCTURE DIAGRAM */}
        {visual.visualType === 'structure-diagram' && visual.structure && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {visual.structure.map((part, pIdx) => (
              <div 
                key={pIdx} 
                className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-teal-300 dark:hover:border-teal-800 transition-colors"
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-5 h-5 rounded-full bg-teal-100 dark:bg-teal-900/60 text-teal-700 dark:text-teal-300 flex items-center justify-center text-xs font-bold">
                    {pIdx + 1}
                  </div>
                  <div>
                    <h5 className="font-semibold text-xs sm:text-sm text-slate-900 dark:text-white">
                      {part.partName}
                    </h5>
                  </div>
                </div>

                <p dir="rtl" className="font-arabic text-xs text-teal-700 dark:text-teal-400 mb-2">
                  {part.partNameArabic}
                </p>

                <div className="text-xs text-slate-600 dark:text-slate-400 space-y-1 pt-2 border-t border-slate-100 dark:border-slate-800">
                  <p><strong className="text-slate-700 dark:text-slate-300">Function:</strong> {part.functionOrPathology}</p>
                  <p dir="rtl" className="font-arabic text-slate-500 dark:text-slate-400 leading-relaxed">
                    {part.functionArabic}
                  </p>
                  {part.significance && (
                    <p className="text-[11px] text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40 p-1.5 rounded mt-1">
                      <strong>Significance:</strong> {part.significance}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 6. SCIENTIFIC ILLUSTRATION & SCHEMATIC */}
        {visual.visualType === 'scientific-illustration' && visual.illustration && (
          <div className="space-y-4">
            {/* Header / Diagram Type Banner */}
            <div className="p-3 rounded-xl bg-gradient-to-r from-rose-50 to-orange-50 dark:from-rose-950/40 dark:to-orange-950/30 border border-rose-200/80 dark:border-rose-900/50 flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <Microscope className="w-4 h-4 text-rose-600 dark:text-rose-400" />
                <span className="text-xs font-bold text-rose-900 dark:text-rose-200">
                  {visual.illustration.title}
                </span>
              </div>
              <span dir="rtl" className="font-arabic text-xs font-semibold text-rose-700 dark:text-rose-300">
                {visual.illustration.titleArabic}
              </span>
            </div>

            {/* Summary Flow Sequence (if present) */}
            {visual.illustration.summaryFlow && visual.illustration.summaryFlow.length > 0 && (
              <div className="p-3 rounded-xl bg-slate-100/70 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700 flex flex-wrap items-center gap-2 text-xs">
                <span className="font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider text-[10px]">
                  Schematic Flow:
                </span>
                {visual.illustration.summaryFlow.map((step, sIdx) => (
                  <React.Fragment key={sIdx}>
                    <span className="px-2.5 py-1 rounded-lg bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-semibold border border-slate-200 dark:border-slate-800 shadow-2xs">
                      {step}
                    </span>
                    {sIdx < (visual.illustration?.summaryFlow?.length || 0) - 1 && (
                      <ArrowRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            )}

            {/* Labeled Component Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {visual.illustration.parts.map((part, pIdx) => (
                <div 
                  key={pIdx} 
                  className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-rose-300 dark:hover:border-rose-800/80 transition-all shadow-2xs"
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-rose-100 dark:bg-rose-950 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-900 flex items-center justify-center text-xs font-bold">
                        {part.calloutNumber || pIdx + 1}
                      </span>
                      <h5 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">
                        {part.partName}
                      </h5>
                    </div>
                  </div>

                  <p dir="rtl" className="font-arabic text-xs font-semibold text-rose-700 dark:text-rose-400 mb-2">
                    {part.partNameArabic}
                  </p>

                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 space-y-1.5">
                    <div>
                      <span className="font-semibold text-slate-700 dark:text-slate-300">Role / Action: </span>
                      <span>{part.roleOrMechanism}</span>
                    </div>
                    <div dir="rtl" className="font-arabic text-slate-500 dark:text-slate-400 leading-relaxed">
                      {part.roleArabic}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Clinical relevance footer */}
      {visual.clinicalRelevance && (
        <div className="px-4 sm:px-6 py-2.5 bg-blue-50/70 dark:bg-blue-950/40 border-t border-blue-100 dark:border-blue-900/50 flex items-start gap-2 text-xs text-blue-900 dark:text-blue-200">
          <AlertCircle className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
          <span>
            <strong className="font-semibold">Clinical & Practical Takeaway:</strong> {visual.clinicalRelevance}
          </span>
        </div>
      )}
    </div>
  );
};
