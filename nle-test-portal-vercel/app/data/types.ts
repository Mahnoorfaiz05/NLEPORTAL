export type Question={id:number;question:string;options:string[];answer:number;explanation:string};
export type TestInfo={slug:string;name:string;short:string;icon:string;color:string;questionCount:number;duration:number;category:"systems"|"basic"|"grand"};
export const tests:TestInfo[]=[
  {
    "slug": "cvs",
    "name": "Cardiovascular System",
    "short": "CVS",
    "icon": "♥",
    "color": "#d94b59",
    "questionCount": 120,
    "duration": 150,
    "category": "systems"
  },
  {
    "slug": "git",
    "name": "Gastrointestinal System",
    "short": "GIT",
    "icon": "◆",
    "color": "#f29a3f",
    "questionCount": 120,
    "duration": 150,
    "category": "systems"
  },
  {
    "slug": "respiratory",
    "name": "Respiratory System",
    "short": "RESP",
    "icon": "◌",
    "color": "#16a6b6",
    "questionCount": 100,
    "duration": 120,
    "category": "systems"
  },
  {
    "slug": "endocrinology",
    "name": "Endocrinology",
    "short": "ENDO",
    "icon": "✦",
    "color": "#8a5bd6",
    "questionCount": 100,
    "duration": 120,
    "category": "systems"
  },
  {
    "slug": "renal",
    "name": "Renal System",
    "short": "RENAL",
    "icon": "◒",
    "color": "#2684d8",
    "questionCount": 120,
    "duration": 150,
    "category": "systems"
  },
  {
    "slug": "neurology",
    "name": "Neurology",
    "short": "NEURO",
    "icon": "⌁",
    "color": "#6657d9",
    "questionCount": 100,
    "duration": 120,
    "category": "systems"
  },
  {
    "slug": "rheumatology",
    "name": "Rheumatology",
    "short": "RHEUM",
    "icon": "✣",
    "color": "#d36b90",
    "questionCount": 100,
    "duration": 120,
    "category": "systems"
  },
  {
    "slug": "reproductive",
    "name": "Reproductive System",
    "short": "REPRO",
    "icon": "∞",
    "color": "#dd668c",
    "questionCount": 100,
    "duration": 120,
    "category": "systems"
  },
  {"slug":"hematology","name":"Hematology","short":"HEME","icon":"◉","color":"#a62f48","questionCount":100,"duration":120,"category":"systems"},
  {"slug":"immunology","name":"Immunology","short":"IMMUNO","icon":"🧬","color":"#0f8f88","questionCount":100,"duration":120,"category":"basic"},
  {"slug":"biochemistry","name":"Biochemistry","short":"BIOCHEM","icon":"⌬","color":"#7656c8","questionCount":100,"duration":120,"category":"basic"},
  {"slug":"microbiology","name":"Microbiology","short":"MICRO","icon":"🦠","color":"#318568","questionCount":100,"duration":120,"category":"basic"},
  {"slug":"anatomy","name":"Anatomy","short":"ANAT","icon":"◫","color":"#d06b45","questionCount":100,"duration":120,"category":"basic"},
  {"slug":"physiology","name":"Physiology","short":"PHYSIO","icon":"⌁","color":"#3d78bd","questionCount":100,"duration":120,"category":"basic"},
  {"slug":"general-pathology","name":"General Pathology","short":"PATH","icon":"◉","color":"#be4f68","questionCount":100,"duration":120,"category":"basic"},
  {"slug":"community-family-medicine","name":"Community & Family Medicine","short":"CFM","icon":"◇","color":"#16839a","questionCount":130,"duration":150,"category":"basic"},
  {"slug":"pharmacology","name":"Pharmacology","short":"PHARMA","icon":"⚕","color":"#8a5a35","questionCount":100,"duration":120,"category":"basic"},
  {"slug":"grand-mock-tough","name":"NLE Grand Mock Test 1","short":"MOCK 01","icon":"01","color":"#b7791f","questionCount":200,"duration":180,"category":"grand"},
  {"slug":"grand-mock-moderate","name":"NLE Grand Mock Test 2","short":"MOCK 02","icon":"02","color":"#6b46c1","questionCount":200,"duration":180,"category":"grand"},
  {"slug":"grand-mock-exam-1","name":"NLE Grand Mock Test 3","short":"MOCK 03","icon":"03","color":"#b45309","questionCount":200,"duration":180,"category":"grand"},
  {"slug":"grand-mock-exam-2","name":"NLE Grand Mock Test 4","short":"MOCK 04","icon":"04","color":"#9f1239","questionCount":200,"duration":180,"category":"grand"},
  {"slug":"grand-mock-exam-3","name":"NLE Grand Mock Test 5","short":"MOCK 05","icon":"05","color":"#6d28d9","questionCount":200,"duration":180,"category":"grand"},
  {"slug":"grand-mock-exam-4","name":"NLE Grand Mock Test 6","short":"MOCK 06","icon":"06","color":"#1d4ed8","questionCount":200,"duration":180,"category":"grand"},
  {"slug":"grand-mock-exam-5","name":"NLE Grand Mock Test 7","short":"MOCK 07","icon":"07","color":"#0f766e","questionCount":200,"duration":180,"category":"grand"},
  {"slug":"grand-mock-exam-6","name":"NLE Grand Mock Test 8","short":"MOCK 08","icon":"08","color":"#15803d","questionCount":200,"duration":180,"category":"grand"},
  {"slug":"grand-mock-exam-7","name":"NLE Grand Mock Test 9","short":"MOCK 09","icon":"09","color":"#a16207","questionCount":200,"duration":180,"category":"grand"},
  {"slug":"grand-mock-exam-8","name":"NLE Grand Mock Test 10","short":"MOCK 10","icon":"10","color":"#be123c","questionCount":200,"duration":180,"category":"grand"}
];
