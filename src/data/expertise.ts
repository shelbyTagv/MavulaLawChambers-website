export interface ExpertiseArea {
  id: number;
  title: string;
  image: string;
  description?: string;
  items?: string[];
}

export const expertiseAreas: ExpertiseArea[] = [
  {
    id: 1,
    title: "Civil & Criminal Litigation",
    image: "/assets/images/placeholder-expertise-1.jpg",
    description:
      "Litigation in both Inferior Courts (Magistrates Courts, Uniformed Personnel Tribunals, etc.) and Superior Courts (Constitutional Court, Supreme Court, High Court & Labour Court).",
  },
  {
    id: 2,
    title: "Mining & Investments",
    image: "/assets/images/placeholder-expertise-2.jpg",
    items: [
      "Company Formation and Mergers",
      "Corporate Rescue Practice",
      "Mining Disputes and Acquisitions",
      "Partnership and Shareholding Structuring",
      "Board Secretarial Services",
    ],
  },
  {
    id: 3,
    title: "Estates, Family & Inheritance",
    image: "/assets/images/placeholder-expertise-3.jpg",
    items: [
      "Wills and Estates Administration",
      "Family Trusts and Inheritance Planning",
      "Divorce Litigation",
      "Children's Law and Parenting Agreements",
    ],
  },
  {
    id: 4,
    title: "Mercantile, Shipping & Customs",
    image: "/assets/images/placeholder-expertise-4.jpg",
    items: [
      "Freight Insurance and Taxation",
      "Customs and Excise Disputes Handling",
      "Forwarding Agents Vetting and Due Diligence",
    ],
  },
  {
    id: 5,
    title: "Conveyancing and Real Estate",
    image: "/assets/images/placeholder-expertise-5.jpg",
    items: [
      "Title Deed Digitalisation",
      "Real Estate Acquisitions and Disposals",
      "Title Deed Transfers",
      "Property Management",
      "Agreements of Sale",
      "Local Authority Private Property Development & Subdivision Compliance",
    ],
  },
];
