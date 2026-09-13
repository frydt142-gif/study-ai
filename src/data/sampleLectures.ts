import { StudyNotesData } from '../types/study';
import { INFLAMMATION_LECTURE_TOPIC, MOCK_INFLAMMATION_STUDY_NOTES } from './inflammationData';

export { INFLAMMATION_LECTURE_TOPIC, MOCK_INFLAMMATION_STUDY_NOTES };

export const SAMPLE_LECTURE_TOPICS = [
  INFLAMMATION_LECTURE_TOPIC,
  {
    id: 'cardiology-mi',
    title: 'Cardiovascular Pathology: Atherosclerosis & Myocardial Infarction',
    domain: 'Pathology & Cardiology',
    description: 'Pathogenesis of atherosclerotic plaques, plaque rupture, ischemic cascade, and STEMI vs NSTEMI.',
    fileName: 'Lecture_04_Cardiovascular_Pathology_MI.pdf',
    previewText: `Lecture 4: Ischemic Heart Disease & Atherosclerosis
Department of Pathology & Cardiovascular Medicine

1. Atherosclerosis Overview & Pathogenesis:
Atherosclerosis is a chronic inflammatory disorder of large and medium-sized muscular and elastic arteries characterized by fibrofatty lesions called atheromatous plaques.
Response-to-injury hypothesis:
a. Endothelial dysfunction triggered by hyperlipidemia, smoking, hypertension, and hemodynamic shear stress.
b. Accumulation of LDL cholesterol in the tunica intima, undergoing oxidation (oxLDL).
c. Monocyte recruitment and differentiation into tissue macrophages via adhesion molecules (VCAM-1, ICAM-1).
d. Macrophages engulf oxLDL via scavenger receptors (SR-A, CD36) transforming into foam cells.
e. Smooth muscle cell (SMC) migration from tunica media to intima stimulated by PDGF and FGF, leading to extracellular matrix synthesis (collagen cap).

2. Plaque Rupture & Acute Coronary Syndromes (ACS):
Vulnerable plaques feature a thin fibrous cap, large lipid/necrotic core, and dense inflammatory infiltrate (macrophages expressing matrix metalloproteinases MMPs).
Plaque disruption exposes subendothelial von Willebrand factor (vWF) and tissue factor:
- Platelet adhesion (GpIb) and activation (ADP, TXA2 release).
- Platelet aggregation via GpIIb/IIIa receptors forming a platelet plug.
- Coagulation cascade activation yielding fibrin-rich occlusive thrombus.

3. Myocardial Infarction - Cellular Ischemia Timeline:
- < 2 minutes: Cessation of aerobic metabolism; rapid depletion of ATP, accumulation of lactic acid.
- < 20-30 minutes: Reversible injury; cell swelling and relaxation of myofibrils.
- > 30 minutes: Irreversible ischemic necrosis of cardiomyocytes begins (subendocardial wavefront toward epicardium).
- 4-12 hours: Early coagulation necrosis, wavy fibers, edema, early neutrophil infiltration.
- 1-3 days: Dense neutrophilic infiltrate, loss of nuclei and striations.
- 3-7 days: Macrophage phagocytosis of necrotic myocytes (highest risk of ventricular free wall rupture).
- 1-2 weeks: Granulation tissue with neovascularization.
- > 2 months: Dense collagenous scar formation.

4. Clinical Differentiation: STEMI vs NSTEMI:
- STEMI: Transmural full-thickness ischemia, complete persistent coronary occlusion, ST-segment elevation, positive cardiac biomarkers (Troponin I/T, CK-MB).
- NSTEMI: Subendocardial ischemia, partial or intermittent occlusion, ST-depression/T-wave inversion, positive troponins.
- Unstable Angina: Ischemia without necrosis (negative cardiac troponins).`
  },
  {
    id: 'biochemistry-krebs',
    title: 'Cellular Respiration: Krebs Cycle & Oxidative Phosphorylation',
    domain: 'Biochemistry & Molecular Biology',
    description: 'Mitochondrial bioenergetics, pyruvate dehydrogenase complex, TCA cycle reactions, and electron transport chain complexes.',
    fileName: 'Biochem_Lec09_Mitochondrial_Bioenergetics.pptx',
    previewText: `Biochemistry Lecture 9: Cellular Respiration and Mitochondrial Bioenergetics
Medical Biochemistry Department

1. Pyruvate Dehydrogenase (PDH) Complex:
Converts pyruvate into Acetyl-CoA inside the mitochondrial matrix. Irreversible link between glycolysis and the Citric Acid Cycle.
Contains 3 enzymes:
- E1: Pyruvate dehydrogenase (requires Thiamine pyrophosphate - TPP / Vitamin B1).
- E2: Dihydrolipoyl transacetylase (requires Lipoic acid and CoA / Vitamin B5).
- E3: Dihydrolipoyl dehydrogenase (requires FAD / Vitamin B2 and NAD+ / Vitamin B3).
Regulation: Phosphorylation by PDH kinase inactivates; dephosphorylation by PDH phosphatase activates. Elevated Acetyl-CoA and NADH inhibit PDH.

2. The Citric Acid Cycle (Krebs Cycle):
Eight cyclical enzyme-catalyzed reactions:
1. Citrate Synthase: Oxaloacetate (4C) + Acetyl-CoA (2C) -> Citrate (6C).
2. Aconitase: Citrate -> Isocitrate.
3. Isocitrate Dehydrogenase: Rate-limiting step. Isocitrate -> alpha-Ketoglutarate (5C) + NADH + CO2.
4. alpha-Ketoglutarate Dehydrogenase: alpha-KG -> Succinyl-CoA (4C) + NADH + CO2 (requires same cofactors as PDH).
5. Succinyl-CoA Synthetase: Succinyl-CoA -> Succinate + GTP (Substrate-level phosphorylation).
6. Succinate Dehydrogenase: Embedded in inner mitochondrial membrane (Complex II). Succinate -> Fumarate + FADH2.
7. Fumarase: Fumarate -> Malate.
8. Malate Dehydrogenase: Malate -> Oxaloacetate + NADH.

Total yield per glucose molecule (2 turns): 6 NADH, 2 FADH2, 2 GTP, 4 CO2.

3. Electron Transport Chain & Chemiosmosis:
- Complex I (NADH:ubiquinone oxidoreductase): Pumps 4 H+ into intermembrane space. Inhibited by Rotenone.
- Complex II (Succinate dehydrogenase): No H+ pumped.
- Coenzyme Q (Ubiquinone): Mobile electron carrier.
- Complex III (Cytochrome bc1): Pumps 4 H+. Inhibited by Antimycin A.
- Cytochrome c: Mobile carrier.
- Complex IV (Cytochrome c oxidase): Pumps 2 H+, reduces O2 to H2O. Inhibited by Cyanide (CN-) and Carbon Monoxide (CO).
- Complex V (ATP Synthase): Protons flow down electrochemical gradient through F0 rotor driving F1 catalytic head. Inhibited by Oligomycin.`
  },
  {
    id: 'pharmacology-ans',
    title: 'Autonomic Pharmacology: Adrenergic & Cholinergic Receptors',
    domain: 'Pharmacology & Neurobiology',
    description: 'Sympathetic vs parasympathetic pathways, G-protein signaling, receptor subtypes, and clinical therapeutic indications.',
    fileName: 'Pharm_Lec12_Autonomic_Nervous_System.docx',
    previewText: `Lecture 12: Principles of Autonomic Pharmacology
Department of Clinical Pharmacology

1. Sympathetic vs Parasympathetic Organization:
- Sympathetic: Thoracolumbar outflow (T1-L2), short preganglionic (ACh on Nicotinic Nn), long postganglionic releasing Norepinephrine (NE) onto target organs (exception: sweat glands use ACh on Muscarinic M3).
- Parasympathetic: Craniosacral outflow (CN III, VII, IX, X, and S2-S4), long preganglionic releasing ACh on Nn, short postganglionic releasing ACh on Muscarinic (M1-M5) receptors.

2. Adrenergic Receptor Subtypes and Signal Transduction:
- Alpha-1 (Gq -> Phospholipase C -> IP3/DAG -> increased intracellular Ca2+):
  Locations: Vascular smooth muscle (vasoconstriction), pupillary dilator (mydriasis), urinary sphincter (contraction).
  Agonist: Phenylephrine. Antagonist: Prazosin, Tamsulosin.
- Alpha-2 (Gi -> inhibits Adenylyl Cyclase -> decreased cAMP):
  Locations: Presynaptic adrenergic nerve terminals (negative feedback autoinhibition), pancreatic beta-cells (decreased insulin).
  Agonist: Clonidine, Methyldopa.
- Beta-1 (Gs -> activates Adenylyl Cyclase -> increased cAMP -> PKA):
  Locations: Heart (increased chronotropy, inotropy, dromotropy), juxtaglomerular apparatus (increased renin secretion).
  Agonist: Dobutamine. Antagonist: Metoprolol, Atenolol (cardioselective).
- Beta-2 (Gs -> increased cAMP):
  Locations: Bronchial smooth muscle (bronchodilation), skeletal muscle vasculature (vasodilation), liver (glycogenolysis).
  Agonist: Albuterol, Salmeterol.
- Beta-3 (Gs): Adipose tissue (lipolysis), bladder detrusor (relaxation - Mirabegron).

3. Cholinergic Receptor Subtypes:
- M1 (Gq): CNS, gastric parietal cells (acid secretion).
- M2 (Gi): Cardiac atria and nodal tissue (decreased heart rate and conduction velocity).
- M3 (Gq): Exocrine glands (salivation, lacrimation, sweating), bronchial smooth muscle (bronchoconstriction), bladder detrusor (contraction/urination), vascular endothelium (NO release -> vasodilation).
  Agonists: Bethanechol, Pilocarpine. Antagonists: Atropine, Ipratropium, Oxybutynin.`
  }
];

