import { StudyNotesData } from '../types/study';

export const INFLAMMATION_LECTURE_TOPIC = {
  id: 'pathology-inflammation',
  title: 'General Pathology: Acute & Chronic Inflammation',
  domain: 'General Pathology & Immunology',
  description: 'Hemodynamic changes, vascular permeability, leukocyte extravasation cascade, chemical mediators, and acute vs chronic comparison.',
  fileName: 'Pathology_Lec02_Inflammation_and_Repair.pdf',
  previewText: `Lecture 2: General Pathology — Acute & Chronic Inflammation
Department of Pathology & Immunology

1. Definition & Overview of Inflammation:
Inflammation is a protective response of vascularized tissue to injury, infections, and damaged cells. Its primary goal is to dilute, isolate, and eliminate the offending noxious agent and trigger tissue repair.
Five Cardinal Signs of Acute Inflammation (Celsus & Virchow):
- Rubor (Redness): Caused by arteriolar vasodilation and increased blood flow (hyperemia).
- Calor (Heat): Resulting from increased regional blood flow and metabolic heat delivery.
- Tumor (Swelling): Caused by increased microvascular permeability leading to protein-rich fluid exudation into interstitial tissues (edema).
- Dolor (Pain): Elicited by chemical mediators (Bradykinin, Prostaglandin E2) stimulating nociceptive nerve endings and tissue pressure.
- Functio Laesa (Loss of function): Secondary to tissue distortion, cellular injury, and reflex inhibition.

2. Vascular Events & Microvascular Permeability:
- Immediate transient arteriolar vasoconstriction (lasts seconds, neurogenic reflex).
- Persistent arteriolar vasodilation mediated by Histamine and Nitric Oxide (NO), markedly increasing local capillary blood flow.
- Increased microvascular permeability: Retraction of endothelial cells in postcapillary venules creates intercellular gaps (stimulated by histamine, bradykinin, leukotrienes).
- Exudate formation: Escape of protein-rich fluid (specific gravity > 1.020, protein > 3.0 g/dL) into extravascular tissue.
- Hemoconcentration and Stasis: Slower blood velocity allows leukocytes to settle along the endothelial margin.

3. Cellular Events & Leukocyte Extravasation:
Sequence of leukocyte recruitment (principally Neutrophils in first 6-24 hours):
a. Margination: Leukocytes move from central axial stream to peripheral endothelial surface.
b. Rolling: Mediated by Selectins (P-Selectin and E-Selectin on endothelium binding Sialyl-Lewis X on leukocytes; L-Selectin on leukocytes).
c. Firm Adhesion: Chemokines activate leukocyte Integrins (LFA-1, Mac-1) to transition to high-affinity states, binding endothelial ICAM-1 and VCAM-1.
d. Transmigration (Diapedesis): Leukocytes squeeze through intercellular endothelial junctions mediated by PECAM-1 (CD31).
e. Chemotaxis: Directed locomotion toward injury site along chemoattractant gradient (Bacterial peptides, C5a, Leukotriene B4, Interleukin-8).
f. Phagocytosis & Microbial Killing:
   - Recognition & attachment via Opsonins (IgG Fc, C3b).
   - Engulfment forming phagosome and phagolysosome.
   - Oxidative Burst: NADPH oxidase generates superoxide (O2-), converted to H2O2, which Myeloperoxidase (MPO) converts with chloride into Hypochlorous acid (HOCl / bleach).

4. Chemical Mediators of Inflammation:
- Vasoactive Amines: Histamine (from Mast cell degranulation; immediate vasodilation and venular permeability); Serotonin (from platelets).
- Arachidonic Acid Metabolites (Eicosanoids):
  * Cyclooxygenase (COX) pathway: Prostaglandins (PGI2 causes vasodilation & inhibits platelet aggregation; TXA2 causes vasoconstriction & platelet aggregation; PGE2 causes pain & hypothalamic fever).
  * Lipoxygenase (5-LOX) pathway: Leukotriene B4 (potent neutrophil chemoattractant); LTC4, LTD4, LTE4 (potent bronchoconstriction and vascular permeability).
- Cytokines: TNF-alpha and IL-1 (produced by activated macrophages; induce endothelial adhesion molecules, acute-phase systemic response, fever).
- Plasma Proteases: Complement system (C3a and C5a are anaphylatoxins inducing mast cell histamine release; C5a is chemoattractant; MAC C5b-9 lyses microbes).

5. Acute vs Chronic Inflammation:
- Acute: Rapid onset (minutes to hours), short duration (days), predominantly Neutrophils, mild and self-limited tissue injury, prominent vascular exudation and cardinal signs.
- Chronic: Insidious onset (days to weeks), prolonged duration (months to years), predominantly Monocytes/Macrophages, T & B Lymphocytes, and Plasma cells, severe and progressive tissue injury, characterized by concurrent active inflammation, tissue destruction, and repair attempts via angiogenesis and fibrosis.

6. Outcomes of Acute Inflammation:
- Complete Resolution: Removal of exudate and cellular debris, restitution of normal tissue architecture.
- Healing by Fibrosis / Scarring: Occurs after substantial tissue destruction or in tissues with non-regenerative cells.
- Abscess Formation: Localized collection of purulent exudate (pus) walled off by fibrous tissue.
- Progression to Chronic Inflammation: Occurs when offending agent persists or normal healing pathways are defective.

7. Clinical & Nursing Considerations:
- Systemic manifestations: Fever, elevated C-reactive protein (CRP), erythrocyte sedimentation rate (ESR), and leukocytosis with a left shift (increased immature band forms).
- Sepsis monitoring: Systemic inflammatory response syndrome (SIRS) characterized by tachycardia, tachypnea, fever or hypothermia, and altered mental status requiring rapid fluid resuscitation and antibiotics.
- Pharmacology: Corticosteroids inhibit Phospholipase A2; NSAIDs inhibit COX-1 and COX-2.`
};

