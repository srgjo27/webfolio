"use client";

import { GuestbookForm } from "@/components/guestbook/guestbook-form";
import { GuestbookCard } from "@/components/guestbook/guestbook-card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { PenSquare, Loader2, Database } from "lucide-react";
import { useGuestbook } from "@/hooks/use-guestbook";

export const dynamic = "force-dynamic";

export default function GuestbookPage() {
  const {
    entries,
    fetchError,
    isLoading,
    isFormOpen,
    main,
    setIsFormOpen,
    handleFormSuccess,
  } = useGuestbook();

  return (
    <div className="min-h-screen p-4 md:p-8 pt-6 pb-24" ref={main}>
      <div className="page-header flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <Database className="w-8 h-8 text-primary animate-pulse" />
            <h1 className="text-4xl font-bold font-headline tracking-tight bg-linear-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-300% animate-gradient">
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
          <p className="font-code text-sm animate-pulse">
            DECRYPTING ARCHIVES...
          </p>
        </div>
      ) : fetchError ? (
        <div className="border border-destructive/50 bg-destructive/10 p-6 rounded-lg max-w-2xl mx-auto text-center">
          <h3 className="font-headline text-destructive text-xl mb-2">
            CONNECTION ERROR
          </h3>
          <p className="font-mono text-sm text-muted-foreground">
            {fetchError}
          </p>
        </div>
      ) : entries.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-center border border-dashed border-primary/20 rounded-xl bg-card/10">
          <p className="font-code text-primary/60 mb-4">// NO RECORDS FOUND</p>
          <p className="text-muted-foreground max-w-md">
            The archives are currently empty. Be the first to permanently record
            your signal in our database.
          </p>
        </div>
      ) : (
        <div className="guestbook-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {entries.map((entry, index) => (
            <GuestbookCard key={entry.id} entry={entry} index={index} />
          ))}
        </div>
      )}

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
