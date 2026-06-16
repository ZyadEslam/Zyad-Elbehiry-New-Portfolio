// ─── Types ────────────────────────────────────────────────────────────────────

export interface Profile {
  name: string;
  initials: string;
  title: string;
  handle: string;
  location: string;
  email: string;
  phone: string;
  github: string;
  githubLabel: string;
  linkedin: string;
  linkedinLabel: string;
  summary: string;
}

export interface NavItem {
  id: string;
  href: string;
  label: string;
  icon: string;
}

export interface Highlight {
  icon: string;
  value: string;
  label: string;
  detail: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  bullets: string[];
}

export interface Project {
  name: string;
  role: string;
  period: string;
  icon: string;
  visualClass: string;
  thumbnail?: string;
  github?: string;
  link?: string;
  description: string;
  tech: string[];
  metrics: string[];
}

export interface SkillSignal {
  name: string;
  val: string;
}

export interface SkillGroup {
  title: string;
  icon: string;
  items: string[];
}

export interface Education {
  degree: string;
  school: string;
  department: string;
  period: string;
  location: string;
}

export interface Course {
  name: string;
  provider: string;
}

export interface Language {
  name: string;
  level: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

export const profile: Profile = {
  name: "Zyad Elbehiry",
  initials: "ZH",
  title: "Fullstack Developer",
  handle: "@zyadelbehiry",
  location: "Cairo, Egypt",
  email: "zyadelbehiry@gmail.com",
  phone: "+20 114 409 4269",
  github: "https://github.com/ZyadEslam",
  githubLabel: "github.com/zyadelbehiry",
  linkedin: "https://linkedin.com/in/zyad-elbehiry",
  linkedinLabel: "linkedin.com/in/zyad-elbehiry",
  summary:
    "Full-Stack Developer ready to turn your ideas into fast, scalable, and production-ready web applications. Skilled in Next.js, React, TypeScript, MongoDB, APIs, payment integrations, and modern UI development with experience building complete bilingual e-commerce platforms from concept to deployment.",
};

export const navItems: NavItem[] = [
  {
    id: "projects",
    href: "#projects",
    label: "Projects",
    icon: "deployed_code",
  },
  {
    id: "experience",
    href: "#experience",
    label: "Experience",
    icon: "work_history",
  },
];

export const highlights: Highlight[] = [
  {
    icon: "deployed_code",
    value: "2+",
    label: "Production Platforms",
    detail: "E-commerce, payments, dashboards",
  },
  {
    icon: "language",
    value: "EN / AR",
    label: "Bilingual UX",
    detail: "RTL/LTR-ready interfaces",
  },
  {
    icon: "school",
    value: "2024+",
    label: "Instructor",
    detail: "Web development mentorship",
  },
  {
    icon: "payments",
    value: "Paymob",
    label: "Payments",
    detail: "Secure checkout integration",
  },
];

export const experiences: Experience[] = [
  {
    role: "Web Development & Programming Instructor",
    company: "Discovery Academy for Science and Technology",
    period: "Jun 2024 - Present",
    location: "Cairo, Egypt",
    type: "Education / Mentorship",
    bullets: [
      "Teach HTML, CSS, JavaScript, Python, and OOP fundamentals to students across diverse skill levels.",
      "Designed a project-based curriculum to increase hands-on practice and improve student engagement.",
      "Mentor students in problem solving, debugging strategies, and modern web development best practices.",
    ],
  },
  {
    role: "Fullstack Developer - Freelance",
    company: "PowerPoint World",
    period: "Dec 2025 - Feb 2026",
    location: "Cairo, Egypt",
    type: "Production E-commerce",
    bullets: [
      "Built and shipped a production-ready e-commerce platform for PowerPoint templates from concept to deployment.",
      "Architected a Next.js 15 App Router storefront with React 19 and TypeScript using SSR and SSG for SEO and performance.",
      "Integrated Paymob payment gateway with secure checkout, order tracking, and confirmation flow.",
      "Developed a full admin dashboard for product management, orders, and inventory control.",
      "Implemented bilingual English/Arabic support with RTL layout handling and MongoDB schemas using Mongoose.",
    ],
  },
  {
    role: "Fullstack Developer - Freelance",
    company: "Espesyal Fashion",
    period: "Oct 2025 - Dec 2025",
    location: "Cairo, Egypt",
    type: "Fashion E-commerce",
    bullets: [
      "Delivered a bilingual women's fashion e-commerce platform end-to-end.",
      "Built a responsive storefront using Next.js 15, TypeScript, and Tailwind CSS with mobile-first design.",
      "Integrated Paymob payments and NextAuth authentication with session management.",
      "Created real-time order tracking and an admin dashboard for products, inventory, and shipping.",
      "Modeled users, products, orders, and shipping records with MongoDB and Mongoose.",
    ],
  },
];

export const projects: Project[] = [
  {
    name: "PowerPoint World",
    role: "Fullstack Developer",
    period: "Dec 2025 - Feb 2026",
    icon: "https://res.cloudinary.com/darxwbvff/image/upload/v1779096335/originalLogo-no-bg_iqv0s2.png",
    visualClass: "project-visual-lime",
    thumbnail:
      "https://res.cloudinary.com/darxwbvff/image/upload/v1779015916/ChatGPT_Image_May_14_2026_05_01_24_PM_pbhp0g.png",
    link: "https://powerpointworld.com",
    description:
      "Production-ready e-commerce platform for PowerPoint templates with payments, order tracking, bilingual support, and admin capabilities.",
    tech: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "MongoDB",
      "Mongoose",
      "Paymob",
      "SSR",
      "SSG",
    ],
    metrics: ["Payment Integration", "Admin Dashboard", "EN/AR + RTL"],
  },
  {
    name: "Espesyal Fashion",
    role: "Fullstack Developer",
    period: "Oct 2025 - Dec 2025",
    icon: "https://res.cloudinary.com/darxwbvff/image/upload/v1779096305/%D9%85%D8%AA%D9%81%D8%B1%D8%BA_2_%D8%AA%D8%B9%D8%AF%D9%8A%D9%84_p4lzks.png",
    visualClass: "project-visual-cyan",
    thumbnail:
      "https://res.cloudinary.com/darxwbvff/image/upload/v1779015915/ChatGPT_Image_May_16_2026_01_17_42_PM_jydh6j.png",
    github: "https://github.com/ZyadEslam/Espesyal-fashion",
    link: "https://espesyal-fashion.vercel.app",
    description:
      "Bilingual women's fashion e-commerce platform including authentication, secure checkout, admin dashboard, and real-time order management.",
    tech: [
      "Next.js 15",
      "TypeScript",
      "Tailwind CSS",
      "NextAuth",
      "MongoDB",
      "Paymob",
    ],
    metrics: ["Mobile-first UI", "Order Tracking", "Inventory Control"],
  },
  {
    name: "Military LAN Workforce Management System",
    role: "Fullstack Developer",
    period: "Mar 2026 - Apr 2026",
    icon: "https://res.cloudinary.com/darxwbvff/image/upload/v1781616302/ChatGPT_Image_Jun_16_2026_04_24_47_PM_ii205m.png",
    visualClass: "project-visual-purple",
    thumbnail:
      "https://res.cloudinary.com/darxwbvff/image/upload/v1781615314/ChatGPT_Image_Jun_16_2026_04_04_56_PM_tvzaja.png",
    github:
      "https://github.com/ZyadEslam/Military-LAN-Workforce-Management-System",
    link: "",
    description:
      "A full-stack web application built for military unit administrators to track daily personnel readiness, manage leave requests, and generate printable reports — all running on a closed LAN without internet dependency. The system supports two roles: Admin (officers) with full CRUD, analytics, and approval workflows, and Soldiers who submit and track their own leave requests. Real-time updates via WebSockets keep the dashboard and request queue in sync across devices on the network. Designed with an Arabic RTL interface, operational UX patterns (filters, status pills, metric cards), and a tactical visual theme suited for day-to-day unit management.",
    tech: [
      "Node.js",
      "Express",
      "Socket.io",
      "JWT",
      "bcrypt",
      "Vanilla JavaScript",
      "Chart.js",
      "JSON file storage",
    ],
    metrics: [
      "JWT authentication",
      "Real-time dashboard analytics",
      "Socket.io",
    ],
  },
  {
    name: "Graphic Designer's Portfolio",
    role: "Frontend Developer",
    period: "Mar 2025 - Apr 2025",
    icon: "https://res.cloudinary.com/darxwbvff/image/upload/v1779096422/khaled_bussiness_card-07_kh6qdr.png",
    visualClass: "project-visual-purple",
    thumbnail:
      "https://res.cloudinary.com/darxwbvff/image/upload/v1779017089/Thumbnail_mwm53f.png",
    github: "https://github.com/ZyadEslam/Khaled-Tantawy-s-Portfolio",
    link: "https://khaled-tantawy-s-portfolio.vercel.app",
    description:
      "Responsive personal portfolio with smooth scroll animations, mobile-first layout, optimized Lighthouse performance, and pixel-perfect UI.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    metrics: ["Responsive Design", "Animations", "Performance Focus"],
  },
  {
    name: "Biblomania System — Store Operations Dashboard",
    role: "Full-stack developer",
    period: "Oct 2024 - Dec 2024",
    icon: "https://res.cloudinary.com/darxwbvff/image/upload/v1781622476/print_card_header_k63d9l.png",
    visualClass: "project-visual-purple",
    thumbnail:
      "https://res.cloudinary.com/darxwbvff/image/upload/v1781622417/ChatGPT_Image_Jun_16_2026_06_06_36_PM_dtuyla.png",
    github: "https://github.com/ZyadEslam/Biblomania-Store",
    link: "",
    description:
      "Biblomania System is an internal web application for managing day-to-day bookstore operations: customer orders, multi-item book entries, shipping status, and expense tracking. It was designed for Arabic-speaking staff with an RTL-first UI and a visual language aligned with the Biblomania brand.",
    tech: [
      "Next.js 15 ",
      " React 19 ",
      "MongoDB ",
      "Mongoose ",
      "Tailwind CSS",
      "REST API",
      "Arabic RTL",
    ],
    metrics: [
      "Order management",
      "Expense trackin",
      "Live dashboard",
      "Search & pagination",
      "Responsive layout ",
    ],
  },
];

