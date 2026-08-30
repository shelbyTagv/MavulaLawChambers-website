export interface TeamMember {
  id: number;
  name: string;
  title: string;
  photo: string;
  quote?: string;
  bio?: string;
}

export interface ExpertiseArea {
  id: number;
  title: string;
  image: string;
  description?: string;
  items?: string[];
}

export type NewsItemType = "article" | "notice";

export interface NewsItem {
  id: number;
  type: NewsItemType;
  slug?: string;
  title: string;
  excerpt: string; // short description, always shown on the card
  body?: string; // full content — required for "article" type, unused for "notice"
  pdfUrl?: string; // path to the PDF in /public — required for "notice" type
  image: string;
  date: string;
  category?: string; // e.g. "Court Notices", "ZIMRA Notices", "Statutory Instruments"
  author?: string;
}

export interface Review {
  id: number;
  clientName: string;
  excerpt: string;
  body: string;
  image: string;
  rating?: number;
  date: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface SocialLinks {
  whatsapp: string;
  facebook: string;
  twitter: string;
  linkedin: string;
}

export interface ContactInfo {
  phone: string;
  voip: string;
  hours: string;
  whatsappUrl: string;
  email: string;
  address: string;
}
