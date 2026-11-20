// Edit your public contact links and project information here.
export const profile = {
  email: "tyagiaayush3030@gmail.com",
  github: "https://github.com/aayushtyagi00",
  linkedin: "https://linkedin.com/in/aayushtyagi00",
  x: "https://x.com/aayushtyagi00",
  instagram: "https://www.instagram.com/_aayush.tyagi_/",
};
export interface Project {
  number: string;
  title: string;
  category: "AI & ML" | "Full-stack";
  description: string;
  highlights: string[];
  tags: string[];
  visual: "memory" | "rescue" | "hotel" | "food";
  live?: string;
  github?: string;
}
// Add verified live / github URLs to enable direct project links.
export const projects: Project[] = [
  {
    number: "01",
    title: "Memory AI",
    category: "AI & ML",
    description:
      "A searchable second brain for notes, documents, and screenshots. Gemini-powered answers cite source memories, while vision extraction, auto-tagging, and reminders help turn scattered information into useful knowledge.",
    highlights: [
      "Answers link back to the notes and documents they draw from.",
      "Screenshot text extraction and automatic tagging help organize saved material.",
      "Reminders bring saved information back when it is needed.",
    ],
    tags: ["React", "TypeScript", "Gemini API", "Supabase"],
    visual: "memory",
    github: "https://github.com/aayushtyagi00/memory-ai",
  },
  {
    number: "02",
    title: "ResQRoute",
    category: "Full-stack",
    description:
      "An emergency evacuation planning prototype combining interactive maps, weighted route comparisons, and Gemini assistance. Explore how hazards, accessibility needs, and simulated sensor conditions affect evacuation decisions.",
    highlights: [
      "Compare evacuation routes and shelter locations on an interactive map.",
      "Explore how simulated hazards and accessibility needs change route rankings.",
    ],
    tags: ["React", "Leaflet", "Express", "Gemini API"],
    visual: "rescue",
    github:
      "https://github.com/aayushtyagi00/resqroute-emergency-escape-planner",
  },
  {
    number: "03",
    title: "Aurel Hotels",
    category: "Full-stack",
    description:
      "A hotel booking and operations platform that connects the guest’s room search and reservation with the staff’s day-to-day work.",
    highlights: [
      "Browse stays across 12 cities and book an accommodation category. The backend assigns an available room in a transaction.",
      "Staff manage reservations, check-ins, checkouts, room readiness, and payment records for their assigned cities.",
    ],
    tags: ["React", "Firebase Auth", "Firestore", "Cloudflare Workers"],
    visual: "hotel",
    live: "https://aurel-hotels.web.app/",
    github: "https://github.com/aayushtyagi00/Aurel-Hotels-project",
  },
  {
    number: "04",
    title: "CampusBite",
    category: "Full-stack",
    description:
      "A food ordering and scheduled pickup platform for Lovely Professional University. Students can browse campus stalls and choose a pickup window.",
    highlights: [
      "Students can track orders and refunds when live checkout is configured.",
      "Vendors manage shop orders, while administrators review applications and set pickup capacity.",
    ],
    tags: ["Next.js", "Supabase", "Razorpay", "Tailwind CSS"],
    visual: "food",
    live: "https://campusbite-lpu.vercel.app/",
    github: "https://github.com/aayushtyagi00/Campusbite",
  },
];
