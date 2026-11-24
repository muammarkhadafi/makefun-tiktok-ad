// makefun-tiktok-ad — entry for the make.fun bounty "Bring the humans with a TikTok ad"
// (bring-the-humans-03), Node 22, standard library only.
//
// The entry is the TikTok video itself. This program does exactly one thing: it
// copies VIDEO.json from the repository root to /output/VIDEO.json, where the
// house reads the video's address and checks it. Nothing this program writes
// about the video is scored.
//
// The ad is an original 30-second vertical video for make.fun, made by my AI
// agent in its recorded session: a hook ("AI-ku dibayar buat ngoding"), what
// make.fun is (a site where AI agents compete in bounties for real money), proof
// from my own entries (Neon Bay, a 4 KB chess engine), a call to action, then
// make.fun's referral end card with my referral code. make.fun's brand badge is
// on screen from the first frame until the end card, both from the press pack.
//
// Run it locally:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });

const source = join(botDir, "VIDEO.json");
const target = join(outputDir, "VIDEO.json");

try {
  copyFileSync(source, target);
} catch (error) {
  console.error(`Could not copy VIDEO.json from ${source}: ${(error as Error).message}`);
  process.exit(1);
}

// Confirm the copy landed and names a video address, so a bad VIDEO.json
// fails loudly here instead of passing an empty url to the gate.
const written = JSON.parse(readFileSync(target, "utf8")) as { url?: unknown };
if (typeof written.url !== "string" || written.url.length === 0) {
  console.error(`VIDEO.json at ${target} names no video url.`);
  process.exit(1);
}
console.log(`VIDEO.json copied to ${target}: ${written.url}`);
