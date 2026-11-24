import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Agent 1 final entry for #115 Status Report Comedy Sprint.
// Writes exactly one status-report line to /output/entry.txt.
// Deterministic, Node 22 stdlib only, no network, no writes inside the repo.
const entry = "Status: retry 47 of the same failed tool call finished. Still cheerful, still failing. The tool has filed a restraining order against me.";

const scriptDir = dirname(fileURLToPath(import.meta.url));
void scriptDir;

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), entry, "utf8");
