export const SITE_NAME = "Mavula & Co. Law Chambers";
export const LEGAL_NAME = "Mavula Law Chambers";
export const SITE_URL = "https://mavulalawchambers.co.zw";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/assets/images/mavula-logo.png`;

export const businessContact = {
  phone: "+263 77 737 5296",
  voip: "+263 86 7701 0855",
  email: "thuto.ms@gmail.com",
  address: "Office 5, Philow Arcade, Stand 332, CBD, Plumtree, Zimbabwe",
  streetAddress: "Office 5, Philow Arcade, Stand 332, CBD",
  locality: "Plumtree",
  country: "ZW",
};

export const pageMeta = {
  home: {
    title: "Mavula & Co. Law Chambers | Trusted Law Firm in Plumtree, Zimbabwe",
    description: "Mavula & Co. Law Chambers is a trusted Zimbabwean law firm in Plumtree, offering litigation, conveyancing, family law, and commercial legal support.",
  },
  about: {
    title: "About Us | Mavula & Co. Law Chambers",
    description: "Learn about Mavula & Co. Law Chambers, a trusted law firm in Plumtree, Zimbabwe, committed to diligent legal guidance and client-focused support.",
  },
  attorneys: {
    title: "Our Attorneys | Mavula & Co. Law Chambers",
    description: "Meet the legal team at Mavula & Co. Law Chambers and discover the experience behind our trusted law firm in Plumtree, Zimbabwe.",
  },
  services: {
    title: "Legal Services | Mavula & Co. Law Chambers",
    description: "Explore legal services from Mavula & Co. Law Chambers, including conveyancing, litigation, family law, estate administration, and commercial advisory support.",
  },
  news: {
    title: "News & Insights | Mavula & Co. Law Chambers",
    description: "Read the latest legal insights, practice updates, and thought leadership from Mavula & Co. Law Chambers in Plumtree, Zimbabwe.",
  },
  reviews: {
    title: "Client Reviews | Mavula & Co. Law Chambers",
    description: "See how clients describe working with Mavula & Co. Law Chambers, a dependable law firm serving Plumtree and Zimbabwe.",
  },
  contact: {
    title: "Contact Us | Mavula & Co. Law Chambers",
    description: "Contact Mavula & Co. Law Chambers in Plumtree, Zimbabwe for legal advice, consultation, and professional representation.",
  },
};

export const legalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: SITE_NAME,
  legalName: LEGAL_NAME,
  image: DEFAULT_OG_IMAGE,
  url: SITE_URL,
  telephone: "+263777375296",
  email: businessContact.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: businessContact.streetAddress,
    addressLocality: businessContact.locality,
    addressCountry: businessContact.country,
  },
  openingHours: "Mo-Fr 08:00-16:30",
  sameAs: [
    "https://facebook.com/[handle-placeholder]",
    "https://linkedin.com/company/[handle-placeholder]",
  ],
};
