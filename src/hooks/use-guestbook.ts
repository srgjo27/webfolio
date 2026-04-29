import { useState, useEffect, useCallback, useRef, useActionState } from "react";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { firestore } from "@/lib/firebase";
import { GuestbookEntry } from "@/types/guestbook";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { addEntry } from "@/app/guestbook/actions";
import { useToast } from "@/hooks/use-toast";

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
      orderBy("createdAt", "desc"),
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
        error: "Permission Denied. Check Firestore rules.",
      };
    } else if (firebaseError.code === "not-found") {
      return { entries: [], error: "Database Not Found." };
    } else {
      return { entries: [], error: "An unexpected error occurred." };
    }
  }
}

export function useGuestbook() {
  const [entries, setEntries] = useState<GuestbookEntry[]>([]);
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const main = useRef<HTMLDivElement>(null);

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

      tl.from(".page-header", { opacity: 0, y: -20 }).from(
        ".guestbook-grid",
        { opacity: 0 },
        "-=0.2",
      );
    },
    { scope: main },
  );

  useGSAP(
    () => {
      if (!isLoading && entries.length > 0) {
        gsap.from(".guestbook-card", {
          opacity: 0,
          y: 20,
          stagger: 0.1,
          duration: 0.5,
          clearProps: "all",
        });
      }
    },
    { scope: main, dependencies: [isLoading, entries] },
  );

  const handleFormSuccess = () => {
    setIsFormOpen(false);
    fetchEntries();
  };

  return {
    entries,
    fetchError,
    isLoading,
    isFormOpen,
    main,
    setIsFormOpen,
    handleFormSuccess,
  };
}

export type ActionState = {
  error: {
    formErrors: string[];
    fieldErrors: {
      name?: string[];
      message?: string[];
    };
  } | null;
  message: string | null;
};

const initialState: ActionState = {
  error: null,
  message: null,
};

export function useGuestbookForm({ onSuccess }: { onSuccess?: () => void }) {
  const [state, formAction] = useActionState<ActionState, FormData>(
    addEntry,
    initialState
  );
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (state.message) {
      formRef.current?.reset();
      toast({
        title: "Success!",
        description: state.message,
      });
      if (onSuccess) {
        onSuccess();
      }
    }
  }, [state.message, toast, onSuccess]);

  return { state, formAction, formRef };
}
