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
    name: "Harriet N Msebele",
    title: "Office Administrator",
    photo: "/assets/images/harriet-msebele.jpeg",
    bio: "Our office administrator, Harriet holds a Bachelors Degree in Political Science and Political Administration (HPOS) with University of Zimbabwe. She has over 7 years in Administration work in both private and public sectors and is currently pursuing a Bachelor Degree in Law with African University (Zambia).",
  },
  {
    id: 3,
    name: "ngosilathi Sibanda",
    title: "Associate intern",
    photo: "/assets/images/ngosilathi-sibanda.jpeg",
    quote:
      "Nkosilathi Sibanda is a seasoned legal practitioner specializing in criminal defense and advocacy. He earned his Bachelor of Laws (LL.B.) degree from the University of KwaZulu-Natal and brings years of dedicated hands-on experience in the criminal law sector. Known for his strategic litigation and deep commitment to justice, Nkosilathi vigorously protects his clients' constitutional rights and provides robust representation across complex criminal matters.",
  },
].sort((a, b) => a.id - b.id);
