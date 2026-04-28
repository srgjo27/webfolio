import { useRef, useState, useMemo } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { experienceData } from "@/constants/experience-data";
import { ExperienceItem } from "@/types/experience";

export function useExperience() {
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
          "-=0.5",
        )
        .from(
          ".timeline-card",
          {
            opacity: 0,
            x: (index) => (index % 2 === 0 ? -50 : 50),
            stagger: 0.2,
            clearProps: "all",
          },
          "-=0.8",
        )
        .from(
          ".timeline-marker",
          {
            scale: 0,
            opacity: 0,
            stagger: 0.2,
            ease: "back.out(1.7)",
          },
          "-=1.0",
        );
    },
    { scope: container },
  );

  return {
    container,
    selectedExperience,
    sortedExperience,
    setSelectedExperience,
  };
}
