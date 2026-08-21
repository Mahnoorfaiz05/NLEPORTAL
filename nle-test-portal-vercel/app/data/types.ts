export type Question={id:number;question:string;options:string[];answer:number;explanation:string};
export type TestInfo={slug:string;name:string;short:string;icon:string;color:string;questionCount:number;duration:number;category:"systems"|"basic"};
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
  {"slug":"pharmacology","name":"Pharmacology","short":"PHARMA","icon":"⚕","color":"#8a5a35","questionCount":100,"duration":120,"category":"basic"}
];
