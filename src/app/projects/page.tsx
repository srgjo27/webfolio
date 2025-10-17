"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { Dialog } from "@/components/ui/dialog";
import { ProjectCard } from "@/components/ui/project-card";
import { ProjectDialog } from "@/components/ui/project-dialog";
import { projectsData } from "@/constant/projects-data";

export default function ProjectsPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const timeline = gsap.timeline({
        defaults: { ease: "power3.out", duration: 0.7 },
      });

      timeline
        .from(".projects-title", {
          opacity: 0,
          x: -30,
        })
        .from(
          ".project-card",
          {
            opacity: 0,
            y: 40,
            stagger: 0.2,
          },
          "-=0.5"
        );
    },
    { scope: containerRef }
  );

  return (
    <div className="flex-1 space-y-8 p-4 md:p-8 pt-6" ref={containerRef}>
      <PageHeader />
      <ProjectGrid />
    </div>
  );
}

const PageHeader = () => (
  <div className="flex items-center justify-between space-y-2">
    <h2 className="projects-title text-3xl font-bold tracking-tight font-headline">
      Projects
    </h2>
  </div>
);

const ProjectGrid = () => (
  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
    {projectsData.map((project, index) => (
      <div key={project.title} className="project-card">
        <Dialog>
          <ProjectCard project={project} />
          <ProjectDialog project={project} />
        </Dialog>
      </div>
    ))}
  </div>
);
