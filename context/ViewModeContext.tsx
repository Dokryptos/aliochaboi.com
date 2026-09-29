"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type ViewMode = "list" | "grid";

interface ViewModeContextType {
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
  homeResetKey: number;
  resetHome: () => void;
}

const ViewModeContext = createContext<ViewModeContextType | undefined>(
  undefined
);

export function ViewModeProvider({ children }: { children: ReactNode }) {
  const [viewMode, setViewMode] = useState<ViewMode>("list");
  const [homeResetKey, setHomeResetKey] = useState(0);

  const resetHome = () => setHomeResetKey((key) => key + 1);

  return (
    <ViewModeContext.Provider
      value={{ viewMode, setViewMode, homeResetKey, resetHome }}
    >
      {children}
    </ViewModeContext.Provider>
  );
}

export function useViewMode() {
  const context = useContext(ViewModeContext);
  if (!context) {
    throw new Error("useViewMode must be used within a ViewModeProvider");
  }
  return context;
}
