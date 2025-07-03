'use client';

import { Card, CardContent, CardHeader, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScramblingText } from "@/components/ui/scrambling-text";


const HexagonIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 86.6 100" fill="currentColor" {...props}>
    <polygon points="43.3,0 86.6,25 86.6,75 43.3,100 0,75 0,25" />
  </svg>
);

const experienceData = [
  {
    role: "Front End Developer",
    company: "PT. Bank Raya Indonesia",
    period: "Sep 2024 - Present",
    description: "Developed Raya's digital banking application with Flutter, implemented MVVM architecture and efficient state management, and integrated WebView components to seamlessly display dynamic web modules within the application. Integrating endpoints with the user interface to ensure application functionality. Optimized application performance and performed code debugging and maintenance. Collaborate with Backend team, QA and UI/UX designers to align design and functionality. Followed the Scrum methodology within the SDLC, participating in sprint planning, daily stand-ups, reviews, and retrospectives. Utilized Jira for task and sprint management, and Confluence for documentation and knowledge sharing.",
    tags: ["Flutter", "Mobile Development", "MVVM", "staked", "API Integration", "Performance Optimization", "Scrum", "Jira", "Confluence"],
  },
  {
    role: "Software Engineer",
    company: "PT. Indonesia AirAsia",
    period: "Feb 2024 - Jul 2024",
    description: "Designed and developed AIRMASTER Super App, an internal application based on Flutter and Firebase, which successfully improved the operational efficiency of teams across the company. Spearheaded the implementation of clean code standards and ran proactive security tests, which significantly reduced the number of bugs before release and strengthened application stability. Integrated advanced security protocols to protect user data, ensuring compliance with mobile security best practices and maintain data integrity. Actively collaborated in cross-functional teams to accelerate application development cycles, directly contributing to AirAsia's digital transformation strategic initiatives.",
    tags: ["Flutter", "Firebase", "Mobile Development", "Clean Code", "Security"],
  },
  {
    role: "Mobile Developer",
    company: "EGOV Center",
    period: "Aug 2023 - Dec 2023",
    description: "Developed a Drinking Water Retribution Recording application that improved work efficiency by 30% and a Tourism App for over 1,000 users. I demonstrated expertise in Flutter and Git, integrating with REST APIs to increase functionality efficiency by 50%. Key features implemented include QR code payments, complaint handling, thermal printer integration for faster invoicing, and Google Maps API for enhanced navigation, resulting in a significant boost in user satisfaction and transaction speed.",
    tags: ["Flutter", "REST API", "Git", "Google Maps API", "Mobile Development"],
  }
];

export default function ExperiencePage() {
  const main = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 0.7 } });

    tl.from('.experience-title', { opacity: 0, x: -30 })
      .from('.experience-card', {
        opacity: 0,
        y: 40,
        stagger: 0.2
      }, '-=0.5');

  }, { scope: main });

  return (
    <div className="flex-1 space-y-8 p-4 md:p-8 pt-6" ref={main}>
      <div className="flex items-center justify-between space-y-2">
        <h2 className="experience-title text-3xl font-bold tracking-tight font-headline">Work Experience</h2>
      </div>
      <div className="space-y-6">
        {experienceData.map((exp, index) => (
          <Card key={index} className="experience-card relative overflow-hidden hover:shadow-lg hover:shadow-primary/10">
            <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
              <HexagonIcon className="absolute w-32 h-auto text-primary/5 -right-8 -bottom-8" />
              <HexagonIcon className="absolute w-20 h-auto text-primary/10 right-4 bottom-16" />
            </div>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <ScramblingText text={exp.role} className="text-2xl font-headline text-primary" />
                  <CardDescription className="text-lg">{exp.company}</CardDescription>
                </div>
                <p className="text-sm text-muted-foreground">{exp.period}</p>
              </div>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.tags.map(tag => <Badge key={tag} variant="outline">{tag}</Badge>)}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
