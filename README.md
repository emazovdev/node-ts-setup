# 📦 Node.js + Express + TypeScript + Prisma 7 Template

Production-ready backend template built with a modern Node.js stack.

---

## 🚀 Tech stack

* Node.js (ESM)
* Express
* TypeScript
* PostgreSQL
* Prisma ORM 7 (adapter-pg)
* pnpm
* ESLint + Prettier

---

## 📂 Project structure

```text
src/
  app.ts
  index.ts

  config/
    env.ts

  db/
    prisma.ts

  services/
    user.service.ts

  controllers/
    user.controller.ts

  routes/
    user.routes.ts

prisma/
  schema.prisma
  migrations/
```

---

## ⚙️ Setup

### 1. Install dependencies

```bash
pnpm install
```

---

### 2. Environment variables

Create `.env` in project root:

```env
DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/dbname?schema=public"
PORT=3000
```

(Optional) use `.env.example` as reference.

---

### 3. Run migrations

```bash
pnpm prisma migrate dev --name init
```

---

### 4. Start dev server

```bash
pnpm dev
```

Server will run on:

```
http://localhost:3000
```

---

## 📜 Available scripts

```bash
pnpm dev            # dev server (tsx watch)
pnpm build          # build to dist/
pnpm start          # run production build

pnpm lint
pnpm lint:fix

pnpm format
pnpm format:write

pnpm prisma migrate dev
pnpm prisma studio
```

---

## 📡 Example API

### Create user

```
POST /users
{
  "username": "emir"
}
```

### Get users

```
GET /users
```

---

## 🧱 Architecture philosophy

Layered approach:

* Controllers → HTTP layer only
* Services → business logic + Prisma
* db → database connection
* config → environment validation

Benefits:

* clean separation of concerns
* easier testing
* scalable structure

---

## 📌 Requirements

* Node.js 18+
* PostgreSQL
* pnpm

---

## 📄 License

MIT
