"use client";

import { createContext, useContext, useState } from "react";

const SiteContext = createContext<any>(null);

export function SiteProvider({
  children,
  initialData,
}: {
  children: React.ReactNode;
  initialData: any;
}) {
  const [site] = useState(initialData);
  return <SiteContext.Provider value={site}>{children}</SiteContext.Provider>;
}

export function useSite() {
  return useContext(SiteContext);
}