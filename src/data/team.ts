import type { TeamMember } from "../types";

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Thuto Mavula",
    title: "Managing Partner",
    photo: "/assets/images/thuto-mavula.jpeg",
    quote:
      "Our global outlook, instigates us to anticipate developments across the legal, regulatory and commercial landscape, enabling us to respond strategically to emerging challenges and opportunities while delivering sophisticated, commercially focused legal solutions to our clients.",
  },
  {
    id: 2,
    name: "Thomas Sheunesu Gamure",
    title: "Senior Associate & Head of Estate and Conveyancing Department",
    photo: "/assets/images/Thomas Sheunesu.jpeg",
    bio:
      "Thomas Sheunesu Gamure is a Senior Associate and Head of the Estate and Conveyancing Department at Mavula and Company Law Chambers. A seasoned Legal Practitioner, Conveyancer, and Notary Public, Thomas brings 11 years of extensive experience across criminal and civil litigation in both the Magistrates' Courts and Superior Courts. Beyond his deep expertise in property transfers, estate planning, and court practice, he specializes in Environmental, Energy, and Mining Law, providing strategic legal counsel in complex, highly regulated industries.",
  },
  {
    id: 3,
    name: "Harriet N Msebele",
    title: "Office Administrator",
    photo: "/assets/images/harriet-msebele.jpeg",
    bio:
      "Our office administrator, Harriet holds a Bachelors Degree in Political Science and Political Administration (HPOS) with University of Zimbabwe. She has over 7 years in Administration work in both private and public sectors and is currently pursuing a Bachelor Degree in Law with African University (Zambia).",
  },
  {
    id: 4,
    name: "Mutjideni Mpofu",
    title: "Front Desk Secretary",
    photo: "/assets/images/Mutjideni Mpofu.jpeg",
    bio:
      "Mutjideni Mpofu is the friendly face and welcoming voice at the front desk of Mavula & Co. Law Chambers. With over 3 years of client service experience, Mutjideni takes pride in keeping the office organized and ensuring every guest feels valued from the moment they walk through the door. Her versatility lies in her local multilingual gift, as she is fluent in TjiKalanga, IsiNdebele, SeTswana and ChiShona in addition to the official language of exchange-English.",
  },
  {
    id: 5,
    name: "Nkosilathi Sibanda",
    title: "Associate intern",
    photo: "/assets/images/ngosilathi_sibanda.jpeg",
    quote:
      "Nkosilathi Sibanda is a seasoned legal practitioner specializing in criminal defense and advocacy. He earned his Bachelor of Laws (LL.B.) degree from the University of KwaZulu-Natal and brings years of dedicated hands-on experience in the criminal law sector. Known for his strategic litigation and deep commitment to justice, Nkosilathi vigorously protects his clients' constitutional rights and provides robust representation across complex criminal matters.",
  },
].sort((a, b) => a.id - b.id);
