export interface Review {
  id: number;
  clientName: string;
  excerpt: string;
  body: string;
  image: string;
  rating?: number;
  date: string;
}

const modules = import.meta.glob<{ default: Review }>("/content/reviews/*.json", {
  eager: true,
});

export const reviews: Review[] = Object.values(modules)
  .map((m) => m.default)
  .sort((a, b) => b.id - a.id);