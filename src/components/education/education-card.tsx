"use client";

import { EducationItem } from "@/types/education";
import Image from "next/image";
import { GraduationCap, Calendar, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface EducationCardProps {
    education: EducationItem;
    index: number;
}

export function EducationCard({ education, index }: EducationCardProps) {
    return (
        <div className="group relative h-full">
            <div
                className={cn(
                    "relative h-full overflow-hidden rounded-xl border border-primary/20 bg-card/40 backdrop-blur-sm p-6 transition-all duration-500",
                    "hover:border-accent hover:bg-card/60 hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.3)]",
                    "education-card"
                )}
            >
                {/* Holographic Scanline Effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent skew-y-12 translate-y-[-200%] group-hover:animate-scan-fast pointer-events-none" />

                {/* Corner Decorators */}
                <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-primary/30 rounded-tl-xl group-hover:border-accent transition-colors duration-500" />
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-primary/30 rounded-br-xl group-hover:border-accent transition-colors duration-500" />

                {/* Content Header */}
                <div className="flex flex-col md:flex-row gap-6 relative z-10 mb-6">
                    {/* Logo Frame */}
                    <div className="relative shrink-0">
                        <div className="w-20 h-20 rounded-lg bg-black/40 border border-primary/30 flex items-center justify-center relative overflow-hidden group-hover:border-accent transition-colors duration-500">
                            {education.logo ? (
                                <Image
                                    src={education.logo}
                                    alt={`${education.institution} Logo`}
                                    width={48}
                                    height={48}
                                    className="object-contain w-12 h-12 relative z-10 opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                                />
                            ) : (
                                <GraduationCap className="h-10 w-10 text-primary group-hover:text-accent transition-colors duration-300" />
                            )}
                            {/* Logo BG Glow */}
                            <div className="absolute inset-0 bg-primary/10 group-hover:bg-accent/10 transition-colors duration-500" />
                        </div>
                        {/* Tech Connector Line */}
                        <div className="absolute top-1/2 -right-6 w-6 h-[1px] bg-primary/30 hidden md:block group-hover:bg-accent transition-colors duration-500" />
                    </div>

                    {/* Title Info */}
                    <div className="flex-1 space-y-2">
                        <div className="flex items-center gap-2 text-xs font-code text-accent tracking-widest uppercase">
                            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                            MODULE_0{index + 1}
                        </div>
                        <h3 className="text-2xl font-bold font-headline text-foreground group-hover:text-primary transition-colors duration-300">
                            {education.institution}
                        </h3>
                        <p className="text-lg text-primary/80 font-medium">
                            {education.degree}
                        </p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground font-mono">
                            <Calendar className="w-4 h-4 text-accent" />
                            <span>{education.period}</span>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-primary/20 to-transparent my-6 group-hover:via-accent/40 transition-all duration-500" />

                {/* Details List */}
                <ul className="space-y-3 relative z-10">
                    {education.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-3 group/item">
                            <CheckCircle2 className="w-5 h-5 text-primary/40 shrink-0 mt-0.5 group-hover/item:text-accent transition-colors duration-300" />
                            <span className="text-sm text-foreground/70 font-mono leading-relaxed group-hover/item:text-foreground/90 transition-colors duration-300">
                                {detail}
                            </span>
                        </li>
                    ))}
                </ul>

            </div>
        </div>
    );
}
