"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import {
  collection,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";
import { firestore } from "@/lib/firebase";
import { GuestbookForm } from "@/components/guestbook/guestbook-form";
import { GuestbookCard } from "@/components/guestbook/guestbook-card";
import { GuestbookEntry } from "@/types/guestbook";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { PenSquare, Loader2, Database } from "lucide-react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

export const dynamic = "force-dynamic";

async function getGuestbookEntries(): Promise<{
  entries: GuestbookEntry[];
  error: string | null;
}> {
  if (!process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID) {
    return {
      entries: [],
      error:
        "Firebase is not configured. Please add your Firebase project configuration to the .env file to enable the Guestbook.",
    };
  }
  if (!firestore) {
    return { entries: [], error: "Firebase is not initialized." };
  }

  try {
    const q = query(
      collection(firestore, "guestbook"),
      orderBy("createdAt", "desc")
    );
    const querySnapshot = await getDocs(q);
    const entries = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      name: doc.data().name,
      message: doc.data().message,
      createdAt: doc.data().createdAt,
    }));
    return { entries, error: null };
  } catch (error) {
    console.error("Error fetching guestbook entries:", error);
    const firebaseError = error as { code?: string };
    if (firebaseError.code === "permission-denied") {
      return { entries: [], error: "Permission Denied. Check Firestore rules." };
    } else if (firebaseError.code === "not-found") {
      return { entries: [], error: "Database Not Found." };
    } else {
      return { entries: [], error: "An unexpected error occurred." };
    }
  }
}

export default function GuestbookPage() {
  const [entries, setEntries] = useState<GuestbookEntry[]>([]);
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const main = useRef(null);

  const fetchEntries = useCallback(async () => {
    setIsLoading(true);
    const { entries: fetchedEntries, error } = await getGuestbookEntries();
    setEntries(fetchedEntries);
    setFetchError(error);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchEntries();
  }, [fetchEntries]);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 0.8 },
      });

      tl.from(".page-header", { opacity: 0, y: -20 })
        .from(".guestbook-grid", { opacity: 0 }, "-=0.2");
    },
    { scope: main }
  );

  // Stagger animation for cards when loading finishes
  useGSAP(() => {
    if (!isLoading && entries.length > 0) {
      gsap.from(".guestbook-card", {
        opacity: 0,
        y: 20,
        stagger: 0.1,
        duration: 0.5,
        clearProps: "all"
      });
    }
  }, { scope: main, dependencies: [isLoading, entries] });

  const handleFormSuccess = () => {
    setIsFormOpen(false);
    fetchEntries();
  };

  return (
    <div className="min-h-screen p-4 md:p-8 pt-6 pb-24" ref={main}>
      {/* Header */}
      <div className="page-header flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <Database className="w-8 h-8 text-primary animate-pulse" />
            <h1 className="text-4xl font-bold font-headline tracking-tight bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-300% animate-gradient">
              PUBLIC ARCHIVES
            </h1>
          </div>
          <div className="flex items-center gap-4 text-muted-foreground font-code text-sm pl-1 border-l-2 border-accent/30">
            <span>// DATABASE: GUEST_LOGS</span>
            <span className="w-1 h-1 rounded-full bg-accent/50" />
            <span>RECORDS: {entries.length}</span>
          </div>
        </div>

        <Button
          onClick={() => setIsFormOpen(true)}
          className="group font-code relative overflow-hidden bg-accent/10 hover:bg-accent/20 text-accent border border-accent/50"
        >
          <span className="relative z-10 flex items-center gap-2">
            <PenSquare className="w-4 h-4" />
            INITIATE_ENTRY
          </span>
          <div className="absolute inset-0 bg-accent/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
        </Button>
      </div>

      {isLoading ? (
        <div className="flex flex-col items-center justify-center py-20 gap-4 text-muted-foreground">
          <Loader2 className="h-12 w-12 animate-spin text-primary" />
          <p className="font-code text-sm animate-pulse">DECRYPTING ARCHIVES...</p>
        </div>
      ) : fetchError ? (
        <div className="border border-destructive/50 bg-destructive/10 p-6 rounded-lg max-w-2xl mx-auto text-center">
          <h3 className="font-headline text-destructive text-xl mb-2">CONNECTION ERROR</h3>
          <p className="font-mono text-sm text-muted-foreground">{fetchError}</p>
        </div>
      ) : entries.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-center border border-dashed border-primary/20 rounded-xl bg-card/10">
          <p className="font-code text-primary/60 mb-4">// NO RECORDS FOUND</p>
          <p className="text-muted-foreground max-w-md">The archives are currently empty. Be the first to permanently record your signal in our database.</p>
        </div>
      ) : (
        <div className="guestbook-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {entries.map((entry, index) => (
            <GuestbookCard key={entry.id} entry={entry} index={index} />
          ))}
        </div>
      )}

      {/* Form Dialog */}
      <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
        <DialogContent className="bg-black/90 border-primary/20 backdrop-blur-xl">
          <DialogHeader>
            <DialogTitle className="font-headline flex items-center gap-2 text-primary">
              <PenSquare className="h-5 w-5" />
              NEW ENTRY PROTOCOL
            </DialogTitle>
          </DialogHeader>
          <GuestbookForm onSuccess={handleFormSuccess} />
        </DialogContent>
      </Dialog>
    </div>
  );
}
