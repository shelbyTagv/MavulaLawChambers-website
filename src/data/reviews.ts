export interface Review {
  id: number;
  clientName: string;
  excerpt: string;
  body: string;
  image: string;
  rating?: number;
  date: string;
}

// NOTE: These are illustrative sample reviews for layout/testing purposes only.
// Verify Law Society of Zimbabwe advertising rules on client testimonials before
// publishing any reviews live, and replace with real, consented client reviews.
export const reviews: Review[] = [
  {
    id: 1,
    clientName: "Tendai Moyo",
    excerpt:
      "Mavula & Co. handled my property transfer smoothly from start to finish, keeping me informed at every stage.",
    body:
      "I needed to transfer a property I'd inherited and had no idea where to start with the Deeds Registry process. The team at Mavula & Co. walked me through every requirement, prepared all the documentation, and kept me updated by phone and WhatsApp throughout. What I expected to take months was completed efficiently and without any surprises. I'd recommend them to anyone dealing with conveyancing in Zimbabwe.",
    image: "/assets/images/placeholder-review-1.jpg",
    rating: 5,
    date: "March 2026",
  },
  {
    id: 2,
    clientName: "Rutendo Chikwanha",
    excerpt:
      "Professional, patient, and thorough — they guided my family through a difficult estate matter with real care.",
    body:
      "After my father passed away, our family was overwhelmed trying to understand the estate administration process. Mavula & Co. took the time to explain each step in plain language, handled the paperwork with the Master's Office, and were genuinely compassionate throughout what was an emotionally difficult time for us. Their attention to detail gave us real peace of mind.",
    image: "/assets/images/placeholder-review-2.jpg",
    rating: 5,
    date: "January 2026",
  },
  {
    id: 3,
    clientName: "Farai Ndlovu",
    excerpt:
      "Sharp, responsive, and results-driven — exactly what I needed for a company dispute.",
    body:
      "Our company was facing a shareholding dispute that could have dragged on for years. Mavula & Co.'s corporate team moved quickly, clearly understood the commercial stakes involved, and negotiated a resolution that protected our interests without unnecessary litigation costs. Their responsiveness throughout — even on tight deadlines — set them apart from firms I'd worked with previously.",
    image: "/assets/images/placeholder-review-3.jpg",
    rating: 5,
    date: "November 2025",
  },
  {
    id: 4,
    clientName: "Chipo Mutasa",
    excerpt:
      "They made a stressful divorce process feel manageable, with clear communication throughout.",
    body:
      "Going through a divorce is never easy, but the family law team at Mavula & Co. approached my case with both professionalism and empathy. They were realistic about timelines and outcomes from the start, which I appreciated, and they fought hard on the issues that mattered most to me and my children. I always knew what was happening with my case and why.",
    image: "/assets/images/placeholder-review-4.jpg",
    rating: 4,
    date: "September 2025",
  },
];