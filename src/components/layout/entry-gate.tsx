"use client";

import { Fingerprint, Scan, Power } from "lucide-react";
import { cn } from "@/lib/utils";

interface EntryGateProps {
  status: "idle" | "scanning" | "success";
  scanProgress: number;
  containerRef: React.RefObject<HTMLDivElement>;
  onInitialize: () => void;
}

export function EntryGate({
  status,
  scanProgress,
  containerRef,
  onInitialize,
}: EntryGateProps) {
  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-200 flex items-center justify-center bg-black/90 backdrop-blur-md overflow-hidden"
    >
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-[10%] left-[10%] w-[30vw] h-[30vw] bg-accent/20 rounded-full blur-[100px] animate-pulse-slow" />
        <div
          className="absolute bottom-[10%] right-[10%] w-[30vw] h-[30vw] bg-primary/20 rounded-full blur-[100px] animate-pulse-slow"
          style={{ animationDelay: "1s" }}
        />
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
            status === "idle"
              ? "border-muted-foreground/30 hover:border-accent hover:shadow-[0_0_20px_hsl(var(--accent)/0.3)]"
              : "border-accent shadow-[0_0_20px_hsl(var(--accent)/0.2)]",
            status === "success" &&
              "border-primary shadow-[0_0_30px_hsl(var(--primary)/0.4)]",
          )}
          onClick={onInitialize}
        >
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(circle at center, transparent 0%, black 100%), linear-gradient(0deg, transparent 49%, hsl(var(--accent)) 50%, transparent 51%), linear-gradient(90deg, transparent 49%, hsl(var(--accent)) 50%, transparent 51%)",
              backgroundSize: "100% 100%, 20px 20px, 20px 20px",
            }}
          />

          <div className="scanner-line absolute top-0 left-0 w-full h-0 bg-linear-to-b from-accent/0 via-accent/50 to-accent/0 opacity-50 z-0" />

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
              onClick={onInitialize}
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
