import { AIEra } from "@/components/AIEra";
import { AppPreview } from "@/components/AppPreview";
import { DemoModal } from "@/components/DemoModal";
import { Features } from "@/components/Features";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Integrations } from "@/components/Integrations";
import { LogoCloud } from "@/components/LogoCloud";
import { Reveal } from "@/components/Reveal";
import { Footer } from "@/components/Footer";
import { Faq } from "@/components/Sections";
import { faqs, site } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${site.url}/#organization`,
      name: site.name,
      url: site.url,
      logo: `${site.url}/icon.svg`,
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      inLanguage: "tr-TR",
      publisher: { "@id": `${site.url}/#organization` },
    },
    {
      "@type": "SoftwareApplication",
      name: site.name,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description: site.description,
      url: site.url,
      inLanguage: "tr-TR",
      publisher: { "@id": `${site.url}/#organization` },
      featureList: [
        "Trendyol entegrasyonu",
        "Hepsiburada entegrasyonu",
        "TikTok Shop entegrasyonu",
        "e-Fatura ve e-Arşiv entegrasyonu",
        "DHL kargo entegrasyonu",
        "AI Instagram Chat",
        "AI ürün görseli oluşturma",
        "AI video oluşturma",
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <Header />
      <main>
        <Hero />
        <LogoCloud />
        <AppPreview />
        <Features />
        <section className="dark" aria-label="Entegrasyonlar">
          <div className="container">
            <Integrations />
          </div>
        </section>
        <section className="dark dark--deep" aria-label="Yapay zeka">
          <div className="container">
            <AIEra />
          </div>
        </section>
        {/* Geçici: proje tek sayfa yayınlanırken müşteri hikayeleri bölümü gizli. */}
        <Faq />
      </main>
      <Footer />
      {/* Geçici: proje tek sayfa yayınlanırken AI soru-cevap çubuğu gizli. */}
      <DemoModal />
      <Reveal />
    </>
  );
}
