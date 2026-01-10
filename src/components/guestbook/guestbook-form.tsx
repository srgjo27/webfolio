"use client";

import { useActionState, useEffect, useRef } from "react";
import { useFormStatus } from "react-dom";
import { addEntry } from "@/app/guestbook/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send, Terminal } from "lucide-react";

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
        <Button
            type="submit"
            disabled={pending || !process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-code relative overflow-hidden group"
        >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <span className="relative flex items-center gap-2">
                {pending ? "ENCRYPTING..." : "TRANSMIT MESSAGE"}
                {!pending && <Send className="w-4 h-4" />}
            </span>
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
                title: "TRANSMISSION SUCCESSFUL",
                description: "Your message has been encrypted and stored in the archives.",
                className: "border-primary/50 bg-black/90 font-mono-cyber text-primary",
            });
            if (onSuccess) {
                onSuccess();
            }
        }
    }, [state.message, toast, onSuccess]);

    return (
        <form action={formAction} ref={formRef} className="space-y-6 pt-4">
            <div className="space-y-2">
                <Label htmlFor="name" className="font-code text-xs text-accent uppercase tracking-widest">
                    Identifier (Name)
                </Label>
                <div className="relative">
                    <Terminal className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                        id="name"
                        name="name"
                        required
                        maxLength={50}
                        placeholder="Enter alias..."
                        className="pl-9 font-mono bg-black/50 border-primary/20 focus:border-accent/50"
                        disabled={!process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}
                    />
                </div>
                {state.error?.fieldErrors?.name?.[0] && <p className="text-destructive text-sm mt-1 font-mono">{state.error.fieldErrors.name[0]}</p>}
            </div>

            <div className="space-y-2">
                <Label htmlFor="message" className="font-code text-xs text-accent uppercase tracking-widest">
                    Data Packet (Message)
                </Label>
                <Textarea
                    id="message"
                    name="message"
                    required
                    maxLength={500}
                    rows={4}
                    placeholder="Initialising data stream..."
                    className="font-mono bg-black/50 border-primary/20 focus:border-accent/50 resize-none"
                    disabled={!process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}
                />
                {state.error?.fieldErrors?.message?.[0] && <p className="text-destructive text-sm mt-1 font-mono">{state.error.fieldErrors.message[0]}</p>}
            </div>

            <div className="pt-2">
                <SubmitButton />
                {state.error?.formErrors?.[0] && <p className="text-destructive text-sm mt-2 font-mono">{state.error.formErrors[0]}</p>}
            </div>
        </form>
    );
}
