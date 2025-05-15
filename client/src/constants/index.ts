import { FaNodeJs, FaReact, FaUnity, FaGithub } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";

export const PROJECT_PLACEHOLDER = "https://picsum.photos/300/300";
export const GITHUB_LINK = "https://github.com/Robin-Assmann";
export const LINKEDIN_LINK = "https://www.linkedin.com/in/robin-aßmann/";

import Header from "../components/Header";
import About from "../components/About";
import Expertises from "../components/Expertises";
import Projects from "../components/Projects";

// Define the sections with Ids and components
export const SECTIONS = [
    { id: "hero", component: Header },
    { id: "about", component: About },
    { id: "expertises", component: Expertises },
    { id: "projects", component: Projects },
];

export const HERO_CONTENT = `Hello! I'm Robin, a web and app developer, and my goal is to turn your ideas into digital solutions that truly make a difference. With creativity and a keen eye for detail, I create online experiences that meet your needs and make your project shine in the digital world. Let's work together to bring your vision to life and create something amazing for your business.`;

export const PROJECTS = [
  {
    title: "Daily Quotes",
    image: PROJECT_PLACEHOLDER,
    description:
      "Mobile Application to generate Quotes of famous persons throughout history and get information about the author via Wikipedia",
    technologies: ["Flutter", "Dart", "Dio", "Bloc", "Auto Route"],
    link: "https://github.com/Robin-Assmann/daily_quotes"
  },
  {
    title: "Health Metrics Calculator",
    image: PROJECT_PLACEHOLDER,
    description:
      "A simple yet flexible health metrics calculator built with React Native and Expo. This app supports multiple health calculations like BMI or Body Fat Percentage (BFP).",
    technologies: ["React Native", "JavaScript", "Expo"],
    link: "https://github.com/Robin-Assmann/health_metrics_calculator"
  },
  {
    title: "SofyTrender",
    image: PROJECT_PLACEHOLDER,
    description:
      "Developed as a .Net MAUI Application you can set settings for Spotify Playlists to generate or update Spotify Playlists based on your settings.",
    technologies: [".NET Maui", "C#", ".NET", "Spotify API"],
    link: "https://github.com/Robin-Assmann/SofyTrender"
  },
];

// Technologies with descriptions for a more informative section
export const TECHNOLOGIES = [
    { icon: FaUnity, color: "#EBEBEB", name: "Unity", description: "Powerful engine for cross-platform game development." },
    { icon: FaReact, color: "#61DAFB", name: "React.js", description: "Efficient and scalable front-end library." },
    { icon: FaNodeJs, color: "#8CC84B", name: "Node.js", description: "Server-side JavaScript for scalable applications." },
    { icon: SiTypescript, color: "#007ACC", name: "TypeScript", description: "Strongly typed JavaScript for safer code." },
    { icon: IoLogoJavascript, color: "#F7DF1E", name: "JavaScript", description: "Dynamic and interactive behavior for the web." },
    { icon: RiTailwindCssFill, color: "#06B6D4", name: "Tailwind CSS", description: "Utility-first CSS framework for rapid UI development." },
    { icon: FaGithub, color: "#EBEBEB", name: "GitHub", description: "The foundation of version control and collaboration." },
];
