/**
 * Vercel Serverless Function: /api/callback
 *
 * Handles the GitHub OAuth callback for Decap CMS.
 * Exchanges the temporary auth code for an access token, then passes
 * the token back to the Decap CMS window via the postMessage handshake
 * that Decap CMS expects from an external OAuth client.
 *
 * Required environment variables (set in Vercel project settings):
 *   OAUTH_GITHUB_CLIENT_ID     — from your GitHub OAuth App
 *   OAUTH_GITHUB_CLIENT_SECRET — from your GitHub OAuth App (server-side only, never expose client-side)
 *
 * Decap CMS postMessage protocol (as of Decap CMS v3):
 *   1. Popup posts "authorizing:github" to opener → signals handshake started
 *   2. Opener replies with any message → triggers token delivery
 *   3. Popup posts "authorization:github:success:{token}" to opener → login complete
 *   Reference: https://decapcms.org/docs/external-oauth-clients/
 */
export default async function handler(req, res) {
  const { code, error, error_description } = req.query;

  // Handle errors returned by GitHub (e.g., user denied access)
  if (error) {
    const message = error_description || error;
    return res.status(400).send(buildScript("error", message));
  }

  if (!code) {
    return res.status(400).send(buildScript("error", "No authorization code received from GitHub."));
  }

  const clientId = process.env.OAUTH_GITHUB_CLIENT_ID;
  const clientSecret = process.env.OAUTH_GITHUB_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    return res
      .status(500)
      .send(buildScript("error", "Server misconfiguration: OAuth credentials are not set."));
  }

  try {
    const tokenResponse = await fetch("https://github.com/login/oauth/access_token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        client_id: clientId,
        client_secret: clientSecret,
        code,
      }),
    });

    const data = await tokenResponse.json();

    if (data.error || !data.access_token) {
      const msg = data.error_description || data.error || "Failed to obtain access token.";
      return res.status(400).send(buildScript("error", msg));
    }

    res.setHeader("Content-Type", "text/html");
    return res.send(buildScript("success", data.access_token));
  } catch (err) {
    console.error("[api/callback] Token exchange failed:", err);
    return res
      .status(500)
      .send(buildScript("error", "Internal server error during token exchange."));
  }
}

/**
 * Builds a minimal HTML page that completes the Decap CMS postMessage
 * OAuth handshake. The popup window posts messages back to the opener
 * (the /admin page) following Decap CMS's external OAuth client protocol.
 *
 * @param {"success"|"error"} status
 * @param {string} content  access_token on success, error message on failure
 */
function buildScript(status, content) {
  // Serialise the payload as Decap CMS expects it on the message string:
  //   "authorization:github:success:{"token":"<token>"}"
  //   "authorization:github:error:{"error":"<message>"}"
  const payload =
    status === "success"
      ? JSON.stringify({ token: content })
      : JSON.stringify({ error: content });

  return /* html */ `<!DOCTYPE html>
<html>
  <head><title>Authorizing...</title></head>
  <body>
    <p>Authorizing, please wait…</p>
    <script>
      (function () {
        // Step 1 — tell the opener we have started the handshake
        window.opener.postMessage("authorizing:github", "*");

        // Step 2 — listen for the opener's acknowledgement, then deliver the token
        function receiveMessage(e) {
          window.removeEventListener("message", receiveMessage, false);
          window.opener.postMessage(
            "authorization:github:${status}:${payload.replace(/\\/g, "\\\\").replace(/`/g, "\\`")}",
            e.origin
          );
          // Allow a short delay so the message is delivered before the window closes
          setTimeout(function () { window.close(); }, 500);
        }

        window.addEventListener("message", receiveMessage, false);
      })();
    </script>
  </body>
</html>`;
}