export const MOCK_CARDIOLOGY_STUDY_NOTES: StudyNotesData = {
  id: 'cardio-mi-demo',
  lectureTitle: 'Cardiovascular Pathology: Atherosclerosis & Myocardial Infarction',
  lectureTitleArabic: 'باثولوجيا الجهاز الدوري: تصلب الشرايين واحتشاء عضلة القلب',
  academicDomain: 'Pathology & Cardiology',
  summaryLevel: 'detailed',
  smartVisualsEnabled: true,
  generatedAt: new Date().toISOString(),
  sourceFileName: 'Lecture_04_Cardiovascular_Pathology_MI.pdf',
  estimatedStudyTimeMinutes: 25,
  overview: {
    english: 'A comprehensive medical study guide covering the cellular pathogenesis of atherosclerosis, plaque destabilization triggers, and the progressive ischemic timeline leading to acute transmural (STEMI) and subendocardial (NSTEMI) myocardial infarction.',
    arabic: 'دليل دراسي طبي شامل ومبسط يشرح التطور الخلوي لمرض تصلب الشرايين (Atherosclerosis)، والعوامل المسببة لتمزق اللويحة العصيدية، والتسلسل الزمني للإقفار القلبي الذي يؤدي إلى احتشاء عضلة القلب (Myocardial Infarction) بنوعيه (STEMI) و(NSTEMI).'
  },
  highYieldPoints: [
    {
      id: 'hy-1',
      english: 'Irreversible cardiomyocyte necrosis begins after 20-30 minutes of complete coronary arterial occlusion via the ischemic wavefront phenomenon.',
      arabic: 'يبدأ الموت الخلوي غير القابل للعكس (Irreversible Necrosis) لخلايا عضلة القلب بعد مرور 20 إلى 30 دقيقة فقط من الانسداد التام للشريان التاجي، متدرجاً من الطبقة الداخلية (Subendocardium) إلى الخارجية.',
      tag: 'exam-favorite'
    },
    {
      id: 'hy-2',
      english: 'Plaque vulnerability is dictated by a thin collagenous cap and a dense inflammatory core enriched with macrophages secreting Matrix Metalloproteinases (MMPs).',
      arabic: 'خطورة اللويحة العصيدية (Vulnerable Plaque) تعتمد أساساً على وجود غطاء ليفي رقيق وكتلة دهنية ملتهبة مليئة بالبلاعم (Macrophages) التي تفرز إنزيمات محللة للكولاجين (MMPs) مسببة التمزق.',
      tag: 'clinical-pearl'
    },
    {
      id: 'hy-3',
      english: 'Days 3 to 7 post-MI represent the critical peak window for mechanical ventricular free wall rupture due to aggressive macrophage phagocytosis of necrotic myocardium.',
      arabic: 'الفترة من اليوم الثالث إلى السابع بعد الجلطة (Days 3-7) هي أخطر فترة لحدوث تمزق ميكانيكي في جدار البطين (Free Wall Rupture) بسبب التهام البلاعم الشديد للأنسجة الميتة قبل بدء التليف.',
      tag: 'red-flag'
    }
  ],
  sections: [
    {
      id: 'sec-1',
      sectionNumber: 1,
      title: 'Pathogenesis of Atherosclerosis',
      titleArabic: 'الآلية الإمراضية لتصلب الشرايين',
      overview: 'Atherosclerosis develops via the "response-to-injury" paradigm where persistent hemodynamic, metabolic, or toxic stress disrupts endothelial barrier homeostasis.',
      overviewArabic: 'يتطور تصلب الشرايين من خلال فرضية "الاستجابة للإصابة"، حيث يؤدي اضطراب بطانة الشريان بسبب الكوليسترول أو التدخين أو الضغط إلى سلسلة التهابية وتراكم دهني مزمن.',
      sectionVisual: {
        id: 'vis-athero-flow',
        visualType: 'process',
        title: 'Atherosclerotic Plaque Progression Cascade',
        titleArabic: 'مخطط تسلسل تشكل اللويحة العصيدية',
        description: 'Step-by-step biological cascade from endothelial dysfunction to fibrous plaque formation.',
        arabicDescription: 'تسلسل الخطوات الحيوية من تلف البطانة إلى تكوّن اللويحة وتليفها.',
        clinicalRelevance: 'Targeting endothelial health (Statins, ACE inhibitors, smoking cessation) halts progression at early stages.',
        steps: [
          {
            stepNumber: 1,
            title: 'Endothelial Injury & Lipid Trapping',
            arabicTitle: 'تلف بطانة الشريان واحتباس الدهون',
            description: 'Hypertension, ox-LDL, and smoking compromise endothelial integrity, leading to LDL entry into the tunica intima.',
            arabicDescription: 'تؤدي عوامل مثل التدخين والضغط العالي إلى جرح الغشاء المبطن، مما يسمح بدخول كوليسترول LDL إلى طبقة الغلالة الباطنة (Intima).',
            badge: 'Trigger'
          },
          {
            stepNumber: 2,
            title: 'LDL Oxidation & Leukocyte Adhesion',
            arabicTitle: 'أكسدة الدهون وجذب خلايا المناعة',
            description: 'Intimal LDL oxidizes (oxLDL). Endothelial cells upregulate adhesion molecules (VCAM-1, ICAM-1) capturing circulating monocytes.',
            arabicDescription: 'يتأكسد الكوليسترول (oxLDL) ويصبح مادة سامة ومستفزة للجهاز المناعي، فتعبر خلايا الدم البيضاء إلى جدار الشريان.',
            badge: 'Inflammation'
          },
          {
            stepNumber: 3,
            title: 'Foam Cell & Fatty Streak Formation',
            arabicTitle: 'تكوين الخلايا الرغوية والخط الدهني',
            description: 'Macrophages engulf oxLDL indiscriminately via scavenger receptors (SR-A/CD36), transforming into lipid-laden foam cells.',
            arabicDescription: 'تبتلع البلاعم جزيئات الدهون المؤكسدة بشراهة حتى تمتلئ بالكامل وتتحول إلى "خلايا رغوية" (Foam Cells) مشكّلة الخط الدهني.',
            badge: 'Reversible'
          },
          {
            stepNumber: 4,
            title: 'SMC Migration & Fibrous Cap Synthesis',
            arabicTitle: 'هجرة خلايا العضلات الملساء وتكوين الغطاء الليفي',
            description: 'Platelet-derived growth factor (PDGF) stimulates smooth muscle migration from media to intima, depositing collagen.',
            arabicDescription: 'تهاجر خلايا العضلات الملساء من الطبقة الوسطى وتفرز ألياف كولاجين تشكل غطاءً متماسكاً يحبس الكتلة الدهنية.',
            badge: 'Fibroatheroma'
          }
        ]
      },
      concepts: [
        {
          id: 'c-1',
          term: 'Endothelial Dysfunction & oxLDL Retention',
          termArabic: 'خلل وظيفة البطانة واحتباس الكوليسترول المؤكسد',
          type: 'mechanism',
          englishContent: 'Chronic hemodynamic shear stress (at arterial branch points) combined with hypercholesterolemia initiates endothelial permeability changes. Circulating Low-Density Lipoprotein (LDL) traverses the endothelial monolayer and gets trapped in the subendothelial extracellular matrix, where it undergoes free-radical oxidation into oxidized LDL (oxLDL).',
          arabicExplanation: 'عند تفرعات الشرايين، يؤدي اضطراب تدفق الدم وارتفاع الكوليسترول إلى إضعاف بطانة الشريان (Endothelium). يتسرب كوليسترول LDL ويتعرض للأكسدة بواسطة الجذور الحرة، فيتحول إلى (oxLDL) وهو المحفز الأقوى للالتهاب المزمن.',
          keyPoints: [
            'Arterial branch points experience low/turbulent shear stress predisposed to plaque formation.',
            'Oxidized LDL is cytotoxic and directly recruits pro-inflammatory cytokines (IL-1, TNF-alpha).'
          ],
          pointPairs: [
            {
              englishPoint: 'Arterial branch points experience low and turbulent shear stress, predisposing the endothelium to increased permeability.',
              arabicExplanation: 'مناطق تفرع الشرايين التاجية تكون أكثر عرضة لتلف البطانة بسبب اضطراب تدفق الدم الميكانيكي في هذه الزوايا.'
            },
            {
              englishPoint: 'Oxidized LDL is cytotoxic to endothelial cells and induces secretion of cell adhesion molecules (VCAM-1 and ICAM-1).',
              arabicExplanation: 'الدهون المتأكسدة تعمل كسم موضعي يحث الخلايا المبطنة على إظهار مستقبلات لاصقة تجذب خلايا المناعة وتلصقها بجدار الشريان.'
            }
          ],
          clinicalCorrelation: {
            english: 'Statins reduce systemic LDL-C and possess pleiotropic anti-inflammatory properties that stabilize the arterial endothelium.',
            arabic: 'أدوية الستاتين (Statins) لا تخفض الكوليسترول فقط، بل لها تأثير وقائي مضاد للالتهاب يثبت بطانة الشرايين.'
          }
        },
        {
          id: 'c-2',
          term: 'Foam Cells & Fatty Streak Genesis',
          termArabic: 'نشوء الخلايا الرغوية والخطوط الدهنية',
          type: 'process',
          englishContent: 'Monocytes migrate across the injured endothelial barrier and differentiate into tissue macrophages. Unlike standard LDL receptors that downregulate when saturated, macrophage scavenger receptors (SR-A and CD36) lack feedback inhibition, leading to massive uncontrolled intake of oxLDL and formation of foam cells.',
          arabicExplanation: 'تتحول خلايا الدم البيضاء بعد دخولها الجدار إلى بلاعم نهمة، وتبتلع الدهون المؤكسدة عبر مستقبلات تفتقر لآلية التوقف الذاتي (Scavenger Receptors). تمتلئ الخلية تماماً بقطيرات الدهون حتى تبدو تحت المجهر رغوية الشكل، وتسمى الخلايا الرغوية (Foam Cells).',
          keyPoints: [
            'Fatty streaks are the earliest visible gross lesion; they can appear even in adolescents.',
            'Fatty streaks are non-obstructive and still completely reversible at this stage.'
          ]
        }
      ]
    },
    {
      id: 'sec-2',
      sectionNumber: 2,
      title: 'Plaque Destabilization & Acute Coronary Syndrome (ACS)',
      titleArabic: 'عدم استقرار اللويحة والمتلازمة التاجية الحادة',
      overview: 'Acute coronary syndrome is almost invariably triggered by acute mechanical disruption of an atherosclerotic plaque with subsequent super-imposed thrombosis.',
      overviewArabic: 'تحدث الأزمات القلبية الحادة عندما ينفجر الغطاء الليفي الرقيق للويحة العصيدية، مما يفضح المكونات الداخلية المحفزة للتجلط الفوري للدم داخل مجرى الشريان التاجي.',
      sectionVisual: {
        id: 'vis-plaque-compare',
        visualType: 'comparison-table',
        title: 'Stable Plaque vs Vulnerable (High-Risk) Plaque',
        titleArabic: 'مقارنة بين اللويحة المستقرة واللويحة المعرضة للانفجار',
        description: 'Key histological and clinical parameters determining catastrophic rupture risk.',
        arabicDescription: 'الفروقات النسيجية والسريرية المحددة لخطر الانفجار المفاجئ.',
        comparisonTable: {
          headers: ['Feature', 'Stable Plaque (Angina)', 'Vulnerable Plaque (ACS Risk)'],
          headersArabic: ['الخاصية', 'اللويحة المستقرة (ذبحة صدرية مستقرة)', 'اللويحة الهشة (خطر الجلطة الحادة)'],
          rows: [
            {
              criteria: 'Fibrous Cap Thickness',
              criteriaArabic: 'سُمك الغطاء الليفي',
              values: ['Thick, dense collagenous cap', 'Thin (<65 µm) attenuated cap'],
              valuesArabic: ['سميك ومتماسك غني بالكولاجين', 'رقيق جداً وهش أقل من 65 ميكرون']
            },
            {
              criteria: 'Lipid Core Size',
              criteriaArabic: 'حجم اللب الدهني النخري',
              values: ['Small (<30% total plaque volume)', 'Large (>40% volume, rich in cholesterol crystals)'],
              valuesArabic: ['صغير (أقل من 30%)', 'ضخم جداً وغني ببلورات الكوليسترول النخرية']
            },
            {
              criteria: 'Inflammatory Infiltrate',
              criteriaArabic: 'النشاط الالتهابي والبلاعم',
              values: ['Sparse macrophages, abundant SMCs', 'Dense active macrophages secreting MMPs'],
              valuesArabic: ['قليل الخلايا الالتهابية وغني بالعضلات', 'مكتظ بالبلاعم المفرزة لإنزيمات تكسير الكولاجين']
            },
            {
              criteria: 'Clinical Presentation',
              criteriaArabic: 'الأعراض السريرية',
              values: ['Predictable exertional angina relieved by rest', 'Sudden unpredictable rupture -> STEMI/NSTEMI'],
              valuesArabic: ['ألم صدر متوقع مع المجهود يزول بالراحة', 'انفجار مفاجئ يسبب جلطة حادة أو وفاة مفاجئة']
            }
          ]
        }
      },
      concepts: [
        {
          id: 'c-3',
          term: 'Matrix Metalloproteinase (MMP) Degradation',
          termArabic: 'تحلل الغطاء بواسطة إنزيمات MMP',
          type: 'mechanism',
          englishContent: 'T-lymphocytes in the plaque release IFN-gamma, which suppresses collagen synthesis by vascular smooth muscle cells. Concurrently, activated macrophages secrete Matrix Metalloproteinases (MMP-1, MMP-9 collagenases) that enzymatically dissolve interstitial collagen fibers, progressively thinning the fibrous cap until it tears under hemodynamic systolic spikes.',
          arabicExplanation: 'تفرز الخلايا المناعية مواداً توقف إنتاج الكولاجين الجديد، بينما تفرز البلاعم إنزيمات (MMPs) متخصصة في تآكل وهضم الكولاجين القديم. يصبح الغطاء الليفي رقيقاً جداً ولا يتحمل ضغط الدم الانقباضي، فينشرخ أو يتمزق.',
          keyPoints: [
            'Circadian surge: Plaque rupture occurs most frequently in early morning hours due to sympathetic surge.',
            'Plaque erosion without overt rupture accounts for roughly 25-30% of ACS presentations.'
          ]
        },
        {
          id: 'c-4',
          term: 'Thrombogenic Cascade & Occlusion',
          termArabic: 'سلسلة التجلط التاجي والانسداد الوعائي',
          type: 'process',
          englishContent: 'Plaque rupture exposes subendothelial tissue factor (TF) and collagen directly to the flowing bloodstream. Platelet GP Ib receptors bind von Willebrand Factor (vWF), triggering shape change, degranulation (TXA2 and ADP release), and conformational activation of GP IIb/IIIa receptors that crosslink fibrinogen.',
          arabicExplanation: 'بمجرد تمزق الغطاء، يتعرض الدم للبروتينات الداخلية والدهون، مما ينشط الصفائح الدموية فوراً لتلتصق وتفرز مواد تجذب المزيد من الصفائح، ويتكون خثار تاجي (Coronary Thrombus) يغلق مجرى الدم جزئياً أو كلياً.',
          keyPoints: [
            'Complete persistent occlusion -> ST-Elevation Myocardial Infarction (STEMI).',
            'Incomplete or transient occlusion -> Non-ST-Elevation Myocardial Infarction (NSTEMI) or Unstable Angina.'
          ]
        }
      ]
    },
    {
      id: 'sec-3',
      sectionNumber: 3,
      title: 'Myocardial Infarction: Ischemia Timeline & Morphology',
      titleArabic: 'احتشاء القلب: الجدول الزمني للإقفار والتغيرات النسيجية',
      overview: 'The cardiac response to coronary occlusion follows a predictable sequence of biochemical, functional, and morphological alterations.',
      overviewArabic: 'تستجيب خلايا القلب لانقطاع التروية الدموية وفق جدول زمني دقيق يبدأ بنضوب الطاقة وينتهي بتندب ليفي دائم.',
      sectionVisual: {
        id: 'vis-mi-timeline',
        visualType: 'timeline',
        title: 'Post-Infarction Morphologic & Pathologic Timeline',
        titleArabic: 'الجدول الزمني النسيجي والمضاعفات بعد احتشاء القلب',
        description: 'Sequence of microscopic alterations and maximum complication risks.',
        arabicDescription: 'تسلسل التغيرات المجهرية والمضاعفات الميكانيكية والكهربائية من الساعات الأولى حتى الشهرين.',
        timeline: [
          {
            phase: '0 - 30 Minutes',
            phaseArabic: 'أول نصف ساعة',
            title: 'Reversible Cellular Ischemia',
            arabicTitle: 'إقفار خلوي قابل للعكس',
            details: 'Rapid ATP depletion, glycogen drop, cessation of contractility within 60 seconds. Cells still viable if reperfused.',
            arabicDetails: 'توقف فوري لانقباض الخلية خلال دقيقة مع هبوط مخزون الطاقة ATP، لكن الأنسجة ما زالت حية إذا أُعيد تدفق الدم فوراً.',
            tag: 'Window of Opportunity'
          },
          {
            phase: '4 - 24 Hours',
            phaseArabic: 'من 4 إلى 24 ساعة',
            title: 'Early Coagulative Necrosis & Neutrophils',
            arabicTitle: 'بداية النخر التجلطي وظهور العدلات',
            details: 'Microscopic wavy fibers, early contraction band necrosis, hypereosinophilia. Arrhythmias are the leading cause of death.',
            arabicDetails: 'تبدأ ألياف العضلات بالتموج (Wavy fibers) وتفقد نواتها مع بدء وصول خلايا العدلات (Neutrophils). اضطراب نظم القلب القاتل هو الخطر الأكبر.',
            tag: 'Lethal Arrhythmia Risk'
          },
          {
            phase: '3 - 7 Days',
            phaseArabic: 'من اليوم 3 إلى 7',
            title: 'Macrophage Infiltration & Tissue Softening',
            arabicTitle: 'هجوم البلاعم وتلين النسيج العضلي',
            details: 'Extensive phagocytic clearance of necrotic myocytes produces a soft yellow-tan center with high risk of free-wall or papillary muscle rupture.',
            arabicDetails: 'تقوم البلاعم بهضم وتنظيف العضلات الميتة مما يجعل الجدار رخواً وضعيفاً جداً، فتحدث أخطر تمزقات الجدار أو الحبال الوترية للصمام الميترالي.',
            tag: 'Mechanical Rupture Peak'
          },
          {
            phase: '1 - 8 Weeks',
            phaseArabic: 'من أسبوع إلى شهرين',
            title: 'Granulation Tissue & Dense Collagen Scar',
            arabicTitle: 'النسيج الحبيبي والتندب الليفي الدائم',
            details: 'Type I collagen progressively replaces vascular granulation tissue, culminating in a firm white non-contractile fibrous scar.',
            arabicDetails: 'يتكون نسيج حبيبي غني بالأوعية الدموية ثم يحل محله ندبة ليفية بيضاء صلبة من الكولاجين لا تنقبض إطلاقاً.',
            tag: 'Permanent Scarring'
          }
        ]
      },
      concepts: [
        {
          id: 'c-5',
          term: 'Wavefront Phenomenon of Ischemic Cell Death',
          termArabic: 'ظاهرة جبهة الموجة للموت الخلوي الإقفاري',
          type: 'mechanism',
          englishContent: 'Cardiomyocyte death begins in the endocardial layer (subendocardium) because it is subjected to the highest intramural tension and is furthest from epicardial coronary trunks. If the vessel remains occluded, necrosis progresses transmurally over 6 to 12 hours as a "wavefront" until it encompasses the entire wall thickness.',
          arabicExplanation: 'تبدأ خلايا بطانة القلب الداخلية (Subendocardium) بالموت أولاً لأنها الأكثر تعرضاً لضغط الدم الداخلي والأبعد عن الشرايين التاجية الكبيرة. إذا لم يتم فتح الشريان، تمتد موجة النخر عبر سمك الجدار بالكامل لتصبح جلطة عبر جدارية كاملة (Transmural Infarction).',
          keyPoints: [
            'Prompt percutaneous coronary intervention (PCI door-to-balloon < 90 mins) salvages viable ischemic myocardium ("time is muscle").'
          ],
          clinicalCorrelation: {
            english: 'Emergency reperfusion therapy within 2-4 hours arrests the transmural wavefront, significantly reducing long-term heart failure mortality.',
            arabic: 'القسطرة القلبية العاجلة خلال أول ساعتين إلى 4 ساعات توقف زحف الجلطة وتنقذ عضلة القلب من التلف الكامل.'
          }
        },
        {
          id: 'c-6',
          term: 'Cardiac Biomarkers Kinetics (Troponin vs CK-MB)',
          termArabic: 'حركية المؤشرات الحيوية للقلب (تروبونين مقابل CK-MB)',
          type: 'comparison',
          englishContent: 'Cardiac Troponins (cTnI and cTnT) are the clinical gold standard for detecting myocardial necrosis. They rise within 2-4 hours, peak at 24-48 hours, and remain elevated for 7-14 days. Creatine Kinase-MB (CK-MB) rises similarly within 4-6 hours and peaks at 24 hours, but returns to baseline within 48-72 hours, making it uniquely useful for diagnosing re-infarction.',
          arabicExplanation: 'التروبونين (Troponin) هو التحليل المعياري الذهبي؛ يرتفع بعد ساعتين إلى 4 ساعات ويبقى مرتفعاً لأسبوعين في الدم. أما إنزيم (CK-MB) فيرتفع سريعاً ويعود لمستواه الطبيعي خلال يومين إلى 3 أيام، ولذلك يفيد تحديداً في اكتشاف حدوث جلطة ثانية جديدة (Re-infarction).',
          keyPoints: [
            'Troponins have nearly 100% tissue specificity for myocardium.',
            'CK-MB is essential to assess recurrent chest pain occurring on day 4 post-MI.'
          ]
        }
      ]
    }
  ],
  glossary: [
    {
      term: 'Atheroma',
      termArabic: 'عصيدة شريانية',
      definition: 'A fibrofatty accumulation in the inner arterial wall composed of a necrotic lipid core and a fibrous collagenous cap.',
      definitionArabic: 'تراكم دهني ليفي داخل جدار الشريان يتكون من لب نخر دهني وغطاء سطحي من الكولاجين.',
      category: 'Pathology'
    },
    {
      term: 'STEMI',
      termArabic: 'احتشاء القلب بارتفاع قطعة ST',
      definition: 'ST-Elevation Myocardial Infarction: Complete transmural necrosis resulting from total, persistent coronary artery thrombotic occlusion.',
      definitionArabic: 'احتشاء عضلة القلب كامل السماكة الناتج عن انسداد كلي تام ومستمر لأحد الشرايين التاجية.',
      category: 'Cardiology'
    },
    {
      term: 'Subendocardium',
      termArabic: 'الطبقة تحت الشغاف',
      definition: 'The innermost layer of the ventricular myocardium, uniquely vulnerable to ischemia due to high intracavitary pressure.',
      definitionArabic: 'الطبقة الداخلية الأعمق من عضلة القلب، وهي الأكثر عرضة لنقص التروية بسبب شدة الضغط الواقع عليها.',
      category: 'Anatomy'
    },
    {
      term: 'Matrix Metalloproteinases (MMPs)',
      termArabic: 'إنزيمات تفكيك المصفوفة الخلوية',
      definition: 'Zinc-dependent endopeptidases secreted by macrophages that degrade interstitial collagen in the fibrous cap.',
      definitionArabic: 'إنزيمات تفرزها خلايا البلاعم تقوم بتكسير ألياف الكولاجين في الغطاء الليفي مما يؤدي لضعفه وتمزقه.',
      category: 'Biochemistry'
    }
  ],
  summaryStats: {
    totalConcepts: 6,
    visualCount: 3,
    sectionsCount: 3
  }
};

