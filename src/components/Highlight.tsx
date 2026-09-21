"use client";

import { createContext, useContext, useRef, useState, type ReactNode, type ElementType, type ComponentPropsWithoutRef } from "react";
import { motion } from "motion/react";

type Rect = { x: number; y: number; width: number; height: number };

type HighlightCtx = {
  containerRef: React.RefObject<HTMLElement | null>;
  setRect: (r: Rect | null) => void;
};

const HighlightContext = createContext<HighlightCtx | null>(null);

/**
 * A shared, sliding hover highlight (animate-ui's "Highlight" pattern): one absolutely-positioned
 * box tracks whichever HighlightItem is hovered and springs to its bounds, instead of each item
 * fading its own background in/out independently.
 */
export function Highlight<T extends ElementType = "div">({
  as,
  children,
  className,
  onMouseLeave,
  ...rest
}: { as?: T; children: ReactNode; className?: string } & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">) {
  const containerRef = useRef<HTMLElement>(null);
  const [rect, setRect] = useState<Rect | null>(null);
  const Comp = (as ?? "div") as ElementType;

  return (
    <HighlightContext.Provider value={{ containerRef, setRect }}>
      <Comp
        ref={containerRef}
        className={className}
        style={{ position: "relative" }}
        onMouseLeave={(e: React.MouseEvent) => {
          setRect(null);
          (onMouseLeave as React.MouseEventHandler | undefined)?.(e);
        }}
        {...rest}
      >
        <motion.div
          className="highlight__bg"
          initial={false}
          animate={rect ? { opacity: 1, x: rect.x, y: rect.y, width: rect.width, height: rect.height } : { opacity: 0 }}
          transition={{ type: "spring", stiffness: 500, damping: 40, mass: 0.5 }}
        />
        {children}
      </Comp>
    </HighlightContext.Provider>
  );
}

export function HighlightItem<T extends ElementType = "div">({
  as,
  children,
  className,
  onMouseEnter,
  ...rest
}: { as?: T; children: ReactNode; className?: string } & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">) {
  const ctx = useContext(HighlightContext);
  const ref = useRef<HTMLElement>(null);
  const Comp = (as ?? "div") as ElementType;

  const onEnter = (e: React.MouseEvent) => {
    const container = ctx?.containerRef.current;
    if (container && ref.current) {
      const c = container.getBoundingClientRect();
      const r = ref.current.getBoundingClientRect();
      ctx.setRect({ x: r.left - c.left, y: r.top - c.top, width: r.width, height: r.height });
    }
    (onMouseEnter as React.MouseEventHandler | undefined)?.(e);
  };

  return (
    <Comp ref={ref} className={className} onMouseEnter={onEnter} {...rest}>
      {children}
    </Comp>
  );
}
