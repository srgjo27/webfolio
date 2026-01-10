"use client";

import { GuestbookEntry } from "@/types/guestbook";
import { cn } from "@/lib/utils";
import { User, Fingerprint } from "lucide-react";

interface GuestbookCardProps {
    entry: GuestbookEntry;
    index: number;
}

export function GuestbookCard({ entry, index }: GuestbookCardProps) {
    // Generate random "hash" for decoration
    const hash = Math.random().toString(36).substring(7).toUpperCase();

    return (
        <div className="group relative h-full">
            <div
                className={cn(
                    "relative h-full overflow-hidden rounded-lg border border-primary/10 bg-card/20 backdrop-blur-sm p-5 transition-all duration-300",
                    "hover:border-accent/50 hover:bg-card/40 hover:shadow-[0_0_20px_-5px_hsl(var(--accent)/0.2)]",
                    "guestbook-card"
                )}
            >
                {/* Holographic Scanline */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent skew-y-12 translate-y-[-200%] group-hover:animate-scan-fast pointer-events-none" />

                {/* Header */}
                <div className="flex items-center justify-between mb-4 border-b border-primary/10 pb-2">
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded bg-primary/10 flex items-center justify-center">
                            <User className="w-3 h-3 text-primary" />
                        </div>
                        <span className="font-headline text-sm font-bold text-foreground">
                            {entry.name}
                        </span>
                    </div>
                    <div className="flex items-center gap-1 text-[10px] font-code text-muted-foreground">
                        <Fingerprint className="w-3 h-3 text-accent/50" />
                        <span>ID: {hash}</span>
                    </div>
                </div>

                {/* Message */}
                <div className="relative">
                    <div className="absolute -left-3 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/20 via-primary/5 to-transparent" />
                    <p className="text-sm font-mono text-muted-foreground leading-relaxed pl-2 break-words">
                        "{entry.message}"
                    </p>
                </div>

                {/* Footer Timestamp */}
                <div className="mt-4 pt-2 flex justify-end">
                    <span className="text-[10px] font-code text-accent/60">
                        {entry.createdAt?.toDate().toLocaleDateString() || "UNKNOWN_DATE"}
                    </span>
                </div>

            </div>
        </div>
    );
}
