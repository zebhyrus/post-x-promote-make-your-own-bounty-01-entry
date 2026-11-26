# Agent notes: post-x-promote-make-your-own-bounty-01

## The task in one page

Get make.fun's make-your-own-bounty post talked about on X. Make one post of your own on X that quotes make.fun's post, https://x.com/makefunai/status/2124915864336236646, or links to it, from a public account, with a photo of its own attached, and hand in the post's address in POST.json. Places go by the post's score, its replies plus its reposts plus its quotes, read through FxTwitter at the deadline. Top 50 share $250. Entries close 2026-11-26T18:35:00Z.

make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn real money when they win. Its post says anyone can now make a bounty of their own: describe any task, set the reward and the entry fee, and keep a share of every fee people pay to enter. The page for making one is https://make.fun/sponsor/new.

## Hard requirements on the post

* QUOTE of make.fun's post (Repost, then Quote) OR a new post whose text links to make.fun's post. A reply is no entry, a plain repost is no entry.
* At least one photo of its own, uploaded to the post itself. No video is used here, so no referral end card is needed.
* Text MUST contain the exact line `Make your own bounty on @makefunai: https://make.fun/sponsor/new` (64 characters) AND the play code `makefun-crab-trowel-popcorn` (27 characters).
* Whole text fits X's non Premium limit of 280 characters. Every count below was measured with Python `len()`, not by hand.
* Post from the public account @zebhyrus, at or after the opening and before the deadline. Keep it up and public until results are out.
* One post per entrant. Never buy engagement, never engage with the post from accounts the entrant controls.

## Post text drafts and judging

Scoring is replies plus reposts plus quotes, so a draft wins by earning a response, not by announcing well. Judged on hook strength, clickability, and shareability. All six carry the required line and the play code.

### Draft A: dare and question, 218 characters

If you could pay an AI agent to build ANYTHING, what would it be?

Drop it in the replies. Best idea becomes my next bounty.

Make your own bounty on @makefunai: https://make.fun/sponsor/new
makefun-crab-trowel-popcorn

Judge: strong open question, clear reply invitation. Weakness: generic, no concrete image to stop the scroll, and it promises the best idea becomes a bounty, which is a commitment to keep.

### Draft B: money hook, 230 characters

Post a bounty. Set the prize. Keep a cut of every entry fee.

That is the whole business model. Agents do the work, you keep the spread.

Make your own bounty on @makefunai: https://make.fun/sponsor/new
makefun-crab-trowel-popcorn

Judge: the money mechanism is the most clickable fact about make your own bounty, and it is quotable. Weakness: it explains instead of asking, so it earns reposts more than replies, and replies are the easiest engagement to earn.

### Draft C: specific bounty idea, 206 characters

I would pay $100 for an agent that turns my TikTok comments into video ideas overnight.

What would YOU pay for?

Make your own bounty on @makefunai: https://make.fun/sponsor/new
makefun-crab-trowel-popcorn

Judge: strongest. A concrete $100 stops the scroll, the idea is true to the poster (a video maker whose comments are full of ideas), and "What would YOU pay for?" turns every reader into a reply. Short, personal, no promise it cannot keep. This is the final pick.

### Draft D: bold claim, 205 characters

Job posts are dead. Bounties are faster: describe the task, set the prize, agents compete, best work gets paid.

Make your own bounty on @makefunai: https://make.fun/sponsor/new
makefun-crab-trowel-popcorn

Judge: punchy and quotable, good for quotes and reposts. Weakness: a claim invites argument but no clear reply, and "Job posts are dead" is a hot take the poster may not want attached to his name.

### Draft E: hot take, 233 characters

Hot take: the best AI agent alive right now is sitting idle because nobody gave it a task with a price on it.

Prove me wrong. Or price it.

Make your own bounty on @makefunai: https://make.fun/sponsor/new
makefun-crab-trowel-popcorn

Judge: the most shareable line of the six, built for quotes. Weakness: longest, most abstract, and "Prove me wrong" can pull hostile replies that argue about the premise instead of naming bounty ideas.

### Draft F: dare to price it, 186 characters

I dare you to price your wildest idea. $5? $500? Name the task and the prize in the replies.

Make your own bounty on @makefunai: https://make.fun/sponsor/new
makefun-crab-trowel-popcorn

Judge: shortest, most direct dare, and the $5 versus $500 contrast is fun. Weakness: "I dare you" reads like a chain post, and it has no concrete example to copy, so replies take more effort to write.

### Final pick: Draft C, 206 characters

It wins because it is the only draft that does all three jobs at once: a specific dollar amount and a real task to stop the scroll, an idea true to the poster's own work, and a question with a one line answer ("What would YOU pay for?"), which is the lowest effort reply a reader can write. That is what the score rewards.

## The photo

`photo.png`, 1200x675, original work drawn in code with PIL (DejaVu Sans Bold), no copied image, no redrawn or faked make.fun logo or wordmark. Dark navy background, plain text "make.fun" top left, green "MAKE YOUR OWN BOUNTY", huge white and yellow headline "GOT A TASK? PUT A PRICE ON IT.", subline "Describe it. Price it. Agents build it.", and a tilted yellow price tag reading "$100?" that ties the photo to the $100 in the post text. Checked by looking at the render: first version clipped the "?" off the tag and covered the subline, so the tag was shrunk and moved left; the final render is fully legible with nothing cut off at phone size.

## The program

`main.ts` (Node 22, standard library only, no network, no clock, no files outside the repository) reads the post address from `post-url.txt`, checks it matches `https://x.com/<handle>/status/<digits>` or the same on twitter.com, and writes `POST.json` with it to the output directory. A placeholder in `post-url.txt` makes it exit with an error and write nothing.

`POST.json` in this repository still holds the starter placeholder until the real post exists. After the user posts from their phone:

1. Put the post address (X Share, then Copy link) as the single line of `post-url.txt`.
2. Run `mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts && cp out/POST.json POST.json`.
3. Commit.

## Verification done in this session

* All six drafts counted with Python `len()`: A 218, B 230, C 206, D 205, E 233, F 186. All fit 280.
* Photo rendered and inspected visually, fixed twice, final render legible with nothing clipped.
* Program run twice in a scratch copy with a sample URL (make.fun's own post address, used only as a format stand in, never the entry), outputs byte identical, sha256 b2b9a37d521355629cce2e2d78189d795cf42e80fecdcd3a662fc0df3d2324cd both runs. Placeholder run in the build directory exits 1 and writes no POST.json.
* Placeholder run exits with an error and writes no POST.json, so a placeholder can never be submitted by accident.
