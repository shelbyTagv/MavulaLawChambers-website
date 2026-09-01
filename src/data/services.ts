export interface ServiceItem {
  id: number;
  image: string;
  label: string;
}

export const services: ServiceItem[] = [
  { id: 1, image: "/assets/images/hero-lex-non-scripta.jpg", label: "Criminal & Civil Court" },
  { id: 2, image: "/assets/images/law-society-zimbabwe.jpeg", label: "Notary Publics & Commr of Oaths" },
  { id: 3, image: "/assets/images/families_service.jpeg", label: "Deceased Estates Management" },
  { id: 4, image: "/assets/images/realEstate_service.jpeg", label: "Conveyancing & Deeds Reg" },
  { id: 5, image: "/assets/images/families_service.jpeg", label: "Family & Other Trusts Registration" },
  { id: 6, image: "/assets/images/realEstate_service.jpeg", label: "Property Sales & Purchases Oversight" },
  { id: 7, image: "/assets/images/shipping_service.jpeg", label: "Immigration & Customs Advocates" },
];
