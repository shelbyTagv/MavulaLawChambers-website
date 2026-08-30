# Decap CMS Setup Guide

## Overview
Decap CMS provides a git-based content management system for managing news, reviews, and team member information without requiring technical expertise. All content is stored as JSON files in the `content/` folder and automatically loaded into the website via `import.meta.glob`.

Authentication is handled by a self-hosted OAuth gateway running as Vercel serverless functions (`/api/auth` and `/api/callback`) — no Netlify account required.

## Access the Admin Interface
1. **Development**: Navigate to `http://localhost:5173/admin/`
2. **Production**: Navigate to `https://mavulalawchambers.co.zw/admin/` (after deployment)

---

## Collections

### News & Notices
- **Location**: `content/news/`
- **Fields**:
  - **ID**: Unique numeric identifier
  - **Type**: Choose "article" or "notice"
  - **Title**: Article/notice title
  - **Excerpt**: Short summary (shown in previews)
  - **Body**: Full article content (Markdown supported, required for articles only)
  - **PDF URL**: Link to downloadable PDF (required for notices only, e.g., `/documents/file.pdf`)
  - **Image**: Cover image
  - **Date**: Publication date (use `YYYY-MM-DD` format for articles, or descriptive text like "July 2026" for notices)
  - **Category**: Topic category (optional, e.g., "ZIMRA Notices")
  - **Author**: Author name (optional)

### Client Reviews
- **Location**: `content/reviews/`
- **Fields**:
  - **ID**: Unique numeric identifier
  - **Client Name**: Name of the client/reviewer
  - **Excerpt**: Short testimonial quote (shown in previews)
  - **Full Review**: Extended review (Markdown supported)
  - **Image**: Client photo
  - **Rating**: Star rating (1-5, optional)
  - **Date**: Review date (e.g., "March 2026")

### Team Members
- **Location**: `content/team/`
- **Fields**:
  - **ID**: Unique numeric identifier
  - **Name**: Full name
  - **Title**: Job title
  - **Photo**: Profile photo
  - **Quote**: Inspirational quote (optional)
  - **Bio**: Biography (Markdown supported, optional)

---

## One-Time Administrator Setup (Vercel OAuth)

This only needs to be done once by the site owner. No Netlify account is required.

### Step 1 — Register a GitHub OAuth App

1. Go to **github.com → Settings → Developer settings → OAuth Apps → New OAuth App**
2. Fill in the form:
   - **Application name**: `Mavula Law Chambers CMS`
   - **Homepage URL**: `https://mavulalawchambers.co.zw`
   - **Authorization callback URL**: `https://mavulalawchambers.co.zw/api/callback`
3. Click **Register application**
4. On the next screen, copy the **Client ID**
5. Click **Generate a new client secret** and copy the secret immediately (it is only shown once)

### Step 2 — Add Credentials to Vercel

1. Go to the **Vercel project dashboard → Settings → Environment Variables**
2. Add the following two variables (for all environments: Production, Preview, Development):

   | Name | Value |
   |---|---|
   | `OAUTH_GITHUB_CLIENT_ID` | Paste the Client ID from Step 1 |
   | `OAUTH_GITHUB_CLIENT_SECRET` | Paste the Client Secret from Step 1 |

   > ⚠️ **Never** commit the client secret to the repository or expose it in any client-side code.

### Step 3 — Deploy

Push this repository to trigger a Vercel deployment. Vercel automatically picks up the `api/` directory as serverless functions — no extra configuration needed.

### Step 4 — Add Staff as GitHub Collaborators

For each staff member who needs CMS access:
1. Go to the repository on GitHub → **Settings → Collaborators → Add people**
2. Invite them by their GitHub username
3. They must accept the invitation email before they can log in

---

## Staff Login Instructions

1. Create a GitHub account at https://github.com/signup (if you don't have one)
2. Ask the site administrator to add you as a repository collaborator and accept the email invitation
3. Go to `https://mavulalawchambers.co.zw/admin/`
4. Click **Login with GitHub**
5. Authorize the application on GitHub's page
6. You will be redirected back to the Decap CMS dashboard

---

## Adding & Publishing Content

1. Go to `/admin/` and log in with GitHub
2. Select a collection (News, Reviews, or Team)
3. Click **New** to create an entry or select an existing one to edit
4. Fill in the fields and click **Save**
5. Click **Publish** — changes are committed to GitHub automatically
6. The website redeploys on Vercel within 2–5 minutes

---

## Content Restrictions
- **File naming**: Decap generates kebab-case filenames automatically (e.g., "Navigating Commercial Contracts" → `navigating-commercial-contracts.json`)
- **Date formats**:
  - Articles: Use `YYYY-MM-DD` (e.g., `2026-01-15`)
  - Notices: Use descriptive text (e.g., `18 July 2025` or `July 2026`)
- **Images**: Upload via the Decap interface; they'll be stored in `public/assets/images/`
- **PDF Storage**: Manual PDF files go in `public/documents/`; reference them with `/documents/filename.pdf`

---

## Troubleshooting

| Symptom | Likely cause & fix |
|---|---|
| "Login failed" | You haven't accepted the GitHub collaborator invitation. Check your email. |
| Stuck on GitHub auth screen | The GitHub OAuth App callback URL doesn't match. Verify it is exactly `https://mavulalawchambers.co.zw/api/callback`. |
| Blank page after login | Check Vercel function logs: Dashboard → Deployments → Functions → `api/callback`. Usually a missing environment variable. |
| Can't see content | Refresh the browser and clear cache (Ctrl+Shift+Delete). |
| Changes not publishing | Check that the GitHub collaborator invitation was accepted and the account has write access. |

### Checking Vercel Function Logs
1. Vercel Dashboard → your project → **Deployments** → latest deployment
2. Click **Functions** tab
3. Look for `api/callback` — errors in the token exchange appear here

---

## Architecture Reference

```
User browser          Vercel (mavulalawchambers.co.zw)       GitHub
─────────────         ────────────────────────────────        ──────
/admin/ page
  │  clicks Login
  │──────────────────► /api/auth
  │                      │  redirects to GitHub OAuth
  │◄─────────────────────┼────────────────────────────────── authorize URL
  │  user approves
  │──────────────────────────────────────────────────────── callback code
  │                    /api/callback
  │                      │  exchanges code for token
  │                      │◄──────────────────────────────── access_token
  │  postMessage(token)◄─┘
  │  logged in ✓
```

## Support
- **Decap CMS Docs**: https://decapcms.org/docs/
- **External OAuth Clients**: https://decapcms.org/docs/external-oauth-clients/
