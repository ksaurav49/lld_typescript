# LLD TypeScript — 30-day interview prep

One-stop course: **mentor knowledge** and **your practice** live side-by-side by topic, with a day index for sequential study.

**Course site (GitHub Pages):** after you enable Pages on this repo, open the site root (serves `index.html`). Locally: `npm run docs:serve`.

## How to navigate

1. **Start a session** → [`PROGRESS.md`](./PROGRESS.md) (or say `continue LLD` in chat)
2. **Follow the course by day** → [`CURRICULUM.md`](./CURRICULUM.md)
3. **For each topic folder:**
   - Read `NOTES.md` — concepts, tiny examples, interview lines
   - Read `EXERCISE.md` — what you must build (no full solution)
   - Code only in `practice/` — your implementations and tests
4. **Revise later** by browsing phase folders (`01-oop`, `02-solid`, `03-design-patterns`, `04-problems`)

## Topic folder layout

```text
01-oop/classes/
├── NOTES.md      # Mentor knowledge
├── EXERCISE.md   # Requirements for you
└── practice/     # Your code only
```

After you finish a topic, a `reference/` folder may appear for revision answers — ignore it until you’ve attempted the exercise.

## For other students

Clone the repo → follow `CURRICULUM.md` from Day 1 → fill in each `practice/` yourself. Do not copy `reference/` early.

## GitHub Pages

1. Push this `lld` folder as a GitHub repo (or set Pages source to this directory in a monorepo).
2. Repo **Settings → Pages → Build and deployment**: Source = **Deploy from a branch**.
3. Branch = `main` (or your default), folder = `/` (site root).
4. Save. After a minute, open the Pages URL — Docsify loads `README.md` and the left sidebar.

`.nojekyll` is required so GitHub does not strip `_sidebar.md`.

## Mentor protocol (AI)

See [`lld_base-instruction.md`](./lld_base-instruction.md).
