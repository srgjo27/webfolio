"use client";

import Link from "next/link";
import { useRootLayout } from "@/hooks/use-root-layout";
import { cn } from "@/lib/utils";
import {
  HEXAGON_VIEWBOX,
  HEXAGON_POLYGON_POINTS,
  type MenuItem,
} from "@/constants/layout-data";

interface SidebarProps {
  items: MenuItem[];
  side: "left" | "right";
}

export function Sidebar({ items, side }: SidebarProps) {
  const { pathname } = useRootLayout();

  const sidebarClasses = cn(
    "sticky top-0 h-screen w-24 flex-col items-center justify-center gap-4",
    "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
    "z-40 hidden md:flex",
    side === "left" ? "border-r border-border/40" : "border-l border-border/40",
  );

  return (
    <aside className={sidebarClasses}>
      <nav
        className="relative z-10 flex flex-col items-center gap-4"
        role="navigation"
        aria-label={`${side} navigation`}
      >
        {Array.isArray(items) &&
          items.map((item, index) => (
            <NavigationItem
              key={item.href}
              item={item}
              index={index}
              side={side}
              isActive={pathname === item.href}
            />
          ))}
      </nav>
    </aside>
  );
}

function NavigationItem({
  item,
  index,
  side,
  isActive,
}: {
  item: MenuItem;
  index: number;
  side: "left" | "right";
  isActive: boolean;
}) {
  const linkClasses = cn(
    "relative transition-transform duration-300 ease-in-out hover:scale-110 hover:z-20",
    index === 1 && (side === "left" ? "translate-x-4" : "-translate-x-4"),
  );

  return (
    <Link href={item.href} className={linkClasses} aria-label={item.label}>
      <div className="relative w-20 h-[87px] flex items-center justify-center group">
        <HexagonIcon isActive={isActive} />
        <div
          className={cn(
            "relative z-10 flex flex-col items-center justify-center gap-1 transition-colors duration-300",
            isActive
              ? "text-primary-foreground"
              : "text-foreground group-hover:text-primary-foreground",
          )}
        >
          <item.icon className="h-4 w-4" aria-hidden="true" />
          <span className="text-xs font-medium text-center font-headline">
            {item.label}
          </span>
        </div>
      </div>
    </Link>
  );
}

function HexagonIcon({ isActive }: { isActive: boolean }) {
  const iconClasses = cn(
    "absolute inset-0 w-full h-full transition-all duration-300",
    "drop-shadow-[0_0_2px_hsl(var(--border))] group-hover:drop-shadow-[0_0_5px_hsl(var(--primary))]",
    isActive ? "fill-primary" : "fill-card group-hover:fill-primary/80",
  );

  return (
    <svg viewBox={HEXAGON_VIEWBOX} className={iconClasses} aria-hidden="true">
      <polygon points={HEXAGON_POLYGON_POINTS} />
    </svg>
  );
}
