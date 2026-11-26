// Entry for make.fun bounty post-x-promote-make-your-own-bounty-01
// (Node 22, standard library only, no network, no clock).
//
// The entry is the post itself: one post of your own on X that quotes
// make.fun's make-your-own-bounty post
// (https://x.com/makefunai/status/2124915864336236646) or links to it,
// with a photo of its own attached. This program hands in that post's
// address. It reads the address from post-url.txt in this repository
// and writes POST.json with it, which is what the gate reads.
//
// post-url.txt holds a placeholder until the post is up on X. Once the
// user has posted from their phone, replace that one line with the
// post's address as X's Share button gives it
// (https://x.com/<handle>/status/<id>), then run this program again so
// POST.json in the repository names the real post too. With the
// placeholder still in place the program exits 1 and writes nothing.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
// Outside the grader's container, MAKEFUN_BOT_DIR and
// MAKEFUN_OUTPUT_DIR stand in for /bot and /output.

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// A post address is https://x.com/<handle>/status/<digits>, or the same
// on twitter.com. Anything else is not a post, so refuse it loudly
// instead of writing a POST.json the gate would reject.
const POST_URL_PATTERN = /^https:\/\/(x\.com|twitter\.com)\/[A-Za-z0-9_]+\/status\/[0-9]+$/;

const raw = readFileSync(join(BOT_DIR, 'post-url.txt'), 'utf8');
const url = raw.trim();

if (!POST_URL_PATTERN.test(url)) {
  console.error(
    'post-url.txt does not hold a post address yet. Replace its line with the ' +
      'address of the posted X post, https://x.com/<handle>/status/<id>, then run again.',
  );
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'POST.json'), JSON.stringify({ url }) + '\n');
