import type { Metadata } from "next";
import { KarMarjiCalculator } from "@/components/tools/KarMarjiCalculator";
import { ToolBreadcrumb } from "@/components/tools/ToolBreadcrumb";
import { ToolFaq, type ToolFaqItem } from "@/components/tools/ToolFaq";
import { ToolHero } from "@/components/tools/ToolHero";

const title = "Kâr Marjı Hesaplama: Ücretsiz Hesaplayıcı";
const description =
  "Alış ve satış fiyatınızı girin; kâr tutarınızı, kâr marjınızı ve kâr oranınızı (markup) anında hesaplayın.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/araclar/kar-marji-hesaplama" },
  openGraph: { title, description, url: "/araclar/kar-marji-hesaplama" },
};

const faqs: ToolFaqItem[] = [
  {
    q: "Kâr marjı nasıl hesaplanır?",
    a: "Kâr marjı, kârın satış fiyatına oranıdır: (Satış fiyatı − Alış fiyatı) / Satış fiyatı × 100. Örneğin 200 TL'ye aldığınız bir ürünü 350 TL'ye satarsanız kâr marjınız yaklaşık %43'tür.",
  },
  {
    q: "Kâr marjı ile kâr oranı (markup) arasındaki fark nedir?",
    a: "Kâr marjı kârı satış fiyatına oranlar, kâr oranı (markup) ise kârı alış fiyatına oranlar. Aynı örnekte kâr oranı (150 / 200) × 100 = %75 olur. İkisi farklı sorulara cevap verir; fiyatlandırma yaparken hangisini kullandığınıza dikkat edin.",
  },
  {
    q: "Bu hesaba komisyon ve kargo dahil mi?",
    a: "Hayır, bu araç yalnızca alış ve satış fiyatı arasındaki farkı hesaplar. Pazaryeri komisyonu, kargo ve diğer kesintileri de görmek isterseniz Trendyol, Hepsiburada veya TikTok Shop komisyon hesaplayıcılarımızı da kullanabilirsiniz.",
  },
  {
    q: "İyi bir kâr marjı yüzde kaç olmalı?",
    a: "Bu, sektöre ve ürün kategorisine göre büyük ölçüde değişir; tekstilde ve el yapımı ürünlerde marjlar genelde daha yüksek, elektronikte daha düşük olur. Sabit bir eşik yoktur; kendi maliyet yapınıza göre hedef belirlemeniz gerekir.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function KarMarjiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <ToolHero
        title="Kâr Marjı Hesaplama"
        lead="Alış ve satış fiyatınızı girin; kâr tutarınızı ve marjınızı saniyeler içinde görün."
      />
      <section className="container tool-calc" aria-label="Kâr marjı hesaplayıcı" data-reveal>
        <KarMarjiCalculator />
      </section>
      <ToolFaq items={faqs} />
      <ToolBreadcrumb
        items={[
          { label: "Anasayfa", href: "/" },
          { label: "Ücretsiz Araçlar" },
          { label: "Kâr Marjı Hesaplama" },
        ]}
      />
    </>
  );
}
