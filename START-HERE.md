# Publish Cam Holt's portfolio at camholt.com

This package is ready for manual GitHub Pages upload. It does not publish anything or change DNS automatically.

## What's included

- **site/** — the finished website. Upload the **contents** of this folder to GitHub, not the folder itself.
- **editable-source/** — a standalone React/Vite source project for future edits. Keep this folder on your computer; it is not needed for the first upload.
- **START-HERE.md** — this guide.

The package contains only portfolio content, the portrait, and the downloadable résumé. It does not include other Replit projects, chat attachments, credentials, or the API server.

## 1. Protect your domain in GitHub (recommended)

1. On GitHub, click your profile photo → **Settings → Pages**. This is your account's settings page, not a repository's settings.
2. Under verified domains, choose **Add a domain** and enter `camholt.com`.
3. GitHub will show a unique TXT record. In GoDaddy, open **Domain Portfolio → camholt.com → DNS**, and add the exact TXT record GitHub provides. GoDaddy's Name field uses the host portion, without the final `.camholt.com`.
4. Return to GitHub and verify the domain. Keep the TXT record afterward.

This TXT verification does not move your existing website or email. Do not guess its value; GitHub generates it for your account.

## 2. Create your public portfolio repository

1. Go to https://github.com/new while signed in.
2. Name the repository `cam-holt-portfolio` (or another name you prefer).
3. Choose **Public**, select **Add a README file**, and create the repository.
4. Choose **Add file → Upload files**.
5. Unzip this package on your computer. Drag all the files and the `assets` folder **inside `site/`** into the upload area, then commit to `main`.
6. Confirm that `index.html`, `CNAME`, `cam-holt-portrait.jpg`, `cam-holt-resume.pdf`, and the `assets` folder are directly at the repository root.
7. Include the hidden `.nojekyll` file. If your computer hides it, use **Add file → Create new file**, name it `.nojekyll`, enter `Static site; no Jekyll build required.`, and commit it.

Do not upload only the ZIP file. GitHub does not extract it into a website. Do not upload the outer `site` folder as a folder; the website's `index.html` must be at the repository root.

## 3. Enable GitHub Pages and claim the custom domain

1. In this repository, open **Settings → Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Choose branch **main** and folder **/(root)**, then save.
4. Under **Custom domain**, enter **camholt.com** and save. The included `CNAME` file also contains this domain.
5. A DNS warning is expected until the next step is finished.

This prebuilt upload does **not** need a custom GitHub Actions workflow, Node.js installation, or a build command in GitHub. The package is built for the root of `camholt.com`; assets may not load correctly on a temporary `github.io/repository-name/` URL before custom-domain setup is complete.

**Add the custom domain to this repository before pointing its website DNS to GitHub.** This helps prevent another GitHub Pages site from claiming the domain.

## 4. Point GoDaddy website DNS to GitHub Pages

Changing these website records will replace any website currently served at `camholt.com` and `www.camholt.com`. Save a copy or screenshot of the existing DNS settings first.

In GoDaddy, open **Domain Portfolio → camholt.com → DNS**. These instructions apply if GoDaddy hosts your DNS. If its DNS screen says your nameservers are managed elsewhere, make the changes at that provider instead; do not change nameservers just for this setup.

Replace conflicting website A records for `@` with these four records:

| Type | Name | Value | TTL |
| --- | --- | --- | --- |
| A | @ | 185.199.108.153 | 1 hour/default |
| A | @ | 185.199.109.153 | 1 hour/default |
| A | @ | 185.199.110.153 | 1 hour/default |
| A | @ | 185.199.111.153 | 1 hour/default |

Set the `www` record as follows:

| Type | Name | Value | TTL |
| --- | --- | --- | --- |
| CNAME | www | YOUR-GITHUB-USERNAME.github.io | 1 hour/default |

**Replace `YOUR-GITHUB-USERNAME` with the owner shown in your GitHub repository URL. Do not paste that placeholder.** For a repository at `https://github.com/USERNAME/cam-holt-portfolio`, the CNAME target is `USERNAME.github.io`. Do not include `https://`, a slash, or the repository name.

GitHub Pages will redirect `www.camholt.com` to your primary domain, `camholt.com`. You do not need GoDaddy URL forwarding.

### Preserve other services

- Keep all MX records and existing email-related TXT records (SPF, DKIM, DMARC). Keep the GitHub verification TXT record too.
- Do not delete all DNS records, change nameservers, or remove unrelated subdomains.
- Replace only conflicting `@` website A/AAAA records and the `www` website record. If `@` already has AAAA records pointing to an old host, remove those old website AAAA records or replace them with all four GitHub IPv6 addresses below.
- Optional IPv6 records for `@`: `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`. Keep the four A records even if adding IPv6.
- If GoDaddy forwarding is already configured for these domains, disable that forwarding as part of replacing the old website setup. Do not add new forwarding.
- Do not create wildcard (`*`) records.

## 5. Enable HTTPS and verify

1. Wait for DNS to update. It often takes an hour, but global propagation can take up to 48 hours.
2. Return to repository **Settings → Pages** and wait for a successful DNS check.
3. Enable **Enforce HTTPS** when available. Certificate issuance can take additional time; GitHub says the option may take up to 24 hours to appear.
4. Check:
   - `https://camholt.com` displays the Rose & Orchid portfolio.
   - `https://www.camholt.com` redirects to `https://camholt.com`.
   - The portrait loads.
   - Download résumé opens the PDF.
   - Impact, Principles, and Beyond work links scroll correctly.
   - LinkedIn and email links work.

If HTTPS remains unavailable, check that no old A/AAAA website records or conflicting `www` records remain. If you have CAA records, check GitHub's HTTPS troubleshooting guide before changing them.

## Future updates

### From this Replit project

Run `node scripts/portfolio-upload/package.mjs` to rebuild the upload package from the current portfolio. Upload the new `site/` contents to the same repository, replacing files. Preserve the `CNAME` and `.nojekyll` files.

### From the included editable source

The `editable-source/` folder is independent of the larger Replit workspace. Install Node.js 24 and pnpm 10 on your computer, then run inside that folder:

```sh
pnpm install
pnpm dev
```

Edit the files under `src/`. When ready:

```sh
pnpm build
```

Upload the **contents of `editable-source/dist/`** to the same GitHub repository root. The source project keeps `camholt.com` in its public CNAME file. A public source repository is approved, but uploading the editable source is optional; GitHub only needs the finished site files to serve the page.

Changes in Replit do not automatically sync to this manually uploaded GitHub repository.

## Official references

- GitHub custom domains and current DNS addresses: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
- GitHub domain verification: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages
- GoDaddy A records: https://www.godaddy.com/help/add-an-a-record-19238
- GoDaddy CNAME records: https://www.godaddy.com/help/add-a-cname-record-19236
