"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ProfileCard } from "@/components/home/profile-card";
import { TechStackCard } from "@/components/home/tech-stack-card";
import { ANIMATION_CONFIG } from "@/constants/home-data";

export default function Home() {
  const main = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: ANIMATION_CONFIG });

      tl.from(".profile-card", { opacity: 0, y: 50, rotationX: 15 })
        .from(".avatar", { opacity: 0, scale: 0, ease: "back.out(2)" }, "-=0.4")
        .from(
          ".profile-title",
          { opacity: 0, x: -30, filter: "blur(10px)" },
          "-=0.5"
        )
        .from(".profile-subtitle", { opacity: 0, x: -30 }, "<0.1")
        .from(".profile-description", { opacity: 0, y: 20 }, "-=0.5")
        .from(
          ".profile-links > *",
          { opacity: 0, y: 20, stagger: 0.15 },
          "-=0.5"
        )
        .from(".tech-stack-card", { opacity: 0, y: 50, rotationX: 15 }, "-=0.8")
        .from(
          ".skill-badge",
          {
            opacity: 0,
            scale: 0,
            duration: 0.3,
            ease: "back.out(2)",
            stagger: { each: 0.03, from: "start" },
          },
          "-=0.5"
        );
    },
    { scope: main }
  );

  return (
    <div className="relative flex-1 min-h-screen" ref={main}>
      {/* Matrix-style Background Effect */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-5 z-0">
        <div className="tech-grid absolute inset-0" />
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-primary font-mono-cyber text-xs animate-drip-long"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
          >
            {Math.random().toString(2).substring(2, 10)}
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 space-y-8 p-4 md:p-8 pt-6">
        {/* Header */}
        <header className="flex items-center justify-between">
          <div className="relative">
            <h1
              className="text-4xl font-black tracking-tight uppercase text-primary 
                           text-glow-green font-mono-cyber"
            >
              &lt;Home /&gt;
            </h1>
            <div className="absolute -bottom-1 left-0 h-1 w-32 bg-gradient-to-r from-primary via-cyan-400 to-transparent" />
          </div>

          {/* System Status Display */}
          <div
            className="hidden md:flex items-center gap-3 px-4 py-2 border-2 border-primary/30 
                          clip-chamfer-sm bg-black/40 backdrop-blur-sm"
          >
            <div className="flex gap-1">
              {[0, 0.1, 0.2].map((delay, i) => (
                <div
                  key={i}
                  className={`w-1 h-4 ${
                    i === 1 ? "bg-cyan-400" : "bg-primary"
                  } animate-cyber-flicker`}
                  style={{ animationDelay: `${delay}s` }}
                />
              ))}
            </div>
            <span className="text-xs font-mono-cyber text-muted-foreground uppercase tracking-wider">
              System: Active
            </span>
          </div>
        </header>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
          {/* Connecting Line (desktop only) */}
          <div
            className="hidden lg:block absolute top-1/2 left-[66%] w-px h-32 
                          bg-gradient-to-b from-transparent via-primary/30 to-transparent pointer-events-none"
          />

          <div className="lg:col-span-2">
            <ProfileCard />
          </div>
          <div>
            <TechStackCard />
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-8 border-t border-primary/20">
          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="w-1 bg-primary/30"
                  style={{ height: `${Math.random() * 20 + 5}px` }}
                />
              ))}
            </div>
            <span className="text-[10px] font-mono-cyber text-muted-foreground uppercase">
              Portfolio.System v2.0
            </span>
          </div>

          <div className="text-[10px] font-mono-cyber text-cyan-400">
            &copy; {new Date().getFullYear()} // All_Rights_Reserved
          </div>
        </div>
      </div>
    </div>
  );
}
