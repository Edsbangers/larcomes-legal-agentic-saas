"use client";

import { createContext, useContext } from "react";
import { useScoutAgent } from "@/hooks/use-scout-agent";
import type { UseScoutAgentReturn } from "@/lib/scout-types";

const ScoutContext = createContext<UseScoutAgentReturn | null>(null);

export function ScoutProvider({ children }: { children: React.ReactNode }) {
  const scout = useScoutAgent();
  return (
    <ScoutContext.Provider value={scout}>{children}</ScoutContext.Provider>
  );
}

export function useScout(): UseScoutAgentReturn {
  const ctx = useContext(ScoutContext);
  if (!ctx) {
    throw new Error("useScout must be used within a ScoutProvider");
  }
  return ctx;
}
