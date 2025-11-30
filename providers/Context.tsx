"use client"
import { createContext, useState, ReactNode } from "react"

interface ContextType {
  splits: "FBW" | "PPL" | "UpperLower" | "Hybrid" | "BroSplit"
  setSplits: (
    split: "FBW" | "PPL" | "UpperLower" | "Hybrid" | "BroSplit"
  ) => void
}

export const Context = createContext<ContextType | undefined>(undefined)

export default function ContextProvider({ children }: { children: ReactNode }) {
  const [splits, setSplits] = useState<
    "FBW" | "PPL" | "UpperLower" | "Hybrid" | "BroSplit"
  >("FBW")

  const contextValue: ContextType = {
    splits,
    setSplits,
  }

  return <Context.Provider value={contextValue}>{children}</Context.Provider>
}
