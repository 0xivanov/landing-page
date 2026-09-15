# Launchstead

Public marketing website for Launchstead, a hosting product in private preview.

- Website: https://launchstead.0xivanov.dev
- Cloudflare Pages: https://launchstead.pages.dev
- Contact: ivanivanov.ii726@gmail.com

## Local development

Requires Node.js, npm and Python 3 for the local preview server.

```sh
npm ci
npm run build
npm run preview
```

Open http://127.0.0.1:8174. The build copies only explicitly listed public assets into `dist/`.

## Deployment

The existing Cloudflare Pages project is `launchstead`, with production branch `main`. Provide `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` securely in your environment, then run:

```sh
npm run deploy
```

Never commit credentials. Upload only `dist/`, not the repository root. DNS uses a proxied CNAME from `launchstead.0xivanov.dev` to `launchstead.pages.dev`. Deployment is manual; pushing to GitHub does not automatically publish changes.

## Content

This website describes the private preview, accepts enquiries through email links, and includes privacy and preview terms. It does not provide customer login or collect payments. Public prices, final paid-service terms, refund/cancellation conditions and operator business details must be settled before launching paid sales.

No external fonts, analytics scripts, or image services are used. Mobile navigation and FAQ interactions use minimal local JavaScript and native HTML. Security headers are configured in `_headers`.
