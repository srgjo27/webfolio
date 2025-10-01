"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight, Database, Flame } from "lucide-react";
import Link from "next/link";
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
} from "@fortawesome/free-brands-svg-icons";
import { ScramblingText } from "@/components/ui/scrambling-text";

const HexagonIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 86.6 100"
    fill="currentColor"
    {...props}
  >
    <polygon points="43.3,0 86.6,25 86.6,75 43.3,100 0,75 0,25" />
  </svg>
);

const TypeScriptIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>TypeScript</title>
    <path
      d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0z"
      fill="#3178C6"
    />
    <path
      d="M19.36 15.421c.21-.421.106-.94-.257-1.22l-3.92-2.942v-2.127h3.92c.513 0 .94-.42.94-.94V2.25H6.383v5.938c0 .52.427.94.94.94h3.92v11.157c0 .52.427.94.94.94h.025c.32 0 .61-.162.78-.421l1.19-1.789zm-7.79-11.48h-2.11V4.18h7.02v1.76h-2.11v7.24h-2.8v-7.24z"
      fill="#fff"
    />
  </svg>
);

const TailwindCssIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c-1.2,4.8,0.6,8.4,3.6,9.6c2.4,0.96,4.8,0.6,6-2.4c0.96-2.4-0.24-4.8-1.8-7.2 C12.601,8.4,12.001,4.8,12.001,4.8z M6.601,12c-1.2,0-2.4,0.6-3,1.8c-0.6,1.2,0,2.4,0.6,3.6c0.6,1.2,1.8,1.8,3,1.8 c1.2,0,2.4-0.6,3-1.8c0.6-1.2,0-2.4-0.6-3.6C8.401,12.6,7.801,12,6.601,12z M17.401,12c-1.2,0-2.4,0.6-3,1.8 c-0.6,1.2,0,2.4,0.6,3.6c0.6,1.2,1.8,1.8,3,1.8c1.2,0,2.4-0.6,3-1.8c0.6-1.2,0-2.4-0.6-3.6C19.801,12.6,18.601,12,17.401,12z" />
  </svg>
);

const NextjsIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
  >
    <title>Next.js</title>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zM8.75 5.1h2.174v7.05l5.639-7.05h2.174v13.8h-2.174v-7.05l-5.639 7.05H8.75V5.1z"
    />
  </svg>
);

const SpringBootIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Spring Boot</title>
    <path
      d="M21.53,8.47a1.3,1.3,0,0,0-1-2.13,1.29,1.29,0,0,0-1.23.47,10.6,10.6,0,0,0-2-3.13,1.3,1.3,0,0,0-1.86-.32,1.31,1.31,0,0,0-.31,1.86,8.23,8.23,0,0,1,1.52,2.83,12.1,12.1,0,0,0-4.43-1.49V2.6a1.3,1.3,0,0,0-2.6,0V6.7a12.1,12.1,0,0,0-4.43,1.49A8.2,8.2,0,0,1,6,5.36a1.3,1.3,0,1,0-2.17,1.4,10.6,10.6,0,0,0-2,3.13,1.3,1.3,0,1,0,2.18,1.39,8.13,8.13,0,0,1,1.52-2.83,12.4,12.4,0,0,0-1.49,4.43H2.6a1.3,1.3,0,1,0,0,2.6H6.7a12.4,12.4,0,0,0,1.49,4.43,8.13,8.13,0,0,1-1.52-2.83,1.3,1.3,0,1,0-2.18,1.39,10.6,10.6,0,0,0,2,3.13,1.3,1.3,0,1,0,2.17-1.4,8.2,8.2,0,0,1-1.52-2.83,12.1,12.1,0,0,0,4.43,1.49v4.1a1.3,1.3,0,0,0,2.6,0V19.43a12.1,12.1,0,0,0,4.43-1.49,8.23,8.23,0,0,1-1.52,2.83,1.3,1.3,0,1,0,2.17,1.4,10.6,10.6,0,0,0,2-3.13,1.3,1.3,0,0,0-1-2.13,1.29,1.29,0,0,0-1.23.47,8.13,8.13,0,0,1-1.52,2.83,12.4,12.4,0,0,0,1.49-4.43h4.1a1.3,1.3,0,1,0,0,2.6H19.43a12.4,12.4,0,0,0-1.49-4.43A8.13,8.13,0,0,1,19.47,11.25Z"
      fill="#6DB33F"
    />
  </svg>
);

