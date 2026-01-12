import { Code, Database, Cloud, TerminalSquare, LayoutPanelLeft, Users, Cpu } from "lucide-react";

export const personalInfo = {
  name: "Khushi",
  title: "Aspiring Software Engineer | Full Stack Developer",
  tagline: "Passionate about building scalable apps, curious to explore new tech, and driven by problem-solving.",
  keywords: [
    "Full Stack Developer",
    "DSA Enthusiast",
    "Fast Learner",
    "Curious Explorer",
    "Problem Solver",
  ],
  social: {
    github: "https://github.com/Khushi-Kamboj",
    linkedin: "https://linkedin.com/in/khushikamboj5",
    email: "khushikamboj123456@gmail.com",
    phone: "+91 9306605503",
  },
};

export const skills = [
  {
    category: "Programming",
    icon: Code,
    items: ["Java", "C++", "Python", "JavaScript"],
  },
  {
    category: "Frontend",
    icon: LayoutPanelLeft,
    items: ["HTML", "CSS", "Tailwind CSS", "React.js", "Bootstrap"],
  },
  {
    category: "Backend",
    icon: Cpu,
    items: ["Node.js", "Express.js", "REST APIs", "JWT"],
  },
  {
    category: "Database",
    icon: Database,
    items: ["MongoDB", "MySQL"],
  },
  {
    category: "Tools",
    icon: TerminalSquare,
    items: ["Git", "GitHub", "Postman", "Docker (Basics)"],
  },
  {
    category: "Cloud",
    icon: Cloud,
    items: ["AWS (EC2, S3 Basics)"],
  },
  {
    category: "Soft Skills",
    icon: Users,
    items: ["Teamwork", "Analytical Thinking", "Adaptability", "Problem Solving"],
  },
];

export const achievements = [
  {
    text: "Solved 200+ DSA problems on LeetCode and HackerRank.",
    highlight: true,
  },
  {
    text: "Built multiple personal projects showcasing full stack expertise.",
    highlight: false,
  },
];

export const projects = [
  {
    title: "StudyGenius – AI-Powered Revision Prep Tool",
    status: "Live",
    description: "Developed a full-stack web application using React, Firebase, Cloud Functions, and Gemini API, which allows users to upload notes, extract text using OCR, generate AI-based summaries, and track revisions through a smart calendar system.",
    techStack: ["React.js", "Express.js", "MongoDB", "Firebase Auth", "Google OAuth", "Stripe", "Razorpay", "Voice Navigation"],
    liveLink: "https://studygeniusaikhushi.netlify.app/",
    githubLink: "https://github.com/Khushi-Kamboj/StudyGeniusAI",
  },
  {
    title: "Zo-moto – AI-Powered Food Ordering Platform",
    status: "Live",
    description: "A real-time food ordering application with an integrated chatbot for support. Features RESTful APIs, a MongoDB backend, and AI-powered interpretation of user queries.",
    techStack: ["React.js", "Node.js", "MongoDB", "REST APIs", "Chatbot", "AI"],
    liveLink: "https://zomotokhushi.netlify.app/",
    githubLink: "https://github.com/Khushi-Kamboj/Zo-moto",
  },
  {
    title: "User Authentication using QR Code & OTP",
    status: "Completed",
    description: "A secure multi-factor authentication system that leverages QR code scanning for device verification and Twilio for sending one-time passwords (OTP) to enhance user security.",
    techStack: ["Node.js", "Express.js", "Twilio API", "QR Code", "JavaScript"],
    liveLink: null,
    githubLink: "https://github.com/Khushi-Kamboj",
  },
];

export const education = [
  {
    degree: "B.E. Computer Science",
    institution: "Chandigarh University",
    period: "2022 – 2026",
    result: "CGPA: 8.5",
    learnings: [
      "Team Collaboration",
      "Leadership & Communication",
      "Problem Solving with Data Structures & Algorithms",
      "Full Stack Development (React, Node.js, MongoDB)",
      "Adaptability and Growth Mindset",
    ],
    description: null,
  },
  {
    degree: "12th Science",
    institution: "Indian Public Senior Secondary School, Radaur",
    period: "2022",
    result: "Percentage: 88.4%",
    learnings: null,
    description: "Built strong fundamentals in Science and Analytical Thinking.",
  },
  {
    degree: "10th",
    institution: "Indian Public Senior Secondary School, Radaur",
    period: "2020",
    result: "Percentage: 80.2%",
    learnings: null,
    description: "Developed curiosity to explore technology and logical reasoning.",
  },
];

export const certifications = [
  {
    title: "NxtWave Certified Full-Stack Developer",
    issuer: "NxtWave",
    year: "2025",
    description: "Intensive program covering JavaScript, React, Node.js, and Web3 concepts, with hands-on projects demonstrating real-world application development.",
    link: "https://drive.google.com/drive/folders/1M89D4-WMH4hJzLIKNsUls9WcHXxAddCy?usp=sharing",
  },
  {
    title: "Java Excellence",
    issuer: "Coding Ninjas",
    year: "2024",
    description: "Expertise in Core Java, OOP principles, Data Structures, and Algorithm implementation, validated by coding assignments and assessments.",
    link: "https://drive.google.com/drive/folders/1AVl92Ap_HX412aZ4U0VuiJFzM6rqEwW-?usp=sharing",
  },
];

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];
