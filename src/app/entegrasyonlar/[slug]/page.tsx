import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { IntegrationCompareTable } from "@/components/integrations/IntegrationCompareTable";
import { IntegrationFeatureGrid } from "@/components/integrations/IntegrationFeatureGrid";
import { IntegrationHero } from "@/components/integrations/IntegrationHero";
import { IntegrationSteps } from "@/components/integrations/IntegrationSteps";
import { IntegrationTestimonial } from "@/components/integrations/IntegrationTestimonial";
import { ToolBreadcrumb } from "@/components/tools/ToolBreadcrumb";
import { ToolFaq } from "@/components/tools/ToolFaq";
import { getIntegrationPage, integrationPages } from "@/lib/integrationPages";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return Object.keys(integrationPages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = getIntegrationPage(slug);
  if (!page) return {};
  return {
    title: page.title,
    description: page.lead,
    alternates: { canonical: `/entegrasyonlar/${page.slug}` },
    openGraph: {
      title: `${page.title} | ${site.name}`,
      description: page.lead,
      url: `/entegrasyonlar/${page.slug}`,
    },
  };
}

export default async function IntegrationPageRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getIntegrationPage(slug);
  if (!page) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <IntegrationHero page={page} />
      <IntegrationSteps page={page} />
      <IntegrationFeatureGrid page={page} />
      <IntegrationCompareTable page={page} />
      <IntegrationTestimonial storyId="koza-home" />
      <ToolFaq items={page.faqs} />
      <ToolBreadcrumb
        items={[{ label: "Anasayfa", href: "/" }, { label: "Entegrasyonlar", href: "/#entegrasyonlar" }, { label: page.title }]}
      />
    </>
  );
}