export const MOCK_INFLAMMATION_STUDY_NOTES: StudyNotesData = {
  id: 'pathology-inflammation-demo',
  lectureTitle: 'General Pathology: Acute & Chronic Inflammation',
  lectureTitleArabic: 'علم الأمراض العام: مسارات الالتهاب الحاد والمزمن',
  academicDomain: 'General Pathology & Immunology',
  summaryLevel: 'detailed',
  smartVisualsEnabled: true,
  generatedAt: new Date().toISOString(),
  sourceFileName: 'Pathology_Lec02_Inflammation_and_Repair.pdf',
  estimatedStudyTimeMinutes: 30,

  overview: {
    english: 'Inflammation is an indispensable protective microvascular defense mechanism of living vascularized tissue against harmful stimuli such as pathogens, damaged cells, or toxic irritants. The acute phase is orchestrated by rapid microvascular dilation, increased endothelial permeability with protein-rich exudate formation, and the sequential recruitment of polymorphonuclear neutrophils. If the offending agent persists, inflammation transitions into a chronic state driven by macrophages, lymphocytes, sustained tissue necrosis, and concurrent fibrosis.',
    arabic: 'الالتهاب (Inflammation) هو رد فعل دفاعي وقائي أساسي تقوم به الأنسجة الحية المزودة بأوعية دموية استجابةً للمؤثرات الضارة مثل العدوى أو موت الخلايا. يتميز الالتهاب الحاد بتوسع سريع في الأوعية، وزيادة نفاذية جدرانها لخروج السائل الغني بالبروتين (Exudate)، وهجرة خلايا الدم البيضاء المتعادلة (Neutrophils) للقضاء على الميكروبات. وإذا استمر المحفز، يتحول المسار إلى التهاب مزمن تقوده البلاعم (Macrophages) وتصاحبه ندبات تليفية (Fibrosis).'
  },

  highYieldPoints: [
    {
      id: 'hyp-1',
      english: 'The 5 Cardinal Signs of Acute Inflammation (Rubor, Calor, Tumor, Dolor, Functio Laesa) stem directly from histamine/NO-induced vasodilation, venular permeability gaps, and PGE2/bradykinin sensory nerve stimulation.',
      arabic: 'العلامات الخمس الكلاسيكية للالتهاب الحاد (الاحمرار، السخونة، التورم، الألم، وفقدان الوظيفة) تنتج مباشرة عن اتساع الشرايين الدقيقة بفعل الهستامين وأكسيد النيتريك، وتجمع السائل الارتشاحي، وتنبيه الأعصاب بالبروستاغلاندين E2 والبراديكينين.',
      tag: 'exam-favorite'
    },
    {
      id: 'hyp-2',
      english: 'Leukocyte Extravasation follows a strict 4-step molecular cascade: Margination → Rolling (Selectins binding Sialyl-Lewis X) → Firm Adhesion (Integrins LFA-1/Mac-1 binding ICAM-1) → Transmigration (PECAM-1/CD31) → Chemotaxis (C5a, LTB4, IL-8).',
      arabic: 'هجرة خلايا الدم البيضاء تتبع تسلسلاً جزيئياً صارماً: التحاف (Margination) ← تدحرج (Rolling) بواسطة السيلكتينات ← التصاق محكم (Firm Adhesion) بواسطة الإنتغرينات وICAM-1 ← عبور جدار الوعاء (Transmigration) بواسطة PECAM-1/CD31 ← انجذاب كيميائي (Chemotaxis).',
      tag: 'key-pathway'
    },
    {
      id: 'hyp-3',
      english: 'Exudate vs Transudate Distinction: Exudate is high-protein (>3.0 g/dL), high specific gravity (>1.020), cellular inflammatory fluid resulting from increased vascular permeability; Transudate is low-protein, low specific gravity fluid resulting from hydrostatic/oncotic pressure imbalances with normal permeability.',
      arabic: 'الفرق الحاسم بين الارتشاح الالتهابي (Exudate) والرشح المائي (Transudate): الارتشاح الالتهابي غني بالبروتين (>3 غم/ديسيلتر) وكثافته عالية وسببه تمزق ونفاذية الأوعية، بينما الرشح المائي فقير بالبروتين وسببه اختلال ضغط الدم (مثل هبوط القلب) مع سلامة جدار الوعاء.',
      tag: 'clinical-pearl'
    },
    {
      id: 'hyp-4',
      english: 'Neutrophils predominate in the initial 6–24 hours of acute inflammation due to high circulating abundance and rapid response to chemokines; Monocytes/Macrophages replace them at 24–48 hours to execute long-term phagocytosis and coordinate repair.',
      arabic: 'الخلايا المتعادلة (Neutrophils) تتصدر المشهد في أول 6 إلى 24 ساعة لكثرتها وسرعة حركتها، ثم تحل محلها البلاعم (Macrophages) بعد 24 إلى 48 ساعة لتتولى الابتلاع النسيجي والتنسيق لبدء التئام الجروح.',
      tag: 'exam-favorite'
    }
  ],

  sections: [
    {
      id: 'sec-1-definition',
      sectionNumber: 1,
      title: 'Definition & The Five Cardinal Signs of Inflammation',
      titleArabic: 'التعريف والعلامات الخمس الأساسية للالتهاب',
      overview: 'Inflammation is an innate protective response designed to neutralize noxious agents and initiate repair. It is clinically recognized by five hallmark local signs originally documented by Aulus Celsus and Rudolf Virchow.',
      overviewArabic: 'الالتهاب هو تفاعل مناعي طبيعي وقائي يهدف إلى تحييد العوامل الضارة وبدء التئام الأنسجة. يُستدل عليه سريرياً عبر خمس علامات موضعية كبرى.',
      callout: {
        stickerType: 'important',
        english: 'Board Exam Classic: Rudolf Virchow added the 5th cardinal sign "Functio Laesa" (Loss of Function) to Celsus\'s original four signs (Rubor, Calor, Tumor, Dolor).',
        arabic: 'معلومة امتحانية هامة: العالم رودولف فيرشو هو من أضاف العلامة الخامسة (فقدان الوظيفة Functio Laesa) إلى العلامات الأربع الأصلية للطبيب الروماني سيلسوس.'
      },
      concepts: [
        {
          id: 'c-1-cardinal-signs',
          term: 'Five Cardinal Signs of Acute Inflammation',
          termArabic: 'العلامات الخمس الأساسية للالتهاب الحاد',
          type: 'clinical',
          englishContent: 'Acute inflammation produces five classic physical manifestations: Rubor (Redness) and Calor (Heat) from arteriolar vasodilation; Tumor (Swelling) from vascular permeability and exudation; Dolor (Pain) from mediator-induced nociceptor stimulation; and Functio Laesa (Loss of function) from tissue destruction and edema.',
          arabicExplanation: 'يظهر الالتهاب الحاد سريرياً من خلال 5 علامات: الاحمرار (Rubor) والحرارة (Calor) بسبب تدفق الدم المتزايد؛ التورم (Tumor) نتيجة تراكم السائل الارتشاحي؛ الألم (Dolor) بسبب تهيج نهايات الأعصاب بالمواد الكيميائية؛ وفقدان الوظيفة (Functio Laesa) بسبب تضرر النسيج والتورم.',
          keyPoints: [
            'Rubor & Calor: Mediated by histamine, bradykinin, and nitric oxide relaxing precapillary sphincters.',
            'Tumor: Arteriolar hydrostatic pressure and venular endothelial gap leakage drive fluid into tissue.',
            'Dolor: Bradykinin and Prostaglandin E2 sensitize pain receptors to mechanical tension.',
            'Functio Laesa: Direct cellular destruction and reflex immobilization prevent normal organ motion.'
          ],
          pointPairs: [
            {
              englishPoint: 'Rubor (Redness) and Calor (Heat) are caused by arteriolar vasodilation increasing microvascular blood flow (active hyperemia).',
              arabicExplanation: 'الاحمرار والحرارة ينتجان عن توسع الشرايين الدقيقة وزيادة تدفق الدم الحار إلى المنطقة المصابة (Active Hyperemia).'
            },
            {
              englishPoint: 'Tumor (Swelling) is generated by endothelial gap formation allowing plasma proteins and fluid to flood interstitial tissue.',
              arabicExplanation: 'التورم ينشأ من تباعد خلايا بطانة الأوعية وخروج السوائل والبروتينات إلى الفراغات بين الخلايا مكونة الوذمة الالتهابية.'
            },
            {
              englishPoint: 'Dolor (Pain) is triggered by bradykinin and Prostaglandin E2 directly stimulating sensory C-fibers.',
              arabicExplanation: 'الألم ينتج عن تنبيه كيميائي مباشر للأعصاب بواسطة مادتي البراديكينين والبروستاغلاندين E2 إضافة إلى الضغط الميكانيكي.'
            }
          ],
          clinicalCorrelation: {
            english: 'Suppression of PGE2 synthesis by nonsteroidal anti-inflammatory drugs (NSAIDs) relieves inflammatory pain and fever without altering leukocyte phagocytosis.',
            arabic: 'تثبيط تصنيع البروستاغلاندين E2 بواسطة مضادات الالتهاب اللاستيرويدية (NSAIDs مثل الإيبوبروفين) يخفف الألم والحرارة دون أن يمنع وظيفة كريات الدم البيضاء.'
          }
        }
      ]
    },

    {
      id: 'sec-2-vascular-events',
      sectionNumber: 2,
      title: 'Vascular Events & Microvascular Permeability',
      titleArabic: 'التغيرات الوعائية ونفاذية الشعيرات الدموية',
      overview: 'Microvascular alterations maximize the delivery of circulating plasma defense proteins and leukocytes directly to the extravascular site of injury.',
      overviewArabic: 'تهدف التغيرات الوعائية إلى إبطاء تيار الدم وزيادة نفاذية الجدار لضمان وصول بروتينات البلازما وخلايا المناعة إلى مكان الإصابة مباشرة.',
      callout: {
        stickerType: 'dont-confuse',
        english: 'Exudate vs Transudate: Exudate has high protein (>3 g/dL) and high specific gravity (>1.020) due to inflammation; Transudate has low protein (<3 g/dL) and normal permeability (e.g. Heart Failure, Cirrhosis).',
        arabic: 'لا تخلط أبداً: الارتشاح (Exudate) غني بالبروتين وكثافته عالية وينتج عن الالتهاب؛ بينما الرشح (Transudate) فقير بالبروتين وينتج عن اختلال الضغط (مثل فشل القلب أو تليف الكبد) دون التهاب.'
      },
      sectionVisual: {
        id: 'vis-vascular-flow',
        visualType: 'process',
        title: 'Microvascular Hemodynamic Sequence in Acute Inflammation',
        titleArabic: 'التسلسل الديناميكي للأوعية الدموية أثناء الالتهاب الحاد',
        description: 'Chronological progression of arteriolar and venular hemodynamic adjustments following tissue injury.',
        arabicDescription: 'التدرج الزمني لتغيرات سريان الدم ونفاذية الأوعية بعد حدوث الإصابة النسيجية.',
        steps: [
          {
            stepNumber: 1,
            title: 'Transient Vasoconstriction',
            arabicTitle: 'انقباض وعائي عابر',
            description: 'Neurogenic reflex narrowing of arterioles lasting only 3-5 seconds to limit immediate blood loss.',
            arabicDescription: 'انقباض عصبي منعكس للشرايين يستمر لثوانٍ معدودة فقط لمنع النزف الفوري.',
            badge: '0-5 seconds'
          },
          {
            stepNumber: 2,
            title: 'Arteriolar Vasodilation',
            arabicTitle: 'توسع شرياني نشط',
            description: 'Histamine and Nitric Oxide induce smooth muscle relaxation, dramatically increasing capillary bed perfusion.',
            arabicDescription: 'الهستامين وأكسيد النيتريك يرخيان العضلات الملساء مما يزيد تدفق الدم للشعيرات بشكل كبير.',
            badge: 'Minutes'
          },
          {
            stepNumber: 3,
            title: 'Increased Permeability & Exudation',
            arabicTitle: 'زيادة النفاذية والارتشاح',
            description: 'Endothelial cells contract in post-capillary venules; protein-rich fluid (Exudate) escapes into interstitial space.',
            arabicDescription: 'انكماش خلايا البطانة وتباعدها في الأوردة الدقيقة، مما يسمح بخروج سائل غني ببروتينات البلازما.',
            badge: 'Peak 15-30m'
          },
          {
            stepNumber: 4,
            title: 'Hemoconcentration & Stasis',
            arabicTitle: 'ركود وتجمع كريات الدم',
            description: 'Loss of fluid thickens blood viscosity, slowing flow and forcing leukocytes toward endothelial lining (Margination).',
            arabicDescription: 'فقدان السائل يزيد لزوجة الدم ويبطئ سرعته، مما يدفع كريات الدم البيضاء نحو الجدار الداخلي للوعاء.',
            badge: 'Sustained'
          }
        ]
      },
      concepts: [
        {
          id: 'c-2-endothelial-permeability',
          term: 'Mechanisms of Endothelial Permeability',
          termArabic: 'آليات زيادة نفاذية البطانة الوعائية',
          type: 'mechanism',
          englishContent: 'Increased vascular permeability occurs primarily via endothelial contraction in postcapillary venules triggered by histamine and leukotrienes. In severe burns or bacterial infections, direct endothelial necrosis causes immediate-sustained leakage across all microvessel levels.',
          arabicExplanation: 'تحدث زيادة النفاذية بشكل رئيسي عبر انكماش خلايا البطانة في الأوردة الصغيرة بعد الشعيرات بفعل الهستامين ومستقبلات H1. وفي الحروق الشديدة أو السموم البكتيرية يحدث نخر مباشر للخلايا المبطنة يؤدي إلى تسريب مستمر على طول الشعيرات.',
          keyPoints: [
            'Endothelial cell contraction: Reversible, fast (15-30 mins), mediated by Histamine, Bradykinin, and Substance P.',
            'Direct endothelial injury: Irreversible cell lysis, sustained hours to days, seen in burns and severe infections.',
            'Leukocyte-mediated injury: Adherent activated neutrophils release reactive oxygen species and proteases.'
          ],
          pointPairs: [
            {
              englishPoint: 'Endothelial cell contraction occurs predominantly in postcapillary venules and is reversible within 15–30 minutes.',
              arabicExplanation: 'انكماش خلايا بطانة الأوعية يحدث غالباً في الأوردة الدقيقة وهو تفاعل سريع ومؤقت ينتهي خلال نصف ساعة بمجرد زوال الهستامين.'
            },
            {
              englishPoint: 'Direct necrotic endothelial injury produces immediate-sustained leakage lasting hours to days until thrombosis or repair occurs.',
              arabicExplanation: 'التلف النخري المباشر لجدار الوعاء (مثل الحروق) يسبب تسريباً دموياً عنيفاً ومستمراً لعدة أيام حتى يتم التجلط أو التجدد.'
            }
          ]
        }
      ]
    },

    {
      id: 'sec-3-cellular-events',
      sectionNumber: 3,
      title: 'Cellular Events: Leukocyte Extravasation & Phagocytosis',
      titleArabic: 'الأحداث الخلوية: هجرة خلايا الدم البيضاء والبلعمة',
      overview: 'Leukocyte recruitment is a multi-step molecular journey from the blood vessel lumen through the vessel wall and interstitial matrix directly to the microbial target.',
      overviewArabic: 'هجرة خلايا الدم البيضاء تمثل رحلة خلوية دقيقة تبدأ من مجرى الدم عبر جدار الوعاء وصولاً إلى الميكروب المستهدف لالتهامه.',
      callout: {
        stickerType: 'remember',
        english: 'Molecular Sequence Mnemonic: "Selectins Roll, Integrins Stick, PECAM Transmigrates, Chemotaxis Guides".',
        arabic: 'تذكّر دائماً هذا التسلسل الجزيئي: السيلكتينات تدحرج الخلية (Rolling)، والإنتغرينات تثبتها بالجدار (Adhesion)، والـ PECAM يساعدها على العبور، والمواد الجاذبة تقودها للهدف.'
      },
      sectionVisual: {
        id: 'vis-leukocyte-cascade',
        visualType: 'process',
        title: 'Leukocyte Extravasation & Phagocytic Killing Cascade',
        titleArabic: 'مسار هجرة خلايا الدم البيضاء والبلعمة النسيجية',
        description: 'Complete molecular pathway of neutrophil migration and oxidative microbial destruction.',
        arabicDescription: 'المسار الجزيئي الكامل لهجرة الخلايا المتعادلة وقتل الميكروبات بالأكسدة.',
        steps: [
          {
            stepNumber: 1,
            title: 'Margination & Rolling',
            arabicTitle: 'التحاف وتدحرج الكريات',
            description: 'P-Selectin and E-Selectin on activated endothelium loosely bind Sialyl-Lewis X oligosaccharides on neutrophils.',
            arabicDescription: 'ترتبط السيلكتينات (P-Selectin و E-Selectin) على بطانة الوعاء بشكل ضعيف مع سكريات الخلية البيضاء مما يجعلها تتدحرج.',
            badge: 'Selectins'
          },
          {
            stepNumber: 2,
            title: 'Firm / Stable Adhesion',
            arabicTitle: 'الالتصاق المحكم بالجدار',
            description: 'Chemokines trigger high-affinity conformational change in leukocyte Integrins (LFA-1, Mac-1), locking onto endothelial ICAM-1.',
            arabicDescription: 'تقوم السيتوكينات بتنشيط مستقبلات الإنتغرين (LFA-1) لتلتصق بقوة غير قابلة للانفصال بجزيء ICAM-1 على جدار الوعاء.',
            badge: 'Integrins & ICAM-1'
          },
          {
            stepNumber: 3,
            title: 'Transmigration (Diapedesis)',
            arabicTitle: 'انسلال الخلية عبر الجدار',
            description: 'Leukocytes extend pseudopods through endothelial junctions mediated homotypically by PECAM-1 (CD31).',
            arabicDescription: 'تمد الخلية البيضاء أقداماً كاذبة لتعبر بين خلايا البطانة مستعينة بجزيء PECAM-1 (CD31) وتذيب الغشاء القاعدي.',
            badge: 'PECAM-1 / CD31'
          },
          {
            stepNumber: 4,
            title: 'Chemotactic Migration',
            arabicTitle: 'الانجذاب الكيميائي نحو الهدف',
            description: 'Neutrophils migrate up chemical concentration gradient of C5a, Leukotriene B4, and Interleukin-8.',
            arabicDescription: 'تتحرك الخلية نحو بؤرة الالتهاب متبعةً تركيز المواد الكيميائية الجاذبة مثل C5a والإنترلوكين-8.',
            badge: 'C5a, LTB4, IL-8'
          },
          {
            stepNumber: 5,
            title: 'Phagocytosis & Respiratory Burst',
            arabicTitle: 'البلعمة والانفجار التنفسي',
            description: 'Opsonized microbes (IgG, C3b) are engulfed; NADPH oxidase produces superoxide, and MPO generates bleach (HOCl) to kill pathogens.',
            arabicDescription: 'ابتلاع الميكروب المغلف بالأجسام المضادة (IgG, C3b)، وتفعيل إنزيم NADPH oxidase لإنتاج ماء الأكسجين والمبيض (HOCl) لقتله.',
            badge: 'NADPH Oxidase & MPO'
          }
        ]
      },
      concepts: [
        {
          id: 'c-3-leukocyte-adhesion-deficiency',
          term: 'Leukocyte Extravasation Molecular Players',
          termArabic: 'العوامل الجزيئية لهجرة خلايا الدم البيضاء',
          type: 'mechanism',
          englishContent: 'Extravasation requires three distinct receptor-ligand families: Selectins (low-affinity rolling), Integrins and Immunoglobulin superfamily (firm arrest), and PECAM-1/CD31 (junctional transmigration). Once in tissues, neutrophils ingest targets via opsonin receptors (Fc gamma R and CR1).',
          arabicExplanation: 'تعتمد هجرة الكريات البيض على 3 عائلات مستقبلات: السيلكتينات للتدحرج الأولي الضعيف، والإنتغرينات للالتصاق الثابت، وPECAM-1 للعبور عبر الفواصل. وفي النسيج تتعرف البلاعم على الميكروبات المغلفة بالأجسام المضادة ومكملات C3b وتبتلعها.',
          keyPoints: [
            'L-selectin is shed from neutrophils upon activation; E/P-selectins are induced on endothelium by TNF and IL-1.',
            "Integrin activation requires 'inside-out' chemokine signaling that straightens integrin heterodimers.",
            'Oxygen-dependent killing uses NADPH oxidase: O2 → O2- → H2O2; Myeloperoxidase (MPO) + Cl- → HOCl.'
          ],
          pointPairs: [
            {
              englishPoint: 'P-selectin is stored preformed inside endothelial Weibel-Palade bodies and translocates to the cell surface within minutes of histamine stimulation.',
              arabicExplanation: 'الـ P-Selectin يكون مخزناً وجاهزاً داخل أجسام (Weibel-Palade) في بطانة الأوعية، ويخرج للسطح خلال دقائق من إفراز الهستامين.'
            },
            {
              englishPoint: 'Deficiency in CD18 (beta-2 integrin) causes Leukocyte Adhesion Deficiency Type 1 (LAD-1), leading to recurrent bacterial infections without pus formation.',
              arabicExplanation: 'نقص جزيء CD18 الوراثي يسبب مرض (LAD-1)، وفيه تعجز كريات الدم عن الالتصاق بجدار الوعاء، مما يسبب التهابات خطيرة دون تشكل صديد.'
            }
          ],
          clinicalCorrelation: {
            english: 'In Chronic Granulomatous Disease (CGD), genetic defect in NADPH oxidase prevents superoxide production, resulting in recurrent catalase-positive infections (S. aureus, Aspergillus).',
            arabic: 'في مرض الورم الحبيبي المزمن (CGD)، يوجد خلل جيني في إنزيم NADPH oxidase يمنع تكوين الجذور الحرة القاتلة، فيعاني المريض من خراجات متكررة بميكروبات مثل بكتيريا المكورات العنقودية.'
          }
        }
      ]
    },

    {
      id: 'sec-4-chemical-mediators',
      sectionNumber: 4,
      title: 'Chemical Mediators of Inflammation',
      titleArabic: 'الوسائط الكيميائية للالتهاب',
      overview: 'Chemical mediators are short-lived soluble molecules derived from plasma precursors or produced locally by tissue cells in response to noxious stimuli.',
      overviewArabic: 'الوسائط الكيميائية هي جزيئات سريعة الزوال تُفرز محلياً من الخلايا أو تُنشط من بروتينات البلازما لتوجيه جميع مراحل الالتهاب.',
      callout: {
        stickerType: 'key-point',
        english: 'Pharmacological Target: Corticosteroids inhibit Phospholipase A2 (shutting down ALL arachidonic acid metabolites); Aspirin and NSAIDs inhibit Cyclooxygenase (COX), suppressing only Prostaglandins and Thromboxane.',
        arabic: 'نقطة دوائية جوهرية: الكورتيزون يثبط إنزيم Phospholipase A2 فيمنع تحرر حمض الأراكيدونيك كلياً، بينما الأسبرين والـ NSAIDs تثبط إنزيم Cyclooxygenase فقط فتمنع البروستاغلاندين دون التأثير على الليكوترين.'
      },
      concepts: [
        {
          id: 'c-4-eicosanoids-amines',
          term: 'Arachidonic Acid Cascade & Vasoactive Mediators',
          termArabic: 'مسار حمض الأراكيدونيك والوسائط الوعائية النشطة',
          type: 'process',
          englishContent: 'Membrane phospholipids are cleaved by Phospholipase A2 into Arachidonic Acid, entering two pathways: Cyclooxygenase (COX-1/COX-2) yielding Prostaglandins (PGI2, PGE2) and Thromboxane A2; and 5-Lipoxygenase (5-LOX) yielding Leukotrienes (LTB4 for chemotaxis; LTC4, LTD4, LTE4 for severe bronchospasm and vascular permeability).',
          arabicExplanation: 'يتحرر حمض الأراكيدونيك من غشاء الخلية بواسطة إنزيم Phospholipase A2، ثم يسلك مسارين: مسار الـ COX الذي ينتج البروستاغلاندينات المسؤولة عن الألم والحرارة وتوسع الأوعية؛ ومسار الـ LOX الذي ينتج الليكوترين B4 الجاذب للعدلات، والليكوترينات التشنجية المسببة لضيق الشعب الهوائية في الربو.',
          keyPoints: [
            'Histamine: Stored in mast cell granules; primary mediator of initial phase of increased venular permeability.',
            'PGE2: Causes pain (hyperalgesia) and acts on hypothalamic thermoregulatory center to cause fever.',
            'TXA2: Produced by platelets; causes vasoconstriction and platelet aggregation (pro-thrombotic).',
            'PGI2 (Prostacyclin): Produced by vascular endothelium; causes vasodilation and inhibits platelet aggregation.'
          ],
          pointPairs: [
            {
              englishPoint: 'Prostaglandin I2 (Prostacyclin) and Thromboxane A2 exist in physiological opposition to balance vascular tone and prevent unwanted thrombosis.',
              arabicExplanation: 'البروستاغلاندين I2 (الموسع للأوعية والمضاد للتجلط) والثرومبوكسان A2 (المضيق للأوعية والمحفز للتجلط) يعملان بتوازن دقيق لمنع حدوث جلطات عشوائية.'
            },
            {
              englishPoint: 'Leukotriene B4 (LTB4) is one of the most potent endogenous chemotactic attractants for neutrophils.',
              arabicExplanation: 'الليكوترين B4 (LTB4) يعتبر من أقوى الجزيئات التي تجذب كريات الدم البيضاء المتعادلة نحو بؤرة الإصابة.'
            }
          ]
        }
      ]
    },

    {
      id: 'sec-5-comparison',
      sectionNumber: 5,
      title: 'Acute vs Chronic Inflammation: Clinical & Pathological Comparison',
      titleArabic: 'مقارنة شاملة بين الالتهاب الحاد والالتهاب المزمن',
      overview: 'Systematic comparison contrasting the temporal, cellular, morphological, and clinical profiles of acute and chronic inflammatory processes.',
      overviewArabic: 'مقارنة منهجية تبين الفوارق الزمنية والخلوية والسريرية بين مساري الالتهاب الحاد والمزمن.',
      sectionVisual: {
        id: 'vis-acute-vs-chronic-table',
        visualType: 'comparison-table',
        title: 'Diagnostic Comparison: Acute vs Chronic Inflammation',
        titleArabic: 'جدول المقارنة التشخيصية: الالتهاب الحاد مقابل الالتهاب المزمن',
        description: 'Direct comparison of duration, cellular infiltrates, tissue damage, and reparative processes.',
        arabicDescription: 'مقارنة مباشرة بين المدة الزمنية، نوع الخلايا السائدة، مقدار التلف النسيجي، ومسارات الشفاء.',
        comparisonTable: {
          headers: ['Feature', 'Acute Inflammation', 'Chronic Inflammation'],
          headersArabic: ['الخاصية', 'الالتهاب الحاد (Acute)', 'الالتهاب المزمن (Chronic)'],
          rows: [
            {
              criteria: 'Onset & Duration',
              criteriaArabic: 'البداية والمدة الزمنية',
              values: ['Rapid onset (minutes to hours); Short duration (days to weeks)', 'Insidious/delayed onset (days); Prolonged duration (months to years)'],
              valuesArabic: ['سريع وفوري (خلال دقائق إلى ساعات) ويستمر لأيام قليلة', 'تدريجي ومخاتل، ويستمر لشهور أو سنوات طويلة']
            },
            {
              criteria: 'Dominant Cellular Infiltrate',
              criteriaArabic: 'الخلايا المناعية السائدة',
              values: ['Polymorphonuclear Neutrophils (PMNs)', 'Monocytes/Macrophages, T & B Lymphocytes, Plasma cells'],
              valuesArabic: ['الخلايا المتعادلة (Neutrophils)', 'البلاعم (Macrophages)، الخلايا اللمفاوية، وخلايا البلازما']
            },
            {
              criteria: 'Vascular Changes & Exudation',
              criteriaArabic: 'التغيرات الوعائية والارتشاح',
              values: ['Prominent vasodilation, high endothelial permeability, heavy fluid exudate', 'Angiogenesis (new vessel proliferation) rather than acute leakage'],
              valuesArabic: ['اتساع ملحوظ للأوعية وارتشاح سوائل غزير وتورم', 'تكوين أوعية دموية جديدة (Angiogenesis) بدلاً من التسريب الحاد']
            },
            {
              criteria: 'Tissue Injury & Necrosis',
              criteriaArabic: 'تلف الأنسجة والنخر',
              values: ['Usually mild, self-limited, and localized to injury focus', 'Severe, continuous, progressive tissue destruction'],
              valuesArabic: ['محدود وقابل للتعافي في الغالب', 'شديد ومستمر ومصاحب بتخريب تدريجي لبنية العضو']
            },
            {
              criteria: 'Tissue Repair / Healing',
              criteriaArabic: 'التئام الأنسجة والتعويض',
              values: ['Complete resolution or localized scar if necrosis was extensive', 'Simultaneous ongoing tissue repair, dense Fibrosis and scarring'],
              valuesArabic: ['إعادة بناء كاملة أو ندبة موضعية صغيرة', 'تليف دائم وتندب كثيف (Fibrosis) يحدث بالتزامن مع الالتهاب المستمر']
            },
            {
              criteria: 'Classical Clinical Signs',
              criteriaArabic: 'العلامات السريرية البارزة',
              values: ['Prominent local cardinal signs (pain, heat, erythema, swelling)', 'Subtle or absent cardinal signs; systemic malaise, anemia, weight loss'],
              valuesArabic: ['علامات موضعية واضحة وحادة (ألم، حرارة، احمرار، تورم)', 'علامات موضعية خافتة؛ وتظهر أعراض عامة كهزال الجسم وفقر الدم']
            }
          ]
        }
      },
      concepts: [
        {
          id: 'c-5-chronic-granuloma',
          term: 'Granulomatous Inflammation Profile',
          termArabic: 'الالتهاب الحبيبي (Granulomatous Inflammation)',
          type: 'classification',
          englishContent: 'Granulomatous inflammation is a distinctive pattern of chronic inflammation characterized by aggregates of activated epithelioid macrophages surrounded by a collar of lymphocytes and outer fibroblasts, frequently forming multinucleated giant cells (Langhans cells in Tuberculosis).',
          arabicExplanation: 'الورم الحبيبي (Granuloma) هو نمط خاص من الالتهاب المزمن تتجمع فيه البلاعم وتتحول إلى خلايا شبه طلائية (Epithelioid cells) محاطة بطوق من الخلايا اللمفاوية، وقد تندمج لتشكل خلايا عملاقة متعددة النوى (مثل خلايا لانغهانز في الدرن/السل).',
          keyPoints: [
            'Triggered by persistent, non-digestible agents (Mycobacterium tuberculosis, foreign suture, fungal spores).',
            'Interferon-gamma (IFN-gamma) secreted by CD4+ Th1 lymphocytes is the critical activator of epithelioid histiocytes.',
            'Caseating granulomas (with central cheesy necrotic debris) are classic for Tuberculosis; non-caseating for Sarcoidosis.'
          ],
          pointPairs: [
            {
              englishPoint: 'Caseating granulomas with central amorphous necrotic debris are the hallmark of Mycobacterium tuberculosis infection.',
              arabicExplanation: 'الأورام الحبيبية الجبنية (Caseating Granulomas) التي تحتوي على نخر مركزي يشبه الجبن هي العلامة المميزة لمرض السل (الدرن).'
            },
            {
              englishPoint: 'Non-caseating granulomas lack central necrosis and are classically observed in Sarcoidosis and Crohn\'s disease.',
              arabicExplanation: 'الأورام الحبيبية غير الجبنية تفتقر إلى النخر المركزي وتُميز أمراضاً مثل الساركويد ومرض كرون في الأمعاء.'
            }
          ]
        }
      ]
    },

    {
      id: 'sec-6-clinical-nursing',
      sectionNumber: 6,
      title: 'Clinical Manifestations, Systemic Effects & Nursing Considerations',
      titleArabic: 'المظاهر السريرية، التأثيرات الجهازية والاعتبارات التمريضية',
      overview: 'Severe or unresolved local inflammation triggers systemic acute-phase reactions and life-threatening hemodynamic collapse if uncontrolled.',
      overviewArabic: 'قد يمتد الالتهاب الموضعي ليحدث استجابة جهازية عامة في كل الجسم، ويشكل خطراً حيوياً يستوجب مراقبة تمريضية دقيقة لمنع الصدمة الإنتانية.',
      callout: {
        stickerType: 'important',
        english: 'Sepsis Red Flag: Tachycardia (>90 bpm), Tachypnea (>20 bpm), Temp >38°C or <36°C, and WBC >12,000 or >10% band cells require immediate resuscitation.',
        arabic: 'علامات الخطر للإنتان (Sepsis): تسارع نبضات القلب (>90)، تسارع التنفس (>20)، ارتفاع أو هبوط حاد بالحرارة، وارتفاع كريات الدم مع وجود أكثر من 10% خلايا غير ناضجة (Bands) تتطلب تدخلاً فورياً.'
      },
      concepts: [
        {
          id: 'c-6-systemic-acute-phase',
          term: 'The Systemic Acute-Phase Response',
          termArabic: 'استجابة الطور الحاد الجهازية (Systemic Response)',
          type: 'clinical',
          englishContent: 'Cytokines TNF, IL-1, and IL-6 released into circulation stimulate the liver to synthesize Acute-Phase Reactants (C-Reactive Protein, Fibrinogen, Serum Amyloid A). Fibrinogen binds erythrocytes causing rouleaux formation, markedly increasing the Erythrocyte Sedimentation Rate (ESR).',
          arabicExplanation: 'السيتوكينات المفرزة في الدم (TNF و IL-1 و IL-6) تحفز الكبد لإنتاج بروتينات الطور الحاد مثل بروتين (CRP) والفيبرينوجين. يرتبط الفيبرينوجين بكريات الدم الحمراء ويجعلها تترسب بسرعة، مما يرفع معدل ترسب كريات الدم (ESR) كدليل مخبري على الالتهاب.',
          keyPoints: [
            'Fever: Induced by pyrogens stimulating prostaglandin synthesis in the anterior hypothalamic preoptic area.',
            'Leukocytosis with "Left Shift": Accelerated release of immature band neutrophils from bone marrow reserve pools.',
            'Septic Shock: Massive systemic levels of TNF and IL-1 cause widespread endothelial injury, vasodilation, and organ failure.'
          ],
          pointPairs: [
            {
              englishPoint: 'A "left shift" in complete blood count signifies accelerated release of immature band neutrophils to combat acute bacterial infection.',
              arabicExplanation: 'ظهور ما يُعرف بـ (Left Shift) في تحليل الدم الكامل يعني زيادة نسبة الخلايا غير الناضجة (Bands) لتعويض الاستهلاك السريع في محاربة البكتيريا.'
            },
            {
              englishPoint: 'Frequent vital signs monitoring is critical in inflamed patients to detect early decompensation into systemic inflammatory response syndrome (SIRS).',
              arabicExplanation: 'المتابعة الدورية للعلامات الحيوية من أهم مهام التمريض لاكتشاف أي علامات مبكرة لتدهور المريض وتحوله إلى متلازمة الاستجابة الالتهابية الجهازية (SIRS).'
            }
          ],
          clinicalCorrelation: {
            english: 'Serum C-Reactive Protein (CRP) rises and falls rapidly with inflammatory activity, making it a superior marker for monitoring therapeutic response compared to ESR.',
            arabic: 'بروتين سي التفاعلي (CRP) يرتفع وينخفض بسرعة فائقة مع نشاط الالتهاب، مما يجعله أدق وأفضل من معدل الترسيب (ESR) في متابعة استجابة المريض للعلاج والمضادات.'
          }
        }
      ]
    }
  ],

  glossary: [
    {
      term: 'Exudate',
      termArabic: 'ارتشاح التهابي',
      definition: 'Inflammatory extravascular fluid with high protein content (>3 g/dL), cellular debris, and high specific gravity (>1.020) caused by increased microvascular permeability.',
      definitionArabic: 'سائل التهابي خارج الأوعية غني بالبروتينات والخلايا وكثافته عالية، ينتج عن تباعد خلايا جدران الشعيرات الدموية بفعل الالتهاب.',
      category: 'Vascular Pathology'
    },
    {
      term: 'Transudate',
      termArabic: 'رشح مائي غير التهابي',
      definition: 'Fluid with low protein content (<3 g/dL) and low specific gravity (<1.012) resulting from increased hydrostatic pressure or decreased oncotic pressure without altered vascular permeability.',
      definitionArabic: 'سائل فقير بالبروتين وخالٍ من الخلايا ينتج عن خلل في ضغط الدم الوريدي أو نقص ألبومين الدم مع سلامة جدار الأوعية.',
      category: 'Hemodynamics'
    },
    {
      term: 'Diapedesis (Transmigration)',
      termArabic: 'انسلال الكريات البيض',
      definition: 'The active passage of leukocytes through intact unruptured vessel walls into surrounding connective tissue, mediated homotypically by PECAM-1 (CD31).',
      definitionArabic: 'المرور النشط لكريات الدم البيضاء عبر الفواصل بين خلايا بطانة الأوعية الدموية دون تمزيقها، بتوسط جزيء PECAM-1.',
      category: 'Cellular Immunology'
    },
    {
      term: 'Chemotaxis',
      termArabic: 'الانجذاب الكيميائي',
      definition: 'Unidirectional cell locomotion along a chemical concentration gradient toward the source of inflammatory mediators (such as C5a, LTB4, IL-8).',
      definitionArabic: 'حركة موجهة لخلايا المناعة تتبع تركيز المواد الكيميائية الصادرة من مكان الإصابة (مثل C5a و LTB4).',
      category: 'Cellular Mechanics'
    },
    {
      term: 'Opsonin',
      termArabic: 'مادة الطهاية (مُحسنة البلعمة)',
      definition: 'Substances (such as IgG antibodies or complement fragment C3b) that coat foreign antigens to facilitate their binding and engulfment by phagocytic cells.',
      definitionArabic: 'جزيئات مناعية (مثل الأجسام المضادة IgG ومكمل C3b) تلتصق بسطح الميكروب لتسهيل تعرف البلاعم عليه والتهامه.',
      category: 'Immunology'
    },
    {
      term: 'Granuloma',
      termArabic: 'الورم الحبيبي',
      definition: 'A microscopic nodular aggregate of activated epithelioid macrophages surrounded by a collar of mononuclear leukocytes, formed in response to poorly degradable agents.',
      definitionArabic: 'تجمع عقدي مجهري من البلاعم المنشطة الشبيهة بالخلايا الطلائية محاطة بالخلايا اللمفاوية لعزل ميكروب يصعب القضاء عليه.',
      category: 'Chronic Pathology'
    }
  ],

  summaryStats: {
    totalConcepts: 16,
    visualCount: 3,
    sectionsCount: 6
  }
};
