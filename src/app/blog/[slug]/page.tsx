import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Icon } from "@/components/Icon";
import { BlogBody } from "@/components/blog/BlogBody";
import { BlogCardCover } from "@/components/blog/BlogCardCover";
import { BlogCover } from "@/components/blog/BlogCover";
import { BlogCta } from "@/components/blog/BlogCta";
import { BlogProductCallout } from "@/components/blog/BlogProductCallout";
import { BlogSummary } from "@/components/blog/BlogSummary";
import { ToolBreadcrumb } from "@/components/tools/ToolBreadcrumb";
import { blogPosts, getBlogPost, getToc } from "@/lib/blog";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: `${post.title} | ${site.name}`,
      description: post.excerpt,
      url: `/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
    },
  };
}

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.category === post.category && p.slug !== post.slug).slice(0, 3);
  const toc = getToc(post);
  // Never split right after a heading — keep it with the paragraph that explains it.
  let splitAt = Math.ceil(post.body.length / 2);
  if (post.body[splitAt - 1]?.type === "h2") splitAt += 1;
  const firstHalf = post.body.slice(0, splitAt);
  const secondHalf = post.body.slice(splitAt);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Organization", name: site.name },
    publisher: { "@type": "Organization", name: site.name },
    mainEntityOfPage: `${site.url}/blog/${post.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <article>
        <div className="container blog-back" data-reveal>
          <Link href="/blog">
            <Icon name="arrow-right" className="blog-back__arrow" /> Medya&apos;ya dön
          </Link>
        </div>

        <div className="container blog-post-hero" data-reveal>
          <div className="blog-post-hero__meta">
            <span>{post.category}</span>
            <span className="dot" aria-hidden="true" />
            <span>Güncellendi: {formatDate(post.date)}</span>
            <span className="dot" aria-hidden="true" />
            <span>{post.readingMinutes} dk okuma</span>
          </div>
          <h1 className="blog-post-hero__title serif">{post.title}</h1>
        </div>

        <div className="container" data-reveal>
          <BlogCover category={post.category} />
        </div>

        <div className="container blog-post-layout" data-reveal>
          <div>
            <BlogSummary text={post.excerpt} />
            <BlogBody blocks={firstHalf} />
            <BlogProductCallout label={post.relatedLink.label} href={post.relatedLink.href} />
            <BlogBody blocks={secondHalf} />
            <BlogCta />
          </div>

          {toc.length > 0 && (
            <aside className="blog-toc" aria-label="İçindekiler">
              <p className="blog-toc__title">İçindekiler</p>
              <nav>
                <ul>
                  {toc.map((t) => (
                    <li key={t.id}>
                      <a href={`#${t.id}`}>{t.text}</a>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>
          )}
        </div>
      </article>

      {related.length > 0 && (
        <section className="container blog-related" aria-label="İlgili yazılar" data-reveal>
          <h2 className="blog-related__title serif">Bu kategoride diğer yazılar</h2>
          <div className="blog-grid" style={{ paddingBottom: 0 }}>
            {related.map((r) => (
              <Link key={r.slug} href={`/blog/${r.slug}`} className="blog-card">
                <BlogCardCover category={r.category} />
                <div className="blog-card__body">
                  <h2>{r.title}</h2>
                  <span className="blog-card__meta">{formatDate(r.date)}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      <ToolBreadcrumb items={[{ label: "Anasayfa", href: "/" }, { label: "Medya", href: "/blog" }, { label: post.title }]} />
    </>
  );
}
