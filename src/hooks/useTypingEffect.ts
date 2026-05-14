"use client";

import { useEffect, useMemo, useState } from "react";


type Options = {
  speedMs?: number;
  pauseMs?: number;
};

export function useTypingEffect(text: string, options?: Options) {
  const speedMs = options?.speedMs ?? 70;
  const pauseMs = options?.pauseMs ?? 900;
  const [index, setIndex] = useState(0);

  const safeText = useMemo(() => text ?? "", [text]);

  useEffect(() => {
    if (!safeText) return;
    const atEnd = index >= safeText.length;
    const t = window.setTimeout(
      () => {
        setIndex(atEnd ? 0 : index + 1);
      },
      atEnd ? pauseMs : speedMs,
    );
    return () => window.clearTimeout(t);
  }, [index, pauseMs, safeText, speedMs]);

  return safeText.slice(0, index);
}
