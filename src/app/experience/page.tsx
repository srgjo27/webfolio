"use client";

import { Hash } from "lucide-react";
import { ExperienceDetailDialog } from "@/components/experience/experience-detail-dialog";
import { ExperienceCard } from "@/components/experience/experience-card";
import { useExperience } from "@/hooks/use-experience";

export default function ExperiencePage() {
  const {
    container,
    selectedExperience,
    sortedExperience,
    setSelectedExperience,
  } = useExperience();

  return (
    <div className="min-h-screen p-4 md:p-8 pt-6 pb-24" ref={container}>
      <div className="page-header flex flex-col gap-2 mb-12">
        <div className="flex items-center gap-3">
          <Hash className="w-8 h-8 text-primary animate-pulse" />
          <h1 className="text-4xl font-bold font-headline tracking-tight bg-linear-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-300% animate-gradient">
            MISSION LOGS
          </h1>
        </div>
        <p className="text-muted-foreground font-code text-sm pl-1 border-l-2 border-accent/30">
          // ARCHIVE: CAREER_HISTORY_V1.0 <br />
          // ACCESS LEVEL: UNRESTRICTED
        </p>
      </div>

      <div className="relative max-w-5xl mx-auto">
        <div
          className="timeline-track absolute left-[20px] md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary/0 via-primary/50 to-primary/0 md:-ml-px"
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

      <ExperienceDetailDialog
        experience={selectedExperience}
        onClose={() => setSelectedExperience(null)}
      />
    </div>
  );
}
