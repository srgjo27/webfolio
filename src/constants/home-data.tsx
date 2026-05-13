import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiGo,
  SiDart,
  SiPhp,
  SiBootstrap,
  SiTailwindcss,
  SiNodedotjs,
  SiReact,
  SiNextdotjs,
  SiLaravel,
  SiFlutter,
  SiGit,
  SiGithub,
  SiSupabase,
  SiMysql,
  SiPostgresql,
  SiFirebase,
  SiJira,
  SiDocker,
  SiGmail,
  SiLinkerd,
} from "react-icons/si";

export interface SkillItem {
  name: string;
  icon: (props: any) => JSX.Element;
}

export const ANIMATION_CONFIG = {
  ease: "power3.out",
  duration: 0.7,
};

export const PROFILE_INFO = {
  name: "Josua Siregar",
  title: "Full Stack Developer",
  description: `Software Engineer specializing in Flutter mobile development and full‑stack web applications. Experienced in delivering production‑grade applications in fintech and enterprise environments, including digital banking and airline operational systems. Skilled in building scalable mobile applications, integrating complex REST APIs, and optimizing performance for high‑traffic platforms. Strong collaborator with experience working in Agile Scrum teams alongside backend engineers, QA, and product designers.`,
  email: "josuasiregar0103@gmail.com",
  github: "https://github.com/srgjo27",
  linkedin: "https://www.linkedin.com/in/josua-siregar/",
  avatar: "",
};

export const PROGRAMMING_LANGUAGES: SkillItem[] = [
  {
    name: "HTML",
    icon: (props) => <SiHtml5 {...props} style={{ color: "#E34F26" }} />,
  },
  {
    name: "CSS",
    icon: (props) => <SiCss {...props} style={{ color: "#1572B6" }} />,
  },
  {
    name: "JavaScript",
    icon: (props) => <SiJavascript {...props} style={{ color: "#F7DF1E" }} />,
  },
  {
    name: "TypeScript",
    icon: (props) => <SiTypescript {...props} style={{ color: "#3178C6" }} />,
  },
  {
    name: "Go",
    icon: (props) => <SiGo {...props} style={{ color: "#00ADD8" }} />,
  },
  {
    name: "Dart",
    icon: (props) => <SiDart {...props} style={{ color: "#0175C2" }} />,
  },
  {
    name: "PHP",
    icon: (props) => <SiPhp {...props} style={{ color: "#777BB4" }} />,
  },
];

export const TECHNOLOGIES: SkillItem[] = [
  {
    name: "Bootstrap",
    icon: (props) => <SiBootstrap {...props} style={{ color: "#7952B3" }} />,
  },
  {
    name: "Tailwind CSS",
    icon: (props) => <SiTailwindcss {...props} style={{ color: "#06B6D4" }} />,
  },
  {
    name: "Node.js",
    icon: (props) => <SiNodedotjs {...props} style={{ color: "#339933" }} />,
  },
  {
    name: "React",
    icon: (props) => <SiReact {...props} style={{ color: "#61DAFB" }} />,
  },
  {
    name: "Next JS",
    icon: (props) => <SiNextdotjs {...props} style={{ color: "#000000" }} />,
  },
  {
    name: "Laravel",
    icon: (props) => <SiLaravel {...props} style={{ color: "#FF2D20" }} />,
  },
  {
    name: "Flutter",
    icon: (props) => <SiFlutter {...props} style={{ color: "#027DFD" }} />,
  },
  {
    name: "Git",
    icon: (props) => <SiGit {...props} style={{ color: "#F05032" }} />,
  },
  {
    name: "GitHub",
    icon: (props) => <SiGithub {...props} />,
  },
  {
    name: "Supabase",
    icon: (props) => <SiSupabase {...props} style={{ color: "#3ECF8E" }} />,
  },
  {
    name: "MySQL",
    icon: (props) => <SiMysql {...props} style={{ color: "#4479A1" }} />,
  },
  {
    name: "PostgreSQL",
    icon: (props) => <SiPostgresql {...props} style={{ color: "#4169E1" }} />,
  },
  {
    name: "Firebase",
    icon: (props) => <SiFirebase {...props} style={{ color: "#FFCA28" }} />,
  },
  {
    name: "Jira",
    icon: (props) => <SiJira {...props} style={{ color: "#0052CC" }} />,
  },
  {
    name: "Docker",
    icon: (props) => <SiDocker {...props} style={{ color: "#2496ED" }} />,
  },
];

export const ALL_SKILLS = [...PROGRAMMING_LANGUAGES, ...TECHNOLOGIES];

export const SOCIAL_LINKS = [
  {
    href: `mailto:${PROFILE_INFO.email}`,
    icon: SiGmail,
    label: "Email",
    color:
      "border-red-500/50 hover:border-red-500 text-red-400 hover:glow-green",
  },
  {
    href: PROFILE_INFO.github,
    icon: SiGithub,
    label: "GitHub",
    external: true,
    color:
      "border-gray-500/50 hover:border-primary text-gray-400 hover:text-primary",
  },
  {
    href: PROFILE_INFO.linkedin,
    icon: SiLinkerd,
    label: "LinkedIn",
    external: true,
    color:
      "border-blue-500/50 hover:border-cyan-400 text-blue-400 hover:text-cyan-400",
  },
];

export const ROLE_TAGS = ["Frontend", "Backend", "Mobile", "Web", "Freelance"];
