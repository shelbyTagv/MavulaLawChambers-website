import type { NewsItem } from "../types";

const modules = import.meta.glob<{ default: NewsItem }>("/content/news/*.json", {
  eager: true,
});

export const newsItems: NewsItem[] = Object.values(modules)
  .map((m) => m.default)
  .sort((a, b) => b.id - a.id);
