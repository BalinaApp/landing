"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Icon } from "./Icon";

export type Story = {
  id: string;
  name: string;
  logo: React.ReactNode;
  quote: string;
  author: string;
  href: string;
  /** Video still shown as the card background (public/customers/<id>.jpg). */
  poster?: string;
  /** Testimonial video (public/customers/<id>.mp4). Enables background playback and the "watch" button. */
  video?: string;
};

function StoryMedia({ story, index, active }: { story: Story; index: number; active: boolean }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (active && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) v.play().catch(() => {});
    else v.pause();
  }, [active]);

  if (story.video) {
    return (
      <video
        ref={videoRef}
        className="story__media"
        src={story.video}
        poster={story.poster}
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      />
    );
  }
  if (story.poster) {
    return <Image className="story__media" src={story.poster} alt="" fill sizes="(max-width: 720px) 100vw, 60vw" />;
  }
  // No media yet: a soft, out-of-focus "video still" placeholder.
  return <span className={`story__media still still--${(index % 3) + 1}`} aria-hidden="true" />;
}

export function Stories({ stories }: { stories: Story[] }) {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState<Story | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const current = stories[active];

  useEffect(() => {
    const d = dialogRef.current;
    if (!d) return;
    if (playing && !d.open) d.showModal();
    if (!playing && d.open) d.close();
  }, [playing]);

  return (
    <>
      <div className="stories__row">
        {stories.map((s, i) => (
          <article
            key={s.id}
            className={`story${i === active ? " is-active" : ""}`}
            onMouseEnter={() => window.matchMedia("(hover: hover)").matches && setActive(i)}
          >
            <StoryMedia story={s} index={i} active={i === active} />
            <button
              type="button"
              className="story__hit"
              aria-pressed={i === active}
              aria-label={`${s.name} yorumunu göster`}
              onClick={() => setActive(i)}
            />
            <div className="story__foot">
              <span className="story__logo">{s.logo}</span>
              <span className="story__actions">
                {s.video && (
                  <button type="button" onClick={() => setPlaying(s)} tabIndex={i === active ? 0 : -1}>
                    Videoyu İzle <Icon name="play" className="icon--fill" />
                  </button>
                )}
                <a href={s.href} tabIndex={i === active ? 0 : -1}>
                  Hikayeyi Oku <Icon name="arrow-right" />
                </a>
              </span>
            </div>
          </article>
        ))}
      </div>

      <figure className="quote is-swapping" key={current.id} aria-live="polite">
        <svg className="quote__mark" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
          <path d="M10.5 6.2C7.6 8 6 10.4 6 13c0 2.4 1.5 4 3.5 4 1.7 0 3-1.2 3-2.8 0-1.5-1-2.6-2.4-2.6-.2 0-.4 0-.6.1.2-1.7 1.5-3.3 3.3-4.3l-1.3-1.2zm8.2 0C15.8 8 14.2 10.4 14.2 13c0 2.4 1.5 4 3.5 4 1.7 0 3-1.2 3-2.8 0-1.5-1-2.6-2.4-2.6-.2 0-.4 0-.6.1.2-1.7 1.5-3.3 3.3-4.3l-1.3-1.2z" />
        </svg>
        <div className="quote__body">
          <blockquote>{current.quote}</blockquote>
          <figcaption>{current.author}</figcaption>
        </div>
      </figure>

      <dialog ref={dialogRef} className="video-modal" onClose={() => setPlaying(null)} aria-label="Müşteri videosu">
        {playing?.video && <video src={playing.video} poster={playing.poster} controls autoPlay playsInline />}
        <button type="button" className="video-modal__close" onClick={() => setPlaying(null)} aria-label="Videoyu kapat">
          <Icon name="x" />
        </button>
      </dialog>
    </>
  );
}
