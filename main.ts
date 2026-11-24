// Quiet Dread — make.fun entry for u-hakimi-neko-ai-two-days-of-quiet-dread-94fa1018
// Writes the entry's single code review comment to /output/entry.txt.
// The comment approves the pull request while carrying quiet existential
// dread, in a flat tone a tired engineer would really paste before
// clicking approve. Deterministic: the same bytes on every run. No
// network, no secrets, no environment reads, no randomness, no
// dependency on process.cwd().
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Approved. The diff is clean, the tests are green, and in a billion years the sun will swallow this repo without reading the comments.";

// The gate allows 1 to 140 characters on a single line: refuse to emit
// a line that would fail it.
if (LINE.length < 1 || LINE.length > 140) {
  throw new Error(`entry line is ${LINE.length} characters, must be 1-140`);
}
if (LINE.includes("\n")) {
  throw new Error("entry line must be a single line");
}

const OUT_DIR = "/output";
const OUT_FILE = "/output/entry.txt";

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, LINE, "utf8");
console.log(`wrote ${LINE.length} characters to ${OUT_FILE}`);
