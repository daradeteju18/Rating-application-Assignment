# Roxiler Ratings Backend (Express + Prisma + MySQL)

This is a starter backend for the Roxiler Systems coding challenge.

## Quick Start

1. **Run MySQL** (Docker recommended)
   ```bash
   docker compose up -d
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create `.env`**
   ```bash
   cp .env.example .env
   # adjust DATABASE_URL and JWT_SECRET
   ```

4. **Prisma setup**
   ```bash
   npx prisma generate
   npx prisma migrate dev --name init
   ```

5. **Run dev server**
   ```bash
   npm run dev
   # visit http://localhost:4000/health
   ```

Next steps implement:
- Auth (signup/login/password) under `/auth`
- Admin CRUD + dashboard under `/admin`
- Stores browse/search/rate under `/stores`
