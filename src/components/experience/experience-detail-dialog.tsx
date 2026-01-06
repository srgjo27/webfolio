"use client";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { ExperienceItem } from "@/types/experience";

interface ExperienceDetailDialogProps {
    experience: ExperienceItem | null;
    onClose: () => void;
}

export function ExperienceDetailDialog({ experience, onClose }: ExperienceDetailDialogProps) {
    return (
        <Dialog
            open={!!experience}
            onOpenChange={(isOpen) => !isOpen && onClose()}
        >
            <DialogContent className="max-w-2xl bg-black/90 border-accent/20 backdrop-blur-xl p-0 overflow-hidden gap-0 shadow-2xl shadow-accent/10">
                {experience && (
                    <div className="flex flex-col">
                        {/* Dialog Header */}
                        <div className="p-6 border-b border-accent/10 bg-accent/5 relative">
                            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
                            <DialogHeader>
                                <DialogTitle className="font-headline text-2xl text-foreground flex items-center gap-2">
                                    <span className="text-accent">#</span> {experience.role}
                                </DialogTitle>
                                <div className="flex flex-col gap-2 mt-2 text-sm text-muted-foreground font-code">
                                    <div className="flex items-center gap-2">
                                        <Briefcase className="w-4 h-4 text-primary" />
                                        <span className="text-foreground/80">
                                            {experience.company}
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center w-full">
                                        <div className="flex items-center gap-2">
                                            <MapPin className="w-4 h-4 text-primary" />
                                            <span>{experience.location}</span>
                                        </div>
                                        <div className="flex items-center gap-2 px-2 py-1 rounded bg-secondary/50 text-xs">
                                            <Calendar className="w-3 h-3" />
                                            <span>{experience.period}</span>
                                        </div>
                                    </div>
                                </div>
                            </DialogHeader>
                        </div>

                        {/* Dialog Body */}
                        <div className="p-6 space-y-6">
                            <div className="font-mono text-sm leading-relaxed text-muted-foreground">
                                <p className="mb-4 text-xs font-bold text-accent uppercase tracking-widest">
                  // MISSION_REPORT
                                </p>
                                {experience.description}
                            </div>

                            <div className="space-y-3">
                                <p className="text-xs font-bold text-primary uppercase tracking-widest">
                  // SKILL_MATRIX
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {experience.tags.map((tag) => (
                                        <Badge
                                            key={tag}
                                            variant="outline"
                                            className="border-primary/20 bg-primary/5 text-primary/80 hover:bg-primary/10 transition-colors"
                                        >
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Footer Decoration */}
                        <div className="h-2 w-full bg-gradient-to-r from-accent/0 via-accent/20 to-accent/0" />
                    </div>
                )}
            </DialogContent>
        </Dialog>
    );
}
