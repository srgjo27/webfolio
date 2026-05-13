"use client";

import { ProfileCard } from "@/components/home/profile-card";
import { TechStackCard } from "@/components/home/tech-stack-card";
import { useHome } from "@/hooks/use-home";

export default function Home() {
  const { mainRef, drips, footerBarcode } = useHome();

  return (
    <div className="relative flex-1 min-h-screen" ref={mainRef}>
      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-5 z-0">
        <div className="tech-grid absolute inset-0" />
        {drips.map((drip, i) => (
          <div
            key={i}
            className="absolute text-primary font-mono-cyber text-xs animate-drip-long"
            style={{
              left: drip.left,
              animationDelay: drip.delay,
              animationDuration: drip.duration,
            }}
          >
            {drip.text}
          </div>
        ))}
      </div>

      <div className="relative z-10 space-y-8 p-4 md:p-8">
        <header className="flex items-center justify-between">
          <div className="relative">
            <h1
              className="text-3xl font-black tracking-tight uppercase text-primary 
                           text-glow-green font-mono-cyber"
            >
              &lt;Home /&gt;
            </h1>
          </div>

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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
          <div
            className="hidden lg:block absolute top-1/2 left-[66%] w-px h-32 
                          bg-linear-to-b from-transparent via-primary/30 to-transparent pointer-events-none"
          />
          <div className="lg:col-span-2">
            <ProfileCard />
          </div>
          <div>
            <TechStackCard />
          </div>
        </div>

        <div className="flex items-center justify-between pt-8 border-t border-primary/20">
          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              {footerBarcode.map((height, i) => (
                <div key={i} className="w-1 bg-primary/30" style={{ height }} />
              ))}
            </div>
            <span className="text-[10px] font-mono-cyber text-muted-foreground uppercase">
              Portfolio.System v3.0
            </span>
          </div>

          <div className="text-[10px] font-mono-cyber text-cyan-400">
            &copy; 2024 // All_Rights_Reserved
          </div>
        </div>
      </div>
    </div>
  );
}
