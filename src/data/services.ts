export interface ServiceItem {
  id: number;
  icon: string;
  label: string;
}

export const services: ServiceItem[] = [
  { id: 1, icon: "🧑🏿‍⚖️", label: "Criminal & Civil Court" },
  { id: 2, icon: "🪙", label: "Notary Publics & Commr of Oaths" },
  { id: 3, icon: "⚰️", label: "Deceased Estates Management" },
  { id: 4, icon: "📂", label: "Conveyancing & Deeds Reg" },
  { id: 5, icon: "🤱🏿", label: "Family & Other Trusts Registration" },
  { id: 6, icon: "🏘️", label: "Property Sales & Purchases Oversight" },
  { id: 7, icon: "🌍", label: "Immigration & Customs Advocates" },
];
