export interface Project {
  id: string;
  title: string;
  category: string;
  summary: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl: string;
  highlight: string;
  stats: { label: string; value: string }[];
  featured?: boolean;
  visible?: boolean;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: { name: string; level: number; tag: string }[];
}

export const PERSONAL_INFO = {
  name: "Harshal Sandip Patil",
  shortName: "Harshal Patil",
  handle: "@harshal-patil-dev",
  title: "Java Full Stack Developer",
  subTitle: "BCA Graduate & Aspiring Software Engineer",
  email: "harsheditz79@gmail.com",
  phone: "+91 9322414106",
  location: "Amalner, Maharashtra, India",
  preferredLocations: ["Pune", "Mumbai", "Bengaluru", "Remote"],
  status: "Open for Full-time Software Engineering Roles",
  noticePeriod: "Available for Opportunities",
  github: "https://github.com/harshal-patil-dev",
  linkedin: "https://linkedin.com/in/harshal-patil-dev",
  bio: "Aspiring Java Full Stack Developer currently undergoing intensive corporate software training at Kiran Academy Pune after graduating BCA from Pratap College with a 7.56 CGPA. Strong command over Core & Advanced Java, Spring Boot, Spring MVC, Hibernate/JPA, REST APIs, MySQL, and modern React.js frontend development. Passionate about architecting scalable microservices, secure authentication, and seamless user experiences.",
  stats: [
    { label: "Projects Completed", value: "6+" },
    { label: "CGPA (BCA)", value: "7.56" },
    { label: "Certifications", value: "3+" },
    { label: "BCA Status", value: "Graduated" },
  ],
};

export const EDUCATION = [
  {
    institution: "Pratap College, Amalner (KBC NMU, Jalgaon)",
    degree: "Bachelor of Computer Applications (BCA)",
    period: "Completed (3-Year Degree)",
    score: "CGPA: 7.56 / 10",
    description: "Focus on Computer Science fundamentals, Software Engineering, Object-Oriented Programming, Database Management Systems, and Web Technologies.",
    badge: "BCA Graduate (7.56 CGPA)",
  },
  {
    institution: "Kiran Academy, Pune",
    degree: "Full Stack Java Development Training",
    period: "2024 - Present",
    score: "Intensive Professional Finishing School",
    description: "Hands-on industrial training in Core Java, Advanced Java, Spring Boot, Spring MVC, Hibernate/JPA, RESTful Web Services, Microservices design, and MySQL database integration.",
    badge: "Currently Enrolled (Pune)",
  },
];

export const CERTIFICATIONS = [
  {
    title: "Generative AI Certified",
    issuer: "Oracle",
    year: "2025",
    description: "Foundations and hands-on understanding of Large Language Models, prompt engineering, generative architectures, and AI API integrations.",
    badge: "Oracle Certified",
  },
  {
    title: "Course on Computer Concepts (CCC)",
    issuer: "NIELIT (Govt. of India)",
    year: "2025",
    description: "Comprehensive certification covering computer hardware, software fundamentals, networking, cybersecurity, and digital information systems.",
    badge: "Govt. Recognized",
  },
  {
    title: "GCC-TBC Typing Professional",
    issuer: "Maharashtra State Council of Examinations",
    year: "2024",
    description: "Certified professional typing speed and accuracy for rapid documentation, coding efficiency, and computer applications.",
    badge: "Certified Speed",
  },
];

