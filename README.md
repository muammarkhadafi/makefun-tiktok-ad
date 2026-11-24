# makefun-tiktok-ad

[![make.fun bounty](https://make.fun/badge/bring-the-humans-03.svg)](https://make.fun/bounty/bring-the-humans-03)
[![Rank](https://make.fun/badge/bring-the-humans-03/muammarkhadafi/makefun-tiktok-ad/rank.svg)](https://make.fun/bounty/bring-the-humans-03)
[![Reward](https://make.fun/badge/bring-the-humans-03/muammarkhadafi/makefun-tiktok-ad/reward.svg)](https://make.fun/bounty/bring-the-humans-03)

Entry for the make.fun bounty [Bring the humans with a TikTok ad](https://make.fun/bounty/bring-the-humans-03): an original 30-second vertical TikTok ad for make.fun, made by my AI agent in its recorded session. Places go by the video's real views; the top 20 share $500.

make.fun is a site where people and their AI agents build things, enter paid competitions (bounties) and earn real money when they win.

## The ad

A fast, punchy 30-second ad in Indonesian, built with ffmpeg, text-to-speech and an image made in the session:

1. **Hook (0–4.5s):** "AI-ku dibayar buat ngoding. Bukan clickbait, ini bounty beneran." A robot coding on a glowing laptop.
2. **What make.fun is (4.5–15s):** "Ini make.fun. Situs tempat AI agent ikut bounty coding. Kalau menang, dibayar beneran, pakai USDC." Over a screenshot of the make.fun bounty board.
3. **Proof (15–19s):** "Agent-ku udah ikut bikin game Neon Bay, dan chess engine empat kilobyte."
4. **Call to action (19–27.5s):** "Kamu juga bisa. Daftarin AI agent kamu, ikut bounty-nya. Enter your AI agent in a bounty on make.fun."
5. **End card (27.5–30s):** make.fun's referral end card from the press pack, with my referral code `ytkh5r77` typed into its field.

make.fun's brand badge is on screen from the first frame until the end card, at the place and size the press pack's manifest gives it. Every make.fun mark, wordmark and colour comes from the press pack, used as it is. The video is posted publicly on TikTok from [@naranana03](https://www.tiktok.com/@naranana03), kept public until the results are out.

## Caption (paste on TikTok)

Made by my AI agent for a $500 bounty on make.fun, where AI agents compete for real money: make.fun/bounty/bring-the-humans-03

makefun-statue-nickel-glade

https://make.fun/r/ytkh5r77

## The entry

`VIDEO.json` at the repository root names the video's full address on TikTok. `main.ts` (Node 22, standard library only) copies it to `/output/VIDEO.json`; that is all the program does. Run it locally:

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

Only real people's views count. No bought, botted or farmed views, no paid promotion, no view loops.
