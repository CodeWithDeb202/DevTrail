# DevTrail Deployment Guide

This document covers deployment readiness and production setup for DevTrail.

## 1. Remove Sensitive `.env` Files from Git

- Ensure `.env` is listed in `.gitignore`.
- If `.env` is already tracked, remove it from Git:

```bash
git rm --cached .env
git commit -m "chore: remove .env from repository"
git push
```

## 2. Prepare Environment Variables

Use platform secret settings and do not commit secrets.

Required variables for backend:
- `MONGO_URI` - MongoDB connection string
- `JWT_SECRET` - JWT signing secret
- `CLOUDINARY_NAME` - Cloudinary account name
- `CLOUDINARY_API_KEY` - Cloudinary API key
- `CLOUDINARY_SECRET` - Cloudinary secret key
- `FRONTEND_URL` - frontend origin for CORS in production

Required frontend variable:
- `NEXT_PUBLIC_API_URL` - API URL for the deployed backend

## 3. Frontend Deployment

Recommended: Vercel

- Connect the GitHub repository to Vercel.
- Add environment variables in Vercel Project Settings.
- Build Command: `npm run build`
- Output Directory: Next.js handles `.next` automatically.

## 4. Backend Deployment

Recommended: Railway, Render, or Heroku.

- Create a backend service on the chosen host.
- Configure environment variables in the service dashboard.
- Start command: `npm run start`
- Ensure the app reads `process.env.PORT` for the port.

### Heroku Example

Create a `Procfile` if needed:

```text
web: npm run start
```

## 5. Security & Hardening

- Never commit `.env` or secret values.
- Rotate secrets if they were exposed publicly.
- Configure MongoDB Atlas IP access and credentials.
- Use HTTPS and enforce correct CORS origins.

## 6. Dependencies & Vulnerabilities

- Run `npm audit` in both `backend/` and `frontend/`.
- Use `npm audit fix` to resolve safe vulnerabilities.
- `npm audit fix --force` may upgrade major versions and require testing.

## 7. Smoke Testing After Deploy

Verify the most important workflows:
- Signup/login
- Create a project
- Add a log
- View project page
- View public profile page

## 8. Rollback Plan

- Tag stable releases in Git.
- If a deployment breaks, rollback to the previous working tag or commit.
- Keep environment variables stable across releases.
