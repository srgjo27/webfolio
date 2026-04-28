"use client";

import { useRootLayout } from "@/hooks/use-root-layout";

export function BinaryBackground() {
  const { binaryText, binaryConfig } = useRootLayout();
  const containerClasses =
    "absolute inset-0 -z-10 overflow-hidden pointer-events-none";
  const textClasses =
    "absolute top-0 left-0 w-full h-full font-code text-accent/10 animate-pulse-slow";
  const textStyles = {
    fontSize: binaryConfig.fontSize,
    wordBreak: "break-all" as const,
    whiteSpace: "pre-wrap" as const,
    lineHeight: binaryConfig.lineHeight,
  };

  return (
    <div className={containerClasses} aria-hidden="true">
      <pre className={textClasses} style={textStyles}>
        {binaryText}
      </pre>
    </div>
  );
}
