export const portfolioData = {
  personal: {
    name: "Foluso B. Onatemowo",
    role: "Full-Stack Engineering Intern & ML Research Intern",
    tagline: "Building secure, data-driven systems and real-time products.",
    bio: "Computer Science B.S. candidate at Fisk University (May 2027) and Google Tech Exchange Scholar. Google Associate Software Developer Intern on Firebase Data Connect; ML research on smart-grid DDoS detection. I build full-stack products with a bias for reliability and performance.",
    email: "folutek@gmail.com",
    github: "https://github.com/folutek",
    linkedin: "https://linkedin.com/in/foluso-onatemowo",
    resume: "/resume.pdf",
    location: "Nashville, TN",
  },
  focusAreas: [
    "Backend + data systems",
    "ML security research",
    "Real-time mobile apps",
  ],
  summaryPoints: [
    "Google Associate Software Developer Intern (Firebase Data Connect)",
    "ML research intern in smart-grid cybersecurity",
    "B.S. Computer Science, Fisk University (May 2027)",
    "Google Tech Exchange Scholar",
    "Built mobile + web apps with payments, maps, and data pipelines",
  ],
  now: [
    { label: "Based in", value: "Nashville, TN" },
    { label: "Building", value: "Full-stack products with real-time data" },
    { label: "Exploring", value: "ML security + scalable backend systems" },
  ],
  education: [
    {
      school: "Fisk University",
      program: "B.S. Computer Science (Expected May 2027)",
    },
  ],
  coursework: [
    "Data Structures & Algorithms",
    "Object-Oriented Programming",
    "Calculus I-II",
    "Discrete Math",
  ],
  recognition: ["Google Tech Exchange Scholar", "CodePath Community Member"],
  metrics: [
    { value: "100k+", label: "Smart-grid endpoints analyzed" },
    { value: "30+", label: "Tests added to Firebase Admin SDK" },
    { value: "25%", label: "Boilerplate reduction shipped" },
    { value: "40%", label: "Faster DDoS response time" },
  ],
  principles: [
    {
      title: "Clarity over complexity",
      text: "Make systems easy to reason about so teams can ship faster and safer.",
    },
    {
      title: "Momentum with rigor",
      text: "Prototype quickly, validate assumptions, then harden what matters.",
    },
    {
      title: "Human-centered performance",
      text: "Speed, accessibility, and UX polish are part of the product, not extras.",
    },
  ],
  timeline: [
    {
      title: "Fisk University",
      subtitle: "B.S. Computer Science - Expected May 2027",
      detail: "Core CS foundations with focus on systems, algorithms, and applied math.",
    },
    {
      title: "Machine Learning Research Intern",
      subtitle: "Fisk University - May 2024 to Jul 2024",
      detail: "Built CNN + GRU hybrid model for smart-grid DDoS detection.",
    },
    {
      title: "Google Tech Exchange Scholar",
      subtitle: "Jan 2025 to Apr 2025",
      detail: "Algorithms + data structures curriculum; ML-powered workout app project.",
    },
    {
      title: "Associate Software Developer Intern",
      subtitle: "Google - Firebase Data Connect - May 2025 to Aug 2025",
      detail: "GraphQL support, tenant features, and 30+ tests for Admin SDK.",
    },
  ],
  experience: [
    {
      title: "Associate Software Developer Intern",
      org: "Google - Firebase Data Connect",
      time: "May 2025 - Aug 2025",
      highlights: [
        "Implemented GraphQL query/mutation support in the Firebase Admin Node.js SDK.",
        "Refactored initialization logic and tenant features to reduce boilerplate by ~25%.",
        "Authored 30+ Mocha/Chai tests with >90% coverage using the Firebase Emulator Suite.",
      ],
    },
    {
      title: "Machine Learning Research Intern",
      org: "Fisk University",
      time: "May 2024 - Jul 2024",
      highlights: [
        "Built CNN + GRU hybrid model for smart-grid DDoS detection across 100,000+ endpoints.",
        "Improved detection performance by 25% and reduced training time by 30%.",
        "Created visualizations that informed 5 high-priority security initiatives.",
      ],
    },
  ],
  leadership: [
    {
      title: "Community Member",
      org: "CodePath",
      time: "May 2024 - Present",
      highlights: [
        "Collaborated on technical assessments with a 95% success rate.",
        "Improved code efficiency by 30% through applied projects.",
      ],
    },
    {
      title: "Active Member",
      org: "Fisk University Google Developer Club",
      time: "Sep 2023 - Present",
      highlights: [
        "Collaborated in teams of 3-8 on planning, coding, and testing.",
      ],
    },
  ],
  approach: [
    {
      title: "Frame the problem",
      text: "Translate goals into constraints, risks, and success criteria before writing code.",
    },
    {
      title: "Build the system",
      text: "Ship clean, testable full-stack features with pragmatic architecture choices.",
    },
    {
      title: "Refine and scale",
      text: "Measure performance, polish UX, and iterate based on real-world feedback.",
    },
  ],
  skills: [
    {
      category: "Languages",
      items: ["TypeScript", "JavaScript", "Python", "Java", "C++", "SQL"],
    },
    {
      category: "Frameworks",
      items: ["React", "Next.js", "Node.js", "React Native", "Express", "Tailwind CSS", "Firebase"],
    },
    {
      category: "Data + ML",
      items: ["PostgreSQL", "MongoDB", "Redis", "PyTorch", "Pandas", "NumPy"],
    },
    {
      category: "APIs",
      items: ["Stripe", "Plaid", "GraphQL", "Vertex AI"],
    },
  ],
  projects: [
    {
      slug: "firebase-admin-sdk",
      title: "Firebase Admin SDK (GraphQL)",
      summary: "Expanded GraphQL support and tenant features for backend developers.",
      tech: ["TypeScript", "Node.js", "GraphQL", "Firebase Emulator", "Mocha/Chai"],
      link: "https://github.com/firebase/firebase-admin-node",
      caseStudy: {
        context: "Firebase Data Connect needed GraphQL parity between client and admin SDKs.",
        challenge: "Add GraphQL features while keeping Admin SDK onboarding simple.",
        process: "Refactored initialization logic, integrated tenant support, and added 30+ tests.",
        solution: "Shipped GraphQL query/mutation support and aligned Admin SDK behavior.",
        outcome: "Reduced boilerplate by ~25% and delivered >90% test coverage.",
      },
    },
    {
      slug: "uber-clone",
      title: "Uber Clone (Mobile)",
      summary: "Multi-screen rideshare experience with live maps, payments, and auth.",
      tech: ["React Native", "Expo", "TypeScript", "Zustand", "Stripe", "PostgreSQL"],
      link: "https://github.com/folutek/uber-clone",
      caseStudy: {
        context: "Demonstrate real-time, cross-platform mobile delivery end to end.",
        challenge: "Combine geolocation, payments, and auth without degrading UX.",
        process: "Built navigation flow, Zustand state, Stripe checkout, and JWT auth.",
        solution: "Shipped rideshare flows with live tracking and reliable payments.",
        outcome: "Improved load speed and ensured consistent UI across iOS/Android.",
      },
    },
    {
      slug: "smart-grid-ddos",
      title: "Smart Grid DDoS Detection",
      summary: "Hybrid CNN + GRU model to detect attacks across smart-grid networks.",
      tech: ["Python", "PyTorch", "NumPy", "Pandas", "Matplotlib"],
      link: "https://github.com/folutek",
      caseStudy: {
        context: "Smart-grid operators needed faster DDoS detection from large datasets.",
        challenge: "Improve detection accuracy without slowing training or inference.",
        process: "Built CNN + GRU hybrid model, cleaned CICIDS2017 data, and tuned training.",
        solution: "Delivered a hybrid model with stronger recall on real-world traffic.",
        outcome: "Improved response time by 40% and accuracy by 25% over baselines.",
      },
    },
    {
      slug: "fintech-dashboard",
      title: "Fintech Banking Dashboard",
      summary: "Hackathon banking app with live transactions and multi-bank visibility.",
      tech: ["Next.js", "Tailwind CSS", "Plaid", "PostgreSQL", "Sentry"],
      link: "https://github.com/folutek",
      caseStudy: {
        context: "Provide a secure, real-time view of multi-bank transactions.",
        challenge: "Sync accounts while keeping performance and security tight.",
        process: "Integrated Plaid, built SSR dashboards, and added Sentry monitoring.",
        solution: "Delivered a responsive finance dashboard with real-time insights.",
        outcome: "Enabled live tracking and improved reliability through monitoring.",
      },
    },
  ],
};
