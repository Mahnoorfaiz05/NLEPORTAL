import type { Question } from "./types";
export const pharmacologyQuestions:Question[]=[
  {
    "id": 1,
    "question": "A 58-year-old man with hypertension and chronic kidney disease is started on a new antihypertensive drug. After several weeks, his serum creatinine rises modestly, but his potassium remains within the normal range. The drug preferentially dilates the efferent arteriole of the glomerulus. Which drug is most likely responsible?",
    "options": [
      "Losartan",
      "Amlodipine",
      "Hydrochlorothiazide",
      "Propranolol"
    ],
    "answer": 0,
    "explanation": "ARBs block angiotensin II receptors and preferentially dilate the efferent arteriole, decreasing intraglomerular pressure and potentially causing a rise in creatinine."
  },
  {
    "id": 2,
    "question": "A patient receives repeated doses of a drug that follows first-order kinetics. His plasma concentration is 80 mg/L immediately after dosing and falls to 40 mg/L after 6 hours. If no additional dose is given, what concentration would be expected after another 6 hours?",
    "options": [
      "5 mg/L",
      "10 mg/L",
      "20 mg/L",
      "30 mg/L"
    ],
    "answer": 2,
    "explanation": "First-order kinetics means a constant fraction is eliminated per unit time. The half-life is 6 hours, so the concentration falls by half every 6 hours."
  },
  {
    "id": 3,
    "question": "A 24-year-old woman with asthma uses her rescue inhaler several times daily. Her physician adds a medication that blocks leukotriene receptors. Which mediator is most directly antagonized?",
    "options": [
      "LTC₄",
      "Histamine",
      "Bradykinin",
      "Prostaglandin E₂"
    ],
    "answer": 0,
    "explanation": "Montelukast blocks CysLT1 receptors, preventing the effects of cysteinyl leukotrienes such as LTC₄, LTD₄ and LTE₄."
  },
  {
    "id": 4,
    "question": "A patient with depression is switched from phenelzine to fluoxetine. The physician emphasizes that a significant washout period is required before starting fluoxetine. What complication is being prevented?",
    "options": [
      "Neuroleptic malignant syndrome",
      "Serotonin syndrome",
      "Hypertensive emergency due to dopamine excess",
      "Anticholinergic crisis"
    ],
    "answer": 1,
    "explanation": "MAO inhibitors combined with SSRIs can cause severe serotonin excess. Fluoxetine also has a particularly long half-life, making the interaction clinically important."
  },
  {
    "id": 5,
    "question": "A patient with atrial fibrillation is prescribed a drug that prolongs the QT interval but has minimal negative inotropic effects compared with many other antiarrhythmics. Which drug is most likely?",
    "options": [
      "Sotalol",
      "Amiodarone",
      "Verapamil",
      "Lidocaine"
    ],
    "answer": 1,
    "explanation": "Amiodarone is primarily a class III drug but has multiple electrophysiologic effects. It prolongs QT but has a lower risk of torsades than many other QT-prolonging agents."
  },
  {
    "id": 6,
    "question": "A drug is administered intravenously to a patient with severe infection. Its plasma concentration falls rapidly initially and then declines more slowly. Which process most likely accounts for the initial rapid decline?",
    "options": [
      "Renal excretion only",
      "Redistribution into tissues",
      "Zero-order metabolism",
      "Saturation of plasma proteins"
    ],
    "answer": 1,
    "explanation": "Some highly lipid-soluble drugs show a rapid initial fall due to distribution from plasma into tissues, followed later by elimination."
  },
  {
    "id": 7,
    "question": "A patient taking phenytoin develops nystagmus, ataxia and diplopia. His serum concentration is unexpectedly high after a small dose increase. Which pharmacokinetic property best explains this?",
    "options": [
      "Zero-order elimination at therapeutic concentrations",
      "Saturable hepatic metabolism",
      "Complete renal elimination",
      "Increased first-pass metabolism"
    ],
    "answer": 1,
    "explanation": "Phenytoin exhibits capacity-limited metabolism. Small dose increases can produce disproportionate increases in plasma concentration."
  },
  {
    "id": 8,
    "question": "A 67-year-old patient with heart failure is receiving digoxin. He develops nausea, yellow-green visual disturbances and ventricular arrhythmia. Which additional finding would most strongly predispose him to this toxicity?",
    "options": [
      "Hyperkalemia",
      "Hypokalemia",
      "Hypernatremia",
      "Hypercalcemia only"
    ],
    "answer": 1,
    "explanation": "Hypokalemia increases digoxin binding to the Na⁺/K⁺ ATPase and increases the risk of digoxin toxicity."
  },
  {
    "id": 9,
    "question": "A patient with hypertension is started on a drug that reduces sympathetic outflow from the CNS by stimulating presynaptic α₂ receptors. Which drug has this mechanism?",
    "options": [
      "Clonidine",
      "Prazosin",
      "Phenylephrine",
      "Propranolol"
    ],
    "answer": 0,
    "explanation": "Clonidine stimulates central α₂ receptors, reducing sympathetic outflow and decreasing blood pressure."
  },
  {
    "id": 10,
    "question": "A patient with severe opioid overdose receives naloxone. Respiratory rate rapidly improves, but the patient develops severe agitation and pain. What best explains this finding?",
    "options": [
      "Naloxone is a partial agonist",
      "Naloxone precipitates acute opioid withdrawal",
      "Naloxone increases dopamine synthesis",
      "Naloxone causes direct CNS stimulation"
    ],
    "answer": 1,
    "explanation": "Naloxone is a competitive opioid antagonist. In opioid-dependent patients, abrupt receptor blockade can produce acute withdrawal."
  },
  {
    "id": 11,
    "question": "A patient with severe hypertension receives nitroprusside. Soon afterward, he develops metabolic acidosis and confusion. Which toxic metabolite is responsible?",
    "options": [
      "Cyanide",
      "Acetaldehyde",
      "NAPQI",
      "Nitrite only"
    ],
    "answer": 0,
    "explanation": "Nitroprusside can release cyanide, especially during prolonged or high-dose therapy, causing lactic acidosis and neurologic symptoms."
  },
  {
    "id": 12,
    "question": "A patient with asthma develops worsening bronchospasm after being prescribed a medication for migraine prophylaxis. Which drug is most likely responsible?",
    "options": [
      "Propranolol",
      "Verapamil",
      "Topiramate",
      "Sumatriptan"
    ],
    "answer": 0,
    "explanation": "Nonselective β-blockade inhibits β₂-mediated bronchodilation and can precipitate bronchospasm."
  },
  {
    "id": 13,
    "question": "A woman taking an oral contraceptive becomes pregnant after starting rifampin therapy. Which pharmacologic principle explains this failure?",
    "options": [
      "Rifampin inhibits CYP enzymes",
      "Rifampin induces hepatic CYP enzymes",
      "Rifampin blocks estrogen receptors",
      "Rifampin increases renal excretion of progesterone directly"
    ],
    "answer": 1,
    "explanation": "Rifampin is a potent CYP450 inducer, increasing metabolism of steroid hormones and reducing oral contraceptive effectiveness."
  },
  {
    "id": 14,
    "question": "A patient with type 2 diabetes has obesity and inadequate glycemic control despite lifestyle modification. A drug is chosen that promotes glucose-dependent insulin release and delays gastric emptying while also promoting weight loss. Which drug is most appropriate?",
    "options": [
      "Glibenclamide",
      "Semaglutide",
      "Pioglitazone",
      "Acarbose"
    ],
    "answer": 1,
    "explanation": "Semaglutide is a GLP-1 receptor agonist that increases glucose-dependent insulin secretion, decreases glucagon, slows gastric emptying and promotes weight loss."
  },
  {
    "id": 15,
    "question": "A patient with type 2 diabetes develops recurrent genital infections after beginning a new medication that causes glycosuria. Which drug is most likely?",
    "options": [
      "Empagliflozin",
      "Sitagliptin",
      "Metformin",
      "Glimepiride"
    ],
    "answer": 0,
    "explanation": "SGLT2 inhibitors cause urinary glucose loss, increasing the risk of genital mycotic infections."
  },
  {
    "id": 16,
    "question": "A patient with hypertension develops bilateral ankle edema after beginning amlodipine. His cardiac function is normal. What is the most likely mechanism?",
    "options": [
      "Sodium retention due to aldosterone stimulation",
      "Increased precapillary resistance",
      "Increased capillary hydrostatic pressure from arteriolar dilation",
      "Reduced renal blood flow"
    ],
    "answer": 2,
    "explanation": "Dihydropyridine CCBs preferentially dilate arterioles, increasing capillary hydrostatic pressure and causing peripheral edema."
  },
  {
    "id": 17,
    "question": "A patient is given a drug that produces a maximal response even when only a small fraction of receptors are occupied. Which concept best explains this phenomenon?",
    "options": [
      "Tachyphylaxis",
      "Spare receptors",
      "Competitive antagonism",
      "Zero-order kinetics"
    ],
    "answer": 1,
    "explanation": "Spare receptors allow a maximal response without occupancy of all available receptors, increasing apparent sensitivity to an agonist."
  },
  {
    "id": 18,
    "question": "A patient receives a competitive antagonist along with an agonist. Increasing the concentration of the agonist restores the original maximal response. What type of antagonism is present?",
    "options": [
      "Noncompetitive",
      "Irreversible",
      "Competitive",
      "Physiologic"
    ],
    "answer": 2,
    "explanation": "Competitive antagonists compete reversibly at the same receptor. Increasing agonist concentration can overcome their effect."
  },
  {
    "id": 19,
    "question": "A patient with generalized tonic-clonic seizures is prescribed valproate. Which adverse effect is particularly important in a woman who may become pregnant?",
    "options": [
      "Nephrolithiasis",
      "Neural tube defects",
      "Pulmonary fibrosis",
      "Optic neuritis"
    ],
    "answer": 1,
    "explanation": "Valproate is highly teratogenic and increases the risk of neural tube defects, particularly spina bifida."
  },
  {
    "id": 20,
    "question": "A patient taking carbamazepine develops confusion, nausea and seizures. Laboratory testing reveals marked hyponatremia. Which mechanism explains this adverse effect?",
    "options": [
      "Aldosterone antagonism",
      "Increased ADH-like effect",
      "Increased renal sodium excretion through ENaC blockade",
      "Mineralocorticoid receptor activation"
    ],
    "answer": 1,
    "explanation": "Carbamazepine can cause SIADH-like hyponatremia, particularly in susceptible patients."
  },
  {
    "id": 21,
    "question": "A patient with resistant hypertension is prescribed spironolactone. Several weeks later, he develops breast tenderness and enlargement. Which mechanism is responsible?",
    "options": [
      "β₂ receptor stimulation",
      "Androgen receptor antagonism",
      "Increased testosterone production",
      "Estrogen receptor blockade"
    ],
    "answer": 1,
    "explanation": "Spironolactone antagonizes aldosterone and also has antiandrogenic effects, which can cause gynecomastia."
  },
  {
    "id": 22,
    "question": "A patient with severe renal impairment requires an antibiotic. The physician chooses a drug whose dose can be adjusted according to renal clearance. Which pharmacokinetic parameter is most directly affected by renal failure?",
    "options": [
      "Bioavailability",
      "Clearance",
      "Absorption",
      "Receptor affinity"
    ],
    "answer": 1,
    "explanation": "Renal impairment decreases renal drug clearance, often increasing the drug's half-life and plasma concentration."
  },
  {
    "id": 23,
    "question": "A patient taking warfarin is prescribed trimethoprim-sulfamethoxazole and subsequently develops an elevated INR. Which mechanism is most likely?",
    "options": [
      "Increased synthesis of clotting factors",
      "Inhibition of warfarin metabolism",
      "Increased renal elimination of warfarin",
      "Increased vitamin K production"
    ],
    "answer": 1,
    "explanation": "TMP-SMX can inhibit CYP-mediated metabolism of warfarin, increasing its anticoagulant effect and INR."
  },
  {
    "id": 24,
    "question": "A patient with peptic ulcer disease is treated with a medication that blocks H₂ receptors on gastric parietal cells. Which drug is most likely?",
    "options": [
      "Omeprazole",
      "Famotidine",
      "Misoprostol",
      "Sucralfate"
    ],
    "answer": 1,
    "explanation": "Famotidine is an H₂ receptor antagonist that reduces basal and nocturnal gastric acid secretion."
  },
  {
    "id": 25,
    "question": "A patient taking cimetidine develops gynecomastia and multiple drug interactions. Which property best explains its extensive drug interactions?",
    "options": [
      "CYP450 induction",
      "CYP450 inhibition",
      "Increased renal filtration",
      "Increased glucuronidation"
    ],
    "answer": 1,
    "explanation": "Cimetidine inhibits several CYP enzymes and can increase concentrations of many coadministered drugs. It can also produce antiandrogenic effects."
  },
  {
    "id": 26,
    "question": "A patient receives a drug that is highly protein-bound. Another medication displaces it from albumin. Which change occurs initially?",
    "options": [
      "Increased free drug concentration",
      "Decreased free drug concentration",
      "Immediate increase in renal elimination only",
      "Decreased volume of distribution in all cases"
    ],
    "answer": 0,
    "explanation": "Displacement from plasma proteins initially increases the unbound fraction. The clinical significance depends on clearance and distribution of the drug."
  },
  {
    "id": 27,
    "question": "A patient with status epilepticus is given lorazepam. Which change occurs at the GABA-A receptor?",
    "options": [
      "Decreased chloride conductance",
      "Increased frequency of chloride channel opening",
      "Increased duration of sodium channel opening",
      "Direct glutamate receptor blockade"
    ],
    "answer": 1,
    "explanation": "Benzodiazepines increase the frequency of GABA-A chloride channel opening, enhancing inhibitory neurotransmission."
  },
  {
    "id": 28,
    "question": "A patient with severe alcohol withdrawal develops seizures and autonomic instability. Which drug class is preferred for acute management?",
    "options": [
      "Benzodiazepines",
      "SSRIs",
      "Antipsychotics alone",
      "Lithium"
    ],
    "answer": 0,
    "explanation": "Benzodiazepines enhance GABA-A activity and are first-line for alcohol withdrawal, including withdrawal seizures."
  },
  {
    "id": 29,
    "question": "A patient taking an antipsychotic develops fever, severe muscle rigidity, elevated CK and altered consciousness. Which neurotransmitter pathway is most directly involved?",
    "options": [
      "Excess serotonin",
      "Dopamine blockade",
      "Excess acetylcholine",
      "Increased GABA"
    ],
    "answer": 1,
    "explanation": "Neuroleptic malignant syndrome is associated with significant dopamine D₂ receptor blockade."
  },
  {
    "id": 30,
    "question": "A patient develops tremor and rigidity after starting haloperidol. Which medication can help treat drug-induced parkinsonism?",
    "options": [
      "Benztropine",
      "Fluoxetine",
      "Levodopa alone",
      "Propranolol"
    ],
    "answer": 0,
    "explanation": "Anticholinergic drugs such as benztropine can restore the dopamine-acetylcholine balance in the basal ganglia and improve drug-induced parkinsonism."
  },
  {
    "id": 31,
    "question": "A patient with depression is started on an SSRI. After several weeks, his mood improves but he develops decreased libido and delayed orgasm. Which mechanism most likely contributes?",
    "options": [
      "Increased serotonergic activity",
      "Dopamine receptor stimulation",
      "Increased GABA release",
      "α₁ receptor blockade"
    ],
    "answer": 0,
    "explanation": "Increased serotonin signaling, particularly through certain 5-HT pathways, is associated with sexual dysfunction during SSRI therapy."
  },
  {
    "id": 32,
    "question": "A patient with major depression has prominent insomnia and weight loss. Which antidepressant is more likely to increase appetite and cause sedation?",
    "options": [
      "Fluoxetine",
      "Mirtazapine",
      "Bupropion",
      "Sertraline"
    ],
    "answer": 1,
    "explanation": "Mirtazapine blocks central α₂ receptors and certain serotonin receptors, commonly causing sedation and increased appetite/weight gain."
  },
  {
    "id": 33,
    "question": "A patient with chronic heart failure is prescribed an ACE inhibitor. Which long-term effect contributes to improved cardiac remodeling?",
    "options": [
      "Increased angiotensin II",
      "Reduced aldosterone and sympathetic activation",
      "Increased sodium retention",
      "Increased afterload"
    ],
    "answer": 1,
    "explanation": "ACE inhibition decreases angiotensin II and aldosterone, reducing afterload, preload and maladaptive remodeling."
  },
  {
    "id": 34,
    "question": "A patient develops angioedema while taking lisinopril. Which alternative is generally preferred if renin-angiotensin system blockade remains necessary?",
    "options": [
      "Another ACE inhibitor",
      "An ARB",
      "Aliskiren is always contraindicated",
      "A nonselective β blocker"
    ],
    "answer": 1,
    "explanation": "ARBs do not inhibit bradykinin breakdown and therefore have a much lower risk of cough and angioedema, although caution is still required after ACE-inhibitor angioedema."
  },
  {
    "id": 35,
    "question": "A patient with chronic heart failure is prescribed spironolactone. Which laboratory abnormality should be monitored most closely?",
    "options": [
      "Hypokalemia",
      "Hyperkalemia",
      "Hypernatremia",
      "Hypocalcemia"
    ],
    "answer": 1,
    "explanation": "Aldosterone antagonism reduces potassium secretion in the collecting duct, creating a risk of hyperkalemia."
  },
  {
    "id": 36,
    "question": "A patient with pulmonary edema receives furosemide. Which nephron segment is primarily affected?",
    "options": [
      "Proximal tubule",
      "Thin descending limb",
      "Thick ascending limb",
      "Collecting duct"
    ],
    "answer": 2,
    "explanation": "Furosemide blocks the Na⁺-K⁺-2Cl⁻ cotransporter in the thick ascending limb."
  },
  {
    "id": 37,
    "question": "A patient with hypertension is taking hydrochlorothiazide. Which metabolic abnormality is most likely after prolonged treatment?",
    "options": [
      "Hyperkalemia",
      "Hypercalcemia",
      "Severe metabolic acidosis",
      "Hypouricemia"
    ],
    "answer": 1,
    "explanation": "Thiazides increase Ca²⁺ reabsorption in the distal tubule, potentially causing hypercalcemia. They can also cause hypokalemia, hyponatremia and hyperuricemia."
  },
  {
    "id": 38,
    "question": "A patient with gout is started on hydrochlorothiazide and experiences worsening hyperuricemia. Why?",
    "options": [
      "Increased uric acid synthesis by the liver",
      "Decreased renal uric acid excretion",
      "Increased xanthine oxidase activity directly",
      "Increased purine absorption"
    ],
    "answer": 1,
    "explanation": "Thiazides reduce renal uric acid excretion and can precipitate hyperuricemia and gout."
  },
  {
    "id": 39,
    "question": "A patient with metabolic alkalosis and hypokalemia is treated with acetazolamide. Which renal process is inhibited?",
    "options": [
      "Na⁺-K⁺-2Cl⁻ cotransport",
      "Carbonic anhydrase activity",
      "ENaC activity",
      "Na⁺/Cl⁻ cotransport"
    ],
    "answer": 1,
    "explanation": "Acetazolamide inhibits carbonic anhydrase in the proximal tubule, increasing bicarbonate excretion."
  },
  {
    "id": 40,
    "question": "A patient receives a drug that causes hyperpolarization by opening potassium channels and increasing potassium efflux in vascular smooth muscle. Which antihypertensive drug has this mechanism?",
    "options": [
      "Minoxidil",
      "Hydralazine",
      "Amlodipine",
      "Losartan"
    ],
    "answer": 0,
    "explanation": "Minoxidil opens K⁺ channels, hyperpolarizing smooth muscle and causing potent arteriolar vasodilation. It can cause reflex tachycardia and hypertrichosis."
  },
  {
    "id": 41,
    "question": "A patient with pheochromocytoma is being prepared for surgery. Which pharmacologic strategy is correct?",
    "options": [
      "β blockade before α blockade",
      "α blockade before β blockade",
      "β blockade alone",
      "ACE inhibition before α blockade"
    ],
    "answer": 1,
    "explanation": "α blockade must be established first. Giving a β blocker first can leave α-mediated vasoconstriction unopposed and cause a hypertensive crisis."
  },
  {
    "id": 42,
    "question": "A patient with BPH receives tamsulosin and experiences dizziness when standing. Which mechanism explains this adverse effect?",
    "options": [
      "β₂ blockade",
      "α₁ receptor blockade",
      "Muscarinic stimulation",
      "Dopamine stimulation"
    ],
    "answer": 1,
    "explanation": "α₁ blockade reduces vascular smooth-muscle tone and can cause orthostatic hypotension."
  },
  {
    "id": 43,
    "question": "A patient with organophosphate poisoning has bronchorrhea, miosis, diarrhea, bradycardia and muscle fasciculations. Which treatment directly reactivates acetylcholinesterase if given early?",
    "options": [
      "Atropine",
      "Pralidoxime",
      "Physostigmine",
      "Neostigmine"
    ],
    "answer": 1,
    "explanation": "Pralidoxime can reactivate phosphorylated acetylcholinesterase before aging occurs. Atropine treats muscarinic manifestations."
  },
  {
    "id": 44,
    "question": "A patient with myasthenia gravis is prescribed pyridostigmine. Which neurotransmitter level increases at the neuromuscular junction?",
    "options": [
      "Dopamine",
      "GABA",
      "Acetylcholine",
      "Glutamate"
    ],
    "answer": 2,
    "explanation": "Pyridostigmine inhibits acetylcholinesterase, increasing acetylcholine concentration at the neuromuscular junction."
  },
  {
    "id": 45,
    "question": "A patient with Parkinson disease has motor fluctuations while taking levodopa/carbidopa. Which drug inhibits peripheral COMT and can prolong levodopa's effect?",
    "options": [
      "Entacapone",
      "Selegiline",
      "Benztropine",
      "Bromocriptine"
    ],
    "answer": 0,
    "explanation": "Entacapone inhibits COMT, reducing peripheral levodopa metabolism and prolonging its availability."
  },
  {
    "id": 46,
    "question": "A patient taking levodopa develops involuntary choreiform movements. Which adverse effect is most likely?",
    "options": [
      "Dyskinesia",
      "Agranulocytosis",
      "Nephrogenic diabetes insipidus",
      "Optic neuritis"
    ],
    "answer": 0,
    "explanation": "Long-term levodopa therapy can cause dyskinesias due to fluctuating dopaminergic stimulation."
  },
  {
    "id": 47,
    "question": "A patient with opioid dependence is maintained on methadone. Compared with buprenorphine, methadone is best described as:",
    "options": [
      "Partial μ agonist",
      "Full μ agonist",
      "Pure antagonist",
      "κ antagonist only"
    ],
    "answer": 1,
    "explanation": "Methadone is a long-acting full μ-opioid agonist used in opioid dependence treatment and maintenance therapy."
  },
  {
    "id": 48,
    "question": "A patient receiving an opioid develops respiratory depression. Which arterial blood gas pattern is most likely?",
    "options": [
      "Respiratory alkalosis",
      "Respiratory acidosis",
      "Metabolic alkalosis",
      "Metabolic acidosis with hyperventilation"
    ],
    "answer": 1,
    "explanation": "Opioid-induced respiratory depression causes hypoventilation and CO₂ retention, producing respiratory acidosis."
  },
  {
    "id": 49,
    "question": "A patient with acute migraine receives sumatriptan. Which receptor does this drug primarily activate?",
    "options": [
      "5-HT1B/1D",
      "5-HT2A",
      "D2",
      "H1"
    ],
    "answer": 0,
    "explanation": "Triptans activate 5-HT1B/1D receptors, causing cranial vasoconstriction and reducing trigeminal neuropeptide release."
  },
  {
    "id": 50,
    "question": "A patient with migraine and coronary artery disease should generally avoid triptans because they can:",
    "options": [
      "Cause severe hypoglycemia",
      "Produce coronary vasoconstriction",
      "Cause profound anticoagulation",
      "Block AV conduction"
    ],
    "answer": 1,
    "explanation": "Triptans cause vasoconstriction and are contraindicated in significant ischemic cardiovascular disease."
  },
  {
    "id": 51,
    "question": "A patient receives a drug that is metabolized by CYP2D6. Genetic testing reveals markedly reduced CYP2D6 activity. Which change is most likely for a drug that is normally inactivated by CYP2D6?",
    "options": [
      "Increased drug concentration and prolonged effect",
      "Decreased drug concentration",
      "Increased renal filtration",
      "Complete loss of absorption"
    ],
    "answer": 0,
    "explanation": "Poor metabolism of an active drug can lead to higher plasma concentrations and increased toxicity."
  },
  {
    "id": 52,
    "question": "A patient receives a prodrug requiring CYP2D6 activation for its analgesic effect. Which patient would be expected to have reduced therapeutic response?",
    "options": [
      "CYP2D6 ultrarapid metabolizer",
      "CYP2D6 poor metabolizer",
      "CYP3A4 inducer",
      "Patient with increased renal clearance only"
    ],
    "answer": 1,
    "explanation": "A prodrug requiring CYP2D6 activation will have reduced efficacy in a poor metabolizer."
  },
  {
    "id": 53,
    "question": "A patient taking a drug with a high hepatic extraction ratio develops severe heart failure. Which pharmacokinetic change is most likely?",
    "options": [
      "Increased hepatic clearance",
      "Decreased hepatic clearance",
      "Increased bioavailability due to increased extraction",
      "No change in drug clearance"
    ],
    "answer": 1,
    "explanation": "For high-extraction drugs, hepatic clearance depends heavily on hepatic blood flow. Reduced cardiac output can decrease clearance."
  },
  {
    "id": 54,
    "question": "A drug has a half-life of 12 hours. A loading dose is administered before maintenance therapy. The major purpose of the loading dose is to:",
    "options": [
      "Increase renal clearance",
      "Reach therapeutic concentration rapidly",
      "Reduce bioavailability",
      "Decrease volume of distribution"
    ],
    "answer": 1,
    "explanation": "A loading dose rapidly achieves the desired plasma concentration, particularly when the drug has a long half-life."
  },
  {
    "id": 55,
    "question": "A patient is treated with a drug whose effect becomes progressively weaker despite continued administration at the same dose. Rapid development of this phenomenon is called:",
    "options": [
      "Idiosyncrasy",
      "Tachyphylaxis",
      "Hypersensitivity",
      "Potentiation"
    ],
    "answer": 1,
    "explanation": "Tachyphylaxis is a rapid decrease in response after repeated exposure, often due to receptor desensitization or mediator depletion."
  },
  {
    "id": 56,
    "question": "A patient with severe hyperlipidemia is prescribed atorvastatin. Which enzyme is inhibited?",
    "options": [
      "HMG-CoA reductase",
      "Lipoprotein lipase",
      "Hormone-sensitive lipase",
      "Acetyl-CoA carboxylase"
    ],
    "answer": 0,
    "explanation": "Statins inhibit HMG-CoA reductase, reducing hepatic cholesterol synthesis and increasing LDL receptor expression."
  },
  {
    "id": 57,
    "question": "A patient taking a statin develops muscle pain and markedly elevated creatine kinase. Which serious adverse effect should be suspected?",
    "options": [
      "Agranulocytosis",
      "Rhabdomyolysis",
      "Pulmonary fibrosis",
      "Hemolytic anemia"
    ],
    "answer": 1,
    "explanation": "Severe statin-associated muscle injury can progress to rhabdomyolysis, causing marked CK elevation and risk of acute kidney injury."
  },
  {
    "id": 58,
    "question": "A patient with iron-deficiency anemia receives oral iron. Which medication can significantly reduce iron absorption by increasing gastric pH?",
    "options": [
      "Omeprazole",
      "Vitamin C",
      "Hydrochloric acid",
      "Ascorbic acid"
    ],
    "answer": 0,
    "explanation": "PPIs increase gastric pH and can reduce absorption of non-heme iron, which benefits from an acidic environment."
  },
  {
    "id": 59,
    "question": "A patient with bacterial infection is prescribed doxycycline. Which counseling point is most appropriate?",
    "options": [
      "Take with antacids to improve absorption",
      "Avoid taking it with calcium-containing products",
      "It is safe during pregnancy",
      "It commonly causes optic neuritis"
    ],
    "answer": 1,
    "explanation": "Tetracyclines chelate divalent cations such as Ca²⁺, reducing absorption."
  },
  {
    "id": 60,
    "question": "A child receives tetracycline during tooth development. Which adverse effect is of particular concern?",
    "options": [
      "Tooth discoloration",
      "Optic neuritis",
      "Gray baby syndrome",
      "Kernicterus"
    ],
    "answer": 0,
    "explanation": "Tetracyclines bind calcium and can cause permanent tooth discoloration and impaired bone growth during development."
  },
  {
    "id": 61,
    "question": "A patient with severe MRSA infection receives vancomycin intravenously. During infusion, he develops flushing, erythema and hypotension. What is the most likely explanation?",
    "options": [
      "IgE-mediated anaphylaxis only",
      "Rapid infusion causing histamine release",
      "CYP450 induction",
      "Immune thrombocytopenia"
    ],
    "answer": 1,
    "explanation": "Rapid IV vancomycin infusion can cause red man syndrome, due to histamine release. Slowing the infusion helps prevent it."
  },
  {
    "id": 62,
    "question": "A patient with severe gram-negative sepsis receives an aminoglycoside. Which mechanism best describes its antibacterial action?",
    "options": [
      "Inhibition of cell wall cross-linking",
      "Binding to 30S and causing misreading of mRNA",
      "Inhibition of DNA gyrase",
      "Inhibition of folate synthesis"
    ],
    "answer": 1,
    "explanation": "Aminoglycosides bind the 30S ribosomal subunit, causing misreading of mRNA and inhibition of protein synthesis."
  },
  {
    "id": 63,
    "question": "A patient with severe pneumonia is prescribed an antibiotic that inhibits bacterial protein synthesis by binding the 50S subunit. Which drug could be used?",
    "options": [
      "Azithromycin",
      "Gentamicin",
      "Ciprofloxacin",
      "Amikacin"
    ],
    "answer": 0,
    "explanation": "Macrolides such as azithromycin bind the 50S subunit and inhibit translocation."
  },
  {
    "id": 64,
    "question": "A patient develops aplastic anemia after receiving an antibiotic. Which drug is classically associated with this rare adverse effect?",
    "options": [
      "Chloramphenicol",
      "Amoxicillin",
      "Azithromycin",
      "Ceftriaxone"
    ],
    "answer": 0,
    "explanation": "Chloramphenicol can cause dose-related bone marrow suppression and rare but serious aplastic anemia."
  },
  {
    "id": 65,
    "question": "A patient with uncomplicated cystitis receives nitrofurantoin. Why is this drug not appropriate for pyelonephritis?",
    "options": [
      "It cannot reach effective concentrations in renal tissue",
      "It is rapidly metabolized in the liver",
      "It causes universal nephrotoxicity",
      "It cannot be absorbed orally"
    ],
    "answer": 0,
    "explanation": "Nitrofurantoin achieves high concentrations in urine but inadequate concentrations in renal parenchyma, so it is unsuitable for pyelonephritis."
  },
  {
    "id": 66,
    "question": "A patient with HIV is started on a protease inhibitor. Which adverse metabolic effect can occur?",
    "options": [
      "Lipodystrophy and insulin resistance",
      "Severe hypothyroidism only",
      "Permanent hearing loss",
      "Nephrogenic diabetes insipidus"
    ],
    "answer": 0,
    "explanation": "HIV protease inhibitors can cause lipodystrophy, dyslipidemia and insulin resistance."
  },
  {
    "id": 67,
    "question": "A patient with HIV receives zidovudine and develops anemia. Which mechanism is responsible?",
    "options": [
      "Bone marrow suppression",
      "Hemolysis from G6PD deficiency only",
      "Iron chelation",
      "Increased erythropoietin destruction"
    ],
    "answer": 0,
    "explanation": "Zidovudine can cause bone marrow suppression, particularly anemia and neutropenia."
  },
  {
    "id": 68,
    "question": "A patient with malaria is treated with primaquine. Before therapy, testing for G6PD deficiency is performed. Why?",
    "options": [
      "Primaquine can cause hemolysis in G6PD deficiency",
      "Primaquine causes methemoglobinemia in all patients",
      "G6PD deficiency causes drug resistance",
      "Primaquine causes aplastic anemia"
    ],
    "answer": 0,
    "explanation": "Oxidative metabolites of primaquine can trigger hemolytic anemia in patients with G6PD deficiency."
  },
  {
    "id": 69,
    "question": "A patient with peptic ulcer disease requires NSAID therapy for chronic arthritis. Which drug can reduce NSAID-induced gastric injury by acting as a prostaglandin analog?",
    "options": [
      "Misoprostol",
      "Omeprazole",
      "Famotidine",
      "Sucralfate"
    ],
    "answer": 0,
    "explanation": "Misoprostol is a PGE₁ analog that increases mucus and bicarbonate secretion and decreases acid secretion."
  },
  {
    "id": 70,
    "question": "A woman taking misoprostol for NSAID-induced gastric protection develops uterine contractions. This effect occurs because misoprostol:",
    "options": [
      "Blocks progesterone receptors",
      "Has prostaglandin activity on uterine smooth muscle",
      "Blocks oxytocin receptors",
      "Activates estrogen receptors"
    ],
    "answer": 1,
    "explanation": "Misoprostol can stimulate uterine contractions and is therefore contraindicated during pregnancy when used for ulcer prevention."
  },
  {
    "id": 71,
    "question": "A patient with severe nausea is given metoclopramide. Which additional pharmacologic effect contributes to its prokinetic action?",
    "options": [
      "D2 receptor blockade",
      "μ receptor stimulation",
      "H1 receptor stimulation",
      "β₂ receptor blockade"
    ],
    "answer": 0,
    "explanation": "Metoclopramide blocks D2 receptors and enhances upper GI motility; it also has 5-HT4 agonist activity."
  },
  {
    "id": 72,
    "question": "A patient taking metoclopramide develops involuntary neck contractions. Which adverse effect is this?",
    "options": [
      "Acute dystonia",
      "Tardive dyskinesia only",
      "Serotonin syndrome",
      "Cholinergic crisis"
    ],
    "answer": 0,
    "explanation": "Dopamine blockade by metoclopramide can cause extrapyramidal symptoms, including acute dystonia."
  },
  {
    "id": 73,
    "question": "A patient with ulcerative colitis is treated with a drug that releases 5-ASA in the colon. Which drug is most likely?",
    "options": [
      "Mesalamine",
      "Sulfasalazine",
      "Omeprazole",
      "Metoclopramide"
    ],
    "answer": 1,
    "explanation": "Sulfasalazine is cleaved by colonic bacteria to release 5-aminosalicylic acid, which acts locally in the colon."
  },
  {
    "id": 74,
    "question": "A patient with inflammatory bowel disease develops arthralgia and rash while receiving sulfasalazine. Which additional adverse effect is associated with this drug?",
    "options": [
      "Hemolysis in G6PD deficiency",
      "Pulmonary fibrosis universally",
      "Severe hyperkalemia",
      "Optic neuritis"
    ],
    "answer": 0,
    "explanation": "Sulfasalazine contains a sulfonamide component and can cause hemolysis in G6PD-deficient patients."
  },
  {
    "id": 75,
    "question": "A patient with adrenal insufficiency requires glucocorticoid replacement. Which drug has predominantly glucocorticoid activity with relatively little mineralocorticoid activity?",
    "options": [
      "Fludrocortisone",
      "Dexamethasone",
      "Aldosterone",
      "Desoxycorticosterone"
    ],
    "answer": 1,
    "explanation": "Dexamethasone has strong glucocorticoid activity with minimal mineralocorticoid activity."
  },
  {
    "id": 76,
    "question": "A patient receiving long-term prednisone develops hyperglycemia, osteoporosis and increased susceptibility to infection. Which mechanism contributes to suppression of endogenous cortisol production?",
    "options": [
      "Increased CRH secretion",
      "Negative feedback on CRH and ACTH",
      "Increased ACTH secretion",
      "Direct destruction of adrenal cortex"
    ],
    "answer": 1,
    "explanation": "Exogenous glucocorticoids suppress the hypothalamic-pituitary-adrenal axis through negative feedback."
  },
  {
    "id": 77,
    "question": "A patient with Graves disease cannot tolerate methimazole because of agranulocytosis. Which drug inhibits thyroid hormone synthesis and can also inhibit peripheral conversion of T4 to T3?",
    "options": [
      "Propylthiouracil",
      "Levothyroxine",
      "Radioactive iodine",
      "Iodide alone"
    ],
    "answer": 0,
    "explanation": "PTU inhibits thyroid peroxidase and also decreases peripheral conversion of T4 to T3."
  },
  {
    "id": 78,
    "question": "A patient receives radioactive iodine for hyperthyroidism. Which patient should generally NOT receive this treatment?",
    "options": [
      "Elderly patient with toxic multinodular goiter",
      "Pregnant woman",
      "Patient with Graves disease",
      "Patient with recurrent hyperthyroidism"
    ],
    "answer": 1,
    "explanation": "Radioactive iodine crosses the placenta and can damage the fetal thyroid, so it is contraindicated in pregnancy."
  },
  {
    "id": 79,
    "question": "A patient with osteoporosis is treated with a drug that inhibits osteoclast-mediated bone resorption. Which drug acts through this mechanism?",
    "options": [
      "Alendronate",
      "Teriparatide",
      "Calcitriol",
      "Cinacalcet"
    ],
    "answer": 0,
    "explanation": "Bisphosphonates such as alendronate inhibit osteoclast activity, decreasing bone resorption."
  },
  {
    "id": 80,
    "question": "A patient taking alendronate is instructed to remain upright after taking the medication. Why?",
    "options": [
      "To prevent renal failure",
      "To reduce esophageal irritation",
      "To improve hepatic metabolism",
      "To prevent hypoglycemia"
    ],
    "answer": 1,
    "explanation": "Oral bisphosphonates can cause esophagitis. Taking them with water and remaining upright reduces this risk."
  },
  {
    "id": 81,
    "question": "A patient with benign prostatic hyperplasia receives finasteride. After several months, prostate volume decreases. Which androgen is reduced?",
    "options": [
      "Testosterone",
      "Dihydrotestosterone",
      "Estradiol",
      "DHEA"
    ],
    "answer": 1,
    "explanation": "Finasteride inhibits 5α-reductase, reducing conversion of testosterone to DHT."
  },
  {
    "id": 82,
    "question": "A patient with erectile dysfunction takes sildenafil. He later presents with prolonged painful erection. Which complication has occurred?",
    "options": [
      "Priapism",
      "Phimosis",
      "Testicular torsion",
      "Retrograde ejaculation"
    ],
    "answer": 0,
    "explanation": "PDE5 inhibitors rarely cause prolonged erection (priapism), which requires urgent management."
  },
  {
    "id": 83,
    "question": "A patient with rheumatoid arthritis receives a monoclonal antibody that inhibits TNF-α. Before treatment, screening for tuberculosis is performed. Why?",
    "options": [
      "TNF-α blockade increases risk of reactivation of latent TB",
      "TNF-α blockade causes direct TB infection",
      "TB reduces drug absorption",
      "TNF-α blockade causes false-positive TB tests"
    ],
    "answer": 0,
    "explanation": "TNF-α is important for granuloma maintenance. Blocking it can reactivate latent tuberculosis."
  },
  {
    "id": 84,
    "question": "A patient with severe rheumatoid arthritis receives methotrexate. Which supplement is commonly given to reduce some adverse effects without significantly eliminating its therapeutic benefit?",
    "options": [
      "Folic acid",
      "Vitamin K",
      "Vitamin D only",
      "Vitamin B12 only"
    ],
    "answer": 0,
    "explanation": "Folic acid supplementation can reduce methotrexate-associated mucositis, GI symptoms and some hematologic toxicity."
  },
  {
    "id": 85,
    "question": "A patient receiving chemotherapy develops severe neutropenia. Filgrastim is administered. Which receptor pathway is primarily activated?",
    "options": [
      "G-CSF receptor signaling",
      "EPO receptor signaling",
      "Thrombopoietin receptor signaling",
      "IL-2 receptor signaling"
    ],
    "answer": 0,
    "explanation": "Filgrastim is recombinant G-CSF, stimulating proliferation and differentiation of neutrophil precursors."
  },
  {
    "id": 86,
    "question": "A patient with chronic kidney disease develops anemia due to inadequate erythropoietin production. Which drug can stimulate erythropoiesis?",
    "options": [
      "Epoetin alfa",
      "Filgrastim",
      "Romiplostim",
      "Interferon-α"
    ],
    "answer": 0,
    "explanation": "Epoetin alfa is recombinant erythropoietin and stimulates red blood cell production in the bone marrow."
  },
  {
    "id": 87,
    "question": "A patient receives a drug that binds irreversibly to platelet COX-1. The antiplatelet effect persists for several days after the drug is discontinued because:",
    "options": [
      "The drug has an extremely long plasma half-life",
      "Platelets cannot synthesize new COX enzyme",
      "The drug accumulates in adipose tissue",
      "Platelets have CYP450 deficiency"
    ],
    "answer": 1,
    "explanation": "Aspirin irreversibly inhibits platelet COX-1. Platelets lack nuclei and cannot synthesize new enzyme, so the effect lasts for their lifespan."
  },
  {
    "id": 88,
    "question": "A patient with acute coronary syndrome receives clopidogrel. This drug prevents platelet aggregation primarily by blocking:",
    "options": [
      "GP IIb/IIIa directly",
      "ADP P2Y12 receptors",
      "Thromboxane synthesis irreversibly",
      "Thrombin receptors"
    ],
    "answer": 1,
    "explanation": "Clopidogrel irreversibly blocks platelet P2Y12 ADP receptors, reducing GP IIb/IIIa activation and platelet aggregation."
  },
  {
    "id": 89,
    "question": "A patient taking clopidogrel is also prescribed omeprazole. The physician changes omeprazole to another acid-suppressing drug because of concern for reduced clopidogrel activation. Which enzyme is involved?",
    "options": [
      "CYP2C19",
      "CYP1A2",
      "CYP2D6",
      "CYP2E1"
    ],
    "answer": 0,
    "explanation": "Clopidogrel is a prodrug requiring CYP2C19 activation. Omeprazole can inhibit CYP2C19 and potentially reduce its antiplatelet effect."
  },
  {
    "id": 90,
    "question": "A patient with pulmonary embolism receives heparin. Several days later, his platelet count falls markedly and he develops a new thrombosis. What is the most likely diagnosis?",
    "options": [
      "DIC",
      "HIT type II",
      "TTP",
      "ITP"
    ],
    "answer": 1,
    "explanation": "Heparin-induced thrombocytopenia type II is an immune-mediated reaction involving PF4-heparin antibodies, causing thrombocytopenia with paradoxical thrombosis."
  },
  {
    "id": 91,
    "question": "A patient with severe bleeding due to excessive warfarin anticoagulation requires reversal. Which treatment provides rapid replacement of multiple vitamin K-dependent clotting factors?",
    "options": [
      "Protamine sulfate",
      "Four-factor PCC",
      "Idarucizumab",
      "Naloxone"
    ],
    "answer": 1,
    "explanation": "Four-factor prothrombin complex concentrate provides factors II, VII, IX and X and rapidly reverses severe warfarin anticoagulation."
  },
  {
    "id": 92,
    "question": "A patient taking dabigatran develops life-threatening bleeding. Which specific antidote can rapidly reverse its anticoagulant effect?",
    "options": [
      "Idarucizumab",
      "Protamine",
      "Vitamin K",
      "Andexanet alfa"
    ],
    "answer": 0,
    "explanation": "Idarucizumab is a monoclonal antibody fragment that specifically binds and reverses dabigatran."
  },
  {
    "id": 93,
    "question": "A patient receiving unfractionated heparin develops major bleeding. Which antidote is most appropriate?",
    "options": [
      "Vitamin K",
      "Protamine sulfate",
      "Idarucizumab",
      "Atropine"
    ],
    "answer": 1,
    "explanation": "Protamine is a positively charged molecule that binds and neutralizes heparin."
  },
  {
    "id": 94,
    "question": "A patient with acute heart failure receives a drug that increases intracellular cAMP in cardiac myocytes by inhibiting phosphodiesterase-3. Which drug has this mechanism?",
    "options": [
      "Milrinone",
      "Digoxin",
      "Metoprolol",
      "Verapamil"
    ],
    "answer": 0,
    "explanation": "Milrinone inhibits PDE-3, increasing cAMP and producing positive inotropic and vasodilatory effects."
  },
  {
    "id": 95,
    "question": "A patient receiving milrinone develops hypotension and ventricular arrhythmias. Which property explains these effects?",
    "options": [
      "Increased cAMP causing increased contractility and vasodilation",
      "α₁ receptor blockade only",
      "Muscarinic stimulation",
      "Potassium channel blockade"
    ],
    "answer": 0,
    "explanation": "PDE-3 inhibition increases cAMP, causing increased cardiac contractility and vasodilation, but may cause hypotension and arrhythmias."
  },
  {
    "id": 96,
    "question": "A patient with septic shock remains hypotensive despite adequate fluid resuscitation. Norepinephrine is started. Which receptor effect is most important for increasing blood pressure?",
    "options": [
      "β₂-mediated vasodilation",
      "α₁-mediated vasoconstriction",
      "M2 stimulation",
      "D2 blockade"
    ],
    "answer": 1,
    "explanation": "Norepinephrine strongly stimulates α₁ receptors, increasing systemic vascular resistance and blood pressure."
  },
  {
    "id": 97,
    "question": "A patient receives epinephrine during anaphylaxis. Which combination best explains its therapeutic effects?",
    "options": [
      "α₁ vasodilation + β₂ bronchoconstriction",
      "α₁ vasoconstriction + β₂ bronchodilation",
      "α₂ vasodilation + β₁ blockade",
      "M3 stimulation + β₁ blockade"
    ],
    "answer": 1,
    "explanation": "α₁ activation increases vascular tone and reduces mucosal edema, while β₂ activation causes bronchodilation."
  },
  {
    "id": 98,
    "question": "A patient with bradycardia is treated with atropine. Which receptor is blocked?",
    "options": [
      "Nicotinic Nn",
      "Muscarinic receptors",
      "β1 receptors",
      "α1 receptors"
    ],
    "answer": 1,
    "explanation": "Atropine competitively blocks muscarinic receptors, reducing vagal effects on the heart and thereby increasing heart rate."
  },
  {
    "id": 99,
    "question": "A patient with severe asthma receives a β₂ agonist and develops tremor and hypokalemia. Which intracellular change primarily mediates the drug's action?",
    "options": [
      "Decreased cAMP",
      "Increased cAMP",
      "Increased IP₃",
      "Decreased intracellular calcium through Gq activation"
    ],
    "answer": 1,
    "explanation": "β₂ receptors couple to Gs, increasing adenylate cyclase activity and cAMP. This causes bronchodilation and can produce tremor and intracellular K⁺ shift."
  },
  {
    "id": 100,
    "question": "A 72-year-old patient with atrial fibrillation is prescribed a new drug. The drug is highly effective but has a narrow therapeutic index and is predominantly eliminated by the kidneys. After developing acute kidney injury, he develops confusion, tremor and cardiac arrhythmia. Which pharmacologic principle best explains the toxicity?",
    "options": [
      "Increased hepatic first-pass metabolism",
      "Reduced clearance causing drug accumulation",
      "Increased receptor downregulation",
      "Decreased volume of distribution"
    ],
    "answer": 1,
    "explanation": "Renal impairment decreases drug clearance, increasing its half-life and plasma concentration. This is particularly dangerous for drugs with a narrow therapeutic index."
  }
];
