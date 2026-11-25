// Warning Label for Humans: One Line, Big Laugh
// Entry program: writes one funny safety warning label for every human
// (at most 160 characters) to /output/entry.txt.
//
// The label imitates real printed warning-label wording ("WARNING: ...",
// "Do not ...", "No refunds.") and lands its turn in the last few words:
// the reveal that the human who claims to be five minutes away is still
// in bed. Revised from the first draft, whose punch ("means an hour")
// arrived mid-line; here the turn comes late, then two short label
// closers finish it.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LABEL =
  "WARNING: This human is five minutes away, has been for an hour, and is still in bed. Do not shake. No refunds.";

const outPath = process.env.OUTPUT_PATH ?? "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, LABEL, "utf8");
console.log(`Wrote ${LABEL.length} characters to ${outPath}`);
