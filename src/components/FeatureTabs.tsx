"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export type FeatureTab = { id: string; label: string; desc: string; panel: React.ReactNode };

const DURATION = 9000;

export function FeatureTabs({ tabs }: { tabs: FeatureTab[] }) {
  const [active, setActive] = useState(0);
  const [entering, setEntering] = useState(false);
  const [playing, setPlaying] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const select = useCallback((i: number, focus = false) => {
    setActive(i);
    setEntering(true);
    const tab = tabRefs.current[i];
    if (focus) tab?.focus();
    // Keep the selected pill visible on mobile's horizontal tab strip without scrolling the page.
    const strip = tab?.parentElement;
    if (tab && strip && strip.scrollWidth > strip.clientWidth) {
      strip.scrollTo({ left: tab.offsetLeft - 16, behavior: "smooth" });
    }
  }, []);

  // Deep links such as #instagram open the matching tab.
  useEffect(() => {
    const fromHash = () => {
      const i = tabs.findIndex((t) => `#${t.id}` === window.location.hash);
      if (i >= 0) {
        setActive(i);
        rootRef.current?.scrollIntoView({ block: "start" });
      }
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, [tabs]);

  // The progress line (and autoplay) only runs while the section is on screen.
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setPlaying(entry.isIntersecting), { threshold: 0.25 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const onKeyDown = (e: React.KeyboardEvent) => {
    const last = tabs.length - 1;
    const keys: Record<string, number> = {
      ArrowDown: active + 1,
      ArrowRight: active + 1,
      ArrowUp: active - 1,
      ArrowLeft: active - 1,
      Home: 0,
      End: last,
    };
    const next = keys[e.key];
    if (next === undefined) return;
    e.preventDefault();
    select(next < 0 ? last : next > last ? 0 : next, true);
  };

  return (
    <div ref={rootRef} className="features__body">
      <div
        className={`tabs${playing ? " is-playing" : ""}`}
        role="tablist"
        aria-label="balinaOS modülleri"
        onKeyDown={onKeyDown}
        style={{ "--tab-duration": `${DURATION}ms` } as React.CSSProperties}
      >
        {tabs.map((t, i) => (
          <button
            key={t.id}
            ref={(el) => {
              tabRefs.current[i] = el;
            }}
            type="button"
            role="tab"
            id={`tab-${t.id}`}
            aria-selected={i === active}
            aria-controls={`panel-${t.id}`}
            tabIndex={i === active ? 0 : -1}
            className="tab"
            onClick={() => select(i)}
          >
            <span className="tab__label">
              <span>{t.label}</span>
              {i === active && <span className="tab__desc">{t.desc}</span>}
            </span>
            <span
              className="tab__bar"
              aria-hidden="true"
              onAnimationEnd={() => {
                if (i === active) select((active + 1) % tabs.length);
              }}
            />
          </button>
        ))}
      </div>

      <div>
        {tabs.map((t, i) => (
          <div
            key={t.id}
            id={`panel-${t.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${t.id}`}
            hidden={i !== active}
            className={`panel${entering && i === active ? " is-entering" : ""}`}
            onAnimationEnd={(e) => {
              if (e.target === e.currentTarget.lastElementChild) setEntering(false);
            }}
          >
            {t.panel}
          </div>
        ))}
      </div>
    </div>
  );
}
