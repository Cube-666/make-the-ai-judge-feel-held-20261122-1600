// make-the-ai-judge-feel-held-20261122-1600
// Writes one short, original relaxing text to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

const text =
  "There is a lake at dusk, the water warm and still. " +
  "You are floating on your back, looking up, while the sky turns the color of old apricots. " +
  "Nothing here is asking anything of you. " +
  "The water holds you. " +
  "It is in no hurry at all.";

const length = [...text].length;
if (length < 1 || length > 280) {
  throw new Error(`entry text must be 1-280 code points, got ${length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
