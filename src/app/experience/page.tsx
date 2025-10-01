"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Briefcase, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

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

const experienceData = [
  {
    role: "Teaching Assistant",
    company: "Institut Teknologi Del",
    period: "Aug 2022 - Dec 2022",
    location: "Toba, North Sumatra",
    description:
      "As an Assistant Lecturer in Computer Architecture and Organization, I mentored more than 60 students by designing tutorial sessions and managing practical work. This initiative proved successful in significantly improving students' understanding of the material, practical performance, and average grades.",
    tags: [],
  },
  {
    role: "Mobile Developer",
    company: "EGOV Center",
    period: "Aug 2023 - Dec 2023",
    location: "Toba, North Sumatra",
    description:
      "Developed a Drinking Water Retribution Recording application that improved work efficiency by 30% and a Tourism App for over 1,000 users. I demonstrated expertise in Flutter and Git, integrating with REST APIs to increase functionality efficiency by 50%. Key features implemented include QR code payments, complaint handling, thermal printer integration for faster invoicing, and Google Maps API for enhanced navigation, resulting in a significant boost in user satisfaction and transaction speed.",
    tags: [
      "Flutter",
      "REST API",
      "Git",
      "Google Maps API",
      "Mobile Development",
    ],
  },
  {
    role: "Software Engineer",
    company: "PT. Indonesia AirAsia",
    period: "Feb 2024 - Jul 2024",
    location: "Tangerang, Banten",
    description:
      "Designed and developed AIRMASTER Super App, an internal application based on Flutter and Firebase, which successfully improved the team's operational efficiency. Implemented clean code standards and function testing, which significantly reduced the number of bugs before release and strengthened the stability of the app. Actively collaborated in cross-divisional teams to accelerate application development cycles, which directly contributed to AirAsia's digital transformation strategic initiatives.",
    tags: ["Flutter", "Firebase", "Mobile Development", "Clean Code"],
  },
  {
    role: "Front End Developer",
    company: "PT. Bank Raya Indonesia Tbk",
    period: "Sep 2024 - Present",
    location: "South Jakarta, Jakarta",
    description:
      "Developed a Raya mobile-based digital banking application using Flutter, with integration of WebView components to display specific web modules within the application. Integrated REST API with the user interface to support dynamic data interaction. Performed performance optimization, debugging, and code maintenance to ensure the application remains stable and responsive. Collaborate closely with Backend, QA, and UI/UX Designer teams to ensure synchronization between feature design and implementation. Take an active role in Scrum-based development, including sprint planning, daily stand-ups, and retrospectives, with the support of tools such as Jira for project management and Confluence for team documentation.",
    tags: [
      "Flutter",
      "Mobile Development",
      "API Integration",
      "Performance Optimization",
      "Scrum",
      "Jira",
      "Confluence",
    ],
  },
];

export default function ExperiencePage() {
  const main = useRef(null);
  const [selectedExperience, setSelectedExperience] = useState<
    (typeof experienceData)[0] | null
  >(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 0.7 },
      });

      tl.from(".experience-title", { opacity: 0, x: -30 }).from(
        ".timeline-item",
        {
          opacity: 0,
          y: 40,
          stagger: 0.2,
        },
        "-=0.5"
      );
    },
    { scope: main }
  );

  return (
    <div className="flex-1 space-y-8 p-4 md:p-8 pt-6" ref={main}>
      <div className="flex items-center justify-between space-y-2">
        <h2 className="experience-title text-3xl font-bold tracking-tight font-headline">
          Work Experience
        </h2>
      </div>

      <div className="relative">
        <div
          className="absolute left-1/2 top-10 bottom-10 -ml-px w-0.5 bg-border"
          aria-hidden="true"
        >
          <span
            className="absolute left-1/2 -ml-0.5 h-3 w-1 bg-primary animate-roadmap-flow"
            style={{ animationDelay: "0s" }}
          ></span>
          <span
            className="absolute left-1/2 -ml-0.5 h-3 w-1 bg-primary animate-roadmap-flow"
            style={{ animationDelay: "1.5s" }}
          ></span>
          <span
            className="absolute left-1/2 -ml-0.5 h-3 w-1 bg-primary animate-roadmap-flow"
            style={{ animationDelay: "3s" }}
          ></span>
        </div>

        <div className="space-y-12">
          {experienceData.map((exp, index) => (
            <div key={index} className="timeline-item relative group">
              <div
                className={cn(
                  "flex items-center",
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                )}
              >
                <div
                  className={cn(
                    "md:w-5/12",
                    index % 2 === 0 ? "md:text-left" : "md:text-right"
                  )}
                >
                  <Card
                    className="relative overflow-hidden bg-card/80 backdrop-blur-sm border-accent/20 hover:border-accent transition-colors duration-300 cursor-pointer"
                    onClick={() => setSelectedExperience(exp)}
                  >
                    <div
                      className="absolute bottom-0 right-0 h-full w-full opacity-50"
                      aria-hidden="true"
                    >
                      <HexagonIcon className="absolute w-32 h-auto text-accent/10 -right-10 -bottom-10" />
                      <HexagonIcon
                        className="absolute w-24 h-auto text-accent/20 animate-pulse-slow"
                        style={{
                          bottom: "20%",
                          right: "40%",
                          animationDelay: "1s",
                        }}
                      />
                    </div>
                    <CardHeader className="relative">
                      <p className="text-sm text-muted-foreground">
                        {exp.period}
                      </p>
                      <CardTitle className="font-headline text-primary">
                        {exp.role}
                      </CardTitle>
                      <CardDescription>{exp.company}</CardDescription>
                    </CardHeader>
                  </Card>
                </div>
                <div className="hidden md:block w-2/12" />
                <div className="absolute left-1/2 -translate-x-1/2 z-10">
                  <div
                    className="relative w-16 h-[69px] flex items-center justify-center animate-cyber-glow cursor-pointer"
                    onClick={() => setSelectedExperience(exp)}
                  >
                    <HexagonIcon className="absolute inset-0 w-full h-full text-primary/80 group-hover:text-primary transition-colors" />
                    <Briefcase className="relative w-5 h-5 text-primary-foreground" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog
        open={!!selectedExperience}
        onOpenChange={(isOpen) => !isOpen && setSelectedExperience(null)}
      >
        <DialogContent className="max-w-2xl bg-card border-border">
          {selectedExperience && (
            <>
              <DialogHeader>
                <DialogTitle className="font-headline text-2xl text-primary">
                  {selectedExperience.role}
                </DialogTitle>
                <div className="text-sm text-muted-foreground space-y-1 pt-1">
                  <div className="flex items-center gap-2">
                    <Briefcase className="h-4 w-4" />
                    <span>
                      {selectedExperience.company} &middot;{" "}
                      {selectedExperience.location}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{selectedExperience.period}</span>
                  </div>
                </div>
              </DialogHeader>

              <p className="mt-4 text-foreground/80">
                {selectedExperience.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {selectedExperience.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
