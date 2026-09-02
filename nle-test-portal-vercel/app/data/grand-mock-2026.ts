import type { Question, TestInfo } from "./types";
import { tests as baseTests } from "./types";

const SYSTEM_SOURCES = [
  "cvs",
  "git",
  "respiratory",
  "endocrinology",
  "renal",
  "neurology",
  "rheumatology",
  "reproductive",
] as const;

const BASIC_SOURCES = [
  "immunology",
  "biochemistry",
  "microbiology",
  "anatomy",
  "physiology",
  "general-pathology",
  "community-family-medicine",
  "pharmacology",
] as const;

function fromSource(sourceSlug: string, group: "systems" | "basic"): TestInfo {
  const source = baseTests.find((t) => t.slug === sourceSlug);
  if (!source) throw new Error(`Grand Mock 2026 source test not found: ${sourceSlug}`);
  return {
    ...source,
    slug: `gm2026-${sourceSlug}`,
    category: "grand2026",
    group,
    questionCount: source.questionCount,
  };
}

export const grandMock2026Tests: TestInfo[] = [
  ...SYSTEM_SOURCES.map((slug) => fromSource(slug, "systems")),
  ...BASIC_SOURCES.map((slug) => fromSource(slug, "basic")),
];

export function grandMock2026BankAliases(
  banks: Record<string, Question[]>
): Record<string, Question[]> {
  const aliases: Record<string, Question[]> = {};
  for (const slug of [...SYSTEM_SOURCES, ...BASIC_SOURCES]) {
    const bank = banks[slug];
    if (bank) aliases[`gm2026-${slug}`] = bank;
  }
  return aliases;
}
