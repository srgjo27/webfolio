"use client";

import { Badge } from "@/components/ui/badge";
import type { SkillItem } from "@/constants/home-data";

export function SkillBadge({ skill }: { skill: SkillItem }) {
  return (
    <Badge
      variant="outline"
      className="group relative overflow-visible transition-all duration-300 
                 hover:scale-105 hover:z-10
                 bg-gradient-to-r from-black/60 to-black/40 
                 border-2 border-primary/30 hover:border-primary
                 flex items-center gap-2 px-3 py-2 clip-corner-cut
                 hover:glow-green font-mono-cyber"
    >
      {/* Memory Chip Notch */}
      <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-3 h-1 bg-card border-t-2 border-x-2 border-primary/50" />

      {/* Icon */}
      <skill.icon
        className="h-4 w-4 flex-shrink-0 transition-transform duration-300 
                            group-hover:scale-125 relative z-10"
      />

      {/* Name */}
      <span
        className="text-xs font-bold text-foreground/90 group-hover:text-primary 
                       uppercase tracking-wide transition-colors"
      >
        {skill.name}
      </span>

      {/* Circuit Lines */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
      </div>

      {/* Corner Dots */}
      <div className="absolute top-0.5 left-0.5 w-1 h-1 bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="absolute top-0.5 right-0.5 w-1 h-1 bg-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="absolute bottom-0.5 left-0.5 w-1 h-1 bg-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="absolute bottom-0.5 right-0.5 w-1 h-1 bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
    </Badge>
  );
}
