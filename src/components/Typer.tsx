"use client";

import { useEffect, useState } from "react";

/** Types and deletes a rotating list of phrases. SSR renders the first phrase in full. */
export function Typer({ phrases }: { phrases: string[] }) {
  const [text, setText] = useState(phrases[0]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let index = 0;
    let length = phrases[0].length;
    let deleting = true;
    let timer: number;

    const tick = () => {
      let delay: number;
      if (deleting) {
        length -= 1;
        delay = 22;
        if (length === 0) {
          deleting = false;
          index = (index + 1) % phrases.length;
          delay = 300;
        }
      } else {
        length += 1;
        delay = 42;
        if (length === phrases[index].length) {
          deleting = true;
          delay = 2600;
        }
      }
      setText(phrases[index].slice(0, length));
      timer = window.setTimeout(tick, delay);
    };

    timer = window.setTimeout(tick, 2600);
    return () => window.clearTimeout(timer);
  }, [phrases]);

  return (
    <>
      {text}
      <span className="prompt__caret" aria-hidden="true" />
    </>
  );
}