export const MOCK_BIOCHEM_STUDY_NOTES: StudyNotesData = {
  id: 'biochem-krebs-demo',
  lectureTitle: 'Cellular Respiration: Krebs Cycle & Oxidative Phosphorylation',
  lectureTitleArabic: 'التنفس الخلوي: دورة كريبس والفسفرة التأكسدية',
  academicDomain: 'Biochemistry & Molecular Biology',
  summaryLevel: 'detailed',
  smartVisualsEnabled: true,
  generatedAt: new Date().toISOString(),
  sourceFileName: 'Biochem_Lec09_Mitochondrial_Bioenergetics.pptx',
  estimatedStudyTimeMinutes: 20,
  overview: {
    english: 'A detailed molecular synthesis of mitochondrial bioenergetics, examining the pyruvate dehydrogenase (PDH) multi-enzyme bridge, the eight cyclical enzymatic steps of the Citric Acid Cycle, and the proton-motive force powering ATP synthase.',
    arabic: 'ملخص كيميائي حيوي شامل لإنتاج الطاقة داخل الميتوكوندريا، يوضح معقد إنزيم نزع الهيدروجين من البيروفات (PDH)، والخطوات الثمانية لدورة كريبس، وسلسلة نقل الإلكترونات وتوليد جزيئات ATP.'
  },
  highYieldPoints: [
    {
      id: 'hy-b1',
      english: 'Isocitrate dehydrogenase catalyzes the irreversible rate-limiting step of the Citric Acid Cycle, allosterically activated by ADP and inhibited by ATP and NADH.',
      arabic: 'إنزيم (Isocitrate Dehydrogenase) هو الإنزيم المحدد لسرعة دورة كريبس بالكامل (Rate-limiting step)، ينشطه مركب ADP ويثبطه تراكم ATP وNADH.',
      tag: 'exam-favorite'
    },
    {
      id: 'hy-b2',
      english: 'Succinate dehydrogenase (Complex II) is the only Citric Acid Cycle enzyme physically embedded within the inner mitochondrial membrane.',
      arabic: 'إنزيم (Succinate Dehydrogenase) المكوّن للمعقد الثاني (Complex II) هو الإنزيم الوحيد في دورة كريبس المرتبط مباشرة بالغشاء الداخلي للميتوكوندريا.',
      tag: 'clinical-pearl'
    },
    {
      id: 'hy-b3',
      english: 'Cyanide (CN-) and Carbon Monoxide (CO) inhibit Cytochrome c Oxidase (Complex IV), irreversibly halting aerobic ATP generation.',
      arabic: 'السيانيد (Cyanide) وأول أكسيد الكربون (CO) يثبطان المعقد الرابع (Complex IV) لسلسلة التنفس، مما يوقف إنتاج الطاقة فوراً ويسبب الوفاة السريعة.',
      tag: 'red-flag'
    }
  ],
  sections: [
    {
      id: 'sec-b1',
      sectionNumber: 1,
      title: 'Pyruvate Dehydrogenase (PDH) Complex & Activation',
      titleArabic: 'معقد نازعة هيدروجين البيروفات (PDH) وتنظيمه',
      overview: 'The irreversible mitochondrial gateway linking cytoplasmic glycolysis to the tricarboxylic acid cycle.',
      overviewArabic: 'البوابة الكيميائية الحيوية التي تحول البيروفات الناتج من تحلل السكر إلى أسيتيل مرافق الإنزيم أ (Acetyl-CoA) داخل الميتوكوندريا.',
      sectionVisual: {
        id: 'vis-pdh-process',
        visualType: 'process',
        title: 'PDH Multi-Enzyme Cascade & 5 Essential Cofactors',
        titleArabic: 'سلسلة إنزيمات معقد PDH والعوامل المرافقة الخمسة',
        description: 'Coordinated catalysis by E1, E2, and E3 utilizing TPP, Lipoate, CoA, FAD, and NAD+.',
        arabicDescription: 'آلية التفاعل المتتابع عبر الإنزيمات الثلاثة بمساعدة فيتامينات B المختلفة.',
        clinicalRelevance: 'Thiamine deficiency (Vitamin B1) paralyzes PDH causing lactic acidosis and Wernicke-Korsakoff syndrome.',
        steps: [
          {
            stepNumber: 1,
            title: 'Decarboxylation via E1 (Pyruvate Dehydrogenase)',
            arabicTitle: 'نزع الكربوكسيل عبر إنزيم E1',
            description: 'Pyruvate loses CO2 and attaches as hydroxyethyl group to Thiamine Pyrophosphate (TPP / Vitamin B1).',
            arabicDescription: 'يُنزع غاز ثاني أكسيد الكربون ويرتبط البيروفات مع فيتامين B1 (الثيامين).',
            badge: 'Thiamine (B1)'
          },
          {
            stepNumber: 2,
            title: 'Oxidation & Acetyl Transfer via E2',
            arabicTitle: 'الأكسدة ونقل الأسيتيل عبر إنزيم E2',
            description: 'Hydroxyethyl group is oxidized to an acetyl group and transferred to lipoic acid, then to Coenzyme A (from Vitamin B5).',
            arabicDescription: 'تتأكسد المجموعة وتنتقل إلى حمض اللبويك ثم إلى مرافق الإنزيم أ (CoA المشتق من فيتامين B5).',
            badge: 'Lipoate & CoA'
          },
          {
            stepNumber: 3,
            title: 'Regeneration of Oxidized Lipoate via E3',
            arabicTitle: 'إعادة أكسدة حمض اللبويك عبر إنزيم E3',
            description: 'Dihydrolipoyl dehydrogenase uses FAD (Vitamin B2) and NAD+ (Vitamin B3) to re-oxidize lipoamide, generating NADH.',
            arabicDescription: 'يقوم إنزيم E3 بنقل الإلكترونات إلى FAD ثم إلى NAD+ لإنتاج جزيء NADH للطاقة.',
            badge: 'FAD (B2) & NAD (B3)'
          }
        ]
      },
      concepts: [
        {
          id: 'cb-1',
          term: 'PDH Complex Cofactors & Clinical Deficiencies',
          termArabic: 'العوامل المساعدة لمعقد PDH والأمراض الناتجة عن نقصها',
          type: 'mechanism',
          englishContent: 'The PDH complex requires five distinct cofactors: Thiamine pyrophosphate (TPP from B1), Lipoic acid, Coenzyme A (from B5 pantothenate), FAD (from B2 riboflavin), and NAD+ (from B3 niacin). Deficiency in any cofactor, notably thiamine in alcoholics, halts pyruvate entry into the Krebs cycle, diverting pyruvate to lactate and precipitating severe lactic acidosis.',
          arabicExplanation: 'يحتاج معقد PDH إلى 5 فيتامينات ومرافقات أساسية (B1, B2, B3, B5، وحمض اللبويك). عند نقص الثيامين (B1) كما في سوء التغذية أو إدمان الكحول، يعجز الجسم عن إدخال البيروفات لدورة كريبس، فيتحول إلى حمض اللاكتيك مسبباً حموضة الدم اللبنية (Lactic Acidosis).',
          keyPoints: [
            'Arsenic poisoning binds lipoic acid sulfhydryl groups, inhibiting PDH identically to B1 deficiency.',
            'Never administer intravenous glucose alone to thiamine-deficient patients without prior thiamine repletion.'
          ],
          clinicalCorrelation: {
            english: 'Administering high-dose glucose to a malnourished patient without thiamine induces acute Wernicke encephalopathy.',
            arabic: 'إعطاء محاليل الجلوكوز لمريض يعاني من نقص الثيامين دون تعويضه يسبب تلفاً دماغياً حاداً يُعرف بمتلازمة فيرنيكي.'
          }
        }
      ]
    },
    {
      id: 'sec-b2',
      sectionNumber: 2,
      title: 'Electron Transport Chain & Pharmacological Inhibitors',
      titleArabic: 'سلسلة نقل الإلكترونات والمثبطات الدوائية والسمية',
      overview: 'Coupling of electron flow through transmembrane complexes I-IV with proton pumping to establish the chemiosmotic gradient.',
      overviewArabic: 'انتقال الإلكترونات بين معقدات الغشاء الميتوكوندري وضخ البروتونات لتوليد فرق الجهد الكهروكيميائي المحرك لإنتاج الطاقة.',
      sectionVisual: {
        id: 'vis-etc-table',
        visualType: 'comparison-table',
        title: 'Mitochondrial Complexes & Specific Poisons / Inhibitors',
        titleArabic: 'معقدات الميتوكوندريا والسموم والمثبطات الدوائية المحددة',
        description: 'Target complexes, electron donors, proton stoichiometry, and toxic inhibitors.',
        arabicDescription: 'جدول مقارنة تفصيلي لكل معقد ومثبطاته السريرية الهامة في الامتحانات.',
        comparisonTable: {
          headers: ['Complex / Site', 'Function & Electron Flow', 'Protons Pumped', 'Classic Inhibitors / Poisons'],
          headersArabic: ['المعقد / الموقع', 'الوظيفة ومسار الإلكترون', 'البروتونات المضخة', 'المثبطات والسموم السريرية'],
          rows: [
            {
              criteria: 'Complex I (NADH Dehydrogenase)',
              criteriaArabic: 'المعقد الأول (NADH)',
              values: ['Transfers e- from NADH to CoQ', '4 H+ pumped', 'Rotenone (pesticide), Metformin (mild)'],
              valuesArabic: ['ينقل الإلكترونات من NADH إلى مرافق الإنزيم Q', 'يضخ 4 بروتونات', 'الروتينون (مبيد حشري)']
            },
            {
              criteria: 'Complex II (Succinate Dehydrogenase)',
              criteriaArabic: 'المعقد الثاني (FADH2)',
              values: ['Transfers e- from FADH2 to CoQ', '0 H+ pumped', 'Malonate (competitive inhibitor)'],
              valuesArabic: ['ينقل الإلكترونات من FADH2 إلى مرافق Q', 'لا يضخ بروتونات', 'المالونات']
            },
            {
              criteria: 'Complex III (Cytochrome bc1)',
              criteriaArabic: 'المعقد الثالث (السيتوكروم bc1)',
              values: ['Transfers e- from CoQ to Cytochrome c', '4 H+ pumped', 'Antimycin A'],
              valuesArabic: ['ينقل الإلكترونات من Q إلى سيتوكروم c', 'يضخ 4 بروتونات', 'أنتيميسين أ']
            },
            {
              criteria: 'Complex IV (Cytochrome c Oxidase)',
              criteriaArabic: 'المعقد الرابع (أكسيداز السيتوكروم c)',
              values: ['Transfers e- to final acceptor O2 -> H2O', '2 H+ pumped', 'Cyanide (CN-), Carbon Monoxide (CO), Azide'],
              valuesArabic: ['يسلم الإلكترون للأكسجين لتكوين الماء', 'يضخ بروتونين', 'السيانيد (CN-)، أول أكسيد الكربون (CO)']
            },
            {
              criteria: 'Complex V (ATP Synthase)',
              criteriaArabic: 'المعقد الخامس (مخلّقة ATP)',
              values: ['Proton flow down gradient synthesizes ATP', 'Synthesizes 1 ATP per ~3-4 H+', 'Oligomycin (blocks F0 proton channel)'],
              valuesArabic: ['تدفق البروتونات يصنع جزيئات ATP', 'يصنع جزيء ATP لكل 3-4 بروتونات', 'الأوليغومايسين (Oligomycin)']
            }
          ]
        }
      },
      concepts: [
        {
          id: 'cb-2',
          term: 'Uncouplers vs ATP Synthase Inhibitors',
          termArabic: 'المفرقات الحرارية (Uncouplers) مقابل مثبطات مخلّقة ATP',
          type: 'comparison',
          englishContent: 'ATP synthase inhibitors like oligomycin directly block the proton channel, increasing the proton gradient and stopping both ATP synthesis and oxygen consumption. In contrast, uncoupling agents (2,4-Dinitrophenol - DNP, high-dose aspirin, and brown fat thermogenin) dissipate the proton gradient across the inner membrane without generating ATP, resulting in uncontrolled oxygen consumption, rapid heat generation, and fatal hyperthermia.',
          arabicExplanation: 'مثبطات مثل (Oligomycin) تغلق القناة فيتوقف إنتاج ATP واستهلاك الأكسجين معاً. أما المواد المفرقة (Uncouplers) مثل مركب (DNP) وجرعات الأسبرين السامة وبروتين الثيرموجينين في الدهون البنية، فتفتح ثقوباً لتسريب البروتونات، فيحترق الجلوكوز والأكسجين بشدة دون توليد ATP، وتتحول الطاقة كلها إلى حرارة مفرطة قاتلة (Hyperthermia).',
          keyPoints: [
            'Aspirin overdose causes hyperthermia, tachypnea, and initial respiratory alkalosis followed by metabolic acidosis.',
            'Thermogenin in neonatal brown fat generates heat via non-shivering thermogenesis.'
          ]
        }
      ]
    }
  ],
  glossary: [
    {
      term: 'Proton-Motive Force',
      termArabic: 'القوة المحركة للبروتونات',
      definition: 'The electrochemical gradient generated across the inner mitochondrial membrane by complexes I, III, and IV.',
      definitionArabic: 'تدرج كهروكيميائي ناتج عن تراكم البروتونات بين غشائي الميتوكوندريا، يمثل الطاقة الدافعة لتصنيع ATP.',
      category: 'Bioenergetics'
    },
    {
      term: 'Substrate-Level Phosphorylation',
      termArabic: 'الفسفرة على مستوى الركيزة',
      definition: 'Direct synthesis of ATP or GTP by transfer of a high-energy phosphate from a substrate, exemplified by Succinyl-CoA Synthetase.',
      definitionArabic: 'تكوين جزيء ATP أو GTP مباشرة بنقل مجموعة فوسفات عالية الطاقة من المركب المتفاعل دون الحاجة لسلسلة نقل الإلكترونات.',
      category: 'Enzymology'
    }
  ],
  summaryStats: {
    totalConcepts: 4,
    visualCount: 2,
    sectionsCount: 2
  }
};

