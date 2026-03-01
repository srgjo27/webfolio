import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ANIMATION_CONFIG } from "@/constants/home-data";

export function useHomeAnimation() {
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

  return main;
}
