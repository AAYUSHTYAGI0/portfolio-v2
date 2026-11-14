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
  category: "AI & ML" | "Full-stack" | "Voice AI";
  description: string;
  highlights: string[];
  tags: string[];
  visual:
    | "marketplace"
    | "agents"
    | "knowledge"
    | "voice"
    | "memory"
    | "rescue"
    | "hotel"
    | "campus";
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
    title: "ExpertEdge",
    category: "Full-stack",
    description:
      "Connecting people with the right expertise. A mobile-first consultation marketplace with scheduling, real-time chat, and integrated payments.",
    highlights: [
      "Book a consultation and manage appointments with calendar scheduling.",
      "Chat with consultants in real time and pay through Razorpay.",
    ],
    tags: ["React Native", "Firebase", "Razorpay", "Node.js"],
    visual: "marketplace",
  },
  {
    number: "04",
    title: "Stock Council AI",
    category: "AI & ML",
    description:
      "A council of AI analysts, each with a different perspective. Exploring multi-agent reasoning through structured market research and debate.",
    highlights: [
      "Multiple analysts debate market signals before synthesizing a shared view.",
      "Market data informs the discussion, and past debates are saved for review.",
    ],
    tags: ["Claude API", "React", "Supabase", "Python"],
    visual: "agents",
  },
  {
    number: "05",
    title: "MindCraft AI",
    category: "AI & ML",
    description:
      "Turning dense information into connected understanding. An AI study companion for concept maps, active recall, and clearer thinking.",
    highlights: [
      "Use Gemini to extract concepts and arrange them in an interactive mind map.",
      "Export study decks to review what you’ve learned through active recall.",
    ],
    tags: ["Gemini API", "React", "Vite", "Tailwind CSS"],
    visual: "knowledge",
  },
  {
    number: "06",
    title: "Personal AI Voice Agent",
    category: "Voice AI",
    description:
      "An assistant that joins the conversation. Exploring natural voice interactions, call screening, and intelligent scheduling through connected AI tools.",
    highlights: [
      "Screen incoming calls and help schedule appointments through voice.",
      "Use persona guidelines to keep responses consistent across calls.",
    ],
    tags: ["Bland.ai", "Vapi.ai", "Node.js"],
    visual: "voice",
  },
  {
    number: "07",
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
    number: "08",
    title: "CampusCue",
    category: "Full-stack",
    description:
      "An event hub for LPU students and organizers. Students can discover and register for events, while organizers can spot scheduling conflicts before publishing.",
    highlights: [
      "Compare the event time and target audience to detect clashes and suggest a nearby open slot.",
      "Share a weekly event board with a QR code that opens CampusCue for browsing and registration.",
    ],
    tags: ["React", "Vite", "Tailwind CSS", "QR Codes"],
    visual: "campus",
    live: "https://lpucampus.vercel.app/",
    github: "https://github.com/aayushtyagi00/CampusCue",
  },
];
