# openoakland.org

Static [Jekyll](https://jekyllrb.com) site for OpenOakland, a civic-tech volunteer brigade. Source lives in `src/`; Jekyll builds it to `_site/`.

## Who you're working with

The main day-to-day editor of this site is not a software engineer. When explaining a decision, tradeoff, or the effect of a change, **lead with what a visitor or volunteer will actually see or experience** ("this will make the Active Projects list show your new project under a red 'Recruiting' badge") rather than the mechanism ("this loops over `site.data.recruiting_projects` in Liquid"). It's fine to name a file you edited, but don't explain Jekyll/Liquid/YAML internals unless she asks — over-explain the user-facing outcome, under-explain the implementation.

## Local dev workflow — always preview before calling a content change done

```
make setup   # bundle install — only needed once, or after Gemfile changes
make serve   # bundle exec jekyll serve — builds and watches for changes
```

Open **http://localhost:4000**, navigate to the actual page that changed, and visually confirm the edit is there before saying the change is complete. Hard-refresh if it doesn't look updated.

Run `make test` (htmlproofer) before opening a PR — it catches broken links and broken HTML.

Full contributor workflow (branch naming, PR review, deployment) is documented in `.github/contributing.md`.

## Live vs. dead content — check before editing

Not every file under `src/` is rendered. `_config.yml`'s `source: src` plus whichever directories/collections it declares determine what actually builds. Historically this repo has accumulated content directories that were never wired up and silently 404'd for years (e.g. `_about/`, `_resources/` — removed 2026-07, see commit `ce8e338`). Before editing a file:

1. Check whether `_config.yml` declares it as a collection (look for a `collections:` key), or whether it's a plain top-level page under `src/*.md`.
2. Independent of config, **just run `make serve` and visit the page in the browser** — this is the reliable check. If a page you expect to see 404s, something is off before you even start editing.

Current live content lives in:
- Top-level pages: `src/*.md` (e.g. `about-us.md`, `projects.md`, `how-we-work.md`, `bylaws.md`)
- `src/_posts/` — blog posts (Jekyll's built-in posts collection, listed under Updates)
- `src/_data/*.yml` — structured data pulled into pages via Liquid (project lists, resource lists, nav, etc.)
- `src/_includes/*.html` — HTML snippets/components referenced from the `.md` pages with `{% include foo.html %}`
- `src/_layouts/*.html` — page templates (`default`, `page`, `post`, `home`)

If you're not sure a directory is live, ask rather than assuming — and don't silently skip an edit because a file "looks dead"; confirm it in the browser first.

## Editing projects specifically

Projects shown at `/projects` come from `src/_data/{status}_projects.yml` — one file per status (`active`, `incubating`, `recruiting`, `ops`, `idle`, `delivered`). To change a project's status, move its block to the other file rather than editing a status field. Full syntax rules (indentation, trailing characters, image paths) are in `.github/contributing.md` under "Adding or updating projects" — read that before hand-editing YAML, since a stray trailing space or missing `-` separator breaks the parser in ways that are hard to diagnose from the diff alone.

## General nudges for agents working in this repo

- Don't treat "the text isn't in any live page" as license to add a brand-new page or section on your own judgment — flag it and ask, since it may be intentionally retired content rather than an oversight.
- If a requested change is a find-and-replace across "throughout the site" (e.g. renaming a recurring term), grep `src/` first and list every hit before editing, then flag which hits are in `_posts/` (historical/archival — usually leave as-is) vs. current pages (should be updated).
- Prefer small, single-purpose PRs for content changes — easier for non-technical reviewers to verify against the live preview.
