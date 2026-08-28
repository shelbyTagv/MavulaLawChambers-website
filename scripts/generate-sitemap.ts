import fs from "node:fs";
import path from "node:path";
import { newsItems } from "../src/data/news";

const baseUrl = "https://mavulalawchambers.co.zw";
const routes = [
  "/",
  "/about",
  "/attorneys",
  "/services",
  "/news",
  "/reviews",
  "/contact",
  ...newsItems.map((item) => `/news/${item.id}`),
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes
    .map((route) => `  <url>\n    <loc>${baseUrl}${route}</loc>\n  </url>`)
    .join("\n")}
</urlset>
`;

const targetPath = path.resolve(process.cwd(), "public", "sitemap.xml");
fs.writeFileSync(targetPath, xml, "utf-8");
