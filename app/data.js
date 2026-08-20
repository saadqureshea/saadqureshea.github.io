// Everything factual about the site lives here, so copy edits never require
// touching component markup. Anything marked TODO still needs Saad's input.

export const profile = {
  // Display name is the real one; `saadqureshea` is only the GitHub handle,
  // taken because the preferred username wasn't available.
  name: "Saad Qureshi",
  nameParts: { bold: "Saad", light: "qureshi" },
  handle: "saadqureshea",
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
  { value: "4", label: "Projects shipped" },
  { value: "1", label: "Client site live" },
  { value: "5", label: "Roles modelled" },
  { value: "2", label: "Languages supported" },
];

export const about = {
  paragraphs: [
    "I'm a computer science student who learns by building things that have to actually work. Not tutorials — products with real payment flows, real permission boundaries, and real customers on the other end.",
    "Some of that is client work: PureCheck Screening is a live business in the New Orleans metro whose website I built and shipped. Real deadlines, real stakes, someone else's revenue depending on the booking flow not breaking.",
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
    slug: "purecheck",
    name: "PureCheck Screening",
    tagline: "A live business running on software I built.",
    year: "2026",
    featured: true,
    kind: "Client work",
    summary:
      "A production website for a drug, DNA, and background screening company serving the New Orleans metro area — the booking funnel, service catalogue, and employer pages that the business actually runs on.",
    highlights: [
      {
        title: "Booking as the primary path",
        body: "The whole site funnels toward one action. Appointment setup is pared down to roughly two minutes, with the booking entry point repeated at every scroll depth rather than buried on a contact page.",
      },
      {
        title: "Three service lines, one structure",
        body: "Drug and alcohol testing, DNA testing, and background checks each carry different options and compliance language, but share a single page template — so adding a service doesn't mean rebuilding a page.",
      },
      {
        title: "Two audiences, one site",
        body: "Individuals and employers want different things, so employers get a dedicated track for workplace screening programmes instead of being funnelled through consumer copy.",
      },
      {
        title: "Reachable the way clients actually reach out",
        body: "WhatsApp, phone, an email form, and online booking sit side by side, because a walk-in customer and an HR manager don't use the same channel.",
      },
    ],
    extras: [
      "Multi-page: Home, Services, Employers, About, FAQ, Contact",
      "Flexible collection: on-site, mobile, or at the workplace",
      "Chain-of-custody and HIPAA-aware privacy copy",
      "Service-area and opening-hours handling",
    ],
    stack: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    links: {
      live: "https://www.purecheckscreening.com/",
    },
  },
  {
    slug: "kaito",
    name: "KAITO MarketPlace",
    tagline: "A marketplace where money actually moves.",
    year: "2026",
    featured: true,
    kind: "Personal project",
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
    kind: "Personal project",
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
    kind: "Coursework",
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

export const footer = {
  monogram: "SQ",
  tagline: "Let's build something that works.",
  availability: "Open to internships · Islamabad, PK",
  columns: [
    {
      heading: "Menu",
      links: [
        { label: "Home", href: "#top" },
        { label: "About", href: "#about" },
        { label: "Work", href: "#work" },
        { label: "Skills", href: "#skills" },
      ],
    },
    {
      heading: "Projects",
      links: [
        {
          label: "PureCheck Screening",
          href: "https://www.purecheckscreening.com/",
          external: true,
        },
        {
          label: "KAITO — live",
          href: "https://idyllic-lamington-6ac121.netlify.app/",
          external: true,
        },
        {
          label: "KAITO — source",
          href: "https://github.com/saadqureshea/kaito-marketplace",
          external: true,
        },
        {
          label: "SkillSwap",
          href: "https://github.com/saadqureshea/skillswap-mvp",
          external: true,
        },
        {
          label: "Process Sync",
          href: "https://github.com/saadqureshea/process-sync-visualizer-",
          external: true,
        },
      ],
    },
    {
      heading: "Socials",
      links: [
        {
          label: "GitHub",
          href: "https://github.com/saadqureshea",
          external: true,
        },
        {
          label: "LinkedIn",
          href: "https://www.linkedin.com/in/saadqureshea",
          external: true,
        },
        { label: "Email", href: "mailto:saadqureshea123@gmail.com" },
      ],
    },
  ],
};
