import type { Question } from "./types";

export const publicGrandMock2Questions: Question[] = [
  {
    "id": 1,
    "question": "A 68-year-old man presents with severe diarrhea for 4 days and reduced urine output. His blood pressure is 90/60 mmHg, mucous membranes are dry, and serum creatinine has increased from 0.9 to 2.1 mg/dL. BUN is 84 mg/dL. Urinary sodium is 8 mEq/L and urine osmolality is 650 mOsm/kg. Which mechanism is primarily responsible for his acute kidney injury?",
    "options": [
      "Direct tubular epithelial necrosis",
      "Reduced renal perfusion with intact tubular sodium conservation",
      "Immune-mediated injury to the glomerular basement membrane",
      "Bilateral obstruction of the urinary tract"
    ],
    "answer": 1,
    "explanation": "Volume depletion from diarrhea causes prerenal AKI. Intact tubules conserve sodium (low urine Na+) and concentrate urine, producing a high BUN:creatinine ratio. The defect is hypoperfusion, not tubular necrosis, glomerulonephritis, or obstruction."
  },
  {
    "id": 2,
    "question": "A 55-year-old patient develops oliguria 48 hours after prolonged hypotension during major surgery. Urinalysis reveals numerous muddy-brown granular casts. Serum creatinine continues to rise despite adequate fluid replacement. Which renal abnormality most directly explains the persistent renal dysfunction?",
    "options": [
      "Increased proximal tubular sodium reabsorption",
      "Tubular epithelial injury causing impaired sodium and water reabsorption",
      "Increased aldosterone secretion causing excessive sodium retention",
      "Increased glomerular filtration caused by afferent arteriolar dilation"
    ],
    "answer": 1,
    "explanation": "Ischemic ATN follows prolonged hypotension. Muddy-brown granular casts reflect sloughed tubular epithelium. Damaged tubules cannot reabsorb sodium and water, so oliguria and rising creatinine persist after volume restoration."
  },
  {
    "id": 3,
    "question": "A patient with suspected acute kidney injury has a fractional excretion of sodium of 0.4%. His urine is highly concentrated, urinary sodium is low, and BUN-to-creatinine ratio is markedly elevated. Which finding best supports a prerenal rather than intrinsic renal cause?",
    "options": [
      "Loss of tubular concentrating ability",
      "Extensive tubular epithelial necrosis",
      "Preserved tubular response to reduced renal perfusion",
      "Presence of muddy-brown casts"
    ],
    "answer": 2,
    "explanation": "FENa <1%, concentrated urine, low urine Na+, and a high BUN:creatinine ratio indicate that tubules still respond to hypoperfusion by conserving sodium and water. Necrosis, isosthenuria, and muddy-brown casts indicate ATN."
  },
  {
    "id": 4,
    "question": "A 24-year-old woman develops fever, rash, eosinophilia, and acute kidney injury several days after starting a new antibiotic. Urinalysis demonstrates mild proteinuria and numerous white blood cells. Which histopathological process is most likely responsible?",
    "options": [
      "Immune-complex deposition in the glomerulus",
      "Interstitial edema with inflammatory cell infiltration",
      "Necrosis of the thick ascending limb only",
      "Crescent formation within Bowman's space"
    ],
    "answer": 1,
    "explanation": "Drug-induced acute interstitial nephritis classically presents with fever, rash, eosinophilia, pyuria, and AKI. Histology shows interstitial edema and inflammatory infiltrates, not glomerular immune complexes or crescents."
  },
  {
    "id": 5,
    "question": "A 9-year-old boy develops periorbital edema, hypertension, and cola-colored urine approximately 3 weeks after an untreated streptococcal throat infection. Complement C3 is decreased. Renal biopsy demonstrates granular immune deposits. Which diagnosis is most likely?",
    "options": [
      "IgA nephropathy",
      "Poststreptococcal glomerulonephritis",
      "Minimal change disease",
      "Goodpasture syndrome"
    ],
    "answer": 1,
    "explanation": "PSGN occurs weeks after streptococcal pharyngitis with nephritic features and low C3. Granular (starry-sky) immune deposits are typical. IgA nephropathy occurs within days of a URI and usually has normal complement."
  },
  {
    "id": 6,
    "question": "A 21-year-old man repeatedly develops episodes of gross hematuria within 24–48 hours of upper respiratory infections. Renal function is relatively preserved, and complement levels are normal. Which mechanism best explains his disease?",
    "options": [
      "Deposition of IgA-containing immune complexes in the mesangium",
      "Antibodies directed against type IV collagen",
      "Subepithelial deposition of immune complexes following streptococcal infection",
      "Podocyte destruction due to T-cell mediated injury"
    ],
    "answer": 0,
    "explanation": "Synpharyngitic hematuria with normal complement is IgA nephropathy (Berger disease), caused by mesangial IgA immune-complex deposition. Anti–type IV collagen is Goodpasture; subepithelial humps are PSGN; podocyte injury is nephrotic disease."
  },
  {
    "id": 7,
    "question": "A 7-year-old child presents with generalized edema and heavy proteinuria. Serum albumin is markedly decreased, but renal function is normal. Electron microscopy demonstrates diffuse effacement of podocyte foot processes without significant abnormalities on light microscopy. Which diagnosis is most likely?",
    "options": [
      "Focal segmental glomerulosclerosis",
      "Minimal change disease",
      "Membranous nephropathy",
      "Membranoproliferative glomerulonephritis"
    ],
    "answer": 1,
    "explanation": "Childhood nephrotic syndrome with normal light microscopy and diffuse foot-process effacement is minimal change disease. FSGS shows segmental sclerosis; membranous nephropathy shows basement-membrane thickening."
  },
  {
    "id": 8,
    "question": "A 35-year-old man presents with nephrotic-range proteinuria and progressive renal dysfunction. He has a history of HIV infection. Biopsy demonstrates sclerosis affecting portions of some glomeruli. Which diagnosis is most likely?",
    "options": [
      "Minimal change disease",
      "Focal segmental glomerulosclerosis",
      "Membranous nephropathy",
      "IgA nephropathy"
    ],
    "answer": 1,
    "explanation": "HIV is classically associated with collapsing FSGS. Segmental sclerosis of some glomeruli defines FSGS. Minimal change has normal light microscopy; IgA nephropathy is a nephritic/hematuric disease."
  },
  {
    "id": 9,
    "question": "A 45-year-old woman develops progressive edema and nephrotic-range proteinuria. Renal biopsy shows diffuse thickening of glomerular capillary walls, while immunofluorescence demonstrates granular IgG and C3 deposits along the basement membrane. Which disease is most consistent with these findings?",
    "options": [
      "Membranous nephropathy",
      "Minimal change disease",
      "IgA nephropathy",
      "Rapidly progressive glomerulonephritis"
    ],
    "answer": 0,
    "explanation": "Membranous nephropathy produces nephrotic syndrome with diffuse capillary-wall thickening and granular IgG/C3 along the GBM (subepithelial deposits). Light microscopy is normal in minimal change disease."
  },
  {
    "id": 10,
    "question": "A patient with nephrotic syndrome develops sudden flank pain and hematuria. Imaging demonstrates renal vein thrombosis. Which alteration associated with nephrotic syndrome most directly increases the risk of thrombosis?",
    "options": [
      "Increased urinary loss of antithrombin III",
      "Increased urinary loss of factor VIII",
      "Reduced hepatic synthesis of fibrinogen",
      "Severe thrombocytopenia"
    ],
    "answer": 0,
    "explanation": "Urinary loss of antithrombin III plus increased hepatic synthesis of clotting factors creates a hypercoagulable state. Renal-vein thrombosis is especially associated with membranous nephropathy."
  },
  {
    "id": 11,
    "question": "A 28-year-old man presents with hemoptysis and rapidly progressive renal failure. Urinalysis reveals hematuria and RBC casts. Renal biopsy demonstrates crescent formation, while immunofluorescence shows linear IgG deposition along the glomerular basement membrane. Which diagnosis is most likely?",
    "options": [
      "IgA nephropathy",
      "Goodpasture syndrome",
      "PSGN",
      "Membranous nephropathy"
    ],
    "answer": 1,
    "explanation": "Pulmonary-renal syndrome with crescents and linear anti-GBM IgG is Goodpasture syndrome. PSGN has granular deposits; IgA is mesangial; membranous nephropathy is nephrotic without linear GBM staining."
  },
  {
    "id": 12,
    "question": "A young man has persistent microscopic hematuria since childhood and develops progressive renal failure. He also has sensorineural hearing impairment and ocular abnormalities. Which inherited defect is most likely responsible?",
    "options": [
      "Mutation affecting type IV collagen",
      "Mutation affecting fibrillin-1",
      "Mutation affecting dystrophin",
      "Mutation affecting nephrin only"
    ],
    "answer": 0,
    "explanation": "Alport syndrome is due to mutations in type IV collagen (often COL4A5). Defective GBM produces hematuria, progressive renal failure, sensorineural deafness, and ocular lesions. Fibrillin-1 is Marfan; dystrophin is Duchenne."
  },
  {
    "id": 13,
    "question": "A 52-year-old man with long-standing hypertension develops gradually increasing serum creatinine and low-grade proteinuria. Urinalysis is relatively bland without RBC or WBC casts. Which pathological change is most characteristic?",
    "options": [
      "Nodular glomerulosclerosis",
      "Hyaline arteriolosclerosis and nephrosclerosis",
      "Crescentic glomerulonephritis",
      "Diffuse podocyte foot-process effacement"
    ],
    "answer": 1,
    "explanation": "Hypertensive nephrosclerosis causes bland urine, modest proteinuria, and slowly declining GFR from hyaline arteriolosclerosis and ischemic glomerular sclerosis. Nodular (Kimmelstiel–Wilson) sclerosis is diabetic nephropathy."
  },
  {
    "id": 14,
    "question": "A patient with long-standing diabetes develops progressively increasing albuminuria followed by declining GFR. Which renal lesion is most strongly associated with diabetic nephropathy?",
    "options": [
      "Kimmelstiel-Wilson nodules",
      "Wire-loop lesions",
      "Subepithelial humps",
      "Crescent formation"
    ],
    "answer": 0,
    "explanation": "Nodular mesangial sclerosis (Kimmelstiel–Wilson nodules) is the hallmark of diabetic nephropathy. Wire-loop lesions occur in lupus nephritis; subepithelial humps in PSGN; crescents in RPGN."
  },
  {
    "id": 15,
    "question": "A 46-year-old patient with chronic kidney disease has fatigue, bone pain, hypocalcemia, hyperphosphatemia, and elevated parathyroid hormone levels. Which renal abnormality is primarily responsible for this metabolic bone disorder?",
    "options": [
      "Increased calcitriol synthesis",
      "Reduced phosphate retention",
      "Reduced conversion of vitamin D to active calcitriol",
      "Increased intestinal calcium absorption"
    ],
    "answer": 2,
    "explanation": "Failing kidneys cannot 1α-hydroxylate 25-OH vitamin D to calcitriol. Low calcitriol plus phosphate retention lowers serum calcium and drives secondary hyperparathyroidism (CKD–mineral bone disease)."
  },
  {
    "id": 16,
    "question": "A patient with advanced chronic kidney disease develops normocytic, normochromic anemia despite adequate iron stores. Which mechanism is most important?",
    "options": [
      "Increased RBC destruction by splenic sequestration",
      "Reduced renal erythropoietin production",
      "Increased folate loss in urine",
      "Reduced bone marrow response to vitamin B12"
    ],
    "answer": 1,
    "explanation": "Peritubular interstitial fibroblasts produce erythropoietin. In CKD, EPO falls and a normocytic, normochromic anemia develops despite adequate iron."
  },
  {
    "id": 17,
    "question": "A patient with advanced CKD develops metabolic acidosis. Which renal function normally contributes most to maintaining acid-base balance but becomes impaired in severe kidney disease?",
    "options": [
      "Hydrogen ion secretion and ammonium generation",
      "Bicarbonate secretion exclusively by collecting ducts",
      "Chloride secretion by the proximal tubule",
      "Potassium absorption in the glomerulus"
    ],
    "answer": 0,
    "explanation": "Kidneys maintain acid–base balance by reabsorbing bicarbonate and secreting H+, largely as ammonium. Loss of nephron mass in CKD impairs net acid excretion and causes metabolic acidosis."
  },
  {
    "id": 18,
    "question": "A patient has normal-anion-gap metabolic acidosis, hypokalemia, and a urine pH persistently above 5.5 despite systemic acidosis. Which diagnosis is most likely?",
    "options": [
      "Proximal RTA",
      "Distal RTA",
      "Type IV RTA",
      "Diabetic ketoacidosis"
    ],
    "answer": 1,
    "explanation": "Distal (type I) RTA cannot acidify urine, so urine pH remains >5.5 despite systemic acidosis. It causes hypokalemia and a normal-anion-gap acidosis. Type IV RTA causes hyperkalemia; DKA has a high anion gap."
  },
  {
    "id": 19,
    "question": "A diabetic patient develops mild metabolic acidosis with hyperkalemia. Renin and aldosterone activity are low. Which renal tubular disorder best explains these findings?",
    "options": [
      "Type I RTA",
      "Type II RTA",
      "Type IV RTA",
      "Respiratory acidosis"
    ],
    "answer": 2,
    "explanation": "Type IV (hyperkalemic) RTA is due to hypoaldosteronism or aldosterone resistance, common in diabetic hyporeninemic hypoaldosteronism. Reduced distal Na+ reabsorption and K+/H+ secretion produce hyperkalemia and a mild NAGMA."
  },
  {
    "id": 20,
    "question": "A patient has recurrent calcium-containing kidney stones. His urinary calcium excretion is increased. Which medication would be most appropriate for reducing urinary calcium and preventing recurrence?",
    "options": [
      "Furosemide",
      "Hydrochlorothiazide",
      "Mannitol",
      "Acetazolamide"
    ],
    "answer": 1,
    "explanation": "Thiazides increase distal calcium reabsorption and lower urinary calcium, reducing recurrent calcium stones. Loop diuretics increase urinary calcium and can promote stones."
  },
  {
    "id": 21,
    "question": "A 32-year-old man presents with severe colicky flank pain radiating toward the groin and microscopic hematuria. CT demonstrates a renal calculus. Which stone is the most common type of kidney stone in adults?",
    "options": [
      "Uric acid",
      "Calcium oxalate",
      "Struvite",
      "Cystine"
    ],
    "answer": 1,
    "explanation": "Calcium oxalate stones are the most common nephrolithiasis in adults. Uric acid, struvite, and cystine stones are less frequent."
  },
  {
    "id": 22,
    "question": "A woman has recurrent urinary tract infections caused by urease-producing bacteria and develops a large branching calculus occupying much of the renal pelvis. Her urine is alkaline. Which stone is most likely?",
    "options": [
      "Uric acid",
      "Calcium oxalate",
      "Struvite",
      "Cystine"
    ],
    "answer": 2,
    "explanation": "Urease-producing organisms (e.g., Proteus) alkalinize urine and precipitate magnesium ammonium phosphate (struvite) staghorn calculi that fill the pelvis and calyces."
  },
  {
    "id": 23,
    "question": "A patient with recurrent renal stones has persistently acidic urine. Imaging does not demonstrate the stone on a plain abdominal radiograph. Which composition is most likely?",
    "options": [
      "Calcium phosphate",
      "Calcium oxalate",
      "Uric acid",
      "Struvite"
    ],
    "answer": 2,
    "explanation": "Uric acid stones form in acidic urine and are radiolucent on plain radiographs (visible on CT). Calcium stones are radiopaque."
  },
  {
    "id": 24,
    "question": "A child develops recurrent nephrolithiasis. Urinalysis demonstrates characteristic hexagonal crystals. Which defect is most likely responsible?",
    "options": [
      "Defective renal excretion of phosphate",
      "Defective proximal tubular reabsorption of cystine and certain amino acids",
      "Excess urinary citrate",
      "Increased uric acid synthesis"
    ],
    "answer": 1,
    "explanation": "Hexagonal crystals indicate cystine stones from cystinuria, a defect in proximal reabsorption of cystine, ornithine, lysine, and arginine (COLA)."
  },
  {
    "id": 25,
    "question": "A patient with suspected renal artery stenosis develops hypertension, hypokalemia, metabolic alkalosis, increased plasma renin activity, and elevated aldosterone. What is the primary stimulus for the hormonal abnormalities?",
    "options": [
      "Increased renal perfusion pressure",
      "Reduced renal perfusion sensed by juxtaglomerular cells",
      "Increased plasma sodium concentration",
      "Direct adrenal stimulation by potassium"
    ],
    "answer": 1,
    "explanation": "Stenosis reduces afferent arteriolar pressure. Juxtaglomerular cells release renin, activating angiotensin II and aldosterone, which cause hypertension, hypokalemia, and metabolic alkalosis (secondary hyperaldosteronism)."
  },
  {
    "id": 26,
    "question": "A patient develops hypertension, hypokalemia, metabolic alkalosis, suppressed renin, and markedly elevated aldosterone. Which diagnosis is most likely?",
    "options": [
      "Renal artery stenosis",
      "Primary hyperaldosteronism",
      "Bartter syndrome",
      "Addison disease"
    ],
    "answer": 1,
    "explanation": "High aldosterone with suppressed renin is primary hyperaldosteronism (Conn syndrome). Renal-artery stenosis raises both renin and aldosterone. Addison disease has low aldosterone."
  },
  {
    "id": 27,
    "question": "A patient has polyuria and polydipsia with severe hypernatremia. Urine osmolality is extremely low but increases substantially after administration of desmopressin. Which diagnosis is most likely?",
    "options": [
      "Nephrogenic diabetes insipidus",
      "Central diabetes insipidus",
      "SIADH",
      "Primary hyperaldosteronism"
    ],
    "answer": 1,
    "explanation": "Dilute urine with hypernatremia is diabetes insipidus. A large rise in urine osmolality after desmopressin shows the collecting duct can respond, so ADH is deficient (central DI). Nephrogenic DI does not respond."
  },
  {
    "id": 28,
    "question": "A patient taking lithium for several years develops polyuria and persistent dilute urine. Administration of desmopressin produces little improvement in urine concentration. Which diagnosis is most likely?",
    "options": [
      "Central DI",
      "Nephrogenic DI",
      "SIADH",
      "Cerebral salt wasting"
    ],
    "answer": 1,
    "explanation": "Chronic lithium impairs collecting-duct response to ADH (downregulates aquaporin-2), producing nephrogenic DI. Desmopressin therefore fails to concentrate the urine."
  },
  {
    "id": 29,
    "question": "A dehydrated patient has a fall in GFR due to reduced renal perfusion. Which intrinsic renal mechanism helps preserve GFR during mild reductions in renal blood flow?",
    "options": [
      "Constriction of the afferent arteriole by prostaglandins",
      "Dilation of the afferent arteriole by prostaglandins",
      "Constriction of the efferent arteriole mediated by angiotensin II",
      "Complete inhibition of renin release"
    ],
    "answer": 2,
    "explanation": "Angiotensin II preferentially constricts the efferent arteriole, raising filtration fraction and helping preserve GFR when renal perfusion falls. Afferent dilation by prostaglandins also helps, but the listed correct mechanism is efferent constriction."
  },
  {
    "id": 30,
    "question": "A patient with bilateral renal artery stenosis is started on an ACE inhibitor and subsequently develops a marked rise in serum creatinine. Which mechanism best explains this adverse effect?",
    "options": [
      "Afferent arteriolar dilation",
      "Efferent arteriolar dilation reducing glomerular pressure",
      "Increased aldosterone secretion",
      "Increased sympathetic stimulation"
    ],
    "answer": 1,
    "explanation": "In bilateral RAS, GFR depends on angiotensin II–mediated efferent constriction. ACE inhibitors dilate the efferent arteriole, drop glomerular capillary pressure, and cause an abrupt rise in creatinine."
  },
  {
    "id": 31,
    "question": "A patient develops acute urinary retention due to severe prostatic enlargement. If the obstruction is not relieved, which initial change most directly reduces GFR?",
    "options": [
      "Decreased hydrostatic pressure in Bowman's space",
      "Increased hydrostatic pressure in Bowman's space",
      "Increased plasma oncotic pressure in the glomerular capillaries",
      "Increased renal blood flow"
    ],
    "answer": 1,
    "explanation": "Downstream obstruction transmits pressure back into Bowman space. Higher Bowman hydrostatic pressure opposes glomerular filtration and lowers GFR (postrenal AKI)."
  },
  {
    "id": 32,
    "question": "A patient has bilateral ureteric obstruction and develops progressive azotemia. Which category of AKI does this represent?",
    "options": [
      "Prerenal",
      "Intrinsic renal",
      "Postrenal",
      "Functional nephrotic syndrome"
    ],
    "answer": 2,
    "explanation": "Obstruction of urine outflow is postrenal AKI. Bilateral ureteric obstruction (or obstruction of a solitary functioning kidney) produces azotemia."
  },
  {
    "id": 33,
    "question": "A patient develops severe hypokalemia and metabolic alkalosis after prolonged treatment with furosemide. The drug acts primarily by inhibiting which transporter?",
    "options": [
      "Na⁺/Cl⁻ cotransporter in DCT",
      "Na⁺/K⁺/2Cl⁻ cotransporter in thick ascending limb",
      "ENaC in collecting duct",
      "Na⁺/H⁺ exchanger in proximal tubule"
    ],
    "answer": 1,
    "explanation": "Loop diuretics inhibit NKCC2 in the thick ascending limb, causing natriuresis, urinary potassium and hydrogen loss, hypokalemia, and metabolic alkalosis."
  },
  {
    "id": 34,
    "question": "A patient with hypertension is started on a thiazide diuretic. Unlike loop diuretics, thiazides characteristically cause:",
    "options": [
      "Increased urinary calcium excretion",
      "Decreased urinary calcium excretion",
      "Severe hypercalcemia in all patients",
      "Complete inhibition of aldosterone"
    ],
    "answer": 1,
    "explanation": "Thiazides inhibit NCC in the DCT and increase calcium reabsorption, decreasing urinary calcium. Loops increase calciuresis. Mild serum calcium rise may occur, but severe hypercalcemia is not universal."
  },
  {
    "id": 35,
    "question": "A researcher blocks the Na⁺-K⁺-2Cl⁻ cotransporter in the thick ascending limb. Which physiological consequence will occur?",
    "options": [
      "Increased medullary concentration gradient",
      "Reduced ability to concentrate urine",
      "Increased water permeability of the ascending limb",
      "Increased calcium reabsorption exclusively in the collecting duct"
    ],
    "answer": 1,
    "explanation": "NKCC2 creates the medullary osmotic gradient. Blocking it (as with loop diuretics) dissipates the gradient and impairs concentrating ability. The ascending limb remains water-impermeable."
  },
  {
    "id": 36,
    "question": "ADH is released in response to increased plasma osmolality. Which cellular mechanism most directly increases water reabsorption in the collecting duct?",
    "options": [
      "Removal of aquaporin-2 channels",
      "Insertion of aquaporin-2 channels into the apical membrane",
      "Inhibition of urea recycling",
      "Blockade of basolateral aquaporins"
    ],
    "answer": 1,
    "explanation": "ADH binds V2 receptors, raises cAMP, and inserts aquaporin-2 vesicles into the apical membrane of principal cells, increasing water reabsorption."
  },
  {
    "id": 37,
    "question": "A patient has chronic kidney disease and persistent hyperkalemia. Which nephron segment normally plays the greatest role in regulated potassium secretion?",
    "options": [
      "Proximal tubule",
      "Thick ascending limb",
      "Principal cells of the collecting duct",
      "Glomerulus"
    ],
    "answer": 2,
    "explanation": "Regulated K+ secretion occurs through ROMK/BK channels in collecting-duct principal cells, driven by aldosterone and distal sodium delivery. The glomerulus filters but does not secrete potassium."
  },
  {
    "id": 38,
    "question": "A patient with hyperkalemia has metabolic acidosis and low aldosterone activity. Which change would be expected in the distal nephron?",
    "options": [
      "Increased potassium secretion",
      "Reduced potassium secretion",
      "Increased hydrogen ion secretion",
      "Increased ammonium production"
    ],
    "answer": 1,
    "explanation": "Aldosterone normally promotes ENaC-mediated Na+ reabsorption and K+/H+ secretion. Low aldosterone therefore reduces distal potassium secretion and contributes to hyperkalemia."
  },
  {
    "id": 39,
    "question": "A patient develops pyelonephritis with fever, chills, flank pain, and costovertebral-angle tenderness. Urinalysis demonstrates WBC casts. What does the presence of WBC casts indicate?",
    "options": [
      "Bleeding from the glomerulus",
      "Inflammation within the renal tubules/interstitium",
      "Nephrotic-range protein loss",
      "Lower urinary tract infection only"
    ],
    "answer": 1,
    "explanation": "WBC casts form in the tubules and indicate upper-tract inflammation (pyelonephritis or AIN), not isolated cystitis. RBC casts indicate glomerular bleeding."
  },
  {
    "id": 40,
    "question": "A patient with severe proteinuria has lipiduria. Which urinary finding would most strongly support nephrotic syndrome?",
    "options": [
      "RBC casts",
      "WBC casts",
      "Oval fat bodies and fatty casts",
      "Muddy brown casts"
    ],
    "answer": 2,
    "explanation": "Nephrotic-range proteinuria with lipiduria produces oval fat bodies and fatty casts (Maltese-cross lipid under polarized light). RBC casts are nephritic; muddy-brown casts are ATN."
  },
  {
    "id": 41,
    "question": "A patient develops AKI following exposure to a nephrotoxic medication. FENa is 4%, urine sodium is high, and urine osmolality is relatively low. Which mechanism best explains the high urinary sodium?",
    "options": [
      "Enhanced tubular sodium conservation",
      "Failure of damaged tubules to reabsorb filtered sodium",
      "Increased aldosterone activity",
      "Increased proximal sodium reabsorption"
    ],
    "answer": 1,
    "explanation": "In ATN, injured tubular epithelium cannot reabsorb filtered sodium, so urine Na+ and FENa are high and urine is relatively isosmolar."
  },
  {
    "id": 42,
    "question": "A patient with CKD has a persistently reduced GFR and develops hyperphosphatemia. Which additional hormonal change is expected?",
    "options": [
      "Decreased PTH",
      "Increased PTH",
      "Increased calcitriol",
      "Increased intestinal calcium absorption"
    ],
    "answer": 1,
    "explanation": "Phosphate retention and low calcitriol lower ionized calcium and stimulate PTH (secondary hyperparathyroidism). Calcitriol and intestinal calcium absorption fall, not rise."
  },
  {
    "id": 43,
    "question": "A 40-year-old patient has hypertension and progressively enlarging kidneys. Ultrasound reveals numerous bilateral renal cysts. His father had a similar condition and died from a subarachnoid hemorrhage. Which diagnosis is most likely?",
    "options": [
      "ARPKD",
      "ADPKD",
      "Medullary cystic disease",
      "Alport syndrome"
    ],
    "answer": 1,
    "explanation": "Adult-onset bilateral renal cysts, hypertension, and autosomal dominant inheritance with a family history of subarachnoid hemorrhage indicate ADPKD (PKD1/PKD2). ARPKD presents in infancy with small/normal-sized kidneys and hepatic fibrosis."
  },
  {
    "id": 44,
    "question": "The patient in the previous question is at increased risk of intracranial complications due to an associated vascular abnormality. Which lesion is classically associated with this disease?",
    "options": [
      "Berry aneurysm of the circle of Willis",
      "Arteriovenous malformation of the spinal cord",
      "Cavernous hemangioma of the kidney",
      "Aortic coarctation"
    ],
    "answer": 0,
    "explanation": "ADPKD is associated with intracranial berry (saccular) aneurysms of the circle of Willis, which may rupture and cause subarachnoid hemorrhage."
  },
  {
    "id": 45,
    "question": "A patient with nephrotic syndrome develops generalized edema. Which Starling-force alteration most directly promotes movement of fluid from the intravascular compartment into the interstitium?",
    "options": [
      "Increased plasma oncotic pressure",
      "Decreased plasma oncotic pressure",
      "Decreased capillary hydrostatic pressure",
      "Increased interstitial oncotic clearance"
    ],
    "answer": 1,
    "explanation": "Urinary albumin loss lowers plasma oncotic pressure, so less fluid is retained in capillaries and fluid shifts into the interstitium, producing edema."
  },
  {
    "id": 46,
    "question": "A patient with glomerular disease has significant proteinuria but no RBC casts. Another patient has hematuria, RBC casts, hypertension, and mild-to-moderate proteinuria. Which statement best differentiates the two syndromes?",
    "options": [
      "Nephritic syndrome is dominated by massive protein loss",
      "Nephrotic syndrome is dominated by inflammatory glomerular injury",
      "Nephritic syndrome is characterized by hematuria and reduced GFR",
      "Nephrotic syndrome always causes RBC casts"
    ],
    "answer": 2,
    "explanation": "Nephritic syndrome features hematuria, RBC casts, hypertension, and reduced GFR from inflammatory glomerular injury. Nephrotic syndrome is dominated by heavy proteinuria without RBC casts."
  },
  {
    "id": 47,
    "question": "A patient develops renal failure with oliguria and hyperkalemia. ECG demonstrates peaked T waves. Which immediate treatment is most appropriate to stabilize the cardiac membrane?",
    "options": [
      "IV calcium gluconate",
      "Oral sodium bicarbonate only",
      "Furosemide as the sole treatment",
      "Oral potassium supplementation"
    ],
    "answer": 0,
    "explanation": "Peaked T waves indicate cardiotoxic hyperkalemia. Intravenous calcium gluconate immediately antagonizes membrane excitability. Shifting and removal of potassium follow, but calcium is first for ECG changes."
  },
  {
    "id": 48,
    "question": "A patient with severe hyperkalemia requires temporary intracellular shifting of potassium while definitive treatment is arranged. Which therapy is most appropriate?",
    "options": [
      "Insulin with glucose",
      "Oral potassium chloride",
      "Spironolactone",
      "ACE inhibitor"
    ],
    "answer": 0,
    "explanation": "Insulin drives potassium into cells via Na+/K+-ATPase; glucose is coadministered to prevent hypoglycemia. Spironolactone and ACE inhibitors raise potassium; KCl worsens hyperkalemia."
  },
  {
    "id": 49,
    "question": "A patient with CKD develops uremic symptoms, refractory hyperkalemia, severe metabolic acidosis, and pulmonary edema despite medical treatment. Which intervention is most appropriate?",
    "options": [
      "Increase oral protein intake",
      "Emergency renal replacement therapy",
      "Thiazide monotherapy",
      "Desmopressin"
    ],
    "answer": 1,
    "explanation": "AEIOU indications (acidosis, electrolytes, intoxications, overload, uremia) that are refractory to medical therapy warrant urgent dialysis/renal replacement therapy."
  },
  {
    "id": 50,
    "question": "A 65-year-old man develops severe AKI after prolonged hypotension. Initially his urine output is low, but several days later urine output increases dramatically to 5–6 liters/day while serum creatinine remains elevated. Which explanation best accounts for this phase?",
    "options": [
      "Complete recovery of tubular function with immediate normalization of GFR",
      "Persistent tubular dysfunction causing impaired urine concentrating ability during the recovery phase of ATN",
      "New-onset nephrotic syndrome causing massive proteinuria",
      "Increased aldosterone secretion causing excessive sodium and water retention"
    ],
    "answer": 1,
    "explanation": "The polyuric recovery phase of ATN occurs when GFR begins to return but tubules still cannot concentrate urine, producing high-output diuresis while creatinine remains elevated."
  },
  {
    "id": 51,
    "question": "A 23-year-old woman presents with primary amenorrhea. She has normal breast development, sparse pubic and axillary hair, and a short blind-ending vagina. Imaging demonstrates absence of a uterus. Which diagnosis is most likely?",
    "options": [
      "Turner syndrome",
      "Müllerian agenesis",
      "Complete androgen insensitivity syndrome",
      "Kallmann syndrome"
    ],
    "answer": 2,
    "explanation": "46,XY complete AIS: androgen receptor failure yields a female phenotype, breast development from peripheral estrogen, scant pubic/axillary hair, a blind vagina, and absent uterus (Müllerian structures regress because testes produce AMH). Turner has streak ovaries and a uterus; Müllerian agenesis (MRKH) has normal pubic hair."
  },
  {
    "id": 52,
    "question": "A 19-year-old woman presents with primary amenorrhea. She has short stature, webbed neck, shield chest, and poorly developed secondary sexual characteristics. Laboratory evaluation demonstrates markedly elevated FSH. Which diagnosis is most likely?",
    "options": [
      "Turner syndrome",
      "Klinefelter syndrome",
      "PCOS",
      "Androgen insensitivity"
    ],
    "answer": 0,
    "explanation": "45,X Turner syndrome causes streak gonads, hypergonadotropic hypogonadism (high FSH), short stature, and classic somatic features. Klinefelter is 47,XXY males; PCOS has secondary amenorrhea/oligomenorrhea with androgen excess."
  },
  {
    "id": 53,
    "question": "A 17-year-old girl has primary amenorrhea, absent secondary sexual characteristics, anosmia, and low serum LH and FSH. Which diagnosis best explains these findings?",
    "options": [
      "Turner syndrome",
      "Kallmann syndrome",
      "PCOS",
      "Premature ovarian failure"
    ],
    "answer": 1,
    "explanation": "Kallmann syndrome is defective GnRH neuron migration with anosmia and hypogonadotropic hypogonadism (low LH/FSH). Turner has high FSH. Premature ovarian insufficiency also has high gonadotropins."
  },
  {
    "id": 54,
    "question": "A 27-year-old woman has irregular menstrual cycles, acne, hirsutism, obesity, and difficulty conceiving. Laboratory testing demonstrates increased androgen levels. Ultrasound shows multiple small follicles in both ovaries. Which diagnosis is most likely?",
    "options": [
      "Endometriosis",
      "PCOS",
      "Premature ovarian failure",
      "Asherman syndrome"
    ],
    "answer": 1,
    "explanation": "PCOS combines ovulatory dysfunction, clinical/biochemical hyperandrogenism, and often polycystic ovarian morphology. Endometriosis causes pain and infertility without hyperandrogenism."
  },
  {
    "id": 55,
    "question": "A woman with PCOS has chronic anovulation and prolonged exposure of the endometrium to estrogen without adequate progesterone. Which complication is she particularly at risk for?",
    "options": [
      "Endometrial hyperplasia and carcinoma",
      "Cervical cancer only",
      "Ovarian torsion",
      "Vulvar squamous cell carcinoma"
    ],
    "answer": 0,
    "explanation": "Unopposed estrogen from chronic anovulation stimulates the endometrium, increasing risk of hyperplasia and type I endometrial carcinoma. Progesterone from ovulation normally opposes this effect."
  },
  {
    "id": 56,
    "question": "A woman presents with severe dysmenorrhea, deep dyspareunia, infertility, and chronic pelvic pain. Laparoscopy reveals multiple dark-blue lesions on the ovaries and pelvic peritoneum. Which diagnosis is most likely?",
    "options": [
      "Leiomyoma",
      "Endometriosis",
      "PID",
      "PCOS"
    ],
    "answer": 1,
    "explanation": "Ectopic endometrial implants cause cyclic pelvic pain, dyspareunia, and infertility. Powder-burn or dark-blue peritoneal and ovarian (chocolate-cyst) lesions are typical at laparoscopy."
  },
  {
    "id": 57,
    "question": "A woman with endometriosis has infertility despite regular ovulation. Which mechanism best explains her reduced fertility?",
    "options": [
      "Complete absence of estrogen",
      "Pelvic inflammation and adhesions interfering with normal reproductive anatomy",
      "Permanent suppression of FSH secretion",
      "Excessive progesterone secretion"
    ],
    "answer": 1,
    "explanation": "Endometriosis causes inflammation, adhesions, distorted tubo-ovarian anatomy, and impaired oocyte pickup/transport even when ovulation occurs."
  },
  {
    "id": 58,
    "question": "A 42-year-old woman has heavy menstrual bleeding and an enlarged irregular uterus. Ultrasound demonstrates multiple well-circumscribed masses within the uterine wall. Which diagnosis is most likely?",
    "options": [
      "Endometriosis",
      "Leiomyomas",
      "Endometrial carcinoma",
      "Ovarian carcinoma"
    ],
    "answer": 1,
    "explanation": "Uterine leiomyomas (fibroids) are well-circumscribed smooth-muscle tumors causing an enlarged irregular uterus and menorrhagia, typically in reproductive-age women."
  },
  {
    "id": 59,
    "question": "A woman with uterine leiomyomas is experiencing menorrhagia and iron-deficiency anemia. Which type of fibroid is most strongly associated with heavy menstrual bleeding?",
    "options": [
      "Subserosal",
      "Submucosal",
      "Cervical only",
      "Broad-ligament fibroid"
    ],
    "answer": 1,
    "explanation": "Submucosal fibroids distort the endometrial cavity and most strongly cause heavy menstrual bleeding and anemia. Subserosal fibroids more often cause bulk symptoms."
  },
  {
    "id": 60,
    "question": "A woman presents with infertility and secondary amenorrhea after undergoing uterine curettage following a pregnancy complication. Imaging demonstrates intrauterine adhesions. Which diagnosis is most likely?",
    "options": [
      "Sheehan syndrome",
      "Asherman syndrome",
      "Turner syndrome",
      "PCOS"
    ],
    "answer": 1,
    "explanation": "Asherman syndrome is intrauterine synechiae after curettage or instrumentation, causing amenorrhea and infertility. Sheehan syndrome is postpartum pituitary necrosis."
  },
  {
    "id": 61,
    "question": "A woman develops postpartum hemorrhage followed by failure to lactate and persistent amenorrhea. Laboratory studies reveal low levels of pituitary hormones. Which diagnosis should be suspected?",
    "options": [
      "Sheehan syndrome",
      "PCOS",
      "Prolactinoma",
      "Endometriosis"
    ],
    "answer": 0,
    "explanation": "Ischemic necrosis of the enlarged pituitary after postpartum hemorrhage (Sheehan) causes failure of lactation (low prolactin) and hypogonadotropic amenorrhea with other pituitary deficiencies."
  },
  {
    "id": 62,
    "question": "A 30-year-old woman presents with galactorrhea, amenorrhea, and infertility. Serum prolactin is markedly elevated. Which hormonal change directly contributes to her anovulation?",
    "options": [
      "Increased GnRH secretion",
      "Suppression of pulsatile GnRH secretion",
      "Increased FSH secretion",
      "Increased LH surge frequency"
    ],
    "answer": 1,
    "explanation": "Hyperprolactinemia suppresses hypothalamic GnRH pulsatility, lowering LH/FSH and preventing the LH surge, which causes anovulation, amenorrhea, and infertility."
  },
  {
    "id": 63,
    "question": "A woman has amenorrhea and galactorrhea. Pregnancy has been excluded, and prolactin is markedly elevated. MRI reveals a pituitary microadenoma. Which diagnosis is most likely?",
    "options": [
      "Prolactinoma",
      "Craniopharyngioma",
      "Sheehan syndrome",
      "Kallmann syndrome"
    ],
    "answer": 0,
    "explanation": "A prolactin-secreting pituitary adenoma (prolactinoma) produces hyperprolactinemia, galactorrhea, and hypogonadotropic amenorrhea. Sheehan has low pituitary hormones after PPH."
  },
  {
    "id": 64,
    "question": "A woman presents with infertility due to failure of ovulation. Which hormonal event is normally required to trigger ovulation during the menstrual cycle?",
    "options": [
      "Sudden fall in estrogen",
      "LH surge",
      "Sudden rise in progesterone before ovulation",
      "Fall in FSH to zero"
    ],
    "answer": 1,
    "explanation": "Midcycle estradiol positive feedback triggers an LH surge, which causes oocyte maturation, follicular rupture, and ovulation. Progesterone rises after ovulation from the corpus luteum."
  },
  {
    "id": 65,
    "question": "A woman is being evaluated for ovulation. Which hormone is most appropriately measured in the mid-luteal phase to confirm that ovulation has occurred?",
    "options": [
      "Progesterone",
      "Prolactin",
      "Testosterone",
      "AMH"
    ],
    "answer": 0,
    "explanation": "A mid-luteal (day-21) serum progesterone elevation confirms that a corpus luteum formed after ovulation. AMH reflects ovarian reserve, not that a given cycle ovulated."
  },
  {
    "id": 66,
    "question": "A woman has infertility due to bilateral fallopian tube obstruction following previous pelvic infection. Which organism is classically associated with pelvic inflammatory disease leading to tubal scarring?",
    "options": [
      "Chlamydia trachomatis",
      "Candida albicans",
      "HPV",
      "Gardnerella vaginalis"
    ],
    "answer": 0,
    "explanation": "Chlamydia trachomatis (and Neisseria gonorrhoeae) cause PID with tubal scarring, hydrosalpinx, and infertility. Candida, HPV, and Gardnerella do not classically produce tubal obstruction."
  },
  {
    "id": 67,
    "question": "A sexually active woman presents with lower abdominal pain, fever, cervical motion tenderness, and abnormal vaginal discharge. Which diagnosis is most likely?",
    "options": [
      "Pelvic inflammatory disease",
      "Endometriosis",
      "Ovarian cancer",
      "Fibroid uterus"
    ],
    "answer": 0,
    "explanation": "The PID triad is pelvic pain, cervical motion tenderness (chandelier sign), and adnexal tenderness, often with fever and discharge, in a sexually active woman."
  },
  {
    "id": 68,
    "question": "A woman with PID develops infertility years later. Which complication most directly causes infertility?",
    "options": [
      "Endometrial hyperplasia",
      "Tubal scarring and adhesions",
      "Increased ovarian reserve",
      "Cervical ectropion"
    ],
    "answer": 1,
    "explanation": "Ascending infection damages tubal epithelium and produces adhesions that prevent gamete transport and increase ectopic-pregnancy risk."
  },
  {
    "id": 69,
    "question": "A woman presents with sudden severe unilateral lower abdominal pain, nausea, and vomiting. Ultrasound demonstrates an enlarged ovary with reduced blood flow. Which diagnosis is most likely?",
    "options": [
      "Ovarian torsion",
      "Endometriosis",
      "Cervical cancer",
      "PID"
    ],
    "answer": 0,
    "explanation": "Ovarian torsion presents with sudden unilateral pain, nausea, and an enlarged ovary with diminished Doppler flow. It is a surgical emergency."
  },
  {
    "id": 70,
    "question": "A woman with a large ovarian mass develops sudden severe pelvic pain and vomiting. Ovarian torsion is suspected. Which anatomical feature predisposes the ovary to torsion?",
    "options": [
      "Long vascular pedicle",
      "Short ureter",
      "Broad attachment to the uterus",
      "Absence of ovarian blood supply"
    ],
    "answer": 0,
    "explanation": "An enlarged ovary on a long infundibulopelvic (suspensory) vascular pedicle can twist, occluding venous then arterial flow."
  },
  {
    "id": 71,
    "question": "A 58-year-old woman presents with postmenopausal vaginal bleeding. She has obesity, hypertension, and diabetes. Which diagnosis must be excluded first?",
    "options": [
      "Endometrial carcinoma",
      "PCOS",
      "Cervical ectropion",
      "Physiological menopause"
    ],
    "answer": 0,
    "explanation": "Postmenopausal bleeding is endometrial carcinoma until proven otherwise, especially with unopposed estrogen risk factors (obesity, diabetes, hypertension). Evaluation requires endometrial sampling."
  },
  {
    "id": 72,
    "question": "A woman with endometrial carcinoma has obesity and chronic anovulatory cycles. Which hormonal environment contributes most strongly to her risk?",
    "options": [
      "Unopposed estrogen exposure",
      "Excess progesterone",
      "Complete estrogen deficiency",
      "Excess testosterone alone"
    ],
    "answer": 0,
    "explanation": "Peripheral aromatization of androgens to estrogen without cyclic progesterone (obesity, anovulation) drives endometrial hyperplasia and type I endometrioid carcinoma."
  },
  {
    "id": 73,
    "question": "A 35-year-old woman presents with a friable cervical lesion and abnormal vaginal bleeding after intercourse. Persistent infection with which pathogen is most strongly associated with cervical carcinoma?",
    "options": [
      "HSV-1",
      "HPV 16 and 18",
      "Chlamydia trachomatis",
      "EBV"
    ],
    "answer": 1,
    "explanation": "High-risk HPV types 16 and 18 cause nearly all cervical cancers. Postcoital bleeding and a friable cervical lesion are classic presentations."
  },
  {
    "id": 74,
    "question": "The major oncogenic effect of high-risk HPV is mediated primarily through viral proteins that interfere with:",
    "options": [
      "p53 and Rb tumor suppressor pathways",
      "BRCA1 only",
      "Estrogen receptors",
      "FSH receptors"
    ],
    "answer": 0,
    "explanation": "HPV E6 ubiquitinates p53 and E7 inactivates Rb, allowing uncontrolled cell-cycle progression and malignant transformation."
  },
  {
    "id": 75,
    "question": "A pregnant woman presents with painless vaginal bleeding in the third trimester. Ultrasound demonstrates placental tissue covering the internal cervical os. Which diagnosis is most likely?",
    "options": [
      "Placental abruption",
      "Placenta previa",
      "Uterine rupture",
      "Vasa previa"
    ],
    "answer": 1,
    "explanation": "Placenta previa is painless third-trimester bleeding with placenta covering the internal os. Abruption is painful bleeding with a tender, rigid uterus."
  },
  {
    "id": 76,
    "question": "A pregnant woman presents with painful vaginal bleeding, uterine tenderness, and a rigid uterus. Which diagnosis is most likely?",
    "options": [
      "Placenta previa",
      "Placental abruption",
      "Cervical insufficiency",
      "Molar pregnancy"
    ],
    "answer": 1,
    "explanation": "Premature placental separation (abruption) causes painful bleeding, a hypertonic/tender uterus, and maternal-fetal compromise. Previa is painless."
  },
  {
    "id": 77,
    "question": "A pregnant woman develops hypertension, proteinuria, headache, and visual disturbances at 34 weeks of gestation. Which diagnosis is most likely?",
    "options": [
      "Gestational diabetes",
      "Preeclampsia",
      "Placenta previa",
      "Hyperemesis gravidarum"
    ],
    "answer": 1,
    "explanation": "Preeclampsia is new hypertension after 20 weeks with proteinuria or end-organ dysfunction (headache, visual changes). Delivery is definitive treatment after stabilization."
  },
  {
    "id": 78,
    "question": "A pregnant woman with severe preeclampsia develops a generalized tonic-clonic seizure. Which medication is first-line for seizure control and prevention of recurrent seizures?",
    "options": [
      "Diazepam",
      "Magnesium sulfate",
      "Phenytoin",
      "Mannitol"
    ],
    "answer": 1,
    "explanation": "Eclampsia is a seizure in the setting of preeclampsia. Magnesium sulfate is first-line to control and prevent recurrent eclamptic seizures."
  },
  {
    "id": 79,
    "question": "A pregnant woman has hypertension, hemolysis, elevated liver enzymes, and thrombocytopenia. Which complication is represented by this clinical picture?",
    "options": [
      "HELLP syndrome",
      "Sheehan syndrome",
      "Asherman syndrome",
      "Fitz-Hugh–Curtis syndrome"
    ],
    "answer": 0,
    "explanation": "HELLP (Hemolysis, Elevated Liver enzymes, Low Platelets) is a severe preeclampsia variant. Fitz-Hugh–Curtis is perihepatitis from PID."
  },
  {
    "id": 80,
    "question": "A pregnant woman develops gestational diabetes due to progressive insulin resistance during pregnancy. Which placental hormone contributes significantly to this physiological insulin resistance?",
    "options": [
      "Human placental lactogen",
      "Oxytocin",
      "FSH",
      "Prolactin alone"
    ],
    "answer": 0,
    "explanation": "Human placental lactogen (hPL/human chorionic somatomammotropin) promotes lipolysis and insulin resistance to spare glucose for the fetus, contributing to gestational diabetes."
  },
  {
    "id": 81,
    "question": "A woman in labor develops failure of cervical dilation despite adequate uterine contractions. Which phase of labor is primarily affected?",
    "options": [
      "Second stage",
      "Active phase of first stage",
      "Third stage",
      "Fourth stage"
    ],
    "answer": 1,
    "explanation": "The active phase of the first stage is defined by progressive cervical dilation. Arrest of dilation with adequate contractions is an active-phase disorder. Second stage is from full dilation to delivery."
  },
  {
    "id": 82,
    "question": "A postpartum woman develops heavy bleeding immediately after delivery. The uterus is enlarged and boggy on examination. Which is the most likely cause?",
    "options": [
      "Uterine atony",
      "Cervical carcinoma",
      "Ectopic pregnancy",
      "Placenta previa"
    ],
    "answer": 0,
    "explanation": "Uterine atony is the most common cause of immediate postpartum hemorrhage. A boggy, enlarged uterus fails to contract and tamponade spiral arteries."
  },
  {
    "id": 83,
    "question": "A woman has postpartum hemorrhage due to uterine atony. Which medication is commonly used as a first-line uterotonic?",
    "options": [
      "Oxytocin",
      "Magnesium sulfate",
      "Methotrexate",
      "Progesterone"
    ],
    "answer": 0,
    "explanation": "Oxytocin is first-line uterotonic therapy for atony (with uterine massage). Magnesium sulfate relaxes the uterus; methotrexate treats ectopic pregnancy."
  },
  {
    "id": 84,
    "question": "A woman presents with severe unilateral pelvic pain and vaginal bleeding at approximately 7 weeks of pregnancy. Serum β-hCG is positive, and ultrasound shows no intrauterine gestational sac. Which diagnosis must be strongly suspected?",
    "options": [
      "Ectopic pregnancy",
      "Complete mole",
      "Placenta previa",
      "Endometriosis"
    ],
    "answer": 0,
    "explanation": "Pregnancy of unknown location with pain and bleeding is ectopic pregnancy until excluded. A complete mole shows a snowstorm uterus and very high β-hCG; previa occurs later in pregnancy."
  },
  {
    "id": 85,
    "question": "A woman with ectopic pregnancy becomes hypotensive with severe abdominal pain and shoulder-tip pain. Which complication is most likely?",
    "options": [
      "Ruptured tubal ectopic pregnancy causing hemoperitoneum",
      "Ovarian hyperstimulation",
      "Placental abruption",
      "Uterine fibroid degeneration"
    ],
    "answer": 0,
    "explanation": "Tubal rupture produces intraperitoneal bleeding, shock, and referred diaphragmatic (shoulder-tip) pain from hemoperitoneum. This is a surgical emergency."
  },
  {
    "id": 86,
    "question": "A hemodynamically stable woman has an early unruptured ectopic pregnancy with appropriate clinical and laboratory criteria. Which drug may be used for medical management?",
    "options": [
      "Methotrexate",
      "Oxytocin",
      "Misoprostol only",
      "Clomiphene"
    ],
    "answer": 0,
    "explanation": "Methotrexate, a folate antagonist, is used for selected unruptured ectopics in stable patients. Unstable or ruptured cases require surgery."
  },
  {
    "id": 87,
    "question": "A pregnant woman has very high β-hCG levels, hyperemesis, uterine size larger than expected for gestational age, and ultrasound demonstrates a “snowstorm” appearance without a fetus. Which diagnosis is most likely?",
    "options": [
      "Complete hydatidiform mole",
      "Partial hydatidiform mole",
      "Ectopic pregnancy",
      "Placenta previa"
    ],
    "answer": 0,
    "explanation": "Complete mole (usually 46,XX paternal) has marked trophoblastic proliferation, very high β-hCG, a snowstorm uterus, and no fetus. Partial moles often contain fetal tissue and less extreme hCG elevation."
  },
  {
    "id": 88,
    "question": "A woman with a complete hydatidiform mole is at increased risk of developing persistent trophoblastic disease. Which malignant condition may develop?",
    "options": [
      "Choriocarcinoma",
      "Cervical squamous carcinoma",
      "Endometrial carcinoma",
      "Dysgerminoma"
    ],
    "answer": 0,
    "explanation": "Gestational trophoblastic neoplasia, including invasive mole and choriocarcinoma, may follow a complete mole. Serial β-hCG surveillance is required after evacuation."
  },
  {
    "id": 89,
    "question": "A 16-year-old boy has delayed puberty, small firm testes, gynecomastia, and infertility. Laboratory studies show high FSH and LH with low testosterone. Which diagnosis is most likely?",
    "options": [
      "Klinefelter syndrome",
      "Kallmann syndrome",
      "Androgen insensitivity syndrome",
      "Turner syndrome"
    ],
    "answer": 0,
    "explanation": "47,XXY Klinefelter causes primary testicular failure (small firm testes), hypergonadotropic hypogonadism, gynecomastia, and infertility. Kallmann has low gonadotropins and anosmia."
  },
  {
    "id": 90,
    "question": "A man presents with infertility and a history of bilateral painless scrotal swelling described as a “bag of worms.” The swelling becomes more prominent when standing. Which diagnosis is most likely?",
    "options": [
      "Hydrocele",
      "Varicocele",
      "Testicular torsion",
      "Epididymitis"
    ],
    "answer": 1,
    "explanation": "A varicocele is dilation of the pampiniform plexus, classically a standing “bag of worms,” and is associated with impaired spermatogenesis and infertility."
  },
  {
    "id": 91,
    "question": "A young man develops sudden severe unilateral testicular pain with nausea and a high-riding testis. The cremasteric reflex is absent. Which diagnosis requires immediate treatment?",
    "options": [
      "Epididymitis",
      "Testicular torsion",
      "Hydrocele",
      "Varicocele"
    ],
    "answer": 1,
    "explanation": "Testicular torsion is an emergency: sudden pain, high-riding testis, and absent cremasteric reflex. Immediate surgical detorsion is required to salvage the testis."
  },
  {
    "id": 92,
    "question": "A young sexually active man develops gradual testicular pain, fever, dysuria, and epididymal tenderness. Elevation of the scrotum provides some pain relief. Which diagnosis is most likely?",
    "options": [
      "Testicular torsion",
      "Epididymitis",
      "Testicular cancer",
      "Hydrocele"
    ],
    "answer": 1,
    "explanation": "Epididymitis presents more gradually with infectious urinary symptoms; Prehn sign (relief with elevation) may be positive and the cremasteric reflex is usually preserved."
  },
  {
    "id": 93,
    "question": "A man presents with painless enlargement of one testis. Examination reveals a firm intratesticular mass. Which diagnosis should be assumed until proven otherwise?",
    "options": [
      "Testicular malignancy",
      "Hydrocele",
      "Varicocele",
      "Epididymitis"
    ],
    "answer": 0,
    "explanation": "A painless firm intratesticular mass is testicular cancer until proven otherwise. Hydrocele transilluminates; varicocele is extra-testicular and positional."
  },
  {
    "id": 94,
    "question": "A 22-year-old man has a testicular mass. Serum AFP is elevated. Which tumor is most strongly associated with AFP production?",
    "options": [
      "Seminoma",
      "Yolk sac tumor",
      "Leydig cell tumor",
      "Choriocarcinoma"
    ],
    "answer": 1,
    "explanation": "Yolk-sac (endodermal-sinus) tumors produce AFP (and Schiller–Duval bodies). Pure seminoma does not produce AFP; choriocarcinoma produces β-hCG."
  },
  {
    "id": 95,
    "question": "A young man has a testicular tumor with markedly elevated β-hCG and develops gynecomastia. Which tumor component is most likely producing β-hCG?",
    "options": [
      "Syncytiotrophoblastic cells",
      "Sertoli cells",
      "Leydig cells",
      "Spermatogonia"
    ],
    "answer": 0,
    "explanation": "Syncytiotrophoblast (choriocarcinoma or seminoma with syncytiotrophoblasts) secretes β-hCG, which can stimulate Leydig cells and cause gynecomastia."
  },
  {
    "id": 96,
    "question": "A couple has been attempting conception for more than one year without success. The male partner undergoes semen analysis. Which parameter is most directly assessed to evaluate male fertility?",
    "options": [
      "Sperm concentration, motility, and morphology",
      "Serum prolactin alone",
      "PSA only",
      "Serum estrogen only"
    ],
    "answer": 0,
    "explanation": "Semen analysis evaluates sperm concentration, motility, and morphology—the core parameters of male fertility. Hormones are adjunctive if the analysis is abnormal."
  },
  {
    "id": 97,
    "question": "A man has infertility with low sperm count and bilateral testicular atrophy. His serum testosterone is low while FSH and LH are elevated. Which category of hypogonadism is most likely?",
    "options": [
      "Primary testicular failure",
      "Secondary pituitary failure",
      "Hypothalamic failure with low gonadotropins",
      "Hyperprolactinemia with normal gonadal function"
    ],
    "answer": 0,
    "explanation": "High FSH/LH with low testosterone indicates primary (hypergonadotropic) hypogonadism—the testes fail despite pituitary stimulation. Secondary/tertiary failure has low or inappropriately normal gonadotropins."
  },
  {
    "id": 98,
    "question": "A woman wants highly effective reversible contraception for several years and prefers a method that does not require daily compliance. Which option provides long-term reversible contraception?",
    "options": [
      "Combined oral contraceptive pill",
      "Copper IUD",
      "Male condom used intermittently",
      "Fertility-awareness method"
    ],
    "answer": 1,
    "explanation": "The copper IUD is long-acting reversible contraception that does not require daily use. Combined pills require daily adherence; condoms and fertility awareness are less effective with typical use."
  },
  {
    "id": 99,
    "question": "A woman taking combined oral contraceptive pills asks about their principal mechanism of preventing pregnancy. Which mechanism is most important?",
    "options": [
      "Destruction of the endometrium only",
      "Suppression of ovulation through inhibition of gonadotropin secretion",
      "Permanent tubal obstruction",
      "Direct destruction of sperm within the testes"
    ],
    "answer": 1,
    "explanation": "Combined estrogen–progestin pills suppress GnRH/LH/FSH and thereby prevent the LH surge and ovulation. Secondary effects include thickened cervical mucus and endometrial thinning."
  },
  {
    "id": 100,
    "question": "A 29-year-old woman presents with infertility, irregular menstrual cycles, hirsutism, acne, and obesity. Laboratory studies demonstrate increased LH relative to FSH, elevated androgens, and evidence of chronic anovulation. Ultrasound shows multiple small follicles arranged around the ovarian periphery. Which combination of findings most strongly establishes the diagnosis?",
    "options": [
      "Hyperandrogenism + ovulatory dysfunction ± polycystic ovarian morphology",
      "Hyperprolactinemia + low FSH + galactorrhea",
      "High FSH + low estrogen + ovarian atrophy",
      "Low LH + low FSH + anosmia"
    ],
    "answer": 0,
    "explanation": "Rotterdam-type diagnosis of PCOS requires hyperandrogenism and ovulatory dysfunction, with polycystic ovarian morphology as a supporting feature. Option B is prolactinoma, C premature ovarian insufficiency, and D Kallmann syndrome."
  }
];
