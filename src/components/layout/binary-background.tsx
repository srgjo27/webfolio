"use client";

import { useState, useEffect } from "react";

export function BinaryBackground() {
  const [binaryText, setBinaryText] = useState("");

  useEffect(() => {
    let text = "";
    for (let i = 0; i < 100; i++) {
      for (let j = 0; j < 200; j++) {
        text += Math.round(Math.random());
      }
      text += "\n";
    }
    setBinaryText(text);
  }, []);

  return (
    <div
      className="absolute inset-0 -z-10 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      <pre
        className="absolute top-0 left-0 w-full h-full font-code text-[10px] text-accent/10 animate-pulse-slow"
        style={{
          wordBreak: "break-all",
          whiteSpace: "pre-wrap",
          lineHeight: "1.2",
        }}
      >
        {binaryText}
      </pre>
    </div>
  );
}
