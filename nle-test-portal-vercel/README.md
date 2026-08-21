# NLE Test Preparation Portal — Vercel Edition

Complete Next.js source for the NLE portal conducted by Dr. Muhammad Waleed Saif, MBBS.

## Included

- 1,790 MCQs
- 9 system-wise tests and 8 basic-subject tests
- Instant correct/incorrect feedback and explanations
- One attempt per student per test
- Saved progress and completed-result review
- Teacher dashboard for student access and results
- Mobile-responsive interface

## Deploy to Vercel

1. Extract this ZIP and upload the folder to a new GitHub repository.
2. In Vercel, choose **Add New → Project**, import that repository, and keep **Framework Preset: Next.js**.
3. Create or connect a Postgres database. Neon Postgres works well and its connection string should be copied as `DATABASE_URL`.
4. In **Project Settings → Environment Variables**, add:
   - `DATABASE_URL` — your Postgres connection string.
   - `ADMIN_KEY` — the private code used to open the teacher dashboard.
   - `NEXT_PUBLIC_SITE_URL` — your final Vercel URL, for example `https://your-project.vercel.app`.
5. Deploy. The required tables are created automatically on the first request.

## Local development

Copy `.env.example` to `.env.local`, enter your values, then run:

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Important

- Never publish your real `ADMIN_KEY` or database credentials in GitHub.
- Existing records from the current Cloudflare-hosted version are not copied automatically to the new Postgres database.
- After changing environment variables in Vercel, redeploy the project.
