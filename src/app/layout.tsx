'use client';

import { useState, useEffect } from 'react';
import { Toaster } from '@/components/ui/toaster';
import { BinaryBackground } from '@/components/layout/binary-background';
import { EntryGate } from '@/components/layout/entry-gate';
import { Sidebar } from '@/components/layout/sidebar';
import { BottomNav } from '@/components/layout/bottom-nav';
import {
  Home,
  Briefcase,
  GraduationCap,
  Folders,
  Mail,
  BookUser,
} from 'lucide-react';
import './globals.css';

const leftMenuItems = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/experience', label: 'Experience', icon: Briefcase },
  { href: '/education', label: 'Education', icon: GraduationCap },
];

const rightMenuItems = [
  { href: '/projects', label: 'Projects', icon: Folders },
  { href: '/contact', label: 'Contact', icon: Mail },
  { href: '/guestbook', label: 'Guestbook', icon: BookUser },
];

const allMenuItems = [...leftMenuItems, ...rightMenuItems];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <html lang="en" className="dark">
      <head>
        <title>Cyberfolio AI</title>
        <meta
          name="description"
          content="A personal portfolio with an AI career advisor."
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">
        {isClient ? (
          isUnlocked ? (
            <div className="flex min-h-screen">
              <Sidebar items={leftMenuItems} side="left" />
              <main className="relative flex-1 pb-20 md:pb-0">
                <BinaryBackground />
                {children}
              </main>
              <Sidebar items={rightMenuItems} side="right" />
              <BottomNav items={allMenuItems} />
            </div>
          ) : (
            <>
              <BinaryBackground />
              <EntryGate onUnlock={() => setIsUnlocked(true)} />
            </>
          )
        ) : null}
        <Toaster />
      </body>
    </html>
  );
}
