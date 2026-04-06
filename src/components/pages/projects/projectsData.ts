import type { Project } from "@/types";

/**
 * Featured deployments — merged ahead of API results on the home projects section.
 * Live demos: Food Book, PH Health Care, Imagine Redux Story.
 */
export const featuredProjects: Project[] = [
  {
    _id: "featured-food-book",
    title: "Food Book",
    description:
      "A full-featured food discovery web app for street food and trending dishes. Visitors can explore categories, search listings, read and leave ratings and comments, and browse location-tagged spots (e.g. Dublin, Cork, Blanchardstown). The experience includes premium membership with gated “Premium Spots” content, account flows (login/sign up), FAQs, and a marketing-style landing with hero imagery and clear CTAs. Built for Vercel hosting with a responsive, content-rich UI.",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=900&q=80",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Responsive UI",
      "REST APIs",
      "Auth flows",
    ],
    features: [
      "Home, posts, restaurant listings, and category-based exploration",
      "Search and filters to find cuisines and food spots quickly",
      "Ratings, reviews, and threaded comments on dishes and venues",
      "Premium tier with exclusive spots and upgrade prompts",
      "User authentication (login/sign up) and premium gating",
      "Multi-location context (e.g. Dublin, Cork) and pricing display",
      "FAQ, contact, and marketing sections (hero, “How it works”)",
      "Deployed on Vercel for fast global delivery",
    ],
    liveLink: "https://latest-food-display.vercel.app/",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    _id: "featured-ph-healthcare",
    title: "PH Health Care",
    description:
      "A healthcare front-end focused on preventive care and patient engagement. The site highlights consultations, health plans, medicine, and diagnostics, with a strong hero narrative and clear appointment/contact paths. It presents trust signals (awards, equipment, emergency care), a four-step journey from search to solution, doctor imagery, and statistics (e.g. doctors, services, patients). Layout is section-driven with navigation, footer links, and NGO/social touchpoints—suitable as a clinic or network landing experience.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=900&q=80",
    technologies: [
      "React",
      "TypeScript",
      "Responsive layout",
      "Vercel",
      "UI sections & routing",
    ],
    features: [
      "Primary navigation: Consultation, Health Plans, Medicine, Diagnostics, Contact",
      "Hero messaging and CTAs (appointments, contact)",
      "“Why us” / awards and service differentiators",
      "Four-step “How it works” flow (search doctor → profile → schedule → solution)",
      "Metrics strip (doctors, services, patients, awards)",
      "Doctor imagery and grid-style presentation",
      "Footer with policies, branding, and social links",
      "Optimized for marketing and trust on modern browsers",
    ],
    liveLink: "https://ph-healthcare-frontend-two.vercel.app/",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    _id: "featured-imagine-redux-story",
    title: "Imagine Redux Story",
    description:
      "A Vite-powered React and TypeScript project showcasing Redux-style state management in a modern SPA setup (as indicated by the stack: Vite + React + TS). Ideal for experimenting with predictable state updates, connected components, and a lean dev workflow with fast HMR. Deployed on Vercel for instant previews and sharing—useful as a reference or starter for Redux patterns alongside contemporary React tooling.",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=900&q=80",
    technologies: [
      "Vite",
      "React",
      "TypeScript",
      "Redux",
      "SPA",
      "Vercel",
    ],
    features: [
      "Vite dev server with fast refresh for rapid iteration",
      "React 18+ component model with TypeScript safety",
      "Centralized state patterns suitable for Redux Toolkit workflows",
      "Minimal, focused surface for demos and portfolio proof",
      "Production build pipeline compatible with Vercel static hosting",
      "Clean separation for extending with routing, tests, or Storybook later",
    ],
    liveLink: "https://imagine-redux-story.vercel.app/",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];
