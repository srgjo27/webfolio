"use client";

import { useState, useEffect, type ReactNode } from "react";
import { Toaster } from "@/components/ui/toaster";
import { BinaryBackground } from "@/components/layout/binary-background";
import { EntryGate } from "@/components/layout/entry-gate";
import { Sidebar } from "@/components/layout/sidebar";
import { BottomNav } from "@/components/layout/bottom-nav";
import {
  Home,
  Briefcase,
  GraduationCap,
  Folders,
  Mail,
  BookUser,
  type LucideIcon,
} from "lucide-react";
import "./globals.css";

// Types
interface MenuItem {
  href: string;
  label: string;
  icon: LucideIcon;
}

interface RootLayoutProps {
  children: ReactNode;
}

// Constants
const SITE_METADATA = {
  title: "Webfolio",
  description: "A personal portfolio with an AI career advisor.",
  fonts: {
    spaceGrotesk:
      "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&display=swap",
    sourceCodePro:
      "https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;600&display=swap",
  },
} as const;

const LEFT_MENU_ITEMS: MenuItem[] = [
  { href: "/", label: "Home", icon: Home },
  { href: "/experience", label: "Experience", icon: Briefcase },
  { href: "/education", label: "Education", icon: GraduationCap },
] as const;

const RIGHT_MENU_ITEMS: MenuItem[] = [
  { href: "/projects", label: "Projects", icon: Folders },
  { href: "/contact", label: "Contact", icon: Mail },
  { href: "/guestbook", label: "Guestbook", icon: BookUser },
] as const;

const ALL_MENU_ITEMS: MenuItem[] = [
  ...LEFT_MENU_ITEMS,
  ...RIGHT_MENU_ITEMS,
] as const;

export default function RootLayout({ children }: RootLayoutProps) {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <html lang="en" className="dark">
      <head>
        <title>{SITE_METADATA.title}</title>
        <meta name="description" content={SITE_METADATA.description} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link href={SITE_METADATA.fonts.spaceGrotesk} rel="stylesheet" />
        <link href={SITE_METADATA.fonts.sourceCodePro} rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        {renderMainContent()}
        <Toaster />
      </body>
    </html>
  );

  function renderMainContent() {
    if (!isClient) return null;

    return isUnlocked ? (
      <div className="flex min-h-screen">
        <Sidebar items={LEFT_MENU_ITEMS} side="left" />
        <main className="relative flex-1 pb-20 md:pb-0">
          <BinaryBackground />
          {children}
        </main>
        <Sidebar items={RIGHT_MENU_ITEMS} side="right" />
        <BottomNav items={ALL_MENU_ITEMS} />
      </div>
    ) : (
      <>
        <BinaryBackground />
        <EntryGate onUnlock={() => setIsUnlocked(true)} />
      </>
    );
  }
}
