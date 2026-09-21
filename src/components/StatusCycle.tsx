"use client";

import { useEffect, useState } from "react";
import { Icon, type IconName } from "./Icon";

export type CycleStage = { icon: IconName; label: string; tone: "status--muted" | "status--warn" | "status--ok" };

/** A status pill that steps through 2-3 stages over time (queued → processing → ready), instead
 * of sitting frozen on one. Remounting the pill on each stage (via `key`) drives the crossfade. */
export function StatusCycle({ stages, interval = 2200 }: { stages: CycleStage[]; interval?: number }) {
  const [i, setI] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => setI((v) => (v + 1) % stages.length), interval);
    return () => window.clearInterval(id);
  }, [stages.length, interval]);

  const stage = stages[i];
  return (
    <span key={i} className={`status ${stage.tone} status--cycle`}>
      <Icon name={stage.icon} /> {stage.label}
    </span>
  );
}
