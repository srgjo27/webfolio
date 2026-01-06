"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { Hash } from "lucide-react";
import { ExperienceDetailDialog } from "@/components/experience/experience-detail-dialog";
import { ExperienceCard } from "@/components/experience/experience-card";
import { experienceData } from "@/constant/experience-data";
import { ExperienceItem } from "@/types/experience";
import { useMemo } from "react";

export default function ExperiencePage() {
  const container = useRef<HTMLDivElement>(null);
  const [selectedExperience, setSelectedExperience] = useState<ExperienceItem | null>(null);

  const sortedExperience = useMemo(() => {
    return [...experienceData].sort((a, b) => {
      const getStartDate = (period: string) => {
        const startDateStr = period.split("-")[0].trim();
        return new Date(startDateStr).getTime();
      };

      return getStartDate(b.period) - getStartDate(a.period);
    });
  }, []);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 0.8 },
      });

      tl.from(".page-header", { opacity: 0, y: -20 })
        .from(
          ".timeline-track",
          { scaleY: 0, transformOrigin: "top", duration: 1 },
          "-=0.5"
        )
        .from(
          ".timeline-card",
          {
            opacity: 0,
            x: (index) => (index % 2 === 0 ? -50 : 50),
            stagger: 0.2,
            clearProps: "all",
          },
          "-=0.8"
        )
        .from(
          ".timeline-marker",
          {
            scale: 0,
            opacity: 0,
            stagger: 0.2,
            ease: "back.out(1.7)",
          },
          "-=1.0"
        );
    },
    { scope: container }
  );

  return (
    <div className="min-h-screen p-4 md:p-8 pt-6 pb-24" ref={container}>
      {/* Header */}
      <div className="page-header flex flex-col gap-2 mb-12">
        <div className="flex items-center gap-3">
          <Hash className="w-8 h-8 text-primary animate-pulse" />
          <h1 className="text-4xl font-bold font-headline tracking-tight bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-300% animate-gradient">
            MISSION LOGS
          </h1>
        </div>
        <p className="text-muted-foreground font-code text-sm pl-1 border-l-2 border-accent/30">
          // ARCHIVE: CAREER_HISTORY_V1.0 <br />
          // ACCESS LEVEL: UNRESTRICTED
        </p>
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Central Timeline Track */}
        <div
          className="timeline-track absolute left-[20px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/0 via-primary/50 to-primary/0 md:-ml-[1px]"
          aria-hidden="true"
        />

        <div className="space-y-12">
          {sortedExperience.map((exp, index) => (
            <ExperienceCard
              key={index}
              experience={exp}
              index={index}
              onClick={setSelectedExperience}
            />
          ))}
        </div>
      </div>

      {/* Detail Dialog */}
      <ExperienceDetailDialog
        experience={selectedExperience}
        onClose={() => setSelectedExperience(null)}
      />
    </div>
  );
}
