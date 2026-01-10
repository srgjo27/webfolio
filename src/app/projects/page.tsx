"use client";

import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { FolderOpen } from "lucide-react";
import { ProjectCard } from "@/components/projects/project-card";
import { ProjectDialog } from "@/components/projects/project-dialog";
import { projectsData } from "@/constant/projects-data";
import { Project } from "@/types/project";

export default function ProjectsPage() {
  const container = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 0.8 },
      });

      tl.from(".page-header", { opacity: 0, y: -20 })
        .from(
          ".project-card",
          {
            opacity: 0,
            y: 30,
            scale: 0.95,
            stagger: 0.15,
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
          <FolderOpen className="w-8 h-8 text-primary animate-pulse" />
          <h1 className="text-4xl font-bold font-headline tracking-tight bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-300% animate-gradient">
            PROJECT OPERATIONS
          </h1>
        </div>
        <div className="flex items-center gap-4 text-muted-foreground font-code text-sm pl-1 border-l-2 border-accent/30">
          <span>// DEPLOYED_SYSTEMS: {projectsData.length}</span>
          <span className="w-1 h-1 rounded-full bg-accent/50" />
          <span>STATUS: OPERATIONAL</span>
        </div>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            onClick={setSelectedProject}
          />
        ))}
      </div>

      {/* Dialog */}
      <ProjectDialog
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

    </div>
  );
}
