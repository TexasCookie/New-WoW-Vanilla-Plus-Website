# VanillaPlus Astro 6 Rewrite

A fresh **Astro 6 + React** starter for rebuilding the VanillaPlus project site into a bigger portal-style experience.

## What changed in this rewrite

This version is not just the old code with version numbers bumped.

It was restructured around current Astro 6 patterns:

- **Astro 6** core with official **Node adapter** and **React integration**
- **Node 22.12+** requirement (`.nvmrc` included)
- **type-safe env schema** in `astro.config.mjs`
- **Astro content collections** for news posts via `src/content.config.ts`
- dynamic news pages rendered from Markdown entries in `src/content/news/`
- SSR-ready account, donate, and API route structure preserved for future backend integration

## Included pages

- `/`
- `/download`
- `/features`
- `/news`
- `/news/[slug]`
- `/donate`
- `/discord`
- `/account/login`
- `/account/register`
- `/account/recovery`
- `/account/dashboard`

## Included API routes

- `/api/status`
- `/api/auth/login`
- `/api/auth/register`
- `/api/auth/recovery`
- `/api/auth/logout`
- `/api/donate/create-session`

## Local run

```bash
cp .env.example .env
npm install
npm run dev
```

Then open:

```bash
http://localhost:4321
```

## Type check and build

```bash
npm run check
npm run build
npm run preview
```

## Demo auth behavior

By default, `DEMO_ALLOW_ANY_LOGIN=true`, so local testing is easy.

- **Register** creates a demo user in memory
- **Login** accepts an existing demo user
- if `DEMO_ALLOW_ANY_LOGIN=true`, login can also create an in-memory demo user on first sign-in
- a cookie-based demo session is set so `/account/dashboard` can show a signed-in state

This is only for local prototyping.

## Files you will likely edit first

- `src/config/site.ts` — site name, URLs, nav, external links
- `src/pages/index.astro` — main landing page structure
- `src/styles/global.css` — theme and layout styles
- `src/content/news/*.md` — news and patch-note content
- `src/lib/server/auth.ts` — replace demo auth with your real auth/database logic
- `src/lib/server/donate.ts` — replace mock checkout logic with your payment provider
- `src/lib/server/status.ts` — connect real realm/server data

## Suggested backend integration path

### Auth / accounts
Replace the demo logic in `src/lib/server/auth.ts` with:

- PostgreSQL or MySQL queries
- your existing account service
- JWT/session provider
- email verification + password reset tokens
- captcha / anti-abuse checks

### Donations
Replace `createCheckoutUrl()` in `src/lib/server/donate.ts` with:

- Stripe Checkout
- PayPal
- Tebex
- custom internal donation/store backend

Then add webhook handling on the server and persist receipts to your database.

### Discord
Use `PUBLIC_DISCORD_URL` now, then later add:

- Discord OAuth
- linked account storage
- supporter/tester role sync
- Discord-based account verification

### News / content
Right now the news page uses Astro content collections and Markdown entries. Later you can switch to:

- a custom content loader
- headless CMS
- forum / patch note feed from your own backend
- live content collections for runtime-fresh data if needed

## Environment variables

Copy `.env.example` to `.env` and fill what you need.

Important ones:

- `PUBLIC_SITE_URL`
- `PUBLIC_DISCORD_URL`
- `PUBLIC_DOWNLOAD_URL`
- `PUBLIC_WIKI_URL`
- `PUBLIC_SUPPORT_URL`
- `PUBLIC_TALENT_CALCULATOR_URL`
- `PUBLIC_BUG_TRACKER_URL`
- `PUBLIC_DONATE_URL`
- `DEMO_ALLOW_ANY_LOGIN`

## Notes

- the project uses **Astro server output** with the Node adapter
- React is used only for interactive islands such as auth, donate flow, and live status
- news content now uses Astro’s content layer instead of a local TypeScript array
- the styling is plain CSS so the source stays easy to read and modify quickly

## Next good steps

1. replace placeholder text/content with your real VanillaPlus branding and copy
2. connect real auth and database tables
3. connect payment provider + webhooks
4. add real class pages, patch notes, and guides
5. add armory, rankings, or guild tools
