"use client";

import Image from "next/image";
import { Project } from "@/types/project";
import { Badge } from "@/components/ui/badge";
import { Search, Code2, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
    project: Project;
    onClick: (project: Project) => void;
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
    return (
        <div
            className="group relative h-full cursor-pointer"
            onClick={() => onClick(project)}
        >
            <div
                className={cn(
                    "relative h-full overflow-hidden rounded-xl border border-primary/20 bg-card/40 backdrop-blur-sm transition-all duration-500",
                    "hover:border-accent hover:bg-card/60 hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.3)]",
                    "project-card"
                )}
            >
                {/* Holographic Scanline Effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent skew-y-12 translate-y-[-200%] group-hover:animate-scan-fast pointer-events-none z-10" />

                {/* Image Container */}
                <div className="relative aspect-video w-full overflow-hidden border-b border-primary/10">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        data-ai-hint={project.imageHint}
                    />
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />

                    {/* Click Indicator */}
                    <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-2 group-hover:translate-x-0">
                        <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/50 backdrop-blur-md flex items-center justify-center">
                            <ArrowUpRight className="w-5 h-5 text-accent" />
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4 relative z-10">
                    {/* Header */}
                    <div className="flex justify-between items-start">
                        <h3 className="text-xl font-bold font-headline text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-1">
                            {project.title}
                        </h3>
                        <span className="text-xs font-code text-accent/80 whitespace-nowrap bg-accent/5 px-2 py-1 rounded border border-accent/10">
                            {project.period}
                        </span>
                    </div>

                    <p className="text-sm text-muted-foreground line-clamp-2 font-mono leading-relaxed">
                        {project.shortDescription}
                    </p>

                    {/* Tech Stack Previews */}
                    <div className="flex flex-wrap gap-2 pt-2">
                        {project.tags.slice(0, 3).map((tag) => (
                            <Badge
                                key={tag}
                                variant="outline"
                                className="border-primary/20 bg-primary/5 text-primary/70 font-code text-[10px] px-2 py-0.5"
                            >
                                {tag}
                            </Badge>
                        ))}
                        {project.tags.length > 3 && (
                            <span className="text-[10px] px-2 py-0.5 text-muted-foreground font-code">
                                +{project.tags.length - 3} params
                            </span>
                        )}
                    </div>

                    {/* View Details Prompt */}
                    <div className="flex items-center gap-2 text-xs font-bold text-accent opacity-60 group-hover:opacity-100 transition-opacity duration-300 pt-2">
                        <Code2 className="w-3 h-3" />
                        <span>INSPECT SYSTEM</span>
                        <div className="h-[1px] flex-1 bg-gradient-to-r from-accent/50 to-transparent" />
                    </div>

                </div>
            </div>
        </div>
    );
}
