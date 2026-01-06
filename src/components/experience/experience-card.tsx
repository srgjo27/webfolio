"use client";

import { Briefcase, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { ExperienceItem } from "@/types/experience";

interface ExperienceCardProps {
    experience: ExperienceItem;
    index: number;
    onClick: (experience: ExperienceItem) => void;
}

export function ExperienceCard({ experience, index, onClick }: ExperienceCardProps) {
    const isEven = index % 2 === 0;

    return (
        <div
            className={cn(
                "timeline-card relative flex flex-col md:flex-row gap-8 items-start md:items-center group",
                isEven ? "md:flex-row-reverse" : ""
            )}
        >
            {/* Timeline Marker */}
            <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 md:translate-x-[-50%] top-8 md:top-1/2 md:-translate-y-1/2 z-10 timeline-marker">
                <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-background border-2 border-primary/30 group-hover:border-accent group-hover:shadow-[0_0_15px_hsl(var(--accent)/0.5)] transition-all duration-500">
                    <div className="w-3 h-3 rounded-full bg-primary group-hover:bg-accent transition-colors duration-300" />
                    <div className="absolute inset-0 rounded-full border border-primary/20 animate-ping opacity-20" />
                </div>
            </div>

            {/* Content Card */}
            <div
                className={cn(
                    "ml-12 md:ml-0 md:w-[calc(50%-40px)] w-full relative",
                    isEven ? "md:text-left" : "md:text-right"
                )}
            >
                <div
                    className="relative group/card cursor-pointer overflow-hidden rounded-xl border border-primary/10 bg-card/40 backdrop-blur-sm p-6 hover:border-accent/40 hover:bg-card/60 transition-all duration-300 shadow-lg hover:shadow-accent/10"
                    onClick={() => onClick(experience)}
                >
                    {/* Decorators */}
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-accent/30 opacity-20 group-hover/card:opacity-100 transition-opacity duration-300" />

                    {/* Header Info */}
                    <div
                        className={cn(
                            "flex flex-col gap-1 mb-4",
                            !isEven && "md:items-end"
                        )}
                    >
                        <span className="font-code text-xs text-accent tracking-widest uppercase">
                            {experience.period}
                        </span>
                        <h3 className="text-xl font-bold font-headline text-foreground group-hover/card:text-primary transition-colors">
                            {experience.role}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Briefcase className="w-3 h-3" />
                            {experience.company}
                        </div>
                    </div>

                    {/* Short Desc (Truncated) */}
                    <p className="text-sm text-muted-foreground/80 line-clamp-3 mb-4 font-mono leading-relaxed">
                        {experience.description}
                    </p>

                    {/* Tags Preview */}
                    <div
                        className={cn(
                            "flex flex-wrap gap-2",
                            !isEven && "md:justify-end"
                        )}
                    >
                        {experience.tags.slice(0, 3).map((tag) => (
                            <span
                                key={tag}
                                className="text-[10px] px-2 py-0.5 rounded-full border border-primary/20 bg-primary/5 text-primary/70"
                            >
                                {tag}
                            </span>
                        ))}
                        {experience.tags.length > 3 && (
                            <span className="text-[10px] px-2 py-0.5 text-muted-foreground">
                                +{experience.tags.length - 3}
                            </span>
                        )}
                    </div>

                    {/* View Details Prompt */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-[2px] opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
                        <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-accent/50 bg-background/80 text-accent font-code text-sm">
                            <Search className="w-4 h-4" />
                            <span>DECRYPT DATA</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Spacer for structure */}
            <div className="hidden md:block md:w-[calc(50%-40px)]" />
        </div>
    );
}
