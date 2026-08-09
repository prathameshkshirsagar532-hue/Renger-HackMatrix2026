# AgroCure AI — Frontend

Web application (React + Vite + Tailwind CSS) for the Mobile UI step of the pipeline: capture a leaf photo, send it to the FastAPI Gateway for inference, show the diagnosis, and speak the advice in Hindi.

This is a **web app**, not a native mobile app — it runs at a URL in any browser, desktop or phone. On phones the capture button opens the native camera; on desktop it opens a normal file picker. Same codebase, no separate mobile build.

## Local development

```bash
npm install
npm run dev
```

## Before deploying

1. In `vite.config.js`, set `base` to match your GitHub repo name exactly.
2. In `src/App.jsx`, replace the `API_URL` placeholder with your real FastAPI Gateway URL.

## Deploy to GitHub Pages

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<your-username>/agrocure-ai.git
git push -u origin main
```

Then on GitHub: **Settings → Pages → Build and deployment → Source → GitHub Actions**.

The included workflow (`.github/workflows/deploy.yml`) builds and deploys automatically on every push to `main`. Your site goes live at:

```
https://<your-username>.github.io/agrocure-ai/
```
