"use client";

import { ContactMethod } from "@/types/contact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Signal } from "lucide-react";

interface ContactCardProps {
    method: ContactMethod;
    index: number;
}

export function ContactCard({ method, index }: ContactCardProps) {
    return (
        <Link href={method.href} target="_blank" className="group relative block h-full">
            <div
                className={cn(
                    "contact-card relative h-full overflow-hidden rounded-xl border border-primary/20 bg-card/40 backdrop-blur-sm p-6 transition-all duration-500",
                    "hover:border-accent hover:bg-card/60 hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.3)]"
                )}
            >
                {/* Holographic Scanline Effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent skew-y-12 translate-y-[-200%] group-hover:animate-scan-fast pointer-events-none" />

                {/* Corner Decorators */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary/30 rounded-tr-lg group-hover:border-accent transition-colors duration-500" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary/30 rounded-bl-lg group-hover:border-accent transition-colors duration-500" />

                {/* Header Section */}
                <div className="flex items-start justify-between mb-8 relative z-10">
                    <div className="w-14 h-14 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:border-accent group-hover:bg-accent/10 transition-all duration-300">
                        <FontAwesomeIcon icon={method.icon} className="h-6 w-6 text-primary group-hover:text-accent transition-colors" />
                    </div>

                    {/* Signal Indicator */}
                    <div className="flex gap-0.5 items-end h-4">
                        <div className="w-1 h-1 bg-primary/40 rounded-sm" />
                        <div className="w-1 h-2 bg-primary/60 rounded-sm" />
                        <div className="w-1 h-3 bg-primary/80 rounded-sm" />
                        <div className="w-1 h-4 bg-primary animate-pulse rounded-sm" />
                    </div>
                </div>

                {/* Content Section */}
                <div className="space-y-4 relative z-10">
                    <div>
                        <h3 className="text-xl font-bold font-headline text-foreground group-hover:text-primary transition-colors duration-300">
                            {method.title}
                        </h3>
                        <p className="font-code text-xs text-accent mt-1 tracking-widest uppercase">
                            CHANNEL_0{index + 1}
                        </p>
                    </div>

                    <p className="text-sm font-mono text-muted-foreground truncate opacity-80 group-hover:opacity-100 transition-opacity">
                        {method.value}
                    </p>
                </div>

                {/* Action Footer */}
                <div className="mt-8 pt-4 border-t border-primary/10 flex items-center justify-between group-hover:border-accent/30 transition-colors">
                    <span className="text-xs font-bold text-primary group-hover:text-accent transition-colors uppercase tracking-wider">
                        {method.cta}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-accent group-hover:text-background transition-all duration-300 transform group-hover:rotate-45">
                        <ArrowUpRight className="w-4 h-4" />
                    </div>
                </div>

            </div>
        </Link>
    );
}
