"use client";

import { useRef, type ComponentProps } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

// UI Components
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScramblingText } from "@/components/ui/scrambling-text";

// Icons
import { ChevronRight, Database, Flame, Code, Leaf } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
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
} from "@fortawesome/free-brands-svg-icons";

// Types
interface SkillItem {
  name: string;
  icon: (props: any) => JSX.Element;
}

interface AnimationConfig {
  ease: string;
  duration: number;
}

// SVG Icon Components
const HexagonIcon = (props: ComponentProps<"svg">) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 86.6 100"
    fill="currentColor"
    {...props}
  >
    <polygon points="43.3,0 86.6,25 86.6,75 43.3,100 0,75 0,25" />
  </svg>
);

// Constants
const ANIMATION_CONFIG: AnimationConfig = {
  ease: "power3.out",
  duration: 0.7,
} as const;

const PROFILE_INFO = {
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

const PROGRAMMING_LANGUAGES: SkillItem[] = [
  {
    name: "HTML",
    icon: (props) => (
      <FontAwesomeIcon icon={faHtml5} {...props} style={{ color: "#E34F26" }} />
    ),
  },
  {
    name: "CSS",
    icon: (props) => (
      <FontAwesomeIcon
        icon={faCss3Alt}
        {...props}
        style={{ color: "#1572B6" }}
      />
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
      <FontAwesomeIcon
        icon={faGolang}
        {...props}
        style={{ color: "#00ADD8" }}
      />
    ),
  },
  {
    name: "Dart",
    icon: (props) => (
      <FontAwesomeIcon
        icon={faDartLang}
        {...props}
        style={{ color: "#0175C2" }}
      />
    ),
  },
  {
    name: "PHP",
    icon: (props) => (
      <FontAwesomeIcon icon={faPhp} {...props} style={{ color: "#777BB4" }} />
    ),
  },
] as const;

const TECHNOLOGIES: SkillItem[] = [
  {
    name: "Bootstrap",
    icon: (props) => (
      <FontAwesomeIcon
        icon={faBootstrap}
        {...props}
        style={{ color: "#7952B3" }}
      />
    ),
  },
  {
    name: "Tailwind CSS",
    icon: (props) => <Code {...props} style={{ color: "#06B6D4" }} />,
  },
  {
    name: "Node.js",
    icon: (props) => (
      <FontAwesomeIcon
        icon={faNodeJs}
        {...props}
        style={{ color: "#339933" }}
      />
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
      <FontAwesomeIcon
        icon={faLaravel}
        {...props}
        style={{ color: "#FF2D20" }}
      />
    ),
  },
  {
    name: "Flutter",
    icon: (props) => (
      <FontAwesomeIcon
        icon={faFlutter}
        {...props}
        style={{ color: "#027DFD" }}
      />
    ),
  },
  {
    name: "Git",
    icon: (props) => (
      <FontAwesomeIcon
        icon={faGitAlt}
        {...props}
        style={{ color: "#F05032" }}
      />
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
] as const;

const ALL_SKILLS: SkillItem[] = [
  ...PROGRAMMING_LANGUAGES,
  ...TECHNOLOGIES,
] as const;

// Helper Components
function HexagonBackground() {
  return (
    <div className="absolute bottom-0 right-0 h-1/2 w-1/2" aria-hidden="true">
      <div className="absolute inset-0 z-0">
        <HexagonIcon className="absolute w-48 h-auto text-accent/10 -right-10 -bottom-10" />
        <HexagonIcon
          className="absolute w-32 h-auto text-accent/20 animate-pulse-slow"
          style={{ bottom: "20%", right: "40%", animationDelay: "1s" }}
        />
        <HexagonIcon
          className="absolute w-24 h-auto text-accent/10 animate-pulse-slow"
          style={{ bottom: "50%", right: "10%" }}
        />
      </div>
    </div>
  );
}

function AvatarWithAnimation() {
  return (
    <div className="relative w-24 h-24 avatar">
      <Avatar
        className="h-24 w-24 rounded-none animate-cyber-glow"
        style={{
          clipPath:
            "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
        }}
      >
        <AvatarImage
          src={PROFILE_INFO.avatar}
          alt={`@${PROFILE_INFO.name}`}
          data-ai-hint="professional portrait"
        />
        <AvatarFallback>JS</AvatarFallback>
      </Avatar>
      <div className="absolute -bottom-2 left-0 right-0 h-10 pointer-events-none">
        <div
          className="absolute w-0.5 h-4 bg-accent/80 animate-drip rounded-full"
          style={{
            left: "45%",
            animationDelay: "0s",
            animationDuration: "2s",
          }}
        />
        <div
          className="absolute w-px h-6 bg-accent animate-drip rounded-full"
          style={{
            left: "50%",
            animationDelay: "0.6s",
            animationDuration: "2.5s",
          }}
        />
        <div
          className="absolute w-0.5 h-3 bg-accent/90 animate-drip rounded-full"
          style={{
            left: "55%",
            animationDelay: "0.2s",
            animationDuration: "1.8s",
          }}
        />
      </div>
    </div>
  );
}

function ContactLink() {
  return (
    <Link
      href="/contact"
      className="group relative inline-flex items-center gap-2 text-lg font-bold text-primary"
    >
      <div className="absolute inset-[-0.5rem] z-0">
        {[0.1, 0.2, 0.3, 0.4, 0.5].map((delay, index) => (
          <HexagonIcon
            key={index}
            className={`absolute ${
              index === 1 ? "h-4" : index === 0 || index === 4 ? "h-3" : "h-2"
            } w-auto ${
              index === 2
                ? "text-accent/40"
                : index === 0
                ? "text-accent/50"
                : "text-accent/20"
            } opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:animate-pulse`}
            style={{
              animationDelay: `${delay}s`,
              ...(index === 0 && { left: "0.25rem", top: "0.25rem" }),
              ...(index === 1 && { right: "0.25rem", bottom: "0.25rem" }),
              ...(index === 2 && { left: "50%", top: "0" }),
              ...(index === 3 && { right: "25%", top: "0.25rem" }),
              ...(index === 4 && { left: "25%", bottom: "0.25rem" }),
            }}
          />
        ))}
      </div>
      <span className="relative z-10 flex items-center gap-2 transition-colors group-hover:text-accent">
        Contact Me
        <span className="relative h-5 w-5">
          {[0, 0.2, 0.4].map((delay, index) => (
            <ChevronRight
              key={index}
              className="absolute inset-0 animate-chevron-move"
              style={{ animationDelay: `${delay}s` }}
            />
          ))}
        </span>
      </span>
    </Link>
  );
}

function SocialLinks() {
  const socialLinks = [
    {
      href: `mailto:${PROFILE_INFO.email}`,
      icon: faEnvelope,
      label: "Email",
      color: "text-red-400 hover:text-red-300",
    },
    {
      href: PROFILE_INFO.github,
      icon: faGithub,
      label: "GitHub",
      external: true,
      color: "text-gray-400 hover:text-gray-300",
    },
    {
      href: PROFILE_INFO.linkedin,
      icon: faLinkedin,
      label: "LinkedIn",
      external: true,
      color: "text-blue-400 hover:text-blue-300",
    },
  ];

  return (
    <div className="flex items-center gap-3">
      {socialLinks.map(({ href, icon, label, external, color }) => (
        <a
          key={href}
          href={href}
          {...(external && { target: "_blank", rel: "noopener noreferrer" })}
          className={`relative group p-2 rounded-full border border-border/50 backdrop-blur-sm 
                     hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 
                     hover:scale-110 hover:rotate-12 ${color}`}
          aria-label={label}
        >
          <FontAwesomeIcon
            icon={icon}
            className="h-4 w-4 transition-transform duration-300 group-hover:scale-110"
          />

          {/* Tooltip */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-foreground text-background text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            {label}
          </div>

          {/* Glow Effect */}
          <div className="absolute inset-0 bg-current opacity-0 group-hover:opacity-20 blur-md rounded-full transition-opacity duration-300" />
        </a>
      ))}
    </div>
  );
}

function ProfileCard() {
  return (
    <Card className="profile-card border-accent relative overflow-hidden bg-gradient-to-br from-card via-card/90 to-card/50 backdrop-blur-sm">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-0 left-0 w-full h-full">
          {/* Grid Pattern */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(var(--primary),0.3) 1px, transparent 0)",
              backgroundSize: "20px 20px",
            }}
          />
          {/* Hexagon Decorations */}
          <HexagonIcon className="absolute w-64 h-auto text-primary/20 -top-16 -left-16 animate-pulse-slow" />
          <HexagonIcon
            className="absolute w-32 h-auto text-accent/30 top-8 right-12 animate-pulse-slow"
            style={{ animationDelay: "2s" }}
          />
          <HexagonIcon
            className="absolute w-48 h-auto text-primary/10 bottom-0 right-0 animate-pulse-slow"
            style={{ animationDelay: "1s" }}
          />
        </div>
      </div>

      {/* Animated Border Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 animate-pulse rounded-lg blur-sm" />
      <div className="absolute inset-[1px] bg-card rounded-lg" />

      {/* Status Indicator */}
      <div className="absolute top-4 right-4 z-20">
        <div className="flex items-center gap-2 px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full backdrop-blur-sm">
          <div className="relative">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <div className="absolute inset-0 w-2 h-2 bg-green-400 rounded-full animate-ping" />
          </div>
          <span className="text-xs font-medium text-green-400">
            Available for work
          </span>
        </div>
      </div>

      <CardHeader className="flex flex-row items-center gap-6 relative z-10 pb-4">
        <div className="relative group">
          <AvatarWithAnimation />
          {/* Avatar Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <CardTitle className="profile-title text-3xl font-headline bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient bg-300%">
              {PROFILE_INFO.name}
            </CardTitle>
          </div>

          <div className="profile-subtitle mb-3">
            <ScramblingText
              text={PROFILE_INFO.title}
              className="text-lg font-medium text-muted-foreground"
            />
          </div>

          {/* Role Tags */}
          <div className="flex gap-2 flex-wrap">
            {["Frontend", "Backend", "Mobile", "Web", "Freelance"].map(
              (role, index) => (
                <span
                  key={role}
                  className="px-2 py-1 text-xs font-medium bg-accent/10 text-accent border border-accent/20 rounded-full backdrop-blur-sm hover:bg-accent/20 transition-colors duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {role}
                </span>
              )
            )}
          </div>
        </div>
      </CardHeader>

      <CardContent className="relative z-10 space-y-6">
        {/* Enhanced Description */}
        <div className="relative">
          <div className="absolute -left-2 top-0 w-1 h-full bg-gradient-to-b from-primary to-accent rounded-full opacity-50" />
          <p className="profile-description text-base text-foreground/90 leading-relaxed pl-4 relative">
            {PROFILE_INFO.description}
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-3 gap-4 py-4 border-y border-border/50">
          {[
            { label: "Projects", value: "5", icon: "📁" },
            { label: "Experience", value: "±2 Years", icon: "🚀" },
            {
              label: "Technologies",
              value: `${ALL_SKILLS.length}+`,
              icon: "💻",
            },
          ].map((stat, index) => (
            <div key={stat.label} className="text-center group cursor-pointer">
              <div className="text-2xl mb-1 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-lg font-bold text-primary group-hover:text-accent transition-colors duration-300">
                {stat.value}
              </div>
              <div className="text-xs text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Action Links */}
        <div className="profile-links flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
          <ContactLink />

          {/* Social Links with Enhanced Styling */}
          <div className="flex items-center gap-3">
            <span className="text-sm text-muted-foreground hidden sm:block">
              Connect:
            </span>
            <SocialLinks />
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-4 right-4 opacity-20">
          <div className="flex gap-2">
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" />
            <div
              className="w-2 h-2 bg-accent rounded-full animate-bounce"
              style={{ animationDelay: "0.2s" }}
            />
            <div
              className="w-2 h-2 bg-primary rounded-full animate-bounce"
              style={{ animationDelay: "0.4s" }}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function SkillBadge({ skill }: { skill: SkillItem }) {
  return (
    <Badge
      variant="outline"
      className="group relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-md 
                 bg-gradient-to-r from-background/80 to-muted/50 border-border/50 
                 hover:border-primary/30 hover:bg-gradient-to-r hover:from-primary/5 hover:to-accent/5
                 flex items-center gap-2 px-3 py-2"
    >
      <skill.icon className="h-4 w-4 flex-shrink-0 transition-transform duration-300 group-hover:rotate-12" />
      <span className="text-sm font-medium">{skill.name}</span>

      {/* Subtle glow effect on hover */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 
                      transition-opacity duration-300 group-hover:opacity-100 -z-10"
      />
    </Badge>
  );
}

function TechStackCard() {
  return (
    <Card className="tech-stack-card border-accent relative overflow-hidden bg-gradient-to-br from-card to-card/50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-4 right-4">
          <HexagonIcon className="w-16 h-auto text-primary animate-pulse-slow" />
        </div>
        <div className="absolute bottom-4 left-4">
          <HexagonIcon
            className="w-12 h-auto text-accent animate-pulse-slow"
            style={{ animationDelay: "1s" }}
          />
        </div>
        <div className="absolute top-1/2 right-8 transform -translate-y-1/2">
          <HexagonIcon
            className="w-8 h-auto text-primary/60 animate-pulse-slow"
            style={{ animationDelay: "0.5s" }}
          />
        </div>
      </div>

      <CardHeader className="relative">
        <div className="flex items-center gap-3">
          <div className="relative">
            <Code className="h-6 w-6 text-primary animate-pulse" />
            <div className="absolute inset-0 bg-primary/20 blur-md rounded-full" />
          </div>
          <CardTitle className="font-headline text-xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Tech Stack
          </CardTitle>
        </div>
        <p className="text-sm text-muted-foreground mt-2">
          Technologies I work with
        </p>
      </CardHeader>

      <CardContent className="relative">
        {/* Languages Section */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-primary mb-3 flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            Programming Languages
          </h4>
          <div className="flex flex-wrap gap-2">
            {PROGRAMMING_LANGUAGES.map((skill: SkillItem) => (
              <SkillBadge key={skill.name} skill={skill} />
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-border/50" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-card px-2 text-muted-foreground">
              Technologies
            </span>
          </div>
        </div>

        {/* Technologies Section */}
        <div>
          <h4 className="text-sm font-semibold text-accent mb-3 flex items-center gap-2">
            <div
              className="w-2 h-2 bg-accent rounded-full animate-pulse"
              style={{ animationDelay: "0.5s" }}
            />
            Frameworks & Tools
          </h4>
          <div className="flex flex-wrap gap-2">
            {TECHNOLOGIES.map((skill: SkillItem) => (
              <SkillBadge key={skill.name} skill={skill} />
            ))}
          </div>
        </div>

        {/* Progress Bar Animation */}
        <div className="mt-6 space-y-2">
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>Skill Level</span>
            <span>Expert</span>
          </div>
          <div className="h-1 bg-border rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-primary via-accent to-primary animate-pulse rounded-full w-4/5" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function Home() {
  const main = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: ANIMATION_CONFIG,
      });

      tl.from(".profile-card", { opacity: 0, y: 30 })
        .from(
          ".avatar",
          { opacity: 0, scale: 0.5, ease: "back.out(1.7)" },
          "-=0.4"
        )
        .from(".profile-title", { opacity: 0, x: -20 }, "-=0.5")
        .from(".profile-subtitle", { opacity: 0, x: -20 }, "<0.1")
        .from(".profile-description", { opacity: 0, y: 15 }, "-=0.5")
        .from(
          ".profile-links > *",
          { opacity: 0, y: 15, stagger: 0.1 },
          "-=0.5"
        )
        .from(".tech-stack-card", { opacity: 0, y: 30 }, "-=0.8")
        .from(
          ".skill-badge",
          {
            opacity: 0,
            scale: 0,
            duration: 0.3,
            ease: "back.out(1.7)",
            stagger: {
              each: 0.05,
              from: "random",
            },
          },
          "-=0.5"
        );
    },
    { scope: main }
  );

  return (
    <div className="flex-1 space-y-8 p-4 md:p-8 pt-6" ref={main}>
      <header className="flex items-center justify-between space-y-2">
        <h1 className="text-3xl font-bold tracking-tight font-headline">
          Home
        </h1>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <ProfileCard />
        </div>
        <div>
          <TechStackCard />
        </div>
      </div>
    </div>
  );
}
