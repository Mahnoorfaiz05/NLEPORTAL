import type { Question } from "./types";
export const medicineQuestions: Question[] = [
  {
    "id": 1,
    "question": "A 65-year-old man, 40 pack-year smoker, presents with 3 months progressive hemoptysis, weight loss 7kg, and hoarseness. CT chest shows central hilar mass 4.5cm with cavitation, encasing right main bronchus, with mediastinal lymphadenopathy. Labs: Ca 12.8 mg/dL, PTH suppressed, PTHrP elevated. Biopsy: sheets of polygonal cells with keratin pearls, intercellular bridges, p40 positive, TTF-1 negative. What is most likely diagnosis and paraneoplastic mechanism?",
    "options": [
      "Squamous cell carcinoma lung with PTHrP-mediated hypercalcemia",
      "Adenocarcinoma with SIADH",
      "Small cell carcinoma with ectopic ACTH",
      "Mesothelioma with hypoglycemia due to IGF-2",
      "Carcinoid with carcinoid syndrome"
    ],
    "answer": 0,
    "explanation": "Central + cavitation + keratin pearls + p40+ = SCC. SCC produces PTHrP → hypercalcemia, not bone mets."
  },
  {
    "id": 2,
    "question": "A 24-year-old woman presents with recurrent UTIs, bilateral flank pain, microscopic hematuria, and BP 152/96. Family history father and paternal grandfather on dialysis at 50s. US: bilaterally enlarged kidneys 16cm each with multiple cysts of varying sizes, liver also has 3 cysts. Fundoscopy normal. What is inheritance and most feared extra-renal complication to counsel?",
    "options": [
      "ADPKD PKD1/PKD2 autosomal dominant; Berry aneurysm → SAH, MVP, colonic diverticula",
      "ARPKD autosomal recessive; only hepatic fibrosis",
      "Medullary sponge kidney; no extra-renal",
      "Simple cysts; benign",
      "Alport X-linked; deafness only"
    ],
    "answer": 0,
    "explanation": "ADPKD adult onset, liver cysts, HTN, intracranial aneurysm screening if family h/o SAH."
  },
  {
    "id": 3,
    "question": "A 45-year-old man with chronic alcohol use presents with sudden severe epigastric pain radiating to back, vomiting, relieved leaning forward. Exam: epigastric tenderness, absent bowel sounds. Labs: Amylase 1300, lipase 2100, triglycerides 180, glucose 240 mg/dL, Ca 7.6 mg/dL, LDH 450, PaO2 68 mmHg. CT: peripancreatic stranding. Which scoring uses these as poor prognostic factors within 48h?",
    "options": [
      "Ranson criteria - Age>55, WBC>16k, Glucose>200, LDH>350, AST>250, Ca<8, PaO2<60, Base deficit>4, Fluid sequestration>6L",
      "Child-Pugh only bilirubin",
      "CURB-65 confusion",
      "APACHE only age",
      "MELD"
    ],
    "answer": 0,
    "explanation": "Ranson predicts mortality in acute pancreatitis. Hypocalcemia due to saponification, hyperglycemia due to insulin deficiency."
  },
  {
    "id": 4,
    "question": "A 22-year-old vegetarian woman presents with 6 months fatigue, sore tongue, tingling in feet, unsteady gait. Exam: pallor, glossitis, loss of vibration and proprioception in legs, positive Romberg, hyperreflexia at knees. Labs: Hb 7.5 g/dL, MCV 114 fL, WBC 3.1k, platelet 105k, hypersegmented neutrophils, LDH high, indirect bilirubin mildly high, B12 85 pg/mL low. Which neurologic tracts involved and definitive treatment?",
    "options": [
      "Subacute combined degeneration - dorsal column + corticospinal; IM hydroxocobalamin lifelong if pernicious anemia with anti-intrinsic factor antibodies",
      "Microcytic anemia due to iron only",
      "Hemolytic anemia steroids only",
      "Aplastic anemia ATG only",
      "Normal neurology iron only"
    ],
    "answer": 0,
    "explanation": "B12 needed for myelin, deficiency → demyelination. Pernicious anemia autoimmune."
  },
  {
    "id": 5,
    "question": "A 58-year-old chronic alcoholic, malnourished, brought with acute confusion, ataxic gait, horizontal nystagmus, bilateral lateral rectus palsy, confabulation. History of vomiting 4 days, no food intake. Wife says he drinks 12 units/day for 15 years. Resident plans D50 infusion before thiamine. What error and immediate correction to prevent irreversible damage?",
    "options": [
      "Giving glucose before thiamine precipitates Wernicke → Korsakoff; Give high-dose IV thiamine 500mg TDS for 3-5 days before/with glucose",
      "Giving thiamine before glucose is error",
      "Giving fluids is error",
      "Correcting Mg is error",
      "Nutritional support is error"
    ],
    "answer": 0,
    "explanation": "Thiamine cofactor for pyruvate dehydrogenase, glucose increases demand."
  },
  {
    "id": 6,
    "question": "A 35-year-old woman presents with 6 months paroxysmal headaches, palpitations, sweating, anxiety. During attacks BP 220/130, HR 110, pallor. Between attacks BP normal. CT abdomen: 4.2cm right adrenal heterogeneous mass with necrosis. 24hr urinary metanephrines and VMA markedly elevated. She is scheduled for adrenalectomy. What is correct pre-op sequence?",
    "options": [
      "Alpha-blockade phenoxybenzamine 10-14 days with high salt diet and fluids, then add beta-blocker if tachycardia, monitor orthostatic hypotension",
      "Beta-blockade alone first → unopposed alpha crisis",
      "ACE-I alone",
      "Immediate surgery without prep → hypertensive crisis on induction",
      "No prep needed"
    ],
    "answer": 0,
    "explanation": "Pheochromocytoma rule: alpha before beta."
  },
  {
    "id": 7,
    "question": "A 38-year-old man HIV positive, CD4 45 cells, not on ART, presents with 2 weeks progressive dyspnea, dry cough, fever, weight loss. Exam: tachypneic, SpO2 88% room air, bibasal creps. CXR: bilateral perihilar ground-glass opacities with sparing of periphery, no effusion. ABG: PaO2 62 mmHg, A-a gradient high. LDH 620. What is diagnosis and treatment with indication for steroids?",
    "options": [
      "Pneumocystis jirovecii pneumonia; High-dose TMP-SMX 15-20mg/kg + prednisone if PaO2<70 or A-a>35",
      "TB; ATT only",
      "Bacterial pneumonia; Amoxicillin",
      "Kaposi sarcoma; Chemo",
      "COVID; Remdesivir"
    ],
    "answer": 0,
    "explanation": "PCP classic in CD4<200, ground glass, high LDH, hypoxia."
  },
  {
    "id": 8,
    "question": "A 28-year-old man presents with hemoptysis, dyspnea, oliguria, hematuria. Labs: Hb 8.5, creatinine 3.2 rising, urinalysis RBC casts, protein 2+. Anti-GBM antibodies positive linear IgG on immunofluorescence, p-ANCA positive 30%. Biopsy: crescentic GN with linear IgG along GBM. Diagnosis and emergency management?",
    "options": [
      "Goodpasture syndrome (anti-GBM disease); Plasma exchange + cyclophosphamide + steroids",
      "IgA nephropathy; Steroids alone",
      "Alport; No immunotherapy",
      "GPA alone; Only steroids",
      "Lupus nephritis; Only hydroxychloroquine"
    ],
    "answer": 0,
    "explanation": "Pulmonary-renal syndrome, linear deposits, rapidly progressive GN."
  },
  {
    "id": 9,
    "question": "A 55-year-old man with dilated cardiomyopathy, prior MI, EF 25%, NYHA III, on furosemide. Exam: elevated JVP, bibasal creps, edema. Labs: BNP high, K 4.2. Which combination reduces mortality, not just symptoms?",
    "options": [
      "Sacubitril-valsartan or ACE-I + Evidence-based beta-blocker bisoprolol/carvedilol + MRA spironolactone + SGLT2 inhibitor dapagliflozin",
      "Digoxin alone reduces mortality - false, only reduces hospitalization",
      "Furosemide alone reduces mortality - false, symptom only",
      "Verapamil reduces mortality in HFrEF - harmful",
      "Aspirin alone"
    ],
    "answer": 0,
    "explanation": "Four pillars of HFrEF guideline-directed therapy."
  },
  {
    "id": 10,
    "question": "A 60-year-old woman with 1 year weight gain 8kg, constipation, cold intolerance, fatigue, menorrhagia, hoarse voice, dry skin, non-pitting edema, bradycardia 52/min, delayed relaxation ankle reflex. Labs: TSH 48 mIU/L high, free T4 0.4 low, anti-TPO high. At risk of what if infection occurs?",
    "options": [
      "Myxedema coma - hypothermia, hypoventilation, hypotension, altered mentation; precipitated by infection, sedatives, cold",
      "Thyroid storm",
      "Adrenal crisis alone",
      "DKA",
      "Pheo crisis"
    ],
    "answer": 0,
    "explanation": "Severe hypothyroidism decompensation."
  },
  {
    "id": 11,
    "question": "A 50-year-old man acute retrosternal chest pain radiating left arm, diaphoresis, nausea, onset 2hr ago. ECG: ST elevation V1-V4 with hyperacute T, Q waves developing. Troponin I high. Echo: anterior wall hypokinesia, EF 35%. Coronary likely?",
    "options": [
      "Proximal LAD occlusion - Widowmaker, worst prognosis, risk of cardiogenic shock and VSD",
      "RCA - inferior MI bradycardia",
      "LCx - lateral MI",
      "Pericarditis - diffuse ST",
      "Aortic dissection - tearing pain BP difference"
    ],
    "answer": 0,
    "explanation": "Anterior STEMI."
  },
  {
    "id": 12,
    "question": "A 33-year-old woman with 2 years recurrent painful oral aphthae, genital ulcers, erythema nodosum, bilateral anterior uveitis, and pathergy test positive pustule after needle prick. HLA-B51 positive. Diagnosis and vessel type?",
    "options": [
      "Behcet disease - variable vessel vasculitis, Silk route, treatment colchicine + steroids + azathioprine",
      "SLE - ANA positive small vessel",
      "RA - small joints",
      "Reiter - HLA-B27",
      "Crohn - granulomatous"
    ],
    "answer": 0,
    "explanation": "Behcet triad."
  },
  {
    "id": 13,
    "question": "A 70-year-old man AF not anticoagulated sudden aphasia, right hemiplegia, facial droop, NIHSS 16, last known well 2.5hr ago. CT head no bleed ASPECTS 9, CT angio left M1 occlusion. Eligible for thrombolysis. Additional therapy with extended window?",
    "options": [
      "Mechanical thrombectomy up to 24h with perfusion imaging DAWN/DEFUSE, best within 6h, plus IV tenecteplase",
      "Immediate warfarin",
      "Carotid endarterectomy emergent - not acute",
      "IV heparin bolus before lysis - increases bleed",
      "Lumbar puncture - not indicated"
    ],
    "answer": 0,
    "explanation": "Large vessel occlusion."
  },
  {
    "id": 14,
    "question": "A 25-year-old woman fever, malar rash, photosensitivity, oral ulcers, arthralgia, proteinuria 3g, RBC casts, low C3/C4, anti-dsDNA high, ANA positive. Biopsy: diffuse endocapillary proliferation wire-loop subendothelial deposits, crescents. Class and induction?",
    "options": [
      "Class IV diffuse proliferative LN - high dose steroids + mycophenolate or IV cyclophosphamide",
      "Class I minimal mesangial",
      "Class II mesangial proliferative",
      "Class V membranous",
      "Class VI sclerosing"
    ],
    "answer": 0,
    "explanation": "Most common severe LN."
  },
  {
    "id": 15,
    "question": "A 45-year-old man chronic HBV surface Ag+, presents with palpable purpura legs, arthralgia, peripheral neuropathy mononeuritis multiplex, low C4, cryoglobulins positive, RF positive. Skin biopsy leukocytoclastic vasculitis. Diagnosis?",
    "options": [
      "Mixed cryoglobulinemia vasculitis secondary to HBV - small vessel immune complex",
      "HSP - IgA",
      "GPA - c-ANCA",
      "PAN - HBV but medium vessel, no cryo",
      "SLE"
    ],
    "answer": 0,
    "explanation": "HBV/HCV → cryoglobulins."
  },
  {
    "id": 16,
    "question": "A 30-year-old woman amenorrhea, galactorrhea, headaches, bitemporal hemianopia, cold intolerance, hypotension. Labs: low free T4 low TSH, low cortisol low ACTH, low LH/FSH, prolactin mildly high due to stalk effect. MRI: 2.5cm sellar mass compressing chiasm with hemorrhage. Diagnosis thyroid abnormality?",
    "options": [
      "Central hypothyroidism due to pituitary macroadenoma apoplexy with panhypopituitarism",
      "Primary hypothyroidism",
      "Addison primary",
      "Prolactinoma only",
      "Craniopharyngioma child only"
    ],
    "answer": 0,
    "explanation": "Pituitary compression → central."
  },
  {
    "id": 17,
    "question": "A 48-year-old alcoholic man hematemesis 500mL, melena, hypotension 85/55, tachycardia 115, jaundice, ascites, splenomegaly, spider nevi. Hb 7.2, INR 1.8, platelets 65k. Endoscopy: large esophageal varices with active spurting. Management priority?",
    "options": [
      "Airway, breathing, circulation, octreotide infusion, band ligation, prophylactic ceftriaxone, non-selective BB carvedilol secondary prophylaxis, TIPS if refractory",
      "NSAIDs",
      "Warfarin",
      "No treatment",
      "Immediate surgical shunt"
    ],
    "answer": 0,
    "explanation": "Variceal bleed portal HTN."
  },
  {
    "id": 18,
    "question": "A 55-year-old man chronic NSAID user epigastric pain worse at night relieved by food, melena 2 days, Hb 9.5. Endoscopy: duodenal ulcer anterior wall with visible vessel Forrest IIa. H. pylori urease positive. Management?",
    "options": [
      "High-dose IV PPI, endoscopic hemostasis, triple therapy PPI+clarithro+amox, stop NSAIDs, test eradication",
      "Surgery immediately",
      "Antacids alone",
      "No treatment",
      "Steroids"
    ],
    "answer": 0,
    "explanation": "Duodenal ulcer bleed."
  },
  {
    "id": 19,
    "question": "A 50-year-old man progressive dysphagia to solids then liquids, regurgitation undigested food, weight loss 10kg, halitosis. Barium swallow: dilated esophagus with retained food, bird-beak at GE junction. Manometry: absent peristalsis, incomplete LES relaxation, high resting LES pressure. Risk and needed test?",
    "options": [
      "Achalasia - loss myenteric plexus; Do endoscopy to exclude pseudoachalasia malignancy; Risk SCC esophagus",
      "Barrett adenocarcinoma only",
      "No risk",
      "Gastric cancer only",
      "Colon cancer"
    ],
    "answer": 0,
    "explanation": "Achalasia complication."
  },
  {
    "id": 20,
    "question": "A 33-year-old woman Graves disease stopped carbimazole 2 weeks ago presents with fever 39.5°C, HR 148 irregular AF, agitation, delirium, vomiting diarrhea, jaundice. Exam: goiter, exophthalmos, tremor. Labs: free T4 very high, TSH suppressed. Burch-Wartofsky 55. Treatment sequence?",
    "options": [
      "PTU/methimazole first, then 1hr later Lugol iodine, propranolol, hydrocortisone, cooling, treat precipitant",
      "No treatment",
      "Aspirin",
      "Heparin",
      "Antibiotics only"
    ],
    "answer": 0,
    "explanation": "Thyroid storm."
  },
  {
    "id": 21,
    "question": "A 50-year-old woman resistant HTN 160/100 despite 3 drugs, hypokalemia 2.8, metabolic alkalosis, muscle weakness, polyuria. Labs: aldosterone high, renin low, Na high. CT: 1.8cm left adrenal adenoma. Confirmatory test and treatment?",
    "options": [
      "Primary hyperaldosteronism Conn - saline suppression test fails to suppress aldo; Spironolactone + laparoscopic adrenalectomy",
      "Cushing",
      "Pheo",
      "Addison",
      "RAS"
    ],
    "answer": 0,
    "explanation": "HTN + hypoK + alkalosis."
  },
  {
    "id": 22,
    "question": "A 42-year-old woman weight loss, fatigue, nausea, dizziness on standing, hyperpigmented creases, gums, nipples, hypotension 90/60, hyponatremia 124, hyperkalemia 5.8, hypoglycemia. Cortisol 2 low, ACTH 980 high, anti-adrenal antibodies positive. Diagnosis emergency?",
    "options": [
      "Primary adrenal insufficiency Addison autoimmune; Risk adrenal crisis → stress dose hydrocortisone + fludrocortisone",
      "Cushing",
      "Secondary adrenal low ACTH no pigmentation",
      "Pheo",
      "Hyperthyroid"
    ],
    "answer": 0,
    "explanation": "Primary low cortisol high ACTH pigmentation POMC."
  },
  {
    "id": 23,
    "question": "A 29-year-old woman 2 first-trimester abortions, DVT left leg at 26y, now 30w pregnant BP 158/104, proteinuria 2.5g, platelet 88k, aPTT 52 prolonged not correcting with mixing study, PT normal. Diagnosis underlying?",
    "options": [
      "Antiphospholipid syndrome with preeclampsia - lupus anticoagulant prolongs aPTT but paradoxically thrombotic",
      "ITP",
      "DIC",
      "HELLP alone",
      "Factor V Leiden - does not prolong aPTT"
    ],
    "answer": 0,
    "explanation": "APS criteria."
  },
  {
    "id": 24,
    "question": "A 19-year-old college student fever, sore throat, fatigue 2 weeks, cervical posterior lymphadenopathy, splenomegaly, atypical lymphocytes Downey cells, heterophile antibody positive, LFT mildly elevated. Advice?",
    "options": [
      "EBV infectious mononucleosis - avoid contact sports 3-4 weeks due to splenic rupture risk",
      "CMV heterophile negative",
      "HIV",
      "Toxoplasma",
      "Strep - atypical lymphocytes not seen"
    ],
    "answer": 0,
    "explanation": "Mononucleosis."
  },
  {
    "id": 25,
    "question": "A 60-year-old man gout tophi over elbows, serum uric acid 10.2 mg/dL, creatinine 1.4, renal stones. Presents acute podagra first MTP hot red swollen. Which drug acutely and which drug chronically not to start in acute?",
    "options": [
      "Acute: NSAID indomethacin/colchicine/low-dose steroids; Chronic: Allopurinol/febuxostat after acute settles 2 weeks, with colchicine prophylaxis",
      "Start allopurinol during acute - worsens",
      "No treatment",
      "Antibiotics",
      "Steroids only chronic"
    ],
    "answer": 0,
    "explanation": "Urate lowering not acute."
  },
  {
    "id": 26,
    "question": "A 55-year-old woman never smoker progressive dyspnea 2y dry cough bibasal fine end-inspiratory crackles clubbing. PFT: FVC 55% predicted low, FEV1/FVC 88% high, DLCO 38% low, TLC low. HRCT: basal peripheral reticular opacities honeycombing traction bronchiectasis. Most likely and therapy?",
    "options": [
      "IPF UIP pattern - antifibrotics pirfenidone/nintedanib, O2, transplant referral, poor prognosis",
      "COPD - obstructive high TLC",
      "Asthma - reversible",
      "Bronchiectasis - productive cough",
      "TB - cavitation upper lobe"
    ],
    "answer": 0,
    "explanation": "ILD."
  },
  {
    "id": 27,
    "question": "A 40-year-old woman asthma on budesonide 400mcg BD, still uses salbutamol 5-6 puffs daily, wakes 3 nights/week, FEV1 65% predicted, technique correct, adherence good. Next step per GINA and why not LABA alone?",
    "options": [
      "Add LABA formoterol in combination ICS/LABA inhaler; LABA monotherapy without ICS increases asthma death due to masking inflammation",
      "Oral salbutamol alone",
      "Long-term azithromycin - not first step",
      "Stop ICS",
      "Propranolol - bronchoconstriction"
    ],
    "answer": 0,
    "explanation": "Step-up."
  },
  {
    "id": 28,
    "question": "A 60-year-old man fatigue 3 months early satiety weight loss 5kg massive splenomegaly 14cm, no lymphadenopathy. CBC: WBC 112k with myelocytes metamyelocytes promyelocytes basophilia 5% eosinophilia, platelets 480k. LAP score low. BCR-ABL p210 positive. Best targeted and what predicts progression?",
    "options": [
      "Imatinib BCR-ABL TKI; Additional chromosomal abnormalities, blasts >10% → accelerated/blast crisis",
      "Rituximab anti-CD20",
      "HCQ",
      "MTX",
      "Hydroxyurea curative - only cytoreduction"
    ],
    "answer": 0,
    "explanation": "CML chronic phase."
  },
  {
    "id": 29,
    "question": "A 58-year-old man 6 months back pain worse night, fatigue, recurrent sinus infections, weight loss. Labs: Hb 8.8, Ca 11.9 high, creatinine 2.3, ESR 98, total protein 9.9 albumin 3.0 gap high. SPEP: M-spike IgG kappa 4.2g/dL. X-ray: punched-out lytic skull lesions, vertebral compression. What distinguishes from MGUS?",
    "options": [
      "CRAB features hyperCalcemia Renal Anemia Bone lesions + clonal plasma >10% or SLiM CRAB criteria → multiple myeloma",
      "M-protein alone = MGUS",
      "Age>50 alone",
      "Mild protein high alone",
      "Asymptomatic alone"
    ],
    "answer": 0,
    "explanation": "Myeloma defining events."
  },
  {
    "id": 30,
    "question": "A 25-year-old woman fever confusion headache oliguria petechiae. Labs: Hb 7.6, platelet 16k, creatinine 2.0, LDH 1100, indirect bilirubin high, retics high, PT/APTT normal, haptoglobin low. Smear schistocytes. ADAMTS13 activity <10%. Management?",
    "options": [
      "TTP pentad - plasma exchange daily + high dose steroids + rituximab if refractory, avoid platelet transfusion unless life-threatening bleed",
      "DIC - FFP platelets",
      "ITP - IVIG",
      "HUS eculizumab - mainly complement mediated",
      "No treatment"
    ],
    "answer": 0,
    "explanation": "vWF multimer."
  },
  {
    "id": 31,
    "question": "A 28-year-old woman 2 weeks petechiae legs gum bleeding heavy menses, no fever, no drugs, no recent infection. CBC: platelet 11k, Hb 13.5 normal, WBC 6.2 normal, PT/APTT normal, no schistocytes. No hepatosplenomegaly. Diagnosis pathophysiology?",
    "options": [
      "ITP - autoantibodies anti-GPIIb/IIIa → peripheral destruction + marrow megakaryocytes increased",
      "DIC - consumption coagulopathy low fibrinogen",
      "TTP - ADAMTS13 deficiency schistocytes",
      "Hemophilia - factor deficiency normal platelets",
      "Aplastic anemia - pancytopenia"
    ],
    "answer": 0,
    "explanation": "Isolated thrombocytopenia."
  },
  {
    "id": 32,
    "question": "A 24-year-old woman started nitrofurantoin 10 days ago jaundiced fatigue dark urine. Labs: Hb 8.1, indirect bilirubin high, LDH 680, haptoglobin <10, retics 7.5%, spherocytes blood film. Direct Coombs IgG+C3d positive. Mechanism?",
    "options": [
      "Drug-induced AIHA warm antibodies - stop drug + steroids if severe",
      "Thalassemia microcytic",
      "Iron deficiency",
      "G6PD Heinz bodies",
      "Gilbert unconjugated normal LDH"
    ],
    "answer": 0,
    "explanation": "DAT positive."
  },
  {
    "id": 33,
    "question": "A 39-year-old man with 10-year ulcerative colitis pancolitis presents with fatigue pruritus jaundice weight loss. Labs: ALP 520 4x ULN, bilirubin 3.8 direct, AST/ALT mild high. MRCP: multifocal short strictures and dilatations intra+extrahepatic beads on string. p-ANCA positive. Complication surveillance?",
    "options": [
      "Primary sclerosing cholangitis → cholangiocarcinoma 10-15% lifetime + high colorectal cancer risk → annual colonoscopy + CA19-9/MRCP + dominant stricture brush cytology",
      "RCC",
      "Pancreatic pseudocyst",
      "Hepatoblastoma",
      "Gastric outlet obstruction"
    ],
    "answer": 0,
    "explanation": "PSC+UC association."
  },
  {
    "id": 34,
    "question": "A 63-year-old 40 pack-year smoker weight loss hemoptysis. CT: 3.8cm peripheral spiculated mass RUL pleural tag. Biopsy: gland forming, mucin+, TTF-1+, napsin A+, p40 negative. Molecular mandatory?",
    "options": [
      "Adenocarcinoma lung peripheral - test EGFR, ALK, ROS1, KRAS, BRAF, MET, PD-L1 for targeted/immunotherapy",
      "Squamous no molecular",
      "Small cell no molecular",
      "Mesothelioma BAP1",
      "Carcinoid Ki-67 only"
    ],
    "answer": 0,
    "explanation": "Most common lung cancer."
  },
  {
    "id": 35,
    "question": "A 62-year-old COPD GOLD D FEV1 38% exacerbation fever purulent sputum RR 30 wheeze, ABG pH 7.32 PaCO2 62 PaO2 58 HCO3 30. On BiPAP. Management?",
    "options": [
      "Controlled O2 88-92%, nebulized SABA+SAMA, systemic steroids 40mg 5 days, antibiotics if purulent, NIV for hypercapnic acidosis, avoid high flow O2",
      "High flow O2 100% - worsens CO2",
      "No steroids",
      "Sedatives",
      "Morphine - respiratory depression"
    ],
    "answer": 0,
    "explanation": "COPD exacerbation."
  },
  {
    "id": 36,
    "question": "A 45-year-old man sudden pleuritic chest pain dyspnea tachycardia syncope. History DVT leg swelling. Exam: tachycardic 112, tachypneic 28, BP 90/60, JVP raised, loud P2. ECG S1Q3T3, T inversion V1-V3. D-dimer positive, troponin mildly elevated, BNP high. Gold standard diagnosis and management if no contraindication?",
    "options": [
      "Pulmonary embolism - CT pulmonary angiography gold standard; Anticoagulate heparin/LMWH then DOAC, thrombolysis if massive hypotension",
      "MI - cath",
      "Pneumothorax - chest tube",
      "Pneumonia - antibiotics",
      "Dissection - surgery"
    ],
    "answer": 0,
    "explanation": "PE Well's."
  },
  {
    "id": 37,
    "question": "A 55-year-old woman RA 12 years dry eyes dry mouth gritty sensation difficulty swallowing dry foods, parotid enlargement, dental caries. Schirmer test <5mm, anti-Ro/SSA La/SSB positive, RF positive, ANA positive. Diagnosis extra risk?",
    "options": [
      "Secondary Sjogren syndrome - lymphocytic infiltration exocrine glands, risk B-cell lymphoma, monitor parotid enlargement",
      "SLE alone",
      "Scleroderma",
      "Sarcoid",
      "No disease"
    ],
    "answer": 0,
    "explanation": "Sjogren."
  },
  {
    "id": 38,
    "question": "A 35-year-old man inflammatory low back pain 2 years morning stiffness >1hr improves exercise worse rest, alternating buttock pain, chest expansion reduced, HLA-B27 positive. X-ray sacroiliitis bilateral grade 3, bamboo spine later. Diagnosis treatment?",
    "options": [
      "Ankylosing spondylitis - NSAIDs first line + physiotherapy + anti-TNF if refractory",
      "OA mechanical pain",
      "RA small joints",
      "Gout",
      "Septic arthritis"
    ],
    "answer": 0,
    "explanation": "Seronegative SpA."
  },
  {
    "id": 39,
    "question": "A 50-year-old woman proximal weakness difficulty climbing stairs combing hair, heliotrope rash purple eyelids, Gottron papules knuckles, shawl sign, elevated CK 3400, EMG myopathic, anti-Mi2 positive. Increased risk?",
    "options": [
      "Dermatomyositis - high malignancy risk especially ovary, lung, GI; Screen age-appropriate + CT chest/abdomen/pelvis",
      "Polymyositis - no rash",
      "Inclusion body - distal weakness",
      "Myasthenia - fatigable",
      "SLE - not CK high"
    ],
    "answer": 0,
    "explanation": "Inflammatory myopathy paraneoplastic."
  },
  {
    "id": 40,
    "question": "A 40-year-old man jaundice encephalopathy asterixis coagulopathy INR 3.2, no prior liver disease, took paracetamol 15g 2 days ago for fever, now oliguric, ABG pH 7.28 lactate high. ALT 5200, bilirubin 5.2. Diagnosis and antidote?",
    "options": [
      "Acute liver failure due to paracetamol - N-acetylcysteine infusion, transplant evaluation King’s College criteria pH<7.3 INR>6.5 creatinine>3.4 grade III/IV encephalopathy",
      "Chronic liver disease",
      "No treatment",
      "Steroids",
      "UDCA"
    ],
    "answer": 0,
    "explanation": "ALF."
  },
  {
    "id": 41,
    "question": "A 68-year-old man dysphagia solids first then liquids weight loss 8kg smoking alcohol hot beverages. Endoscopy: ulcerated mass mid-esophagus 30cm, biopsy squamous cell carcinoma p63+. Lower third lesion usually what? Risk factor?",
    "options": [
      "Mid esophagus SCC due to smoking/alcohol/hot drinks/achalasia; Lower third adenocarcinoma due to Barrett/GORD/obesity",
      "Barrett mid",
      "H pylori mid",
      "No risk",
      "Cold drinks mid"
    ],
    "answer": 0,
    "explanation": "Esophageal cancer epidemiology."
  },
  {
    "id": 42,
    "question": "A 30-year-old man painless cervical lymphadenopathy 3 months night sweats weight loss, mediastinal mass CXR, biopsy: Reed-Sternberg cells binucleated owl eye CD15+CD30+ CD20-, background eosinophils. Diagnosis stage workup?",
    "options": [
      "Classical Hodgkin lymphoma - Ann Arbor staging PET-CT + ABVD chemo",
      "NHL",
      "TB caseating granuloma",
      "Metastatic carcinoma",
      "Reactive hyperplasia"
    ],
    "answer": 0,
    "explanation": "RS cells."
  },
  {
    "id": 43,
    "question": "A 65-year-old man fatigue recurrent infections, CBC WBC 78k lymphocytes 90% smudge cells on smear, CD5+CD23+ B cells CD20 dim, lymphadenopathy cervical. Diagnosis management early stage?",
    "options": [
      "CLL most common adult leukemia - watch and wait if early stage Rai 0/Binet A, treatment if B symptoms, bulky disease, marrow failure",
      "ALL blasts",
      "AML Auer rods",
      "CML BCR-ABL",
      "Hairy cell TRAP+"
    ],
    "answer": 0,
    "explanation": "Smudge cells fragile."
  },
  {
    "id": 44,
    "question": "A 70-year-old woman new severe temporal headache, jaw claudication chewing, scalp tenderness combing hair, transient vision loss amaurosis fugax, fever malaise, temporal artery tender beaded pulseless, ESR 105 CRP 120. Urgent to prevent?",
    "options": [
      "Giant cell arteritis - large vessel vasculitis; Immediate high-dose steroids 60mg prednisolone to prevent blindness, temporal artery biopsy within 2 weeks, association PMR",
      "Migraine - triptan",
      "Cluster - O2",
      "Tension - paracetamol",
      "Meningitis - antibiotics"
    ],
    "answer": 0,
    "explanation": "GCA emergency."
  },
  {
    "id": 45,
    "question": "A 40-year-old asthmatic woman allergic rhinitis sinusitis 10 years now mononeuritis multiplex foot drop, palpable purpura, eosinophilia 18%, asthma, pulmonary infiltrates fleeting, p-ANCA MPO positive, biopsy eosinophilic vasculitis. Diagnosis?",
    "options": [
      "EGPA Churg-Strauss - asthma + eosinophilia + systemic vasculitis small-medium vessel",
      "GPA c-ANCA PR3 upper airway/lung/kidney",
      "Goodpasture",
      "TB",
      "Pneumonia"
    ],
    "answer": 0,
    "explanation": "EGPA triad."
  },
  {
    "id": 46,
    "question": "A 50-year-old chronic alcoholic smoker steatorrhea bulky foul oily stools weight loss 8kg diabetes polyuria polydipsia, epigastric pain. CT: calcified pancreas atrophic with dilated duct chain of lakes, fecal elastase <100 low. Diagnosis complications?",
    "options": [
      "Chronic pancreatitis - exocrine insufficiency + DM type 3c + pseudocyst + biliary obstruction + pancreatic cancer risk; PERT + insulin",
      "Celiac - tTG+",
      "Crohn - granuloma",
      "UC - bloody diarrhea",
      "IBS - normal tests"
    ],
    "answer": 0,
    "explanation": "Chronic pancreatitis."
  },
  {
    "id": 47,
    "question": "A 25-year-old man chronic bloody diarrhea with mucus but also perianal fistula, RLQ pain, weight loss, fever. Colonoscopy: skip lesions, deep linear ulcers, cobblestoning, ileum affected, rectum spared, transmural granulomas non-caseating, creeping fat on CT. Diagnosis extraintestinal?",
    "options": [
      "Crohn disease - transmural, fistula, skip, granuloma, ankylosing, erythema nodosum, uveitis, gallstones kidney stones; Treatment anti-TNF",
      "UC continuous rectum always involved",
      "TB caseating",
      "IBS no inflammation",
      "Colon cancer mass"
    ],
    "answer": 0,
    "explanation": "Crohn vs UC."
  },
  {
    "id": 48,
    "question": "A 60-year-old man melena 2 days NSAID diclofenac use, epigastric pain, syncope, Hb 8.2, BUN/creatinine ratio high. Endoscopy: duodenal ulcer anterior wall with visible vessel Forrest IIa. H pylori urease+. Management?",
    "options": [
      "Resuscitate, high-dose IV PPI, endoscopic hemostasis clip/cautery, triple therapy for H pylori, stop NSAIDs, re-test eradication, avoid rebleed",
      "Surgery immediately",
      "No treatment",
      "Variceal banding - not varices",
      "Octreotide - varices"
    ],
    "answer": 0,
    "explanation": "Ulcer bleed."
  },
  {
    "id": 49,
    "question": "A 35-year-old woman weight loss despite good appetite heat intolerance palpitations tremor anxiety sweating diarrhea, diffuse goiter with bruit, exophthalmos, lid lag, pretibial myxedema, TRAb positive high. Diagnosis complications?",
    "options": [
      "Graves disease autoimmune hyperthyroidism - anti-TSH receptor stimulating; Treatment antithyroid carbimazole + propranolol + radioiodine + ophthalmopathy steroids",
      "Hashimoto hypothyroid",
      "Toxic nodule single",
      "Thyroiditis painful",
      "No disease"
    ],
    "answer": 0,
    "explanation": "Graves."
  },
  {
    "id": 50,
    "question": "A 45-year-old man polyuria 5L/day polydipsia nocturia, history head trauma 2 months ago. Water deprivation test: urine osmolality 160 mOsm low, after desmopressin rises to 520 >50% increase. Serum Na 148 high. Diagnosis?",
    "options": [
      "Central diabetes insipidus due to pituitary stalk damage lack ADH - desmopressin responsive",
      "Nephrogenic DI - no response desmopressin due to kidney resistance lithium/hypercalcemia",
      "Primary polydipsia - urine osm high after deprivation >600",
      "SIADH - low urine output high urine osm",
      "No DI"
    ],
    "answer": 0,
    "explanation": "Central vs nephrogenic."
  },
  {
    "id": 51,
    "question": "A 58-year-old hypertensive smoker abrupt tearing chest pain interscapular radiation, BP right arm 175/105 left 145/85, HR 112, diaphoretic, X-ray widened mediastinum. CT angio intimal flap ascending aorta to arch Stanford A. Stable but at risk rupture. While arranging cardiothoracic surgery immediate medical to reduce propagation?",
    "options": [
      "IV esmolol HR<60 then sodium nitroprusside if SBP>120, avoid vasodilator alone due to reflex tachycardia",
      "IV nitrates alone rapid BP<90 - reduces coronary perfusion",
      "Heparin + alteplase - contraindicated dissection",
      "Aspirin + coronary angio - wrong",
      "Hydralazine alone - increases shear"
    ],
    "answer": 0,
    "explanation": "Shear stress."
  },
  {
    "id": 52,
    "question": "A 63-year-old woman HFrEF EF30% furosemide 40 BD digoxin 0.25 OD nausea yellow-green halos palpitations. ECG frequent PVCs scooped ST PR prolonged. K 2.7 Mg 1.4 Ca 10.8 digoxin 2.8 high, started verapamil 1 week ago. Factor MOST increased susceptibility?",
    "options": [
      "Hypokalemia + hypomagnesemia + verapamil P-gp inhibition increasing digoxin level + hypercalcemia",
      "Hypernatremia alone",
      "Respiratory alkalosis alone",
      "Hypermagnesemia alone",
      "None"
    ],
    "answer": 0,
    "explanation": "Digoxin toxicity precipitants."
  },
  {
    "id": 53,
    "question": "A 54-year-old smoker fatigue 8kg weight loss painless progressive jaundice pruritus clay stools palpable non-tender gallbladder Courvoisier. Labs direct bilirubin 8.2 ALP 620 CA19-9 850. CT 3.2cm pancreatic head double duct sign loss fat plane SMA >180° encasement SMV involvement. Which makes unresectable?",
    "options": [
      "SMA encasement >180° and celiac trunk involvement = unresectable, needs neoadjuvant/palliative",
      "Painless jaundice alone not unresectable",
      "Double duct sign not unresectable",
      "High ALP not",
      "CA19-9 alone not"
    ],
    "answer": 0,
    "explanation": "Vascular."
  },
  {
    "id": 54,
    "question": "A 47-year-old woman 3 episodes 6 months severe diffuse abdominal pain no peritonism confusion hallucinations proximal weakness. Urine dark reddish-brown standing. Started carbamazepine 2 weeks ago seizures, sister similar episodes, hyponatremia 122 SIADH. Confirm during attack?",
    "options": [
      "Markedly elevated urinary porphobilinogen and ALA during attack - AIP autosomal dominant PBG deaminase deficiency, enzyme-inducing drugs precipitate",
      "Blistering photosensitive rash - porphyria cutanea tarda",
      "Conjugated bilirubin AMA",
      "Low ceruloplasmin",
      "tTG"
    ],
    "answer": 0,
    "explanation": "Acute intermittent porphyria."
  },
  {
    "id": 55,
    "question": "A 61-year-old chronic alcoholic vomiting not eaten 5 days confusion ataxic nystagmus lateral rectus palsy confabulation. Resident gives 500mL D50+NS before labs, worsens confusion. Error and next step?",
    "options": [
      "Glucose before thiamine increases thiamine demand Krebs cycle; Give high-dose IV thiamine 500mg TDS 3-5 days stop glucose until thiamine",
      "Thiamine before glucose wrong",
      "Fluids wrong",
      "Mg correction wrong",
      "Nutrition wrong"
    ],
    "answer": 0,
    "explanation": "Wernicke."
  },
  {
    "id": 56,
    "question": "A 49-year-old alcoholic cirrhosis Child C spironolactone 100 furosemide 40 tense ascites oliguria mild confusion 4 days watery diarrhea poor intake. Exam BP 88/60 HR108 dry tongue turgor poor tense ascites no edema. Creatinine 0.9→2.4 Na128 K4.9 no infection bleed nephrotoxic. Most likely AKI?",
    "options": [
      "Prerenal AKI volume depletion diarrhea+diuretics+poor intake - correct volume stop diuretics before labeling HRS",
      "HRS type1 diagnosis exclusion",
      "GN",
      "Renal artery thrombosis bilateral rare",
      "ATN due cirrhosis per se"
    ],
    "answer": 0,
    "explanation": "Prerenal reversible."
  },
  {
    "id": 57,
    "question": "A 66-year-old diabetic fever greenish productive cough dyspnea confusion RR34 BP82/50 T39 SpO2 86% room air lactate5.2 creat1.9 WBC18k CXR RLL consolidation 30mL/kg crystalloids MAP58 urine15mL/hr persists. Septic shock definition?",
    "options": [
      "Persistent hypotension requiring vasopressors MAP≥65 + lactate>2 despite adequate fluids - Sepsis-3",
      "Fever leukocytosis alone",
      "Cough consolidation alone",
      "CRP>100 alone",
      "Tachycardia>90 alone"
    ],
    "answer": 0,
    "explanation": "Circulatory+metabolic."
  },
  {
    "id": 58,
    "question": "A 42-year-old woman weight gain moon face buffalo hump severe proximal myopathy HTN DM hypoK2.9 cortisol high ACTH 98 high urinary cortisol high no suppression low-dose dexa MRI 6mm microadenoma high-dose dexa 70% suppression. Pituitary source support?",
    "options": [
      ">50% suppression high-dose dexamethasone pituitary adenoma high ACTH = Cushing disease pituitary ACTH-dependent partially suppressible vs ectopic not suppressible",
      "Suppressed ACTH<5",
      "Bilateral adrenal hyperplasia low ACTH",
      "Undetectable cortisol",
      "Adrenal mass low ACTH"
    ],
    "answer": 0,
    "explanation": "Cushing disease."
  },
  {
    "id": 59,
    "question": "A 34-year-old woman 3 months headache vomiting visual blurring amenorrhea cold intolerance bitemporal hemianopia BMI24 MRI 2.8cm sellar suprasellar compressing chiasm hemorrhage free T4 low 0.5 TSH 1.2 low-normal LH/FSH low cortisol 3 low. Thyroid abnormality?",
    "options": [
      "Central hypothyroidism pituitary apoplexy compression panhypopituitarism",
      "Primary Hashimoto TSH high",
      "Graves low TSH high T4",
      "Factitious",
      "Resistance high T4 high TSH"
    ],
    "answer": 0,
    "explanation": "Hypopit."
  },
  {
    "id": 60,
    "question": "A 70-year-old AF not anticoag sudden aphasia right hemiplegia NIHSS16 last known well 2.5hr CT no hemorrhage ASPECTS9 CTA left M1 occlusion eligible tenecteplase additional major benefit time?",
    "options": [
      "Mechanical thrombectomy up to 24h selected penumbra best within 6h improves functional outcome",
      "Warfarin loading immediate no",
      "CEA emergent acute no",
      "Heparin bolus before lysis increases bleed",
      "LP exclude SAH no"
    ],
    "answer": 0,
    "explanation": "LVO."
  },
  {
    "id": 61,
    "question": "A 56-year-old rheumatic MS MVA1.0 LA55mm sudden palpitations worsening dyspnea orthopnea ECG AF fast 135 CXR edema. Why AF poorly tolerated severe MS?",
    "options": [
      "Loss atrial kick reduces LV filling across stenotic valve + fast rate reduces diastolic time → drop CO + pulmonary congestion",
      "AF increases valve area false",
      "AF decreases LA pressure false",
      "AF cures congestion false",
      "AF increases compliance false"
    ],
    "answer": 0,
    "explanation": "Atrial contribution critical."
  },
  {
    "id": 62,
    "question": "A 52-year-old never smoker progressive dyspnea 2y dry cough clubbing bibasal fine crackles CT peripheral basal reticular honeycombing traction bronchiectasis PFT FVC58% FEV1/FVC88% DLCO42% ABG rest hypoxia exertion worse. Pathophysiology?",
    "options": [
      "Restrictive defect reduced DLCO alveolar-capillary membrane thickening fibrosis IPF/UIP",
      "Increased TLC obstructive",
      "Reduced FEV1/FVC obstruction",
      "Increased compliance",
      "Increased RV air trapping"
    ],
    "answer": 0,
    "explanation": "ILD."
  },
  {
    "id": 63,
    "question": "A 45-year-old asthma budesonide 400 BD still SABA 5-6 daily nocturnal 3/week FEV1 65% technique good adherence. Step-up guideline LABA danger?",
    "options": [
      "Add LABA formoterol/salmeterol in ICS/LABA; LABA monotherapy increases asthma death masks inflammation tolerance",
      "Oral salbutamol alone",
      "Azithromycin long-term not first",
      "Stop ICS",
      "Propranolol bronchoconstriction"
    ],
    "answer": 0,
    "explanation": "GINA."
  },
  {
    "id": 64,
    "question": "A 63-year-old smoker 40 pack-year weight loss cough hemoptysis CT 4cm peripheral spiculated mass RUL pleural tag no cavitation biopsy glandular mucin TTF1+ napsin+ p40-. Dx molecular mandatory?",
    "options": [
      "Adenocarcinoma lung peripheral most common - test EGFR ALK ROS1 PD-L1",
      "Squamous central cavitation",
      "Small cell central neuroendocrine",
      "Mesothelioma pleural",
      "Carcinoid Ki67"
    ],
    "answer": 0,
    "explanation": "Adeno."
  },
  {
    "id": 65,
    "question": "A 39-year-old 8y UC pancolitis fatigue pruritus jaundice weight loss ALP480 4x ULN bilirubin3.5 AST/ALT mild MRCP multifocal strictures dilatations intra+extra beads on string p-ANCA+. Complication surveillance?",
    "options": [
      "PSC → cholangiocarcinoma 10-15% + CRC high → annual colonoscopy CA19-9 MRCP dominant stricture cytology",
      "RCC",
      "Pseudocyst",
      "Hepatoblastoma",
      "Gastric outlet obstruction"
    ],
    "answer": 0,
    "explanation": "PSC."
  },
  {
    "id": 66,
    "question": "A 24-year-old nitrofurantoin 10 days jaundice fatigue Hb8.2 indirect high LDH650 hapto<10 retics8% spherocytes. Test confirm immune?",
    "options": [
      "Direct Coombs IgG+C3d positive - drug-induced AIHA stop drug steroids if needed",
      "Low ferritin",
      "High TIBC",
      "Low retic",
      "Low indirect"
    ],
    "answer": 0,
    "explanation": "DAT."
  },
  {
    "id": 67,
    "question": "A 28-year-old 2w petechiae legs gum bleeding heavy menses platelet12k Hb13.2 WBC normal PT/APTT normal no schistocytes no splenomegaly. Dx pathophysiology?",
    "options": [
      "ITP anti-GPIIb/IIIa peripheral destruction marrow megakaryocytes increased",
      "DIC consumption low fibrinogen",
      "TTP ADAMTS13 schistocytes",
      "Hemophilia factor def normal platelets",
      "Aplastic pancytopenia"
    ],
    "answer": 0,
    "explanation": "Isolated thrombocytopenia."
  },
  {
    "id": 68,
    "question": "A 25-year-old fever confusion headache oliguria pallor icterus petechiae Hb7.5 platelet18k creat2.1 LDH1200 indirect high retics high schistocytes polychromasia PT/APTT normal. Lab defines emergency PLEX?",
    "options": [
      "Severely reduced ADAMTS13 <10% → TTP urgent plasma exchange + steroids",
      "PT prolonged factor VII",
      "Neutropenia",
      "Increased haptoglobin",
      "Reduced LDH"
    ],
    "answer": 0,
    "explanation": "TTP."
  },
  {
    "id": 69,
    "question": "A 58-year-old back pain night fatigue infections Hb8.9 Ca11.8 creat2.2 ESR95 total protein9.8 albumin low SPEP M-spike IgG kappa skull punched-out lytic. Distinguish MGUS vs myeloma?",
    "options": [
      "End-organ CRAB hyperCa Renal Anemia Bone + >10% clonal plasma or SLiM criteria = myeloma",
      "M-protein alone MGUS",
      "Age>50 alone",
      "Mild protein high alone",
      "Asymptomatic alone"
    ],
    "answer": 0,
    "explanation": "Myeloma defining."
  },
  {
    "id": 70,
    "question": "A 61-year-old fatigue early satiety 5kg weight loss massive splenomegaly 12cm WBC98k myelocytes metamyelocytes basophilia eosinophilia platelets450k Hb11.5 LAP low BCR-ABL p210+. Targeted drug inhibits?",
    "options": [
      "Imatinib BCR-ABL TKI first line - hydroxyurea only cytoreduction",
      "Rituximab anti-CD20",
      "HCQ",
      "MTX",
      "Cyclophosphamide alone"
    ],
    "answer": 0,
    "explanation": "CML."
  },
  {
    "id": 71,
    "question": "A 72-year-old exertional dyspnea angina syncope 2 episodes slow-rising low-volume carotid harsh ejection systolic murmur R2nd ICS radiating carotids S4 LV heave ECG LVH strain Echo AVA0.7cm2 mean gradient48mmHg LVH. Sign severity and next?",
    "options": [
      "Pulsus parvus et tardus narrow PP soft S2 symptomatic severe AS → urgent AVR/TAVI evaluation mortality high if not replaced",
      "Bounding wide PP AR",
      "Loud P2 fixed split ASD",
      "Machinery murmur PDA",
      "Hyperdynamic apex"
    ],
    "answer": 0,
    "explanation": "Severe AS."
  },
  {
    "id": 72,
    "question": "A 48-year-old exertional dyspnea 1 syncope exercise palpitations family sudden death brother 30y harsh systolic murmur left sternal edge ↑ Valsalva standing ↓ squatting handgrip S4 jerky bisferiens Echo asymmetrical septal hypertrophy 22mm SAM LVOT gradient70mmHg. Mechanism avoid?",
    "options": [
      "Dynamic LVOT obstruction HOCM AD sarcomere mutation - avoid nitrates ACE-I diuretics digoxin dehydration they worsen obstruction - treat BB disopyramide ICD",
      "Fixed aortic avoid BB",
      "Mitral stenosis avoid diuretics",
      "Pulmonary stenosis avoid fluids",
      "VSD avoid surgery"
    ],
    "answer": 0,
    "explanation": "HOCM murmur dynamics."
  },
  {
    "id": 73,
    "question": "A 59-year-old alcoholic sudden severe epigastric pain back vomiting hypotension 85/50 lipase2100 after 12hr Hb14→9.2 bluish flanks and periumbilical oliguria. Signs severity?",
    "options": [
      "Grey-Turner flank + Cullen periumbilical = hemorrhagic pancreatitis retroperitoneal bleed poor prognosis BISAP high",
      "Murphy cholecystitis",
      "Rovsing appendicitis",
      "Courvoisier pancreatic cancer",
      "McBurney appendicitis"
    ],
    "answer": 0,
    "explanation": "Necrotizing pancreatitis."
  },
  {
    "id": 74,
    "question": "A 44-year-old UC pancolitis 6y mesalamine 6 bloody stools/day fever38.8 HR118 abdominal distension tenderness Hb9.2 WBC16k CRP110 albumin2.8 K3.0 AXR transverse colon7.2cm thumbprinting loperamide 3 days ago. Diagnosis drug avoid?",
    "options": [
      "Toxic megacolon >6cm + systemic toxicity Truelove-Witts severe - avoid anti-motility loperamide opioids anticholinergics NSAIDs precipitate perforation - need IV steroids Abx surgical consult",
      "IBS loperamide more",
      "Simple UC continue loperamide",
      "C diff only loperamide more",
      "Constipation laxatives"
    ],
    "answer": 0,
    "explanation": "Toxic megacolon."
  },
  {
    "id": 75,
    "question": "A 52-year-old diabetic fever chills RUQ pain jaundice T39.2 BP88/55 HR115 RUQ tenderness confused WBC19k bilirubin5.2 direct ALP380 ALT90 US CBD11mm 9mm stone distal gallbladder thickening despite 2L crystalloids ceftriaxone+metronidazole hypotension persists. Reynolds pentad definitive?",
    "options": [
      "Charcot triad fever+RUQ+jaundice + hypo + confusion = Reynolds ascending cholangitis - urgent ERCP biliary decompression within24h + broad-spectrum",
      "Elective chole after3months",
      "Colonoscopy",
      "Steroids high",
      "Lactulose"
    ],
    "answer": 0,
    "explanation": "Cholangitis septic."
  },
  {
    "id": 76,
    "question": "A 32-year-old within20min peanuts wheezing tongue swelling flushing urticaria hypo80/45 HR125 tryptase high atopic asthma. Mediator first-line dose?",
    "options": [
      "Histamine+PAF mast cells; IM adrenaline0.5mg 0.5mL 1:1000 anterolateral thigh high-flow O2 fluids salbutamol neb antihistamine+steroid second line",
      "Dopamine antagonist",
      "Ach atropine",
      "T4 carbimazole",
      "Aldo spironolactone"
    ],
    "answer": 0,
    "explanation": "Anaphylaxis."
  },
  {
    "id": 77,
    "question": "A 35-year-old profuse watery diarrhea cramps fever38.5 10 days after IV ceftriaxone pneumonia leukocytes stool positive C diff toxin A/B PCR colonoscopy yellow pseudomembranes. Mechanism appropriate first severe?",
    "options": [
      "Toxins A&B Rho glucosylation cytoskeletal disruption pseudomembranous colitis; Oral vancomycin125mg QID or fidaxomicin 200mg BD stop precipitant antibiotic isolate",
      "Liver invasion",
      "Pancreatic acinar",
      "Autoimmune neuronal",
      "Acid hypersecretion"
    ],
    "answer": 0,
    "explanation": "C diff."
  },
  {
    "id": 78,
    "question": "A 41-year-old HIV CD4 45 no ART 3w headache fever vomiting altered behavior neck stiffness mild opening pressure high CSF 80 lymph protein90 glucose22 blood95 India ink positive encapsulated budding yeast halo. Dx induction?",
    "options": [
      "Cryptococcal meningitis; Liposomal amphotericin B + flucytosine 2 weeks induction then fluconazole 8w consolidation then maintenance, serial LPs for high ICP, start ART 2-5 weeks avoid IRIS",
      "Bacterial amox",
      "HSV acyclovir",
      "Neurocysticercosis albendazole",
      "TB ATT only"
    ],
    "answer": 0,
    "explanation": "Crypto."
  },
  {
    "id": 79,
    "question": "A 34-year-old 4 months fatigue arthralgia jaundice amenorrhea acne AST680 ALT720 bilirubin3.5 ALP160 IgG3200 high ANA1:320 ASMA+ LKM1- viral negative ceruloplasmin normal biopsy interface hepatitis plasma cells. Dx Rx?",
    "options": [
      "Type1 AIH - steroids prednisolone + azathioprine surveillance cirrhosis HCC",
      "PBC UDCA AMA+",
      "PSC ERCP beading",
      "Alcoholic abstinence",
      "Wilson penicillamine"
    ],
    "answer": 0,
    "explanation": "Autoimmune hepatitis."
  },
  {
    "id": 80,
    "question": "A 19-year-old acute liver failure Coombs-negative hemolytic anemia ataxia dysarthria KF rings slit lamp ceruloplasmin12 low urinary copper280 high serum copper low hemolysis high LDH. Defect chelator?",
    "options": [
      "ATP7B mutation defective biliary copper excretion Wilson - chelators penicillamine/trientine + zinc urgent transplant if ALF",
      "HFE phlebotomy",
      "ATP7A copper sup",
      "A1AT transplant only",
      "Porphyria hemin"
    ],
    "answer": 0,
    "explanation": "Wilson."
  },
  {
    "id": 81,
    "question": "A 23-year-old evening diplopia ptosis worsens sustained upgaze rest improves normal pupils no diurnal? actually worse evening. Edrophonium improves. Antibody dangerous complication fever bulbar weakness?",
    "options": [
      "Anti-AChR most specific; Myasthenic crisis respiratory failure infection/surgery trigger need ventilation, avoid aminoglycosides beta-blockers",
      "Anti-MuSK cholinergic crisis over-treatment SLUDGE",
      "Anti-GQ1b descending Miller Fisher",
      "Anti-dsDNA cerebritis",
      "Anti-VGCC LEMS incremental response"
    ],
    "answer": 0,
    "explanation": "MG fluctuating."
  },
  {
    "id": 82,
    "question": "A 28-year-old 2 first-trimester abortions DVT 26y now 30w HTN160/105 proteinuria2.5g platelet90k aPTT prolonged not correcting mixing PT normal. Underlying diagnosis?",
    "options": [
      "Antiphospholipid syndrome with preeclampsia - lupus anticoagulant + anticardiolipin + anti-β2 glycoprotein, arterial/venous thrombosis + fetal loss + thrombocytopenia",
      "ITP gestational HTN",
      "DIC abruption consumption",
      "HELLP alone hemolysis high LFT low platelets no aPTT prolong",
      "SLE without APS - but prolonged aPTT suggests LA"
    ],
    "answer": 0,
    "explanation": "APS."
  },
  {
    "id": 83,
    "question": "A 30-year-old malar rash photosensitivity oral ulcers arthralgia knee swelling protein3+ RBC casts creatinine1.8 low C3 C4 anti-dsDNA high biopsy diffuse endocapillary wire-loop subendothelial IgG C3. WHO class induction?",
    "options": [
      "Class IV diffuse proliferative LN - most severe - induction high dose steroids + mycophenolate or IV cyclophosphamide, maintenance MMF/AZA + HCQ + ACE-I",
      "Class II mesangial NSAIDs",
      "Class V ritux alone",
      "Minimal change steroids alone",
      "Class I no treatment"
    ],
    "answer": 0,
    "explanation": "LN class IV."
  },
  {
    "id": 84,
    "question": "A 55-year-old CKD stage4 K6.9 peaked T wide QRS sine wave risk on ACE-I spironolactone history missed dialysis hypotensive. Immediate sequence life-saving?",
    "options": [
      "IV calcium gluconate/chloride stabilize membrane, insulin 10U + glucose 25g shift, nebulized salbutamol shift, sodium bicarb if acidotic, kayexalate/dialysis removal, stop offending drugs",
      "Ca + oral KCl supplement - worsens",
      "Kayexalate alone slow onset",
      "Furosemide alone if oliguric no",
      "Bicarb alone non-acidotic no"
    ],
    "answer": 0,
    "explanation": "Hyperkalemia ECG changes."
  },
  {
    "id": 85,
    "question": "A 62-year-old SCLC 40 pack-year confusion seizures 2 episodes Na118 serum osmolality240 low urine osm550 high urine Na65 euvolemic no edema BP normal thyroid adrenal normal cortisol normal. Diagnosis safest correction limit?",
    "options": [
      "SIADH euvolemic hypo-osmolar hyponatremia high urine osm natriuresis due ectopic ADH - fluid restriction 800mL + hypertonic 3% if severe symptoms seizures, correct <8-10 mmol/day avoid ODS central pontine myelinolysis",
      "Cerebral salt wasting hypovolemic isotonic saline",
      "Polydipsia water restriction only low urine osm",
      "Addison hydrocortisone low cortisol high ACTH pigmentation",
      "Diuretic-induced hypovolemia"
    ],
    "answer": 0,
    "explanation": "SIADH."
  },
  {
    "id": 86,
    "question": "A 19-year-old T1DM 6y non-compliant vomiting abdominal pain Kussmaul breathing fruity breath dehydrated glucose480 pH7.12 HCO38 K5.6 ketones strongly positive WBC14k. What management error harmful?",
    "options": [
      "Giving bicarbonate routinely pH7.12 without indication pH<6.9 or life-threatening hyperK - worsens hypokalemia paradoxical CNS acidosis delays keto clearance",
      "Isotonic fluids NS/LR immediate correct",
      "IV insulin after fluid K check correct infusion 0.1U/kg/hr",
      "K replacement when <5.2 correct insulin drives K intracellular",
      "Monitoring mental status cerebral edema risk correct"
    ],
    "answer": 0,
    "explanation": "DKA mainstay fluids insulin K."
  },
  {
    "id": 87,
    "question": "A 33-year-old Graves disease stopped carbimazole 2 weeks ago fever39.5 HR145 irregular AF agitation delirium vomiting diarrhea goiter bruit exophthalmos tremor free T4 very high TSH suppressed Burch-Wartofsky55. Scoring and immediate treatment combination?",
    "options": [
      "Thyroid storm BW>45; PTU 500-1000 load then methimazole, iodine Lugol after 1hr, propranolol 60-80mg, hydrocortisone 100mg q8h prevents T4→T3 and adrenal insufficiency, cooling, treat precipitant",
      "Wells high heparin warfarin",
      "CURB high antibiotics",
      "APACHE high supportive only",
      "CHADS high anticoag only"
    ],
    "answer": 0,
    "explanation": "Storm endocrine emergency."
  },
  {
    "id": 88,
    "question": "A 40-year-old paroxysmal headaches sweating palpitations BP 210/130 during attack 4cm right adrenal mass urinary metanephrines elevated VMA high. Adrenalectomy scheduled. Correct pre-op management to prevent intra-op crisis?",
    "options": [
      "Alpha-blockade phenoxybenzamine 10-14 days liberal salt fluids, then beta-blockade if tachy persists, avoid beta first unopposed alpha → crisis, volume expansion prevents post-op hypotension",
      "Beta-blockade alone first",
      "Immediate surgery without preparation → hypertensive crisis on induction",
      "Hydralazine alone",
      "CCB alone definitive"
    ],
    "answer": 0,
    "explanation": "Pheo."
  },
  {
    "id": 89,
    "question": "A 50-year-old hemoptysis sinusitis bloody nasal discharge saddle nose deformity rapidly rising creatinine 2.8 active sediment RBC casts c-ANCA PR3 positive biopsy crescentic GN pauci-immune little deposits. Treatment?",
    "options": [
      "Granulomatosis polyangiitis Wegener ANCA small vessel vasculitis triad upper airway lungs kidney - high dose steroids + cyclophosphamide or rituximab + plasmapheresis if severe pulmonary hemorrhage/rapid decline creatinine>5.7",
      "Anti-TB therapy - granuloma caseating",
      "Anticoagulation - not",
      "Hydralazine withdrawal alone - ANCA drug induced",
      "NSAIDs - no"
    ],
    "answer": 0,
    "explanation": "GPA."
  },
  {
    "id": 90,
    "question": "A 67-year-old HTN DM hyperlipidemia sudden severe lower back pain tearing abdominal pain hypotension 80/50 pulsatile abdominal mass tender US AAA7.5cm free fluid intraperitoneal. What next best step not delay?",
    "options": [
      "Immediate vascular surgery consult permissive hypotension SBP80-100 until control massive transfusion protocol crossmatch 10 units urgent repair EVAR/open do not delay for CT oral contrast unstable",
      "CT angio with oral contrast - delay unstable",
      "Colonoscopy",
      "Thrombolysis - contraindicated",
      "D-dimer wait"
    ],
    "answer": 0,
    "explanation": "Ruptured AAA."
  },
  {
    "id": 91,
    "question": "A 27-year-old recurrent calcium oxalate renal stones polyuria polydipsia Ca11.2 P low PTH markedly high sestamibi parathyroid adenoma. Renal defect polyuria mechanism?",
    "options": [
      "Hypercalcemia-induced nephrogenic DI ADH resistance downregulates aquaporin-2 collecting duct impairs concentrating",
      "Central DI lack ADH head trauma",
      "Primary polydipsia high intake low osm",
      "SIADH low output high osm",
      "Bartter loop defect hypoK alkalosis"
    ],
    "answer": 0,
    "explanation": "Primary hyperpara hyperCa NDI."
  },
  {
    "id": 92,
    "question": "A 68-year-old AF on warfarin INR therapeutic usually but now acute severe knee pain swelling after minor twist warm tense ecchymotic hemarthrosis knee. INR6.8 arthrocentesis bloody fluid 40k RBC no crystals no infection. Likely and immediate reversal if life-threatening?",
    "options": [
      "Hemarthrosis supratherapeutic INR - hold warfarin IV vitamin K 10mg slow + 4-factor PCC 50U/kg rapid reversal vs FFP, assess bleed",
      "Septic arthritis antibiotics urgent - WBC high would be",
      "Gout colchicine - crystals negative",
      "OA flare NSAIDs - would worsen bleed",
      "Pseudogout - chondrocalcinosis"
    ],
    "answer": 0,
    "explanation": "Warfarin bleed reversal."
  },
  {
    "id": 93,
    "question": "A 35-year-old weight gain constipation cold intolerance menorrhagia fatigue dry skin non-pitting edema delayed DTR TSH45 free T4 very low bradycardic 48 hypotensive hypothermic infection precipitates emergency?",
    "options": [
      "Myxedema coma - altered mentation hypothermia hypoventilation bradycardia hypotension hyponatremia hypoglycemia - high mortality need IV levothyroxine + hydrocortisone + warming supportive ICU",
      "Thyroid storm high T4",
      "Adrenal crisis alone",
      "DKA high glucose",
      "Pheo crisis high BP"
    ],
    "answer": 0,
    "explanation": "Severe hypo decompensation."
  },
  {
    "id": 94,
    "question": "A 45-year-old alcoholic confusion horizontal nystagmus ataxic gait vomiting 3 days history not eaten. At risk irreversible. Prevent?",
    "options": [
      "Wernicke encephalopathy - high dose IV thiamine 200-500mg TDS 3-5 days then oral 100mg TDS long-term before any glucose, correct Mg, prevent Korsakoff anterograde amnesia confabulation irreversible",
      "Oral multivitamin alone insufficient",
      "Glucose 50% alone worsens",
      "Haloperidol no",
      "Phenytoin no"
    ],
    "answer": 0,
    "explanation": "Thiamine."
  },
  {
    "id": 95,
    "question": "A 29-year-old 12 weeks pregnancy hyperemesis BP155/95 fundal height larger than dates 16 weeks size vaginal bleeding spotting US snowstorm honeycomb no fetus theca-lutein cysts bilateral ovaries beta-hCG250k extremely high. Anticipate?",
    "options": [
      "Complete hydatidiform mole - early severe preeclampsia <20w, hyperthyroidism hCG TSH-like, theca-lutein cysts, risk choriocarcinoma 15-20% requires evacuation suction curettage + hCG follow-up + contraception 6-12 months",
      "Ectopic rupture",
      "Abruption",
      "Normal variation",
      "Ovarian torsion only"
    ],
    "answer": 0,
    "explanation": "GTD."
  },
  {
    "id": 96,
    "question": "A 60-year-old long-standing RA 15y proteinuria 4g/day hepatosplenomegaly fatigue diarrhea. Biopsy kidney Congo red apple-green birefringence polarized light. Serum amyloid A high. Protein type mechanism?",
    "options": [
      "AA amyloidosis secondary chronic inflammation RA - SAA acute phase protein deposits in kidney liver spleen nephrotic syndrome",
      "AL amyloidosis myeloma light chain",
      "Transthyretin senile cardiac",
      "IgA nephropathy mesangial",
      "Lupus nephritis"
    ],
    "answer": 0,
    "explanation": "Secondary amyloid."
  },
  {
    "id": 97,
    "question": "A 55-year-old chest pain worse inspiration supine better leaning forward fever 38.2 pericardial rub ECG diffuse concave ST elevation PR depression echo pericardial effusion no tamponade 2 weeks after viral URI. Progression to tamponade indicator?",
    "options": [
      "Beck triad hypotension muffled heart sounds JVD pulsus paradoxus>10mmHg diastolic collapse RV RA echo equalization pressures electrical alternans",
      "Loud S1 opening snap MS",
      "Machinery murmur PDA",
      "New systolic murmur MR",
      "Tall peaked T hyperK"
    ],
    "answer": 0,
    "explanation": "Pericarditis → tamponade."
  },
  {
    "id": 98,
    "question": "A 42-year-old SLE on steroids 20mg daily fever headache neck stiffness photophobia. CSF 120 WBC predominantly neutrophils 85% low glucose 28 protein 80 Gram stain gram-positive diplococci lancet shaped. Predisposing factor organism?",
    "options": [
      "Complement deficiency low C3 C4 + functional asplenia SLE + steroid immunosuppression → increased encapsulated S pneumoniae N meningitidis H influenzae meningitis",
      "Hypercalcemia",
      "Hypokalemia",
      "Iron deficiency",
      "Warfarin therapy"
    ],
    "answer": 0,
    "explanation": "SLE infection risk."
  },
  {
    "id": 99,
    "question": "A 38-year-old episodic HTN palpitations headaches neurofibromas café-au-lait spots axillary freckling family history medullary thyroid cancer hyperparathyroidism serum metanephrines high calcitonin high Ca high PTH high. Genetic syndrome mutation inheritance?",
    "options": [
      "MEN 2A RET proto-oncogene AD - medullary thyroid cancer calcitonin + pheochromocytoma + primary hyperparathyroidism screening family RET testing",
      "MEN1 MENIN parathyroid pituitary pancreatic",
      "NF1 neurofibromin alone pheo can occur but with MEN features think MEN",
      "VHL VHL hemangioblastoma pheo RCC",
      "MEN 2B RET marfanoid mucosal neuromas no hyperPTH"
    ],
    "answer": 0,
    "explanation": "MEN2A."
  },
  {
    "id": 100,
    "question": "A 50-year-old progressive dysphagia solids then liquids weight loss regurgitation undigested food nocturnal cough halitosis barium dilated esophagus food retention bird-beak GE junction manometry absent peristalsis incomplete LES relaxation high LES pressure. Additional test and long-term surveillance complication?",
    "options": [
      "Achalasia loss myenteric plexus ganglion cells - do endoscopy to rule out pseudoachalasia malignancy at GE junction especially in elderly rapid weight loss; increased risk esophageal SCC due chronic stasis - surveillance endoscopy",
      "pH monitoring Barrett adenocarcinoma lower third",
      "CT chest mesothelioma",
      "No further testing no cancer risk",
      "Colonoscopy CRC"
    ],
    "answer": 0,
    "explanation": "Achalasia bird-beak. this is surgery Bilkul bai — start karte hain Surgery Tough Mock 100 MCQs. Same pattern, tough + tricky + medium-long, aur surgical procedures ke names included."
  }
];
