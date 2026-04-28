"use client";

import { type ReactNode } from "react";
import { Toaster } from "@/components/ui/toaster";
import { BinaryBackground } from "@/components/layout/binary-background";
import { EntryGate } from "@/components/layout/entry-gate";
import { Sidebar } from "@/components/layout/sidebar";
import { BottomNav } from "@/components/layout/bottom-nav";
import { useRootLayout } from "@/hooks/use-root-layout";
import {
  SITE_METADATA,
  LEFT_MENU_ITEMS,
  RIGHT_MENU_ITEMS,
  ALL_MENU_ITEMS,
} from "@/constants/layout-data";
import "./globals.css";

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const {
    isUnlocked,
    isClient,
    status,
    scanProgress,
    containerRef,
    handleInitialize,
  } = useRootLayout();

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
        <link href={SITE_METADATA.fonts.jetBrainsMono} rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        {renderMainContent()}
        <Toaster />
      </body>
    </html>
  );

  function renderMainContent() {
    if (!isClient) return;

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
        <EntryGate
          onInitialize={handleInitialize}
          status={status}
          scanProgress={scanProgress}
          containerRef={containerRef}
        />
      </>
    );
  }
}
