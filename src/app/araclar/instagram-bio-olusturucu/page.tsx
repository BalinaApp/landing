import type { Metadata } from "next";
import { InstagramBioGenerator } from "@/components/tools/InstagramBioGenerator";
import { ToolBreadcrumb } from "@/components/tools/ToolBreadcrumb";
import { ToolFaq, type ToolFaqItem } from "@/components/tools/ToolFaq";
import { ToolHero } from "@/components/tools/ToolHero";

const title = "Instagram Bio Oluşturucu: Ücretsiz Araç";
const description =
  "Marka adınızı ve ne sattığınızı girin; hazır Instagram bio önerileri arasından seçin.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/araclar/instagram-bio-olusturucu" },
  openGraph: { title, description, url: "/araclar/instagram-bio-olusturucu" },
};

const faqs: ToolFaqItem[] = [
  {
    q: "Instagram bio kaç karakter olabilir?",
    a: "Instagram bio alanı en fazla 150 karakter alır. Bu araç önerileri kısa ve net tutacak şekilde tasarlanmıştır; yine de marka adınıza göre uzunluğu kontrol etmenizi öneririz.",
  },
  {
    q: "Bu araç yapay zeka mı kullanıyor?",
    a: "Hayır. Girdiğiniz bilgileri (marka adı, ürün, öne çıkan özellik, çağrı metni) hazır şablonlara yerleştiren basit bir üretici aracıdır.",
  },
  {
    q: "Bio'ma link nasıl eklerim?",
    a: "Instagram, bio'da tek bir tıklanabilir link alanı sunar. Birden fazla link paylaşmak isterseniz Linktree benzeri bir link sayfası kullanıp bio'nuzdaki çağrı metninde ona yönlendirebilirsiniz.",
  },
  {
    q: "Bio'daki emoji ve satır sonları görünüyor mu?",
    a: "Evet, Instagram bio alanı emoji ve satır sonlarını destekler. Bu araç önerileri satır sonlarıyla birlikte üretir; kopyalayıp doğrudan yapıştırabilirsiniz.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function InstagramBioPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <ToolHero
        title="Instagram Bio Oluşturucu"
        lead="Marka adınızı ve ne sattığınızı girin; hazır bio önerilerinden birini seçip kopyalayın."
      />
      <section className="container tool-calc" aria-label="Instagram bio oluşturucu" data-reveal>
        <InstagramBioGenerator />
      </section>
      <ToolFaq items={faqs} />
      <ToolBreadcrumb
        items={[
          { label: "Anasayfa", href: "/" },
          { label: "Ücretsiz Araçlar" },
          { label: "Instagram Bio Oluşturucu" },
        ]}
      />
    </>
  );
}
