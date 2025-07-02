
'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

export const ScramblingText = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  const [currentText, setCurrentText] = React.useState('');
  const intervalRef = React.useRef<NodeJS.Timeout | null>(null);
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);
  const chars = '!<>-_\\/[]{}—=+*^?#';

  const scramble = React.useCallback(() => {
    let iteration = 0;
    
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      setCurrentText(
        text
          .split('')
          .map((letter, index) => {
            if (index < iteration) {
              return text[index];
            }
            if (letter === ' ') return ' ';
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('')
      );

      if (iteration >= text.length) {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
        setCurrentText(text); // Ensure final text is correct
        // Set a timeout to restart the animation
        timeoutRef.current = setTimeout(scramble, 3000); // 3-second pause
        return;
      }

      iteration += 1 / 3;
    }, 30);
  }, [text, chars]);

  React.useEffect(() => {
    // Initial start
    scramble();

    // Cleanup function to clear all timers
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [text, scramble]);

  return <p className={cn('font-code', className)}>{currentText}</p>;
};
