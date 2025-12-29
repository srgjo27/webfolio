"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PROFILE_INFO } from "@/constants/home-data";

export function AvatarWithAnimation() {
  return (
    <div className="relative w-32 h-32 avatar group">
      {/* Holographic Scanner Effect */}
      <div className="absolute inset-0 border-2 border-primary/30 clip-chamfer animate-neon-pulse" />
      <div
        className="absolute inset-1 border border-cyan-400/20 clip-chamfer"
        style={{ animationDelay: "0.5s" }}
      />

      {/* Corner Brackets */}
      <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-primary" />
      <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-cyan-400" />
      <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-cyan-400" />
      <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-primary" />

      {/* Avatar */}
      <Avatar className="h-32 w-32 clip-chamfer glow-green border-2 border-primary/50">
        <AvatarImage
          src={PROFILE_INFO.avatar}
          alt={`@${PROFILE_INFO.name}`}
          data-ai-hint="professional portrait"
          className="object-cover"
        />
        <AvatarFallback className="bg-card text-primary text-2xl font-bold font-mono-cyber">
          JS
        </AvatarFallback>
      </Avatar>

      {/* Scanning Line */}
      <div className="absolute inset-0 scan-line pointer-events-none opacity-60" />

      {/* Binary Data Stream */}
      <div className="absolute -bottom-8 left-0 right-0 h-12 pointer-events-none overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute text-[8px] font-mono-cyber text-primary/40 animate-drip-long"
            style={{
              left: `${20 + i * 15}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: "3s",
            }}
          >
            {Math.random() > 0.5 ? "1" : "0"}
            {Math.random() > 0.5 ? "1" : "0"}
            {Math.random() > 0.5 ? "1" : "0"}
          </div>
        ))}
      </div>
    </div>
  );
}
