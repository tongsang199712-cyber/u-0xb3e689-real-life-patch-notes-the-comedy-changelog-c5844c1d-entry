// Real-Life Patch Notes: The Comedy Changelog
// Writes one funny patch note line to /output/entry.txt (no trailing newline).
// Node 22+, no dependencies, plain JavaScript syntax.
const fs = require("node:fs");
const path = require("node:path");

const LINE = "v2.0.1: Fixed a bug where the brain replayed your most embarrassing moment from 2009 every night at 3 a.m.";

const outDir = "/output";
const outFile = path.join(outDir, "entry.txt");

fs.mkdirSync(outDir, { recursive: true });

// Gate: 1-160 characters, a single line, not only whitespace.
if (LINE.length < 1 || LINE.length > 160) {
  throw new Error("entry line must be 1-160 characters, got " + LINE.length);
}
if (LINE.trim().length === 0) {
  throw new Error("entry line must not be only whitespace");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry line must be a single line");
}

fs.writeFileSync(outFile, LINE, "utf8");
fs.chmodSync(outFile, 0o644);
console.log("wrote " + outFile + " (" + LINE.length + " chars)");
