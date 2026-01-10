"use client";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GitHubButton } from "@/components/ui/github-button";
import { Project } from "@/types/project";
import Image from "next/image";
import { CheckCircle2, Terminal } from "lucide-react";

interface ProjectDialogProps {
    project: Project | null;
    onClose: () => void;
}

export function ProjectDialog({ project, onClose }: ProjectDialogProps) {
    return (
        <Dialog open={!!project} onOpenChange={(isOpen) => !isOpen && onClose()}>
            <DialogContent className="max-w-4xl bg-black/90 border-accent/20 backdrop-blur-xl p-0 overflow-hidden gap-0 shadow-2xl shadow-accent/10 sm:max-h-[90vh] overflow-y-auto">
                {project && (
                    <div className="flex flex-col md:flex-row h-full">
                        {/* Left Column: Visuals */}
                        <div className="w-full md:w-2/5 bg-muted/10 relative min-h-[300px] md:min-h-full border-r border-accent/10">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover opacity-60"
                                data-ai-hint={project.imageHint}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                            <div className="absolute bottom-6 left-6 right-6 space-y-4">
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <Badge key={tag} className="bg-primary/20 text-primary hover:bg-primary/30 border-primary/20">
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Details */}
                        <div className="w-full md:w-3/5 p-6 md:p-8 flex flex-col">
                            <DialogHeader className="mb-6">
                                <div className="flex items-center gap-2 mb-2 text-accent font-code text-xs uppercase tracking-widest">
                                    <Terminal className="w-4 h-4" />
                                    <span>System Architecture // {project.period}</span>
                                </div>
                                <DialogTitle className="font-headline text-3xl text-foreground">
                                    {project.title}
                                </DialogTitle>
                                <p className="text-muted-foreground font-mono text-sm leading-relaxed mt-2">
                                    {project.shortDescription}
                                </p>
                            </DialogHeader>

                            {/* Details List */}
                            <div className="flex-1 space-y-6">
                                <h4 className="font-bold text-primary uppercase tracking-wider text-sm border-b border-primary/20 pb-2">
                                    Key Operations
                                </h4>
                                <ul className="space-y-3">
                                    {project.details.map((detail, i) => (
                                        <li key={i} className="flex items-start gap-3 group/item text-sm text-foreground/80">
                                            <CheckCircle2 className="w-4 h-4 text-primary/50 mt-1 shrink-0 group-hover/item:text-accent transition-colors" />
                                            <span>{detail}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Actions */}
                            <div className="mt-8 pt-6 border-t border-accent/10 flex items-center gap-4">
                                {project.github && (
                                    <GitHubButton githubUrl={project.github} />
                                )}
                                {/* Could add Live Demo button here if available in types */}
                            </div>

                        </div>
                    </div>
                )}
            </DialogContent>
        </Dialog>
    );
}
