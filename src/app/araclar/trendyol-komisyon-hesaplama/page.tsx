import type { Metadata } from "next";
import { ToolBreadcrumb } from "@/components/tools/ToolBreadcrumb";
import { ToolFaq, type ToolFaqItem } from "@/components/tools/ToolFaq";
import { ToolHero } from "@/components/tools/ToolHero";
import { MarketplaceKomisyonCalculator } from "@/components/tools/MarketplaceKomisyonCalculator";

const title = "Trendyol Komisyon Hesaplama: Ücretsiz Hesaplayıcı";
const description =
  "Satış fiyatınızı ve komisyon oranınızı girin; Trendyol'da satıştan sonra elinize geçecek net kazancı anında görün.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/araclar/trendyol-komisyon-hesaplama" },
  openGraph: { title, description, url: "/araclar/trendyol-komisyon-hesaplama" },
};

const faqs: ToolFaqItem[] = [
  {
    q: "Trendyol komisyon oranı ne kadar?",
    a: "Trendyol'da komisyon oranı kategoriye göre değişir ve zaman içinde güncellenebilir. Güncel oranı Trendyol Partner panelinizdeki komisyon tablosundan kontrol edip bu araca girmenizi öneririz.",
  },
  {
    q: "Net kazanç hesabına hangi kalemler dahil?",
    a: "Bu araç satış fiyatınızdan komisyon tutarını ve girdiyseniz kargo bedelinizi düşerek net kazancınızı hesaplar. Hizmet bedeli, iade oranı gibi diğer kesintiler dahil değildir; bunları da düşmek isterseniz kargo alanına ekleyebilirsiniz.",
  },
  {
    q: "Komisyon KDV dahil mi hesaplanıyor?",
    a: "Bu araç girdiğiniz oranı doğrudan satış fiyatına uygular. Trendyol faturalarında komisyon genelde KDV hariç gösterilir; net rakam için Partner panelindeki hakediş raporunuzu esas alın.",
  },
  {
    q: "Birden fazla ürün için toplu hesaplama yapabilir miyim?",
    a: "Bu araç tek ürün üzerinden hesaplama yapar. balinaOS'a bağlandığınızda ise tüm siparişleriniz için komisyon, kargo ve net kâr raporlarını otomatik ve toplu şekilde görebilirsiniz.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function TrendyolKomisyonPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <ToolHero
        title="Trendyol Komisyon Hesaplama"
        lead="Satış fiyatını ve komisyon oranını girin; kargo bedelini de eklerseniz net kazancınızı görün."
      />
      <section className="container tool-calc" aria-label="Trendyol komisyon hesaplayıcı" data-reveal>
        <MarketplaceKomisyonCalculator
          platform="Trendyol"
          panelName="Trendyol Partner"
          defaultRate="18"
          deco={{ src: "/illustrations/fish.png", width: 300, height: 99 }}
        />
      </section>
      <ToolFaq items={faqs} />
      <ToolBreadcrumb
        items={[
          { label: "Anasayfa", href: "/" },
          { label: "Ücretsiz Araçlar" },
          { label: "Trendyol Komisyon Hesaplama" },
        ]}
      />
    </>
  );
}
