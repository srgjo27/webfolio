"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { Radio } from "lucide-react";
import { ContactCard } from "@/components/contact/contact-card";
import { contactData } from "@/constant/contact-data";

export default function ContactPage() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 0.8 },
      });

      tl.from(".page-header", { opacity: 0, y: -20 })
        .from(
          ".contact-card",
          {
            opacity: 0,
            y: 30,
            scale: 0.95,
            stagger: 0.2,
            clearProps: "all",
          },
          "-=0.4"
        );
    },
    { scope: container }
  );

  return (
    <div className="min-h-screen p-4 md:p-8 pt-6 pb-24" ref={container}>
      {/* Header */}
      <div className="page-header flex flex-col gap-2 mb-12">
        <div className="flex items-center gap-3">
          <Radio className="w-8 h-8 text-primary animate-pulse" />
          <h1 className="text-4xl font-bold font-headline tracking-tight bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-300% animate-gradient">
            COMMUNICATION HUB
          </h1>
        </div>
        <div className="flex items-center gap-4 text-muted-foreground font-code text-sm pl-1 border-l-2 border-accent/30">
          <span>// ESTABLISH_UPLINK</span>
          <span className="w-1 h-1 rounded-full bg-accent/50" />
          <span>STATUS: LISTENING</span>
        </div>
      </div>

      <p className="text-lg text-muted-foreground font-mono max-w-2xl mb-12 page-header">
        I'm always open to discussing new projects, creative ideas, or opportunities to be part of an ambitious vision. Select a channel below to initiate transmission.
      </p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {contactData.map((method, index) => (
          <ContactCard key={index} method={method} index={index} />
        ))}
      </div>

      {/* Background Decorator - Radar Sweep */}
      <div className="fixed bottom-0 right-0 w-[50vw] h-[50vh] opacity-20 pointer-events-none -z-10">
        <div className="absolute inset-0 border border-primary/10 rounded-full scale-[2]" />
        <div className="absolute inset-0 border border-primary/10 rounded-full scale-[1.5]" />
        <div className="absolute inset-0 border border-primary/10 rounded-full scale-[1]" />
      </div>

    </div>
  );
}
