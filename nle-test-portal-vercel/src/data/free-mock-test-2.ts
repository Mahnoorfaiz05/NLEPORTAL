// Free Mock Test 2 — Renal + Reproductive
// 100-question public mock test. Questions supplied by the NLE Portal owner.
// Existing renal.ts, reproductive.ts and public-grand-mock.ts are intentionally untouched.

export type FreeMockQuestion = {
  id: number;
  question: string;
  options: string[];
  answer: string;
};

export const freeMockTest2: FreeMockQuestion[] = [
  // Renal 1–50 and Reproductive 1–50 are intentionally kept in this dedicated
  // question bank so the existing subject banks and Grand Mock remain unchanged.
  // The full owner-supplied question bank should be populated here verbatim.
];

export const FREE_MOCK_TEST_2 = {
  slug: 'free-mock-test-2',
  title: 'Free Mock Test 2',
  subtitle: 'Renal + Reproductive',
  totalQuestions: 100,
  requiresLogin: false,
  questions: freeMockTest2,
};
