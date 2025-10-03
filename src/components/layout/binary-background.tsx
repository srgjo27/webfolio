"use client";

import { useMemo } from "react";

// Constants
const BINARY_CONFIG = {
  rows: 100,
  columns: 200,
  fontSize: "10px",
  lineHeight: "1.2",
} as const;

// Utility functions
const generateBinaryText = (rows: number, columns: number): string => {
  let text = "";
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      text += Math.round(Math.random()).toString();
    }
    text += "\n";
  }
  return text;
};

export function BinaryBackground() {
  // Memoize binary text generation to avoid unnecessary recalculations
  const binaryText = useMemo(
    () => generateBinaryText(BINARY_CONFIG.rows, BINARY_CONFIG.columns),
    []
  );

  const containerClasses =
    "absolute inset-0 -z-10 overflow-hidden pointer-events-none";

  const textClasses =
    "absolute top-0 left-0 w-full h-full font-code text-accent/10 animate-pulse-slow";

  const textStyles = {
    fontSize: BINARY_CONFIG.fontSize,
    wordBreak: "break-all" as const,
    whiteSpace: "pre-wrap" as const,
    lineHeight: BINARY_CONFIG.lineHeight,
  };

  return (
    <div className={containerClasses} aria-hidden="true">
      <pre className={textClasses} style={textStyles}>
        {binaryText}
      </pre>
    </div>
  );
}
