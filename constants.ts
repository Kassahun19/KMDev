import { Project, Course, TimelineItem, Theme } from "./types";

export const PERSONAL_INFO = {
  name: "Kassahun Mulatu",
  role: "Full Stack Web Developer",
  tagline: "Building digital experiences with modern technologies.",
  email: "kmulatu21@gmail.com",
  phone: "+251915508167",
  address: "Bahir Dar, Ethiopia",
  bio: "I'm a creative UI/UX Designer and Full Stack Web Developer based in Ethiopia. I'm very passionate and dedicated to my work. With a few years of experience as a Full Stack Web Developer, I have acquired the skills necessary to build great, appealing, and premium websites that meet the latest web standards. I am a detail-oriented Web Developer adept at interpreting blueprints, working with others, and meeting production deadlines. I am skilled at quickly learning new technologies and machinery. I am self-motivated with strong organizational and time management abilities. Most importantly, I'm constantly trying to learn new skills to improve myself and my work.",
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
};

// Random Software Company/Office Image
export const PROFILE_IMAGE = "/Kassahun.jpg";

export const BUY_ME_COFFEE_URL = "http://ye-buna.com/kassahunmulatu";

export const PERSONAL_DETAILS = [
  { label: "Birthday", value: "03 March 1998" },
  { label: "Age", value: "26" },
  { label: "Website", value: "www.domain.com" },
  { label: "Email", value: "kmulatu21@gmail.com" },
  { label: "Degree", value: "Electrical Engineering" },
  { label: "Phone", value: "+251915508167" },
  { label: "City", value: "Bahir Dar" },
  { label: "Freelance", value: "Available" },
];

export const SKILLS = [
  { name: "JS", level: 86 },
  { name: "PHP", level: 66 },
  { name: "HTML", level: 96 },
  { name: "Bootstrap", level: 76 },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Amazon Clone",
    description:
      "A full-featured e-commerce replica of Amazon. Features include user authentication, product search & filtering, shopping cart functionality, and Stripe payment integration. Built with a focus on pixel-perfect UI and scalable backend architecture.",
    technologies: ["React", "Node.js", "Express", "MySQL", "Stripe"],
    image: "https://picsum.photos/600/400?random=101",
    demoUrl: "#",
    repoUrl: "#",
  },
  {
    id: 2,
    title: "Netflix Clone",
    description:
      "A high-performance streaming platform clone. Includes movie trailers, genre categorization, and a dynamic 'My List' feature. Utilizes TMDB API for real-time data and features a responsive, cinematic user interface.",
    technologies: ["Next.js", "Typescript", "Tailwind CSS", "Firebase"],
    image: "https://picsum.photos/600/400?random=102",
    demoUrl: "#",
    repoUrl: "#",
  },
  {
    id: 3,
    title: "Apple Website Clone",
    description:
      "A stunning, animation-heavy recreation of the Apple website. Showcases complex scroll animations, 3D product rendering effects, and a fully responsive layout that mimics the premium feel of the original site.",
    technologies: ["React", "Three.js", "GSAP", "Node.js"],
    image: "https://picsum.photos/600/400?random=103",
    demoUrl: "#",
    repoUrl: "#",
  },
];

export const COURSES: Course[] = [
  {
    id: 1,
    title: "Full Stack Web Development Bootcamp",
    description:
      "A comprehensive guide to becoming a professional developer. Covers HTML, CSS, JavaScript, React, Node.js, and Databases.",
    level: "Beginner to Pro",
    icon: "code",
  },
  {
    id: 2,
    title: "UI/UX Masterclass",
    description:
      "Learn the principles of design, wireframing, and prototyping to build user-centered products.",
    level: "Intermediate",
    icon: "book",
  },
  {
    id: 3,
    title: "Advanced React & Redux",
    description:
      "Deep dive into React ecosystem, state management patterns, and performance optimization.",
    level: "Advanced",
    icon: "calculator",
  },
];

export const NAV_LINKS = [
  { id: "home", name: "Home" },
  { id: "about", name: "About" },
  { id: "courses", name: "Courses" },
  { id: "projects", name: "Projects" },
  { id: "contact", name: "Contact" },
];

export const EDUCATION: TimelineItem[] = [
  {
    id: 1,
    period: "2016 - 2021",
    title: "BSc Degree in Electrical Engineering",
    institution: "Bahir Dar University",
    description:
      "Graduated with honors. Focused on Control Systems, Embedded Systems, and Software Engineering principles.",
  },
  {
    id: 2,
    period: "2020 - 2021",
    title: "Full Stack Web Development Certification",
    institution: "Udemy / Coursera",
    description:
      "Completed intensive bootcamps focusing on modern web technologies including MERN stack and Cloud Computing.",
  },
];

export const EXPERIENCE: TimelineItem[] = [
  {
    id: 1,
    period: "2022 - Present",
    title: "Freelance Full Stack Developer",
    institution: "Remote",
    description:
      "Building custom web solutions for diverse clients. Architecting scalable applications and delivering high-quality code.",
  },
  {
    id: 2,
    period: "2021 - 2022",
    title: "Web Developer & Educator",
    institution: "Self-Employed",
    description:
      "Created educational content for aspiring developers and mentored students in web development technologies.",
  },
];

export const THEMES: Theme[] = [];
