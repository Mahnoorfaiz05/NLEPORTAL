import type { Question } from "./types";
export const endocrinologyQuestions: Question[] = [
  {
    "id": 1,
    "question": "A 32-year-old woman presents with progressive fatigue, weight loss, nausea, dizziness on standing, and darkening of the palmar creases and oral mucosa. Laboratory studies show sodium 127 mEq/L, potassium 6.1 mEq/L, glucose 58 mg/dL, low morning cortisol, and markedly elevated ACTH. An ACTH stimulation test produces minimal increase in serum cortisol. Which of the following best explains the hormonal abnormalities in this patient?",
    "options": [
      "Destruction of the adrenal medulla causing decreased catecholamine synthesis",
      "Destruction of the adrenal cortex causing decreased cortisol and aldosterone production",
      "Pituitary destruction causing decreased ACTH and secondary cortisol deficiency",
      "Increased hepatic metabolism causing excessive cortisol clearance"
    ],
    "answer": 1,
    "explanation": "This is primary adrenal insufficiency (Addison disease). Destruction of the adrenal cortex causes ↓ cortisol and ↓ aldosterone. Loss of cortisol feedback causes ↑ ACTH, producing hyperpigmentation. Aldosterone deficiency causes hyponatremia, hyperkalemia, hypotension, and increased renin."
  },
  {
    "id": 2,
    "question": "A 51-year-old man reports progressive enlargement of his hands and feet, increasing shoe size, coarse facial features, excessive sweating, and headaches. He has recently developed impaired glucose tolerance. Serum IGF-1 is markedly elevated and MRI demonstrates a pituitary macroadenoma. Which physiological response would normally occur after administration of oral glucose but is absent in this patient?",
    "options": [
      "Suppression of growth hormone secretion",
      "Suppression of ACTH secretion",
      "Increase in TSH secretion",
      "Increase in prolactin secretion"
    ],
    "answer": 0,
    "explanation": "Normally, oral glucose suppresses GH secretion. In acromegaly, autonomous GH secretion fails to suppress. Elevated IGF-1 is the best initial screening test."
  },
  {
    "id": 3,
    "question": "A 27-year-old woman presents with heat intolerance, tremor, weight loss despite increased appetite, palpitations, and anxiety. Examination reveals a diffuse, non-tender goiter and bilateral exophthalmos. Laboratory studies demonstrate suppressed TSH and elevated free T4, while radioactive iodine uptake is diffusely increased. Which mechanism most directly explains her thyroid hormone excess?",
    "options": [
      "Destruction of follicular cells with release of preformed hormone",
      "Antibodies stimulating the TSH receptor",
      "Increased secretion of TSH from the pituitary",
      "Autonomous calcitonin secretion"
    ],
    "answer": 1,
    "explanation": "Graves disease is caused by TSH receptor-stimulating IgG antibodies. They mimic TSH and increase thyroid hormone synthesis and gland growth."
  },
  {
    "id": 4,
    "question": "A 45-year-old woman has fatigue, constipation, weight gain, dry skin, and cold intolerance. Her laboratory results show low free T4 and markedly elevated TSH. Anti-thyroid peroxidase antibodies are strongly positive. Which biochemical process within the thyroid follicular cell is most directly affected by the autoimmune process?",
    "options": [
      "Conversion of T4 to T3 in peripheral tissues",
      "Iodination and coupling of tyrosine residues in thyroglobulin",
      "Binding of TSH to intracellular receptors",
      "Conversion of cortisol to cortisone"
    ],
    "answer": 1,
    "explanation": "Thyroid peroxidase catalyzes iodination and coupling reactions required for T3/T4 synthesis. Hashimoto thyroiditis is associated with anti-TPO antibodies and progressive thyroid destruction."
  },
  {
    "id": 5,
    "question": "A 19-year-old man develops intense thirst and polyuria following a head injury. His serum sodium is 151 mEq/L and urine osmolality is very low. After administration of desmopressin, urine osmolality increases dramatically. The deficient hormone is synthesized in the hypothalamus and transported along axons to the posterior pituitary. Which hypothalamic nuclei are primarily responsible for its synthesis?",
    "options": [
      "Arcuate and ventromedial nuclei",
      "Supraoptic and paraventricular nuclei",
      "Suprachiasmatic and arcuate nuclei",
      "Mammillary and lateral hypothalamic nuclei"
    ],
    "answer": 1,
    "explanation": "ADH is synthesized mainly in the supraoptic and paraventricular nuclei and stored/released from the posterior pituitary. A strong response to desmopressin indicates central DI."
  },
  {
    "id": 6,
    "question": "A 34-year-old woman presents with amenorrhea, infertility, decreased libido, and spontaneous galactorrhea. MRI demonstrates a pituitary microadenoma, and serum prolactin is markedly elevated. Which hypothalamic hormone normally inhibits prolactin secretion and is therefore used therapeutically in this condition through receptor agonism?",
    "options": [
      "Dopamine",
      "TRH",
      "GnRH",
      "GHRH"
    ],
    "answer": 0,
    "explanation": "Dopamine provides tonic inhibition of prolactin through D2 receptors. Cabergoline and bromocriptine are dopamine agonists used to treat prolactinomas."
  },
  {
    "id": 7,
    "question": "A 7-year-old boy is evaluated for severe short stature. His height is below the third percentile, bone age is delayed, and serum IGF-1 is decreased. Growth hormone stimulation testing demonstrates an inadequate increase in GH. The physician explains that GH promotes longitudinal bone growth primarily through a hormone produced by the liver. Which hormone is being described?",
    "options": [
      "IGF-1",
      "Cortisol",
      "T3",
      "Aldosterone"
    ],
    "answer": 0,
    "explanation": "GH stimulates hepatic production of IGF-1, which promotes chondrocyte proliferation at the epiphyseal growth plates and longitudinal bone growth."
  },
  {
    "id": 8,
    "question": "A 42-year-old woman presents with central obesity, facial rounding, proximal muscle weakness, hypertension, easy bruising, and purple abdominal striae. Laboratory testing reveals elevated cortisol and ACTH. MRI demonstrates a small pituitary lesion. Which adrenal cortical region is primarily responsible for producing the excess cortisol?",
    "options": [
      "Zona glomerulosa",
      "Zona fasciculata",
      "Zona reticularis",
      "Adrenal medulla"
    ],
    "answer": 1,
    "explanation": "The adrenal cortex follows GFR: glomerulosa → mineralocorticoids, fasciculata → glucocorticoids, reticularis → androgens. ACTH mainly stimulates fasciculata and reticularis."
  },
  {
    "id": 9,
    "question": "A 48-year-old man has resistant hypertension, muscle weakness, and occasional palpitations. Laboratory studies show potassium 2.7 mEq/L, metabolic alkalosis, elevated aldosterone, and suppressed renin. CT reveals a unilateral adrenal cortical adenoma. Which renal cellular mechanism is primarily responsible for his hypokalemia?",
    "options": [
      "Reduced potassium secretion by principal cells",
      "Increased potassium secretion by principal cells",
      "Increased potassium reabsorption in the proximal tubule",
      "Reduced sodium reabsorption in the collecting duct"
    ],
    "answer": 1,
    "explanation": "Aldosterone acts on principal cells, increasing ENaC-mediated sodium reabsorption and Na⁺/K⁺-ATPase activity, thereby increasing potassium secretion."
  },
  {
    "id": 10,
    "question": "A 39-year-old man presents with episodic headaches, sweating, palpitations, tremor, and severe hypertension. Plasma metanephrines are markedly elevated and imaging reveals an adrenal mass. He is scheduled for adrenalectomy. Which preoperative approach is most appropriate?",
    "options": [
      "β-blockade followed by α-blockade",
      "α-blockade followed by β-blockade if necessary",
      "Diuretic therapy followed by β-blockade",
      "Calcium-channel blockade alone"
    ],
    "answer": 1,
    "explanation": "Pheochromocytoma requires α-blockade first. β-blockade before adequate α-blockade can cause unopposed α-mediated vasoconstriction and severe hypertension."
  },
  {
    "id": 11,
    "question": "A 55-year-old woman presents with recurrent kidney stones, constipation, fatigue, and bone pain. Serum calcium is elevated, phosphate is decreased, and PTH is markedly elevated. Imaging identifies a parathyroid adenoma. Which renal effect of PTH directly contributes to her hypophosphatemia?",
    "options": [
      "Increased proximal tubular phosphate reabsorption",
      "Decreased proximal tubular phosphate reabsorption",
      "Increased collecting duct phosphate reabsorption",
      "Increased distal tubular phosphate reabsorption"
    ],
    "answer": 1,
    "explanation": "PTH decreases proximal tubular Na⁺-phosphate cotransporters, causing phosphaturia and low serum phosphate."
  },
  {
    "id": 12,
    "question": "A newborn develops vomiting, dehydration, hypotension, and hyperkalemia during the first week of life. Laboratory testing demonstrates low cortisol and markedly elevated 17-hydroxyprogesterone. Genetic analysis confirms congenital adrenal hyperplasia. Which additional abnormality is most likely?",
    "options": [
      "Decreased androgen production",
      "Increased adrenal androgen production",
      "Increased cortisol production",
      "Increased aldosterone production"
    ],
    "answer": 1,
    "explanation": "21-hydroxylase deficiency decreases cortisol and aldosterone synthesis while shunting precursors toward androgen production. Severe disease causes salt wasting."
  },
  {
    "id": 13,
    "question": "A 17-year-old boy has delayed puberty, low testosterone, low LH/FSH, and complete absence of smell. MRI shows no pituitary mass. The physician suspects a congenital defect involving the hypothalamic-pituitary-gonadal axis. Which developmental abnormality is most likely?",
    "options": [
      "Failure of GnRH neuron migration",
      "Failure of thyroid descent",
      "Failure of Rathke pouch formation",
      "Failure of adrenal medulla migration"
    ],
    "answer": 0,
    "explanation": "Kallmann syndrome results from failure of GnRH neurons to migrate from the olfactory placode to the hypothalamus, causing hypogonadotropic hypogonadism and anosmia."
  },
  {
    "id": 14,
    "question": "A 40-year-old woman develops perioral numbness, muscle cramps, carpopedal spasm, and QT prolongation several hours after total thyroidectomy. Laboratory studies show low calcium and high phosphate. Which hormone is most likely deficient?",
    "options": [
      "Calcitonin",
      "PTH",
      "Aldosterone",
      "TSH"
    ],
    "answer": 1,
    "explanation": "Accidental removal or injury of the parathyroid glands causes hypoparathyroidism → hypocalcemia + hyperphosphatemia."
  },
  {
    "id": 15,
    "question": "A 36-year-old woman has fatigue, hypotension, weight loss, hyperpigmentation, hyponatremia, and hyperkalemia. ACTH is markedly elevated and cortisol is low. The hyperpigmentation is especially prominent in the oral mucosa and palmar creases. Which precursor molecule accounts for this finding?",
    "options": [
      "Proopiomelanocortin",
      "Proinsulin",
      "Pregnenolone",
      "Thyroglobulin"
    ],
    "answer": 0,
    "explanation": "ACTH is derived from POMC, which also gives rise to melanocortin peptides. Increased POMC production in primary adrenal insufficiency contributes to hyperpigmentation."
  },
  {
    "id": 16,
    "question": "A 63-year-old man with resistant hypertension has potassium of 2.5 mEq/L and metabolic alkalosis. His aldosterone level is markedly elevated while renin is suppressed. Which additional renal effect is produced by excess aldosterone?",
    "options": [
      "Increased hydrogen ion secretion",
      "Decreased sodium reabsorption",
      "Decreased potassium secretion",
      "Decreased ENaC expression"
    ],
    "answer": 0,
    "explanation": "Aldosterone promotes H⁺ secretion by α-intercalated cells and K⁺ secretion by principal cells, producing metabolic alkalosis and hypokalemia."
  },
  {
    "id": 17,
    "question": "A 28-year-old woman with Graves disease is treated with methimazole. Several weeks later she develops high fever and severe sore throat. CBC reveals profound neutropenia. Which adverse effect is most concerning?",
    "options": [
      "Agranulocytosis",
      "Hyperkalemia",
      "Nephrotic syndrome",
      "Osteoporosis"
    ],
    "answer": 0,
    "explanation": "Thionamides can cause agranulocytosis, so fever or sore throat requires immediate CBC evaluation and discontinuation if confirmed."
  },
  {
    "id": 18,
    "question": "A 58-year-old woman with long-standing untreated hypothyroidism presents with hypothermia, bradycardia, altered mental status, hypotension, and hyponatremia. Which treatment is most appropriate?",
    "options": [
      "Methimazole",
      "IV levothyroxine",
      "Radioactive iodine",
      "Propranolol"
    ],
    "answer": 1,
    "explanation": "This is myxedema coma, a medical emergency requiring IV thyroid hormone and supportive care. Glucocorticoids are commonly given empirically until adrenal insufficiency is excluded."
  },
  {
    "id": 19,
    "question": "A 24-year-old man with type 1 diabetes presents with abdominal pain, vomiting, dehydration, and Kussmaul respirations. Glucose is 510 mg/dL, bicarbonate is 9 mEq/L, and β-hydroxybutyrate is markedly elevated. Which process primarily causes the metabolic acidosis?",
    "options": [
      "Increased hepatic glycogen synthesis",
      "Increased lipolysis followed by hepatic ketogenesis",
      "Increased peripheral glucose uptake",
      "Increased renal bicarbonate retention"
    ],
    "answer": 1,
    "explanation": "Insulin deficiency activates lipolysis. Free fatty acids undergo hepatic β-oxidation and ketogenesis, producing β-hydroxybutyrate and acetoacetate."
  },
  {
    "id": 20,
    "question": "A 59-year-old obese man with newly diagnosed type 2 diabetes is started on a medication that reduces hepatic glucose production and improves peripheral insulin sensitivity. He has normal renal function and no history of heart failure. Which medication was most likely prescribed?",
    "options": [
      "Metformin",
      "Glipizide",
      "Acarbose",
      "Repaglinide"
    ],
    "answer": 0,
    "explanation": "Metformin primarily decreases hepatic gluconeogenesis and improves insulin sensitivity. It generally does not cause hypoglycemia when used alone."
  },
  {
    "id": 21,
    "question": "A 67-year-old woman with type 2 diabetes develops recurrent episodes of sweating, tremor, confusion, and low plasma glucose after starting glipizide. The episodes are especially frequent when she skips meals. Which mechanism explains this medication's effect?",
    "options": [
      "Opening of ATP-sensitive potassium channels",
      "Closure of ATP-sensitive potassium channels",
      "Inhibition of SGLT2",
      "Activation of insulin degradation"
    ],
    "answer": 1,
    "explanation": "Sulfonylureas close KATP channels in β cells → membrane depolarization → Ca²⁺ influx → insulin release. Because secretion is not completely glucose-dependent, hypoglycemia can occur."
  },
  {
    "id": 22,
    "question": "A 52-year-old woman with obesity and type 2 diabetes starts a weekly injectable drug and subsequently experiences significant weight loss, reduced appetite, and improved glucose control. She has mild nausea but no severe hypoglycemic episodes. Which mechanism best explains the drug's effects?",
    "options": [
      "Increased urinary glucose excretion",
      "GLP-1 receptor activation",
      "Direct insulin receptor activation",
      "Inhibition of intestinal glucose absorption"
    ],
    "answer": 1,
    "explanation": "GLP-1 agonists increase glucose-dependent insulin secretion, suppress glucagon, slow gastric emptying, and promote satiety, leading to weight loss."
  },
  {
    "id": 23,
    "question": "A 61-year-old man with type 2 diabetes starts empagliflozin and later develops recurrent genital fungal infections. His blood glucose improves because the medication causes glucose to remain within the tubular fluid. Which transporter is inhibited?",
    "options": [
      "SGLT2",
      "NKCC2",
      "NCC",
      "ENaC"
    ],
    "answer": 0,
    "explanation": "SGLT2 is located in the proximal tubule and reabsorbs filtered glucose. Its inhibition causes glucosuria and osmotic diuresis."
  },
  {
    "id": 24,
    "question": "A 46-year-old woman develops polyuria and hypernatremia after pituitary surgery. Her urine remains dilute despite dehydration but becomes highly concentrated after desmopressin administration. Which intracellular pathway is responsible for ADH-mediated water reabsorption?",
    "options": [
      "V2 receptor → Gs → cAMP → aquaporin-2 insertion",
      "V1 receptor → Gi → decreased cAMP",
      "α1 receptor → Gq → decreased calcium",
      "Mineralocorticoid receptor → tyrosine kinase activation"
    ],
    "answer": 0,
    "explanation": "ADH binds V2 receptors on collecting duct principal cells → Gs → ↑ cAMP → PKA → insertion of aquaporin-2 channels into the apical membrane."
  },
  {
    "id": 25,
    "question": "A 64-year-old man with small-cell lung carcinoma develops confusion and seizures. Sodium is 116 mEq/L, plasma osmolality is low, and urine osmolality is inappropriately high. He has no peripheral edema. Which endocrine abnormality best explains these findings?",
    "options": [
      "Excess ADH secretion",
      "Excess aldosterone secretion",
      "Decreased ADH secretion",
      "Excess PTH secretion"
    ],
    "answer": 0,
    "explanation": "Small-cell lung carcinoma can produce ectopic ADH, causing SIADH with water retention, dilutional hyponatremia, low serum osmolality, and concentrated urine."
  },
  {
    "id": 26,
    "question": "A 44-year-old woman presents with proximal muscle weakness, central obesity, hypertension, easy bruising, and new-onset diabetes. Her cortisol remains elevated despite dexamethasone, while ACTH is suppressed. CT shows a unilateral adrenal mass. Which mechanism accounts for the low ACTH?",
    "options": [
      "Increased CRH secretion",
      "Negative feedback from autonomous cortisol secretion",
      "Increased aldosterone production",
      "Increased androgen production"
    ],
    "answer": 1,
    "explanation": "An adrenal cortisol-producing tumor secretes cortisol independently of ACTH. High cortisol suppresses hypothalamic CRH and pituitary ACTH secretion."
  },
  {
    "id": 27,
    "question": "A 35-year-old woman has low cortisol, high ACTH, hyperpigmentation, hypotension, hyponatremia, and hyperkalemia. Which additional finding would help distinguish this condition from secondary adrenal insufficiency?",
    "options": [
      "Hyperkalemia",
      "Low ACTH",
      "Normal renin",
      "Preserved aldosterone"
    ],
    "answer": 0,
    "explanation": "Primary adrenal insufficiency causes loss of aldosterone, producing hyperkalemia. Aldosterone is usually preserved in secondary adrenal insufficiency."
  },
  {
    "id": 28,
    "question": "A 29-year-old man has severe hypertension, hypokalemia, metabolic alkalosis, suppressed renin, and suppressed aldosterone. Genetic testing reveals an activating mutation of ENaC. Which drug directly targets the abnormal channel?",
    "options": [
      "Spironolactone",
      "Amiloride",
      "Furosemide",
      "Hydrochlorothiazide"
    ],
    "answer": 1,
    "explanation": "Liddle syndrome causes constitutively active ENaC. Amiloride directly blocks ENaC, whereas spironolactone does not work because aldosterone is suppressed."
  },
  {
    "id": 29,
    "question": "A 50-year-old man develops hypertension and hypokalemia after consuming large quantities of licorice. His renin and aldosterone are suppressed. Which enzyme normally prevents cortisol from excessively stimulating mineralocorticoid receptors in the kidney?",
    "options": [
      "11β-HSD2",
      "21-hydroxylase",
      "Aromatase",
      "5α-reductase"
    ],
    "answer": 0,
    "explanation": "11β-HSD2 converts cortisol to cortisone, protecting mineralocorticoid receptors. Licorice inhibits this enzyme, allowing cortisol to produce mineralocorticoid effects."
  },
  {
    "id": 30,
    "question": "A 41-year-old woman has hypertension, hypokalemia, metabolic alkalosis, and increased adrenal androgens. Laboratory studies show low cortisol and elevated 11-deoxycorticosterone. Which enzyme deficiency best explains these findings?",
    "options": [
      "21-hydroxylase",
      "11β-hydroxylase",
      "17α-hydroxylase",
      "Aromatase"
    ],
    "answer": 1,
    "explanation": "11β-hydroxylase deficiency causes accumulation of 11-deoxycorticosterone, a mineralocorticoid, resulting in hypertension. Androgen production is increased due to precursor shunting."
  },
  {
    "id": 31,
    "question": "A 16-year-old girl presents with primary amenorrhea, absent secondary sexual characteristics, hypertension, and hypokalemia. Laboratory testing shows low cortisol and sex steroids but elevated corticosterone and DOC. Which enzyme is deficient?",
    "options": [
      "21-hydroxylase",
      "11β-hydroxylase",
      "17α-hydroxylase",
      "5α-reductase"
    ],
    "answer": 2,
    "explanation": "17α-hydroxylase deficiency decreases cortisol and sex steroids while increasing mineralocorticoid precursors, causing hypertension and hypokalemia."
  },
  {
    "id": 32,
    "question": "A 47-year-old woman with autoimmune thyroiditis develops fatigue, hypotension, hyperpigmentation, hyponatremia, and hyperkalemia. Her physician suspects autoimmune involvement of multiple endocrine organs. Which combination is most characteristic of autoimmune polyglandular disease?",
    "options": [
      "Addison disease and autoimmune thyroid disease",
      "Pheochromocytoma and medullary thyroid carcinoma",
      "Acromegaly and insulinoma",
      "Hyperparathyroidism and gastrinoma"
    ],
    "answer": 0,
    "explanation": "Autoimmune polyglandular syndromes commonly involve adrenal insufficiency, autoimmune thyroid disease, type 1 diabetes, and sometimes hypoparathyroidism."
  },
  {
    "id": 33,
    "question": "A 42-year-old man has medullary thyroid carcinoma and bilateral adrenal pheochromocytomas. Genetic testing reveals an activating mutation associated with MEN2. Which gene is most likely mutated?",
    "options": [
      "MEN1",
      "RET",
      "VHL",
      "NF1"
    ],
    "answer": 1,
    "explanation": "MEN2 results from activating mutations in RET. MEN2A includes medullary thyroid carcinoma, pheochromocytoma, and primary hyperparathyroidism."
  },
  {
    "id": 34,
    "question": "A 48-year-old man undergoes thyroid surgery for a malignant thyroid nodule. Histology shows nests of tumor cells containing amyloid stroma, and serum calcitonin is markedly elevated. Which cells normally produce the hormone secreted by this tumor?",
    "options": [
      "Follicular cells",
      "Parafollicular C cells",
      "Thyroid macrophages",
      "Parathyroid chief cells"
    ],
    "answer": 1,
    "explanation": "Medullary thyroid carcinoma arises from C cells, which produce calcitonin. Amyloid deposition is characteristic."
  },
  {
    "id": 35,
    "question": "A 37-year-old woman has a thyroid nodule, and biopsy reveals enlarged nuclei with nuclear grooves and psammoma bodies. Her thyroid function tests are normal. Which pattern of spread is most characteristic?",
    "options": [
      "Hematogenous spread to bone",
      "Lymphatic spread to cervical lymph nodes",
      "Direct spread through the portal vein",
      "CSF spread to the brain"
    ],
    "answer": 1,
    "explanation": "Papillary thyroid carcinoma characteristically spreads through lymphatics and demonstrates nuclear grooves and psammoma bodies."
  },
  {
    "id": 36,
    "question": "A 45-year-old woman has a solitary thyroid nodule. Histologic examination after thyroidectomy demonstrates follicular architecture with definite capsular and vascular invasion. Which diagnosis is most likely?",
    "options": [
      "Papillary carcinoma",
      "Follicular carcinoma",
      "Medullary carcinoma",
      "Follicular adenoma"
    ],
    "answer": 1,
    "explanation": "Follicular carcinoma is distinguished from follicular adenoma by capsular and/or vascular invasion. It commonly spreads hematogenously."
  },
  {
    "id": 37,
    "question": "A 58-year-old woman with longstanding Hashimoto thyroiditis develops a rapidly enlarging thyroid mass and cervical lymphadenopathy. Biopsy reveals a malignant lymphoid population. Which malignancy is particularly associated with chronic autoimmune thyroid inflammation?",
    "options": [
      "Thyroid lymphoma",
      "Medullary carcinoma",
      "Pheochromocytoma",
      "Follicular adenoma"
    ],
    "answer": 0,
    "explanation": "Chronic autoimmune stimulation in Hashimoto thyroiditis increases the risk of primary thyroid lymphoma, usually B-cell non-Hodgkin lymphoma."
  },
  {
    "id": 38,
    "question": "A 54-year-old man with severe primary hyperparathyroidism develops bone pain and multiple radiolucent lesions. Histology demonstrates increased osteoclastic activity and fibrous replacement of bone. Which diagnosis best describes this skeletal manifestation?",
    "options": [
      "Osteopetrosis",
      "Osteitis fibrosa cystica",
      "Osteomalacia",
      "Achondroplasia"
    ],
    "answer": 1,
    "explanation": "Severe chronic hyperparathyroidism causes osteitis fibrosa cystica, characterized by increased bone resorption and possible brown tumors."
  },
  {
    "id": 39,
    "question": "A 65-year-old man with chronic kidney disease has elevated phosphate, low-normal calcium, reduced calcitriol, and markedly increased PTH. Which renal abnormality contributes most directly to his reduced calcitriol concentration?",
    "options": [
      "Increased 1α-hydroxylase activity",
      "Decreased 1α-hydroxylase activity",
      "Increased vitamin D absorption",
      "Increased renal calcium secretion"
    ],
    "answer": 1,
    "explanation": "CKD reduces renal 1α-hydroxylase, decreasing formation of active vitamin D and contributing to hypocalcemia and secondary hyperparathyroidism."
  },
  {
    "id": 40,
    "question": "A 31-year-old woman develops carpopedal spasm and perioral tingling after thyroid surgery. Calcium is low, phosphate is elevated, and PTH is decreased. Which normally occurs when PTH binds its receptor in the kidney?",
    "options": [
      "Increased phosphate reabsorption",
      "Decreased calcium reabsorption",
      "Increased calcitriol synthesis",
      "Decreased calcium absorption from intestine"
    ],
    "answer": 2,
    "explanation": "PTH stimulates renal 1α-hydroxylase, increasing calcitriol. It also increases calcium reabsorption and promotes phosphate excretion."
  },
  {
    "id": 41,
    "question": "A 43-year-old woman develops amenorrhea and inability to lactate following severe postpartum hemorrhage. She also reports fatigue, cold intolerance, and dizziness. Laboratory studies show low cortisol, low free T4, and low prolactin. Which pituitary condition best explains these findings?",
    "options": [
      "Prolactinoma",
      "Sheehan syndrome",
      "Diabetes insipidus",
      "Craniopharyngioma"
    ],
    "answer": 1,
    "explanation": "Severe postpartum hemorrhage can cause ischemic necrosis of the anterior pituitary, producing hypopituitarism. Failure to lactate is an important clue."
  },
  {
    "id": 42,
    "question": "A 45-year-old man develops fatigue, hypotension, and hypoglycemia months after long-term treatment with high-dose prednisone that was abruptly discontinued. His ACTH is low. Which mechanism best explains his condition?",
    "options": [
      "Autoimmune destruction of adrenal cortex",
      "Suppression of the hypothalamic-pituitary-adrenal axis",
      "Excessive ACTH secretion",
      "Increased aldosterone secretion"
    ],
    "answer": 1,
    "explanation": "Chronic exogenous glucocorticoids suppress CRH and ACTH, leading to adrenal cortical atrophy. Abrupt withdrawal can precipitate secondary adrenal insufficiency."
  },
  {
    "id": 43,
    "question": "A patient with hyperthyroidism is given propranolol while awaiting definitive treatment. Within hours, his tremor and palpitations improve, but his thyroid hormone levels remain elevated. Which mechanism explains the rapid symptomatic improvement?",
    "options": [
      "Inhibition of thyroid peroxidase",
      "Blockade of β-adrenergic receptors",
      "Destruction of thyroid follicular cells",
      "Inhibition of TSH receptor antibodies"
    ],
    "answer": 1,
    "explanation": "β-blockers rapidly control adrenergic manifestations such as tremor, tachycardia, and anxiety but do not significantly reduce thyroid hormone synthesis."
  },
  {
    "id": 44,
    "question": "A 31-year-old woman with severe hyperthyroidism develops fever, delirium, vomiting, diarrhea, and a heart rate of 160/min after surgery. Thyroid storm is suspected. Which medication can both control adrenergic symptoms and reduce peripheral conversion of T4 to T3 when used appropriately?",
    "options": [
      "Propranolol",
      "Levothyroxine",
      "Fludrocortisone",
      "Desmopressin"
    ],
    "answer": 0,
    "explanation": "High-dose propranolol controls β-adrenergic manifestations and also reduces peripheral T4→T3 conversion. PTU additionally inhibits conversion."
  },
  {
    "id": 45,
    "question": "A pregnant woman at 8 weeks' gestation is diagnosed with hyperthyroidism requiring antithyroid therapy. Her physician avoids one medication because of the risk of congenital malformations. Which drug is generally preferred during the first trimester?",
    "options": [
      "Methimazole",
      "Propylthiouracil",
      "Radioactive iodine",
      "Potassium-sparing diuretic"
    ],
    "answer": 1,
    "explanation": "PTU is preferred during the first trimester because methimazole is associated with embryopathy. PTU is generally switched to methimazole later because of hepatotoxicity concerns."
  },
  {
    "id": 46,
    "question": "A 33-year-old woman develops transient hyperthyroidism two months after a viral upper respiratory infection. Her TSH is suppressed, free T4 is elevated, but radioactive iodine uptake is very low. Which mechanism best explains the thyroid hormone excess?",
    "options": [
      "Increased TSH receptor stimulation",
      "Release of preformed thyroid hormone from damaged follicles",
      "Increased TSH secretion",
      "Increased iodide trapping"
    ],
    "answer": 1,
    "explanation": "Thyroiditis causes destruction of follicular cells and release of stored hormone, resulting in low radioactive iodine uptake because new hormone synthesis is suppressed."
  },
  {
    "id": 47,
    "question": "A 26-year-old woman with PCOS presents with irregular menstrual cycles, hirsutism, acne, obesity, and insulin resistance. Laboratory evaluation demonstrates increased ovarian androgen production. Which hormonal abnormality contributes to the development of excess ovarian androgen synthesis?",
    "options": [
      "Increased insulin levels",
      "Increased progesterone only",
      "Decreased LH activity",
      "Complete absence of GnRH secretion"
    ],
    "answer": 0,
    "explanation": "Hyperinsulinemia can enhance ovarian androgen production and decrease hepatic SHBG production, increasing free testosterone and contributing to PCOS hyperandrogenism."
  },
  {
    "id": 48,
    "question": "A 22-year-old man has small firm testes, gynecomastia, infertility, and unusually long limbs. Karyotyping reveals 47,XXY. Which endocrine pattern is expected?",
    "options": [
      "Low testosterone with elevated LH and FSH",
      "High testosterone with low LH and FSH",
      "Low testosterone with low LH and FSH",
      "High testosterone with elevated LH"
    ],
    "answer": 0,
    "explanation": "Klinefelter syndrome causes primary testicular failure, resulting in low testosterone and compensatory elevation of LH/FSH."
  },
  {
    "id": 49,
    "question": "A 28-year-old man has decreased libido and erectile dysfunction. Laboratory studies reveal low testosterone with low-normal LH and FSH. MRI demonstrates a pituitary macroadenoma. Which type of hypogonadism is present?",
    "options": [
      "Primary hypogonadism",
      "Secondary hypogonadism",
      "Androgen resistance",
      "Hypergonadotropic hypogonadism"
    ],
    "answer": 1,
    "explanation": "Pituitary disease causes inadequate LH/FSH stimulation of the testes, resulting in low testosterone with low or inappropriately normal gonadotropins."
  },
  {
    "id": 50,
    "question": "A 36-year-old woman presents with virilization, deepening voice, increased muscle mass, and rapidly progressive hirsutism. Her DHEA-S level is markedly elevated. Which source is most likely responsible for the androgen excess?",
    "options": [
      "Adrenal cortex",
      "Thyroid follicular cells",
      "Posterior pituitary",
      "Pancreatic β cells"
    ],
    "answer": 0,
    "explanation": "DHEA-S is produced predominantly by the adrenal cortex. Markedly elevated DHEA-S with rapid virilization suggests an adrenal androgen-secreting tumor."
  },
  {
    "id": 51,
    "question": "A 52-year-old man develops severe fasting hypoglycemia with sweating, confusion, and blurred vision. During symptoms, laboratory studies demonstrate high insulin and high C-peptide, while the sulfonylurea screen is negative. Which diagnosis is most likely?",
    "options": [
      "Exogenous insulin administration",
      "Insulinoma",
      "Type 1 diabetes mellitus",
      "Glucagonoma"
    ],
    "answer": 1,
    "explanation": "Endogenous insulin secretion produces high insulin + high C-peptide. Exogenous insulin causes high insulin but suppressed C-peptide. A negative sulfonylurea screen supports insulinoma."
  },
  {
    "id": 52,
    "question": "A patient develops recurrent peptic ulcers despite maximal acid suppression. He also has chronic diarrhea and a pancreatic mass. Fasting serum gastrin is extremely elevated and gastric acid secretion is increased. Which tumor is most likely?",
    "options": [
      "Insulinoma",
      "Gastrinoma",
      "Glucagonoma",
      "Somatostatinoma"
    ],
    "answer": 1,
    "explanation": "Gastrinoma causes Zollinger-Ellison syndrome, characterized by excessive gastrin, gastric acid hypersecretion, recurrent peptic ulcers, and diarrhea."
  },
  {
    "id": 53,
    "question": "A 49-year-old woman develops diabetes, weight loss, anemia, and a characteristic painful erythematous rash that migrates across the buttocks and lower extremities. Imaging reveals a pancreatic neuroendocrine tumor. Which hormone is most likely elevated?",
    "options": [
      "Glucagon",
      "Insulin",
      "Gastrin",
      "Somatostatin"
    ],
    "answer": 0,
    "explanation": "Glucagonoma causes diabetes, weight loss, anemia, and necrolytic migratory erythema due to excess glucagon."
  },
  {
    "id": 54,
    "question": "A 43-year-old man presents with severe watery diarrhea, muscle weakness, hypokalemia, and achlorhydria. Imaging reveals a pancreatic neuroendocrine tumor. Which hormone is most likely responsible for these findings?",
    "options": [
      "VIP",
      "Gastrin",
      "Insulin",
      "PTH"
    ],
    "answer": 0,
    "explanation": "VIPoma causes WDHA syndrome: watery diarrhea, hypokalemia, and achlorhydria. VIP increases intestinal secretion of water and electrolytes."
  },
  {
    "id": 55,
    "question": "A 57-year-old woman with osteoporosis is started on alendronate. The physician explains that the drug reduces fracture risk by acting directly on bone-resorbing cells. Which cellular process is inhibited?",
    "options": [
      "Osteoblast differentiation",
      "Osteoclast-mediated bone resorption",
      "Chondrocyte proliferation",
      "Calcium absorption by intestinal epithelial cells"
    ],
    "answer": 1,
    "explanation": "Bisphosphonates bind bone mineral and are taken up by osteoclasts, inhibiting their function and promoting apoptosis, thereby reducing bone resorption."
  },
  {
    "id": 56,
    "question": "A postmenopausal woman with severe osteoporosis receives denosumab. The physician explains that this medication prevents formation and activation of osteoclasts by neutralizing a signaling molecule required for osteoclast differentiation. Which molecule is targeted?",
    "options": [
      "RANKL",
      "PTH",
      "Calcitonin",
      "Osteocalcin"
    ],
    "answer": 0,
    "explanation": "Denosumab is a monoclonal antibody against RANKL, preventing RANK activation and decreasing osteoclast formation."
  },
  {
    "id": 57,
    "question": "A patient with severe symptomatic hypercalcemia is treated with calcitonin for rapid but temporary reduction in serum calcium. Which mechanism contributes to its effect?",
    "options": [
      "Stimulation of osteoclast activity",
      "Inhibition of osteoclast activity and increased renal calcium excretion",
      "Increased PTH secretion",
      "Increased intestinal calcium absorption"
    ],
    "answer": 1,
    "explanation": "Calcitonin rapidly decreases serum calcium by inhibiting osteoclasts and increasing renal calcium excretion, although tachyphylaxis develops."
  },
  {
    "id": 58,
    "question": "A patient with hypercalcemia has suppressed PTH and markedly elevated PTH-related peptide. Imaging reveals a large squamous cell carcinoma of the lung. Which mechanism best explains the hypercalcemia?",
    "options": [
      "Increased calcitriol production",
      "PTHrP-mediated activation of PTH receptors",
      "Increased calcitonin secretion",
      "Increased renal phosphate retention only"
    ],
    "answer": 1,
    "explanation": "Humoral hypercalcemia of malignancy is commonly caused by PTHrP, which mimics PTH by increasing bone resorption and renal calcium retention while promoting phosphate wasting."
  },
  {
    "id": 59,
    "question": "A 48-year-old woman has recurrent kidney stones and hypercalcemia. Her mother and sister previously underwent surgery for hyperparathyroidism. Genetic testing reveals a mutation affecting a tumor suppressor protein associated with endocrine tumors. Which additional tumor is most likely?",
    "options": [
      "Pituitary adenoma",
      "Pheochromocytoma",
      "Papillary thyroid carcinoma",
      "Adrenal medullary carcinoma"
    ],
    "answer": 0,
    "explanation": "MEN1 classically involves the 3 Ps: parathyroid, pituitary, and pancreatic endocrine tumors. The gene encodes menin."
  },
  {
    "id": 60,
    "question": "A 45-year-old man with MEN1 develops recurrent peptic ulcers and a pancreatic mass. He also has a pituitary adenoma and primary hyperparathyroidism. Which genetic abnormality is most likely?",
    "options": [
      "Activating RET mutation",
      "Inactivating MEN1 mutation",
      "Activating RAS mutation",
      "Inactivating APC mutation"
    ],
    "answer": 1,
    "explanation": "MEN1 is caused by mutation of the MEN1 tumor suppressor gene, encoding menin. The major manifestations involve parathyroid, pituitary, and pancreatic endocrine tissues."
  },
  {
    "id": 61,
    "question": "A 48-year-old man develops medullary thyroid carcinoma, pheochromocytoma, mucosal neuromas, and a marfanoid body habitus. Which syndrome is most likely?",
    "options": [
      "MEN1",
      "MEN2A",
      "MEN2B",
      "von Hippel-Lindau syndrome"
    ],
    "answer": 2,
    "explanation": "MEN2B features medullary thyroid carcinoma, pheochromocytoma, mucosal neuromas, and marfanoid habitus. It is associated with RET mutations."
  },
  {
    "id": 62,
    "question": "A 55-year-old woman with a pituitary macroadenoma develops headaches and difficulty seeing objects to both sides. Visual field testing shows loss of the temporal visual fields in both eyes. Which anatomical structure is being compressed?",
    "options": [
      "Optic nerve",
      "Optic chiasm",
      "Optic tract",
      "Lateral geniculate nucleus"
    ],
    "answer": 1,
    "explanation": "The optic chiasm lies directly above the pituitary gland. Compression damages crossing nasal retinal fibers, causing bitemporal hemianopia."
  },
  {
    "id": 63,
    "question": "A 51-year-old woman with a known pituitary macroadenoma suddenly develops severe headache, vomiting, ophthalmoplegia, visual loss, and hypotension. MRI demonstrates acute hemorrhage within the pituitary tumor. Which diagnosis is most likely?",
    "options": [
      "Sheehan syndrome",
      "Pituitary apoplexy",
      "Diabetes insipidus",
      "Craniopharyngioma"
    ],
    "answer": 1,
    "explanation": "Pituitary apoplexy is acute hemorrhage or infarction of a pituitary adenoma. It can cause sudden headache, visual impairment, ophthalmoplegia, and acute adrenal insufficiency."
  },
  {
    "id": 64,
    "question": "A 9-year-old child presents with headache, visual impairment, growth abnormalities, and polyuria. Imaging reveals a suprasellar mass containing calcifications. The tumor is thought to arise from remnants of an embryologic structure involved in anterior pituitary development. Which structure is the origin?",
    "options": [
      "Rathke pouch",
      "Neural crest",
      "Thyroid diverticulum",
      "Adrenal cortical bud"
    ],
    "answer": 0,
    "explanation": "Craniopharyngioma arises from remnants of Rathke pouch. It often occurs in the suprasellar region and may cause visual defects and pituitary dysfunction."
  },
  {
    "id": 65,
    "question": "A newborn is diagnosed with congenital hypothyroidism after screening reveals very low T4 and elevated TSH. The parents are informed that untreated disease can cause irreversible neurological impairment. Which developmental process is particularly dependent on thyroid hormone during infancy?",
    "options": [
      "CNS maturation and myelination",
      "Adrenal medulla formation",
      "Renal glomerular filtration",
      "Pancreatic duct formation"
    ],
    "answer": 0,
    "explanation": "Thyroid hormone is essential for brain development, neuronal maturation, and myelination. Untreated congenital hypothyroidism can cause permanent intellectual disability."
  },
  {
    "id": 66,
    "question": "A 4-year-old child has severe growth retardation and developmental delay due to untreated congenital hypothyroidism. Which thyroid hormone is biologically more potent at the nuclear receptor level and is largely produced through peripheral conversion of another thyroid hormone?",
    "options": [
      "T4",
      "T3",
      "Reverse T3",
      "Thyroglobulin"
    ],
    "answer": 1,
    "explanation": "T3 has greater receptor affinity and biological activity than T4. Much circulating T3 is produced by peripheral deiodination of T4."
  },
  {
    "id": 67,
    "question": "A 36-year-old woman with hypothyroidism receives levothyroxine. She takes it together with calcium carbonate and notices that her thyroid function tests remain abnormal despite good adherence. Which mechanism best explains this treatment failure?",
    "options": [
      "Calcium increases hepatic conversion of T4 to T3",
      "Calcium decreases gastrointestinal absorption of levothyroxine",
      "Calcium increases TSH secretion directly",
      "Calcium destroys thyroid hormone receptors"
    ],
    "answer": 1,
    "explanation": "Calcium, iron, and some antacids can reduce levothyroxine absorption. Levothyroxine is generally taken separately from these substances."
  },
  {
    "id": 68,
    "question": "A 34-year-old woman with Graves disease is treated with radioactive iodine. Several months later she develops hypothyroidism. Which property of thyroid tissue allowed radioactive iodine to selectively damage the gland?",
    "options": [
      "High expression of sodium-iodide symporters",
      "High expression of insulin receptors",
      "High expression of V2 receptors",
      "High expression of mineralocorticoid receptors"
    ],
    "answer": 0,
    "explanation": "Thyroid follicular cells actively concentrate iodine using the Na⁺/I⁻ symporter, allowing radioactive iodine to selectively deliver radiation to thyroid tissue."
  },
  {
    "id": 69,
    "question": "A 45-year-old man has persistent hypertension, hypokalemia, and metabolic alkalosis. His renin and aldosterone are both low. Further testing reveals an adrenal lesion producing excess cortisol. Which mechanism explains the mineralocorticoid-like effects of very high cortisol concentrations?",
    "options": [
      "Saturation of renal 11β-HSD2 allowing cortisol to activate mineralocorticoid receptors",
      "Increased aldosterone synthesis",
      "Activation of V2 receptors",
      "Increased PTH secretion"
    ],
    "answer": 0,
    "explanation": "At very high concentrations, cortisol can overwhelm 11β-HSD2, allowing it to activate mineralocorticoid receptors and cause hypertension, hypokalemia, and alkalosis."
  },
  {
    "id": 70,
    "question": "A 30-year-old woman with primary adrenal insufficiency develops an acute adrenal crisis after a severe gastrointestinal infection. She has profound hypotension, vomiting, abdominal pain, hypoglycemia, and hyperkalemia. Which immediate treatment is most appropriate?",
    "options": [
      "IV hydrocortisone and isotonic saline",
      "Oral levothyroxine alone",
      "IV propranolol",
      "Radioactive iodine"
    ],
    "answer": 0,
    "explanation": "Adrenal crisis requires immediate IV glucocorticoids and aggressive fluid resuscitation. Dextrose is given when significant hypoglycemia is present."
  },
  {
    "id": 71,
    "question": "A 54-year-old woman presents with hyperthyroidism, fever, agitation, vomiting, and severe tachycardia. She is treated with a thionamide, iodine, glucocorticoid, and β-blocker. Iodine is administered after the thionamide rather than before it. Why?",
    "options": [
      "Iodine increases TSH secretion",
      "Giving iodine first could provide substrate for new thyroid hormone synthesis",
      "Iodine directly blocks β receptors",
      "Thionamides prevent iodine absorption from the intestine"
    ],
    "answer": 1,
    "explanation": "In thyroid storm, a thionamide such as PTU is given before iodine to inhibit hormone synthesis. Iodine is then given to inhibit hormone release."
  },
  {
    "id": 72,
    "question": "A 40-year-old man with acromegaly develops glucose intolerance and hypertension. GH levels are persistently elevated. Which metabolic effect of GH contributes to his hyperglycemia?",
    "options": [
      "Increased peripheral glucose uptake",
      "Increased insulin resistance and lipolysis",
      "Increased hepatic glycogen synthesis only",
      "Decreased free fatty acid production"
    ],
    "answer": 1,
    "explanation": "GH has anti-insulin effects, reducing glucose uptake and increasing lipolysis. Chronic GH excess can therefore cause insulin resistance and diabetes."
  },
  {
    "id": 73,
    "question": "A patient with acromegaly is treated with octreotide after surgery fails to normalize GH levels. Which mechanism explains the action of this drug?",
    "options": [
      "Dopamine receptor blockade",
      "Somatostatin receptor activation",
      "TSH receptor stimulation",
      "GLP-1 receptor blockade"
    ],
    "answer": 1,
    "explanation": "Octreotide is a somatostatin analog that suppresses GH secretion. It can also reduce secretion of other GI hormones."
  },
  {
    "id": 74,
    "question": "A 29-year-old woman with prolactinoma is treated with cabergoline. Her menstrual cycles return and serum prolactin normalizes. Which cellular signaling mechanism is responsible for the drug's effect on lactotrophs?",
    "options": [
      "D2 receptor activation causing inhibition of prolactin secretion",
      "TSH receptor activation causing thyroid hormone release",
      "V2 receptor activation causing aquaporin insertion",
      "β1 receptor activation causing cAMP production"
    ],
    "answer": 0,
    "explanation": "Cabergoline is a dopamine D2 receptor agonist and strongly suppresses prolactin secretion from pituitary lactotrophs."
  },
  {
    "id": 75,
    "question": "A 62-year-old man with type 2 diabetes is taking insulin and develops severe hypoglycemia while unconscious at home. Emergency personnel administer glucagon because IV access is unavailable. Which hepatic process is stimulated by glucagon to rapidly increase blood glucose?",
    "options": [
      "Glycogenesis",
      "Glycogenolysis and gluconeogenesis",
      "Glycolysis only",
      "Fatty acid synthesis"
    ],
    "answer": 1,
    "explanation": "Glucagon acts primarily on the liver, stimulating glycogenolysis and gluconeogenesis to raise blood glucose."
  },
  {
    "id": 76,
    "question": "A patient with type 1 diabetes presents with diabetic ketoacidosis and a potassium concentration of 2.8 mEq/L. The medical team plans to administer insulin and IV fluids. What should be done regarding potassium before insulin therapy?",
    "options": [
      "Start insulin immediately because potassium will rise",
      "Replace potassium before initiating insulin",
      "Give sodium bicarbonate only",
      "Restrict potassium intake"
    ],
    "answer": 1,
    "explanation": "Insulin shifts K⁺ into cells and can cause dangerous hypokalemia. If serum K⁺ is <3.3 mEq/L, potassium should be replaced before insulin."
  },
  {
    "id": 77,
    "question": "A 68-year-old woman with type 2 diabetes and chronic kidney disease is taking metformin. Her renal function deteriorates substantially. The physician discontinues the drug because of concern for accumulation and a rare but serious metabolic complication. Which complication is being avoided?",
    "options": [
      "Respiratory alkalosis",
      "Lactic acidosis",
      "Hypercalcemia",
      "Metabolic alkalosis"
    ],
    "answer": 1,
    "explanation": "Metformin-associated lactic acidosis is rare but serious, with risk increased in significant renal impairment and other hypoxic states."
  },
  {
    "id": 78,
    "question": "A 58-year-old man with type 2 diabetes is started on a thiazolidinedione. Several months later he develops ankle edema and worsening heart failure symptoms. Which mechanism of this drug class explains its glucose-lowering effect?",
    "options": [
      "Activation of PPAR-γ",
      "Inhibition of SGLT2",
      "Closure of β-cell KATP channels",
      "Inhibition of intestinal α-glucosidase"
    ],
    "answer": 0,
    "explanation": "Thiazolidinediones activate PPAR-γ, increasing insulin sensitivity. They can cause weight gain, edema, and worsen heart failure."
  },
  {
    "id": 79,
    "question": "A 49-year-old woman with type 2 diabetes is prescribed acarbose. She develops abdominal bloating and diarrhea. Her physician explains that the drug acts within the intestinal brush border. Which process is inhibited?",
    "options": [
      "Breakdown of complex carbohydrates into absorbable monosaccharides",
      "Renal glucose reabsorption",
      "Insulin secretion from β cells",
      "Hepatic gluconeogenesis"
    ],
    "answer": 0,
    "explanation": "Acarbose inhibits α-glucosidase enzymes at the intestinal brush border, delaying carbohydrate digestion and glucose absorption."
  },
  {
    "id": 80,
    "question": "A 42-year-old woman presents with recurrent episodes of sweating, tremor, hunger, and confusion. During an episode her glucose is 38 mg/dL, insulin is elevated, and C-peptide is suppressed. Which diagnosis best explains the findings?",
    "options": [
      "Insulinoma",
      "Exogenous insulin administration",
      "Sulfonylurea use",
      "Glucagonoma"
    ],
    "answer": 1,
    "explanation": "Exogenous insulin produces high insulin with low C-peptide because endogenous β-cell insulin secretion is suppressed. Insulinoma causes both insulin and C-peptide elevation."
  },
  {
    "id": 81,
    "question": "A 35-year-old woman has recurrent episodes of hypoglycemia. During symptoms, insulin and C-peptide are both elevated, but a sulfonylurea screen is also positive. Which diagnosis is most likely?",
    "options": [
      "Exogenous insulin use",
      "Insulinoma",
      "Sulfonylurea-induced hypoglycemia",
      "Adrenal insufficiency"
    ],
    "answer": 2,
    "explanation": "Sulfonylureas stimulate endogenous insulin release, producing high insulin and C-peptide, while the positive drug screen distinguishes it from insulinoma."
  },
  {
    "id": 82,
    "question": "A 43-year-old man with pancreatic VIPoma develops severe watery diarrhea and profound hypokalemia. Despite repeated fluid administration, his potassium remains low. Which intestinal effect of VIP contributes most directly to the diarrhea?",
    "options": [
      "Increased intestinal chloride and water secretion",
      "Decreased intestinal secretion",
      "Increased gastric acid secretion",
      "Increased calcium absorption"
    ],
    "answer": 0,
    "explanation": "VIP increases intestinal Cl⁻ and water secretion, producing massive watery diarrhea and potassium loss. It also inhibits gastric acid secretion."
  },
  {
    "id": 83,
    "question": "A 55-year-old man with chronic alcoholism presents with weakness and muscle cramps. Laboratory studies reveal hypomagnesemia, hypocalcemia, and low PTH secretion. Which relationship best explains the hypocalcemia?",
    "options": [
      "Magnesium deficiency can impair PTH secretion and action",
      "Magnesium deficiency always increases PTH",
      "Magnesium directly destroys calcium receptors",
      "Magnesium increases calcitonin secretion"
    ],
    "answer": 0,
    "explanation": "Severe hypomagnesemia can cause functional hypoparathyroidism and PTH resistance, leading to refractory hypocalcemia."
  },
  {
    "id": 84,
    "question": "A 34-year-old woman presents with amenorrhea, galactorrhea, and headaches. MRI reveals a pituitary macroadenoma. Her prolactin is markedly elevated. Which reproductive hormone is suppressed by the hyperprolactinemia, contributing to her amenorrhea?",
    "options": [
      "GnRH",
      "ACTH",
      "TSH",
      "ADH"
    ],
    "answer": 0,
    "explanation": "High prolactin suppresses hypothalamic GnRH, resulting in decreased LH/FSH secretion and hypogonadism, causing amenorrhea and infertility."
  },
  {
    "id": 85,
    "question": "A 46-year-old woman has a pituitary macroadenoma and symptoms of mass effect. Laboratory testing shows decreased cortisol, free T4, LH, and FSH. Which hormone may paradoxically be elevated if hypothalamic dopamine delivery is impaired?",
    "options": [
      "Prolactin",
      "ACTH",
      "Growth hormone",
      "Aldosterone"
    ],
    "answer": 0,
    "explanation": "Dopamine normally inhibits prolactin. A hypothalamic lesion or stalk compression decreases dopamine delivery, producing stalk-effect hyperprolactinemia."
  },
  {
    "id": 86,
    "question": "A 28-year-old woman presents with polyuria and polydipsia. Water deprivation fails to concentrate the urine, and desmopressin produces almost no response. She has been taking lithium for several years. Which renal mechanism is most likely impaired?",
    "options": [
      "V2 receptor-mediated aquaporin-2 insertion",
      "Aldosterone-mediated ENaC insertion",
      "PTH-mediated calcium reabsorption",
      "SGLT2-mediated glucose reabsorption"
    ],
    "answer": 0,
    "explanation": "Lithium commonly causes nephrogenic diabetes insipidus by impairing ADH signaling and aquaporin-2 expression. There is little response to desmopressin."
  },
  {
    "id": 87,
    "question": "A 32-year-old man presents with excessive thirst and polyuria. Serum sodium is elevated, and urine osmolality is very low. Water deprivation concentrates his urine substantially. Which diagnosis is most likely?",
    "options": [
      "Central diabetes insipidus",
      "Nephrogenic diabetes insipidus",
      "SIADH",
      "Primary hyperaldosteronism"
    ],
    "answer": 0,
    "explanation": "In partial/central DI, endogenous ADH is deficient. If the kidney remains responsive, water deprivation or desmopressin increases urine concentration."
  },
  {
    "id": 88,
    "question": "A 42-year-old woman with hypercalcemia is found to have a parathyroid adenoma. Her serum phosphate is low because PTH decreases phosphate reabsorption in the proximal tubule. Which transporter is directly inhibited?",
    "options": [
      "Na⁺-phosphate cotransporter",
      "SGLT2",
      "NKCC2",
      "ENaC"
    ],
    "answer": 0,
    "explanation": "PTH decreases proximal tubular Na⁺-phosphate cotransporter expression, producing phosphaturia and hypophosphatemia."
  },
  {
    "id": 89,
    "question": "A patient with vitamin D deficiency has low calcium and low phosphate with elevated PTH. The physician explains that PTH attempts to restore calcium levels but cannot fully compensate because intestinal calcium absorption is reduced. Which form of vitamin D normally increases intestinal calcium absorption?",
    "options": [
      "25-hydroxyvitamin D",
      "1,25-dihydroxyvitamin D",
      "7-dehydrocholesterol",
      "Vitamin K"
    ],
    "answer": 1,
    "explanation": "Calcitriol (1,25-dihydroxyvitamin D) is the active form of vitamin D and increases intestinal calcium and phosphate absorption."
  },
  {
    "id": 90,
    "question": "A 62-year-old woman develops osteoporosis after menopause. Her estrogen concentration is markedly decreased. Which effect of estrogen deficiency contributes most directly to increased bone loss?",
    "options": [
      "Increased osteoclast activity",
      "Increased osteoblast apoptosis only",
      "Decreased RANKL activity",
      "Increased calcitonin secretion"
    ],
    "answer": 0,
    "explanation": "Estrogen normally suppresses osteoclast activity partly through regulation of RANKL/osteoprotegerin signaling. Estrogen deficiency therefore accelerates bone resorption."
  },
  {
    "id": 91,
    "question": "A 38-year-old man develops Cushing syndrome from chronic glucocorticoid therapy. He has proximal muscle weakness, thin skin, easy bruising, and osteoporosis. Which mechanism contributes to his muscle weakness?",
    "options": [
      "Increased protein synthesis in skeletal muscle",
      "Increased protein catabolism",
      "Increased insulin sensitivity",
      "Increased collagen synthesis"
    ],
    "answer": 1,
    "explanation": "Glucocorticoids promote protein catabolism, particularly in skeletal muscle, causing proximal muscle weakness and wasting."
  },
  {
    "id": 92,
    "question": "A patient with Cushing syndrome has hypertension, hyperglycemia, muscle wasting, osteoporosis, and easy bruising. Which mechanism best explains the hyperglycemia?",
    "options": [
      "Increased hepatic gluconeogenesis and insulin resistance",
      "Increased peripheral glucose uptake",
      "Increased insulin secretion only",
      "Decreased hepatic glucose production"
    ],
    "answer": 0,
    "explanation": "Cortisol increases hepatic gluconeogenesis and decreases peripheral insulin sensitivity, contributing to hyperglycemia and steroid-induced diabetes."
  },
  {
    "id": 93,
    "question": "A 55-year-old woman presents with weight gain, facial rounding, hypertension, diabetes, proximal muscle weakness, and osteoporosis. Her ACTH is high and cortisol is elevated. A pituitary MRI reveals a microadenoma. Which diagnosis is most likely?",
    "options": [
      "Adrenal Cushing syndrome",
      "Cushing disease",
      "Addison disease",
      "Primary hyperaldosteronism"
    ],
    "answer": 1,
    "explanation": "Cushing disease specifically refers to ACTH-dependent Cushing syndrome caused by a pituitary corticotroph adenoma."
  },
  {
    "id": 94,
    "question": "A 48-year-old man develops Cushing syndrome with very high ACTH levels and severe hypokalemia. Imaging of the pituitary is normal, but a lung mass is identified. Which tumor is classically associated with ectopic ACTH production?",
    "options": [
      "Small-cell carcinoma",
      "Papillary thyroid carcinoma",
      "Follicular thyroid carcinoma",
      "Prolactinoma"
    ],
    "answer": 0,
    "explanation": "Small-cell lung carcinoma is a classic source of ectopic ACTH. Ectopic ACTH can produce severe hypercortisolism, hypokalemia, and metabolic alkalosis."
  },
  {
    "id": 95,
    "question": "A 50-year-old man develops hypertension, sweating, palpitations, and weight loss. An adrenal pheochromocytoma is diagnosed. The tumor originates from cells that are embryologically derived from neural crest tissue. Which cells are involved?",
    "options": [
      "Chromaffin cells",
      "Zona glomerulosa cells",
      "Follicular cells",
      "Parathyroid chief cells"
    ],
    "answer": 0,
    "explanation": "Pheochromocytomas arise from chromaffin cells of the adrenal medulla, which are derived from neural crest cells and produce catecholamines."
  },
  {
    "id": 96,
    "question": "A 40-year-old man with pheochromocytoma has markedly elevated catecholamine metabolites. The physician explains that catecholamines are synthesized from an amino acid precursor through several enzymatic steps. Which amino acid begins this pathway?",
    "options": [
      "Tyrosine",
      "Tryptophan",
      "Histidine",
      "Phenylalanine"
    ],
    "answer": 0,
    "explanation": "Catecholamine synthesis begins with tyrosine → DOPA → dopamine → norepinephrine → epinephrine. Tyrosine hydroxylase is the rate-limiting enzyme."
  },
  {
    "id": 97,
    "question": "A newborn has severe salt wasting, hyperkalemia, hypotension, and increased 17-hydroxyprogesterone. Genetic testing confirms 21-hydroxylase deficiency. Which hormone is normally produced in the zona glomerulosa and is deficient in the salt-wasting form of this disorder?",
    "options": [
      "Cortisol",
      "Aldosterone",
      "Epinephrine",
      "DHEA"
    ],
    "answer": 1,
    "explanation": "The zona glomerulosa produces aldosterone. Severe 21-hydroxylase deficiency decreases aldosterone synthesis, producing salt wasting, hypotension, and hyperkalemia."
  },
  {
    "id": 98,
    "question": "A 43-year-old woman with a pituitary macroadenoma develops visual field defects and multiple endocrine abnormalities. The physician explains that the pituitary gland develops embryologically from two different tissues. Which structure gives rise to the posterior pituitary?",
    "options": [
      "Rathke pouch",
      "Neuroectoderm of the diencephalon",
      "Endoderm of the foregut",
      "Neural crest"
    ],
    "answer": 1,
    "explanation": "The posterior pituitary (neurohypophysis) develops from neuroectoderm of the diencephalon, while the anterior pituitary develops from Rathke pouch."
  },
  {
    "id": 99,
    "question": "A 41-year-old woman develops severe hypercalcemia, dehydration, confusion, and muscle weakness. Her PTH is suppressed, and testing reveals elevated 1,25-dihydroxyvitamin D due to a lymphoma. Which mechanism contributes to her hypercalcemia?",
    "options": [
      "Increased intestinal calcium absorption",
      "Decreased vitamin D activity",
      "Increased renal calcium excretion",
      "Increased phosphate excretion only"
    ],
    "answer": 0,
    "explanation": "Some lymphomas express 1α-hydroxylase, increasing calcitriol production. Elevated calcitriol increases intestinal calcium absorption and causes hypercalcemia with suppressed PTH."
  },
  {
    "id": 100,
    "question": "🔥 FINAL BOSS A 38-year-old woman presents with progressive fatigue, weight loss, nausea, abdominal pain, postural dizziness, diffuse hyperpigmentation, and recurrent episodes of hypoglycemia. Laboratory studies show sodium 126 mEq/L, potassium 6.2 mEq/L, low morning cortisol, markedly elevated ACTH, and elevated plasma renin with low aldosterone. An ACTH stimulation test fails to produce an adequate increase in cortisol. Which combination of abnormalities most accurately explains the entire clinical picture?",
    "options": [
      "Low ACTH, low cortisol, preserved aldosterone, and suppressed renin",
      "High ACTH, low cortisol, low aldosterone, and elevated renin",
      "High ACTH, high cortisol, high aldosterone, and suppressed renin",
      "Low ACTH, high cortisol, low aldosterone, and elevated renin"
    ],
    "answer": 1,
    "explanation": "This is primary adrenal insufficiency (Addison disease). Destruction of the adrenal cortex causes ↓ cortisol and ↓ aldosterone. Low cortisol removes negative feedback → ↑ ACTH, causing hyperpigmentation. Low aldosterone causes sodium loss, hyperkalemia, hypotension, and compensatory ↑ renin. The failed ACTH stimulation test confirms adrenal cortical failure. 🔥"
  }
];

