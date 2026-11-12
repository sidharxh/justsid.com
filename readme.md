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
- `content/posts/*.md`: blog posts with `title`, `description`, quoted ISO `date`, `category`, and `published: true`. Unpublished and future-dated posts are excluded from the site and sitemap. `first-note.md` is an unpublished starter.

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

Server-rendered semantic pages, individual blog URLs, canonical metadata, generated social preview, Person/WebSite and BlogPosting structured data, sitemap, correctly named robots.txt and a concise `llms.txt`. These help discovery but cannot guarantee rankings, AI inclusion, or rich results. The site uses `https://justsid.com` as its canonical origin; update `lib/site.ts` if the domain changes.

## Hosting

Deploy as a Node-capable Next.js application. The repository was originally static HTML; static-only hosting such as GitHub Pages cannot run the live activity route. No hosting configuration, DNS, production deployment, or existing audience has been changed. Original static sources remain for reference but Next.js serves the new `app/` routes. Remove the old static hosting setup when switching production to Next.js.

No analytics/tracking scripts are included. Animations honor reduced-motion preferences. DM Sans and Space Mono are self-hosted and optimized with next/font; system fonts provide fallbacks.

## Single-page navigation

The portfolio is one page with a sticky, labeled icon navigation bar: About, Projects, Interests, AI & me, Blog, and Contact. Active sections are highlighted as the visitor scrolls. The Blog navigation item and homepage blog buttons open `/blog`; individual article URLs remain available for sharing and search. Before the first post, `/blog` shows a coming-soon page with a small, keyboard-accessible matching game. Once posts are published, it automatically shows the post listing. Warm peach, butter yellow, mint, lilac, and rose backgrounds keep each section distinct. Personality copy is based on the owner's stated interests in AI, building, playful design, animation, and clear communication; no private chat history is used.


## Profile and project gallery

Current profile: Forward Deployed Engineer at TimeDoc, working remotely and directly with healthcare practitioners. Profile metadata, structured data, and social previews use the same role.

`lib/site.ts` contains the public project descriptions, filter tags, and origin (Personal or Work). The gallery starts with six cards, provides simple category filters, and can reveal the full collection. Project descriptions cover the subject without asserting release or implementation status. Personal projects were summarized from owner-authorized ChatGPT project names, available discussions, and local project material. Unclear names such as The Bat Project, Agent 0, Director, and Cyber Play are excluded pending descriptions; sensitive personal conversations are not published.

LinkedIn buttons use a blue background and appear beside the name in the introduction and in About.


## Editorial and technical wording

The portfolio leads with people and problems, reflecting the owner's stated strength and current forward deployed engineering role. The skills section groups capabilities and supporting technologies instead of treating vendors, models, frameworks, and languages as interchangeable tools. OpenAI API and Amazon Bedrock are described as model integrations; OpenAPI specification expertise is not inferred. Project names pair existing brands with clear functional descriptions, and non-AI utilities are filtered separately from AI projects.

The AI section includes an interactive four-step example (Understand, Explore, Build, Check), explicitly labeled as an example rather than a private conversation. This illustrates an approach without claiming measured usage, hidden personal knowledge, or actual chat content. The existing approved aggregate usage boundary remains in place.


## External links

LinkedIn is the only outbound follow/contact destination. The RSS follow link and X profile link have been removed, as has RSS autodiscovery metadata. The legacy `/feed.xml` URL redirects to LinkedIn. Same-page navigation, blog article links, and the privacy page remain internal.


## Blog waiting game

`components/blog-game.tsx` provides a twelve-card, six-pair matching game on the empty blog page. It has no timer, account, analytics, persistence, or external service. Cards are native keyboard-accessible buttons, mismatch timers are cleaned up, pairs and moves are announced, and New shuffle resets the round. The game appears only while there are no published posts.
