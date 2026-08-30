import fs from "node:fs";
import path from "node:path";
import type { NewsItem } from "../src/types";

const baseUrl = "https://mavulalawchambers.co.zw";

// Load news items from JSON files directly
const contentDir = path.resolve(process.cwd(), "content", "news");
const newsFiles = fs.readdirSync(contentDir).filter((f) => f.endsWith(".json"));
const newsItems: NewsItem[] = newsFiles
  .map((file) => {
    const content = fs.readFileSync(path.join(contentDir, file), "utf-8");
    return JSON.parse(content) as NewsItem;
  })
  .sort((a, b) => b.id - a.id);

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
