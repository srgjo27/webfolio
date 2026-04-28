import { useMemo } from "react";
import { useHomeAnimation } from "./use-home-animation";
import { experienceData } from "@/constants/experience-data";
import { projectsData } from "@/constants/projects-data";
import { ALL_SKILLS } from "@/constants/home-data";
import { FolderOpen, Rocket, Monitor } from "lucide-react";

export function useHome() {
  const mainRef = useHomeAnimation();

  const totalExperience = useMemo(() => {
    const startDates = experienceData.map((exp) => {
      const startDateStr = exp.period.split("-")[0].trim();
      return new Date(startDateStr).getTime();
    });

    const earliestStart = Math.min(...startDates);
    const diffInMs = Date.now() - earliestStart;
    const diffInYears = diffInMs / (1000 * 60 * 60 * 24 * 365.25);
    const years = Math.floor(diffInYears);
    return `${years.toString().padStart(2, "0")}YR`;
  }, []);

  const stats = useMemo(
    () => [
      {
        label: "PROJECTS",
        value: projectsData.length.toString().padStart(2, "0"),
        icon: FolderOpen,
        color: "text-primary",
        glowColor: "glow-green",
      },
      {
        label: "EXPERIENCE",
        value: totalExperience,
        icon: Rocket,
        color: "text-cyan-400",
        glowColor: "glow-cyan",
      },
      {
        label: "TECH_STACK",
        value: `${ALL_SKILLS.length}+`,
        icon: Monitor,
        color: "text-primary",
        glowColor: "glow-green",
      },
    ],
    [totalExperience]
  );

  const drips = useMemo(() => {
    return [...Array(15)].map(() => ({
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${8 + Math.random() * 4}s`,
      text: Math.random().toString(2).substring(2, 10),
    }));
  }, []);

  const footerBarcode = useMemo(() => {
    return [...Array(8)].map(() => `${Math.random() * 20 + 5}px`);
  }, []);

  const cardBarcode = useMemo(() => {
    return [...Array(40)].map(() => `${Math.random() * 40 + 10}%`);
  }, []);

  return {
    mainRef,
    totalExperience,
    stats,
    drips,
    footerBarcode,
    cardBarcode,
  };
}
