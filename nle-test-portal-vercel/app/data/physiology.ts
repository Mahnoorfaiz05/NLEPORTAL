import type { Question } from "./types";
export const physiologyQuestions:Question[]=[
  {
    "id": 1,
    "question": "A 24-year-old healthy man suddenly stands from a supine position after resting for several minutes. His venous return and stroke volume transiently decrease, causing a brief fall in arterial pressure. Within seconds, the cardiovascular system compensates through the baroreceptor reflex. Which combination of changes is most likely to occur?",
    "options": [
      "Increased vagal activity with decreased heart rate",
      "Decreased sympathetic activity with arteriolar dilation",
      "Increased sympathetic activity with tachycardia and vasoconstriction",
      "Decreased sympathetic activity with increased venous compliance"
    ],
    "answer": 2,
    "explanation": "Standing causes pooling of blood in the lower extremities, reducing venous return and arterial pressure. Decreased baroreceptor firing increases sympathetic and decreases parasympathetic activity, producing tachycardia, increased contractility, venoconstriction, and arteriolar vasoconstriction."
  },
  {
    "id": 2,
    "question": "A 68-year-old man with long-standing hypertension develops progressive left ventricular hypertrophy. Echocardiography shows increased ventricular wall thickness with initially preserved ejection fraction. During exercise, however, he develops pulmonary congestion because the stiff ventricle cannot accommodate incoming blood normally. Which physiological property of the ventricle is primarily reduced?",
    "options": [
      "Contractility",
      "Compliance",
      "Afterload",
      "Ejection fraction"
    ],
    "answer": 1,
    "explanation": "Chronic pressure overload causes concentric hypertrophy, producing a stiff, less compliant ventricle. Reduced compliance impairs diastolic filling and can cause pulmonary venous congestion despite preserved systolic function."
  },
  {
    "id": 3,
    "question": "A 45-year-old man develops severe dehydration after several days of diarrhea. His arterial pressure falls, and renal perfusion decreases. The kidney responds by activating mechanisms that increase sodium and water retention. Which renal hormone is released in response to decreased renal perfusion pressure and contributes to this response?",
    "options": [
      "Atrial natriuretic peptide",
      "Renin",
      "Calcitonin",
      "Erythropoietin"
    ],
    "answer": 1,
    "explanation": "Reduced renal perfusion stimulates juxtaglomerular cells to release renin. Renin initiates the RAAS, increasing angiotensin II and aldosterone, which promote sodium and water retention and help restore blood pressure."
  },
  {
    "id": 4,
    "question": "A 32-year-old woman experiences severe vomiting for several days. Laboratory studies demonstrate metabolic alkalosis, hypochloremia, and volume depletion. Although the primary disturbance resulted from gastric acid loss, persistent activation of the renin-angiotensin-aldosterone system contributes to maintenance of the alkalosis. Which renal effect is most important?",
    "options": [
      "Increased bicarbonate excretion",
      "Decreased sodium reabsorption",
      "Increased bicarbonate reabsorption",
      "Complete inhibition of hydrogen secretion"
    ],
    "answer": 2,
    "explanation": "Volume depletion activates RAAS. Angiotensin II increases proximal sodium and bicarbonate reabsorption, while aldosterone increases H⁺ secretion, helping maintain metabolic alkalosis."
  },
  {
    "id": 5,
    "question": "A 25-year-old man begins intense exercise on a warm day. His cardiac output increases substantially, while blood flow to active skeletal muscles rises despite sympathetic activation. Local metabolites produced by contracting muscles overcome sympathetic vasoconstriction. Which substance contributes to this local metabolic vasodilation?",
    "options": [
      "Angiotensin II",
      "Adenosine",
      "Endothelin-1",
      "Vasopressin"
    ],
    "answer": 1,
    "explanation": "Active tissues produce vasodilators such as adenosine, K⁺, H⁺, CO₂, lactate, and reduced O₂, which increase local blood flow according to metabolic demand."
  },
  {
    "id": 6,
    "question": "A 56-year-old man with severe aortic stenosis develops exertional syncope and angina. Echocardiography shows marked left ventricular hypertrophy. The stenotic valve creates a major pressure gradient between the left ventricle and aorta during systole. Which ventricular change is expected?",
    "options": [
      "Decreased afterload",
      "Increased afterload",
      "Decreased wall stress due to dilation",
      "Increased ventricular compliance"
    ],
    "answer": 1,
    "explanation": "Aortic stenosis increases the pressure that the LV must generate to eject blood, thereby increasing afterload and causing compensatory concentric hypertrophy."
  },
  {
    "id": 7,
    "question": "A patient with severe heart failure develops pulmonary edema and elevated left atrial pressure. Increased pulmonary capillary hydrostatic pressure causes fluid to move from the vascular compartment into the pulmonary interstitium and eventually the alveoli. Which Starling force is primarily responsible?",
    "options": [
      "Increased plasma oncotic pressure",
      "Increased capillary hydrostatic pressure",
      "Decreased capillary hydrostatic pressure",
      "Increased interstitial oncotic pressure only"
    ],
    "answer": 1,
    "explanation": "Left-sided heart failure raises pulmonary venous and capillary pressure. Increased capillary hydrostatic pressure drives fluid into the interstitium and alveoli, producing cardiogenic pulmonary edema."
  },
  {
    "id": 8,
    "question": "A 29-year-old patient receives a drug that blocks β₁-adrenergic receptors. Shortly afterward, heart rate and myocardial contractility decrease. Which intracellular mechanism is normally responsible for the positive chronotropic and inotropic effects of β₁ stimulation?",
    "options": [
      "Decreased cAMP and decreased calcium entry",
      "Increased cAMP and increased calcium availability",
      "Increased cGMP and decreased calcium availability",
      "Decreased intracellular calcium release"
    ],
    "answer": 1,
    "explanation": "β₁ receptors are Gs-coupled. Activation increases adenylyl cyclase → cAMP → PKA, increasing Ca²⁺ entry and release, thereby increasing heart rate and contractility."
  },
  {
    "id": 9,
    "question": "A healthy adult suddenly experiences sympathetic activation during an episode of fear. His heart rate increases, ventricular contractility increases, and peripheral vasoconstriction develops. Which receptor mediates most of the increased heart rate at the sinoatrial node?",
    "options": [
      "α₁",
      "α₂",
      "β₁",
      "β₂"
    ],
    "answer": 2,
    "explanation": "Sympathetic stimulation of β₁ receptors in the SA node increases pacemaker activity and heart rate. β₁ receptors also increase myocardial contractility."
  },
  {
    "id": 10,
    "question": "A 40-year-old man has severe bradycardia caused by excessive vagal stimulation. Parasympathetic fibers release acetylcholine at the sinoatrial node. Which receptor and intracellular effect are responsible for slowing the pacemaker?",
    "options": [
      "β₁ receptor with increased cAMP",
      "M₂ receptor with decreased cAMP and increased K⁺ conductance",
      "α₁ receptor with increased IP₃",
      "β₂ receptor with increased cAMP"
    ],
    "answer": 1,
    "explanation": "Acetylcholine activates M₂ receptors, which decrease cAMP and increase K⁺ conductance, hyperpolarizing pacemaker cells and slowing heart rate."
  },
  {
    "id": 11,
    "question": "A patient with acute blood loss develops tachycardia and peripheral vasoconstriction. His arterial pressure is initially maintained despite reduced circulating volume. Which variable is most directly sensed by arterial baroreceptors?",
    "options": [
      "Plasma sodium concentration",
      "Arterial wall stretch",
      "Blood oxygen content",
      "Plasma osmolality"
    ],
    "answer": 1,
    "explanation": "Baroreceptors in the carotid sinus and aortic arch detect changes in arterial wall stretch, which reflects arterial pressure."
  },
  {
    "id": 12,
    "question": "A patient develops severe hypertension because of excessive sympathetic activation. Increased systemic vascular resistance contributes substantially to the elevated arterial pressure. Which vascular change produces the greatest increase in resistance?",
    "options": [
      "Mild venodilation",
      "Arteriolar constriction",
      "Increased capillary number",
      "Increased venous compliance"
    ],
    "answer": 1,
    "explanation": "Arterioles are the major resistance vessels. According to Poiseuille's law, resistance is highly sensitive to vessel radius, so small decreases in radius markedly increase resistance."
  },
  {
    "id": 13,
    "question": "A patient with chronic heart failure has reduced cardiac output and increased sympathetic activity. Despite increased sympathetic stimulation, renal perfusion remains reduced and sodium retention develops. Which mechanism most directly increases sodium reabsorption?",
    "options": [
      "Increased ANP secretion",
      "Increased aldosterone secretion",
      "Decreased renin secretion",
      "Increased urinary sodium delivery"
    ],
    "answer": 1,
    "explanation": "Reduced renal perfusion stimulates RAAS. Aldosterone increases sodium reabsorption in the distal nephron, while water follows sodium, contributing to volume retention."
  },
  {
    "id": 14,
    "question": "A healthy volunteer undergoes an echocardiographic study during increasing exercise intensity. His heart rate and stroke volume both rise initially, causing a marked increase in cardiac output. Which equation correctly describes cardiac output?",
    "options": [
      "CO = HR × SV",
      "CO = SV ÷ HR",
      "CO = MAP × HR",
      "CO = EDV × HR only"
    ],
    "answer": 0,
    "explanation": "Cardiac output = heart rate × stroke volume. During exercise, both variables generally increase, substantially increasing cardiac output."
  },
  {
    "id": 15,
    "question": "A patient develops severe bradycardia after administration of a drug that suppresses sympathetic activity. His ventricular filling time increases, but cardiac output decreases because heart rate has fallen considerably. Which determinant of stroke volume is directly related to ventricular filling before contraction?",
    "options": [
      "Afterload",
      "Preload",
      "Contractility",
      "Ejection fraction"
    ],
    "answer": 1,
    "explanation": "Preload reflects ventricular fiber stretch at the end of diastole and is closely related to EDV. Increased preload generally increases stroke volume through the Frank-Starling mechanism."
  },
  {
    "id": 16,
    "question": "A patient receives a rapid intravenous fluid infusion. His venous return increases, producing increased end-diastolic volume and greater ventricular contraction. No change in sympathetic activity occurs. Which principle best explains the increased stroke volume?",
    "options": [
      "Bainbridge reflex",
      "Frank-Starling mechanism",
      "Baroreceptor inhibition",
      "Bowditch effect only"
    ],
    "answer": 1,
    "explanation": "Increased venous return increases EDV and myocardial fiber stretch, resulting in stronger contraction and increased stroke volume through the Frank-Starling mechanism."
  },
  {
    "id": 17,
    "question": "A patient with severe hypertension develops increased left ventricular afterload. Despite normal preload, stroke volume decreases because the ventricle must generate greater pressure before ejecting blood. Which change would initially occur in the pressure-volume loop?",
    "options": [
      "Decreased end-systolic volume",
      "Increased end-systolic volume",
      "Increased stroke volume",
      "Decreased ventricular pressure"
    ],
    "answer": 1,
    "explanation": "Increased afterload makes ventricular ejection more difficult, leaving more blood behind after systole, thereby increasing end-systolic volume and reducing stroke volume."
  },
  {
    "id": 18,
    "question": "A patient develops an increase in myocardial contractility after receiving a β₁-adrenergic agonist. The ventricle can eject blood more effectively at the same preload and afterload. Which pressure-volume loop change is expected?",
    "options": [
      "Increased end-systolic volume",
      "Decreased end-systolic volume",
      "Decreased ejection fraction",
      "Increased isovolumetric filling volume only"
    ],
    "answer": 1,
    "explanation": "Increased contractility shifts the end-systolic pressure-volume relationship upward, allowing more blood to be ejected and reducing end-systolic volume."
  },
  {
    "id": 19,
    "question": "A patient with chronic mitral regurgitation develops left ventricular volume overload. During systole, some blood is ejected backward into the left atrium rather than entirely into the aorta. Which measurement may appear misleadingly preserved despite reduced effective forward cardiac output?",
    "options": [
      "Ejection fraction",
      "Oxygen consumption",
      "Systemic vascular resistance",
      "Heart rate"
    ],
    "answer": 0,
    "explanation": "In mitral regurgitation, blood can be ejected into the low-pressure left atrium, so total LV ejection may remain high even though forward stroke volume is reduced."
  },
  {
    "id": 20,
    "question": "A patient develops severe anemia but maintains a normal arterial blood pressure. The heart compensates by increasing cardiac output to maintain oxygen delivery to tissues. Which change contributes most directly to the increased cardiac output?",
    "options": [
      "Decreased heart rate",
      "Increased sympathetic stimulation",
      "Decreased venous return",
      "Increased systemic vascular resistance"
    ],
    "answer": 1,
    "explanation": "Anemia reduces arterial oxygen content. The cardiovascular system compensates through sympathetic activation, tachycardia, increased contractility, and increased cardiac output."
  },
  {
    "id": 21,
    "question": "A healthy man travels rapidly from sea level to a high-altitude environment. Within minutes, arterial oxygen tension decreases, stimulating peripheral chemoreceptors. Which receptors are primarily responsible for detecting this fall in PaO₂?",
    "options": [
      "Carotid and aortic bodies",
      "Carotid sinus baroreceptors",
      "Pulmonary stretch receptors",
      "Central medullary chemoreceptors"
    ],
    "answer": 0,
    "explanation": "Peripheral chemoreceptors in the carotid and aortic bodies respond to decreased PaO₂, especially when PaO₂ falls significantly, as well as to increased H⁺ and CO₂."
  },
  {
    "id": 22,
    "question": "A patient with severe COPD has chronic elevation of PaCO₂. Despite the persistent hypercapnia, his central respiratory drive becomes less responsive to CO₂ over time. Which factor becomes relatively more important in maintaining ventilation?",
    "options": [
      "Hypoxic stimulation of peripheral chemoreceptors",
      "Pulmonary stretch receptor inhibition",
      "Increased vagal activity",
      "Decreased carotid body activity"
    ],
    "answer": 0,
    "explanation": "Chronic hypercapnia causes CSF bicarbonate compensation, reducing central CO₂ sensitivity. Hypoxemia detected by peripheral chemoreceptors becomes increasingly important in respiratory drive."
  },
  {
    "id": 23,
    "question": "A 30-year-old woman develops an acute panic attack and begins hyperventilating. Her PaCO₂ falls substantially, producing cerebral vasoconstriction and transient lightheadedness. Which mechanism explains the cerebral vascular response?",
    "options": [
      "Increased extracellular H⁺",
      "Decreased CO₂ causing increased cerebral vascular resistance",
      "Increased adenosine causing vasodilation",
      "Increased cerebral blood flow"
    ],
    "answer": 1,
    "explanation": "Hypocapnia causes cerebral vasoconstriction, increasing cerebral vascular resistance and decreasing cerebral blood flow, which can produce dizziness or syncope."
  },
  {
    "id": 24,
    "question": "A patient develops severe metabolic acidosis due to lactic acid accumulation during shock. His respiratory rate increases markedly as the body attempts to compensate for the fall in blood pH. Which change occurs in the lungs?",
    "options": [
      "Reduced CO₂ elimination",
      "Increased CO₂ elimination",
      "Increased bicarbonate production",
      "Reduced alveolar ventilation"
    ],
    "answer": 1,
    "explanation": "Metabolic acidosis stimulates ventilation, increasing CO₂ elimination and lowering PaCO₂. This respiratory compensation helps raise pH toward normal."
  },
  {
    "id": 25,
    "question": "A patient with pulmonary fibrosis has markedly reduced lung compliance. During inspiration, he must generate a much greater transpulmonary pressure to achieve a given change in lung volume. Which physical property is primarily abnormal?",
    "options": [
      "Increased lung distensibility",
      "Decreased elastic recoil",
      "Decreased lung compliance",
      "Increased airway radius"
    ],
    "answer": 2,
    "explanation": "Fibrotic lungs are stiff and require greater pressure changes for expansion, producing low compliance and increased work of breathing."
  },
  {
    "id": 26,
    "question": "A patient with emphysema has destruction of alveolar walls and loss of elastic tissue. He has difficulty expelling air during expiration because small airways collapse. Which pulmonary change is expected?",
    "options": [
      "Increased elastic recoil",
      "Decreased lung compliance",
      "Increased lung compliance",
      "Reduced total lung capacity"
    ],
    "answer": 2,
    "explanation": "Loss of elastic tissue causes increased compliance but reduced elastic recoil, making expiration difficult and promoting air trapping."
  },
  {
    "id": 27,
    "question": "A patient with asthma develops widespread bronchoconstriction during an acute attack. His airflow becomes markedly reduced, particularly during expiration. Which change most directly accounts for the increased airway resistance?",
    "options": [
      "Increased airway radius",
      "Decreased airway radius",
      "Increased alveolar surface area",
      "Increased pulmonary blood flow"
    ],
    "answer": 1,
    "explanation": "Airway resistance is highly sensitive to airway radius. Bronchoconstriction produces a large increase in resistance and reduces expiratory airflow."
  },
  {
    "id": 28,
    "question": "A patient with a pulmonary embolism develops sudden dyspnea and hypoxemia. Some alveoli remain ventilated but receive little or no blood flow because of vascular obstruction. Which abnormality has increased?",
    "options": [
      "Physiologic shunt",
      "Physiologic dead space",
      "Anatomical shunt only",
      "Diffusion capacity"
    ],
    "answer": 1,
    "explanation": "Ventilated alveoli without adequate perfusion represent dead space ventilation, which increases in pulmonary embolism."
  },
  {
    "id": 29,
    "question": "A patient with pneumonia has alveoli filled with inflammatory fluid. Blood continues to flow through these poorly ventilated alveoli, resulting in severe hypoxemia. Which type of V/Q abnormality is most characteristic?",
    "options": [
      "Increased dead space",
      "Low V/Q or shunt-like physiology",
      "High V/Q from overventilation",
      "Complete absence of perfusion"
    ],
    "answer": 1,
    "explanation": "Perfusion of poorly ventilated or nonventilated alveoli creates low V/Q or shunt physiology, causing hypoxemia."
  },
  {
    "id": 30,
    "question": "A healthy person travels to high altitude, where atmospheric pressure is lower. Despite a normal respiratory system, arterial oxygen tension decreases. Which physiological change helps compensate over the following days?",
    "options": [
      "Decreased ventilation",
      "Increased ventilation and erythropoiesis",
      "Decreased 2,3-BPG",
      "Decreased pulmonary vascular resistance"
    ],
    "answer": 1,
    "explanation": "High altitude causes hypoxemia, stimulating hyperventilation. Over days to weeks, increased EPO stimulates erythropoiesis, while increased 2,3-BPG facilitates tissue oxygen unloading."
  },
  {
    "id": 31,
    "question": "A patient with chronic respiratory disease develops persistent CO₂ retention. His kidneys gradually increase bicarbonate concentration in plasma, allowing pH to move toward normal despite continued hypercapnia. Which renal process contributes most to this compensation?",
    "options": [
      "Increased bicarbonate excretion",
      "Increased H⁺ secretion and ammonium generation",
      "Decreased glutamine metabolism",
      "Decreased HCO₃⁻ reabsorption"
    ],
    "answer": 1,
    "explanation": "Chronic respiratory acidosis causes increased renal H⁺ secretion, ammoniagenesis, and bicarbonate reabsorption, increasing plasma HCO₃⁻."
  },
  {
    "id": 32,
    "question": "A 50-year-old man develops severe vomiting followed by weakness and confusion. Arterial blood gas demonstrates elevated pH and elevated bicarbonate. Which primary acid-base disorder is present?",
    "options": [
      "Respiratory acidosis",
      "Respiratory alkalosis",
      "Metabolic acidosis",
      "Metabolic alkalosis"
    ],
    "answer": 3,
    "explanation": "Loss of gastric HCl causes increased plasma bicarbonate and therefore metabolic alkalosis."
  },
  {
    "id": 33,
    "question": "A patient with severe diarrhea develops weakness and tachypnea. Laboratory studies show decreased plasma bicarbonate and decreased pH. His lungs increase ventilation to reduce PaCO₂. Which primary disturbance is present?",
    "options": [
      "Metabolic acidosis",
      "Metabolic alkalosis",
      "Respiratory acidosis",
      "Respiratory alkalosis"
    ],
    "answer": 0,
    "explanation": "Diarrhea causes loss of bicarbonate-rich intestinal fluid, producing metabolic acidosis. Hyperventilation lowers PaCO₂ as compensation."
  },
  {
    "id": 34,
    "question": "A healthy adult drinks a large amount of water over a short period. Plasma osmolality falls, suppressing hypothalamic osmoreceptors and reducing ADH secretion. Which change occurs in the kidney?",
    "options": [
      "Increased aquaporin-2 insertion",
      "Increased collecting duct water permeability",
      "Increased dilute urine production",
      "Increased medullary water reabsorption"
    ],
    "answer": 2,
    "explanation": "Low osmolality suppresses ADH. Reduced ADH causes decreased aquaporin-2 insertion, decreasing collecting duct water permeability and producing dilute urine."
  },
  {
    "id": 35,
    "question": "A dehydrated patient has increased plasma osmolality and reduced effective circulating volume. Both hypothalamic osmoreceptors and cardiovascular receptors stimulate ADH secretion. Which renal effect of ADH is most important for conserving water?",
    "options": [
      "Increased sodium secretion in proximal tubules",
      "Increased aquaporin-2 channels in collecting ducts",
      "Inhibition of urea recycling",
      "Decreased medullary osmolarity"
    ],
    "answer": 1,
    "explanation": "ADH acts through V₂ receptors on collecting duct principal cells, increasing cAMP and insertion of aquaporin-2 channels."
  },
  {
    "id": 36,
    "question": "A patient with severe dehydration develops intense thirst. Increased plasma osmolality is detected by specialized neurons in the hypothalamus. Which response occurs along with increased ADH secretion?",
    "options": [
      "Suppression of thirst",
      "Increased thirst sensation",
      "Increased sodium excretion",
      "Decreased sympathetic activity"
    ],
    "answer": 1,
    "explanation": "Increased plasma osmolality stimulates hypothalamic osmoreceptors, activating both thirst and ADH secretion to restore body water."
  },
  {
    "id": 37,
    "question": "A patient with renal artery stenosis develops severe hypertension. Reduced perfusion of the affected kidney stimulates renin release, leading to increased angiotensin II formation. Which effect of angiotensin II helps maintain GFR despite reduced renal perfusion?",
    "options": [
      "Preferential dilation of afferent arteriole",
      "Preferential constriction of efferent arteriole",
      "Complete inhibition of aldosterone",
      "Increased sodium excretion"
    ],
    "answer": 1,
    "explanation": "Moderate angiotensin II preferentially constricts the efferent arteriole, helping maintain glomerular capillary pressure and GFR during reduced renal perfusion."
  },
  {
    "id": 38,
    "question": "A patient receives a drug that inhibits angiotensin-converting enzyme. Shortly afterward, efferent arteriolar resistance decreases, causing a reduction in glomerular capillary pressure. Which renal variable may decrease, particularly in a patient dependent on angiotensin II to maintain filtration?",
    "options": [
      "GFR",
      "Plasma sodium concentration immediately",
      "Urinary flow to zero",
      "Renal blood flow always decreases"
    ],
    "answer": 0,
    "explanation": "ACE inhibitors reduce angiotensin II and therefore efferent arteriolar constriction. In conditions such as renal artery stenosis, this can significantly reduce GFR."
  },
  {
    "id": 39,
    "question": "A healthy adult receives an infusion of a substance that is freely filtered at the glomerulus and neither reabsorbed nor secreted by renal tubules. Its clearance is measured to determine the glomerular filtration rate. Which substance has these ideal properties?",
    "options": [
      "Glucose",
      "Inulin",
      "PAH",
      "Albumin"
    ],
    "answer": 1,
    "explanation": "Inulin is freely filtered and is neither reabsorbed nor secreted, so its clearance accurately measures GFR."
  },
  {
    "id": 40,
    "question": "A patient undergoes renal function testing using para-aminohippuric acid. The substance is freely filtered and strongly secreted by renal tubules, so almost all PAH entering the kidney is removed from plasma in a single pass. What does its clearance approximate?",
    "options": [
      "GFR",
      "Renal plasma flow",
      "Renal blood volume",
      "Filtration fraction only"
    ],
    "answer": 1,
    "explanation": "PAH clearance approximates effective renal plasma flow because nearly all PAH entering the kidney is filtered or secreted."
  },
  {
    "id": 41,
    "question": "A patient develops severe hyperglycemia exceeding the renal threshold for glucose. Glucose begins appearing in urine and increases tubular fluid osmolarity, causing additional water to remain within the tubular lumen. Which process explains his increased urine volume?",
    "options": [
      "Pressure natriuresis",
      "Osmotic diuresis",
      "Water intoxication",
      "Reduced filtration"
    ],
    "answer": 1,
    "explanation": "Excess filtered glucose exceeds proximal tubular reabsorptive capacity. Glucose remains in the lumen and retains water, causing osmotic diuresis."
  },
  {
    "id": 42,
    "question": "A healthy adult has normal plasma glucose. Almost all filtered glucose is reabsorbed in the proximal tubule through sodium-glucose cotransporters. Which mechanism provides the energy indirectly required for this process?",
    "options": [
      "Direct ATP hydrolysis by SGLT",
      "Sodium gradient generated by Na⁺/K⁺-ATPase",
      "Chloride gradient from the collecting duct",
      "Passive diffusion through aquaporins"
    ],
    "answer": 1,
    "explanation": "SGLT uses the Na⁺ electrochemical gradient, which is maintained by basolateral Na⁺/K⁺-ATPase. This is secondary active transport."
  },
  {
    "id": 43,
    "question": "A patient with severe diarrhea develops significant extracellular volume depletion. The kidney attempts to conserve sodium and water. Which nephron segment normally reabsorbs the largest fraction of filtered sodium and water?",
    "options": [
      "Proximal convoluted tubule",
      "Thin ascending limb",
      "Distal convoluted tubule",
      "Collecting duct"
    ],
    "answer": 0,
    "explanation": "The proximal tubule reabsorbs approximately 65% of filtered Na⁺ and water, along with most filtered glucose, amino acids, and bicarbonate."
  },
  {
    "id": 44,
    "question": "A patient receives a loop diuretic that inhibits the Na⁺-K⁺-2Cl⁻ cotransporter in the thick ascending limb. Which physiological consequence contributes strongly to its diuretic effect?",
    "options": [
      "Increased medullary osmotic gradient",
      "Reduced medullary osmotic gradient",
      "Increased collecting duct water permeability independent of ADH",
      "Increased glucose reabsorption"
    ],
    "answer": 1,
    "explanation": "The thick ascending limb normally reabsorbs Na⁺, K⁺, and Cl⁻ while remaining impermeable to water, helping establish the medullary concentration gradient. Loop diuretics disrupt this gradient and impair urine concentration."
  },
  {
    "id": 45,
    "question": "A patient receives a thiazide diuretic that inhibits sodium-chloride cotransport in the distal convoluted tubule. Which physiological effect is expected?",
    "options": [
      "Increased calcium excretion",
      "Decreased calcium excretion",
      "Complete inhibition of aldosterone",
      "Severe loss of bicarbonate in all patients"
    ],
    "answer": 1,
    "explanation": "Thiazides increase Ca²⁺ reabsorption in the distal tubule and therefore decrease urinary calcium excretion."
  },
  {
    "id": 46,
    "question": "A patient develops severe hyperkalemia due to reduced renal potassium excretion. Under normal conditions, most regulated potassium secretion occurs in principal cells of the late distal nephron. Which hormone strongly increases this process?",
    "options": [
      "ADH only",
      "Aldosterone",
      "ANP",
      "Calcitonin"
    ],
    "answer": 1,
    "explanation": "Aldosterone increases sodium reabsorption through ENaC and promotes K⁺ secretion through ROMK, making it a major regulator of potassium balance."
  },
  {
    "id": 47,
    "question": "A patient with chronic kidney disease develops metabolic acidosis because the kidneys cannot adequately eliminate the daily acid load. Which urinary mechanism normally allows large amounts of hydrogen ions to be excreted without producing extremely acidic urine?",
    "options": [
      "Free H⁺ excretion only",
      "Ammonium trapping",
      "Glucose secretion",
      "Potassium reabsorption only"
    ],
    "answer": 1,
    "explanation": "Renal ammoniagenesis produces NH₃, which binds secreted H⁺ to form NH₄⁺. This allows large amounts of acid to be excreted while maintaining urine pH above the theoretical limit of free H⁺ secretion alone."
  },
  {
    "id": 48,
    "question": "A patient develops severe metabolic acidosis due to diabetic ketoacidosis. The kidneys increase ammonium production from glutamine and excrete more acid. Which additional renal response helps restore plasma bicarbonate?",
    "options": [
      "Decreased H⁺ secretion",
      "Increased generation and reclamation of bicarbonate",
      "Increased bicarbonate loss",
      "Complete suppression of glutamine metabolism"
    ],
    "answer": 1,
    "explanation": "During acidosis, renal H⁺ secretion and ammonium excretion increase, allowing new bicarbonate to enter the blood and helping correct the acid-base disturbance."
  },
  {
    "id": 49,
    "question": "A patient with chronic diarrhea has persistent metabolic acidosis. His lungs compensate by increasing ventilation, but renal compensation is also important. Which change would be expected after several days?",
    "options": [
      "Increased bicarbonate excretion",
      "Increased urinary ammonium excretion",
      "Decreased H⁺ secretion",
      "Decreased renal acid generation"
    ],
    "answer": 1,
    "explanation": "Chronic metabolic acidosis stimulates the kidney to increase ammonium production and H⁺ excretion, generating new bicarbonate and helping restore pH."
  },
  {
    "id": 50,
    "question": "A patient develops respiratory alkalosis after prolonged hyperventilation. If the disturbance persists for several days, the kidneys compensate by changing bicarbonate handling. Which response is expected?",
    "options": [
      "Increased bicarbonate reabsorption",
      "Increased bicarbonate excretion",
      "Increased ammonium production",
      "Increased hydrogen secretion"
    ],
    "answer": 1,
    "explanation": "In chronic respiratory alkalosis, renal compensation involves increased bicarbonate excretion and reduced H⁺ secretion, lowering plasma bicarbonate toward normal."
  },
  {
    "id": 51,
    "question": "A 35-year-old man develops severe abdominal pain after a fatty meal. Although the clinical cause is gastrointestinal, normal digestion requires coordinated pancreatic and biliary secretion. Which hormone is released from duodenal I cells in response to fatty acids and amino acids?",
    "options": [
      "Secretin",
      "Cholecystokinin",
      "Gastrin",
      "Somatostatin"
    ],
    "answer": 1,
    "explanation": "CCK is released by I cells in response to fatty acids and amino acids. It stimulates pancreatic enzyme secretion and gallbladder contraction and slows gastric emptying."
  },
  {
    "id": 52,
    "question": "A patient undergoes pancreatic surgery and subsequently develops difficulty digesting fatty foods. Pancreatic bicarbonate secretion is also reduced, allowing acidic chyme to remain in the duodenum. Which hormone normally stimulates pancreatic bicarbonate secretion?",
    "options": [
      "Secretin",
      "CCK",
      "Gastrin",
      "Motilin"
    ],
    "answer": 0,
    "explanation": "Acid entering the duodenum stimulates S cells to release secretin, which promotes bicarbonate-rich pancreatic and biliary secretion."
  },
  {
    "id": 53,
    "question": "A patient with chronic atrophic gastritis has markedly reduced gastric acid secretion. As a result, protein digestion and absorption of certain nutrients are impaired. Which substance normally requires gastric parietal-cell secretion for absorption in the terminal ileum?",
    "options": [
      "Iron only",
      "Vitamin B12",
      "Folate",
      "Calcium only"
    ],
    "answer": 1,
    "explanation": "Parietal cells secrete intrinsic factor, which binds vitamin B12 and allows its absorption in the terminal ileum."
  },
  {
    "id": 54,
    "question": "A healthy individual consumes a large protein-rich meal. Gastric distension and peptides stimulate gastric secretion through neural and hormonal mechanisms. Which hormone is primarily secreted by G cells of the gastric antrum?",
    "options": [
      "Gastrin",
      "Secretin",
      "CCK",
      "GIP"
    ],
    "answer": 0,
    "explanation": "Gastrin is secreted by G cells and stimulates gastric acid secretion, promotes gastric mucosal growth, and increases gastric motility."
  },
  {
    "id": 55,
    "question": "A patient has excessive gastric acid secretion due to a gastrin-secreting tumor. Gastrin stimulates acid secretion partly by activating another gastric cell type that releases histamine. Which cell is responsible?",
    "options": [
      "Chief cell",
      "G cell",
      "Enterochromaffin-like cell",
      "D cell"
    ],
    "answer": 2,
    "explanation": "Gastrin stimulates ECL cells to release histamine. Histamine activates H₂ receptors on parietal cells and strongly increases acid secretion."
  },
  {
    "id": 56,
    "question": "A patient receives a medication that blocks H₂ receptors on gastric parietal cells. Gastric acid secretion decreases, particularly the stimulatory response mediated by histamine. Which intracellular pathway normally mediates H₂ receptor activation?",
    "options": [
      "Gi → decreased cAMP",
      "Gs → increased cAMP",
      "Gq → increased IP₃ only",
      "Tyrosine kinase → decreased calcium"
    ],
    "answer": 1,
    "explanation": "H₂ receptors are Gs-coupled, increasing cAMP and activating proton pumps in parietal cells to increase HCl secretion."
  },
  {
    "id": 57,
    "question": "A patient with severe pancreatic insufficiency develops bulky, greasy stools and weight loss. Laboratory testing suggests impaired digestion of triglycerides. Which pancreatic enzyme is primarily responsible for hydrolyzing dietary triglycerides?",
    "options": [
      "Trypsin",
      "Pancreatic lipase",
      "Amylase",
      "Enteropeptidase"
    ],
    "answer": 1,
    "explanation": "Pancreatic lipase is the major enzyme responsible for triglyceride digestion. Bile salts facilitate this process by emulsifying fats and forming micelles."
  },
  {
    "id": 58,
    "question": "A patient with obstruction of bile flow develops steatorrhea and deficiencies of several fat-soluble vitamins. Bile salts normally facilitate intestinal lipid absorption by forming micelles. Which vitamin is least likely to be affected?",
    "options": [
      "Vitamin A",
      "Vitamin D",
      "Vitamin K",
      "Vitamin B12"
    ],
    "answer": 3,
    "explanation": "Vitamins A, D, E, and K are fat-soluble and depend on normal lipid absorption. B12 absorption requires intrinsic factor and terminal ileal uptake."
  },
  {
    "id": 59,
    "question": "A patient undergoes surgical removal of the terminal ileum and later develops vitamin B12 deficiency. Although gastric intrinsic factor secretion remains normal, B12 absorption is markedly impaired. Which site is normally responsible for receptor-mediated uptake of the intrinsic factor-B12 complex?",
    "options": [
      "Stomach",
      "Duodenum",
      "Jejunum",
      "Terminal ileum"
    ],
    "answer": 3,
    "explanation": "The intrinsic factor-B12 complex binds receptors on terminal ileal enterocytes, allowing vitamin B12 absorption."
  },
  {
    "id": 60,
    "question": "A patient consumes a carbohydrate-rich meal, causing increased blood glucose. Pancreatic β cells respond by increasing insulin secretion. Which intracellular event most directly triggers insulin release after glucose enters the β cell?",
    "options": [
      "Opening of ATP-sensitive K⁺ channels",
      "Closure of ATP-sensitive K⁺ channels",
      "Decreased ATP production",
      "Opening of chloride channels only"
    ],
    "answer": 1,
    "explanation": "Glucose metabolism increases ATP, causing closure of ATP-sensitive K⁺ channels, membrane depolarization, voltage-gated Ca²⁺ entry, and insulin exocytosis."
  },
  {
    "id": 61,
    "question": "A patient with insulin deficiency develops hyperglycemia, increased lipolysis, and weight loss. Normally, insulin promotes glucose uptake into skeletal muscle and adipose tissue by increasing the availability of a specific glucose transporter at the cell membrane. Which transporter is involved?",
    "options": [
      "GLUT1",
      "GLUT2",
      "GLUT4",
      "SGLT1"
    ],
    "answer": 2,
    "explanation": "Insulin promotes translocation of GLUT4 to the cell membrane in skeletal muscle and adipose tissue, increasing glucose uptake."
  },
  {
    "id": 62,
    "question": "A healthy adult undergoes fasting for 24 hours. Plasma insulin decreases while glucagon rises, helping maintain blood glucose. Which hepatic process becomes particularly important during this period?",
    "options": [
      "Glycogenesis",
      "Glycogenolysis and gluconeogenesis",
      "Fatty acid synthesis",
      "Glucose storage only"
    ],
    "answer": 1,
    "explanation": "During fasting, low insulin and high glucagon stimulate hepatic glycogenolysis initially and gluconeogenesis increasingly as fasting continues."
  },
  {
    "id": 63,
    "question": "A patient with type 1 diabetes mellitus has inadequate insulin secretion. During prolonged fasting, increased lipolysis provides fatty acids to the liver, where ketone bodies are produced. Which hormone promotes this metabolic state?",
    "options": [
      "Insulin",
      "Glucagon",
      "Somatostatin only",
      "Calcitonin"
    ],
    "answer": 1,
    "explanation": "High glucagon with low insulin promotes lipolysis, hepatic fatty acid oxidation, and ketogenesis during fasting."
  },
  {
    "id": 64,
    "question": "A patient develops symptoms of hypoglycemia several hours after skipping a meal. The body activates multiple counter-regulatory hormones to restore plasma glucose. Which hormone acts most rapidly to increase hepatic glycogenolysis?",
    "options": [
      "Insulin",
      "Glucagon",
      "Thyroxine",
      "Growth hormone"
    ],
    "answer": 1,
    "explanation": "Glucagon rapidly stimulates hepatic glycogenolysis and gluconeogenesis, increasing blood glucose during fasting or hypoglycemia."
  },
  {
    "id": 65,
    "question": "A 40-year-old woman develops fatigue, weight gain, cold intolerance, and bradycardia. Laboratory studies demonstrate low free T4 with markedly elevated TSH. The physician explains that thyroid hormone normally exerts negative feedback on both the hypothalamus and pituitary. Which hormone directly stimulates thyroid follicular cells?",
    "options": [
      "TRH",
      "TSH",
      "ACTH",
      "ACTH-related peptide"
    ],
    "answer": 1,
    "explanation": "TSH from the anterior pituitary stimulates thyroid follicular cells to synthesize and release T3 and T4."
  },
  {
    "id": 66,
    "question": "A patient with hyperthyroidism has increased oxygen consumption, heat production, and sensitivity to catecholamines. Thyroid hormone increases metabolic activity in many tissues. Which hormone is biologically more potent at nuclear thyroid hormone receptors?",
    "options": [
      "T4",
      "T3",
      "Reverse T3",
      "Thyroglobulin"
    ],
    "answer": 1,
    "explanation": "T3 is the more biologically active thyroid hormone. Much circulating T3 is produced by peripheral conversion of T4 through deiodination."
  },
  {
    "id": 67,
    "question": "A patient with prolonged fasting develops increased growth hormone secretion. Despite elevated GH, plasma IGF-1 does not increase substantially because adequate nutrition is required for hepatic IGF-1 production. Which tissue is the major source of circulating IGF-1?",
    "options": [
      "Liver",
      "Thyroid",
      "Pancreas",
      "Adrenal cortex"
    ],
    "answer": 0,
    "explanation": "Growth hormone stimulates the liver and other tissues to produce IGF-1, which mediates many of GH's growth-promoting effects."
  },
  {
    "id": 68,
    "question": "A patient with acromegaly develops enlarged hands, coarse facial features, insulin resistance, and cardiomegaly. Laboratory studies demonstrate elevated IGF-1. Excess production of which pituitary hormone is responsible?",
    "options": [
      "ACTH",
      "Growth hormone",
      "TSH",
      "Prolactin"
    ],
    "answer": 1,
    "explanation": "Acromegaly results from excess growth hormone after epiphyseal closure, with increased IGF-1 mediating many tissue-growth effects."
  },
  {
    "id": 69,
    "question": "A patient develops Cushing syndrome due to excessive ACTH secretion from a pituitary adenoma. ACTH stimulates the adrenal cortex, causing increased cortisol production. Which adrenal cortical layer is primarily responsible for cortisol synthesis?",
    "options": [
      "Zona glomerulosa",
      "Zona fasciculata",
      "Zona reticularis",
      "Adrenal medulla"
    ],
    "answer": 1,
    "explanation": "The adrenal cortex follows GFR: glomerulosa → aldosterone, fasciculata → cortisol, reticularis → androgens."
  },
  {
    "id": 70,
    "question": "A patient with primary adrenal insufficiency develops hypotension, hyperkalemia, hyponatremia, and increased ACTH. Cortisol deficiency removes negative feedback from the hypothalamus and pituitary. Which additional clinical finding is expected because of increased ACTH-related peptides?",
    "options": [
      "Hyperpigmentation",
      "Hypopigmentation",
      "Severe hypercalcemia only",
      "Increased insulin secretion"
    ],
    "answer": 0,
    "explanation": "Increased ACTH is derived from POMC, which also gives rise to melanocyte-stimulating peptides. Increased melanocyte activity causes hyperpigmentation in primary adrenal insufficiency."
  },
  {
    "id": 71,
    "question": "A patient with primary hyperaldosteronism has hypertension, hypokalemia, and metabolic alkalosis. Aldosterone increases sodium reabsorption while promoting potassium and hydrogen ion secretion. Which renal cell is particularly responsible for aldosterone-mediated potassium secretion?",
    "options": [
      "Principal cell",
      "Alpha-intercalated cell only",
      "Podocyte",
      "Mesangial cell"
    ],
    "answer": 0,
    "explanation": "Aldosterone increases ENaC activity and Na⁺/K⁺-ATPase in principal cells, promoting potassium secretion into the tubular lumen."
  },
  {
    "id": 72,
    "question": "A patient develops severe hypercalcemia due to increased parathyroid hormone secretion. PTH increases serum calcium through effects on bone, kidney, and indirectly the intestine. Which renal effect is directly caused by PTH?",
    "options": [
      "Increased phosphate reabsorption",
      "Decreased phosphate reabsorption",
      "Decreased calcium reabsorption",
      "Inhibition of vitamin D activation"
    ],
    "answer": 1,
    "explanation": "PTH decreases proximal tubular phosphate reabsorption, causing phosphaturia. It simultaneously increases distal calcium reabsorption and stimulates renal vitamin D activation."
  },
  {
    "id": 73,
    "question": "A patient with vitamin D deficiency develops hypocalcemia and secondary hyperparathyroidism. Vitamin D normally increases intestinal absorption of calcium and phosphate. Which form is the biologically active form of vitamin D?",
    "options": [
      "Cholecalciferol",
      "25-hydroxyvitamin D",
      "1,25-dihydroxyvitamin D",
      "Ergosterol"
    ],
    "answer": 2,
    "explanation": "The active form, calcitriol (1,25-dihydroxyvitamin D), is produced by renal 1α-hydroxylation and increases intestinal calcium and phosphate absorption."
  },
  {
    "id": 74,
    "question": "A patient develops severe hypoglycemia during an insulin overdose. Several hormonal mechanisms are activated to restore glucose concentration. Which hormone is generally considered the most important immediate counter-regulatory hormone?",
    "options": [
      "Glucagon",
      "Insulin",
      "Somatostatin",
      "Calcitonin"
    ],
    "answer": 0,
    "explanation": "Glucagon rapidly raises blood glucose through hepatic glycogenolysis and gluconeogenesis. Epinephrine, cortisol, and GH also contribute to counter-regulation."
  },
  {
    "id": 75,
    "question": "A patient with severe chronic liver disease develops hypoalbuminemia and peripheral edema. Albumin normally contributes substantially to plasma colloid osmotic pressure and helps retain fluid within the vascular compartment. Which Starling force is reduced?",
    "options": [
      "Capillary hydrostatic pressure",
      "Plasma oncotic pressure",
      "Interstitial hydrostatic pressure",
      "Lymphatic pressure"
    ],
    "answer": 1,
    "explanation": "Albumin is the major contributor to plasma oncotic pressure. Reduced albumin lowers vascular oncotic pressure and promotes movement of fluid into tissues."
  },
  {
    "id": 76,
    "question": "A patient develops severe diarrhea and becomes volume depleted. The kidney increases sodium and water retention through multiple mechanisms. Which hormone increases water permeability of the collecting duct while having relatively little direct effect on sodium reabsorption?",
    "options": [
      "Aldosterone",
      "ADH",
      "ANP",
      "PTH"
    ],
    "answer": 1,
    "explanation": "ADH primarily increases water reabsorption by inserting aquaporin-2 channels into collecting duct principal cells."
  },
  {
    "id": 77,
    "question": "A patient with heart failure has increased atrial pressure and atrial stretch. The atria release a hormone that promotes sodium and water excretion and suppresses the renin-angiotensin-aldosterone system. Which hormone is responsible?",
    "options": [
      "ADH",
      "ANP",
      "Aldosterone",
      "Angiotensin II"
    ],
    "answer": 1,
    "explanation": "Atrial natriuretic peptide (ANP) is released in response to atrial stretch and promotes natriuresis, diuresis, vasodilation, and suppression of renin and aldosterone."
  },
  {
    "id": 78,
    "question": "A patient with severe vomiting develops hypokalemia. Potassium depletion stimulates renal mechanisms that conserve potassium. Under normal conditions, potassium is freely filtered at the glomerulus and then largely reabsorbed before being regulated in the distal nephron. Which segment normally reabsorbs most filtered potassium?",
    "options": [
      "Proximal tubule",
      "Collecting duct",
      "Distal convoluted tubule only",
      "Thin descending limb"
    ],
    "answer": 0,
    "explanation": "Approximately 65% of filtered K⁺ is reabsorbed in the proximal tubule, with additional reabsorption occurring in the thick ascending limb. Distal nephron secretion regulates final potassium excretion."
  },
  {
    "id": 79,
    "question": "A patient develops severe hypokalemia after prolonged use of a loop diuretic. Increased distal sodium delivery and aldosterone activity promote potassium secretion in the collecting duct. Which change in the tubular lumen favors potassium secretion?",
    "options": [
      "Positive luminal potential",
      "Negative luminal potential",
      "Complete absence of sodium",
      "Increased luminal protein"
    ],
    "answer": 1,
    "explanation": "Increased sodium reabsorption through ENaC makes the tubular lumen relatively negative, favoring K⁺ secretion through potassium channels."
  },
  {
    "id": 80,
    "question": "A patient with chronic kidney disease develops reduced activation of vitamin D and phosphate retention. Hypocalcemia stimulates increased PTH secretion. Which bone effect is produced by PTH when acting continuously?",
    "options": [
      "Increased bone resorption",
      "Complete inhibition of osteoclast activity",
      "Increased calcitonin release only",
      "Reduced calcium mobilization"
    ],
    "answer": 0,
    "explanation": "Continuous PTH elevation indirectly stimulates osteoclast-mediated bone resorption, increasing calcium release into the circulation."
  },
  {
    "id": 81,
    "question": "A patient has severe diarrhea and develops a fall in extracellular bicarbonate. The resulting decrease in pH is detected by peripheral and central mechanisms, increasing ventilation. Which relationship best describes the effect of ventilation on PaCO₂?",
    "options": [
      "PaCO₂ directly increases with alveolar ventilation",
      "PaCO₂ is inversely related to alveolar ventilation",
      "PaCO₂ is independent of ventilation",
      "PaCO₂ depends only on inspired oxygen"
    ],
    "answer": 1,
    "explanation": "PaCO₂ is inversely proportional to alveolar ventilation when CO₂ production remains constant. Increased ventilation lowers PaCO₂."
  },
  {
    "id": 82,
    "question": "A patient with severe pulmonary disease has reduced diffusion of oxygen across the alveolar-capillary membrane. Diffusion becomes particularly impaired during exercise because pulmonary capillary transit time decreases. Which physical principle best explains this abnormality?",
    "options": [
      "Fick's law of diffusion",
      "Starling's law only",
      "Frank-Starling law",
      "Poiseuille's law only"
    ],
    "answer": 0,
    "explanation": "Gas transfer depends on membrane surface area, thickness, diffusion coefficient, and partial-pressure gradient according to Fick's law. Fibrosis increases membrane thickness and impairs diffusion."
  },
  {
    "id": 83,
    "question": "A healthy individual begins vigorous exercise, causing oxygen consumption to increase dramatically. Skeletal muscle blood flow increases because local metabolites dilate arterioles. At the same time, venous oxygen content falls. Which change contributes to the increased arteriovenous oxygen difference?",
    "options": [
      "Decreased tissue oxygen extraction",
      "Increased tissue oxygen extraction",
      "Increased venous oxygen content",
      "Decreased mitochondrial metabolism"
    ],
    "answer": 1,
    "explanation": "During exercise, active muscles extract more oxygen from blood, causing lower venous O₂ content and increased arteriovenous oxygen difference."
  },
  {
    "id": 84,
    "question": "A patient develops severe fever during an infection. His metabolic rate increases, and body temperature rises above normal. The hypothalamus coordinates thermoregulation through autonomic, endocrine, and behavioral mechanisms. Which region primarily acts as the body's temperature-regulating center?",
    "options": [
      "Anterior hypothalamus",
      "Posterior pituitary",
      "Cerebellum",
      "Medulla only"
    ],
    "answer": 0,
    "explanation": "The preoptic/anterior hypothalamus is especially important for sensing and regulating body temperature, particularly heat-loss responses."
  },
  {
    "id": 85,
    "question": "A patient is exposed to a cold environment for several hours. Sympathetic activation causes cutaneous vasoconstriction, reducing heat loss. In addition, shivering increases heat production through involuntary skeletal muscle contractions. Which mechanism directly produces heat during shivering?",
    "options": [
      "Increased muscle ATP utilization",
      "Decreased skeletal muscle metabolism",
      "Reduced sympathetic activity",
      "Increased cutaneous blood flow"
    ],
    "answer": 0,
    "explanation": "Shivering consists of rapid involuntary muscle contractions that increase ATP utilization and metabolic heat production."
  },
  {
    "id": 86,
    "question": "A patient develops an acute increase in plasma osmolality. Hypothalamic osmoreceptors stimulate ADH release, while the thirst center is activated. Which change would normally decrease ADH secretion?",
    "options": [
      "Increased plasma osmolality",
      "Decreased blood volume",
      "Increased plasma volume",
      "Increased angiotensin II"
    ],
    "answer": 2,
    "explanation": "Increased plasma volume and decreased plasma osmolality suppress ADH. Conversely, hyperosmolality, hypovolemia, and angiotensin II stimulate ADH secretion."
  },
  {
    "id": 87,
    "question": "A patient develops a sudden increase in plasma glucose after eating a carbohydrate-rich meal. Insulin secretion increases, promoting glucose uptake, glycogen synthesis, and lipid synthesis while suppressing lipolysis. Which metabolic effect is directly associated with insulin?",
    "options": [
      "Increased hepatic gluconeogenesis",
      "Increased lipolysis",
      "Increased glycogen synthesis",
      "Increased ketogenesis"
    ],
    "answer": 2,
    "explanation": "Insulin is an anabolic hormone that promotes glucose utilization and storage, including glycogenesis, while inhibiting gluconeogenesis, glycogenolysis, and lipolysis."
  },
  {
    "id": 88,
    "question": "A patient undergoes prolonged fasting for several days. Hepatic glycogen stores become substantially depleted, and the liver increasingly produces glucose from lactate, glycerol, and amino acids. Which process is now particularly important for maintaining plasma glucose?",
    "options": [
      "Glycogenesis",
      "Gluconeogenesis",
      "Glycolysis only",
      "Lipogenesis"
    ],
    "answer": 1,
    "explanation": "After hepatic glycogen stores decrease, gluconeogenesis becomes increasingly important. The liver uses lactate, glycerol, and glucogenic amino acids to maintain blood glucose."
  },
  {
    "id": 89,
    "question": "A patient with untreated hyperthyroidism develops tachycardia, increased cardiac output, heat intolerance, and weight loss. Thyroid hormone increases sensitivity to catecholamines partly by increasing β-adrenergic receptor expression. Which cardiovascular change is expected?",
    "options": [
      "Decreased heart rate",
      "Increased cardiac output",
      "Decreased contractility",
      "Increased systemic vascular resistance only"
    ],
    "answer": 1,
    "explanation": "Thyroid hormone increases heart rate, contractility, and cardiac output, partly by increasing β-adrenergic responsiveness."
  },
  {
    "id": 90,
    "question": "A patient with severe primary adrenal insufficiency has low cortisol and low aldosterone. He develops hypotension and hyperkalemia. Cortisol normally supports vascular responsiveness to catecholamines, while aldosterone regulates sodium and potassium balance. Which abnormality is primarily responsible for the hyperkalemia?",
    "options": [
      "Cortisol deficiency",
      "Aldosterone deficiency",
      "Increased ADH",
      "Increased thyroid hormone"
    ],
    "answer": 1,
    "explanation": "Aldosterone promotes Na⁺ reabsorption and K⁺ secretion in the distal nephron. Its deficiency causes sodium loss, volume depletion, and hyperkalemia."
  },
  {
    "id": 91,
    "question": "A patient with severe hypocalcemia develops muscle cramps and carpopedal spasm. Calcium normally stabilizes voltage-gated sodium channels in excitable membranes. Why does hypocalcemia increase neuromuscular excitability?",
    "options": [
      "It increases the threshold potential substantially",
      "It lowers the threshold for action potential generation",
      "It completely blocks sodium channels",
      "It prevents neurotransmitter release"
    ],
    "answer": 1,
    "explanation": "Low extracellular Ca²⁺ decreases stabilization of voltage-gated Na⁺ channels, making them easier to activate and causing increased neuromuscular excitability."
  },
  {
    "id": 92,
    "question": "A patient develops severe hyperkalemia due to renal failure. The resting membrane potential of skeletal muscle becomes less negative because extracellular potassium concentration increases. Initially, this may increase excitability, but severe persistent hyperkalemia can cause weakness. Which ion primarily determines the resting membrane potential of skeletal muscle?",
    "options": [
      "Calcium",
      "Potassium",
      "Sodium",
      "Chloride only"
    ],
    "answer": 1,
    "explanation": "At rest, the membrane is highly permeable to K⁺, so the K⁺ concentration gradient is the major determinant of resting membrane potential."
  },
  {
    "id": 93,
    "question": "A patient receives a neuromuscular-blocking drug that prevents acetylcholine from activating nicotinic receptors at the neuromuscular junction. Skeletal muscle contraction becomes impossible despite normal motor nerve action potentials. Which event normally occurs immediately after acetylcholine binds the motor end plate?",
    "options": [
      "Opening of ligand-gated cation channels",
      "Opening of voltage-gated Ca²⁺ channels in the SR",
      "Direct ATP production",
      "Activation of muscarinic receptors"
    ],
    "answer": 0,
    "explanation": "ACh binds nicotinic Nm receptors, opening ligand-gated cation channels and producing an end-plate potential that triggers a muscle action potential."
  },
  {
    "id": 94,
    "question": "A patient with myasthenia gravis develops fatigable muscle weakness because antibodies interfere with neuromuscular transmission. Which receptor is primarily targeted in the most common form of this disease?",
    "options": [
      "Muscarinic M₂ receptor",
      "Nicotinic acetylcholine receptor",
      "β₁ receptor",
      "GABA-A receptor"
    ],
    "answer": 1,
    "explanation": "Myasthenia gravis most commonly involves antibodies against postsynaptic nicotinic acetylcholine receptors, reducing the safety margin of neuromuscular transmission."
  },
  {
    "id": 95,
    "question": "A patient suddenly loses vision in one eye because of interruption of retinal blood flow. Photoreceptors normally convert light into electrical signals that are transmitted through bipolar and ganglion cells before leaving the eye through the optic nerve. Which photoreceptor is primarily responsible for vision in dim light?",
    "options": [
      "Cone",
      "Rod",
      "Bipolar cell",
      "Ganglion cell"
    ],
    "answer": 1,
    "explanation": "Rods are highly sensitive to low light and are responsible primarily for scotopic/night vision. Cones mediate color and high-acuity vision."
  },
  {
    "id": 96,
    "question": "A patient enters a dark room after being exposed to bright sunlight. Initially he cannot see clearly, but vision gradually improves as retinal photopigments regenerate and pupil size changes. Which photoreceptor adaptation is primarily responsible for improved sensitivity in darkness?",
    "options": [
      "Rod adaptation",
      "Cone destruction",
      "Increased retinal illumination",
      "Suppression of rhodopsin"
    ],
    "answer": 0,
    "explanation": "In darkness, rhodopsin regenerates and rods become increasingly sensitive, producing dark adaptation. Cones adapt more rapidly but are less sensitive."
  },
  {
    "id": 97,
    "question": "A patient develops a lesion affecting the posterior pituitary stalk and subsequently develops excessive urination with very dilute urine. Plasma osmolality increases because free-water loss is severe. Which hormone deficiency most directly explains these findings?",
    "options": [
      "Aldosterone",
      "ADH",
      "Cortisol",
      "TSH"
    ],
    "answer": 1,
    "explanation": "ADH deficiency causes central diabetes insipidus, characterized by polyuria, dilute urine, increased plasma osmolality, and compensatory thirst."
  },
  {
    "id": 98,
    "question": "A patient has polyuria and polydipsia despite very high plasma ADH concentrations. Administration of exogenous desmopressin produces little improvement in urine concentration. Which physiological defect is most likely?",
    "options": [
      "Excess ADH secretion",
      "Renal resistance to ADH",
      "Excess aldosterone secretion",
      "Increased ANP secretion"
    ],
    "answer": 1,
    "explanation": "Nephrogenic diabetes insipidus results from renal resistance to ADH, often involving impaired V₂ receptor signaling or aquaporin-2 function, so desmopressin has little effect."
  },
  {
    "id": 99,
    "question": "A patient with severe metabolic acidosis undergoes arterial blood gas testing. His bicarbonate concentration is markedly decreased, and his PaCO₂ is also reduced because of compensatory hyperventilation. Which principle best explains why this compensation cannot completely normalize the pH?",
    "options": [
      "Respiratory compensation has a limited capacity",
      "Kidneys cannot excrete acid",
      "CO₂ cannot cross the blood-brain barrier",
      "Bicarbonate cannot buffer hydrogen ions"
    ],
    "answer": 0,
    "explanation": "Hyperventilation can lower PaCO₂ and partially correct metabolic acidosis, but it cannot completely normalize pH because respiratory compensation has physiological limits."
  },
  {
    "id": 100,
    "question": "A 60-year-old patient develops severe hypotension after massive blood loss. Reduced arterial pressure decreases tissue perfusion, activates sympathetic pathways, stimulates RAAS and ADH release, and increases thirst. The body attempts to preserve perfusion of vital organs while restoring circulating volume. Which integrated response is most appropriate?",
    "options": [
      "Decreased heart rate with widespread vasodilation",
      "Increased sympathetic activity with tachycardia, vasoconstriction, and renal sodium retention",
      "Increased ANP secretion with natriuresis and diuresis",
      "Suppressed ADH and aldosterone secretion with increased urine output"
    ],
    "answer": 1,
    "explanation": "Hemorrhage activates the baroreceptor reflex, sympathetic nervous system, RAAS, and ADH. Together they increase heart rate and contractility, constrict vessels, retain sodium and water, and help preserve cerebral and coronary perfusion."
  }
];
