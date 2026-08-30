/**
 * Vercel Serverless Function: /api/auth
 *
 * Initiates the GitHub OAuth flow for Decap CMS.
 * Redirects the user's browser to GitHub's authorization page.
 *
 * Required environment variable (set in Vercel project settings):
 *   OAUTH_GITHUB_CLIENT_ID — from your GitHub OAuth App
 */
export default function handler(req, res) {
  const clientId = process.env.OAUTH_GITHUB_CLIENT_ID;

  if (!clientId) {
    res.status(500).send("Server misconfiguration: OAUTH_GITHUB_CLIENT_ID is not set.");
    return;
  }

  // Build the callback URL dynamically from the incoming request host so the
  // same function works on both the production domain and Vercel preview URLs.
  const redirectUri = `https://${req.headers.host}/api/callback`;

  const authUrl =
    `https://github.com/login/oauth/authorize` +
    `?client_id=${clientId}` +
    `&redirect_uri=${encodeURIComponent(redirectUri)}` +
    `&scope=repo`;

  res.redirect(302, authUrl);
}
