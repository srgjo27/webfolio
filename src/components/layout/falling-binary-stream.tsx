'use client';

import React, { useState, useEffect } from 'react';

// Generates a string of random binary characters separated by newlines
const generateBinaryColumn = (length: number): string => {
  return Array.from({ length }, () => Math.round(Math.random())).join('\n');
};

export function FallingBinaryStream({ columns = 35 }: { columns?: number }) {
  const [binaryStrings, setBinaryStrings] = useState<string[]>([]);

  useEffect(() => {
    // Generate the binary strings once on mount
    const newStrings = Array.from({ length: columns }, () => generateBinaryColumn(50));
    setBinaryStrings(newStrings);
  }, [columns]);

  return (
    <div
      className="absolute inset-0 z-0 flex w-full justify-between overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {binaryStrings.map((str, i) => (
        <pre
          key={i}
          className="font-code animate-binary-fall text-accent/50"
          style={{
            fontSize: '10px',
            lineHeight: '1.5',
            animationDuration: `${Math.random() * 8 + 6}s`, // Duration between 6s and 14s
            animationDelay: `-${Math.random() * 10}s`, // Start animation at a random point
          }}
        >
          {str}
        </pre>
      ))}
    </div>
  );
}
