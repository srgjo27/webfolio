"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { GraduationCap } from "lucide-react";
import { EducationCard } from "@/components/education/education-card";
import { educationData } from "@/constant/education-data";

export default function EducationPage() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 0.8 },
      });

      tl.from(".page-header", { opacity: 0, y: -20 })
        .from(
          ".education-card",
          {
            opacity: 0,
            y: 30,
            scale: 0.95,
            stagger: 0.2,
            clearProps: "all",
          },
          "-=0.4"
        );
    },
    { scope: container }
  );

  return (
    <div className="min-h-screen p-4 md:p-8 pt-6 pb-24" ref={container}>
      {/* Header */}
      <div className="page-header flex flex-col gap-2 mb-12">
        <div className="flex items-center gap-3">
          <GraduationCap className="w-8 h-8 text-primary animate-pulse" />
          <h1 className="text-4xl font-bold font-headline tracking-tight bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-300% animate-gradient">
            KNOWLEDGE BASE
          </h1>
        </div>
        <div className="flex items-center gap-4 text-muted-foreground font-code text-sm pl-1 border-l-2 border-accent/30">
          <span>// SYSTEM: ACADEMIC_RECORDS</span>
          <span className="w-1 h-1 rounded-full bg-accent/50" />
          <span>STATUS: VERIFIED</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {educationData.map((edu, index) => (
          <EducationCard key={index} education={edu} index={index} />
        ))}
      </div>

      {/* Background Decorator */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] border border-primary/5 rounded-full blur-3xl -z-10 pointer-events-none" />

    </div>
  );
}
