# Get 440 website

Next.js (Pages Router) site, built as a static export (`output: 'export'` in `next.config.js`).

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build and preview

```bash
npm run build      # writes the static site to out/
npm run serve:out  # preview out/ locally
```

## Deploy to Cloudflare Pages

Connect the GitHub repo in the Cloudflare dashboard (Workers & Pages → Create → Pages → Connect to Git) with:

| Setting | Value |
|---|---|
| Production branch | `main` |
| Framework preset | Next.js (Static HTML Export), or None |
| Build command | `npm run build` |
| Build output directory | `out` |
| Environment variable | `NODE_VERSION=22` |

Notes:

- Caching and security headers live in `public/_headers`.
- `src/pages/404.js` is exported as `out/404.html` and served for unknown routes.
- Assets use absolute `/images/...` paths, so serve the site from the domain root.
- The canonical and `og:url` tags point to `https://www.get440.com`. Update them in `src/pages/index.js` and `src/pages/privacy-policy.js` if the domain changes.
- The quote form and bales list call `creditclan.com` APIs from the browser, so those servers must allow the site's origin (CORS).
- `.htaccess` is only for Apache hosting and is ignored by Cloudflare.