export const MOCK_PHARM_STUDY_NOTES: StudyNotesData = {
  id: 'pharm-ans-demo',
  lectureTitle: 'Autonomic Pharmacology: Adrenergic & Cholinergic Receptors',
  lectureTitleArabic: 'علم الأدوية للجهاز العصبي الذاتي: المستقبلات الأدرينالينية والكولينيرجية',
  academicDomain: 'Pharmacology & Neurobiology',
  summaryLevel: 'detailed',
  smartVisualsEnabled: true,
  generatedAt: new Date().toISOString(),
  sourceFileName: 'Pharm_Lec12_Autonomic_Nervous_System.docx',
  estimatedStudyTimeMinutes: 25,
  overview: {
    english: 'A high-yield clinical pharmacology study module analyzing the division between sympathetic and parasympathetic nervous systems, G-protein second messenger cascades (Gs, Gi, Gq), receptor subtype distributions, and drug therapeutics.',
    arabic: 'دليل شامل في علم الأدوية السريري يوضح الفروق بين الجهازين العصبيين السمبثاوي والباراسمبثاوي، وتصنيف المستقبلات الخلوية ومساراتها الإشارية (Gs, Gi, Gq) واستخداماتها العلاجية الهامة.'
  },
  highYieldPoints: [
    {
      id: 'hy-p1',
      english: 'Beta-1 adrenergic receptors (Gs) are located predominantly on cardiomyocytes and juxtaglomerular cells, increasing heart rate, contractility, and renin release.',
      arabic: 'مستقبلات بيتا-1 (Beta-1) تتمركز أساساً في خلايا القلب وجهاز مجاورات الكبيبات، محفزة نبضات القلب وقوة انقباضه وإفراز هرمون الرينين (Renin).',
      tag: 'clinical-pearl'
    },
    {
      id: 'hy-p2',
      english: 'Non-selective beta blockers (e.g., Propranolol) are strictly contraindicated in asthmatic patients because Beta-2 blockade induces severe bronchospasm.',
      arabic: 'يُحظر تماماً استخدام حاصرات بيتا غير الانتقائية (مثل Propranolol) لمرضى الربو لأن إغلاق مستقبلات بيتا-2 يسبب تضيقاً حاداً في القصبات الهوائية (Bronchospasm).',
      tag: 'red-flag'
    },
    {
      id: 'hy-p3',
      english: 'Organophosphate poisoning causes irreversible acetylcholinesterase inhibition, leading to cholinergic toxidrome (DUMBBELLS); treated with Atropine and Pralidoxime (2-PAM).',
      arabic: 'التسمم بالمبيدات الحشرية الفوسفاتية (Organophosphates) يثبط إنزيم تكسير الأستيل كولين مما يسبب فيضاناً كولينيرجياً يُعالج بمضاد أتروبين (Atropine) وبراليدوكسيم.',
      tag: 'exam-favorite'
    }
  ],
  sections: [
    {
      id: 'sec-p1',
      sectionNumber: 1,
      title: 'Adrenergic Receptor Classification & G-Protein Couplings',
      titleArabic: 'تصنيف المستقبلات الأدرينالينية ومسارات بروتينات G',
      overview: 'Signaling pathways of alpha-1, alpha-2, beta-1, beta-2, and beta-3 adrenergic receptors.',
      overviewArabic: 'المسارات الكيميائية الحيوية لمستقبلات الأدرينالين والنورأدرينالين وتأثيرها على مختلف الأعضاء.',
      sectionVisual: {
        id: 'vis-ans-hierarchy',
        visualType: 'hierarchy',
        title: 'Adrenergic Receptors: G-Protein Signaling & Target Organs',
        titleArabic: 'شجرة تصنيف المستقبلات الأدرينالينية ومواقعها الحيوية',
        description: 'Classification by G-protein second-messenger transducer and anatomical location.',
        arabicDescription: 'مخطط هرمي يوضح تصنيف كل مستقبل وبروتين G المرتبط به والأعضاء المستهدفة.',
        clinicalRelevance: 'Enables precise pharmacological selection of agonists and antagonists for hypertension, shock, and asthma.',
        hierarchy: {
          rootTitle: 'Adrenergic Receptor Family (Sympathetic Outflow)',
          rootTitleArabic: 'عائلة المستقبلات الأدرينالينية (الجهاز السمبثاوي)',
          categories: [
            {
              name: 'Alpha-1 (Gq Coupling)',
              nameArabic: 'ألفا-1 (مرتبط ببروتين Gq - زيادة الكالسيوم)',
              items: [
                {
                  title: 'Vascular Smooth Muscle',
                  arabicTitle: 'العضلات الملساء للأوعية الدموية',
                  detail: 'Vasoconstriction -> Increased systemic vascular resistance and blood pressure (Phenylephrine agonist, Prazosin blocker).'
                },
                {
                  title: 'Pupillary Dilator Muscle',
                  arabicTitle: 'العضلة الموسعة لحدقة العين',
                  detail: 'Pupil dilation / Mydriasis without cycloplegia.'
                },
                {
                  title: 'Prostate & Bladder Neck',
                  arabicTitle: 'عنق المثانة والبروستاتا',
                  detail: 'Urinary retention/closure (Tamsulosin alpha-1A antagonist treats BPH).'
                }
              ]
            },
            {
              name: 'Alpha-2 (Gi Coupling)',
              nameArabic: 'ألفا-2 (مرتبط ببروتين Gi - خفض cAMP)',
              items: [
                {
                  title: 'Presynaptic Nerve Terminals',
                  arabicTitle: 'نهايات الأعصاب قبل التشابكية',
                  detail: 'Negative feedback auto-inhibition of norepinephrine release (Clonidine, Methyldopa).'
                },
                {
                  title: 'Pancreatic Beta Cells',
                  arabicTitle: 'خلايا بيتا في البنكرياس',
                  detail: 'Decreases insulin secretion during sympathetic fight-or-flight states.'
                }
              ]
            },
            {
              name: 'Beta-1 & Beta-2 (Gs Coupling)',
              nameArabic: 'بيتا-1 وبيتا-2 (مرتبط ببروتين Gs - زيادة cAMP)',
              items: [
                {
                  title: 'Beta-1: Heart & Kidneys',
                  arabicTitle: 'بيتا-1: عضلة القلب والكلى',
                  detail: 'Increases heart rate (SA node), contractility, and renin secretion (Dobutamine agonist, Metoprolol blocker).'
                },
                {
                  title: 'Beta-2: Lungs & Skeletal Arteries',
                  arabicTitle: 'بيتا-2: القصبات الهوائية والشرايين العضلية',
                  detail: 'Bronchodilation and vasodilation (Albuterol for acute asthma attacks, Salmeterol for maintenance).'
                }
              ]
            }
          ]
        }
      },
      concepts: [
        {
          id: 'cp-1',
          term: 'Gq vs Gs vs Gi Signal Transduction Mnemonic',
          termArabic: 'مقارنة مسارات نقل الإشارة عبر بروتينات Gq و Gs و Gi',
          type: 'mechanism',
          englishContent: 'Adrenergic and cholinergic receptor signaling follows the classic "HAVe 1 M&M" rule: H1, A1 (Alpha-1), V1, M1, and M3 are Gq-coupled (activating Phospholipase C -> IP3 and DAG -> Ca2+ mobilization). All Beta receptors (B1, B2, B3) are Gs-coupled (stimulating Adenylyl Cyclase -> cAMP -> Protein Kinase A). Alpha-2, M2, and Dopamine D2 are Gi-coupled (inhibiting Adenylyl Cyclase -> lowering cAMP).',
          arabicExplanation: 'تتبع المستقبلات قاعدة سهلة للحفظ: مستقبلات (Alpha-1, M1, M3) ترتبط بـ Gq لتزيد الكالسيوم داخل الخلية وتسبب الانقباض والإفراز. بينما جميع مستقبلات بيتا (Beta-1, 2, 3) ترتبط بـ Gs لتنشيط إنزيم تصنيع cAMP. ومستقبلات (Alpha-2 و M2) ترتبط بـ Gi لتثبيط إنتاج cAMP وتخفيف النشاط.',
          keyPoints: [
            'Gs stimulates adenylyl cyclase; Gi inhibits it.',
            'Gq stimulates Phospholipase C cleavage of PIP2 into IP3 and DAG.'
          ]
        }
      ]
    }
  ],
  glossary: [
    {
      term: 'Adrenergic Agonist',
      termArabic: 'محفز أدريناليني',
      definition: 'A pharmacological agent that binds to and activates alpha or beta adrenergic receptors.',
      definitionArabic: 'دواء يرتبط بمستقبلات ألفا أو بيتا وينشطها محاكياً تأثير الجهاز العصبي السمبثاوي.',
      category: 'Pharmacodynamics'
    },
    {
      term: 'Cardioselectivity',
      termArabic: 'الانتقائية القلبية',
      definition: 'The preferential binding of a beta-blocker to Beta-1 receptors over Beta-2 receptors (e.g. Metoprolol vs Propranolol).',
      definitionArabic: 'خاصية إغلاق مستقبلات بيتا-1 القلبية تحديداً دون إغلاق بيتا-2 في الرئتين لتجنب نوبات ضيق التنفس.',
      category: 'Clinical Therapeutics'
    }
  ],
  summaryStats: {
    totalConcepts: 3,
    visualCount: 1,
    sectionsCount: 1
  }
};

/**
 * Returns model study notes matching a requested preset or text topic
 */
export function getSampleFallbackNotes(presetTopic?: string, lectureText?: string, fileName?: string): StudyNotesData {
  const query = `${presetTopic || ''} ${fileName || ''} ${lectureText || ''}`.toLowerCase();

  if (query.includes('biochem') || query.includes('krebs') || query.includes('respiration') || query.includes('mitochondri')) {
    return { ...MOCK_BIOCHEM_STUDY_NOTES, generatedAt: new Date().toISOString() };
  }
  if (query.includes('pharm') || query.includes('ans') || query.includes('receptor') || query.includes('adrenergic') || query.includes('autonomic')) {
    return { ...MOCK_PHARM_STUDY_NOTES, generatedAt: new Date().toISOString() };
  }
  // Default to cardiology
  return { ...MOCK_CARDIOLOGY_STUDY_NOTES, generatedAt: new Date().toISOString() };
}
