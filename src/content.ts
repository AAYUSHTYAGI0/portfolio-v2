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
  tags: string[];
  visual:
    | "marketplace"
    | "agents"
    | "knowledge"
    | "voice"
    | "memory"
    | "rescue";
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
    tags: ["React Native", "Firebase", "Razorpay", "Node.js"],
    visual: "marketplace",
  },
  {
    number: "04",
    title: "Stock Council AI",
    category: "AI & ML",
    description:
      "A council of AI analysts, each with a different perspective. Exploring multi-agent reasoning through structured market research and debate.",
    tags: ["Claude API", "React", "Supabase", "Python"],
    visual: "agents",
  },
  {
    number: "05",
    title: "MindCraft AI",
    category: "AI & ML",
    description:
      "Turning dense information into connected understanding. An AI study companion for concept maps, active recall, and clearer thinking.",
    tags: ["Gemini API", "React", "Vite", "Tailwind CSS"],
    visual: "knowledge",
  },
  {
    number: "06",
    title: "Personal AI Voice Agent",
    category: "Voice AI",
    description:
      "An assistant that joins the conversation. Exploring natural voice interactions, call screening, and intelligent scheduling through connected AI tools.",
    tags: ["Bland.ai", "Vapi.ai", "Node.js"],
    visual: "voice",
  },
];
