// Everything factual about the site lives here, so copy edits never require
// touching component markup. Anything marked TODO still needs Saad's input.

export const profile = {
  name: "Saad Qureshea",
  role: "Full-Stack Developer",
  location: "Islamabad, Pakistan",
  email: "saadqureshea123@gmail.com",
  github: "https://github.com/saadqureshea",
  linkedin: "https://www.linkedin.com/in/saadqureshea",
  headline: ["Full-stack builds,", "shipped end to end."],
  subhead:
    "CS student and developer from Islamabad. I build complete products — data model to deployment — with a bias toward the parts that are easy to get wrong: payments, permissions, and money math.",
};

// Deliberately factual: each of these is verifiable from the repos, not
// invented social proof.
export const heroStats = [
  { value: "3", label: "Projects shipped" },
  { value: "1", label: "Live in production" },
  { value: "5", label: "Roles modelled" },
  { value: "2", label: "Languages supported" },
];

export const about = {
  paragraphs: [
    "I'm a computer science student who learns by building things that have to actually work. Not tutorials — products with real payment flows, real permission boundaries, and real edge cases to get wrong.",
    "My current focus is KAITO MarketPlace, a full-stack marketplace where money changes hands. That constraint is the interesting part: prices get resolved server-side so the client can never set them, commission math lives in exactly one file, and every order freezes its own fee breakdown so historical records stay accurate even when rates change.",
    "Alongside the JavaScript work I'm deepening my fundamentals in C++, Python, and database systems — the layer underneath the frameworks.",
  ],
  facts: [
    { label: "Based in", value: "Islamabad, PK" },
    { label: "Focus", value: "Full-stack web" },
    { label: "Currently", value: "CS student" },
    { label: "Open to", value: "Internships" },
  ],
};

export const projects = [
  {
    slug: "kaito",
    name: "KAITO MarketPlace",
    tagline: "A marketplace where money actually moves.",
    year: "2026",
    featured: true,
    summary:
      "A full-stack digital marketplace and remote-work platform spanning four verticals — digital products, made-to-order goods, services, and job postings — with Stripe payments and a five-role permission system.",
    highlights: [
      {
        title: "Payments that don't trust the client",
        body: "Checkout resolves every price server-side before creating a Stripe session. The browser sends an item ID, never an amount — so a tampered request can't change what gets charged.",
      },
      {
        title: "One source of truth for commission",
        body: "A single module owns the 80/20 split: 15% marketplace fee plus a 5% processing allowance. Each order freezes its own breakdown at purchase time, so changing rates later never rewrites financial history.",
      },
      {
        title: "Five roles, five dashboards",
        body: "Buyer, seller, worker, employer, and admin each get their own dashboard and route guards. Listings and worker profiles sit in pending_review until an admin approves them — nothing reaches the public catalogue unreviewed.",
      },
      {
        title: "Tested where it hurts",
        body: "Unit coverage targets the two highest-risk paths rather than chasing a coverage number: the commission arithmetic and the role-guard middleware.",
      },
    ],
    extras: [
      "Reviews & ratings tied to completed orders",
      "Seller payout release with graceful failure handling",
      "Employer ↔ worker messaging threads",
      "English/Urdu UI with full RTL support",
    ],
    stack: [
      "React 18",
      "Vite",
      "Tailwind",
      "Node.js",
      "Express",
      "MongoDB",
      "Stripe",
      "JWT",
    ],
    links: {
      live: "https://idyllic-lamington-6ac121.netlify.app/",
      code: "https://github.com/saadqureshea/kaito-marketplace",
    },
  },
  {
    slug: "skillswap",
    name: "SkillSwap",
    tagline: "Students trading skills instead of cash.",
    year: "2025",
    featured: true,
    summary:
      "A React Native prototype where students list a skill they can teach and book sessions with peers who have one they need. Built around the idea that a campus is already full of expertise that never gets traded.",
    highlights: [
      {
        title: "Discover and offer",
        body: "Browse skills on offer across campus, or publish your own with availability attached.",
      },
      {
        title: "Session booking",
        body: "Booking flow that pairs two students around a specific skill and time, with offers tracked against each profile.",
      },
    ],
    extras: [],
    stack: ["React Native", "Expo", "JavaScript"],
    links: {
      code: "https://github.com/saadqureshea/skillswap-mvp",
    },
  },
  {
    slug: "process-sync",
    name: "Process Sync Visualizer",
    tagline: "Watching concurrency problems happen.",
    year: "2026",
    featured: false,
    summary:
      "An interactive visualizer for operating-system process synchronisation — the classic race conditions and scheduling problems rendered as something you can watch step through, rather than trace on paper.",
    highlights: [],
    extras: [],
    stack: ["JavaScript", "HTML", "CSS"],
    links: {
      code: "https://github.com/saadqureshea/process-sync-visualizer-",
    },
  },
];

export const skills = [
  {
    group: "Languages",
    items: ["JavaScript", "C++", "Python", "HTML", "CSS", "SQL"],
  },
  {
    group: "Frontend",
    items: ["React", "React Native", "Next.js", "Vite", "Tailwind CSS"],
  },
  {
    group: "Backend",
    items: ["Node.js", "Express", "MongoDB", "REST APIs", "JWT auth"],
  },
  {
    group: "Tools & Platforms",
    items: ["Git", "GitHub", "Stripe", "Netlify", "Expo", "Postman"],
  },
];

export const education = [
  {
    institution: "Abasyn University, Islamabad",
    credential: "BS Computer Science",
    period: "2023 — 2028 (expected)",
    detail:
      "Coursework across operating systems, database systems, data structures, and object-oriented programming.",
  },
];

export const nav = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];
