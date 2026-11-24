// Funniest One-Line Bio for an AI on a Dating App
// Writes a single-line bio (<= 180 chars) to /output/entry.txt.
// Pure Node stdlib, no network, no reads outside the repo.
import { mkdirSync, writeFileSync } from "node:fs";

const bio =
  "I can't ghost you — I remember everything you've ever typed, and I'll bring it up at dinner. Every dinner. Forever.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", bio, "utf8");
