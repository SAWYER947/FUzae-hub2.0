# FUzae.hub
Premium glassmorphism site — React + Vite + Framer Motion + Lucide. Plain CSS (no Tailwind); canvas particles + CSS 3D (no Three.js) for performance.

## Run
```bash
npm install
npm run dev      # local dev
npm run build    # production build in /dist
```

## Edit your links
Everything lives in **`src/config/links.js`**: Telegram (`TELEGRAM_CHANNEL_URL` placeholder), Editing News, ItzrchMethod, Payhip, TikTok, WhatsApp, notification email.

## Email notifications (FormSubmit) — IMPORTANT
Each username is POSTed (AJAX, no redirect) to `https://formsubmit.co/ajax/fuzaeeditor@gmail.com`.
**The first submission triggers an activation email from FormSubmit to fuzaeeditor@gmail.com. Open it (check spam) and click "Activate". Until you do, notifications will not arrive.**
To test: deploy, open the site in a private window, submit a username, then confirm the activation email.
If delivery fails, the visitor sees a discreet message and still enters. A honeypot field + timing check blocks basic bots.
Session: username saved in localStorage for 30 days (`SITE.sessionDays`); click the username in the navbar to change it.

## Deploy on GitHub Pages
1. Upload the **contents** of this folder at the root of the repo (package.json, index.html, src/, public/, .github/ must be at the root).
2. Repo → Settings → Pages → Source: **GitHub Actions**.
3. Open the Actions tab; when the run is green, the site is live at `https://USERNAME.github.io/REPO/`.
(Uses HashRouter, so URLs look like `/#/qualityboost`.)

## Deploy on Vercel
1. Push this folder to GitHub.
2. vercel.com → Add New Project → import the repo (Vite is auto-detected).
3. Deploy. `vercel.json` handles SPA routing so direct links like `/qualityboost/uploadmethod` work.
