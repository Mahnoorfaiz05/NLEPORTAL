import json, re, pathlib

ROOT = pathlib.Path(__file__).resolve().parents[1]
RAW = ROOT / "scripts" / "raw"
OUT = ROOT / "app" / "data"

def parse(text: str):
    text = text.replace("\r\n", "\n")
    chunks = re.split(r"(?=^Q\d+\.)", text, flags=re.M)
    questions = []
    for chunk in chunks:
        chunk = chunk.strip()
        m = re.match(r"Q(\d+)\.\s*", chunk)
        if not m:
            continue
        qid = int(m.group(1))
        body = chunk[m.end():]
        ans_m = re.search(r"\nAnswer:\s*([A-Ea-e])(?:\.|$)", body)
        exp_m = re.search(r"\nExplanation:\s*", body)
        if not ans_m or not exp_m:
            raise SystemExit(f"Missing answer/explanation for Q{qid}")
        stem_and_opts = body[: ans_m.start()]
        explanation = body[exp_m.end():].strip()
        answer = "ABCDE".index(ans_m.group(1).upper())
        stem_and_opts = re.sub(r"\n\(NLE Mock by Dr Waleed\)\s*", "\n", stem_and_opts)
        opt_iter = list(re.finditer(r"\n(?:\(([A-E])\)|([A-E])\.)\s+", stem_and_opts))
        if len(opt_iter) < 4:
            raise SystemExit(f"Q{qid} has {len(opt_iter)} options")
        question = stem_and_opts[: opt_iter[0].start()].strip()
        options = []
        for i, om in enumerate(opt_iter):
            start = om.end()
            end = opt_iter[i + 1].start() if i + 1 < len(opt_iter) else len(stem_and_opts)
            options.append(re.sub(r"\s+", " ", stem_and_opts[start:end]).strip())
        questions.append({
            "id": qid,
            "question": re.sub(r"\s+", " ", question).strip(),
            "options": options,
            "answer": answer,
            "explanation": re.sub(r"\s+", " ", explanation).strip(),
        })
    questions.sort(key=lambda x: x["id"])
    return questions

def emit_ts(export_name: str, questions, dest: pathlib.Path):
    dest.write_text(
        'import type { Question } from "./types";\n'
        f"export const {export_name}: Question[] = {json.dumps(questions, ensure_ascii=False, indent=2)};\n",
        encoding="utf-8",
    )

def main():
    mapping = [
        ("medicine.txt", "medicineQuestions", "medicine.ts"),
        ("surgery.txt", "surgeryQuestions", "surgery.ts"),
        ("pediatrics.txt", "pediatricsQuestions", "pediatrics.ts"),
        ("ent.txt", "entQuestions", "ent.ts"),
    ]
    for raw_name, export_name, out_name in mapping:
        raw = (RAW / raw_name).read_text(encoding="utf-8")
        qs = parse(raw)
        print(raw_name, len(qs), "first", qs[0]["id"], "last", qs[-1]["id"])
        emit_ts(export_name, qs, OUT / out_name)
        if raw_name == "surgery.txt":
            emit_ts("publicGrandMock3Questions", qs, OUT / "public-grand-mock-3.ts")

if __name__ == "__main__":
    main()
