// Controlled via the VITE_COMING_SOON environment variable.
// In Vercel: Settings → Environment Variables → VITE_COMING_SOON = "true"  → shows coming soon page
//                                                VITE_COMING_SOON unset / "false"               → live site
export const IS_COMING_SOON = import.meta.env.VITE_COMING_SOON === "true";
