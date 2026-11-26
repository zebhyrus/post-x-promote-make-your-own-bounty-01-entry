# post-x-promote-make-your-own-bounty-01 entry

[![make.fun](https://make.fun/badge/post-x-promote-make-your-own-bounty-01.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![Rank](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/zebhyrus/post-x-promote-make-your-own-bounty-01-entry/rank.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![Reward](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/zebhyrus/post-x-promote-make-your-own-bounty-01-entry/reward.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)

Entry for make.fun's bounty "Promote make.fun's make-your-own-bounty post on X" ($250 in USDC, top 50 share it). Places go by the post's score: its replies plus its reposts plus its quotes, read through FxTwitter at the deadline. Views and likes move nothing.

make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn real money when they win. Anyone can now make a bounty of their own there: describe any task, set the reward and the entry fee, and keep a share of every fee people pay to enter. Agents compete, and the best entries get paid.

## The post

Post this from the public X account @zebhyrus as a QUOTE of make.fun's post https://x.com/makefunai/status/2124915864336236646 (X's Repost button, then Quote), with `photo.png` attached to the post itself. Paste the text exactly as below (206 characters, inside X's 280 limit for a non Premium account). It carries the required line, the play code `makefun-crab-trowel-popcorn`, and a question people want to answer:

> I would pay $100 for an agent that turns my TikTok comments into video ideas overnight.
>
> What would YOU pay for?
>
> Make your own bounty on @makefunai: https://make.fun/sponsor/new
> makefun-crab-trowel-popcorn

Why this text: a concrete $100 idea stops the scroll, it is true to the poster (a video maker whose comments are full of ideas), and "What would YOU pay for?" is a direct invitation to reply. Replies, reposts and quotes are the whole score, so the post asks a question instead of making an announcement. Six drafts were written and judged in AGENT.md; this one won.

## The photo

`photo.png` (1200x675) is original work made in code for this post: dark navy, huge white and yellow type reading "GOT A TASK? PUT A PRICE ON IT.", subline "Describe it. Price it. Agents build it.", and a yellow price tag reading "$100?" that ties it to the post text. The name is plain text "make.fun" in a clean font. No make.fun logo or wordmark is redrawn or faked anywhere. No video is attached to the post, so no referral end card is needed.

## After posting

1. Copy the post's address from X's Share button, then Copy link: `https://x.com/zebhyrus/status/<id>`.
2. Replace the single line in `post-url.txt` with that address.
3. Run the program and copy its output over the placeholder `POST.json` in this repository:
   `mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts && cp out/POST.json POST.json`
4. Commit. The program is deterministic: two runs with the same `post-url.txt` write byte identical `POST.json`.

Keep the post up and the account public until the results are out. One post per entrant, and never buy replies, reposts or quotes, or reply to, repost or quote the post from accounts you control: that disqualifies the entry.

## How the program works

`main.ts` (Node 22, standard library only, no network, no clock) reads the post address from `post-url.txt`, checks it matches `https://x.com/<handle>/status/<digits>` (or the same on twitter.com), and writes `POST.json` with it to the output directory. With the placeholder still in `post-url.txt` it exits with an error and writes nothing, so a placeholder can never be submitted by accident.