export default function Home() {
  const main = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 0.7 },
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

  const languages = [
    {
      name: "HTML",
      icon: (props: any) => (
        <FontAwesomeIcon
          icon={faHtml5}
          {...props}
          style={{ color: "#E34F26" }}
        />
      ),
    },
    {
      name: "CSS",
      icon: (props: any) => (
        <FontAwesomeIcon
          icon={faCss3Alt}
          {...props}
          style={{ color: "#1572B6" }}
        />
      ),
    },
    {
      name: "JavaScript",
      icon: (props: any) => (
        <FontAwesomeIcon icon={faJs} {...props} style={{ color: "#F7DF1E" }} />
      ),
    },
    { name: "TypeScript", icon: TypeScriptIcon },
    {
      name: "Java",
      icon: (props: any) => <FontAwesomeIcon icon={faJava} {...props} />,
    },
    {
      name: "Go",
      icon: (props: any) => (
        <FontAwesomeIcon
          icon={faGolang}
          {...props}
          style={{ color: "#00ADD8" }}
        />
      ),
    },
    {
      name: "Dart",
      icon: (props: any) => (
        <FontAwesomeIcon
          icon={faDartLang}
          {...props}
          style={{ color: "#0175C2" }}
        />
      ),
    },
    {
      name: "PHP",
      icon: (props: any) => (
        <FontAwesomeIcon icon={faPhp} {...props} style={{ color: "#777BB4" }} />
      ),
    },
  ];

  const technologies = [
    {
      name: "Bootstrap",
      icon: (props: any) => (
        <FontAwesomeIcon
          icon={faBootstrap}
          {...props}
          style={{ color: "#7952B3" }}
        />
      ),
    },
    {
      name: "Tailwind CSS",
      icon: (props: any) => (
        <TailwindCssIcon {...props} style={{ color: "#06B6D4" }} />
      ),
    },
    {
      name: "Node.js",
      icon: (props: any) => (
        <FontAwesomeIcon
          icon={faNodeJs}
          {...props}
          style={{ color: "#339933" }}
        />
      ),
    },
    { name: "Next JS", icon: NextjsIcon },
    {
      name: "Laravel",
      icon: (props: any) => (
        <FontAwesomeIcon
          icon={faLaravel}
          {...props}
          style={{ color: "#FF2D20" }}
        />
      ),
    },
    {
      name: "Flutter",
      icon: (props: any) => (
        <FontAwesomeIcon
          icon={faFlutter}
          {...props}
          style={{ color: "#027DFD" }}
        />
      ),
    },
    { name: "Spring Boot", icon: SpringBootIcon },
    {
      name: "Git",
      icon: (props: any) => (
        <FontAwesomeIcon
          icon={faGitAlt}
          {...props}
          style={{ color: "#F05032" }}
        />
      ),
    },
    {
      name: "GitHub",
      icon: (props: any) => <FontAwesomeIcon icon={faGithub} {...props} />,
    },
    {
      name: "MongoDB",
      icon: (props: any) => (
        <Database {...props} style={{ color: "#47A248" }} />
      ),
    },
    {
      name: "MySQL",
      icon: (props: any) => (
        <Database {...props} style={{ color: "#4479A1" }} />
      ),
    },
    {
      name: "Firebase",
      icon: (props: any) => <Flame {...props} style={{ color: "#FFCA28" }} />,
    },
    {
      name: "Jira",
      icon: (props: any) => (
        <FontAwesomeIcon
          icon={faJira}
          {...props}
          style={{ color: "#027DFD" }}
        />
      ),
    },
  ];

  const allSkills = [...languages, ...technologies];

  return (
    <div className="flex-1 space-y-8 p-4 md:p-8 pt-6" ref={main}>
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight font-headline">
          Home
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="profile-card border-accent relative overflow-hidden">
            <div
              className="absolute bottom-0 right-0 h-1/2 w-1/2"
              aria-hidden="true"
            >
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
            <CardHeader className="flex flex-row items-center gap-4 relative">
              <div className="relative w-24 h-24 avatar">
                <Avatar
                  className="h-24 w-24 rounded-none animate-cyber-glow"
                  style={{
                    clipPath:
                      "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                  }}
                >
                  <AvatarImage
                    src="https://placehold.co/100x100.png"
                    alt="@josuas"
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
                  ></div>
                  <div
                    className="absolute w-px h-6 bg-accent animate-drip rounded-full"
                    style={{
                      left: "50%",
                      animationDelay: "0.6s",
                      animationDuration: "2.5s",
                    }}
                  ></div>
                  <div
                    className="absolute w-0.5 h-3 bg-accent/90 animate-drip rounded-full"
                    style={{
                      left: "55%",
                      animationDelay: "0.2s",
                      animationDuration: "1.8s",
                    }}
                  ></div>
                </div>
              </div>
              <div>
                <CardTitle className="profile-title text-3xl font-headline text-primary">
                  Josua Siregar
                </CardTitle>
                <div className="profile-subtitle">
                  <ScramblingText
                    text="Full Stack Developer"
                    className="text-muted-foreground"
                  />
                </div>
              </div>
            </CardHeader>
            <CardContent className="relative">
              <p className="profile-description text-lg text-foreground/80 leading-relaxed">
                Results oriented developer with a strong background in software
                development and system architecture. Proficient in JavaScript,
                TypeScript, PHP, Go, Dart, and Java, with extensive experience
                in RESTful APIs, microservices, and database optimization. I am
                skilled in developing scalable, high-performance front-end and
                back-end solutions using Laravel, Next JS, Spring Boot, and
                Flutter. I am committed to delivering robust, efficient, and
                secure systems for organizational and project success.
              </p>
              <div className="profile-links mt-6 flex items-center gap-4">
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center gap-2 text-lg font-bold text-primary"
                >
                  <div className="absolute inset-[-0.5rem] z-0">
                    <HexagonIcon
                      className="absolute left-1 top-1 h-3 w-auto text-accent/50 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:animate-pulse"
                      style={{ animationDelay: "0.1s" }}
                    />
                    <HexagonIcon
                      className="absolute right-1 bottom-1 h-4 w-auto text-accent/30 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:animate-pulse"
                      style={{ animationDelay: "0.2s" }}
                    />
                    <HexagonIcon
                      className="absolute left-1/2 top-0 h-2 w-auto text-accent/40 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:animate-pulse"
                      style={{ animationDelay: "0.3s" }}
                    />
                    <HexagonIcon
                      className="absolute right-1/4 top-1 h-3 w-auto text-accent/20 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:animate-pulse"
                      style={{ animationDelay: "0.4s" }}
                    />
                    <HexagonIcon
                      className="absolute left-1/4 bottom-1 h-3 w-auto text-accent/20 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:animate-pulse"
                      style={{ animationDelay: "0.5s" }}
                    />
                  </div>

                  <span className="relative z-10 flex items-center gap-2 transition-colors group-hover:text-accent">
                    Contact Me
                    <span className="relative h-5 w-5">
                      <ChevronRight
                        className="absolute inset-0 animate-chevron-move"
                        style={{ animationDelay: "0s" }}
                      />
                      <ChevronRight
                        className="absolute inset-0 animate-chevron-move"
                        style={{ animationDelay: "0.2s" }}
                      />
                      <ChevronRight
                        className="absolute inset-0 animate-chevron-move"
                        style={{ animationDelay: "0.4s" }}
                      />
                    </span>
                  </span>
                </Link>
                <div className="flex items-center gap-4">
                  <a
                    href="mailto:josuasiregar0103@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <FontAwesomeIcon icon={faEnvelope} className="h-5 w-5" />
                  </a>
                  <a
                    href="https://github.com/srgjo27"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <FontAwesomeIcon icon={faGithub} className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/josua-siregar/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <FontAwesomeIcon icon={faLinkedin} className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card className="tech-stack-card">
            <CardHeader>
              <CardTitle className="font-headline">Tech Stack</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4 items-center">
                {allSkills.map((skill) => (
                  <div
                    key={skill.name}
                    className="skill-badge relative group cursor-pointer"
                  >
                    <div className="absolute inset-[-0.3rem] z-0 pointer-events-none">
                      <HexagonIcon
                        className="absolute left-1 top-1 h-2 w-auto text-accent/50 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:animate-pulse"
                        style={{ animationDelay: "0.1s" }}
                      />
                      <HexagonIcon
                        className="absolute right-1 bottom-1 h-3 w-auto text-accent/30 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:animate-pulse"
                        style={{ animationDelay: "0.2s" }}
                      />
                      <HexagonIcon
                        className="absolute left-1/2 top-0 h-2 w-auto text-accent/40 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:animate-pulse"
                        style={{ animationDelay: "0.3s" }}
                      />
                    </div>
                    <Badge
                      variant="secondary"
                      className="relative z-10 flex items-center gap-1.5 py-1 px-3 transition-colors group-hover:bg-accent/10"
                    >
                      <skill.icon className="h-4 w-4" />
                      {skill.name}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
