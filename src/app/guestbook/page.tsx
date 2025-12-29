"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import {
  collection,
  getDocs,
  orderBy,
  query,
  Timestamp,
} from "firebase/firestore";
import { firestore } from "@/lib/firebase";
import { GuestbookForm } from "./client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { PenSquare, Loader2 } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

export const dynamic = "force-dynamic";

type GuestbookEntry = {
  id: string;
  name: string;
  message: string;
  createdAt: Timestamp;
};

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
      return {
        entries: [],
        error:
          "Permission Denied. Could not fetch guestbook entries. This might be because the Firestore API is not enabled in your Google Cloud project or your security rules are incorrect. Please check your Firebase project configuration and enable the API.",
      };
    } else if (firebaseError.code === "not-found") {
      return {
        entries: [],
        error:
          "Database Not Found. It seems you haven't created a Firestore database in your Firebase project yet. Please go to the Firebase Console, select Firestore Database, and click 'Create database'.",
      };
    } else {
      return {
        entries: [],
        error: "An unexpected error occurred while fetching entries.",
      };
    }
  }
}

const emojis = [
  "👋",
  "😊",
  "🤖",
  "🚀",
  "✨",
  "👾",
  "👨‍💻",
  "👩‍💻",
  "💡",
  "🔥",
  "🎉",
  "🌟",
];

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
      gsap.from(".guestbook-header", {
        opacity: 0,
        x: -30,
        ease: "power3.out",
        duration: 0.7,
      });
    },
    { scope: main }
  );

  useGSAP(
    () => {
      if (isLoading) return;

      gsap.from(".guestbook-item", {
        opacity: 0,
        y: 40,
        stagger: 0.1,
        duration: 0.5,
        ease: "power3.out",
      });
    },
    { scope: main, dependencies: [isLoading] }
  );

  const handleFormSuccess = () => {
    setIsFormOpen(false);
    fetchEntries();
  };

  return (
    <div className="flex-1 space-y-8 p-4 md:p-8 pt-6" ref={main}>
      <div className="guestbook-header flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight font-headline">
            Guestbook
          </h2>
          <p className="text-muted-foreground">
            Leave a message for future visitors.
          </p>
        </div>
        <Button onClick={() => setIsFormOpen(true)}>
          <PenSquare className="mr-2 h-4 w-4" />
          Tinggalkan Ucapan
        </Button>
      </div>

      {isLoading ? (
        <div className="flex items-center justify-center py-20 gap-2 text-muted-foreground">
          <Loader2 className="h-8 w-8 animate-spin" />
          <p className="text-lg">Loading entries...</p>
        </div>
      ) : fetchError ? (
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Error</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-destructive">{fetchError}</p>
          </CardContent>
        </Card>
      ) : entries.length === 0 ? (
        <div className="flex items-center justify-center py-20 text-center">
          <p className="text-muted-foreground">
            No entries yet. Be the first to sign!
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 md:gap-6">
          {entries.map((entry, index) => (
            <div key={entry.id} className="guestbook-item">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="relative flex items-center justify-center cursor-pointer group transition-transform hover:-translate-y-1 aspect-[100/115.47]">
                      <svg
                        viewBox="0 0 100 115.47"
                        className="absolute inset-0 w-full h-full transition-colors fill-card group-hover:fill-primary/10 stroke-border"
                      >
                        <polygon points="50,0 100,28.87 100,86.6 50,115.47 0,86.6 0,28.87" />
                      </svg>
                      <div className="relative z-10 flex flex-col items-center justify-center gap-1 text-center p-2">
                        <div className="flex h-12 w-12 items-center justify-center">
                          <span
                            className="inline-block animate-emoji-float text-3xl"
                            style={{ animationDelay: `${index * 0.2}s` }}
                          >
                            {emojis[index % emojis.length]}
                          </span>
                        </div>
                        <p className="font-headline text-sm truncate w-full px-1">
                          {entry.name}
                        </p>
                      </div>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{entry.message}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          ))}
        </div>
      )}

      {/* Form Dialog */}
      <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="font-headline flex items-center gap-2">
              <PenSquare className="h-6 w-6 text-accent" />
              Tinggalkan Ucapan
            </DialogTitle>
            <DialogDescription>
              Leave a message for future visitors.
            </DialogDescription>
          </DialogHeader>
          <GuestbookForm onSuccess={handleFormSuccess} />
        </DialogContent>
      </Dialog>
    </div>
  );
}
