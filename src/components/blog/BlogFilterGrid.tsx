import Link from "next/link";
import { BlogCardCover } from "@/components/blog/BlogCardCover";
import type { BlogPost } from "@/lib/blog";

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" });
}

export function BlogFilterGrid({ posts }: { posts: BlogPost[] }) {
  return (
    <div className="blog-grid" aria-label="Blog yazıları">
      {posts.map((post) => (
        <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-card">
          <BlogCardCover category={post.category} />
          <div className="blog-card__body">
            <h2>{post.title}</h2>
            <span className="blog-card__meta">{formatDate(post.date)}</span>
          </div>
        </Link>
      ))}
    </div>
  );
}
