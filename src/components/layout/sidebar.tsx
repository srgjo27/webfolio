'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

type MenuItem = {
  href: string;
  label: string;
  icon: LucideIcon;
};

type SidebarProps = {
  items: MenuItem[];
  side: 'left' | 'right';
};

export function Sidebar({ items, side }: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside className={cn(
      "sticky top-0 h-screen w-24 flex-col items-center justify-center gap-4 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-40 hidden md:flex",
      side === 'left' ? "border-r border-border/40" : "border-l border-border/40"
    )}>
      <div className={cn(
        "absolute inset-y-0 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent pointer-events-none",
        side === 'left' ? 'right-0' : 'left-0'
      )} />
      <nav className="relative z-10 flex flex-col items-center gap-4">
        {items.map((item, index) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "relative transition-transform duration-300 ease-in-out hover:scale-110 hover:z-20",
              index === 1 && (side === 'left' ? 'translate-x-4' : '-translate-x-4')
            )}
          >
            <div className="relative w-20 h-[87px] flex items-center justify-center group">
              <svg
                viewBox="0 0 100 115.47"
                className={cn(
                  "absolute inset-0 w-full h-full transition-all duration-300",
                  "drop-shadow-[0_0_2px_hsl(var(--border))] group-hover:drop-shadow-[0_0_5px_hsl(var(--primary))]",
                  pathname === item.href
                    ? "fill-primary"
                    : "fill-card group-hover:fill-primary/80",
                )}
              >
                <polygon points="50,0 100,28.87 100,86.6 50,115.47 0,86.6 0,28.87" />
              </svg>
              <div className={cn(
                "relative z-10 flex flex-col items-center justify-center gap-1 transition-colors duration-300",
                pathname === item.href
                  ? "text-primary-foreground"
                  : "text-foreground group-hover:text-primary-foreground"
              )}>
                <item.icon className="h-4 w-4" />
                <span className="text-xs font-medium text-center font-headline">{item.label}</span>
              </div>
            </div>
          </Link>
        ))}
      </nav>
      {side === 'right' && (
        <div className="absolute bottom-8 flex items-center gap-2 font-code text-sm text-green-400">
          <span className="relative flex h-2 w-2">
            <span className="animate-status-blink absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
        </div>
      )}
    </aside>
  );
}
