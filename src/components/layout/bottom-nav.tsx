"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

// Types
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
    "fixed bottom-4 left-4 right-4 z-50 rounded-xl border border-border/40",
    "bg-background/95 p-2 backdrop-blur supports-[backdrop-filter]:bg-background/60",
    "md:hidden"
  );

  return (
    <nav
      className={navClasses}
      role="navigation"
      aria-label="Bottom navigation"
    >
      <div className="flex justify-around">
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

// Helper Component
function NavigationLink({
  item,
  isActive,
}: {
  item: MenuItem;
  isActive: boolean;
}) {
  const linkClasses = cn(
    "flex flex-col items-center gap-1 rounded-md p-2 text-xs font-medium",
    "transition-colors duration-200 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/20",
    isActive ? "text-primary" : "text-muted-foreground"
  );

  return (
    <Link
      href={item.href}
      className={linkClasses}
      aria-label={item.label}
      aria-current={isActive ? "page" : undefined}
    >
      <item.icon className="h-5 w-5" aria-hidden="true" />
      <span>{item.label}</span>
    </Link>
  );
}
