"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code } from "lucide-react";
import { SkillBadge } from "./skill-badge";
import {
  PROGRAMMING_LANGUAGES,
  TECHNOLOGIES,
  ALL_SKILLS,
} from "@/constants/home-data";

export function TechStackCard() {
  return (
    <Card
      className="tech-stack-card relative overflow-hidden bg-card/50 backdrop-blur-md 
                     border-2 border-primary/30 clip-chamfer glow-green"
    >
      {/* Tech Grid Background */}
      <div className="absolute inset-0 tech-grid opacity-20" />

      {/* Animated Scan Line */}
      <div className="absolute inset-0 scan-line pointer-events-none" />

      {/* Corner Brackets */}
      <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-primary pointer-events-none" />
      <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-cyan-400 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-cyan-400 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-primary pointer-events-none" />

      {/* Binary Decoration */}
      <div className="absolute top-2 right-2 font-mono-cyber text-[8px] text-primary/20 leading-tight pointer-events-none">
        11010110
        <br />
        10101011
      </div>

      <CardHeader className="relative z-10 pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative p-2 border-2 border-primary/50 clip-chamfer-sm glow-green">
              <Code className="h-5 w-5 text-primary" />
            </div>
            <div>
              <CardTitle className="font-black text-xl text-primary uppercase tracking-tight">
                Tech_Stack
              </CardTitle>
              <div className="h-[2px] w-20 bg-gradient-to-r from-primary to-cyan-400 mt-1" />
            </div>
          </div>

          {/* System Status Indicator */}
          <div className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
            <div
              className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"
              style={{ animationDelay: "0.3s" }}
            />
            <div
              className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"
              style={{ animationDelay: "0.6s" }}
            />
          </div>
        </div>

        <p className="text-xs font-mono-cyber text-muted-foreground mt-3 uppercase tracking-wider">
          <span className="text-cyan-400">&gt;&gt;</span>{" "}
          System.Libraries.Loaded
        </p>
      </CardHeader>

      <CardContent className="relative z-10 space-y-6">
        {/* Programming Languages Section */}
        <div className="relative">
          <div className="flex items-center gap-2 mb-3 px-2 py-1 border-l-4 border-primary bg-primary/10 clip-corner-cut">
            <div className="w-2 h-2 bg-primary animate-cyber-flicker" />
            <h4 className="text-xs font-black font-mono-cyber text-primary uppercase tracking-widest">
              [Core_Languages]
            </h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {PROGRAMMING_LANGUAGES.map((skill: any) => (
              <SkillBadge key={skill.name} skill={skill} />
            ))}
          </div>
        </div>

        {/* Divider - Terminal Style */}
        <div className="relative py-3">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t-2 border-dashed border-primary/20" />
          </div>
          <div className="relative flex justify-center">
            <span
              className="bg-card px-3 py-1 border-2 border-cyan-400/30 clip-chamfer-sm 
                           font-mono-cyber text-[10px] text-cyan-400 uppercase tracking-widest"
            >
              // Frameworks
            </span>
          </div>
        </div>

        {/* Technologies Section */}
        <div className="relative">
          <div className="flex items-center gap-2 mb-3 px-2 py-1 border-l-4 border-cyan-400 bg-cyan-400/10 clip-corner-cut">
            <div
              className="w-2 h-2 bg-cyan-400 animate-cyber-flicker"
              style={{ animationDelay: "0.3s" }}
            />
            <h4 className="text-xs font-black font-mono-cyber text-cyan-400 uppercase tracking-widest">
              [Tech_&_Tools]
            </h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {TECHNOLOGIES.map((skill: any) => (
              <SkillBadge key={skill.name} skill={skill} />
            ))}
          </div>
        </div>

        {/* Skill Level Indicator - Futuristic Progress */}
        <div className="relative mt-6 p-4 border-2 border-primary/20 clip-corner-cut bg-black/20">
          <div className="flex justify-between items-center mb-2">
            <span className="text-[10px] font-mono-cyber text-muted-foreground uppercase tracking-widest">
              Proficiency_Level
            </span>
            <span className="text-xs font-black font-mono-cyber text-primary">
              EXPERT
            </span>
          </div>

          {/* Progress Bar */}
          <div className="relative h-2 bg-card border border-primary/30 overflow-hidden">
            <div className="absolute inset-0 flex">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className={`flex-1 border-r border-primary/20 ${
                    i < 16
                      ? "bg-gradient-to-t from-primary to-cyan-400"
                      : "bg-transparent"
                  }`}
                  style={{
                    animationDelay: `${i * 0.05}s`,
                  }}
                />
              ))}
            </div>
            {/* Scanning Effect */}
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-primary/50 to-transparent animate-pulse" />
          </div>

          {/* Stats */}
          <div className="flex justify-between mt-2 text-[8px] font-mono-cyber text-muted-foreground">
            <span>80% Complete</span>
            <span>{ALL_SKILLS.length} Skills Loaded</span>
          </div>
        </div>

        {/* System Info Footer */}
        <div className="flex items-center justify-between pt-2 border-t border-primary/20">
          <div className="flex items-center gap-2">
            <div className="w-1 h-1 bg-primary" />
            <span className="text-[8px] font-mono-cyber text-muted-foreground uppercase">
              System.Status: Operational
            </span>
          </div>
          <div className="text-[8px] font-mono-cyber text-cyan-400">
            v2.0.25
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
