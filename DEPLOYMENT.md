Deployment guide

1. Remove sensitive .env from git

- Ensure `.env` is listed in `.gitignore` (already present).
- If `.env` is tracked, run:

  ```bash
  git rm --cached .env
  git commit -m "chore: remove .env from repository"
  git push
  ```

2. Prepare environment variables

- Copy `.env.example` to your host's environment settings. Required vars:
  - `MONGO_URI` - MongoDB connection string
  - `JWT_SECRET` - JWT signing secret
  - `CLOUDINARY_*` - Cloudinary credentials (if used)
  - `FRONTEND_URL` - frontend origin for CORS in production

3. Frontend (Vercel recommended)

- Connect your GitHub repository to Vercel.
- In Vercel dashboard, set environment variables under Project Settings > Environment Variables.
- Build Command: `npm run build` (default)
- Output Directory: Next.js app uses `.next` (handled automatically)

4. Backend (Railway / Render / Heroku)

- Create a project and set environment variables (MONGO_URI, JWT_SECRET, CLOUDINARY_*) in the service dashboard.
- Start command: `npm run start` or use `Procfile` for Heroku: `web: npm run start`.
- Ensure port configuration (use `process.env.PORT`).

5. Security & Hardening

- Do NOT commit `.env` or secrets; use platform secrets.
- Rotate any secrets that were accidentally pushed publicly.
- Configure MongoDB Atlas IP access list and user credentials.
- Enable HTTPS and set proper CORS origins.

6. Vulnerabilities & Dependencies

- Run `npm audit` in `backend/` and `frontend/` to view vulnerabilities.
- `npm audit fix` (safe) can resolve many issues.
- `npm audit fix --force` may upgrade packages beyond stated ranges (e.g., Next.js) and can cause breaking changes. Test after force upgrades.

7. Testing after deploy

- Run full smoke tests:
  - Signup/login
  - Create project
  - Add log
  - View project and profile pages
- Add CI to run unit/integration tests (Jest + Supertest for API).

8. Rollback plan

- Keep tags or releases in Git. If deploy breaks, rollback to previous tag and restore environment variables.

---
If you want, I can:
- Run `npm audit fix --force` in `frontend/` to clear the remaining high-severity issues (may upgrade Next.js). OR
- Prepare a safer upgrade plan: upgrade Next.js to latest compatible release, test locally, then push.

Tell me which option you prefer and I will proceed.