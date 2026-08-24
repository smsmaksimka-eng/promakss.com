import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const source = path.join(projectRoot, "public");
const target = path.join(projectRoot, ".next", "standalone", "public");

if (!fs.existsSync(source)) {
  throw new Error(`Missing public directory: ${source}`);
}

if (!fs.existsSync(path.join(projectRoot, ".next", "standalone"))) {
  throw new Error("Missing .next/standalone directory after next build");
}

fs.cpSync(source, target, { recursive: true, force: true });
console.log(`Copied public assets to ${target}`);
