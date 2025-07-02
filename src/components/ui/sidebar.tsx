// This component is no longer used and can be removed.
// The sidebar functionality has been replaced by a top navigation bar.
"use client"
import * as React from "react"
export function Sidebar() {
    return null;
}
export function SidebarProvider({children}: {children: React.ReactNode}) {
    return <>{children}</>;
}
export function SidebarInset({children}: {children: React.ReactNode}) {
    return <main>{children}</main>;
}
