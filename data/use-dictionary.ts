"use client";

import { useEffect, useState } from "react";
import { usePreferences } from "@/lib/preferences-context";
import { getDictionary } from "@/data"; 
import type { Dictionary } from "./types";

export function useDictionary() {
  const { preferences } = usePreferences();
  const [dictionary, setDictionary] = useState<Dictionary | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getDictionary(preferences.language)
      .then(setDictionary)
      .finally(() => setLoading(false));
  }, [preferences.language]);

  return { dictionary, loading }; 
}
