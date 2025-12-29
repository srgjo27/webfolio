import { Code, Database, Flame } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faJava,
  faPhp,
  faBootstrap,
  faNodeJs,
  faLaravel,
  faGitAlt,
  faFlutter,
  faDartLang,
  faGolang,
  faJira,
  faReact,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export interface SkillItem {
  name: string;
  icon: (props: any) => JSX.Element;
}

export const ANIMATION_CONFIG = {
  ease: "power3.out",
  duration: 0.7,
} as const;

export const PROFILE_INFO = {
  name: "Josua Siregar",
  title: "Full Stack Developer",
  description: `Results oriented developer with a strong background in software
    development and system architecture. Proficient in JavaScript,
    TypeScript, PHP, Go, Dart, and Java, with extensive experience
    in RESTful APIs, microservices, and database optimization. I am
    skilled in developing scalable, high-performance front-end and
    back-end solutions using Laravel, Next JS, and
    Flutter. I am committed to delivering robust, efficient, and
    secure systems for organizational and project success.`,
  email: "josuasiregar0103@gmail.com",
  github: "https://github.com/srgjo27",
  linkedin: "https://www.linkedin.com/in/josua-siregar/",
  avatar: "https://placehold.co/100x100.png",
} as const;

export const PROGRAMMING_LANGUAGES: SkillItem[] = [
  {
    name: "HTML",
    icon: (props) => (
      <FontAwesomeIcon icon={faHtml5} {...props} style={{ color: "#E34F26" }} />
    ),
  },
  {
    name: "CSS",
    icon: (props) => (
      <FontAwesomeIcon icon={faCss3Alt} {...props} style={{ color: "#1572B6" }} />
    ),
  },
  {
    name: "JavaScript",
    icon: (props) => (
      <FontAwesomeIcon icon={faJs} {...props} style={{ color: "#F7DF1E" }} />
    ),
  },
  {
    name: "TypeScript",
    icon: (props) => <Code {...props} style={{ color: "#3178C6" }} />,
  },
  {
    name: "Java",
    icon: (props) => <FontAwesomeIcon icon={faJava} {...props} />,
  },
  {
    name: "Go",
    icon: (props) => (
      <FontAwesomeIcon icon={faGolang} {...props} style={{ color: "#00ADD8" }} />
    ),
  },
  {
    name: "Dart",
    icon: (props) => (
      <FontAwesomeIcon icon={faDartLang} {...props} style={{ color: "#0175C2" }} />
    ),
  },
  {
    name: "PHP",
    icon: (props) => (
      <FontAwesomeIcon icon={faPhp} {...props} style={{ color: "#777BB4" }} />
    ),
  },
];

export const TECHNOLOGIES: SkillItem[] = [
  {
    name: "Bootstrap",
    icon: (props) => (
      <FontAwesomeIcon icon={faBootstrap} {...props} style={{ color: "#7952B3" }} />
    ),
  },
  {
    name: "Tailwind CSS",
    icon: (props) => <Code {...props} style={{ color: "#06B6D4" }} />,
  },
  {
    name: "Node.js",
    icon: (props) => (
      <FontAwesomeIcon icon={faNodeJs} {...props} style={{ color: "#339933" }} />
    ),
  },
  {
    name: "React",
    icon: (props) => (
      <FontAwesomeIcon icon={faReact} {...props} style={{ color: "#61DAFB" }} />
    ),
  },
  {
    name: "Next JS",
    icon: (props) => (
      <FontAwesomeIcon icon={faReact} {...props} style={{ color: "#000000" }} />
    ),
  },
  {
    name: "Laravel",
    icon: (props) => (
      <FontAwesomeIcon icon={faLaravel} {...props} style={{ color: "#FF2D20" }} />
    ),
  },
  {
    name: "Flutter",
    icon: (props) => (
      <FontAwesomeIcon icon={faFlutter} {...props} style={{ color: "#027DFD" }} />
    ),
  },
  {
    name: "Git",
    icon: (props) => (
      <FontAwesomeIcon icon={faGitAlt} {...props} style={{ color: "#F05032" }} />
    ),
  },
  {
    name: "GitHub",
    icon: (props) => <FontAwesomeIcon icon={faGithub} {...props} />,
  },
  {
    name: "MongoDB",
    icon: (props) => <Database {...props} style={{ color: "#47A248" }} />,
  },
  {
    name: "MySQL",
    icon: (props) => <Database {...props} style={{ color: "#4479A1" }} />,
  },
  {
    name: "Firebase",
    icon: (props) => <Flame {...props} style={{ color: "#FFCA28" }} />,
  },
  {
    name: "Jira",
    icon: (props) => (
      <FontAwesomeIcon icon={faJira} {...props} style={{ color: "#027DFD" }} />
    ),
  },
];

export const ALL_SKILLS = [...PROGRAMMING_LANGUAGES, ...TECHNOLOGIES];

export const SOCIAL_LINKS = [
  {
    href: `mailto:${PROFILE_INFO.email}`,
    icon: faEnvelope,
    label: "Email",
    color: "border-red-500/50 hover:border-red-500 text-red-400 hover:glow-green",
  },
  {
    href: PROFILE_INFO.github,
    icon: faGithub,
    label: "GitHub",
    external: true,
    color: "border-gray-500/50 hover:border-primary text-gray-400 hover:text-primary",
  },
  {
    href: PROFILE_INFO.linkedin,
    icon: faLinkedin,
    label: "LinkedIn",
    external: true,
    color: "border-blue-500/50 hover:border-cyan-400 text-blue-400 hover:text-cyan-400",
  },
];

export const ROLE_TAGS = ["Frontend", "Backend", "Mobile", "Web", "Freelance"];
