'use client';

import { useState, useRef, FormEvent, KeyboardEvent, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Terminal, ShieldAlert, ShieldCheck } from 'lucide-react';
import { FallingBinaryStream } from './falling-binary-stream';
import { cn } from '@/lib/utils';

export function EntryGate({ onUnlock }: { onUnlock: () => void }) {
  const [otp, setOtp] = useState<string[]>(new Array(4).fill(''));
  const [error, setError] = useState('');
  const [attemptsLeft, setAttemptsLeft] = useState(3);
  const [isBypassing, setIsBypassing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const [correctCode, setCorrectCode] = useState('');
  const [hint, setHint] = useState('');

  useEffect(() => {
    // Generate code and hint on client mount to avoid hydration mismatch
    const code = Math.floor(1000 + Math.random() * 9000).toString();
    setCorrectCode(code);

    const operation = Math.random() > 0.5 ? 'add' : 'subtract';
    let hintText = '';
    const codeNum = parseInt(code, 10);

    if (operation === 'add') {
      const num1 = Math.floor(Math.random() * (codeNum - 100));
      const num2 = codeNum - num1;
      hintText = `${num1} + ${num2}`;
    } else {
      const num1 = codeNum + Math.floor(Math.random() * 1000) + 100;
      const num2 = num1 - codeNum;
      hintText = `${num1} - ${num2}`;
    }
    setHint(hintText);
  }, []);

  useEffect(() => {
    if (isBypassing) {
      const timer1 = setTimeout(() => {
        setError('Bypassing security protocol...');
      }, 2000);
      const timer2 = setTimeout(() => {
        onUnlock();
      }, 4000);

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
      };
    }
  }, [isBypassing, onUnlock]);

  useEffect(() => {
    if (isBypassing || !correctCode || isSuccess) return;

    const enteredCode = otp.join('');
    if (enteredCode.length === otp.length) {
      if (enteredCode === correctCode) {
        setError('');
        setIsSuccess(true);
        setTimeout(() => {
          onUnlock();
        }, 2000);
      } else {
        const newAttemptsLeft = attemptsLeft - 1;
        setAttemptsLeft(newAttemptsLeft);
        setOtp(new Array(otp.length).fill(''));
        inputRefs.current[0]?.focus();

        if (newAttemptsLeft <= 0) {
          setError('ACCESS DENIED. System lockout initiated.');
          setIsBypassing(true);
        } else {
          setError(`ACCESS DENIED. ${newAttemptsLeft} ${newAttemptsLeft > 1 ? 'attempts' : 'attempt'} remaining.`);
        }
      }
    }
  }, [otp, correctCode, isBypassing, isSuccess, onUnlock, attemptsLeft]);


  const handleChange = (element: HTMLInputElement, index: number) => {
    if (isNaN(Number(element.value))) {
        return;
    }

    const newOtp = [...otp];
    newOtp[index] = element.value.slice(-1);
    setOtp(newOtp);

    if (element.value && index < otp.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
     if (e.key === "Backspace" && !otp[index] && index > 0) {
        inputRefs.current[index - 1]?.focus();
     }
  }

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-background p-4 overflow-hidden">
      {isBypassing && <FallingBinaryStream />}
      <div className="w-full max-w-md rounded-lg border border-accent/20 bg-card/80 p-6 shadow-2xl shadow-accent/10 backdrop-blur-sm relative z-10">
        <div className="flex items-center gap-4 mb-6">
          <Terminal className="h-8 w-8 text-accent" />
          <div>
            <h2 className="text-2xl font-headline text-accent">SECURE ACCESS</h2>
            <p className="text-sm text-muted-foreground font-code">Authentication required to proceed.</p>
          </div>
        </div>

        <div className="space-y-6">
           <fieldset disabled={isBypassing || !correctCode || isSuccess} className="space-y-6">
                <div className="space-y-2">
                    <label htmlFor="access-code" className="block text-sm font-medium text-foreground/80 font-code text-center">
                        Enter Access Code:
                    </label>
                    <div className="flex justify-center gap-2 md:gap-4" id="access-code">
                        {otp.map((data, index) => {
                        return (
                            <Input
                            key={index}
                            type="tel"
                            pattern="[0-9]*"
                            name="otp"
                            maxLength={1}
                            className={cn(
                                "w-14 h-16 text-center text-3xl font-code bg-background/50 border-accent/30 focus:ring-accent",
                                isSuccess && "border-accent ring-2 ring-accent"
                            )}
                            value={data}
                            onChange={(e) => handleChange(e.target as HTMLInputElement, index)}
                            onKeyDown={(e) => handleKeyDown(e, index)}
                            onFocus={(e) => e.target.select()}
                            ref={el => { inputRefs.current[index] = el }}
                            autoFocus={index === 0}
                            />
                        );
                        })}
                    </div>
                </div>
            
                {isSuccess && (
                     <p className="text-accent text-sm font-code animate-pulse text-center flex items-center justify-center gap-2">
                        <ShieldCheck className="h-4 w-4" /> ACCESS GRANTED. Initializing system...
                    </p>
                )}
                {error && !isSuccess && (
                    <p className="text-destructive text-sm font-code animate-pulse text-center flex items-center justify-center gap-2">
                        <ShieldAlert className="h-4 w-4" /> {error}
                    </p>
                )}
            </fieldset>
        </div>
         {!isBypassing && <p className="text-xs text-muted-foreground mt-4 font-code text-center">Hint: {hint || '...'}</p>}
      </div>
    </div>
  );
}
