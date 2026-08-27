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
  description: string;
}

export interface NewsItem {
  id: number;
  slug?: string;
  title: string;
  excerpt: string;
  body: string;
  image: string;
  date: string;
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