export const skillSignals: SkillSignal[] = [
  { name: "Next.js / React", val: "94%" },
  { name: "TypeScript / JavaScript", val: "91%" },
  { name: "MongoDB / Mongoose", val: "88%" },
  { name: "Tailwind / Responsive UI", val: "93%" },
  { name: "Teaching / Mentorship", val: "90%" },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    icon: "view_quilt",
    items: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Framer Motion",
      "Redux",
      "Zustand",
      "HTML",
      "CSS",
      "Responsive Design",
      "RESTful APIs",
    ],
  },
  {
    title: "Backend",
    icon: "dns",
    items: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "PostgreSQL",
      "MySQL",
      "Prisma ORM",
      "NextAuth",
      "Passport.js",
      "CI/CD",
      "Java",
    ],
  },
  {
    title: "Concepts",
    icon: "psychology",
    items: [
      "System Design",
      "Data Structures",
      "Algorithms",
      "OOP",
      "Design Patterns",
      "Performance Optimization",
      "Agile/Scrum",
      "Unit Testing",
      "Debugging",
    ],
  },
  {
    title: "Tools & Soft Skills",
    icon: "construction",
    items: [
      "Git",
      "GitHub",
      "Creative Problem Solving",
      "Leadership",
      "Mentorship",
      "Communication",
      "Time Management",
      "Attention to Detail",
      "Self-Management",
    ],
  },
];

export const education: Education = {
  degree: "Bachelor - Computer Science",
  school: "Faculty of Computer and Information Science, Ain Shams University",
  department: "Computer Science Department",
  period: "Sep 2020 - Jul 2024",
  location: "Cairo, Egypt",
};

export const courses: Course[] = [
  {
    name: "Certified in MERN Stack Development",
    provider: "DEPI Institution",
  },
  {
    name: "React - The Complete Guide, including React.js, Next.js, Redux",
    provider: "Udemy - Maximilian Schwarzmüller",
  },
];

export const languages: Language[] = [
  { name: "Arabic", level: "Native" },
  { name: "English", level: "Proficient" },
];
