export type SummaryLevel = 'quick' | 'standard' | 'detailed' | 'deep-study';

export type ConceptType = 
  | 'definition' 
  | 'mechanism' 
  | 'classification' 
  | 'cause' 
  | 'process' 
  | 'comparison' 
  | 'clinical' 
  | 'list';

export interface StudyPointPair {
  englishPoint: string;
  arabicExplanation: string;
}

export interface VisualFlowStep {
  stepNumber: number;
  title: string;
  arabicTitle: string;
  description: string;
  arabicDescription: string;
  badge?: string;
  clinicalNote?: string;
}

export interface VisualComparisonRow {
  criteria: string;
  criteriaArabic: string;
  values: string[];
  valuesArabic?: string[];
}

export interface VisualHierarchyNode {
  name: string;
  nameArabic: string;
  description?: string;
  arabicDescription?: string;
  items?: {
    title: string;
    arabicTitle: string;
    detail: string;
    arabicDetail?: string;
  }[];
}

export interface VisualTimelineEvent {
  phase: string;
  phaseArabic: string;
  title: string;
  arabicTitle: string;
  details: string;
  arabicDetails: string;
  tag?: string;
}

export interface VisualStructureComponent {
  partName: string;
  partNameArabic: string;
  functionOrPathology: string;
  functionArabic: string;
  significance?: string;
}

export interface VisualIllustrationPart {
  partName: string;
  partNameArabic: string;
  roleOrMechanism: string;
  roleArabic: string;
  calloutNumber?: number;
  colorHint?: string;
}

export type VisualType = 
  | 'flowchart' 
  | 'process' 
  | 'comparison-table' 
  | 'hierarchy' 
  | 'timeline' 
  | 'structure-diagram'
  | 'scientific-illustration';

export interface SemanticVisual {
  id: string;
  visualType: VisualType;
  title: string;
  titleArabic: string;
  description: string;
  arabicDescription: string;
  clinicalRelevance?: string;
  sourceContext?: string;
  // Payload based on type
  steps?: VisualFlowStep[];
  comparisonTable?: {
    headers: string[];
    headersArabic: string[];
    rows: VisualComparisonRow[];
  };
  hierarchy?: {
    rootTitle: string;
    rootTitleArabic: string;
    categories: VisualHierarchyNode[];
  };
  timeline?: VisualTimelineEvent[];
  structure?: VisualStructureComponent[];
  illustration?: {
    diagramType: 'anatomical-layers' | 'pathway-circuit' | 'molecular-complex' | 'receptor-synapse' | 'cycle-loop';
    title: string;
    titleArabic: string;
    summaryFlow?: string[];
    parts: VisualIllustrationPart[];
  };
}

export type CalloutStickerType = 'important' | 'remember' | 'dont-confuse' | 'key-point';

export interface StudyCallout {
  stickerType: CalloutStickerType;
  english: string;
  arabic: string;
}

export interface StudyConcept {
  id: string;
  term: string;
  termArabic: string;
  type: ConceptType;
  englishContent: string; // Primary source-based English content
  arabicExplanation: string; // Simplified, professor-style Arabic explanation
  keyPoints: string[];
  pointPairs?: StudyPointPair[]; // Bilingual teaching pairs for each subpoint
  keyPointsArabic?: string[];
  callout?: StudyCallout; // Handwritten sticky note callout
  clinicalCorrelation?: {
    english: string;
    arabic: string;
  };
  smartVisual?: SemanticVisual;
}

export interface StudySection {
  id: string;
  sectionNumber: number;
  title: string;
  titleArabic: string;
  overview: string;
  overviewArabic: string;
  concepts: StudyConcept[];
  callout?: StudyCallout; // Handwritten sticky note callout for the section
  sectionVisual?: SemanticVisual;
}

export interface HighYieldPoint {
  id: string;
  english: string;
  arabic: string;
  tag?: 'clinical-pearl' | 'exam-favorite' | 'red-flag' | 'key-pathway';
}

export interface GlossaryItem {
  term: string;
  termArabic: string;
  definition: string;
  definitionArabic: string;
  category?: string;
}

export interface StudyNotesData {
  id: string;
  lectureTitle: string;
  lectureTitleArabic: string;
  academicDomain: string; // e.g. "Cardiology & Vascular Pathology"
  summaryLevel: SummaryLevel;
  smartVisualsEnabled: boolean;
  generatedAt: string;
  sourceFileName?: string;
  estimatedStudyTimeMinutes: number;
  
  overview: {
    english: string;
    arabic: string;
  };
  
  highYieldPoints: HighYieldPoint[];
  sections: StudySection[];
  glossary: GlossaryItem[];
  
  summaryStats: {
    totalConcepts: number;
    visualCount: number;
    sectionsCount: number;
  };
}

export interface GenerateNotesRequest {
  fileData?: {
    fileName: string;
    fileType: string;
    base64Data?: string;
    extractedText?: string;
  };
  lectureText?: string;
  summaryLevel: SummaryLevel;
  enableSmartVisuals: boolean;
  presetTopic?: string;
}
