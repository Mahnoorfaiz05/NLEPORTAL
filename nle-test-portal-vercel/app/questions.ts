export type Question = { id: number; question: string; options: string[]; answer: number; explanation: string };

export const questions: Question[] = [
  {
    "id": 1,
    "question": "A premature male infant is delivered at 29 weeks of gestation and develops tachypnea, grunting, nasal flaring, and intercostal retractions shortly after birth. Chest radiography demonstrates diffuse bilateral reticulogranular opacities with air bronchograms. The neonatologist explains that the infant's immature lungs cannot adequately reduce alveolar surface tension. Which cellular abnormality is primarily responsible for this condition?",
    "options": [
      "Defective type I pneumocyte differentiation",
      "Reduced type II pneumocyte surfactant production",
      "Excessive alveolar macrophage activation",
      "Defective ciliated epithelial cell maturation",
      "Increased pulmonary endothelial permeability"
    ],
    "answer": 1,
    "explanation": "This infant has neonatal respiratory distress syndrome, which is especially common in premature infants. Type II pneumocytes produce pulmonary surfactant, which decreases surface tension and prevents alveolar collapse. Premature infants have insufficient surfactant production, resulting in decreased lung compliance, atelectasis, increased work of breathing, and hypoxemia."
  },
  {
    "id": 2,
    "question": "A newborn develops coughing, cyanosis, and respiratory distress every time feeding is initiated. An orogastric tube cannot be advanced into the stomach, and radiography demonstrates that the tube is coiled within the upper esophagus. Further imaging reveals an abnormal connection between the distal esophagus and trachea. Which embryological abnormality most likely produced this condition?",
    "options": [
      "Failure of pleuroperitoneal membrane fusion",
      "Failure of the tracheoesophageal septum to properly partition the foregut",
      "Failure of the sixth aortic arch to develop",
      "Abnormal migration of neural crest cells",
      "Failure of the diaphragm to descend"
    ],
    "answer": 1,
    "explanation": "The trachea and esophagus develop from the primitive foregut and are separated by the tracheoesophageal septum. Abnormal partitioning can produce esophageal atresia with a distal tracheoesophageal fistula, the most common form. Feeding causes milk to enter the respiratory tract, producing choking, cyanosis, and aspiration."
  },
  {
    "id": 3,
    "question": "A fetus is diagnosed with a large left-sided congenital diaphragmatic hernia. After birth, the infant develops severe respiratory distress and hypoxemia despite oxygen supplementation. Imaging shows bowel loops occupying much of the left hemithorax with marked compression of the developing left lung. Which embryological structure most likely failed to develop properly?",
    "options": [
      "Septum transversum",
      "Pleuroperitoneal membrane",
      "Tracheoesophageal septum",
      "Dorsal mesentery of the stomach",
      "Pericardioperitoneal canal only"
    ],
    "answer": 1,
    "explanation": "A Bochdalek congenital diaphragmatic hernia results from failure of the pleuroperitoneal membrane to close the posterolateral diaphragm. Abdominal viscera enter the thorax and compress the developing lung, producing pulmonary hypoplasia, which is the major cause of severe respiratory compromise."
  },
  {
    "id": 4,
    "question": "A fetus undergoes normal lung development but is delivered extremely prematurely before the lungs have developed sufficient structures for effective gas exchange. At autopsy, the developing lungs contain conducting airways but lack respiratory bronchioles and alveolar structures. Which stage of lung development corresponds to these findings?",
    "options": [
      "Embryonic stage",
      "Pseudoglandular stage",
      "Canalicular stage",
      "Saccular stage",
      "Alveolar stage"
    ],
    "answer": 1,
    "explanation": "During the pseudoglandular stage, the lungs contain developing conducting airways but do not yet possess structures capable of effective gas exchange. The canalicular stage later produces respiratory bronchioles and increased vascularization, while the saccular stage produces terminal sacs."
  },
  {
    "id": 5,
    "question": "A newborn develops respiratory distress shortly after birth. The infant is treated with exogenous surfactant, after which oxygenation and lung compliance improve significantly. Which property of surfactant most directly accounts for its ability to prevent alveolar collapse, particularly at low lung volumes?",
    "options": [
      "Increased alveolar fluid production",
      "Reduction of alveolar surface tension",
      "Increased pulmonary capillary pressure",
      "Increased mucus production",
      "Increased airway resistance"
    ],
    "answer": 1,
    "explanation": "Surfactant decreases surface tension at the alveolar air-liquid interface. According to Laplace's law (P = 2T/r), smaller alveoli would otherwise require greater pressure to remain open. Surfactant stabilizes alveoli of different sizes and prevents atelectasis, especially during expiration."
  },
  {
    "id": 6,
    "question": "A newborn develops respiratory distress due to abnormal development of the pulmonary circulation. During fetal life, most blood leaving the right ventricle bypasses the nonfunctioning lungs through a vascular connection to the systemic circulation. Which embryological structure is responsible for this shunt?",
    "options": [
      "Foramen ovale",
      "Ductus arteriosus",
      "Ductus venosus",
      "Umbilical vein",
      "Coronary sinus"
    ],
    "answer": 1,
    "explanation": "The ductus arteriosus connects the pulmonary trunk to the descending aorta during fetal life, allowing right ventricular blood to bypass the high-resistance fetal lungs. After birth, increased oxygen and decreased prostaglandins promote closure, producing the ligamentum arteriosum."
  },
  {
    "id": 7,
    "question": "A pregnant woman undergoes fetal imaging that demonstrates severe pulmonary hypoplasia associated with prolonged oligohydramnios. The fetus has bilateral renal agenesis and therefore produces very little urine. Which factor most directly contributes to the abnormal lung development?",
    "options": [
      "Excess fetal swallowing",
      "Reduced amniotic fluid volume",
      "Increased fetal pulmonary blood flow",
      "Increased surfactant secretion",
      "Premature closure of the ductus arteriosus"
    ],
    "answer": 1,
    "explanation": "Severe oligohydramnios can cause pulmonary hypoplasia by restricting normal lung expansion and development. Bilateral renal agenesis results in markedly decreased fetal urine production, which is a major contributor to amniotic fluid volume during the latter half of pregnancy."
  },
  {
    "id": 8,
    "question": "A premature infant is being evaluated for pulmonary maturity before delivery. The physician explains that one phospholipid increases significantly as fetal lungs mature and becomes an important component of pulmonary surfactant. Which phospholipid is most important?",
    "options": [
      "Sphingomyelin",
      "Dipalmitoylphosphatidylcholine",
      "Cholesterol",
      "Phosphatidylinositol only",
      "Cardiolipin"
    ],
    "answer": 1,
    "explanation": "Dipalmitoylphosphatidylcholine (DPPC) is a major component of pulmonary surfactant and significantly reduces alveolar surface tension. Its increasing production during late gestation reflects maturation of type II pneumocytes."
  },
  {
    "id": 9,
    "question": "A newborn has a congenital pulmonary abnormality caused by excessive development of abnormal cystic tissue derived from the terminal bronchiolar region. The lesion occupies a significant portion of one lung and causes respiratory distress shortly after birth. Which developmental process is most directly involved?",
    "options": [
      "Abnormal branching of the respiratory diverticulum",
      "Failure of neural tube closure",
      "Abnormal development of the forebrain",
      "Failure of cardiac septation",
      "Abnormal formation of the umbilical vessels"
    ],
    "answer": 0,
    "explanation": "The lower respiratory tract develops from the respiratory diverticulum, which repeatedly branches to form the bronchial tree. Abnormal branching and development can produce congenital pulmonary airway malformations, often presenting as cystic lesions in newborns."
  },
  {
    "id": 10,
    "question": "A newborn is diagnosed with a congenital lung anomaly involving abnormal development of the epithelial lining of the respiratory tract. Which germ layer normally gives rise to the epithelial lining of the trachea, bronchi, and alveoli?",
    "options": [
      "Ectoderm",
      "Endoderm",
      "Neural crest",
      "Paraxial mesoderm",
      "Intermediate mesoderm"
    ],
    "answer": 1,
    "explanation": "The respiratory epithelium develops from endoderm of the foregut. Surrounding splanchnic mesoderm forms the connective tissue, cartilage, smooth muscle, and vascular components of the respiratory system."
  },
  {
    "id": 11,
    "question": "A 68-year-old man develops an endobronchial tumor that obstructs the right main bronchus. He develops recurrent pneumonia in the affected region. During bronchoscopy, the physician notes that the right main bronchus is relatively short, wide, and vertically oriented compared with the left. Which anatomical feature best explains why aspirated foreign bodies preferentially enter the right bronchial tree?",
    "options": [
      "The right bronchus is longer and narrower",
      "The right bronchus is more horizontal",
      "The right bronchus is wider and more vertical",
      "The right bronchus lacks cartilage",
      "The right bronchus originates directly from the esophagus"
    ],
    "answer": 2,
    "explanation": "The right main bronchus is shorter, wider, and more vertically oriented than the left. Therefore, aspirated material is more likely to enter the right lung, particularly the right lower lobe depending on the patient's position."
  },
  {
    "id": 12,
    "question": "A patient undergoing thoracic surgery has a lesion involving the nerve responsible for motor innervation of the diaphragm. After surgery, the affected hemidiaphragm moves paradoxically during inspiration. Which nerve has most likely been injured?",
    "options": [
      "Vagus nerve",
      "Phrenic nerve",
      "Intercostal nerve",
      "Sympathetic trunk",
      "Recurrent laryngeal nerve"
    ],
    "answer": 1,
    "explanation": "The phrenic nerve arises from C3–C5 and provides the major motor supply to the diaphragm. Injury can produce unilateral diaphragmatic paralysis. During inspiration, the affected hemidiaphragm may move upward rather than downward because of pressure changes."
  },
  {
    "id": 13,
    "question": "A patient with a large pleural effusion undergoes diagnostic thoracentesis. The physician chooses a site just superior to the upper border of the rib to avoid the main intercostal neurovascular bundle. Where are the main intercostal vein, artery, and nerve normally located?",
    "options": [
      "Along the superior border of the rib",
      "Along the inferior border of the rib",
      "Within the sternum",
      "Within the pleural cavity",
      "Between the visceral pleura and lung tissue"
    ],
    "answer": 1,
    "explanation": "The main intercostal VAN bundle runs in the costal groove along the inferior border of the rib. Therefore, procedures such as thoracentesis are performed just above the rib below the selected intercostal space to minimize injury."
  },
  {
    "id": 14,
    "question": "A patient develops hoarseness after a large mediastinal mass compresses a nerve ascending between the trachea and esophagus. Which nerve is most likely involved?",
    "options": [
      "Right phrenic nerve",
      "Left recurrent laryngeal nerve",
      "Greater splanchnic nerve",
      "Thoracic sympathetic nerve only",
      "Long thoracic nerve"
    ],
    "answer": 1,
    "explanation": "The left recurrent laryngeal nerve loops under the aortic arch and then ascends in the tracheoesophageal groove. Injury causes vocal cord paralysis and hoarseness. The right recurrent laryngeal nerve loops around the right subclavian artery."
  },
  {
    "id": 15,
    "question": "A patient with a large pleural effusion develops severe dyspnea. When standing upright, imaging shows the fluid collecting predominantly at the inferior aspect of the pleural cavity. Which anatomical space is most likely involved?",
    "options": [
      "Costodiaphragmatic recess",
      "Pulmonary apex",
      "Superior mediastinum",
      "Costomediastinal recess only",
      "Posterior mediastinum"
    ],
    "answer": 0,
    "explanation": "The costodiaphragmatic recess is the largest pleural recess and becomes the most dependent area when a person is upright. Pleural fluid therefore accumulates here, often causing blunting of the costophrenic angle on chest radiography."
  },
  {
    "id": 16,
    "question": "A 32-year-old man presents with sudden pleuritic chest pain and dyspnea. Imaging demonstrates a large pulmonary embolus. Blood flow to a portion of the lung is suddenly interrupted while ventilation continues. What change in the affected region's ventilation-perfusion ratio is expected?",
    "options": [
      "V/Q approaches zero",
      "V/Q decreases moderately",
      "V/Q increases markedly",
      "V/Q remains unchanged",
      "V/Q becomes negative"
    ],
    "answer": 2,
    "explanation": "A pulmonary embolus blocks perfusion while ventilation may continue. Therefore, the V/Q ratio becomes very high and can approach infinity if perfusion is completely absent. This produces increased physiological dead space."
  },
  {
    "id": 17,
    "question": "A patient with severe pneumonia has consolidation of the right lower lobe. Although blood continues to perfuse the affected alveoli, inflammatory fluid prevents adequate ventilation. Which physiological abnormality best describes this situation?",
    "options": [
      "Increased V/Q ratio",
      "Low V/Q ratio",
      "Increased dead space only",
      "Increased alveolar ventilation",
      "Complete absence of pulmonary perfusion"
    ],
    "answer": 1,
    "explanation": "In pneumonia, alveoli may remain perfused but become poorly ventilated because they are filled with inflammatory exudate. This produces a low V/Q state and can approach a true shunt when ventilation is essentially absent."
  },
  {
    "id": 18,
    "question": "A healthy person travels rapidly from sea level to a high-altitude region. Within minutes, arterial oxygen tension decreases and peripheral chemoreceptors stimulate increased ventilation. Which additional change occurs initially because of the increased ventilation?",
    "options": [
      "Increased PaCO₂",
      "Decreased PaCO₂",
      "Increased bicarbonate immediately",
      "Respiratory acidosis",
      "Decreased sympathetic activity"
    ],
    "answer": 1,
    "explanation": "High altitude causes hypoxemia, stimulating carotid bodies and increasing ventilation. Hyperventilation causes excessive CO₂ elimination, producing respiratory alkalosis with decreased PaCO₂. Renal bicarbonate excretion develops later as compensation."
  },
  {
    "id": 19,
    "question": "A patient with idiopathic pulmonary fibrosis undergoes pulmonary function testing. His FEV₁ and FVC are both reduced, but the FEV₁/FVC ratio is normal or increased. Which additional finding is most likely?",
    "options": [
      "Increased total lung capacity",
      "Increased residual volume",
      "Decreased total lung capacity",
      "Increased lung compliance",
      "Increased airway resistance as the primary abnormality"
    ],
    "answer": 2,
    "explanation": "Pulmonary fibrosis causes a restrictive pattern characterized by decreased lung volumes, including TLC and FVC. Because FEV₁ decreases proportionally or less than FVC, the FEV₁/FVC ratio is normal or increased. Lung compliance is reduced because the fibrotic lung is stiff."
  },
  {
    "id": 20,
    "question": "A patient with severe emphysema undergoes pulmonary function testing. Destruction of alveolar septa causes loss of elastic recoil and enlargement of distal airspaces. Which additional finding is expected?",
    "options": [
      "Increased DLCO",
      "Decreased DLCO",
      "Decreased lung compliance",
      "Increased elastic recoil",
      "Decreased residual volume"
    ],
    "answer": 1,
    "explanation": "Emphysema destroys alveolar walls, reducing the surface area available for gas exchange, which decreases DLCO. Loss of elastic tissue also causes increased compliance and reduced elastic recoil, leading to expiratory airflow limitation and air trapping. Q21–40"
  },
  {
    "id": 21,
    "question": "A 67-year-old man with a 45-pack-year smoking history presents with chronic cough, hemoptysis, and weight loss. CT demonstrates a centrally located hilar mass. Biopsy reveals malignant polygonal cells with keratin pearls and intercellular bridges. Serum calcium is significantly elevated. Which mechanism most likely explains the hypercalcemia?",
    "options": [
      "Ectopic secretion of ADH",
      "Ectopic secretion of ACTH",
      "Ectopic secretion of PTH-related peptide",
      "Increased calcitonin secretion",
      "Increased renal vitamin D activation"
    ],
    "answer": 2,
    "explanation": "These findings are classic for squamous cell carcinoma of the lung. Squamous cell carcinoma commonly occurs centrally and can produce PTH-related peptide (PTHrP), causing hypercalcemia through increased bone resorption and renal calcium reabsorption. Native PTH is usually suppressed."
  },
  {
    "id": 22,
    "question": "A 61-year-old heavy smoker presents with cough, weight loss, and confusion. Serum sodium is 118 mEq/L. CT reveals a centrally located lung mass, and biopsy shows small cells with scant cytoplasm, nuclear molding, and extensive necrosis. Which paraneoplastic substance is most likely responsible for his electrolyte abnormality?",
    "options": [
      "PTHrP",
      "ADH",
      "Calcitonin",
      "Insulin-like growth factor",
      "Erythropoietin"
    ],
    "answer": 1,
    "explanation": "The tumor is small-cell lung carcinoma, which is strongly associated with smoking and commonly occurs centrally. Small-cell carcinoma can produce ADH, causing SIADH with hyponatremia, low serum osmolality, and inappropriately concentrated urine."
  },
  {
    "id": 23,
    "question": "A 48-year-old nonsmoking woman is found to have a solitary peripheral lung mass. Biopsy demonstrates malignant gland formation with mucin production. Molecular testing identifies an activating mutation in a receptor tyrosine kinase pathway. Which mutation is particularly associated with this type of lung cancer?",
    "options": [
      "EGFR mutation",
      "APC mutation",
      "JAK2 mutation",
      "RET loss-of-function mutation",
      "β-catenin deletion"
    ],
    "answer": 0,
    "explanation": "Adenocarcinoma is the most common lung cancer overall and is particularly common in nonsmokers. It is usually peripheral and can contain gland formation and mucin. Important driver mutations include EGFR, ALK rearrangements, ROS1, and others."
  },
  {
    "id": 24,
    "question": "A patient with severe sepsis develops rapidly progressive dyspnea and hypoxemia. Chest imaging shows bilateral diffuse pulmonary infiltrates, but echocardiography demonstrates normal left ventricular function. Which pathological process best explains his respiratory failure?",
    "options": [
      "Increased pulmonary venous hydrostatic pressure",
      "Increased alveolar-capillary permeability",
      "Isolated pulmonary artery obstruction",
      "Decreased pulmonary blood flow",
      "Increased surfactant production"
    ],
    "answer": 1,
    "explanation": "This patient has ARDS, which results from diffuse alveolar-capillary injury and increased vascular permeability. Protein-rich fluid enters the alveoli, producing pulmonary edema, decreased compliance, severe hypoxemia, and hyaline membrane formation. Sepsis is a major precipitating factor."
  },
  {
    "id": 25,
    "question": "A patient with long-standing smoking exposure develops progressive dyspnea. Histology reveals destruction of alveolar walls without significant fibrosis, producing enlarged distal airspaces. Which structure is primarily destroyed?",
    "options": [
      "Bronchial cartilage",
      "Alveolar septa",
      "Pleural mesothelium",
      "Tracheal smooth muscle",
      "Pulmonary arteries only"
    ],
    "answer": 1,
    "explanation": "The key pathological feature of emphysema is permanent enlargement of airspaces distal to the terminal bronchioles due to destruction of alveolar walls. This reduces gas-exchange surface area and elastic recoil and contributes to airflow obstruction."
  },
  {
    "id": 26,
    "question": "A 56-year-old smoker has a chronic productive cough for more than 3 months in each of two consecutive years. Bronchial biopsy reveals mucus gland enlargement and increased mucus production. Which pathological index is expected to be increased?",
    "options": [
      "FEV₁/FVC ratio",
      "Reid index",
      "DLCO",
      "Alveolar surface area",
      "Lung elastic recoil"
    ],
    "answer": 1,
    "explanation": "This is chronic bronchitis, characterized by mucus gland hypertrophy and hyperplasia. The Reid index increases because the thickness of mucus glands relative to the bronchial wall becomes greater. Excess mucus contributes to airway obstruction."
  },
  {
    "id": 27,
    "question": "A 25-year-old woman has recurrent episodes of wheezing, cough, and chest tightness triggered by pollen exposure. During an acute episode, airway smooth muscle contracts and mucus secretion increases. Which immune mechanism is most closely associated with her condition?",
    "options": [
      "IgE-mediated type I hypersensitivity",
      "IgG-mediated cytotoxicity",
      "Immune-complex deposition",
      "IgM-mediated complement activation",
      "Direct neutrophil destruction"
    ],
    "answer": 0,
    "explanation": "Allergic asthma involves a Th2-mediated response. IL-4 and IL-13 promote IgE production, while IL-5 promotes eosinophil activation. Allergen-mediated cross-linking of IgE on mast cells causes release of histamine, leukotrienes, and other mediators, resulting in bronchoconstriction and inflammation."
  },
  {
    "id": 28,
    "question": "A patient with recurrent respiratory infections has chronic productive cough and hemoptysis. CT shows permanent dilation of multiple bronchi with thickened bronchial walls. Which pathological mechanism best explains this condition?",
    "options": [
      "Reversible bronchoconstriction only",
      "Destruction of bronchial wall elastic and muscular tissue",
      "Destruction of alveolar septa only",
      "Increased pleural fluid production",
      "Pulmonary artery vasoconstriction alone"
    ],
    "answer": 1,
    "explanation": "Bronchiectasis results from chronic inflammation and destruction of bronchial wall structural components, causing permanent bronchial dilation. Patients often develop recurrent infections, productive cough, and hemoptysis. Cystic fibrosis and impaired mucociliary clearance are important causes."
  },
  {
    "id": 29,
    "question": "A 30-year-old man with recurrent respiratory infections is found to have bronchiectasis, chronic sinusitis, and infertility. Imaging reveals situs inversus. Which cellular abnormality most likely explains the entire syndrome?",
    "options": [
      "Defective dynein arms",
      "Defective CFTR chloride channel",
      "Defective type IV collagen",
      "Defective surfactant protein",
      "Defective elastin synthesis"
    ],
    "answer": 0,
    "explanation": "This is primary ciliary dyskinesia/Kartagener syndrome. Defective dynein arms impair ciliary movement, causing recurrent sinus and respiratory infections and bronchiectasis. Sperm flagellar dysfunction causes infertility, while abnormal embryonic ciliary movement can produce situs inversus."
  },
  {
    "id": 30,
    "question": "A patient with cystic fibrosis has recurrent pulmonary infections and pancreatic insufficiency. Genetic testing demonstrates a mutation affecting a chloride channel on epithelial cells. Which change occurs in the respiratory tract?",
    "options": [
      "Increased water content of airway mucus",
      "Dehydrated, thick mucus secretions",
      "Increased ciliary beating",
      "Decreased bacterial colonization",
      "Increased airway lumen diameter"
    ],
    "answer": 1,
    "explanation": "CFTR dysfunction causes abnormal chloride and water transport, producing viscous dehydrated mucus. This obstructs airways and impairs mucociliary clearance, predisposing to recurrent infections and bronchiectasis. Pancreatic duct obstruction causes exocrine pancreatic insufficiency."
  },
  {
    "id": 31,
    "question": "A 42-year-old woman develops progressive dyspnea and dry cough. CT demonstrates bilateral hilar lymphadenopathy. Biopsy reveals noncaseating granulomas composed of epithelioid macrophages and giant cells. Serum calcium is elevated. Which mechanism best explains the hypercalcemia?",
    "options": [
      "Increased PTH secretion",
      "Increased calcitriol production by activated macrophages",
      "Increased calcitonin secretion",
      "PTHrP secretion by malignant cells",
      "Increased intestinal phosphate excretion"
    ],
    "answer": 1,
    "explanation": "The findings indicate sarcoidosis. Activated macrophages within granulomas express extrarenal 1α-hydroxylase, increasing conversion of vitamin D to calcitriol. Increased calcitriol increases intestinal calcium absorption, producing hypercalcemia and sometimes hypercalciuria."
  },
  {
    "id": 32,
    "question": "A patient develops hemoptysis, anemia, and rapidly progressive renal failure. Kidney biopsy demonstrates crescentic glomerulonephritis, while lung biopsy reveals linear deposition of IgG along alveolar basement membranes. Which antigen is targeted?",
    "options": [
      "α3 chain of type IV collagen",
      "Double-stranded DNA",
      "Proteinase-3",
      "Myeloperoxidase",
      "Laminin only"
    ],
    "answer": 0,
    "explanation": "Goodpasture syndrome results from antibodies against the α3 chain of type IV collagen found in glomerular and alveolar basement membranes. Immunofluorescence demonstrates a characteristic linear IgG pattern. Patients develop pulmonary hemorrhage and rapidly progressive glomerulonephritis."
  },
  {
    "id": 33,
    "question": "A patient develops progressive dyspnea and dry cough after years of occupational exposure to asbestos. Chest imaging reveals pleural plaques and diffuse pleural thickening. Several years later, he develops a large pleural mass. Which malignancy is most strongly associated with this exposure?",
    "options": [
      "Small-cell carcinoma",
      "Mesothelioma",
      "Carcinoid tumor",
      "Hamartoma",
      "Adenoid cystic carcinoma"
    ],
    "answer": 1,
    "explanation": "Malignant mesothelioma arises from pleural mesothelial cells and is strongly associated with asbestos exposure. Pleural plaques are an important marker of previous asbestos exposure. Smoking does not have the same direct relationship with mesothelioma as it does with bronchogenic carcinoma."
  },
  {
    "id": 34,
    "question": "A 45-year-old man works in a sandblasting facility and develops progressive dyspnea. Imaging demonstrates multiple upper-lobe nodules and progressive fibrosis. He later develops cavitary lesions and is diagnosed with tuberculosis. Why does his occupational exposure increase susceptibility to tuberculosis?",
    "options": [
      "Silica directly activates T cells",
      "Silica impairs macrophage function",
      "Silica increases surfactant production",
      "Silica blocks pulmonary arteries",
      "Silica increases IgE production"
    ],
    "answer": 1,
    "explanation": "Silicosis is caused by inhalation of crystalline silica and produces upper-lobe nodular fibrosis. Silica damages and impairs alveolar macrophages, increasing susceptibility to Mycobacterium tuberculosis. This association is a classic exam concept."
  },
  {
    "id": 35,
    "question": "A patient with severe pneumonia develops respiratory failure. Histological examination of the lung demonstrates diffuse alveolar damage with eosinophilic material lining the alveolar walls. What is this material primarily composed of?",
    "options": [
      "Keratin",
      "Fibrin-rich edema fluid and cellular debris",
      "Amyloid",
      "Caseous material",
      "Calcium deposits"
    ],
    "answer": 1,
    "explanation": "The eosinophilic hyaline membranes seen in diffuse alveolar damage are composed largely of fibrin-rich proteinaceous edema fluid mixed with necrotic epithelial debris. They are characteristic of the pathological process underlying ARDS and impair oxygen diffusion."
  },
  {
    "id": 36,
    "question": "A 64-year-old smoker develops progressive cough and weight loss. CT shows a central hilar mass. Biopsy demonstrates small malignant cells with scant cytoplasm, finely granular chromatin, nuclear molding, and extensive necrosis. Which additional feature is most likely?",
    "options": [
      "Slow growth and excellent prognosis",
      "Early hematogenous and lymphatic metastasis",
      "Keratin pearl formation",
      "PTHrP production as the most common syndrome",
      "Peripheral location in most cases"
    ],
    "answer": 1,
    "explanation": "Small-cell carcinoma is an aggressive neuroendocrine tumor strongly associated with smoking. It grows rapidly and metastasizes early, often making surgical resection inappropriate. It may produce ADH or ACTH as paraneoplastic syndromes."
  },
  {
    "id": 37,
    "question": "A patient with a central lung mass develops weakness, fatigue, and proximal muscle weakness. Laboratory testing reveals hypokalemia, hyperglycemia, and elevated cortisol. Which tumor is most likely responsible?",
    "options": [
      "Squamous cell carcinoma",
      "Small-cell carcinoma",
      "Adenocarcinoma",
      "Mesothelioma",
      "Hamartoma"
    ],
    "answer": 1,
    "explanation": "Small-cell lung carcinoma can produce ectopic ACTH, leading to Cushing syndrome. Excess cortisol causes hyperglycemia, hypertension, hypokalemia, muscle weakness, and other manifestations. This is an important paraneoplastic association."
  },
  {
    "id": 38,
    "question": "A patient with COPD has a prolonged smoking history and develops increasing dyspnea. Pulmonary function testing reveals reduced FEV₁/FVC, increased residual volume, and increased total lung capacity. Which pathological mechanism best accounts for the increased residual volume?",
    "options": [
      "Increased elastic recoil",
      "Premature small-airway closure during expiration",
      "Decreased airway resistance",
      "Increased surfactant production",
      "Increased pulmonary capillary recruitment"
    ],
    "answer": 1,
    "explanation": "In obstructive disease, especially emphysema, loss of elastic recoil and airway wall support causes dynamic airway compression and premature airway closure during expiration. Air becomes trapped distal to the closed airways, increasing RV and often TLC."
  },
  {
    "id": 39,
    "question": "A patient with chronic asthma has persistent airway obstruction despite treatment. Histology shows smooth muscle hypertrophy, subepithelial fibrosis, increased mucus glands, and thickening of the basement membrane. Which process best explains these chronic changes?",
    "options": [
      "Airway remodeling",
      "Alveolar destruction",
      "Pulmonary infarction",
      "Pleural fibrosis",
      "Pulmonary venous thrombosis"
    ],
    "answer": 0,
    "explanation": "Chronic asthma can produce airway remodeling, including smooth muscle hypertrophy, subepithelial fibrosis, mucus gland enlargement, and increased vascularity. Unlike purely acute bronchospasm, these structural changes can contribute to more persistent airflow limitation."
  },
  {
    "id": 40,
    "question": "A patient develops progressive dyspnea following a severe viral infection. CT shows diffuse bilateral ground-glass opacities and interstitial thickening. Lung biopsy demonstrates organizing fibrosis and diffuse alveolar epithelial injury. Which type of respiratory pathology is most consistent with this presentation?",
    "options": [
      "Diffuse interstitial lung disease",
      "Isolated pleural effusion",
      "Large airway obstruction",
      "Pulmonary embolism only",
      "Isolated pneumothorax"
    ],
    "answer": 0,
    "explanation": "Diffuse interstitial lung diseases involve the pulmonary interstitium and often produce restrictive physiology, reduced compliance, and impaired diffusion. Imaging may show reticular or ground-glass abnormalities, while progressive fibrosis can eventually cause architectural distortion and honeycombing. Q41–60"
  },
  {
    "id": 41,
    "question": "A 59-year-old man with chronic smoking exposure presents with worsening dyspnea. Pulmonary function testing reveals FEV₁ of 1.2 L, FVC of 3.0 L, and an FEV₁/FVC ratio of 40%. Which pathological process most likely explains this pattern?",
    "options": [
      "Decreased lung compliance due to fibrosis",
      "Increased airway resistance with expiratory airflow limitation",
      "Decreased total lung capacity due to pleural disease",
      "Increased alveolar-capillary membrane thickness only",
      "Reduced respiratory muscle strength only"
    ],
    "answer": 1,
    "explanation": "An FEV₁/FVC ratio of 40% indicates obstructive lung disease. COPD causes increased airway resistance and difficulty emptying the lungs during expiration. The resulting air trapping can increase residual volume and total lung capacity."
  },
  {
    "id": 42,
    "question": "A 50-year-old woman has progressive exertional dyspnea. Pulmonary function testing reveals reduced TLC and FVC, while FEV₁/FVC is increased. DLCO is also reduced. Which diagnosis best fits this physiological pattern?",
    "options": [
      "Emphysema",
      "Pulmonary fibrosis",
      "Chronic bronchitis",
      "Uncomplicated asthma",
      "Acute pulmonary embolism only"
    ],
    "answer": 1,
    "explanation": "Pulmonary fibrosis produces a restrictive pattern with reduced TLC and FVC and a normal or increased FEV₁/FVC ratio. Fibrotic thickening of the alveolar-capillary membrane also reduces DLCO, impairing oxygen diffusion."
  },
  {
    "id": 43,
    "question": "A patient with severe pulmonary fibrosis has significant hypoxemia that becomes worse during exercise. His PaCO₂ remains relatively normal. Which explanation best accounts for the greater impairment in oxygenation?",
    "options": [
      "Carbon dioxide is less soluble than oxygen",
      "Oxygen has a lower diffusion capacity than carbon dioxide",
      "Hemoglobin cannot bind carbon dioxide",
      "Pulmonary blood flow stops during exercise",
      "Alveolar ventilation becomes zero"
    ],
    "answer": 1,
    "explanation": "CO₂ diffuses across the alveolar-capillary membrane much more readily than O₂. Therefore, diseases that increase diffusion distance, such as pulmonary fibrosis, often cause significant hypoxemia before substantial CO₂ retention occurs."
  },
  {
    "id": 44,
    "question": "A patient with a massive pulmonary embolism develops sudden hypoxemia and tachycardia. Which physiological change occurs in the affected pulmonary vascular bed?",
    "options": [
      "Increased perfusion with normal ventilation",
      "Ventilation without adequate perfusion",
      "Complete alveolar collapse in every region",
      "Low V/Q due to increased blood flow",
      "Increased pulmonary capillary recruitment"
    ],
    "answer": 1,
    "explanation": "A pulmonary embolus blocks pulmonary arterial blood flow. The affected alveoli remain ventilated but poorly perfused, resulting in high V/Q regions and increased physiological dead space. Severe embolism can also cause acute right ventricular strain."
  },
  {
    "id": 45,
    "question": "A patient with advanced COPD develops chronic hypercapnia. Arterial blood gas analysis shows pH 7.36, PaCO₂ 60 mmHg, and HCO₃⁻ 33 mEq/L. Which physiological adaptation explains the elevated bicarbonate?",
    "options": [
      "Increased renal bicarbonate excretion",
      "Increased renal hydrogen ion secretion and bicarbonate retention",
      "Acute pulmonary hyperventilation",
      "Decreased renal ammonium production",
      "Increased gastrointestinal bicarbonate loss"
    ],
    "answer": 1,
    "explanation": "This represents chronic respiratory acidosis with renal compensation. Chronic CO₂ retention increases H⁺ generation, stimulating the kidneys to increase H⁺ excretion and conserve/generate bicarbonate. The elevated HCO₃⁻ helps normalize the pH."
  },
  {
    "id": 46,
    "question": "A healthy person begins intense exercise. Oxygen consumption increases dramatically, but arterial oxygen saturation remains nearly normal. Which pulmonary vascular response contributes to maintaining efficient gas exchange?",
    "options": [
      "Widespread pulmonary vasoconstriction",
      "Recruitment and distension of pulmonary capillaries",
      "Complete closure of apical vessels",
      "Decreased pulmonary blood flow",
      "Increased pulmonary dead space"
    ],
    "answer": 1,
    "explanation": "During exercise, increased cardiac output increases pulmonary blood flow. Pulmonary capillaries undergo recruitment and distension, increasing vascular surface area and reducing pulmonary vascular resistance. This facilitates gas exchange without a major rise in pulmonary arterial pressure."
  },
  {
    "id": 47,
    "question": "A patient with severe anemia has a hemoglobin concentration of 6 g/dL but a normal PaO₂. Despite adequate pulmonary gas exchange, he develops tissue hypoxia. Which variable is most directly reduced?",
    "options": [
      "Alveolar PO₂",
      "PaO₂",
      "Arterial oxygen content",
      "Inspired oxygen concentration",
      "Pulmonary ventilation"
    ],
    "answer": 2,
    "explanation": "PaO₂ measures dissolved oxygen, not the amount bound to hemoglobin. Since most oxygen is transported bound to hemoglobin, severe anemia significantly reduces arterial oxygen content (CaO₂) despite normal PaO₂. This reduces oxygen delivery to tissues."
  },
  {
    "id": 48,
    "question": "A patient with diabetic ketoacidosis develops deep, rapid respirations. ABG reveals pH 7.18, low bicarbonate, and decreased PaCO₂. Which mechanism is responsible for the decreased PaCO₂?",
    "options": [
      "Decreased respiratory drive",
      "Increased alveolar ventilation",
      "Increased CO₂ production",
      "Decreased respiratory rate",
      "Increased dead space ventilation"
    ],
    "answer": 1,
    "explanation": "The patient has metabolic acidosis. Respiratory compensation occurs through increased ventilation, known as Kussmaul respiration, which removes CO₂ and lowers PaCO₂. This reduces carbonic acid and partially compensates for the metabolic acidosis."
  },
  {
    "id": 49,
    "question": "A patient experiences acute anxiety and begins hyperventilating. He develops lightheadedness and tingling around the mouth and fingers. ABG shows decreased PaCO₂ and increased pH. Which additional change may occur because of this acute respiratory alkalosis?",
    "options": [
      "Increased ionized calcium",
      "Decreased ionized calcium",
      "Increased serum potassium due to cell shift",
      "Severe metabolic acidosis",
      "Increased PaCO₂"
    ],
    "answer": 1,
    "explanation": "Acute respiratory alkalosis increases blood pH, causing more calcium to bind to albumin. This decreases ionized calcium, producing paresthesias and sometimes carpopedal spasm. Total serum calcium remains relatively unchanged."
  },
  {
    "id": 50,
    "question": "A patient with severe COPD has chronic hypoxemia. Over several years, pulmonary vascular resistance progressively increases and the right ventricle becomes hypertrophied. Which mechanism is primarily responsible for this cardiovascular complication?",
    "options": [
      "Chronic systemic hypertension",
      "Chronic hypoxic pulmonary vasoconstriction",
      "Increased left ventricular preload",
      "Mitral valve obstruction",
      "Increased pulmonary venous compliance"
    ],
    "answer": 1,
    "explanation": "Chronic alveolar hypoxia causes pulmonary arteriolar vasoconstriction. Persistent vasoconstriction increases pulmonary vascular resistance and produces pulmonary hypertension. The right ventricle responds with hypertrophy and eventually may fail, producing cor pulmonale."
  },
  {
    "id": 51,
    "question": "A 67-year-old chronic smoker presents with persistent cough, weight loss, hemoptysis, and hypercalcemia. CT reveals a central hilar mass. Biopsy demonstrates malignant squamous cells with keratin pearls and intercellular bridges. Which additional molecular/pathological feature is most consistent with this malignancy?",
    "options": [
      "Frequent ectopic ADH production",
      "PTHrP-mediated hypercalcemia",
      "Early production of insulin",
      "Noncaseating granulomas",
      "Diffuse pleural plaques as the primary lesion"
    ],
    "answer": 1,
    "explanation": "This is squamous cell carcinoma of the lung. Its central location and association with smoking are classic. Squamous cell carcinoma commonly produces PTHrP, causing hypercalcemia. This paraneoplastic syndrome is particularly high-yield for NLE and USMLE questions."
  },
  {
    "id": 52,
    "question": "A 63-year-old smoker presents with progressive cough and weakness. CT reveals a centrally located lung mass, and biopsy shows small cells with hyperchromatic nuclei, scant cytoplasm, nuclear molding, and extensive necrosis. Laboratory testing reveals hyponatremia with low serum osmolality and inappropriately concentrated urine. Which tumor product best explains these findings?",
    "options": [
      "PTHrP",
      "ADH",
      "Calcitonin",
      "Aldosterone",
      "Erythropoietin"
    ],
    "answer": 1,
    "explanation": "This is small-cell lung carcinoma with SIADH. Ectopic ADH causes water retention, resulting in dilutional hyponatremia and decreased serum osmolality. Urine remains inappropriately concentrated because ADH promotes renal water reabsorption through collecting duct V2 receptors."
  },
  {
    "id": 53,
    "question": "A 55-year-old smoker presents with cough and weight loss. Biopsy of a central lung lesion demonstrates small malignant cells with neuroendocrine features. The physician explains that this tumor is particularly aggressive and frequently metastasizes before diagnosis. Which characteristic best explains why surgical resection is usually not the primary treatment?",
    "options": [
      "It rarely metastasizes",
      "It usually remains localized",
      "It has early widespread metastasis",
      "It is always benign",
      "It arises only in the pleura"
    ],
    "answer": 2,
    "explanation": "Small-cell lung carcinoma is highly aggressive, has rapid growth, and frequently metastasizes early. Consequently, treatment is usually systemic, primarily chemotherapy and/or radiation depending on stage, rather than surgical resection as the main treatment."
  },
  {
    "id": 54,
    "question": "A 59-year-old woman with no significant smoking history is found to have a peripheral lung nodule. Histology demonstrates malignant glandular structures containing mucin. Molecular testing identifies an activating EGFR mutation. Which targeted medication would be most appropriate?",
    "options": [
      "Erlotinib",
      "Rituximab",
      "Imatinib",
      "Trastuzumab",
      "Methotrexate"
    ],
    "answer": 0,
    "explanation": "EGFR-mutated non-small-cell lung cancers can respond to EGFR tyrosine kinase inhibitors, including erlotinib, gefitinib, afatinib, or osimertinib depending on the specific mutation and clinical setting. Adenocarcinoma is the lung cancer most commonly associated with these actionable driver mutations."
  },
  {
    "id": 55,
    "question": "A patient develops acute respiratory failure following septic shock. Chest radiography demonstrates bilateral diffuse opacities. Pulmonary artery wedge pressure is normal, and echocardiography shows preserved left ventricular function. Which histological finding would most likely be present?",
    "options": [
      "Hyaline membranes",
      "Keratin pearls",
      "Caseous granulomas",
      "Pleural plaques",
      "Alveolar septal destruction without edema"
    ],
    "answer": 0,
    "explanation": "The patient has ARDS, characterized pathologically by diffuse alveolar damage. The acute exudative phase produces interstitial and alveolar edema, epithelial injury, and hyaline membrane formation. The edema is not primarily caused by increased hydrostatic pressure from left-sided heart failure."
  },
  {
    "id": 56,
    "question": "A 28-year-old woman develops recurrent wheezing and cough. During bronchoscopy, thick mucus plugs are visualized. Sputum microscopy shows numerous eosinophils and Charcot-Leyden crystals. Which substance is most directly associated with eosinophil recruitment in this disease?",
    "options": [
      "IL-5",
      "IL-1",
      "TNF-β only",
      "IFN-γ",
      "IL-8 only"
    ],
    "answer": 0,
    "explanation": "IL-5 promotes eosinophil differentiation, recruitment, and survival and is strongly associated with eosinophilic asthma. Charcot-Leyden crystals are derived from eosinophil breakdown products. Asthma may also involve IL-4 and IL-13, which promote IgE-mediated responses and mucus production."
  },
  {
    "id": 57,
    "question": "A patient with severe asthma develops persistent airway obstruction over many years. Biopsy shows thickened basement membrane, subepithelial fibrosis, mucus gland hyperplasia, and smooth muscle hypertrophy. Which term best describes these structural changes?",
    "options": [
      "Pulmonary remodeling",
      "Pulmonary infarction",
      "Pleural thickening",
      "Alveolar emphysema",
      "Pulmonary edema"
    ],
    "answer": 0,
    "explanation": "Chronic asthma produces airway remodeling. Repeated inflammation and injury stimulate subepithelial fibrosis, smooth muscle hypertrophy, increased mucus glands, and vascular changes. These structural abnormalities can make airflow limitation less reversible over time."
  },
  {
    "id": 58,
    "question": "A 46-year-old man develops recurrent pneumonia, copious foul-smelling sputum, and hemoptysis. CT reveals dilated bronchi extending toward the pleural surface, with a “signet-ring” appearance. Which pathological process is most likely responsible?",
    "options": [
      "Permanent destruction and dilation of bronchial walls",
      "Reversible bronchial smooth muscle contraction",
      "Destruction of alveolar septa only",
      "Pulmonary artery thrombosis",
      "Pleural fluid accumulation"
    ],
    "answer": 0,
    "explanation": "The findings are characteristic of bronchiectasis. Chronic infection and inflammation destroy bronchial smooth muscle, elastic tissue, and supporting structures, resulting in permanent dilation. The signet-ring sign occurs when an enlarged bronchus lies adjacent to a relatively smaller pulmonary artery."
  },
  {
    "id": 59,
    "question": "A 40-year-old man has recurrent respiratory infections, chronic sinusitis, infertility, and situs inversus. Electron microscopy of respiratory cilia shows absent dynein arms. Which abnormality most directly causes impaired mucociliary clearance?",
    "options": [
      "Reduced ciliary movement",
      "Increased mucus hydration",
      "Increased surfactant production",
      "Increased alveolar macrophage migration",
      "Increased pulmonary blood flow"
    ],
    "answer": 0,
    "explanation": "Dynein arms provide the motor activity required for normal ciliary beating. Their absence causes primary ciliary dyskinesia, leading to impaired mucociliary clearance, recurrent sinusitis, bronchiectasis, and respiratory infections. Abnormal sperm motility and situs inversus may also occur."
  },
  {
    "id": 60,
    "question": "A 35-year-old patient with cystic fibrosis has recurrent pulmonary infections and thick airway secretions. His sputum cultures repeatedly grow Pseudomonas aeruginosa. Which pathological feature is most likely to develop over time?",
    "options": [
      "Bronchiectasis",
      "Pulmonary embolism",
      "Isolated pleural effusion",
      "Mesothelioma",
      "Silicosis"
    ],
    "answer": 0,
    "explanation": "Chronic infection and mucus obstruction in cystic fibrosis cause repeated airway inflammation and structural destruction, leading to bronchiectasis. Pseudomonas aeruginosa is a particularly important pathogen in established CF lung disease. Q61–80"
  },
  {
    "id": 61,
    "question": "A 70-year-old man with a long smoking history develops progressive dyspnea and chronic productive cough. Pulmonary function testing shows severe airflow obstruction and increased residual volume. Histology reveals destruction of alveolar septa and enlargement of airspaces. Which additional physiological change is expected?",
    "options": [
      "Increased DLCO",
      "Decreased lung compliance",
      "Increased elastic recoil",
      "Decreased DLCO",
      "Decreased total lung capacity"
    ],
    "answer": 3,
    "explanation": "Destruction of alveolar septa in emphysema decreases the surface area available for gas exchange, causing reduced DLCO. Loss of elastic fibers increases compliance and decreases elastic recoil, contributing to airway collapse during expiration and air trapping."
  },
  {
    "id": 62,
    "question": "A 52-year-old man with chronic cough has a chest CT showing hyperinflation. Histology reveals enlarged airspaces distal to terminal bronchioles with destruction of alveolar walls. Which region of the lung is classically most affected in smoking-related disease?",
    "options": [
      "Entire acinus uniformly",
      "Respiratory bronchioles with centrilobular involvement",
      "Pleural mesothelium",
      "Large bronchi only",
      "Pulmonary veins"
    ],
    "answer": 1,
    "explanation": "Smoking classically causes centrilobular (centriacinar) emphysema, predominantly affecting respiratory bronchioles in the upper lobes. In contrast, α₁-antitrypsin deficiency causes panacinar emphysema, often more prominent in the lower lobes."
  },
  {
    "id": 63,
    "question": "A 35-year-old nonsmoking woman presents with severe emphysema at a relatively young age. Laboratory testing demonstrates markedly reduced α₁-antitrypsin levels. Which mechanism explains the development of emphysema?",
    "options": [
      "Increased neutrophil elastase inhibition",
      "Unopposed elastase-mediated destruction of alveolar tissue",
      "Excess surfactant production",
      "Increased collagen synthesis",
      "Pulmonary artery thrombosis"
    ],
    "answer": 1,
    "explanation": "α₁-antitrypsin normally inhibits neutrophil elastase. Deficiency allows excessive elastase activity, causing destruction of alveolar walls and panacinar emphysema. Severe disease often involves the lower lung zones and can occur at a younger age."
  },
  {
    "id": 64,
    "question": "A patient with chronic obstructive pulmonary disease develops hypoxemia and hypercapnia. Over time, he develops increased hematocrit and clubbing is noted. Which mechanism explains the elevated hematocrit?",
    "options": [
      "Increased erythropoietin production due to chronic hypoxia",
      "Increased PTH secretion",
      "Decreased renal oxygen sensing",
      "Increased plasma volume",
      "Reduced erythrocyte production"
    ],
    "answer": 0,
    "explanation": "Chronic hypoxemia stimulates the kidneys to produce erythropoietin, increasing red blood cell production and causing secondary polycythemia. This is a compensatory attempt to increase blood oxygen-carrying capacity."
  },
  {
    "id": 65,
    "question": "A patient with chronic lung disease develops pulmonary hypertension and right ventricular hypertrophy. Which histological change is expected in the pulmonary arterioles after prolonged pulmonary hypertension?",
    "options": [
      "Medial hypertrophy",
      "Complete absence of smooth muscle",
      "Alveolar septal destruction only",
      "Pleural calcification",
      "Bronchial gland atrophy"
    ],
    "answer": 0,
    "explanation": "Chronic pulmonary hypertension causes remodeling of pulmonary arteries and arterioles, including medial smooth muscle hypertrophy and intimal changes. This increases pulmonary vascular resistance and places an increased pressure load on the right ventricle."
  },
  {
    "id": 66,
    "question": "A 42-year-old woman presents with progressive dyspnea, dry cough, and reduced exercise tolerance. HRCT reveals bilateral peripheral reticular opacities, traction bronchiectasis, and honeycombing predominantly at the lung bases. Which histological pattern is most likely?",
    "options": [
      "Usual interstitial pneumonia",
      "Diffuse alveolar damage only",
      "Bronchopneumonia",
      "Centrilobular emphysema",
      "Sarcoid granulomas"
    ],
    "answer": 0,
    "explanation": "The combination of basal and peripheral reticular abnormalities, traction bronchiectasis and honeycombing is characteristic of a usual interstitial pneumonia (UIP) pattern. Idiopathic pulmonary fibrosis is the classic clinical disease associated with UIP."
  },
  {
    "id": 67,
    "question": "A patient with interstitial lung disease has progressive dyspnea and clubbing. Pulmonary function testing demonstrates reduced FVC and TLC. Which pathological change is primarily responsible for the restrictive physiology?",
    "options": [
      "Increased airway mucus",
      "Reduced lung compliance due to fibrosis",
      "Increased bronchial smooth muscle contraction",
      "Destruction of pulmonary arteries",
      "Increased alveolar surface area"
    ],
    "answer": 1,
    "explanation": "Interstitial fibrosis deposits extracellular matrix within the pulmonary interstitium, making the lungs stiff and less compliant. Patients compensate by taking rapid, shallow breaths. Lung volumes decrease, producing a restrictive pattern."
  },
  {
    "id": 68,
    "question": "A 43-year-old woman presents with cough, bilateral hilar lymphadenopathy, erythema nodosum, and uveitis. Lung biopsy reveals noncaseating granulomas. Which additional laboratory abnormality may occur because of the underlying pathological process?",
    "options": [
      "Hypercalcemia",
      "Severe hypocalcemia",
      "Hypernatremia",
      "Low calcitriol",
      "Severe hyperkalemia"
    ],
    "answer": 0,
    "explanation": "Sarcoid macrophages can express 1α-hydroxylase, increasing calcitriol production. Increased calcitriol enhances intestinal calcium absorption and may produce hypercalcemia and hypercalciuria. Bilateral hilar lymphadenopathy and noncaseating granulomas strongly support sarcoidosis."
  },
  {
    "id": 69,
    "question": "A patient with pulmonary sarcoidosis develops worsening dyspnea. Histology demonstrates tightly formed noncaseating granulomas. Which cytokine-driven immune response is most important in granuloma formation?",
    "options": [
      "Th1-mediated IFN-γ activation of macrophages",
      "IgE-mediated mast-cell activation",
      "Th2-mediated eosinophil activation only",
      "Complement-mediated neutrophil destruction",
      "IgM-mediated hemolysis"
    ],
    "answer": 0,
    "explanation": "Granulomatous inflammation is strongly associated with Th1 responses. IFN-γ activates macrophages, promoting their transformation into epithelioid cells and giant cells. Sarcoidosis produces noncaseating granulomas, although the exact triggering antigen is often unknown."
  },
  {
    "id": 70,
    "question": "A 31-year-old woman develops hemoptysis and rapidly progressive renal failure. Serum testing reveals antibodies against the glomerular basement membrane. Which renal histological finding would most likely accompany the pulmonary disease?",
    "options": [
      "Minimal change disease",
      "Crescentic glomerulonephritis",
      "Membranous nephropathy",
      "Diabetic nodules",
      "Amyloid deposition"
    ],
    "answer": 1,
    "explanation": "Goodpasture syndrome causes rapidly progressive glomerulonephritis due to anti-GBM antibodies. Biopsy typically shows crescents, while immunofluorescence demonstrates linear IgG deposition along the basement membrane."
  },
  {
    "id": 71,
    "question": "A patient with a long history of asbestos exposure develops progressive dyspnea. Imaging demonstrates diffuse pleural thickening and a large pleural mass. Histology shows malignant cells derived from mesothelial tissue. Which additional finding would support the diagnosis?",
    "options": [
      "Pleural plaques",
      "Keratin pearls only",
      "Noncaseating granulomas",
      "Upper-lobe cavitation",
      "Bronchial mucus gland hypertrophy"
    ],
    "answer": 0,
    "explanation": "Pleural plaques are strongly associated with asbestos exposure and can accompany malignant mesothelioma. Mesothelioma arises from pleural mesothelial cells and may present decades after occupational exposure."
  },
  {
    "id": 72,
    "question": "A patient who worked for decades in coal mining develops progressive dyspnea. Imaging reveals multiple small pulmonary nodules and upper-lobe fibrosis. Which occupational disease is most likely?",
    "options": [
      "Coal worker pneumoconiosis",
      "Asbestosis",
      "Silicosis only",
      "Hypersensitivity pneumonitis",
      "Sarcoidosis"
    ],
    "answer": 0,
    "explanation": "Coal dust inhalation causes coal worker pneumoconiosis, ranging from simple anthracosis to progressive massive fibrosis. Simple disease produces small upper-lobe nodules, while severe disease can produce large areas of fibrosis and respiratory impairment."
  },
  {
    "id": 73,
    "question": "A farmer develops recurrent episodes of cough, fever, chills, and dyspnea several hours after exposure to moldy hay. Imaging demonstrates diffuse interstitial infiltrates. Which immunological mechanism is most likely involved?",
    "options": [
      "Hypersensitivity pneumonitis",
      "IgE-mediated asthma only",
      "Anti-GBM disease",
      "Immune thrombocytopenia",
      "Complement deficiency"
    ],
    "answer": 0,
    "explanation": "Hypersensitivity pneumonitis results from inhalation of organic antigens and involves immune-mediated inflammation, often with type III and type IV hypersensitivity mechanisms. “Farmer's lung” caused by moldy hay is a classic example."
  },
  {
    "id": 74,
    "question": "A patient with hypersensitivity pneumonitis undergoes lung biopsy after repeated antigen exposure. Which histological finding is most likely?",
    "options": [
      "Noncaseating granulomas and interstitial inflammation",
      "Keratin pearls",
      "Hyaline membranes only",
      "Alveolar septal destruction without inflammation",
      "Pleural plaques"
    ],
    "answer": 0,
    "explanation": "Chronic hypersensitivity pneumonitis commonly demonstrates interstitial lymphocytic inflammation and poorly formed noncaseating granulomas. Continued exposure can result in pulmonary fibrosis and restrictive lung physiology."
  },
  {
    "id": 75,
    "question": "A patient develops sudden pleuritic chest pain and hemoptysis several days after prolonged immobilization. CT angiography shows a pulmonary embolus. Which histological complication can occur if the embolus reaches a distal pulmonary artery supplying a peripheral region?",
    "options": [
      "Pulmonary infarction",
      "Bronchogenic carcinoma",
      "Mesothelioma",
      "Silicosis",
      "Sarcoidosis"
    ],
    "answer": 0,
    "explanation": "A distal pulmonary embolus can produce pulmonary infarction, particularly when bronchial circulation cannot adequately compensate. Infarcts are typically hemorrhagic and wedge-shaped with the base toward the pleural surface. Pleuritic pain and hemoptysis may occur."
  },
  {
    "id": 76,
    "question": "A patient with a massive pulmonary embolism develops sudden hypotension, tachycardia, distended neck veins, and severe dyspnea. Echocardiography demonstrates acute right ventricular dilation. What is the immediate hemodynamic problem?",
    "options": [
      "Acute left ventricular volume overload",
      "Increased right ventricular afterload",
      "Decreased systemic vascular resistance only",
      "Increased pulmonary venous return",
      "Mitral valve obstruction"
    ],
    "answer": 1,
    "explanation": "A massive pulmonary embolus abruptly increases pulmonary vascular resistance, producing a sudden increase in right ventricular afterload. The right ventricle dilates and may fail, reducing left ventricular filling and causing systemic hypotension."
  },
  {
    "id": 77,
    "question": "A patient develops pleural effusion due to congestive heart failure. Analysis reveals low protein concentration and low LDH compared with serum. What type of fluid is this?",
    "options": [
      "Exudate",
      "Transudate",
      "Chyle",
      "Empyema",
      "Hemothorax"
    ],
    "answer": 1,
    "explanation": "A transudative effusion results primarily from increased hydrostatic pressure or decreased oncotic pressure without primary pleural inflammation. Congestive heart failure is a classic cause. Exudates result from increased vascular permeability, infection, malignancy, or inflammation."
  },
  {
    "id": 78,
    "question": "A patient with bacterial pneumonia develops fever, pleuritic chest pain, and a pleural effusion. Thoracentesis reveals turbid fluid with high protein, high LDH, and numerous neutrophils. Which process is most likely?",
    "options": [
      "Transudative effusion",
      "Exudative parapneumonic effusion",
      "Pure hydrothorax",
      "Chylothorax",
      "Hemothorax"
    ],
    "answer": 1,
    "explanation": "Pneumonia can cause an exudative pleural effusion due to inflammation and increased vascular permeability. High protein and LDH indicate an exudate. If infected pus accumulates within the pleural space, the condition is termed empyema."
  },
  {
    "id": 79,
    "question": "A patient develops a large pleural effusion that contains milky white fluid. Laboratory analysis demonstrates markedly increased triglyceride levels. Which structure has most likely been disrupted?",
    "options": [
      "Thoracic duct",
      "Pulmonary artery",
      "Azygos vein",
      "Inferior vena cava",
      "Pulmonary vein"
    ],
    "answer": 0,
    "explanation": "A chylothorax occurs when the thoracic duct is damaged or obstructed, allowing lymph rich in triglycerides (chyle) to enter the pleural cavity. Common causes include malignancy, especially lymphoma, and thoracic surgery or trauma."
  },
  {
    "id": 80,
    "question": "A patient develops sudden dyspnea and pleuritic chest pain after placement of a central venous catheter. Chest radiography demonstrates a collapsed lung with a visible pleural line. Which pathological process is responsible?",
    "options": [
      "Pleural air accumulation causing loss of negative intrapleural pressure",
      "Increased pulmonary surfactant",
      "Increased pleural fluid oncotic pressure",
      "Pulmonary edema due to left heart failure",
      "Bronchial mucus hypersecretion"
    ],
    "answer": 0,
    "explanation": "This is a pneumothorax. Air enters the pleural cavity and abolishes the normal negative intrapleural pressure that keeps the lung expanded. The lung recoils inward and collapses. A tension pneumothorax additionally causes mediastinal shift and obstructive shock. Q81–100"
  },
  {
    "id": 81,
    "question": "A 24-year-old patient presents to the emergency department with acute wheezing and shortness of breath after exposure to a known allergen. He receives an inhaled medication that rapidly activates Gs-coupled receptors on bronchial smooth muscle, increasing intracellular cAMP and producing bronchodilation. Which drug was most likely administered?",
    "options": [
      "Ipratropium",
      "Albuterol",
      "Montelukast",
      "Budesonide",
      "Theophylline"
    ],
    "answer": 1,
    "explanation": "Albuterol is a short-acting β₂-adrenergic agonist used for rapid relief of acute bronchospasm. β₂ receptors are Gs-coupled, increasing adenylate cyclase activity and cAMP, which relaxes bronchial smooth muscle. Adverse effects include tremor, tachycardia, and hypokalemia."
  },
  {
    "id": 82,
    "question": "A patient with chronic COPD is started on tiotropium. The physician explains that the drug reduces bronchoconstriction by blocking acetylcholine-mediated effects in airway smooth muscle. Which receptor is primarily targeted?",
    "options": [
      "β₁",
      "β₂",
      "M3 muscarinic receptor",
      "α₁",
      "H1 receptor"
    ],
    "answer": 2,
    "explanation": "Tiotropium is a long-acting muscarinic antagonist. Blocking M3 receptors decreases Gq-mediated smooth muscle contraction and mucus secretion. It is an important long-term bronchodilator for COPD."
  },
  {
    "id": 83,
    "question": "A patient with persistent asthma is prescribed inhaled fluticasone. He asks why he must use the medication regularly even when he has no symptoms. Which explanation best describes its primary action?",
    "options": [
      "It rapidly relaxes bronchial smooth muscle",
      "It suppresses chronic airway inflammation and hyperresponsiveness",
      "It directly blocks muscarinic receptors",
      "It directly neutralizes leukotrienes",
      "It inhibits bacterial growth"
    ],
    "answer": 1,
    "explanation": "Inhaled corticosteroids such as fluticasone are controller medications. They suppress inflammatory gene transcription and reduce airway eosinophils, edema, mucus production, and hyperresponsiveness. They are not intended to provide immediate relief during an acute asthma attack."
  },
  {
    "id": 84,
    "question": "A patient with allergic asthma is prescribed montelukast. He asks how the medication prevents bronchoconstriction after allergen exposure. Which mechanism is correct?",
    "options": [
      "Blocks H1 receptors",
      "Blocks cysteinyl leukotriene receptors",
      "Blocks β₂ receptors",
      "Inhibits acetylcholine release",
      "Activates phosphodiesterase"
    ],
    "answer": 1,
    "explanation": "Montelukast blocks leukotriene receptors, reducing bronchoconstriction, mucus secretion, and airway edema caused by cysteinyl leukotrienes. It is particularly useful in allergic asthma and exercise-induced bronchoconstriction."
  },
  {
    "id": 85,
    "question": "A patient with asthma is given a drug that inhibits 5-lipoxygenase and therefore decreases the synthesis of leukotrienes. Several weeks later, liver enzymes become elevated. Which medication was most likely prescribed?",
    "options": [
      "Montelukast",
      "Zileuton",
      "Albuterol",
      "Tiotropium",
      "Budesonide"
    ],
    "answer": 1,
    "explanation": "Zileuton directly inhibits 5-lipoxygenase, reducing leukotriene synthesis. A major adverse effect is hepatotoxicity, so liver function monitoring is required. Montelukast instead blocks leukotriene receptors."
  },
  {
    "id": 86,
    "question": "A patient with asthma receives repeated nebulized albuterol during a severe exacerbation. Several hours later, he develops tremor, tachycardia, and hypokalemia. Which mechanism best explains the decrease in serum potassium?",
    "options": [
      "Increased renal potassium excretion",
      "β₂-mediated intracellular potassium shift",
      "Destruction of potassium in plasma",
      "Decreased Na⁺/K⁺-ATPase activity",
      "Increased gastrointestinal potassium loss"
    ],
    "answer": 1,
    "explanation": "β₂ stimulation increases Na⁺/K⁺-ATPase activity, shifting potassium from the extracellular space into cells. This can produce transient hypokalemia, particularly with high-dose β₂ agonist therapy. Tremor and tachycardia are also common."
  },
  {
    "id": 87,
    "question": "A patient has been using high-dose inhaled corticosteroids for several months. He develops white plaques in the mouth that can be scraped off, leaving an erythematous surface. Which adverse effect is most likely?",
    "options": [
      "Oral candidiasis",
      "Pulmonary embolism",
      "Optic neuritis",
      "Severe hypokalemia",
      "Renal failure"
    ],
    "answer": 0,
    "explanation": "Inhaled corticosteroids suppress local immune responses in the oropharynx and can cause Candida overgrowth. Patients should rinse the mouth after inhalation, and spacers can reduce oropharyngeal deposition with metered-dose inhalers."
  },
  {
    "id": 88,
    "question": "A patient with severe COPD and chronic bronchitis has frequent exacerbations despite inhaled bronchodilator therapy. He is prescribed roflumilast. Which molecular target is inhibited?",
    "options": [
      "PDE-4",
      "PDE-5",
      "COX-2",
      "5-lipoxygenase",
      "Muscarinic M3 receptor"
    ],
    "answer": 0,
    "explanation": "Roflumilast inhibits phosphodiesterase-4, increasing intracellular cAMP in inflammatory cells and reducing inflammatory activity. It is particularly useful in selected patients with severe COPD, chronic bronchitis, and frequent exacerbations. It is not a rescue bronchodilator."
  },
  {
    "id": 89,
    "question": "A patient with pulmonary arterial hypertension is treated with sildenafil. The medication improves pulmonary vascular relaxation by preventing degradation of a cyclic nucleotide in vascular smooth muscle. Which cyclic nucleotide is increased?",
    "options": [
      "cAMP",
      "cGMP",
      "cIMP",
      "IP₃",
      "DAG"
    ],
    "answer": 1,
    "explanation": "Sildenafil inhibits PDE-5, the enzyme responsible for degrading cGMP. Increased cGMP promotes smooth muscle relaxation and pulmonary vasodilation. PDE-5 inhibitors are used in pulmonary arterial hypertension."
  },
  {
    "id": 90,
    "question": "A patient with severe pulmonary arterial hypertension is treated with epoprostenol, a prostacyclin analogue. Which intracellular signaling pathway contributes most directly to its pulmonary vasodilator effect?",
    "options": [
      "Increased cAMP",
      "Decreased cAMP",
      "Increased IP₃",
      "Increased intracellular calcium",
      "Increased DAG"
    ],
    "answer": 0,
    "explanation": "Prostacyclin receptors are Gs-coupled, activating adenylate cyclase and increasing cAMP. This causes pulmonary vascular smooth muscle relaxation and also inhibits platelet aggregation. Epoprostenol is used in severe pulmonary arterial hypertension."
  },
  {
    "id": 91,
    "question": "A patient with active tuberculosis begins a four-drug regimen. Several weeks later, his urine, tears, and sweat become orange-red. He also develops decreased effectiveness of his oral contraceptive. Which medication is responsible?",
    "options": [
      "Isoniazid",
      "Rifampin",
      "Ethambutol",
      "Pyrazinamide",
      "Streptomycin"
    ],
    "answer": 1,
    "explanation": "Rifampin inhibits bacterial DNA-dependent RNA polymerase. It causes orange-red discoloration of body fluids and strongly induces CYP450 enzymes, reducing the effectiveness of many medications, including oral contraceptives and warfarin."
  },
  {
    "id": 92,
    "question": "A patient undergoing tuberculosis treatment develops peripheral neuropathy and paresthesias. The physician adds a vitamin supplement to prevent further neurological complications. Which vitamin is being administered?",
    "options": [
      "Vitamin B1",
      "Vitamin B6",
      "Vitamin B12",
      "Vitamin C",
      "Vitamin K"
    ],
    "answer": 1,
    "explanation": "Isoniazid can cause pyridoxine deficiency and peripheral neuropathy. Vitamin B6 (pyridoxine) supplementation prevents this complication, particularly in patients at increased risk such as pregnancy, malnutrition, diabetes, alcoholism, and HIV."
  },
  {
    "id": 93,
    "question": "A patient receiving tuberculosis therapy reports difficulty distinguishing red from green colors. Visual acuity has also decreased. Which drug should be discontinued because of its characteristic ocular toxicity?",
    "options": [
      "Rifampin",
      "Isoniazid",
      "Ethambutol",
      "Pyrazinamide",
      "Rifapentine"
    ],
    "answer": 2,
    "explanation": "Ethambutol causes optic neuritis, classically producing red-green color discrimination abnormalities and decreased visual acuity. Patients receiving prolonged treatment should be monitored for visual toxicity."
  },
  {
    "id": 94,
    "question": "A patient receiving antituberculous therapy develops severe joint pain and laboratory testing shows increased serum uric acid. Which drug is most likely responsible?",
    "options": [
      "Isoniazid",
      "Rifampin",
      "Ethambutol",
      "Pyrazinamide",
      "Streptomycin"
    ],
    "answer": 3,
    "explanation": "Pyrazinamide decreases renal uric acid excretion and can produce hyperuricemia and gout. It can also cause hepatotoxicity. It is part of the standard initial RIPE regimen for tuberculosis."
  },
  {
    "id": 95,
    "question": "A patient with persistent asthma uses albuterol several times each day despite adherence to therapy. The physician adds a long-acting β₂ agonist but emphasizes that it should not be used as monotherapy. Which drug is most appropriate?",
    "options": [
      "Salmeterol",
      "Ipratropium",
      "Montelukast",
      "Zileuton",
      "Theophylline"
    ],
    "answer": 0,
    "explanation": "Salmeterol is a long-acting β₂ agonist used for maintenance bronchodilation. In asthma, LABAs should be used with inhaled corticosteroids, because LABA monotherapy is associated with increased risk of severe asthma outcomes. Albuterol remains the typical short-acting rescue medication."
  },
  {
    "id": 96,
    "question": "A patient with COPD requires a long-acting bronchodilator because of persistent daily symptoms. Which medication is a long-acting β₂ agonist?",
    "options": [
      "Albuterol",
      "Formoterol",
      "Ipratropium",
      "Tiotropium",
      "Budesonide"
    ],
    "answer": 1,
    "explanation": "Formoterol is a LABA that produces prolonged β₂-mediated bronchodilation. Tiotropium is instead a long-acting muscarinic antagonist. COPD maintenance therapy commonly relies on long-acting bronchodilators."
  },
  {
    "id": 97,
    "question": "A patient with difficult-to-control asthma is prescribed theophylline. After accidentally doubling his dose, he develops nausea, vomiting, tremor, insomnia, and tachyarrhythmia. Which pharmacological property of the drug explains its toxicity risk?",
    "options": [
      "Very wide therapeutic index",
      "Narrow therapeutic index",
      "Irreversible β₂ blockade",
      "Exclusive renal elimination without metabolism",
      "Complete absence of drug interactions"
    ],
    "answer": 1,
    "explanation": "Theophylline has a narrow therapeutic window. Toxicity can cause gastrointestinal symptoms, tremor, insomnia, tachyarrhythmias, hypotension, and seizures. It produces bronchodilation partly through adenosine receptor antagonism and phosphodiesterase inhibition."
  },
  {
    "id": 98,
    "question": "A patient with severe COPD is hospitalized for an acute exacerbation with worsening dyspnea, increased sputum production, and wheezing. He receives systemic corticosteroids. Which effect contributes most to improvement in airflow?",
    "options": [
      "Increased leukotriene synthesis",
      "Reduction of airway inflammation and edema",
      "Direct stimulation of β₂ receptors",
      "Increased mucus secretion",
      "Increased pulmonary vascular resistance"
    ],
    "answer": 1,
    "explanation": "Systemic corticosteroids reduce airway inflammation, mucosal edema, and inflammatory mediator production during COPD exacerbations. They do not directly act as bronchodilators like β₂ agonists, but reducing inflammation improves airflow and shortens exacerbation duration."
  },
  {
    "id": 99,
    "question": "A patient with pulmonary arterial hypertension is started on bosentan. The physician explains that the drug prevents a potent vasoconstrictor from binding to its receptors on pulmonary vascular smooth muscle. Which mediator is being blocked?",
    "options": [
      "Histamine",
      "Endothelin-1",
      "Bradykinin",
      "Leukotriene B4",
      "Acetylcholine"
    ],
    "answer": 1,
    "explanation": "Bosentan is an endothelin receptor antagonist. Endothelin-1 promotes potent vasoconstriction and vascular smooth muscle proliferation. Blocking endothelin signaling decreases pulmonary vascular resistance. Hepatotoxicity is an important adverse effect."
  },
  {
    "id": 100,
    "question": "A 60-year-old man with severe COPD and chronic bronchitis continues to experience frequent exacerbations despite optimized inhaled therapy. A PDE-4 inhibitor is added to decrease airway inflammation. Several weeks later, he develops significant weight loss, nausea, and diarrhea. Which medication is most likely responsible?",
    "options": [
      "Tiotropium",
      "Roflumilast",
      "Salmeterol",
      "Montelukast",
      "Budesonide"
    ],
    "answer": 1,
    "explanation": "Roflumilast is a selective PDE-4 inhibitor used to reduce exacerbations in selected patients with severe COPD, especially those with chronic bronchitis. Common adverse effects include weight loss, nausea, diarrhea, abdominal discomfort, headache, and insomnia. Unlike β₂ agonists or anticholinergics, its major benefit is anti-inflammatory reduction of exacerbation frequency."
  }
];

