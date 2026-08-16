# Landing Page

A single-page marketing site built with **Next.js 16 (App Router)**, **React 19**, **TypeScript** and **Tailwind CSS v4**.
It ships with a light/dark theme toggle and a contact form whose submissions are saved as records in an **Airtable** base through a server-side API route (your Airtable token never reaches the browser).

## Table of contents

- [Requirements](#requirements)
- [Install dependencies](#install-dependencies)
- [Run the project](#run-the-project)
- [Environment variables](#environment-variables)
- [Airtable integration (step by step)](#airtable-integration-step-by-step)
- [How the contact form works](#how-the-contact-form-works)
- [Troubleshooting](#troubleshooting)
- [Project structure](#project-structure)
- [Scripts](#scripts)
- [Deploying](#deploying)

---

## Requirements

| Tool | Version |
|---|---|
| Node.js | **20.9 or newer** (Node 22 LTS recommended) — check with `node -v` |
| npm | comes with Node (`npm -v`) — yarn / pnpm / bun also work |
| An Airtable account | free tier is fine — only needed for the contact form |

## Install dependencies

Clone the repo, go into the project folder (the one that contains `package.json`) and install:

```bash
git clone <your-repo-url>
cd landing-page-task/landing-page-task
npm install
```

`npm install` reads `package.json` and installs everything the project needs:

- runtime: `next`, `react`, `react-dom`
- dev: `tailwindcss`, `@tailwindcss/postcss`, `typescript`, `eslint`, `eslint-config-next` and the `@types/*` packages

No extra global installs are required.

## Run the project

### Development (hot reload)

```bash
npm run dev
```

Then open <http://localhost:3000>. Edits to files under `app/` and `components/` refresh the page automatically.

> The contact form will return **"Something went wrong."** until the Airtable environment variables below are set — the rest of the site works without them.

### Production build

```bash
npm run build   # compiles and type-checks the app
npm run start   # serves the production build on http://localhost:3000
```

### Lint

```bash
npm run lint
```

---

## Environment variables

The API route in [`app/api/contact/route.ts`](app/api/contact/route.ts) reads **three** variables:

| Variable | What it is | Example |
|---|---|---|
| `AIRTABLE_TOKEN` | A **Personal Access Token** from Airtable (starts with `pat`) | `patAbC123.xyz…` |
| `AIRTABLE_BASE_ID` | The ID of the base that holds your leads table (starts with `app`) | `appXXXXXXXXXXXXXX` |
| `AIRTABLE_TABLE_NAME` | The table's **name** *or* its **ID** (starts with `tbl`) | `Leads` or `tblXXXXXXXXXXXXXX` |

Create a file called **`.env`** in the project root (same folder as `package.json`) with exactly these keys:

```dotenv
# .env  — never commit this file
AIRTABLE_TOKEN=patXXXXXXXXXXXXXX.XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
AIRTABLE_BASE_ID=appXXXXXXXXXXXXXX
AIRTABLE_TABLE_NAME=Leads
```

Notes:

- `.env.local` works too (Next.js loads both; `.env.local` wins if a key is in both). `.gitignore` already ignores every `.env*` file, so your token stays out of git.
- **Do not** prefix these with `NEXT_PUBLIC_` — that would expose the token to the browser. They are only read on the server inside the API route.
- **Restart `npm run dev` after creating or editing `.env`** — env files are read once at startup.
- If your table name contains spaces (e.g. `Contact Leads`) either use the table ID instead, or URL-encode it (`Contact%20Leads`).

---

## Airtable integration (step by step)

This is exactly how the form in this project is wired up.

### 1. Create the base and table

1. Go to <https://airtable.com> → **Create a base** (or open an existing one).
2. Rename the default table to **`Leads`** (or any name — just put the same name in `AIRTABLE_TABLE_NAME`).
3. Make sure the table has these **three fields, spelled exactly like this** (the API route sends these field names, case-sensitive):

   | Field name | Airtable field type |
   |---|---|
   | `Name` | Single line text |
   | `Email` | Email (or Single line text) |
   | `Message` | Long text |

   Delete or ignore any other default columns (`Notes`, `Assignee`, `Status`…) — they don't have to exist, but the three above must.

### 2. Get the Base ID

Open the base in your browser. The URL looks like:

```
https://airtable.com/appXXXXXXXXXXXXXX/tblYYYYYYYYYYYYYY/viwZZZZZZZZZZZZZZ
                     └── AIRTABLE_BASE_ID ──┘└── table id (optional) ──┘
```

- The part starting with **`app`** is your `AIRTABLE_BASE_ID`.
- The part starting with **`tbl`** is the table ID — you can use it as `AIRTABLE_TABLE_NAME` instead of the human name if you prefer.

(You can also find both under **Help → API documentation** inside the base.)

### 3. Create a Personal Access Token

1. Go to <https://airtable.com/create/tokens> → **Create new token**.
2. Give it a name (e.g. `landing-page-form`).
3. **Scopes** — add:
   - `data.records:write` (required — creates the lead)
   - `data.records:read` (optional, handy for debugging)
4. **Access** — click **Add a base** and select the base from step 1. The token only works for bases you add here.
5. **Create token** and copy it immediately — Airtable shows it only once. It starts with `pat…`.

### 4. Fill in `.env`

Paste the three values into `.env` as shown in [Environment variables](#environment-variables), then restart the dev server:

```bash
npm run dev
```

### 5. Test it

- Open <http://localhost:3000/#contact>, fill in the form and click **Send**. You should see **"Message sent successfully!"** and a new row appears in Airtable.
- Or hit the API directly:

  ```bash
  curl -X POST http://localhost:3000/api/contact \
    -H "Content-Type: application/json" \
    -d '{"name":"Jane Doe","email":"jane@example.com","message":"Hello!"}'
  ```

  Expected response: `{"success":true,"recordId":"recXXXXXXXXXXXXXX"}` with status `201`.

---

## How the contact form works

```
Browser                          Next.js server                     Airtable
────────                          ──────────────                     ────────
ContactForm.tsx  ── POST JSON ──▶ app/api/contact/route.ts ── POST ─▶ /v0/{BASE_ID}/{TABLE}
{name,email,message}              validates fields                    creates record with
                                  adds Bearer AIRTABLE_TOKEN          fields Name/Email/Message
                ◀── 201 / 4xx / 5xx ──┘                            ◀── record id ──┘
```

- [`components/ContactForm.tsx`](components/ContactForm.tsx) — client component. On submit it `fetch`es `/api/contact` with `{ name, email, message }`, then shows a status line and resets the form on success.
- [`app/api/contact/route.ts`](app/api/contact/route.ts) — server route. It:
  1. rejects the request with `400` if any field is missing,
  2. calls `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_NAME}` with `Authorization: Bearer ${AIRTABLE_TOKEN}` and body `{ fields: { Name, Email, Message } }`,
  3. returns `201 { success: true, recordId }` on success, or `500 { error }` if Airtable rejects the request (the raw Airtable error is logged to the server console).

To capture more fields (e.g. a phone number): add the input to `ContactForm.tsx`, include it in the `data` object, add it to the `fields` object in `route.ts`, and create a column with the **same name** in Airtable.

---

## Troubleshooting

Look at the terminal running `npm run dev` — Airtable's error message is logged there as `Airtable error: …`.

| Symptom / Airtable error | Cause | Fix |
|---|---|---|
| Form says "Something went wrong." and terminal shows `undefined` in the URL | `.env` missing, misnamed, or dev server not restarted | Create `.env` in the project root, check the three key names, restart `npm run dev` |
| `401 AUTHENTICATION_REQUIRED` / `INVALID_AUTHORIZATION` | Wrong or truncated token | Re-copy the `pat…` token; no quotes or spaces around it |
| `403 INVALID_PERMISSIONS_OR_MODEL_NOT_FOUND` | Token lacks the `data.records:write` scope, or the base wasn't added under **Access** | Edit the token at airtable.com/create/tokens |
| `404 NOT_FOUND` / `TABLE_NOT_FOUND` | Wrong `AIRTABLE_BASE_ID` or `AIRTABLE_TABLE_NAME` | Copy the `app…` id from the URL; check table name spelling / use the `tbl…` id |
| `422 UNKNOWN_FIELD_NAME: "Name"` (or Email / Message) | Airtable column names don't match | Rename columns to exactly `Name`, `Email`, `Message` |
| `422 INVALID_VALUE_FOR_COLUMN` | Column type can't accept the value (e.g. `Email` set to a Number field) | Change the field type as in step 1 |
| Works locally, fails after deploy | Env vars not set on the host | Add the same three variables in your hosting provider's environment settings and redeploy |

---

## Project structure

```
landing-page-task/
├─ app/
│  ├─ api/contact/route.ts   # POST handler → Airtable
│  ├─ globals.css            # Tailwind import, light/dark CSS variables
│  ├─ layout.tsx             # root layout, fonts, theme bootstrap script
│  └─ page.tsx               # assembles the sections below
├─ components/
│  ├─ Navbar.tsx             # sticky nav + mobile menu
│  ├─ ThemeToggle.tsx        # light/dark switch (persists to localStorage)
│  ├─ Hero.tsx
│  ├─ CardSection.tsx        # "Features" cards            (+ Cards.css)
│  ├─ HowItWorks.tsx         # pricing cards               (+ HowItWorks.css)
│  ├─ ContactForm.tsx        # form that posts to /api/contact
│  ├─ Footer.tsx
│  └─ theme.css              # shared design tokens for the card sections
├─ public/
├─ .env                      # your Airtable secrets (git-ignored)
├─ next.config.ts
├─ postcss.config.mjs        # Tailwind v4 via @tailwindcss/postcss
├─ tsconfig.json
└─ package.json
```

**Theming:** dark mode is class-based (`<html class="dark">`). A tiny inline script in `layout.tsx` applies the saved preference (or the OS preference) before paint to avoid a flash; `ThemeToggle.tsx` flips the class and stores the choice in `localStorage`. Tailwind's `dark:` variant is wired to that class in `globals.css`.

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Start the dev server with hot reload on port 3000 |
| `npm run build` | Production build (also type-checks) |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Deploying

Any Node host works; the simplest is [Vercel](https://vercel.com/new):

1. Push the repo to GitHub and import it in Vercel.
2. Under **Settings → Environment Variables** add `AIRTABLE_TOKEN`, `AIRTABLE_BASE_ID` and `AIRTABLE_TABLE_NAME` (same values as your `.env`).
3. Deploy. The API route runs server-side, so the token is never sent to visitors.
