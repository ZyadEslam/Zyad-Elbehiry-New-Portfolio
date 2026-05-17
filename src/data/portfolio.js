export const profile = {
  name: "Zyad Elbehiry",
  initials: "ZH",
  title: "Fullstack Developer",
  handle: "@zyadelbehiry",
  location: "Cairo, Egypt",
  email: "zyadelbehiry@gmail.com",
  phone: "+20 114 409 4269",
  github: "https://github.com/zyadelbehiry",
  githubLabel: "github.com/zyadelbehiry",
  linkedin: "https://linkedin.com/in/zyad-elbehiry",
  linkedinLabel: "linkedin.com/in/zyad-elbehiry",
  summary:
    "Full-Stack Developer ready to turn your ideas into fast, scalable, and production-ready web applications. Skilled in Next.js, React, TypeScript, MongoDB, APIs, payment integrations, and modern UI development with experience building complete bilingual e-commerce platforms from concept to deployment.",
};

export const navItems = [
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

export const highlights = [
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

export const experiences = [
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
      "Delivered a bilingual womenâ€™s fashion e-commerce platform end-to-end.",
      "Built a responsive storefront using Next.js 15, TypeScript, and Tailwind CSS with mobile-first design.",
      "Integrated Paymob payments and NextAuth authentication with session management.",
      "Created real-time order tracking and an admin dashboard for products, inventory, and shipping.",
      "Modeled users, products, orders, and shipping records with MongoDB and Mongoose.",
    ],
  },
];

export const projects = [
  {
    name: "PowerPoint World",
    role: "Fullstack Developer",
    period: "Dec 2025 - Feb 2026",
    icon: "shopping_cart",
    visualClass: "project-visual-lime",
    thumbnail: "https://res.cloudinary.com/darxwbvff/image/upload/v1779015916/ChatGPT_Image_May_14_2026_05_01_24_PM_pbhp0g.png",
    // github: "https://github.com/zyadelbehiry",
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
    icon: "checkroom",
    visualClass: "project-visual-cyan",
    thumbnail:
      "https://res.cloudinary.com/darxwbvff/image/upload/v1779015915/ChatGPT_Image_May_16_2026_01_17_42_PM_jydh6j.png",
    github: "https://github.com/zyadelbehiry",
    link: "https://espesyal-fashion.vercel.app",
    description:
      "Bilingual womenâ€™s fashion e-commerce platform including authentication, secure checkout, admin dashboard, and real-time order management.",
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
    name: "Graphic Designer's Portfolio",
    role: "Frontend Developer",
    period: "Mar 2025 - Apr 2025",
    icon: "palette",
    visualClass: "project-visual-purple",
    thumbnail:
      "https://res.cloudinary.com/darxwbvff/image/upload/v1779017089/Thumbnail_mwm53f.png",
    github: "https://github.com/zyadelbehiry",
    link: "https://designerportfolio.example.com",
    description:
      "Responsive personal portfolio with smooth scroll animations, mobile-first layout, optimized Lighthouse performance, and pixel-perfect UI.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    metrics: ["Responsive Design", "Animations", "Performance Focus"],
  },
];

export const skillSignals = [
  {
    name: "Next.js / React",
    val: "94%",
  },
  {
    name: "TypeScript / JavaScript",
    val: "91%",
  },
  {
    name: "MongoDB / Mongoose",
    val: "88%",
  },
  {
    name: "Tailwind / Responsive UI",
    val: "93%",
  },
  {
    name: "Teaching / Mentorship",
    val: "90%",
  },
];

export const skillGroups = [
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

export const education = {
  degree: "Bachelor - Computer Science",
  school: "Faculty of Computer and Information Science, Ain Shams University",
  department: "Computer Science Department",
  period: "Sep 2020 - Jul 2024",
  location: "Cairo, Egypt",
};

export const courses = [
  {
    name: "Certified in MERN Stack Development",
    provider: "DEPI Institution",
  },
  {
    name: "React - The Complete Guide, including React.js, Next.js, Redux",
    provider: "Udemy - Maximilian SchwarzmÃ¼ller",
  },
];

export const languages = [
  {
    name: "Arabic",
    level: "Native",
  },
  {
    name: "English",
    level: "Proficient",
  },
];
