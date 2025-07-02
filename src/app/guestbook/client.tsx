"use client";

import { useActionState, useEffect, useRef } from "react";
import { useFormStatus } from "react-dom";
import { addEntry } from "./actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

type ActionState = {
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

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending || !process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}>
      {pending ? "Submitting..." : "Sign Guestbook"}
    </Button>
  );
}

export function GuestbookForm({ onSuccess }: { onSuccess?: () => void }) {
  const [state, formAction] = useActionState<ActionState, FormData>(addEntry, initialState);
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

  return (
      <form action={formAction} ref={formRef} className="space-y-4 pt-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" required maxLength={50} disabled={!process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID} />
            {state.error?.fieldErrors?.name?.[0] && <p className="text-destructive text-sm mt-1">{state.error.fieldErrors.name[0]}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" name="message" required maxLength={500} rows={4} disabled={!process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID} />
            {state.error?.fieldErrors?.message?.[0] && <p className="text-destructive text-sm mt-1">{state.error.fieldErrors.message[0]}</p>}
          </div>
          <div className="flex justify-between items-center pt-2">
            <SubmitButton />
            {state.error?.formErrors?.[0] && <p className="text-destructive text-sm">{state.error.formErrors[0]}</p>}
          </div>
      </form>
  );
}
