import { cvsQuestions } from "./cvs";
import { gitQuestions } from "./git";
import { respiratoryQuestions } from "./respiratory";
import { endocrinologyQuestions } from "./endocrinology";
import { renalQuestions } from "./renal";
import { neurologyQuestions } from "./neurology";
import { rheumatologyQuestions } from "./rheumatology";
import { reproductiveQuestions } from "./reproductive";
import { hematologyQuestions } from "./hematology";
import { immunologyQuestions } from "./immunology";
import { biochemistryQuestions } from "./biochemistry";
import { microbiologyQuestions } from "./microbiology";
import { anatomyQuestions } from "./anatomy";
import { physiologyQuestions } from "./physiology";
import { generalPathologyQuestions } from "./general-pathology";
import { communityFamilyMedicineQuestions } from "./community-family-medicine";
import { pharmacologyQuestions } from "./pharmacology";
import { grandMockToughQuestions } from "./grand-mock-tough";
import { grandMockModerateQuestions } from "./grand-mock-moderate";
import { grandMockExam1Questions } from "./grand-mock-exam-1";
import { grandMockExam2Questions } from "./grand-mock-exam-2";
import { grandMockExam3Questions } from "./grand-mock-exam-3";
import { grandMockExam4Questions } from "./grand-mock-exam-4";
import { grandMockExam5Questions } from "./grand-mock-exam-5";
import { grandMockExam6Questions } from "./grand-mock-exam-6";
import { grandMockExam7Questions } from "./grand-mock-exam-7";
import { grandMockExam8Questions } from "./grand-mock-exam-8";
import { publicGrandMockQuestions } from "./public-grand-mock";
import { publicGrandMock2Questions } from "./public-grand-mock-2";
import { publicGrandMock3Questions } from "./public-grand-mock-3";
import { pediatricsQuestions } from "./pediatrics";
import { entQuestions } from "./ent";
import { surgeryQuestions } from "./surgery";
import { medicineQuestions } from "./medicine";
import { tests as baseTests } from "./types";
import { grandMock2026BankAliases, grandMock2026Tests } from "./grand-mock-2026";
export type { Question, TestInfo } from "./types";

const coreBanks: Record<string, typeof cvsQuestions> = {
  cvs: cvsQuestions,
  git: gitQuestions,
  respiratory: respiratoryQuestions,
  endocrinology: endocrinologyQuestions,
  renal: renalQuestions,
  neurology: neurologyQuestions,
  rheumatology: rheumatologyQuestions,
  reproductive: reproductiveQuestions,
  hematology: hematologyQuestions,
  immunology: immunologyQuestions,
  biochemistry: biochemistryQuestions,
  microbiology: microbiologyQuestions,
  anatomy: anatomyQuestions,
  physiology: physiologyQuestions,
  "general-pathology": generalPathologyQuestions,
  "community-family-medicine": communityFamilyMedicineQuestions,
  pharmacology: pharmacologyQuestions,
  "grand-mock-tough": grandMockToughQuestions,
  "grand-mock-moderate": grandMockModerateQuestions,
  "grand-mock-exam-1": grandMockExam1Questions,
  "grand-mock-exam-2": grandMockExam2Questions,
  "grand-mock-exam-3": grandMockExam3Questions,
  "grand-mock-exam-4": grandMockExam4Questions,
  "grand-mock-exam-5": grandMockExam5Questions,
  "grand-mock-exam-6": grandMockExam6Questions,
  "grand-mock-exam-7": grandMockExam7Questions,
  "grand-mock-exam-8": grandMockExam8Questions,
  "public-grand-mock": publicGrandMockQuestions,
  "public-grand-mock-2": publicGrandMock2Questions,
  "public-grand-mock-3": publicGrandMock3Questions,
  pediatrics: pediatricsQuestions,
  ent: entQuestions,
  surgery: surgeryQuestions,
  medicine: medicineQuestions,
};

export const tests = [...baseTests, ...grandMock2026Tests];
export const questionBanks: Record<string, typeof cvsQuestions> = {
  ...coreBanks,
  ...grandMock2026BankAliases(coreBanks),
};
