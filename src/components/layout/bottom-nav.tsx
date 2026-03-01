"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface MenuItem {
  href: string;
  label: string;
  icon: LucideIcon;
}

interface BottomNavProps {
  items: MenuItem[];
}

export function BottomNav({ items }: BottomNavProps) {
  const pathname = usePathname();

  const navClasses = cn(
    "fixed bottom-2 left-2 right-2 z-50 rounded-lg border border-border/40",
    "bg-background/95 px-1 py-1.5 backdrop-blur supports-[backdrop-filter]:bg-background/60",
    "md:hidden",
    "sm:bottom-4 sm:left-4 sm:right-4 sm:rounded-xl sm:p-2"
  );

  return (
    <nav
      className={navClasses}
      role="navigation"
      aria-label="Bottom navigation"
    >
      <div className="flex items-center justify-around gap-0.5">
        {(items || []).map((item) => (
          <NavigationLink
            key={item.href}
            item={item}
            isActive={pathname === item.href}
          />
        ))}
      </div>
    </nav>
  );
}

function NavigationLink({
  item,
  isActive,
}: {
  item: MenuItem;
  isActive: boolean;
}) {
  const linkClasses = cn(
    "flex flex-col items-center justify-center gap-0.5 rounded-md px-1.5 py-1.5 min-w-0 flex-1",
    "transition-colors duration-200 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/20",
    "sm:gap-1 sm:p-2",
    isActive ? "text-primary" : "text-muted-foreground"
  );

  return (
    <Link
      href={item.href}
      className={linkClasses}
      aria-label={item.label}
      aria-current={isActive ? "page" : undefined}
    >
      <item.icon className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" aria-hidden="true" />
      <span className="text-[10px] sm:text-xs font-medium truncate max-w-full leading-tight">
        {item.label}
      </span>
    </Link>
  );
}
