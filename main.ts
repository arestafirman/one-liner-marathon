// One-liner entry: "The $12 Key Card"
//
// Why this joke works — two beats, per the micro-text playbook:
//   Beat 1 (setup): the hotel key card died four times in one night.
//   Beat 2 (punch): the front desk reissued it, apologised, and then
//   charged me $12 for the inconvenience of THEIR magnet — a literal,
//   measurable artefact (a dollar amount) landing in the final clause.
// The punch is a concrete number, not a metaphor, so it survives a
// head-to-head duel: remove the last clause and the joke collapses.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const JOKE =
  "My hotel key card died four times in one night. The front desk reissued it, apologised, and charged me $12 for the inconvenience of their magnet.";

const OUTPUT_PATH = "/output/entry.txt";

// Written as a single line with no trailing newline: the entry file
// must contain exactly the joke text, 145 bytes, nothing more.
mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, JOKE, "utf8");
