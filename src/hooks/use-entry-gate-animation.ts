import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import type { RefObject } from "react";

interface EntryGateAnimationProps {
  status: "idle" | "scanning" | "success";
  container: RefObject<HTMLDivElement | null>;
  setStatus: (status: "idle" | "scanning" | "success") => void;
  setScanProgress: (progress: number) => void;
  handleUnlock: () => void;
}

export function useEntryGateAnimation({
  status,
  container,
  setStatus,
  setScanProgress,
  handleUnlock,
}: EntryGateAnimationProps) {
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

        gsap.to(
          {},
          {
            duration: 2.0,
            onUpdate: function () {
              setScanProgress(Math.round(this.progress() * 100));
            },
            ease: "none",
          }
        );

        tl.to(
          ".status-text",
          {
            opacity: 0,
            duration: 0.1,
            onComplete: () => {
              const statusText = container.current?.querySelector(
                ".status-text"
              ) as HTMLElement;
              if (statusText) statusText.textContent = "ANALYZING BIOMETRICS...";
            },
          },
          "<"
        )
          .to(".status-text", { opacity: 1, duration: 0.2 })
          .to(".status-text", {
            opacity: 0,
            duration: 0.2,
            delay: 0.5,
            onComplete: () => {
              const statusText = container.current?.querySelector(
                ".status-text"
              ) as HTMLElement;
              if (statusText) statusText.textContent = "VERIFYING IDENTITY...";
            },
          })
          .to(".status-text", { opacity: 1, duration: 0.2 });
      } else if (status === "success") {
        const tl = gsap.timeline({
          onComplete: () => {
            setTimeout(handleUnlock, 800);
          },
        });

        tl.to(".fingerprint-icon", {
          scale: 1.2,
          color: primaryColor,
          duration: 0.3,
          ease: "back.out(1.7)",
        })
          .to(
            ".scanner-container",
            {
              boxShadow: `0 0 30px ${primaryColor}`,
              borderColor: primaryColor,
              duration: 0.5,
            },
            "<"
          )
          .to(".status-text", {
            opacity: 0,
            y: -10,
            duration: 0.3,
            onComplete: () => {
              const statusText = container.current?.querySelector(
                ".status-text"
              ) as HTMLElement;
              if (statusText) {
                statusText.textContent = "ACCESS GRANTED";
                statusText.style.color = primaryColor;
                statusText.style.fontWeight = "bold";
              }
            },
          })
          .to(".status-text", {
            opacity: 1,
            y: 0,
            duration: 0.3,
          });
      }
    },
    { dependencies: [status], scope: container }
  );
}
