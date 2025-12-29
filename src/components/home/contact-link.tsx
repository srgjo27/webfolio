"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function ContactLink() {
  return (
    <Link
      href="/contact"
      className="group relative inline-flex items-center gap-3 px-6 py-3 clip-chamfer-sm
                 bg-gradient-to-r from-primary/10 to-cyan-400/10 
                 border-2 border-primary/50 hover:border-primary
                 transition-all duration-300 hover:glow-green
                 font-mono-cyber font-bold text-primary hover:text-white"
    >
      {/* Animated Border Trace */}
      <div
        className="absolute inset-0 border-2 border-cyan-400 opacity-0 group-hover:opacity-100 
                      clip-chamfer-sm transition-opacity duration-300"
        style={{ animation: "border-trace 2s linear infinite" }}
      />

      {/* Background Pulse */}
      <div
        className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 
                      transition-opacity duration-300 clip-chamfer-sm"
      />

      <span className="relative z-10 flex items-center gap-2 uppercase tracking-wider text-sm">
        <span className="text-cyan-400">&gt;</span>
        Contact_Me
        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </span>
    </Link>
  );
}
