import React, { useState } from 'react';
import { 
  Printer, 
  Download,
  PlusCircle, 
  Search, 
  Languages, 
  Sparkles, 
  Clock, 
  BookOpen, 
  Layers, 
  Stethoscope, 
  Share2, 
  Check, 
  Bookmark, 
  HelpCircle,
  FileText,
  ChevronDown,
  ChevronUp,
  AlertTriangle,
  Lightbulb,
  Hash
} from 'lucide-react';
import { StudyNotesData } from '../types/study';
import { VisualRenderer } from './VisualRenderer';
import { ConceptCard } from './ConceptCard';
import { downloadStudyNotesPdfFile, openPrintableHandout } from '../utils/pdfExport';

interface NotesViewProps {
  notes: StudyNotesData;
  onNewSummary: () => void;
  onPrint?: () => void;
}

export const NotesView: React.FC<NotesViewProps> = ({ notes, onNewSummary, onPrint }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'bilingual' | 'english-only' | 'arabic-only'>('bilingual');
  const [activeSectionId, setActiveSectionId] = useState<string | null>(null);
  const [showGlossary, setShowGlossary] = useState(true);
  const [copiedLink, setCopiedLink] = useState(false);
  const [isExportingPdf, setIsExportingPdf] = useState(false);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handleDownloadPdf = async () => {
    try {
      setIsExportingPdf(true);
      await downloadStudyNotesPdfFile(notes);
    } catch (err) {
      console.error('Failed to generate PDF download, falling back to print handout:', err);
      openPrintableHandout(notes);
    } finally {
      setIsExportingPdf(false);
    }
  };

  const handlePrintHandout = () => {
    openPrintableHandout(notes);
  };

  // Filter sections and concepts by search query
  const filteredSections = notes.sections.map(section => {
    if (!searchQuery.trim()) return section;
    const q = searchQuery.toLowerCase();

    const titleMatches = 
      section.title.toLowerCase().includes(q) || 
      section.titleArabic.includes(q) ||
      section.overview.toLowerCase().includes(q);

    const matchingConcepts = section.concepts.filter(c => 
      c.term.toLowerCase().includes(q) ||
      c.termArabic.includes(q) ||
      c.englishContent.toLowerCase().includes(q) ||
      c.arabicExplanation.includes(q) ||
      c.keyPoints.some(kp => kp.toLowerCase().includes(q))
    );

    if (titleMatches || matchingConcepts.length > 0) {
      return {
        ...section,
        concepts: titleMatches ? section.concepts : matchingConcepts
      };
    }
    return null;
  }).filter(Boolean) as typeof notes.sections;

  const getTagBadge = (tag?: string) => {
    switch (tag) {
      case 'exam-favorite':
        return {
          icon: <Sparkles className="w-3 h-3 text-amber-500" />,
          label: 'Exam High-Yield',
          color: 'bg-amber-50 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300 border-amber-200 dark:border-amber-800'
        };
      case 'clinical-pearl':
        return {
          icon: <Stethoscope className="w-3 h-3 text-blue-500" />,
          label: 'Clinical Pearl',
          color: 'bg-blue-50 text-blue-800 dark:bg-blue-950/60 dark:text-blue-300 border-blue-200 dark:border-blue-800'
        };
      case 'red-flag':
        return {
          icon: <AlertTriangle className="w-3 h-3 text-rose-500" />,
          label: 'Red Flag / Complication',
          color: 'bg-rose-50 text-rose-800 dark:bg-rose-950/60 dark:text-rose-300 border-rose-200 dark:border-rose-800'
        };
      default:
        return {
          icon: <Lightbulb className="w-3 h-3 text-indigo-500" />,
          label: 'Key Takeaway',
          color: 'bg-indigo-50 text-indigo-800 dark:bg-indigo-950/60 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800'
        };
    }
  };

  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 print-page">
      
      {/* Top Banner / Breadcrumb & Controls */}
      <div className="flex flex-wrap items-center justify-between gap-3 no-print">
        <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
          <span className="px-2 py-0.5 rounded-full font-bold bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200/60 dark:border-blue-800">
            {notes.academicDomain}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" /> ~{notes.estimatedStudyTimeMinutes} min study
          </span>
          <span>•</span>
          <span className="capitalize">{notes.summaryLevel.replace('-', ' ')} Level</span>
        </div>

        {/* Floating actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleDownloadPdf}
            disabled={isExportingPdf}
            id="btn-download-pdf"
            title="Export and download complete multi-page PDF document"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white shadow-xs transition-all cursor-pointer"
          >
            {isExportingPdf ? (
              <>
                <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Exporting Complete PDF...</span>
              </>
            ) : (
              <>
                <Download className="w-3.5 h-3.5" />
                <span>Download PDF (.pdf)</span>
              </>
            )}
          </button>

          <button
            onClick={handlePrintHandout}
            id="btn-print-action"
            title="Open printable handout with crisp vector formatting"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print / Save as PDF</span>
          </button>

          <button
            onClick={handleShare}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors cursor-pointer"
          >
            {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
            <span>{copiedLink ? 'Copied' : 'Share'}</span>
          </button>

          <button
            onClick={onNewSummary}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white transition-colors cursor-pointer shadow-xs"
          >
            <PlusCircle className="w-3.5 h-3.5" />
            <span>New Lecture</span>
          </button>
        </div>
      </div>

      {/* Main Header Card */}
      <div className="p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm space-y-6">
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-900">
              {notes.academicDomain}
            </span>
            {notes.sourceFileName && (
              <span className="text-xs text-slate-400 dark:text-slate-500 truncate max-w-xs">
                Source: {notes.sourceFileName}
              </span>
            )}
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {notes.lectureTitle}
          </h1>

          <h2 dir="rtl" className="font-arabic text-xl sm:text-2xl font-bold text-blue-700 dark:text-blue-400">
            {notes.lectureTitleArabic}
          </h2>
        </div>

        {/* Overview Box (Bilingual) */}
        <div className="p-5 rounded-2xl bg-slate-50/70 dark:bg-slate-950/50 border border-slate-200/80 dark:border-slate-800 space-y-3">
          <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            <BookOpen className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span>Executive Lecture Overview</span>
          </div>
          <p className="text-sm sm:text-base text-slate-800 dark:text-slate-200 leading-relaxed font-normal">
            {notes.overview.english}
          </p>
          <div dir="rtl" className="pt-3 border-t border-slate-200/60 dark:border-slate-800">
            <p className="font-arabic text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              {notes.overview.arabic}
            </p>
          </div>
        </div>

        {/* Lecture Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
          <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 text-center">
            <div className="text-lg sm:text-xl font-bold text-blue-600 dark:text-blue-400">
              {notes.sections.length}
            </div>
            <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
              Core Sections
            </div>
          </div>

          <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 text-center">
            <div className="text-lg sm:text-xl font-bold text-emerald-600 dark:text-emerald-400">
              {notes.summaryStats.totalConcepts || notes.sections.reduce((acc, s) => acc + s.concepts.length, 0)}
            </div>
            <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
              Dissected Concepts
            </div>
          </div>

          <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 text-center">
            <div className="text-lg sm:text-xl font-bold text-purple-600 dark:text-purple-400">
              {notes.summaryStats.visualCount || notes.sections.filter(s => s.sectionVisual).length}
            </div>
            <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
              Smart Visuals
            </div>
          </div>

          <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 text-center">
            <div className="text-lg sm:text-xl font-bold text-amber-600 dark:text-amber-400">
              {notes.glossary.length}
            </div>
            <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
              Key Terminology
            </div>
          </div>
        </div>
      </div>

      {/* High Yield Key Points / Clinical Pearls Banner */}
      {notes.highYieldPoints && notes.highYieldPoints.length > 0 && (
        <div className="p-6 rounded-3xl border border-amber-200 dark:border-amber-900/60 bg-gradient-to-br from-amber-50/70 via-white to-amber-50/30 dark:from-amber-950/30 dark:via-slate-900 dark:to-amber-950/20 shadow-xs space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-amber-500 text-white flex items-center justify-center shadow-xs">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                High-Yield Takeaways & Exam Pearls
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Critical board-exam mechanisms and must-know facts from this lecture
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {notes.highYieldPoints.map((pt, idx) => {
              const badge = getTagBadge(pt.tag);
              return (
                <div 
                  key={pt.id || idx}
                  className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-amber-200/80 dark:border-amber-900/50 shadow-xs space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className={`inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${badge.color}`}>
                      {badge.icon}
                      <span>{badge.label}</span>
                    </span>
                    <span className="text-[10px] font-bold text-slate-400">#{idx + 1}</span>
                  </div>

                  <p className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 leading-snug">
                    {pt.english}
                  </p>

                  <p dir="rtl" className="font-arabic text-xs text-slate-600 dark:text-slate-300 leading-relaxed pt-2 border-t border-slate-100 dark:border-slate-800">
                    {pt.arabic}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Sticky Interactive Filter & Control Bar */}
      <div className="sticky top-16 z-20 p-3 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-sm space-y-3 no-print">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          {/* Search Input */}
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search concepts, terms..."
              className="w-full pl-9 pr-3 py-1.5 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* View mode toggle (Bilingual vs English vs Arabic) */}
          <div className="flex items-center gap-1 self-stretch sm:self-auto justify-center p-1 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-semibold">
            <button
              onClick={() => setViewMode('bilingual')}
              className={`px-3 py-1 rounded-lg transition-all cursor-pointer ${
                viewMode === 'bilingual' 
                  ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-300 shadow-xs' 
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              Bilingual (Eng + Ar)
            </button>
            <button
              onClick={() => setViewMode('english-only')}
              className={`px-3 py-1 rounded-lg transition-all cursor-pointer ${
                viewMode === 'english-only' 
                  ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-300 shadow-xs' 
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              English Only
            </button>
            <button
              onClick={() => setViewMode('arabic-only')}
              className={`px-3 py-1 rounded-lg transition-all cursor-pointer ${
                viewMode === 'arabic-only' 
                  ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-300 shadow-xs' 
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              Arabic (مع المصطلحات)
            </button>
          </div>
        </div>

        {/* Quick jump pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 shrink-0">
            Sections:
          </span>
          {notes.sections.map(sec => (
            <a
              key={sec.id}
              href={`#section-${sec.id}`}
              className="px-2.5 py-1 rounded-lg shrink-0 font-medium bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors"
            >
              {sec.sectionNumber}. {sec.title}
            </a>
          ))}
          <a
            href="#glossary-section"
            className="px-2.5 py-1 rounded-lg shrink-0 font-medium bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors"
          >
            Glossary ({notes.glossary.length})
          </a>
        </div>
      </div>

      {/* Main Sections Content */}
      <div className="space-y-12">
        {filteredSections.map(section => (
          <section 
            key={section.id} 
            id={`section-${section.id}`}
            className="space-y-6 pt-4 page-break-inside-avoid"
          >
            {/* Section Header */}
            <div className="border-b-2 border-slate-200 dark:border-slate-800 pb-4 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                <span className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-handwritten flex items-center justify-center font-bold text-xs">
                  {section.sectionNumber}
                </span>
                <span>Section {section.sectionNumber}</span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <h2 className="text-xl sm:text-2xl font-bold font-handwritten text-slate-900 dark:text-white">
                  {section.title}
                </h2>
                <h3 dir="rtl" className="font-arabic text-lg sm:text-xl font-bold text-blue-700 dark:text-blue-400">
                  {section.titleArabic}
                </h3>
              </div>

              {/* Section Overview */}
              <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 space-y-1 pt-1">
                <p>{section.overview}</p>
                <p dir="rtl" className="font-arabic text-slate-500 dark:text-slate-400">
                  {section.overviewArabic}
                </p>
              </div>

              {/* Section Callout Sticker if present */}
              {section.callout && (
                <div className={`mt-3 p-3.5 rounded-xl border relative shadow-2xs ${
                  section.callout.stickerType === 'important'
                    ? 'bg-amber-50/80 dark:bg-amber-950/40 border-amber-300 dark:border-amber-800 text-amber-950 dark:text-amber-100'
                    : section.callout.stickerType === 'remember'
                    ? 'bg-sky-50/80 dark:bg-sky-950/40 border-sky-300 dark:border-sky-800 text-sky-950 dark:text-sky-100'
                    : section.callout.stickerType === 'dont-confuse'
                    ? 'bg-rose-50/80 dark:bg-rose-950/40 border-rose-300 dark:border-rose-800 text-rose-950 dark:text-rose-100'
                    : 'bg-emerald-50/80 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-800 text-emerald-950 dark:text-emerald-100'
                }`}>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-base">
                      {section.callout.stickerType === 'important' ? '⭐' :
                       section.callout.stickerType === 'remember' ? '🧠' :
                       section.callout.stickerType === 'dont-confuse' ? '⚠️' : '💡'}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider font-handwritten text-slate-800 dark:text-slate-200">
                      {section.callout.stickerType === 'important' ? 'Section High-Yield Rule • قاعدة ذهبية' :
                       section.callout.stickerType === 'remember' ? 'Key Memory Trigger • تذكر دائماً' :
                       section.callout.stickerType === 'dont-confuse' ? "Exam Pitfall: Don't Confuse • فخ امتحاني" : 'Core Concept Takeaway • فكرة جوهرية'}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white leading-relaxed">
                    {section.callout.english}
                  </p>
                  <p dir="rtl" className="font-arabic text-xs sm:text-sm text-slate-800 dark:text-slate-200 mt-1.5 leading-relaxed pt-1.5 border-t border-black/10 dark:border-white/10">
                    {section.callout.arabic}
                  </p>
                </div>
              )}
            </div>

            {/* Smart Visual (Integrated naturally with the section) */}
            {section.sectionVisual && (
              <VisualRenderer visual={section.sectionVisual} />
            )}

            {/* Concepts Grid */}
            <div className="space-y-4">
              {section.concepts.map(concept => (
                <ConceptCard 
                  key={concept.id} 
                  concept={concept} 
                  viewMode={viewMode} 
                />
              ))}
            </div>
          </section>
        ))}

        {filteredSections.length === 0 && (
          <div className="text-center py-12 p-8 rounded-2xl border border-dashed border-slate-300 dark:border-slate-800 text-slate-500">
            <p>No concepts matching "{searchQuery}"</p>
            <button
              onClick={() => setSearchQuery('')}
              className="mt-2 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline cursor-pointer"
            >
              Clear search filter
            </button>
          </div>
        )}
      </div>

      {/* Medical Glossary Section */}
      {notes.glossary && notes.glossary.length > 0 && (
        <section 
          id="glossary-section"
          className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-sm space-y-6 page-break-inside-avoid"
        >
          <div 
            onClick={() => setShowGlossary(!showGlossary)}
            className="flex items-center justify-between cursor-pointer select-none"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-purple-50 dark:bg-purple-950/80 border border-purple-200 dark:border-purple-800 flex items-center justify-center text-purple-600 dark:text-purple-400">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Lecture Terminology & Scientific Glossary
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {notes.glossary.length} foundational terms defined in English & Arabic
                </p>
              </div>
            </div>

            <button 
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
              aria-label="Toggle glossary"
            >
              {showGlossary ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </button>
          </div>

          {showGlossary && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              {notes.glossary.map((item, gIdx) => (
                <div 
                  key={gIdx}
                  className="p-4 rounded-xl border border-slate-100 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-950/40 space-y-2 hover:border-purple-200 dark:hover:border-purple-900/50 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                      {item.term}
                    </h4>
                    {item.category && (
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-200/60 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                        {item.category}
                      </span>
                    )}
                  </div>

                  <p dir="rtl" className="font-arabic text-xs font-semibold text-purple-700 dark:text-purple-400">
                    {item.termArabic}
                  </p>

                  <div className="text-xs text-slate-700 dark:text-slate-300 space-y-1 pt-1 border-t border-slate-200/60 dark:border-slate-800">
                    <p>{item.definition}</p>
                    <p dir="rtl" className="font-arabic text-slate-500 dark:text-slate-400 leading-relaxed font-normal">
                      {item.definitionArabic}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      )}

      {/* Bottom Action Footer (No Print) */}
      <div className="p-6 rounded-3xl bg-gradient-to-r from-blue-50 via-indigo-50 to-teal-50 dark:from-slate-900 dark:via-blue-950/40 dark:to-slate-900 border border-blue-100 dark:border-blue-900/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left no-print">
        <div>
          <h4 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">
            Ready for your next lecture?
          </h4>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Upload another PDF, PowerPoint deck, or Word document to generate notes.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <button
            onClick={handleDownloadPdf}
            disabled={isExportingPdf}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-900/60 transition-colors cursor-pointer"
          >
            {isExportingPdf ? (
              <>
                <div className="w-3.5 h-3.5 border-2 border-blue-600 dark:border-blue-400 border-t-transparent rounded-full animate-spin" />
                <span>Exporting PDF...</span>
              </>
            ) : (
              <>
                <Download className="w-4 h-4" />
                <span>Save as PDF</span>
              </>
            )}
          </button>
          <button
            onClick={handlePrintHandout}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/80 transition-colors cursor-pointer"
          >
            <Printer className="w-4 h-4" />
            <span>Print Handout</span>
          </button>
          <button
            onClick={onNewSummary}
            className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-sm cursor-pointer"
          >
            New Lecture
          </button>
        </div>
      </div>

    </main>
  );
};
