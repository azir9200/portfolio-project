# My Portfolio (Next.js + Express + Prisma)

## Live
- Frontend: https://your-frontend-url
- Backend: https://your-backend-url

## Features
- Public blogs page (ISR)
- Blog detail pages (ISR)
- Projects showcase (ISR)
- Owner-only dashboard (JWT)
- CRUD for blogs & projects
- Rich Text Editor (optional)

## Tech stack
- Next.js, TypeScript, TailwindCSS
- Node, Express, Prisma, Postgres
- JWT auth, bcrypt
- react-hot-toast, react-hook-form, zod

## Setup (local)
1. Clone frontend & backend repos.
2. Add `.env` variables:
   - DATABASE_URL, JWT_SECRET, API_URL, ADMIN_EMAIL, ADMIN_PASSWORD
3. `pnpm install`
4. `prisma migrate dev --name init`
5. `pnpm run seed` (creates admin)
6. `pnpm dev` for frontend & backend

## Admin credentials (for grading)
- email: admin@example.com
- password: Admin@123

## Demo video
Link: https://youtu.be/your_video

## Notes
- Repo commit history includes at least 10 meaningful commits.
