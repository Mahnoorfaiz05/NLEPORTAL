import type { Question } from "./types";
export const biochemistryQuestions:Question[]=[
  {
    "id": 1,
    "question": "A 19-year-old student reports fatigue, sweating, tremor, and difficulty concentrating after skipping breakfast for several hours. Laboratory testing shows that blood glucose is maintained within the normal range despite the absence of recent dietary carbohydrate. During the early fasting state, the liver primarily maintains blood glucose by breaking down its stored carbohydrate. Which enzyme is directly responsible for releasing free glucose from hepatic glycogen?",
    "options": [
      "Glycogen synthase",
      "Glycogen phosphorylase",
      "Glucose-6-phosphate dehydrogenase",
      "Phosphofructokinase-1"
    ],
    "answer": 1,
    "explanation": "Glycogen phosphorylase removes glucose residues from glycogen as glucose-1-phosphate through phosphorolysis. In the liver, glycogen breakdown helps maintain blood glucose during fasting. Glycogen synthase performs the opposite process by synthesizing glycogen."
  },
  {
    "id": 2,
    "question": "A 6-month-old infant develops severe hypoglycemia, hepatomegaly, lactic acidosis, and hyperuricemia during fasting. The child has excessive accumulation of glycogen in the liver, but the stored glycogen has a relatively normal structure. The metabolic abnormality prevents the liver from converting glucose-6-phosphate into free glucose. Which enzyme is most likely deficient?",
    "options": [
      "Glucose-6-phosphatase",
      "Branching enzyme",
      "Muscle glycogen phosphorylase",
      "Lysosomal α-1,4-glucosidase"
    ],
    "answer": 0,
    "explanation": "This is Von Gierke disease (GSD type I). Glucose-6-phosphatase deficiency prevents conversion of glucose-6-phosphate into free glucose in the liver and kidney. It causes severe fasting hypoglycemia, hepatomegaly, lactic acidosis, hyperuricemia, and hyperlipidemia."
  },
  {
    "id": 3,
    "question": "A patient with diabetes mellitus has persistently elevated blood glucose levels. Over several months, excessive glucose reacts nonenzymatically with proteins, producing modified proteins that contribute to vascular and tissue damage. Measurement of one such modified protein is routinely used to assess average glycemic control over the previous several months. Which laboratory marker is being described?",
    "options": [
      "Serum albumin",
      "Glycated hemoglobin",
      "C-reactive protein",
      "Creatine kinase"
    ],
    "answer": 1,
    "explanation": "HbA1c is formed by nonenzymatic glycation of hemoglobin. Because red blood cells survive approximately 120 days, HbA1c reflects average blood glucose over roughly 2–3 months and is widely used for monitoring diabetes."
  },
  {
    "id": 4,
    "question": "A 4-year-old child develops jaundice, abdominal pain, and hemolytic anemia after receiving a medication with oxidant properties. Laboratory evaluation reveals decreased activity of an enzyme in the pentose phosphate pathway. Red blood cells are particularly vulnerable because they depend heavily on this pathway to generate NADPH for maintaining reduced glutathione. Which enzyme is deficient?",
    "options": [
      "Pyruvate kinase",
      "Glucose-6-phosphate dehydrogenase",
      "Hexokinase",
      "Lactate dehydrogenase"
    ],
    "answer": 1,
    "explanation": "G6PD catalyzes the rate-limiting step of the pentose phosphate pathway and produces NADPH. NADPH maintains glutathione in its reduced form, protecting RBCs from oxidative damage. Deficiency can cause episodic hemolytic anemia after oxidant stress."
  },
  {
    "id": 5,
    "question": "During intense exercise, skeletal muscle requires ATP rapidly even when oxygen delivery becomes insufficient to meet metabolic demands. Under these conditions, pyruvate produced by glycolysis is converted to another metabolite so that NAD+ can be regenerated and glycolysis can continue. Which enzyme catalyzes this reaction?",
    "options": [
      "Pyruvate carboxylase",
      "Pyruvate dehydrogenase",
      "Lactate dehydrogenase",
      "Phosphoglycerate kinase"
    ],
    "answer": 2,
    "explanation": "Lactate dehydrogenase converts pyruvate to lactate while oxidizing NADH to NAD+. This regeneration of NAD+ allows glycolysis to continue under anaerobic conditions. Lactate can later be transported to the liver and converted back to glucose through the Cori cycle."
  },
  {
    "id": 6,
    "question": "A patient with severe thiamine deficiency develops confusion, ophthalmoplegia, ataxia, and lactic acidosis. Thiamine is converted into a coenzyme required for several important oxidative reactions. Which of the following enzymes requires thiamine pyrophosphate as a cofactor?",
    "options": [
      "Pyruvate dehydrogenase",
      "Lactate dehydrogenase",
      "Hexokinase",
      "Glucose-6-phosphatase"
    ],
    "answer": 0,
    "explanation": "Thiamine (vitamin B1) is converted to thiamine pyrophosphate (TPP), a cofactor for pyruvate dehydrogenase, α-ketoglutarate dehydrogenase, branched-chain α-ketoacid dehydrogenase, and transketolase. Severe deficiency can produce neurological manifestations and lactic acidosis."
  },
  {
    "id": 7,
    "question": "A 25-year-old woman presents with fatigue and pallor. Laboratory investigations reveal microcytic hypochromic anemia and depleted iron stores. Iron is required for synthesis of the heme portion of hemoglobin. Which enzyme catalyzes the first and rate-limiting step of heme synthesis?",
    "options": [
      "Ferrochelatase",
      "ALA synthase",
      "ALA dehydratase",
      "Porphobilinogen deaminase"
    ],
    "answer": 1,
    "explanation": "ALA synthase catalyzes the first and rate-limiting step of heme synthesis, combining glycine and succinyl-CoA to form δ-aminolevulinic acid. It requires vitamin B6. The final step, insertion of iron into protoporphyrin IX, is catalyzed by ferrochelatase."
  },
  {
    "id": 8,
    "question": "A patient working in an industrial environment develops abdominal pain, peripheral neuropathy, anemia, and cognitive difficulties. Laboratory testing suggests inhibition of enzymes involved in heme synthesis. Which pair of enzymes is classically inhibited by lead poisoning?",
    "options": [
      "ALA synthase and ferrochelatase",
      "ALA dehydratase and ferrochelatase",
      "Porphobilinogen deaminase and uroporphyrinogen decarboxylase",
      "Heme oxygenase and biliverdin reductase"
    ],
    "answer": 1,
    "explanation": "Lead inhibits ALA dehydratase and ferrochelatase, impairing heme synthesis. This can result in anemia and accumulation of heme precursors. Lead poisoning may also cause abdominal pain and neurological abnormalities."
  },
  {
    "id": 9,
    "question": "A newborn develops severe jaundice shortly after birth. Laboratory testing demonstrates increased unconjugated bilirubin. The bilirubin is poorly soluble in water and normally requires binding to albumin for transport to the liver, where it is conjugated with glucuronic acid before being excreted. Which enzyme performs this conjugation?",
    "options": [
      "Biliverdin reductase",
      "Heme oxygenase",
      "UDP-glucuronosyltransferase",
      "Alkaline phosphatase"
    ],
    "answer": 2,
    "explanation": "UDP-glucuronosyltransferase (UGT1A1) conjugates bilirubin with glucuronic acid in hepatocytes, producing water-soluble conjugated bilirubin. Reduced activity occurs in conditions such as Gilbert syndrome and Crigler-Najjar syndrome."
  },
  {
    "id": 10,
    "question": "A 2-year-old child develops developmental delay, seizures, and a characteristic sweet or maple syrup-like odor in the urine. Laboratory testing demonstrates accumulation of branched-chain amino acids and their corresponding ketoacids. Which enzyme complex is most likely deficient?",
    "options": [
      "Phenylalanine hydroxylase",
      "Branched-chain α-ketoacid dehydrogenase",
      "Homogentisate oxidase",
      "Ornithine transcarbamylase"
    ],
    "answer": 1,
    "explanation": "Maple syrup urine disease results from deficiency of branched-chain α-ketoacid dehydrogenase. It causes accumulation of leucine, isoleucine, and valine and their ketoacids. Neurological toxicity can be severe if untreated."
  },
  {
    "id": 11,
    "question": "A newborn develops vomiting, lethargy, metabolic acidosis, and an unusual odor after introduction of phenylalanine-containing foods. Further testing reveals markedly elevated phenylalanine and reduced tyrosine levels. Which enzyme is normally responsible for converting phenylalanine into tyrosine?",
    "options": [
      "Tyrosinase",
      "Phenylalanine hydroxylase",
      "Homogentisate oxidase",
      "Fumarylacetoacetate hydrolase"
    ],
    "answer": 1,
    "explanation": "Phenylalanine hydroxylase converts phenylalanine to tyrosine and requires tetrahydrobiopterin (BH4). Deficiency causes phenylketonuria (PKU). Untreated patients can develop intellectual disability, seizures, eczema, and a characteristic musty odor."
  },
  {
    "id": 12,
    "question": "A patient presents with recurrent kidney stones and markedly elevated urinary oxalate. The underlying metabolic disorder involves abnormal metabolism of glyoxylate due to deficiency of an enzyme that normally converts glyoxylate into glycine. Which enzyme is involved?",
    "options": [
      "Alanine transaminase",
      "Glyoxylate aminotransferase",
      "Arginase",
      "Glutamate dehydrogenase"
    ],
    "answer": 1,
    "explanation": "Primary hyperoxaluria type I is caused by deficiency of alanine-glyoxylate aminotransferase. Glyoxylate is instead converted into oxalate, resulting in calcium oxalate kidney stones and, in severe cases, renal failure."
  },
  {
    "id": 13,
    "question": "A patient with liver disease develops confusion, vomiting, and altered consciousness. Laboratory studies show markedly elevated blood ammonia. Ammonia is normally converted into urea in hepatocytes through a series of reactions that allow nitrogen to be safely eliminated in urine. Which organ is the major site of the urea cycle?",
    "options": [
      "Kidney",
      "Liver",
      "Skeletal muscle",
      "Brain"
    ],
    "answer": 1,
    "explanation": "The urea cycle occurs primarily in the liver and converts toxic ammonia into urea, which is then excreted by the kidneys. The first two reactions occur in mitochondria, while the remaining reactions occur in the cytosol."
  },
  {
    "id": 14,
    "question": "A male infant presents with recurrent episodes of vomiting, lethargy, and severe hyperammonemia. Laboratory testing reveals increased urinary orotic acid. A defect in the urea cycle prevents proper incorporation of carbamoyl phosphate into the pathway. Which enzyme is most likely deficient?",
    "options": [
      "Arginase",
      "Ornithine transcarbamylase",
      "Argininosuccinate lyase",
      "Carbamoyl phosphate synthetase I"
    ],
    "answer": 1,
    "explanation": "OTC deficiency is the most common urea-cycle disorder and is X-linked. Excess mitochondrial carbamoyl phosphate enters the pyrimidine pathway, causing increased orotic acid along with hyperammonemia."
  },
  {
    "id": 15,
    "question": "A patient has prolonged fasting and begins relying increasingly on fatty acids as an energy source. In the liver, fatty acids undergo mitochondrial β-oxidation, producing acetyl-CoA, NADH, and FADH₂. Long-chain fatty acids require a transport system to enter the mitochondrial matrix. Which molecule is essential for this transport?",
    "options": [
      "Biotin",
      "Carnitine",
      "Coenzyme A",
      "Creatine"
    ],
    "answer": 1,
    "explanation": "Carnitine transports long-chain fatty acyl groups across the inner mitochondrial membrane through the carnitine shuttle. Medium- and short-chain fatty acids can enter mitochondria without this transport system."
  },
  {
    "id": 16,
    "question": "A child develops hypoketotic hypoglycemia, lethargy, and seizures during prolonged fasting. Laboratory testing shows impaired oxidation of fatty acids. The condition is associated with deficiency of an enzyme responsible for oxidation of medium-chain fatty acids. Which diagnosis is most likely?",
    "options": [
      "MCAD deficiency",
      "Phenylketonuria",
      "Glycogen storage disease type I",
      "Homocystinuria"
    ],
    "answer": 0,
    "explanation": "Medium-chain acyl-CoA dehydrogenase deficiency (MCAD) impairs fatty-acid β-oxidation. During fasting, patients cannot adequately generate energy or ketone bodies, producing hypoketotic hypoglycemia, vomiting, lethargy, and potentially sudden death."
  },
  {
    "id": 17,
    "question": "A patient with severe hypercholesterolemia develops tendon xanthomas and premature atherosclerosis. Genetic testing identifies a defect in the receptor responsible for removing LDL particles from the circulation. Which lipoprotein is most directly increased?",
    "options": [
      "HDL",
      "LDL",
      "Chylomicrons",
      "VLDL"
    ],
    "answer": 1,
    "explanation": "Familial hypercholesterolemia commonly results from defective LDL receptors, leading to reduced hepatic uptake of LDL and markedly elevated plasma LDL cholesterol. Patients are at high risk of premature atherosclerotic cardiovascular disease."
  },
  {
    "id": 18,
    "question": "After a fatty meal, triglycerides from the intestine are transported through the bloodstream in large lipoprotein particles. These particles deliver dietary triglycerides to adipose tissue and muscle. Which apolipoprotein is essential for activation of lipoprotein lipase?",
    "options": [
      "ApoA-I",
      "ApoB-100",
      "ApoC-II",
      "ApoE"
    ],
    "answer": 2,
    "explanation": "ApoC-II activates lipoprotein lipase (LPL), which hydrolyzes triglycerides in chylomicrons and VLDL. ApoB-48 is important for chylomicron assembly, while ApoB-100 is important for LDL receptor binding."
  },
  {
    "id": 19,
    "question": "A patient develops severe abdominal pain radiating to the back and markedly elevated serum triglycerides. The triglyceride level is extremely high, causing recurrent episodes of acute pancreatitis. A genetic defect results in impaired breakdown of circulating triglyceride-rich lipoproteins. Which enzyme is most likely deficient?",
    "options": [
      "Hormone-sensitive lipase",
      "Lipoprotein lipase",
      "Pancreatic lipase",
      "Acetyl-CoA carboxylase"
    ],
    "answer": 1,
    "explanation": "Lipoprotein lipase deficiency causes severe hypertriglyceridemia due to impaired clearance of chylomicrons and VLDL. Patients can develop eruptive xanthomas and recurrent acute pancreatitis."
  },
  {
    "id": 20,
    "question": "During prolonged fasting, decreased insulin and increased glucagon stimulate lipolysis in adipose tissue. Released fatty acids are transported to the liver, where β-oxidation produces large amounts of acetyl-Co",
    "options": [
      "When acetyl-CoA production exceeds the capacity of the citric acid cycle, it is converted into ketone bodies. Which of the following is a ketone body?",
      "Citrate",
      "Acetoacetate",
      "Oxaloacetate",
      "Malate"
    ],
    "answer": 1,
    "explanation": "The major ketone bodies are acetoacetate, β-hydroxybutyrate, and acetone. They are produced primarily in the liver during prolonged fasting, starvation, or uncontrolled diabetes mellitus and serve as an alternative fuel for peripheral tissues."
  },
  {
    "id": 21,
    "question": "A patient with uncontrolled type 1 diabetes mellitus presents with polyuria, dehydration, abdominal pain, and deep rapid breathing. Laboratory testing reveals metabolic acidosis with markedly elevated ketone bodies. Increased hepatic fatty-acid oxidation has generated excessive acetyl-Co",
    "options": [
      "Which hormone is primarily responsible for promoting this metabolic state?",
      "Insulin",
      "Glucagon",
      "Somatostatin",
      "Calcitonin"
    ],
    "answer": 1,
    "explanation": "In uncontrolled type 1 diabetes, low insulin and high glucagon promote lipolysis, fatty-acid oxidation, and hepatic ketogenesis. Accumulation of ketone bodies produces diabetic ketoacidosis."
  },
  {
    "id": 22,
    "question": "A patient presents with muscle weakness after strenuous exercise. A metabolic evaluation demonstrates impaired conversion of pyruvate into acetyl-CoA, resulting in accumulation of pyruvate and lactate. Which vitamin-derived cofactor is required by the enzyme complex responsible for this reaction?",
    "options": [
      "Vitamin B1",
      "Vitamin B2",
      "Vitamin B12",
      "Vitamin C"
    ],
    "answer": 0,
    "explanation": "Pyruvate dehydrogenase requires several cofactors, including TPP derived from vitamin B1, lipoic acid, CoA, FAD, and NAD+. Thiamine deficiency can therefore impair aerobic glucose metabolism and increase lactate production."
  },
  {
    "id": 23,
    "question": "A patient has a mutation affecting an enzyme of the citric acid cycle. The clinician explains that this cycle is central to energy metabolism because it oxidizes acetyl-CoA and generates reduced electron carriers that later donate electrons to the respiratory chain. Which citric acid cycle enzyme directly produces FADH₂?",
    "options": [
      "Citrate synthase",
      "Isocitrate dehydrogenase",
      "Succinate dehydrogenase",
      "Malate dehydrogenase"
    ],
    "answer": 2,
    "explanation": "Succinate dehydrogenase converts succinate to fumarate and generates FADH₂. It is unique because it participates in both the TCA cycle and the electron transport chain as Complex II."
  },
  {
    "id": 24,
    "question": "A toxic substance blocks the mitochondrial electron transport chain and prevents efficient transfer of electrons to oxygen. As a result, oxidative phosphorylation is severely impaired and ATP production decreases. Which molecule serves as the final electron acceptor of the electron transport chain?",
    "options": [
      "Carbon dioxide",
      "Oxygen",
      "NAD+",
      "Water"
    ],
    "answer": 1,
    "explanation": "Oxygen is the final electron acceptor at Complex IV. It combines with electrons and hydrogen ions to form water. Blocking oxygen utilization or electron transfer therefore markedly reduces oxidative phosphorylation and ATP production."
  },
  {
    "id": 25,
    "question": "A patient is exposed to cyanide and rapidly develops severe cellular hypoxia despite adequate oxygen in the blood. Cyanide inhibits the final complex of the mitochondrial electron transport chain, preventing electrons from being transferred to oxygen. Which complex is directly inhibited?",
    "options": [
      "Complex I",
      "Complex II",
      "Complex III",
      "Complex IV"
    ],
    "answer": 3,
    "explanation": "Cyanide inhibits cytochrome c oxidase (Complex IV), preventing transfer of electrons to oxygen. This causes rapid failure of oxidative phosphorylation and severe cellular energy failure despite adequate oxygen delivery."
  },
  {
    "id": 26,
    "question": "A patient with chronic alcoholism develops peripheral neuropathy, weakness, and macrocytic anemia. Laboratory findings suggest deficiency of a vitamin required for DNA synthesis. Which vitamin deficiency most directly causes impaired thymidine synthesis and megaloblastic anemia?",
    "options": [
      "Vitamin B1",
      "Vitamin B6",
      "Folate",
      "Vitamin K"
    ],
    "answer": 2,
    "explanation": "Folate (vitamin B9) is required for one-carbon transfer reactions involved in synthesis of thymidine and purines. Deficiency impairs DNA synthesis and produces megaloblastic anemia. Vitamin B12 deficiency causes a similar hematologic picture but also produces neurological manifestations."
  },
  {
    "id": 27,
    "question": "A patient presents with paresthesias, loss of vibration sense, and macrocytic anemia. Laboratory testing demonstrates elevated methylmalonic acid and homocysteine levels. Which vitamin deficiency is most likely responsible?",
    "options": [
      "Folate",
      "Vitamin B12",
      "Vitamin B6",
      "Vitamin C"
    ],
    "answer": 1,
    "explanation": "Vitamin B12 deficiency causes increased methylmalonic acid and homocysteine. B12 is required for conversion of methylmalonyl-CoA to succinyl-CoA and for conversion of homocysteine to methionine. Neurological abnormalities distinguish B12 deficiency from isolated folate deficiency."
  },
  {
    "id": 28,
    "question": "A patient has dermatitis, diarrhea, and dementia. The symptoms are associated with inadequate intake of a vitamin involved in redox reactions and energy metabolism. Which vitamin deficiency classically produces this triad?",
    "options": [
      "Niacin",
      "Riboflavin",
      "Thiamine",
      "Biotin"
    ],
    "answer": 0,
    "explanation": "Niacin (vitamin B3) deficiency causes pellagra, classically characterized by dermatitis, diarrhea, and dementia. Niacin forms NAD+ and NADP+, which are essential electron carriers in numerous metabolic reactions."
  },
  {
    "id": 29,
    "question": "A patient develops bleeding gums, poor wound healing, and perifollicular hemorrhages. The physician explains that the deficient nutrient is necessary for hydroxylation of proline and lysine residues during collagen synthesis. Which vitamin is deficient?",
    "options": [
      "Vitamin A",
      "Vitamin C",
      "Vitamin D",
      "Vitamin E"
    ],
    "answer": 1,
    "explanation": "Vitamin C (ascorbic acid) is required for hydroxylation of proline and lysine during collagen synthesis. Deficiency causes scurvy, characterized by bleeding gums, bruising, poor wound healing, and connective-tissue weakness."
  },
  {
    "id": 30,
    "question": "A patient has night blindness and difficulty adapting to dim light. The underlying deficiency affects a vitamin-derived molecule required for formation of the visual pigment rhodopsin. Which vitamin is most likely deficient?",
    "options": [
      "Vitamin A",
      "Vitamin B12",
      "Vitamin C",
      "Vitamin K"
    ],
    "answer": 0,
    "explanation": "Vitamin A is required for synthesis of retinal, the light-sensitive component of rhodopsin. Deficiency initially causes night blindness and can progress to xerophthalmia and other ocular abnormalities."
  },
  {
    "id": 31,
    "question": "A child living in an area with limited sunlight develops bone pain and skeletal deformities. Laboratory evaluation demonstrates impaired calcium and phosphate homeostasis. The deficient vitamin normally increases intestinal absorption of calcium and phosphate after activation in the body. Which vitamin is involved?",
    "options": [
      "Vitamin A",
      "Vitamin C",
      "Vitamin D",
      "Vitamin E"
    ],
    "answer": 2,
    "explanation": "Vitamin D increases intestinal absorption of calcium and phosphate and is essential for normal bone mineralization. Deficiency in children causes rickets, while deficiency in adults causes osteomalacia."
  },
  {
    "id": 32,
    "question": "A patient develops prolonged bleeding after a surgical procedure. Laboratory testing reveals an increased prothrombin time. The patient has severe fat malabsorption, leading to deficiency of a fat-soluble vitamin required for γ-carboxylation of several coagulation factors. Which vitamin is deficient?",
    "options": [
      "Vitamin A",
      "Vitamin D",
      "Vitamin E",
      "Vitamin K"
    ],
    "answer": 3,
    "explanation": "Vitamin K is required for γ-carboxylation of factors II, VII, IX, X and proteins C and S. Deficiency impairs coagulation and prolongs PT/INR, particularly affecting factor VII early because of its short half-life."
  },
  {
    "id": 33,
    "question": "A patient with a genetic disorder has progressive neurologic dysfunction, muscle weakness, and accumulation of abnormal lipid material within lysosomes. The disease results from impaired degradation of complex lipids. Which cellular organelle is primarily responsible for degradation of these accumulated macromolecules?",
    "options": [
      "Golgi apparatus",
      "Lysosome",
      "Ribosome",
      "Peroxisome"
    ],
    "answer": 1,
    "explanation": "Lysosomes contain acid hydrolases that degrade proteins, lipids, carbohydrates, and nucleic acids. Defects in lysosomal enzymes produce lysosomal storage diseases, such as Tay-Sachs, Gaucher, and Niemann-Pick disease."
  },
  {
    "id": 34,
    "question": "A child presents with developmental regression, exaggerated startle response, and progressive neurological deterioration. Examination reveals no hepatosplenomegaly. A lysosomal enzyme deficiency causes accumulation of GM2 ganglioside within neurons. Which disease is most likely?",
    "options": [
      "Gaucher disease",
      "Tay-Sachs disease",
      "Fabry disease",
      "Pompe disease"
    ],
    "answer": 1,
    "explanation": "Tay-Sachs disease results from deficiency of hexosaminidase A, causing accumulation of GM2 ganglioside in neurons. It causes progressive neurodegeneration and a classic cherry-red macula. Unlike some other lysosomal storage diseases, hepatosplenomegaly is not prominent."
  },
  {
    "id": 35,
    "question": "A patient with a lysosomal storage disorder develops hepatosplenomegaly, anemia, thrombocytopenia, and bone pain. Macrophages contain abundant lipid material with a characteristic appearance on microscopy. Which enzyme deficiency causes this disorder?",
    "options": [
      "Hexosaminidase A",
      "Glucocerebrosidase",
      "Sphingomyelinase",
      "α-galactosidase A"
    ],
    "answer": 1,
    "explanation": "Gaucher disease is caused by deficiency of glucocerebrosidase, leading to accumulation of glucocerebroside in macrophages. Gaucher cells have a characteristic “crumpled tissue paper” appearance."
  },
  {
    "id": 36,
    "question": "A patient develops severe muscle weakness and cardiomyopathy during infancy. The underlying disorder causes accumulation of glycogen within lysosomes because of a defect in lysosomal glycogen degradation. Which enzyme is deficient?",
    "options": [
      "Glucose-6-phosphatase",
      "Muscle glycogen phosphorylase",
      "Lysosomal acid α-glucosidase",
      "Branching enzyme"
    ],
    "answer": 2,
    "explanation": "Pompe disease (GSD type II) results from deficiency of lysosomal acid α-glucosidase. Glycogen accumulates in lysosomes, particularly affecting cardiac and skeletal muscle, producing hypotonia and cardiomyopathy in infants."
  },
  {
    "id": 37,
    "question": "A patient presents with recurrent episodes of hemolytic anemia, especially after exposure to certain drugs. The underlying biochemical problem involves inadequate production of reduced glutathione because of impaired NADPH generation. Which pathway normally produces this NADPH?",
    "options": [
      "Glycolysis",
      "Pentose phosphate pathway",
      "Urea cycle",
      "TCA cycle"
    ],
    "answer": 1,
    "explanation": "The pentose phosphate pathway generates NADPH, which maintains glutathione in its reduced form and protects cells from oxidative stress. RBCs depend particularly on this pathway because they lack mitochondria."
  },
  {
    "id": 38,
    "question": "A researcher studies a rapidly dividing cell and finds that it requires large amounts of ribose-5-phosphate for nucleotide synthesis. The pentose phosphate pathway provides this sugar as well as reducing equivalents. Which enzyme is considered the rate-limiting enzyme of this pathway?",
    "options": [
      "Transketolase",
      "Glucose-6-phosphate dehydrogenase",
      "Ribose phosphate isomerase",
      "Phosphogluconate mutase"
    ],
    "answer": 1,
    "explanation": "G6PD is the rate-limiting enzyme of the oxidative phase of the pentose phosphate pathway. This pathway produces NADPH and ribose-5-phosphate, supporting antioxidant defense and nucleotide synthesis."
  },
  {
    "id": 39,
    "question": "A patient has severe hyperuricemia and recurrent gout attacks. Excess uric acid is produced from degradation of purine nucleotides. The final conversion in purine degradation involves an enzyme that can be inhibited pharmacologically to reduce uric acid production. Which enzyme is targeted by allopurinol?",
    "options": [
      "Adenosine deaminase",
      "Xanthine oxidase",
      "HGPRT",
      "PRPP synthetase"
    ],
    "answer": 1,
    "explanation": "Allopurinol inhibits xanthine oxidase, reducing conversion of hypoxanthine and xanthine into uric acid. It is used for prevention of gout and hyperuricemia."
  },
  {
    "id": 40,
    "question": "A young boy develops developmental delay, aggressive behavior, self-injury, and severe hyperuricemia. The underlying defect affects purine salvage and causes increased production of uric acid. Which enzyme is deficient?",
    "options": [
      "Xanthine oxidase",
      "HGPRT",
      "Adenylosuccinate lyase",
      "Carbamoyl phosphate synthetase II"
    ],
    "answer": 1,
    "explanation": "Lesch-Nyhan syndrome results from deficiency of hypoxanthine-guanine phosphoribosyltransferase (HGPRT). Impaired purine salvage increases PRPP and de novo purine synthesis, ultimately causing excessive uric acid production and characteristic neurological/behavioral abnormalities."
  },
  {
    "id": 41,
    "question": "A patient with a hereditary metabolic disorder develops megaloblastic anemia, growth retardation, and recurrent infections. The defect involves inability to convert certain nucleotides into their active forms required for DNA synthesis. Which molecules are the basic building blocks of DNA?",
    "options": [
      "Amino acids",
      "Fatty acids",
      "Deoxyribonucleotides",
      "Monosaccharides"
    ],
    "answer": 2,
    "explanation": "DNA is composed of deoxyribonucleotides, each containing a deoxyribose sugar, phosphate group, and nitrogenous base. The four DNA bases are adenine, guanine, cytosine, and thymine."
  },
  {
    "id": 42,
    "question": "A scientist studies DNA replication in a human cell. During replication, one enzyme separates the two strands of the DNA double helix so that each strand can serve as a template for synthesis of a new complementary strand. Which enzyme performs this function?",
    "options": [
      "DNA ligase",
      "DNA helicase",
      "DNA polymerase",
      "Primase"
    ],
    "answer": 1,
    "explanation": "DNA helicase unwinds the DNA double helix by breaking hydrogen bonds between complementary bases. DNA polymerase then synthesizes the new DNA strand, while primase creates RNA primers and ligase joins DNA fragments."
  },
  {
    "id": 43,
    "question": "During DNA replication, the newly synthesized DNA strand is produced continuously on one template but discontinuously on the other. The short DNA segments produced on the discontinuously synthesized strand are later joined together. What are these segments called?",
    "options": [
      "Okazaki fragments",
      "Introns",
      "Exons",
      "Telomeres"
    ],
    "answer": 0,
    "explanation": "Okazaki fragments are short DNA segments synthesized on the lagging strand. They are subsequently joined by DNA ligase to produce a continuous DNA strand."
  },
  {
    "id": 44,
    "question": "A mutation prevents a cell from properly removing RNA primers during DNA replication. The resulting DNA contains abnormal segments and cannot be efficiently completed. Which enzyme normally synthesizes the short RNA primer needed to initiate DNA synthesis?",
    "options": [
      "Primase",
      "Helicase",
      "Ligase",
      "Topoisomerase"
    ],
    "answer": 0,
    "explanation": "Primase synthesizes short RNA primers that provide a free 3′-OH group for DNA polymerase. DNA polymerase cannot initiate synthesis completely on its own."
  },
  {
    "id": 45,
    "question": "A researcher examines gene expression in a eukaryotic cell. DNA information is first copied into a complementary RNA molecule, which subsequently undergoes processing before being translated into protein. Which enzyme catalyzes synthesis of messenger RNA?",
    "options": [
      "DNA polymerase",
      "RNA polymerase II",
      "RNA polymerase I",
      "Reverse transcriptase"
    ],
    "answer": 1,
    "explanation": "RNA polymerase II synthesizes messenger RNA (mRNA) in eukaryotic cells. RNA polymerase I mainly synthesizes rRNA, while RNA polymerase III synthesizes tRNA and some other small RNAs."
  },
  {
    "id": 46,
    "question": "A newly synthesized eukaryotic mRNA contains noncoding sequences that must be removed before the mature transcript can be translated. The remaining coding sequences are joined together to form the final mRN",
    "options": [
      "What process removes the noncoding regions?",
      "Translation",
      "Splicing",
      "Replication",
      "DNA methylation"
    ],
    "answer": 1,
    "explanation": "During RNA splicing, introns are removed and exons are joined together. The mature mRNA also undergoes 5′ capping and 3′ polyadenylation before translation."
  },
  {
    "id": 47,
    "question": "A patient has a genetic mutation that alters a single nucleotide in a coding region but does not change the amino acid incorporated into the protein because several codons can specify the same amino acid. What type of mutation is this?",
    "options": [
      "Missense mutation",
      "Nonsense mutation",
      "Silent mutation",
      "Frameshift mutation"
    ],
    "answer": 2,
    "explanation": "A silent mutation changes a nucleotide but does not change the encoded amino acid because of the degeneracy of the genetic code. A missense mutation changes an amino acid, while a nonsense mutation creates a premature stop codon."
  },
  {
    "id": 48,
    "question": "A patient has a mutation that changes one amino acid in a structural protein. The altered amino acid significantly changes the protein's function, producing a clinical disorder. Which type of mutation is most consistent with this finding?",
    "options": [
      "Silent mutation",
      "Missense mutation",
      "Nonsense mutation",
      "Splice-site deletion only"
    ],
    "answer": 1,
    "explanation": "A missense mutation substitutes one amino acid for another. The effect can range from minimal to severe depending on the location and properties of the substituted amino acid."
  },
  {
    "id": 49,
    "question": "A genetic disorder results from insertion of one nucleotide into the coding region of a gene. Because codons are read in groups of three nucleotides, the insertion alters the reading frame from the point of mutation onward. Which type of mutation is this?",
    "options": [
      "Silent mutation",
      "Missense mutation",
      "Frameshift mutation",
      "Transition mutation"
    ],
    "answer": 2,
    "explanation": "Insertions or deletions of nucleotides in numbers not divisible by three cause a frameshift, altering all downstream codons and often producing a premature stop codon."
  },
  {
    "id": 50,
    "question": "A patient is suspected of having a mitochondrial disorder. The physician explains that mitochondrial DNA differs from nuclear DNA in several important ways, including its inheritance pattern. Which inheritance pattern is typical of mitochondrial DNA?",
    "options": [
      "Paternal inheritance",
      "Maternal inheritance",
      "X-linked recessive inheritance",
      "Autosomal dominant inheritance"
    ],
    "answer": 1,
    "explanation": "Mitochondria are inherited predominantly from the mother, because the ovum contributes most of the cytoplasm and mitochondria to the embryo. Therefore, mitochondrial disorders generally show maternal inheritance."
  },
  {
    "id": 51,
    "question": "A patient has a mutation in the gene encoding a protein that normally controls transcription by binding specific DNA sequences. The physician explains that regulation of gene expression can occur before transcription, during RNA processing, and after translation. Which mechanism directly controls whether a gene is transcribed into RNA?",
    "options": [
      "Transcriptional regulation",
      "Protein phosphorylation only",
      "Glycolysis",
      "β-oxidation"
    ],
    "answer": 0,
    "explanation": "Transcriptional regulation determines whether RNA polymerase initiates transcription of a gene. Transcription factors can bind promoter or enhancer regions and either increase or decrease gene expression."
  },
  {
    "id": 52,
    "question": "A patient with a genetic metabolic disorder has a defect in a protein that normally catalyzes a specific biochemical reaction. The clinician explains that enzymes accelerate chemical reactions by lowering the energy barrier required for the reaction but do not change the overall equilibrium of the reaction. What is the primary function of an enzyme?",
    "options": [
      "Increase activation energy",
      "Decrease activation energy",
      "Change the reaction's equilibrium constant",
      "Become permanently consumed in the reaction"
    ],
    "answer": 1,
    "explanation": "Enzymes lower activation energy, allowing reactions to occur more rapidly. They do not change the reaction's equilibrium constant and are not permanently consumed during the reaction."
  },
  {
    "id": 53,
    "question": "A patient with myocardial infarction has elevated cardiac biomarkers. One enzyme commonly measured in clinical laboratories exists in several molecular forms that catalyze the same reaction but differ in tissue distribution and structure. What are these different molecular forms called?",
    "options": [
      "Isoenzymes",
      "Hormones",
      "Cofactors",
      "Substrates"
    ],
    "answer": 0,
    "explanation": "Isoenzymes are different molecular forms of an enzyme that catalyze the same reaction but may have different tissue distributions or kinetic properties. LDH and CK are important clinical examples."
  },
  {
    "id": 54,
    "question": "A patient develops acute pancreatitis with severe epigastric pain radiating to the back. Laboratory testing reveals a markedly elevated enzyme that is relatively specific for pancreatic injury. Which enzyme is most useful for supporting the diagnosis?",
    "options": [
      "ALT",
      "Lipase",
      "CK-MB",
      "ALP"
    ],
    "answer": 1,
    "explanation": "Serum lipase is a highly useful marker for acute pancreatitis and generally remains elevated longer than amylase. Pancreatic lipase participates in digestion of dietary triglycerides."
  },
  {
    "id": 55,
    "question": "A patient presents with jaundice and markedly elevated serum aminotransferases. One enzyme is particularly associated with hepatocellular injury and is more liver-specific than AST. Which enzyme is this?",
    "options": [
      "ALT",
      "CK",
      "ALP",
      "Amylase"
    ],
    "answer": 0,
    "explanation": "Alanine aminotransferase (ALT) is relatively more specific for hepatocellular injury than AST. Both AST and ALT can rise in hepatitis, but ALT is particularly useful as a marker of liver-cell injury."
  },
  {
    "id": 56,
    "question": "A patient with obstructive jaundice has markedly elevated alkaline phosphatase and γ-glutamyl transferase. The physician explains that alkaline phosphatase is particularly associated with cholestatic and biliary disease, although it is also present in other tissues. Which additional finding supports a hepatobiliary rather than bone source of elevated ALP?",
    "options": [
      "Increased CK-MB",
      "Increased GGT",
      "Increased troponin",
      "Decreased bilirubin"
    ],
    "answer": 1,
    "explanation": "GGT rises in hepatobiliary disease and can help identify a hepatic source of elevated alkaline phosphatase. ALP can also increase in bone disease, whereas GGT is not typically elevated in isolated bone disorders."
  },
  {
    "id": 57,
    "question": "A patient with prolonged fasting requires glucose production from non-carbohydrate substrates. The liver converts lactate, glycerol, and certain amino acids into glucose through a pathway that becomes especially important during prolonged fasting. Which pathway is responsible?",
    "options": [
      "Glycolysis",
      "Gluconeogenesis",
      "Glycogenesis",
      "Pentose phosphate pathway"
    ],
    "answer": 1,
    "explanation": "Gluconeogenesis synthesizes glucose from non-carbohydrate precursors, including lactate, glycerol, and glucogenic amino acids. It occurs primarily in the liver and, during prolonged fasting, also significantly in the kidney."
  },
  {
    "id": 58,
    "question": "During fasting, glucagon promotes hepatic glucose production while inhibiting glucose utilization. One major glycolytic enzyme is inhibited indirectly when fructose-2,6-bisphosphate levels fall. Which enzyme is directly responsible for the rate-limiting step of glycolysis?",
    "options": [
      "Hexokinase",
      "Phosphofructokinase-1",
      "Pyruvate kinase",
      "Glucose-6-phosphatase"
    ],
    "answer": 1,
    "explanation": "PFK-1 is the rate-limiting enzyme of glycolysis and converts fructose-6-phosphate to fructose-1,6-bisphosphate. It is activated by AMP and fructose-2,6-bisphosphate and inhibited by ATP and citrate."
  },
  {
    "id": 59,
    "question": "After eating a carbohydrate-rich meal, insulin levels rise and promote storage of excess glucose. In the liver and skeletal muscle, glucose is converted into a branched storage polymer that can later be mobilized when energy is required. What is this storage polymer?",
    "options": [
      "Cellulose",
      "Glycogen",
      "Cholesterol",
      "Triglyceride"
    ],
    "answer": 1,
    "explanation": "Glycogen is the major storage form of glucose in humans. Liver glycogen helps maintain blood glucose, while skeletal muscle glycogen primarily provides fuel for muscle contraction."
  },
  {
    "id": 60,
    "question": "A patient develops exercise intolerance and painful muscle cramps shortly after beginning strenuous activity. Laboratory testing suggests inability of skeletal muscle to adequately mobilize glycogen. Which glycogen storage disease is most likely?",
    "options": [
      "Von Gierke disease",
      "McArdle disease",
      "Pompe disease",
      "Hers disease"
    ],
    "answer": 1,
    "explanation": "McArdle disease (GSD type V) results from deficiency of muscle glycogen phosphorylase. Patients develop exercise intolerance, muscle cramps, and sometimes rhabdomyolysis because skeletal muscle cannot efficiently break down glycogen during exercise."
  },
  {
    "id": 61,
    "question": "A patient has chronic hemolytic anemia and is found to have a defect in red-cell glycolysis. Because mature erythrocytes lack mitochondria, they rely heavily on anaerobic glycolysis for ATP production. Which enzyme deficiency is classically associated with hereditary hemolytic anemia due to impaired ATP generation?",
    "options": [
      "Pyruvate kinase",
      "Pyruvate carboxylase",
      "Citrate synthase",
      "Succinate dehydrogenase"
    ],
    "answer": 0,
    "explanation": "Pyruvate kinase deficiency reduces ATP generation in RBCs, impairing membrane integrity and causing chronic hemolytic anemia. RBCs depend entirely on glycolysis because they lack mitochondria."
  },
  {
    "id": 62,
    "question": "A patient is exposed to a toxic substance that inhibits cellular respiration. Despite adequate oxygen delivery, cells cannot efficiently use oxygen to generate ATP. The affected mitochondrial process normally uses NADH and FADH₂ to create a proton gradient across the inner mitochondrial membrane. What is this process called?",
    "options": [
      "Glycolysis",
      "Electron transport and oxidative phosphorylation",
      "Urea cycle",
      "Gluconeogenesis"
    ],
    "answer": 1,
    "explanation": "The electron transport chain transfers electrons from NADH and FADH₂ through a series of complexes, pumping protons across the inner mitochondrial membrane. The resulting proton gradient drives ATP synthesis through ATP synthase."
  },
  {
    "id": 63,
    "question": "A patient has a mutation affecting ATP synthase. The physician explains that most ATP generated during aerobic metabolism is produced when protons flow down their electrochemical gradient through this enzyme. Which mitochondrial structure contains the electron transport chain and ATP synthase?",
    "options": [
      "Outer mitochondrial membrane",
      "Inner mitochondrial membrane",
      "Cytosol",
      "Nuclear membrane"
    ],
    "answer": 1,
    "explanation": "The inner mitochondrial membrane contains the electron transport chain complexes and ATP synthase. The proton gradient is established across this membrane and drives oxidative phosphorylation."
  },
  {
    "id": 64,
    "question": "A patient with chronic alcoholism develops neurological symptoms and lactic acidosis due to impaired carbohydrate metabolism. The physician explains that one vitamin is essential for the activity of transketolase and several oxidative decarboxylation enzymes. Which vitamin is this?",
    "options": [
      "Thiamine",
      "Folate",
      "Vitamin C",
      "Vitamin K"
    ],
    "answer": 0,
    "explanation": "Thiamine (B1) is required as TPP for transketolase and oxidative decarboxylation complexes, including pyruvate dehydrogenase and α-ketoglutarate dehydrogenase. Deficiency can cause Wernicke encephalopathy and lactic acidosis."
  },
  {
    "id": 65,
    "question": "A patient presents with dermatitis around the mouth, glossitis, and anemia. Laboratory testing suggests deficiency of a vitamin involved in amino-acid metabolism and neurotransmitter synthesis. Which vitamin is most closely associated with these biochemical reactions?",
    "options": [
      "Vitamin B6",
      "Vitamin D",
      "Vitamin K",
      "Vitamin A"
    ],
    "answer": 0,
    "explanation": "Vitamin B6 (pyridoxine) is converted to pyridoxal phosphate (PLP), a cofactor for aminotransferases and many reactions involving amino-acid metabolism. It is also important in neurotransmitter and heme synthesis."
  },
  {
    "id": 66,
    "question": "A patient taking isoniazid for tuberculosis develops peripheral neuropathy. The physician prescribes a vitamin supplement to prevent this adverse effect. Which vitamin is commonly depleted by isoniazid?",
    "options": [
      "Vitamin B1",
      "Vitamin B6",
      "Vitamin B9",
      "Vitamin B12"
    ],
    "answer": 1,
    "explanation": "Isoniazid can cause vitamin B6 deficiency, leading to peripheral neuropathy and other neurological effects. Pyridoxine supplementation is commonly given to prevent this complication."
  },
  {
    "id": 67,
    "question": "A patient develops severe fatigue and muscle weakness. Laboratory testing demonstrates impaired production of ATP from fatty acids. The physician explains that fatty acids must first be activated before entering β-oxidation. Which molecule is required for activation of a fatty acid?",
    "options": [
      "Coenzyme A",
      "Biotin",
      "NADPH",
      "FAD only"
    ],
    "answer": 0,
    "explanation": "Fatty acids are activated to fatty acyl-CoA by acyl-CoA synthetase. This process consumes ATP equivalent to two high-energy phosphate bonds and prepares the fatty acid for β-oxidation."
  },
  {
    "id": 68,
    "question": "A patient with severe fasting intolerance is found to have impaired ketone-body utilization in peripheral tissues. The physician explains that although the liver produces ketone bodies, it cannot use them efficiently as fuel because it lacks a key enzyme required for ketone utilization. Which organ normally produces most ketone bodies?",
    "options": [
      "Brain",
      "Liver",
      "Skeletal muscle",
      "Kidney"
    ],
    "answer": 1,
    "explanation": "The liver produces ketone bodies during prolonged fasting, starvation, and uncontrolled diabetes. However, the liver cannot use ketone bodies efficiently because it lacks the enzyme thiophorase (succinyl-CoA:acetoacetate CoA transferase)."
  },
  {
    "id": 69,
    "question": "A patient has severe muscle weakness and cardiomyopathy due to accumulation of abnormal fatty acids in cells. The physician explains that peroxisomes are important for oxidation of very-long-chain fatty acids. Which disorder is classically associated with defective peroxisomal function?",
    "options": [
      "Zellweger syndrome",
      "Von Gierke disease",
      "McArdle disease",
      "Lesch-Nyhan syndrome"
    ],
    "answer": 0,
    "explanation": "Zellweger syndrome is a peroxisomal biogenesis disorder causing accumulation of very-long-chain fatty acids and severe neurological and hepatic abnormalities. Peroxisomes participate in oxidation of very-long-chain fatty acids and synthesis of certain lipids."
  },
  {
    "id": 70,
    "question": "A patient develops progressive neurological symptoms and adrenal insufficiency. Laboratory testing reveals accumulation of very-long-chain fatty acids. The underlying disorder affects transport of these fatty acids into peroxisomes. Which disease is most likely?",
    "options": [
      "X-linked adrenoleukodystrophy",
      "Tay-Sachs disease",
      "Gaucher disease",
      "Pompe disease"
    ],
    "answer": 0,
    "explanation": "X-linked adrenoleukodystrophy causes accumulation of very-long-chain fatty acids, particularly affecting the nervous system and adrenal cortex. It is inherited in an X-linked manner."
  },
  {
    "id": 71,
    "question": "A patient with severe liver disease develops low serum albumin and peripheral edema. Albumin is synthesized primarily by hepatocytes and contributes significantly to plasma oncotic pressure. Which biochemical function of albumin is most directly responsible for preventing excessive movement of fluid into tissues?",
    "options": [
      "Maintaining plasma oncotic pressure",
      "Activating complement",
      "Producing antibodies",
      "Forming fibrin"
    ],
    "answer": 0,
    "explanation": "Albumin is the major contributor to plasma colloid oncotic pressure. Severe hypoalbuminemia reduces plasma oncotic pressure and promotes movement of fluid into the interstitial space, causing edema."
  },
  {
    "id": 72,
    "question": "A patient has severe protein deficiency and develops edema, muscle wasting, and impaired wound healing. Dietary proteins are digested into smaller units before absorption. What are the principal final products of complete protein digestion?",
    "options": [
      "Fatty acids",
      "Amino acids",
      "Monosaccharides",
      "Nucleotides"
    ],
    "answer": 1,
    "explanation": "Dietary proteins are hydrolyzed by gastric and pancreatic proteases and intestinal peptidases into amino acids, along with small peptides that are subsequently absorbed and further processed."
  },
  {
    "id": 73,
    "question": "A patient develops severe muscle injury after prolonged exercise. Serum creatine kinase is markedly elevated because skeletal muscle cells have released intracellular enzymes into the bloodstream. Which CK isoenzyme is most strongly associated with skeletal muscle?",
    "options": [
      "CK-BB",
      "CK-MB",
      "CK-MM",
      "CK-Mt"
    ],
    "answer": 2,
    "explanation": "CK-MM is the predominant creatine kinase isoenzyme in skeletal muscle. CK-MB is associated particularly with cardiac muscle, although it is not completely specific for myocardial injury."
  },
  {
    "id": 74,
    "question": "A patient presents to the emergency department with acute chest pain and suspected myocardial infarction. A cardiac biomarker is measured because it is highly sensitive and specific for myocardial injury and remains elevated for several days. Which marker is preferred?",
    "options": [
      "Troponin",
      "Amylase",
      "ALT",
      "ALP"
    ],
    "answer": 0,
    "explanation": "Cardiac troponins I and T are highly sensitive and specific markers of myocardial injury. They rise after myocardial infarction and remain elevated for several days, making them the preferred biomarkers for diagnosis."
  },
  {
    "id": 75,
    "question": "A patient has severe malnutrition and impaired synthesis of several proteins. The physician explains that amino acids can be classified according to whether the body can synthesize them in adequate amounts. Which amino acids are considered essential?",
    "options": [
      "Those that cannot be synthesized adequately and must be obtained from the diet",
      "Those found only in DNA",
      "Those produced exclusively in the liver",
      "Those that contain sulfur only"
    ],
    "answer": 0,
    "explanation": "Essential amino acids cannot be synthesized in sufficient amounts by the human body and therefore must be obtained from the diet. Examples include leucine, isoleucine, valine, lysine, methionine, threonine, tryptophan, phenylalanine, and histidine."
  },
  {
    "id": 76,
    "question": "A patient has a genetic disorder affecting connective tissue and develops tall stature, lens dislocation, and thrombosis. Laboratory testing reveals elevated homocysteine. Which vitamin is required as a cofactor for cystathionine β-synthase, the enzyme involved in converting homocysteine toward cysteine?",
    "options": [
      "Vitamin B6",
      "Vitamin B12",
      "Folate",
      "Vitamin C"
    ],
    "answer": 0,
    "explanation": "Cystathionine β-synthase requires vitamin B6 (PLP). Deficiency or inherited defects in homocysteine metabolism can cause elevated homocysteine. Classical homocystinuria is associated with lens dislocation, skeletal abnormalities, thrombosis, and developmental problems."
  },
  {
    "id": 77,
    "question": "A patient with a genetic metabolic disorder has severe hypoglycemia during fasting because the liver cannot produce glucose from glycerol and lactate efficiently. The physician explains that gluconeogenesis bypasses the irreversible steps of glycolysis using several unique enzymes. Which enzyme converts pyruvate to oxaloacetate during gluconeogenesis?",
    "options": [
      "Pyruvate kinase",
      "Pyruvate carboxylase",
      "PFK-1",
      "Lactate dehydrogenase"
    ],
    "answer": 1,
    "explanation": "Pyruvate carboxylase converts pyruvate to oxaloacetate and requires biotin. It is located in mitochondria and is activated by acetyl-CoA. Oxaloacetate is then used for further gluconeogenic reactions."
  },
  {
    "id": 78,
    "question": "A patient with a genetic disorder cannot adequately synthesize glucose during fasting. The physician explains that certain amino acids can contribute carbon skeletons to glucose production, whereas others cannot. Which amino acid is exclusively ketogenic?",
    "options": [
      "Alanine",
      "Leucine",
      "Glutamate",
      "Aspartate"
    ],
    "answer": 1,
    "explanation": "Leucine and lysine are exclusively ketogenic amino acids. They are degraded into products that form ketone bodies or acetyl-CoA and cannot provide net carbon for glucose synthesis."
  },
  {
    "id": 79,
    "question": "A patient has severe liver dysfunction and develops abnormal accumulation of ammonia. The physician explains that ammonia generated from amino-acid metabolism is transported safely in the blood in several forms. In skeletal muscle, nitrogen is commonly transported to the liver as an amino acid that can be converted into urea-cycle substrates. Which amino acid is important in this transport?",
    "options": [
      "Glutamine",
      "Phenylalanine",
      "Tyrosine",
      "Leucine only"
    ],
    "answer": 0,
    "explanation": "Glutamine safely transports ammonia from peripheral tissues to the liver and kidneys. It is formed by addition of ammonia to glutamate through glutamine synthetase."
  },
  {
    "id": 80,
    "question": "A patient develops severe hyperammonemia due to liver failure. Astrocytes attempt to detoxify excess ammonia by incorporating it into glutamate to form glutamine. Which enzyme catalyzes this reaction?",
    "options": [
      "Glutaminase",
      "Glutamine synthetase",
      "Glutamate dehydrogenase",
      "Arginase"
    ],
    "answer": 1,
    "explanation": "Glutamine synthetase combines glutamate with ammonia to form glutamine, helping detoxify ammonia. In the brain, this mechanism is particularly important, although excessive glutamine accumulation can contribute to cerebral edema in hyperammonemia."
  },
  {
    "id": 81,
    "question": "A patient develops severe diarrhea and dehydration. The physician explains that intestinal absorption of glucose is closely linked to sodium transport across the intestinal epithelium. This mechanism forms the basis of oral rehydration therapy. Which transporter is responsible for sodium-glucose cotransport at the intestinal brush border?",
    "options": [
      "GLUT4",
      "SGLT1",
      "GLUT2 only",
      "Na⁺/K⁺ ATPase directly transporting glucose"
    ],
    "answer": 1,
    "explanation": "SGLT1 transports glucose and sodium together across the intestinal brush border. This allows continued glucose and sodium absorption even during secretory diarrhea and is the biochemical basis of oral rehydration solution."
  },
  {
    "id": 82,
    "question": "A patient with insulin resistance has elevated blood glucose. In skeletal muscle and adipose tissue, insulin normally promotes movement of a glucose transporter to the cell membrane, increasing glucose uptake. Which transporter is insulin-responsive?",
    "options": [
      "GLUT1",
      "GLUT2",
      "GLUT4",
      "GLUT5"
    ],
    "answer": 2,
    "explanation": "GLUT4 is found primarily in skeletal muscle and adipose tissue and is translocated to the plasma membrane in response to insulin. GLUT1 provides basal glucose uptake in many tissues, while GLUT2 is important in liver and pancreatic β cells."
  },
  {
    "id": 83,
    "question": "A patient with type 1 diabetes mellitus has insufficient insulin production. Without adequate insulin signaling, glucose uptake into skeletal muscle and adipose tissue is reduced. Which cellular process is normally stimulated by insulin after glucose uptake into these tissues?",
    "options": [
      "Glycogen synthesis",
      "Ketogenesis",
      "Lipolysis",
      "Gluconeogenesis"
    ],
    "answer": 0,
    "explanation": "Insulin promotes anabolic metabolism, including glucose uptake, glycogen synthesis, fatty-acid synthesis, and protein synthesis. It inhibits gluconeogenesis, glycogen breakdown, lipolysis, and ketogenesis."
  },
  {
    "id": 84,
    "question": "A patient has fasting hypoglycemia due to excessive insulin secretion. The physician explains that glucagon normally acts in the liver to increase blood glucose during fasting. Which intracellular second messenger is primarily used by glucagon signaling?",
    "options": [
      "cAMP",
      "cGMP only",
      "IP3 only",
      "Tyrosine kinase"
    ],
    "answer": 0,
    "explanation": "Glucagon binds a Gs protein-coupled receptor, activating adenylate cyclase and increasing cAMP, which activates protein kinase A. This promotes glycogenolysis and gluconeogenesis in the liver."
  },
  {
    "id": 85,
    "question": "A patient with a hormonal disorder has impaired insulin signaling. Insulin binds to a receptor that differs from the G-protein-coupled receptors used by glucagon and epinephrine. Which type of receptor does insulin use?",
    "options": [
      "G-protein-coupled receptor",
      "Receptor tyrosine kinase",
      "Nuclear receptor only",
      "Ligand-gated ion channel"
    ],
    "answer": 1,
    "explanation": "The insulin receptor is a receptor tyrosine kinase. Binding of insulin causes receptor autophosphorylation and activation of downstream signaling pathways that regulate glucose, lipid, and protein metabolism."
  },
  {
    "id": 86,
    "question": "A patient has severe hyperlipidemia due to increased hepatic synthesis of fatty acids. The physician explains that acetyl-CoA must first be converted into malonyl-CoA before fatty-acid chain elongation can proceed. Which enzyme catalyzes this rate-limiting step of fatty-acid synthesis?",
    "options": [
      "Acetyl-CoA carboxylase",
      "Fatty acid synthase",
      "Carnitine acyltransferase I",
      "Hormone-sensitive lipase"
    ],
    "answer": 0,
    "explanation": "Acetyl-CoA carboxylase (ACC) converts acetyl-CoA into malonyl-CoA and is the rate-limiting enzyme of fatty-acid synthesis. It requires biotin and is activated by insulin and citrate."
  },
  {
    "id": 87,
    "question": "A patient undergoes prolonged fasting. The physician explains that malonyl-CoA levels fall, allowing fatty acids to enter mitochondria for oxidation. Malonyl-CoA normally inhibits which enzyme?",
    "options": [
      "Carnitine palmitoyltransferase I",
      "Hormone-sensitive lipase",
      "Acetyl-CoA carboxylase",
      "Lipoprotein lipase"
    ],
    "answer": 0,
    "explanation": "Malonyl-CoA inhibits CPT-I, preventing simultaneous fatty-acid synthesis and β-oxidation. During fasting, malonyl-CoA decreases, CPT-I becomes active, and fatty acids enter mitochondria for oxidation."
  },
  {
    "id": 88,
    "question": "A patient has high LDL cholesterol and develops premature coronary artery disease. The physician explains that LDL delivers cholesterol from the liver to peripheral tissues. Which apolipoprotein on LDL is recognized by the LDL receptor?",
    "options": [
      "ApoA-I",
      "ApoB-48",
      "ApoB-100",
      "ApoC-II"
    ],
    "answer": 2,
    "explanation": "ApoB-100 is present on VLDL, IDL, and LDL and serves as the ligand for the LDL receptor. ApoB-48 is found in chylomicrons and is produced by intestinal cells."
  },
  {
    "id": 89,
    "question": "A patient with severe hypertriglyceridemia has increased VLDL levels. VLDL is produced primarily by the liver and transports endogenous triglycerides to peripheral tissues. Which apolipoprotein is characteristic of VLDL and later remains associated with LDL?",
    "options": [
      "ApoB-100",
      "ApoB-48",
      "ApoA-II",
      "ApoC-II only"
    ],
    "answer": 0,
    "explanation": "VLDL contains ApoB-100 and transports endogenous triglycerides from the liver. As VLDL loses triglycerides through lipoprotein lipase activity, it becomes IDL and eventually LDL."
  },
  {
    "id": 90,
    "question": "A patient has increased cardiovascular risk and low levels of protective cholesterol transport. HDL participates in reverse cholesterol transport by carrying cholesterol from peripheral tissues back toward the liver. Which apolipoprotein is the major structural and functional apolipoprotein of HDL?",
    "options": [
      "ApoA-I",
      "ApoB-100",
      "ApoC-II",
      "ApoE"
    ],
    "answer": 0,
    "explanation": "ApoA-I is the major apolipoprotein of HDL and activates LCAT, which esterifies cholesterol during reverse cholesterol transport. HDL helps transport cholesterol from peripheral tissues toward the liver."
  },
  {
    "id": 91,
    "question": "A patient with chronic alcoholism develops fatty liver. Excess NADH generated during alcohol metabolism alters hepatic metabolic pathways and promotes conversion of fatty acids into triglycerides. Which enzyme converts ethanol into acetaldehyde?",
    "options": [
      "Alcohol dehydrogenase",
      "Aldehyde dehydrogenase",
      "Lactate dehydrogenase",
      "Acetyl-CoA carboxylase"
    ],
    "answer": 0,
    "explanation": "Alcohol dehydrogenase converts ethanol into acetaldehyde while reducing NAD+ to NADH. Aldehyde dehydrogenase subsequently converts acetaldehyde to acetate. Excess NADH contributes to fatty liver and metabolic disturbances."
  },
  {
    "id": 92,
    "question": "A patient develops flushing, headache, and nausea after consuming alcohol while taking a medication that inhibits aldehyde dehydrogenase. Acetaldehyde accumulates because its conversion to acetate is impaired. Which enzyme is inhibited?",
    "options": [
      "Alcohol dehydrogenase",
      "Aldehyde dehydrogenase",
      "Pyruvate dehydrogenase",
      "Lactate dehydrogenase"
    ],
    "answer": 1,
    "explanation": "Disulfiram inhibits aldehyde dehydrogenase, causing acetaldehyde accumulation after alcohol consumption. This produces flushing, headache, nausea, tachycardia, and other unpleasant symptoms."
  },
  {
    "id": 93,
    "question": "A patient has a genetic disorder affecting collagen synthesis and develops hypermobility and fragile connective tissues. The physician explains that collagen is synthesized initially as a precursor that undergoes hydroxylation and other post-translational modifications before becoming mature collagen. Which amino acid residues are hydroxylated during collagen synthesis?",
    "options": [
      "Glycine and alanine",
      "Proline and lysine",
      "Methionine and tryptophan",
      "Valine and leucine"
    ],
    "answer": 1,
    "explanation": "Proline and lysine residues undergo hydroxylation during collagen synthesis. Vitamin C is required for these hydroxylation reactions. Collagen also has a characteristic repeating sequence rich in glycine."
  },
  {
    "id": 94,
    "question": "A patient with a genetic connective-tissue disorder has defective collagen due to replacement of glycine with a larger amino acid. Because collagen's triple helix requires a very small amino acid at every third position, this substitution disrupts its structure. Which amino acid normally occurs at every third position of the collagen sequence?",
    "options": [
      "Glycine",
      "Proline",
      "Lysine",
      "Alanine"
    ],
    "answer": 0,
    "explanation": "Collagen has a repeating Gly-X-Y sequence, meaning glycine occurs at every third position. Its small size allows the three collagen chains to pack tightly in the center of the triple helix."
  },
  {
    "id": 95,
    "question": "A patient has a mutation in a gene that produces an abnormal protein containing a premature stop codon. Translation terminates early, producing a shortened protein that is usually nonfunctional. Which type of mutation most commonly produces this effect?",
    "options": [
      "Silent mutation",
      "Missense mutation",
      "Nonsense mutation",
      "Conservative substitution"
    ],
    "answer": 2,
    "explanation": "A nonsense mutation changes a codon encoding an amino acid into a premature stop codon. This results in early termination of translation and production of a truncated protein."
  },
  {
    "id": 96,
    "question": "A patient has a genetic mutation affecting the ability of cells to repair damaged DN",
    "options": [
      "The physician explains that DNA damage can result from radiation, chemical exposure, and spontaneous errors during replication. Which mechanism is particularly important for repairing thymine dimers caused by ultraviolet radiation?",
      "Nucleotide excision repair",
      "Mismatch repair only",
      "Translation",
      "RNA splicing"
    ],
    "answer": 0,
    "explanation": "Nucleotide excision repair removes bulky DNA lesions such as thymine dimers produced by UV radiation. Defects in this pathway cause xeroderma pigmentosum, characterized by extreme UV sensitivity and increased skin-cancer risk."
  },
  {
    "id": 97,
    "question": "A patient has recurrent infections and is found to have a mutation affecting DNA mismatch repair. The physician explains that mismatch repair normally identifies and corrects incorrectly paired nucleotides that escape proofreading during DNA replication. Defects in this pathway are strongly associated with which cancer?",
    "options": [
      "Colon carcinoma",
      "Osteosarcoma only",
      "Hepatocellular carcinoma only",
      "Thyroid carcinoma only"
    ],
    "answer": 0,
    "explanation": "Defects in DNA mismatch repair cause microsatellite instability and are associated with Lynch syndrome, which significantly increases the risk of colorectal and several other cancers."
  },
  {
    "id": 98,
    "question": "A patient has a hereditary disorder caused by mutation of a tumor-suppressor gene. The affected protein normally stops the cell cycle when DNA is damaged, allowing repair or inducing apoptosis if the damage is severe. Which protein performs this important function?",
    "options": [
      "p53",
      "Hemoglobin",
      "Collagen",
      "Albumin"
    ],
    "answer": 0,
    "explanation": "p53 is a major tumor-suppressor protein known as the “guardian of the genome.” DNA damage activates p53, which can cause cell-cycle arrest through p21, allowing repair, or trigger apoptosis when damage cannot be repaired."
  },
  {
    "id": 99,
    "question": "A patient with a hereditary cancer syndrome has mutations affecting a DNA repair pathway involved in correcting double-stranded DNA breaks through homologous recombination. Defects in this pathway increase the risk of breast and ovarian cancers. Which genes are classically involved?",
    "options": [
      "BRCA1 and BRCA2",
      "APC and KRAS",
      "RET and MEN1",
      "CFTR and FBN1"
    ],
    "answer": 0,
    "explanation": "BRCA1 and BRCA2 are involved in homologous recombination repair of double-stranded DNA breaks. Germline mutations increase the risk of breast and ovarian cancers, among others."
  },
  {
    "id": 100,
    "question": "A medical student is reviewing integrated metabolism before the NLE and is asked why the liver is considered a central organ of metabolic homeostasis. During fasting, it maintains blood glucose, produces ketone bodies, metabolizes amino acids, converts ammonia into urea, and processes lipids. Which statement best describes the liver's role in metabolism?",
    "options": [
      "It functions only as a site of glycogen storage",
      "It is a major organ integrating carbohydrate, lipid, and protein metabolism",
      "It produces ATP exclusively through anaerobic glycolysis",
      "It cannot perform gluconeogenesis during fasting"
    ],
    "answer": 1,
    "explanation": "The liver is the central metabolic organ responsible for maintaining energy and nutrient homeostasis. It performs glycogenesis, glycogenolysis, gluconeogenesis, fatty-acid synthesis and oxidation, ketogenesis, cholesterol metabolism, amino-acid metabolism, and the urea cycle. This integrated understanding is highly relevant for NLE-style clinical questions."
  }
];
