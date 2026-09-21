"use client";

import Link from "next/link";
import { useState } from "react";
import { BlogFilterGrid } from "@/components/blog/BlogFilterGrid";
import { BlogStoryCover } from "@/components/blog/BlogStoryCover";
import type { BlogPost } from "@/lib/blog";

type Story = { id: string; name: string; quote: string; author: string };

export function BlogExplore({ posts, stories }: { posts: BlogPost[]; stories: Story[] }) {
  const [tab, setTab] = useState<"blog" | "stories">("blog");

  return (
    <section className="container blog-explore" aria-label="balinaOS dünyasını keşfedin" data-reveal>
      <h2 className="blog-explore__title serif">balinaOS dünyasını keşfedin</h2>
      <div className="blog-explore__layout">
        <div className="blog-explore__sidebar">
          <button type="button" className={tab === "blog" ? "is-active" : ""} onClick={() => setTab("blog")}>
            Blog
          </button>
          <div className="blog-explore__divider" />
          <button type="button" className={tab === "stories" ? "is-active" : ""} onClick={() => setTab("stories")}>
            Müşteri hikayeleri
          </button>
        </div>

        <div className="blog-explore__content">
          {tab === "blog" ? (
            <>
              <p className="blog-explore__eyebrow">Son blog yazıları</p>
              <BlogFilterGrid posts={posts} />
            </>
          ) : (
            <>
              <p className="blog-explore__eyebrow">Müşteri hikayeleri</p>
              <div className="blog-story-grid">
                {stories.map((s, i) => (
                  <Link key={s.id} href="/#musteriler" className="blog-story-card">
                    <BlogStoryCover name={s.name} index={i} />
                    <div className="blog-story-card__body">
                      <p className="blog-story-card__quote">&ldquo;{s.quote}&rdquo;</p>
                      <p className="blog-story-card__author">{s.author}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
