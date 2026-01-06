"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScramblingText } from "@/components/ui/scrambling-text";
import { FolderOpen, Rocket, Monitor } from "lucide-react";
import { projectsData } from "@/constants/projects-data";
import { AvatarWithAnimation } from "./avatar-animation";
import { ContactLink } from "./contact-link";
import { SocialLinks } from "./social-links";
import { PROFILE_INFO, ROLE_TAGS, ALL_SKILLS } from "@/constants/home-data";
import { experienceData } from "@/constant/experience-data";

export function ProfileCard() {
  const totalExperience = (() => {
    const startDates = experienceData.map(exp => {
      const startDateStr = exp.period.split("-")[0].trim();
      return new Date(startDateStr).getTime();
    });

    const earliestStart = Math.min(...startDates);

    const diffInMs = Date.now() - earliestStart;
    const diffInYears = diffInMs / (1000 * 60 * 60 * 24 * 365.25);

    const years = Math.floor(diffInYears);
    return `${years.toString().padStart(2, "0")}YR`;
  })();

  const stats = [
    {
      label: "PROJECTS",
      value: projectsData.length.toString().padStart(2, "0"),
      icon: FolderOpen,
      color: "text-primary",
      glowColor: "glow-green",
    },
    {
      label: "EXPERIENCE",
      value: totalExperience,
      icon: Rocket,
      color: "text-cyan-400",
      glowColor: "glow-cyan",
    },
    {
      label: "TECH_STACK",
      value: `${ALL_SKILLS.length}+`,
      icon: Monitor,
      color: "text-primary",
      glowColor: "glow-green",
    },
  ];

  return (
    <Card
      className="profile-card relative overflow-hidden bg-card/50 backdrop-blur-md 
                     border-2 border-primary/30 clip-chamfer glow-green"
    >
      {/* Tech Grid Background */}
      <div className="absolute inset-0 tech-grid opacity-30" />

      {/* Animated Border Trace Effect */}
      <div
        className="absolute inset-0 border-2 border-cyan-400/50 clip-chamfer pointer-events-none"
        style={{ animation: "border-trace 4s linear infinite" }}
      />

      {/* Corner Brackets - HUD Style */}
      <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-primary pointer-events-none" />
      <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-cyan-400 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-cyan-400 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-primary pointer-events-none" />

      {/* Random Binary/Hex Decorations */}
      <div className="absolute top-4 left-4 font-mono-cyber text-[10px] text-primary/20 leading-tight pointer-events-none">
        01001010
        <br />
        01010011
      </div>
      <div className="absolute bottom-4 right-4 font-mono-cyber text-[10px] text-cyan-400/20 leading-tight text-right pointer-events-none">
        0xFF41
        <br />
        SYS:OK
      </div>

      {/* Status Badge - Top Right */}
      <div className="absolute top-6 right-6 z-20">
        <div
          className="flex items-center gap-2 px-4 py-2 bg-primary/10 border-2 border-primary/50 
                        clip-chamfer-sm backdrop-blur-md glow-green"
        >
          <div className="relative flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <div className="absolute w-2 h-2 bg-primary rounded-full animate-ping" />
          </div>
          <span className="text-xs font-bold font-mono-cyber text-primary uppercase tracking-wider">
            [ONLINE]
          </span>
        </div>
      </div>

      {/* ID Badge - Top Left */}
      <div className="absolute top-6 left-6 z-20">
        <div className="px-3 py-1 border-2 border-cyan-400/50 clip-chamfer-sm backdrop-blur-md">
          <span className="text-[10px] font-mono-cyber text-cyan-400">
            ID: #001
          </span>
        </div>
      </div>

      <CardHeader className="flex flex-row items-start gap-8 relative z-10 pb-6 pt-20">
        <div className="relative group">
          <AvatarWithAnimation />
        </div>

        <div className="flex-1 space-y-4">
          {/* Name with Glitch Effect */}
          <div className="profile-title relative">
            <CardTitle
              className="text-4xl font-black text-primary text-glow-green 
                                   hover:animate-glitch cursor-default uppercase tracking-tight"
            >
              {PROFILE_INFO.name}
            </CardTitle>
            <div className="absolute -bottom-1 left-0 h-[2px] w-32 bg-gradient-to-r from-primary via-cyan-400 to-transparent" />
          </div>

          {/* Title */}
          <div className="profile-subtitle">
            <ScramblingText
              text={PROFILE_INFO.title}
              className="text-xl font-bold font-mono-cyber text-cyan-400 uppercase tracking-wide"
            />
          </div>

          {/* Role Tags - Memory Chip Style */}
          <div className="flex gap-2 flex-wrap">
            {ROLE_TAGS.map((role: string, index: number) => (
              <span
                key={role}
                className="relative px-3 py-1.5 text-xs font-bold font-mono-cyber 
                             bg-gradient-to-r from-primary/20 to-cyan-400/20 
                             text-primary border-l-2 border-primary
                             hover:border-l-4 hover:from-primary/30 hover:to-cyan-400/30
                             transition-all duration-300 uppercase tracking-wider
                             clip-corner-cut"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="text-cyan-400">&#91;</span>
                {role}
                <span className="text-cyan-400">&#93;</span>
              </span>
            ))}
          </div>
        </div>
      </CardHeader>

      <CardContent className="relative z-10 space-y-6 px-8">
        {/* Description with Terminal Style */}
        <div className="relative p-4 bg-black/40 border-l-4 border-primary clip-corner-cut">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-primary font-mono-cyber text-sm">$</span>
            <span className="text-cyan-400 font-mono-cyber text-xs">
              cat about.txt
            </span>
          </div>
          <p
            className="profile-description text-sm text-foreground/90 leading-relaxed 
                        font-mono-cyber pl-4"
          >
            {PROFILE_INFO.description}
          </p>
        </div>

        {/* Stats Grid - Technical Readout Style */}
        <div className="grid grid-cols-3 gap-4 py-6 border-y-2 border-primary/20">
          {stats.map((stat) => (
            <div key={stat.label} className="group cursor-pointer">
              <div
                className={`relative p-4 border-2 ${stat.color} border-current/30 
                              clip-chamfer-sm hover:${stat.glowColor} transition-all duration-300
                              bg-black/20 backdrop-blur-sm`}
              >
                <div className="flex flex-col items-center gap-2">
                  <stat.icon
                    className={`h-6 w-6 ${stat.color} group-hover:animate-cyber-pulse`}
                  />
                  <div
                    className={`text-2xl font-black font-mono-cyber ${stat.color}`}
                  >
                    {stat.value}
                  </div>
                  <div className="text-[10px] font-mono-cyber text-muted-foreground uppercase tracking-widest">
                    {stat.label}
                  </div>
                </div>

                {/* Corner Indicators */}
                <div className="absolute top-1 left-1 w-1 h-1 bg-current" />
                <div className="absolute top-1 right-1 w-1 h-1 bg-current" />
                <div className="absolute bottom-1 left-1 w-1 h-1 bg-current" />
                <div className="absolute bottom-1 right-1 w-1 h-1 bg-current" />
              </div>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="profile-links flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4">
          <ContactLink />
          <div className="flex items-center gap-4">
            <span className="text-xs font-mono-cyber text-muted-foreground uppercase tracking-wider">
              <span className="text-cyan-400">//</span> Connect:
            </span>
            <SocialLinks />
          </div>
        </div>

        {/* Bottom Barcode Decoration */}
        <div className="absolute bottom-4 left-8 right-8 h-12 flex items-end gap-[2px] opacity-20 pointer-events-none">
          {[...Array(40)].map((_, i) => (
            <div
              key={i}
              className="bg-primary"
              style={{
                width: "2px",
                height: `${Math.random() * 40 + 10}%`,
              }}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