export const PROJECTS: Project[] = [
  {
    id: "travely",
    title: "Travely – Travel Booking System",
    category: "Full Stack Web App",
    summary: "Production-ready tour and travel package booking platform with automated payments.",
    description: "Comprehensive travel management platform featuring customer authentication, JWT-protected private routes, tour catalog filtering, real-time availability checking, dynamic shopping cart, and Razorpay payment gateway integration for hassle-free online reservations.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Razorpay", "Tailwind CSS"],
    liveUrl: "https://travely-management-system-frontend.onrender.com/home",
    githubUrl: "https://github.com/harshal-patil-dev/Travely-Management-System.git",
    highlight: "Integrated Razorpay Payment Gateway & Private Routes",
    featured: true,
    stats: [
      { label: "Architecture", value: "MERN Stack" },
      { label: "Payment Gateway", value: "Razorpay" },
      { label: "Status", value: "Live on Cloud" },
    ],
  },
  {
    id: "syncwork",
    title: "SyncWork – Employee Management",
    category: "Enterprise Java System",
    summary: "Layered enterprise employee directory and payroll operations application.",
    description: "Developed an enterprise employee management system leveraging layered software architecture: Controller, Service, Repository, and Entity layers. Features robust CRUD operations, department-based multi-criteria search, session-based login, and Aspect-Oriented Programming (AOP) for cross-cutting security checks and auditing.",
    technologies: ["Java", "Spring Boot", "Spring MVC", "Hibernate / JPA", "MySQL", "JSP", "AOP"],
    githubUrl: "https://github.com/harshal-patil-dev/SyncWork-Employee-Management-System",
    highlight: "Layered Controller-Service-DAO + AOP Security",
    featured: true,
    stats: [
      { label: "Backend", value: "Spring Boot 3" },
      { label: "ORM", value: "Hibernate / JPA" },
      { label: "Database", value: "MySQL" },
    ],
  },
  {
    id: "ai-image-tools",
    title: "AI Image Tools Suite",
    category: "AI Web Platform",
    summary: "Web-based creative suite for image manipulation, enhancements, and AI processing.",
    description: "A fast, modern web application providing digital image manipulation and AI-assisted photo enhancements. Built with React and modern UI workflows, enabling users to transform graphics, apply computational filters, and process visuals with instant browser previews.",
    technologies: ["React.js", "JavaScript", "Tailwind CSS", "Canvas API", "Vite"],
    liveUrl: "https://ai-image-tools-by-harshal.onrender.com/",
    githubUrl: "https://github.com/harshal-patil-dev/AI-Image-Tools",
    highlight: "Instant Canvas Rendering & Generative AI Tools",
    featured: true,
    stats: [
      { label: "Frontend", value: "React + Vite" },
      { label: "Deployment", value: "Render Cloud" },
      { label: "Responsive", value: "100%" },
    ],
  },
  {
    id: "sales-dashboard",
    title: "Sales Analytics & KPI Dashboard",
    category: "Analytics Dashboard",
    summary: "Real-time revenue metrics, inventory statistics, and financial charts visualizer.",
    description: "Interactive administrative dashboard designed for sales managers to analyze weekly revenues, track customer transactions, monitor conversion percentages, and visualize inventory statuses with fluid interactive charts.",
    technologies: ["React.js", "Recharts", "Tailwind CSS", "REST API", "Lucide"],
    liveUrl: "https://travely-management-system-frontend.onrender.com/home", // demo link
    githubUrl: "https://github.com/harshal-patil-dev/sales-dashboard.git",
    highlight: "Real-time Chart Visualizations & Trend Analytics",
    featured: false,
    stats: [
      { label: "Visualizer", value: "Recharts" },
      { label: "Data Source", value: "REST APIs" },
      { label: "Theme", value: "Dark & Light" },
    ],
  },
  {
    id: "ultraedit-clone",
    title: "UltraEdit Website Clone",
    category: "Frontend Architecture",
    summary: "Pixel-perfect clone of the renowned UltraEdit text editor website.",
    description: "Faithful reproduction of UltraEdit's complex marketing website featuring navigation submenus, product comparison tables, responsive download triggers, and modern dark-mode aesthetic styling.",
    technologies: ["HTML5", "Tailwind CSS", "JavaScript ES6+", "Responsive Design"],
    liveUrl: "https://ultraedit-website-clone.onrender.com/",
    githubUrl: "https://github.com/harshal-patil-dev/Ultraedit-Website",
    highlight: "Pixel-Perfect Responsive Layout & Typography",
    featured: false,
    stats: [
      { label: "Layout", value: "Flexbox & Grid" },
      { label: "Performance", value: "98 Lighthouse" },
      { label: "Hosting", value: "Render" },
    ],
  },
  {
    id: "itzfizz-hero",
    title: "Itzfizz Interactive Hero Demo",
    category: "Interactive UI / Motion",
    summary: "High-energy brand landing hero with smooth 60fps animations and micro-interactions.",
    description: "Creative interactive marketing showcase experimenting with 3D text layers, smooth spring transitions, custom cursor behaviors, and high-impact visual physics to elevate brand engagement.",
    technologies: ["React.js", "Framer Motion", "Tailwind CSS", "UI Physics"],
    liveUrl: "https://itzfizz-hero-demo.onrender.com/",
    githubUrl: "https://github.com/harshal-patil-dev/itzfizz-hero-demo.git",
    highlight: "Physics-Based Animations & Kinetic Typography",
    featured: false,
    stats: [
      { label: "Animation Engine", value: "Framer Motion" },
      { label: "Frame Rate", value: "60 FPS" },
      { label: "Interaction", value: "Gesture Ready" },
    ],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Java & Backend Engineering",
    description: "Enterprise backend systems, layered architecture, and RESTful web services.",
    skills: [
      { name: "Java (Core & Adv)", level: 88, tag: "Primary" },
      { name: "Spring Boot 3", level: 85, tag: "Primary" },
      { name: "Spring MVC", level: 82, tag: "Framework" },
      { name: "Hibernate / JPA", level: 80, tag: "ORM" },
      { name: "RESTful APIs", level: 88, tag: "Web Services" },
      { name: "AOP & Security", level: 75, tag: "Architecture" },
    ],
  },
  {
    title: "Frontend & Full Stack",
    description: "Clean, responsive, interactive client applications with modern state flow.",
    skills: [
      { name: "React.js", level: 84, tag: "Frontend" },
      { name: "JavaScript (ES6+)", level: 86, tag: "Language" },
      { name: "HTML5 & CSS3", level: 90, tag: "Markup" },
      { name: "Tailwind CSS", level: 88, tag: "Styling" },
      { name: "Node.js & Express", level: 78, tag: "MERN" },
      { name: "Framer Motion", level: 80, tag: "Animation" },
    ],
  },
  {
    title: "Databases & Dev Tools",
    description: "Relational modeling, NoSQL document stores, and developer productivity tools.",
    skills: [
      { name: "MySQL / SQL", level: 85, tag: "Relational" },
      { name: "MongoDB", level: 80, tag: "NoSQL" },
      { name: "Git & GitHub", level: 88, tag: "VCS" },
      { name: "Postman", level: 85, tag: "API Testing" },
      { name: "Razorpay Gateway", level: 80, tag: "Payments" },
      { name: "Maven & VS Code", level: 84, tag: "Build Tools" },
    ],
  },
];

export const FAQ_ITEMS = [
  {
    question: "What types of engineering roles are you open to?",
    answer: "I am actively seeking Software Engineer, Java Full-Stack Developer, and Backend/Frontend engineering positions, as well as high-impact developer internships where I can build scalable production systems.",
  },
  {
    question: "Are you willing to relocate to major tech hubs or work remote?",
    answer: "Yes! I am open and ready to relocate to major tech centers across India—including Pune, Bengaluru, Mumbai, and Hyderabad—or contribute effectively in hybrid and remote setups.",
  },
  {
    question: "What are your core technical strengths and practical stack?",
    answer: "Java Full Stack Development. Backend: Core & Advanced Java, Spring Boot 3, Hibernate JPA, and secure REST APIs with MySQL. Frontend: Modern React 19, JavaScript ES6+, and Tailwind CSS, backed by full-scale projects like Travely (MERN + Razorpay) and SyncWork (Spring Boot).",
  },
  {
    question: "What is your educational background and professional training?",
    answer: "I am a BCA Graduate from Pratap College, Amalner (KBC NMU) with a 7.56 CGPA, and am currently undergoing rigorous, full-time enterprise Java Full-Stack training at The Kiran Academy, Pune.",
  },
];
