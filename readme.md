# Just Sid

A personal website for Sidharth Singh, rebuilt with Next.js App Router, React, TypeScript and CSS. Server-rendered content, a warm, colorful one-page portfolio, a Markdown blog, and a privacy-conscious AI activity panel.

## Run

Requires Node.js 20.9 or newer.

```sh
npm install
npm run dev
```

Open http://127.0.0.1:3000. For production: `npm run build`, then `npm start`. Run `npm run typecheck` and `npm test` for verification.

## Content

- `lib/site.ts`: identity, links and projects. Existing portfolio details were retained; verify that they remain current before publishing.
- `app/page.tsx`: homepage copy and sections. The thinking principles are editorial copy for review, not inferred from private history.
- `components/playground.tsx`: interests, animated portrait, interactive thought portal, pointer-following eye, chaos palette, motion controls, and India clock.
- `content/posts/*.md`: blog posts with `title`, `description`, quoted ISO `date`, `category`, and `published: true`. Unpublished and future-dated posts are excluded from the site, RSS and sitemap. `first-note.md` is an unpublished starter.

Blog HTML is trusted owner-authored Markdown. Do not use this renderer for untrusted user submissions. Add an HTML sanitizer before accepting third-party writing. Publishing a new post requires a rebuild/redeploy so the homepage and blog are consistent.

## Private ChatGPT activity

There is no account connection in this implementation. OpenAI organization API usage is not treated as personal ChatGPT activity. The panel polls `/api/activity` every minute for an owner-prepared snapshot; this does not automatically synchronize ChatGPT. Optional sample data is always labeled and is not real usage.

1. Obtain your own ChatGPT data export and keep it **outside this repository**. Unzip it locally and locate `conversations.json`.
2. Preview the local summary:

   ```sh
   npm run metrics:import -- /absolute/path/to/conversations.json
   ```

3. Review the aggregate output. The importer follows the current conversation branch, counts user messages, classifies into four fixed broad categories with local keyword rules, rounds counts down to multiples of five, and suppresses categories below five conversations. Classification is approximate. No external AI service receives the export, and no chat text or titles are written.
4. Only after review, rerun with `--publish` to write the approved snapshot to ignored `.private/activity.json`.
5. On production, provide only this aggregate snapshot at `.private/activity.json` in the application server's filesystem. Keep raw exports out of the repository, hosting files, and public directory. The endpoint allowlists response fields and fails closed for absent/invalid data. Changing the file updates the next poll without a rebuild on persistent Node hosting. Read-only/serverless hosting requires supplying the snapshot during a new deployment; a scheduled, authenticated aggregate source would be needed for truly continuous updates.

Minimum publication size: five conversations. Rounding and suppression reduce exposure but do not provide differential privacy. Check the summary before sharing. No private data has been imported.

## SEO and answer discovery

Server-rendered semantic pages, individual blog URLs, canonical metadata, generated social preview, Person/WebSite and BlogPosting structured data, sitemap, correctly named robots.txt, RSS, and a concise `llms.txt`. These help discovery but cannot guarantee rankings, AI inclusion, or rich results. The site uses `https://justsid.com` as its canonical origin; update `lib/site.ts` if the domain changes.

## Hosting

Deploy as a Node-capable Next.js application. The repository was originally static HTML; static-only hosting such as GitHub Pages cannot run the live activity route. No hosting configuration, DNS, production deployment, or existing audience has been changed. Original static sources remain for reference but Next.js serves the new `app/` routes. Remove the old static hosting setup when switching production to Next.js.

No analytics/tracking scripts are included. Animations honor reduced-motion preferences. DM Sans and Space Mono are self-hosted and optimized with next/font; system fonts provide fallbacks.

## Single-page navigation

The portfolio is one page with a sticky, labeled icon navigation bar: About, Projects, Interests, AI & me, Blog, and Contact. Active sections are highlighted as the visitor scrolls. All posts appear in the Blog section; individual article URLs remain available for sharing and search. The old `/blog` listing redirects to `/#blog` so existing bookmarks still work. Warm peach, butter yellow, mint, lilac, and rose backgrounds keep each section distinct. Personality copy is based on the owner's stated interests in AI, building, playful design, animation, and clear communication; no private chat history is used.
