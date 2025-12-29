"use client";

import { useState, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Fingerprint, Scan, Power } from "lucide-react";
import { cn } from "@/lib/utils";

export function EntryGate({ onUnlock }: { onUnlock: () => void }) {
  const container = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<"idle" | "scanning" | "success">("idle");
  const [scanProgress, setScanProgress] = useState(0);

  const handleInitialize = () => {
    if (status !== "idle") return;
    setStatus("scanning");
  };

  useGSAP(
    () => {
      let primaryColor = "hsl(120, 61%, 50%)";
      if (typeof window !== "undefined") {
        const docStyle = getComputedStyle(document.documentElement);
        const primaryVar = docStyle.getPropertyValue("--primary").trim();
        if (primaryVar) {
          primaryColor = `hsl(${primaryVar})`;
        }
      }

      if (status === "scanning") {
        const tl = gsap.timeline({
          onComplete: () => {
            setStatus("success");
          },
        });

        tl.to(".scanner-line", {
          height: "100%",
          duration: 1.0,
          ease: "power2.inOut",
          yoyo: true,
          repeat: 1,
        });

        // Simulate progress
        gsap.to({}, {
          duration: 2.0,
          onUpdate: function () {
            setScanProgress(Math.round(this.progress() * 100));
          },
          ease: "none",
        });

        // Text scramble effect
        tl.to(".status-text", {
          opacity: 0,
          duration: 0.1,
          onComplete: () => {
            const statusText = container.current?.querySelector(".status-text") as HTMLElement;
            if (statusText) statusText.textContent = "ANALYZING BIOMETRICS...";
          }
        }, "<")
          .to(".status-text", { opacity: 1, duration: 0.2 })
          .to(".status-text", {
            opacity: 0,
            duration: 0.2,
            delay: 0.5,
            onComplete: () => {
              const statusText = container.current?.querySelector(".status-text") as HTMLElement;
              if (statusText) statusText.textContent = "VERIFYING IDENTITY...";
            }
          })
          .to(".status-text", { opacity: 1, duration: 0.2 });

      } else if (status === "success") {
        const tl = gsap.timeline({
          onComplete: () => {
            setTimeout(onUnlock, 800);
          }
        });

        tl.to(".fingerprint-icon", {
          scale: 1.2,
          color: primaryColor,
          duration: 0.3,
          ease: "back.out(1.7)",
        })
          .to(".scanner-container", {
            boxShadow: `0 0 30px ${primaryColor}`,
            borderColor: primaryColor,
            duration: 0.5
          }, "<")
          .to(".status-text", {
            opacity: 0,
            y: -10,
            duration: 0.3,
            onComplete: () => {
              const statusText = container.current?.querySelector(".status-text") as HTMLElement;
              if (statusText) {
                statusText.textContent = "ACCESS GRANTED";
                statusText.style.color = primaryColor;
                statusText.style.fontWeight = "bold";
              }
            }
          })
          .to(".status-text", {
            opacity: 1,
            y: 0,
            duration: 0.3
          });
      }
    },
    { dependencies: [status], scope: container }
  );

  return (
    <div
      ref={container}
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 backdrop-blur-md overflow-hidden"
    >
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-[10%] left-[10%] w-[30vw] h-[30vw] bg-accent/20 rounded-full blur-[100px] animate-pulse-slow" />
        <div className="absolute bottom-[10%] right-[10%] w-[30vw] h-[30vw] bg-primary/20 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: "1s" }} />
      </div>

      <div className="relative z-10 w-full max-w-sm p-8 flex flex-col items-center justify-center gap-8">
        <div className="h-8 flex items-center justify-center">
          <p className="status-text font-code text-sm tracking-widest text-muted-foreground">
            {status === "idle" ? "SYSTEM STANDBY" : "INITIALIZING..."}
          </p>
        </div>

        <div
          className={cn(
            "scanner-container relative w-48 h-48 rounded-full border-2 flex items-center justify-center cursor-pointer transition-all duration-500 overflow-hidden group",
            status === "idle" ? "border-muted-foreground/30 hover:border-accent hover:shadow-[0_0_20px_hsl(var(--accent)/0.3)]" : "border-accent shadow-[0_0_20px_hsl(var(--accent)/0.2)]",
            status === "success" && "border-primary shadow-[0_0_30px_hsl(var(--primary)/0.4)]"
          )}
          onClick={handleInitialize}
        >
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: "radial-gradient(circle at center, transparent 0%, black 100%), linear-gradient(0deg, transparent 49%, hsl(var(--accent)) 50%, transparent 51%), linear-gradient(90deg, transparent 49%, hsl(var(--accent)) 50%, transparent 51%)",
              backgroundSize: "100% 100%, 20px 20px, 20px 20px"
            }}
          />

          <div className="scanner-line absolute top-0 left-0 w-full h-0 bg-gradient-to-b from-accent/0 via-accent/50 to-accent/0 opacity-50 z-0" />

          <div className="relative z-10 transition-transform duration-500">
            {status === "idle" && (
              <Power className="w-16 h-16 text-muted-foreground/50 group-hover:text-accent transition-colors duration-300" />
            )}
            {status === "scanning" && (
              <Scan className="w-16 h-16 text-accent animate-pulse" />
            )}
            {status === "success" && (
              <Fingerprint className="fingerprint-icon w-16 h-16 text-primary" />
            )}
          </div>

          {status === "scanning" && (
            <div className="absolute bottom-8 text-xs font-code text-accent">
              {scanProgress}%
            </div>
          )}
        </div>

        <div className="text-center space-y-2 opacity-70">
          {status === "idle" && (
            <button
              onClick={handleInitialize}
              className="text-xs font-headline uppercase tracking-widest hover:text-accent transition-colors animate-pulse"
            >
              Click to Initialize
            </button>
          )}
          {status === "scanning" && (
            <p className="text-xs font-code text-accent/80">
              Do not close the window...
            </p>
          )}
          {status === "success" && (
            <p className="text-xs font-code text-primary/80">
              Welcome back, User.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}