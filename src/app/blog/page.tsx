import type { Metadata } from "next";
import { BlogExplore } from "@/components/blog/BlogExplore";
import { BlogMarquee } from "@/components/blog/BlogMarquee";
import { storyData } from "@/components/Sections";
import { ToolBreadcrumb } from "@/components/tools/ToolBreadcrumb";
import { blogPosts } from "@/lib/blog";
import { site } from "@/lib/site";

const title = "Medya";
const description =
  "Pazaryerleri, e-Fatura, sosyal ticaret ve stok yönetimi üzerine balinaOS'un e-ticaret rehberleri ve müşteri hikayeleri.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/blog" },
  openGraph: { title: `${title} | ${site.name}`, description, url: "/blog" },
};

export default function BlogIndexPage() {
  return (
    <>
      <section className="container blog-hero" aria-labelledby="blog-title" data-reveal>
        <h1 id="blog-title" className="blog-hero__title serif">
          Medya
        </h1>
        <p className="blog-hero__lead">
          Pazaryerleri, e-Fatura, sosyal ticaret ve operasyon üzerine pratik, iddiasız rehberler. Bunu kuran ekipten
          yazıldı.
        </p>
      </section>

      <BlogMarquee />

      <BlogExplore posts={blogPosts} stories={storyData} />

      <ToolBreadcrumb items={[{ label: "Anasayfa", href: "/" }, { label: "Medya" }]} />
    </>
  );
}
