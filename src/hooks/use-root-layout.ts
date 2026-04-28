import { useState, useEffect, useMemo, useRef } from "react";
import { usePathname } from "next/navigation";
import { BINARY_CONFIG } from "@/constants/layout-data";
import { generateBinaryText } from "@/lib/layout-utils";
import { useEntryGateAnimation } from "@/hooks/use-entry-gate-animation";

export function useRootLayout() {
  const pathname = usePathname();
  const [isUnlocked, setIsUnlocked] = useState<boolean>(false);
  const [isClient, setIsClient] = useState<boolean>(false);
  const [status, setStatus] = useState<"idle" | "scanning" | "success">("idle");
  const [scanProgress, setScanProgress] = useState<number>(0);
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const binaryText = useMemo(
    () => generateBinaryText(BINARY_CONFIG.rows, BINARY_CONFIG.columns),
    []
  );

  const handleUnlock = () => setIsUnlocked(true);

  const handleInitialize = () => {
    if (status !== "idle") return;
    setStatus("scanning");
  };

  useEntryGateAnimation({
    status,
    container,
    setStatus,
    setScanProgress,
    handleUnlock,
  });

  return {
    isUnlocked,
    isClient,
    binaryText,
    binaryConfig: BINARY_CONFIG,
    status,
    scanProgress,
    containerRef: container,
    pathname,
    handleUnlock,
    handleInitialize,
  };
}
