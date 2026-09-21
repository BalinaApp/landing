import type { Metadata } from "next";
import { MarketplaceKomisyonCalculator } from "@/components/tools/MarketplaceKomisyonCalculator";
import { ToolBreadcrumb } from "@/components/tools/ToolBreadcrumb";
import { ToolFaq, type ToolFaqItem } from "@/components/tools/ToolFaq";
import { ToolHero } from "@/components/tools/ToolHero";

const title = "TikTok Shop Komisyon Hesaplama: Ücretsiz Hesaplayıcı";
const description =
  "Satış fiyatınızı ve komisyon oranınızı girin; TikTok Shop'ta satıştan sonra elinize geçecek net kazancı anında görün.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/araclar/tiktok-shop-komisyon-hesaplama" },
  openGraph: { title, description, url: "/araclar/tiktok-shop-komisyon-hesaplama" },
};

const faqs: ToolFaqItem[] = [
  {
    q: "TikTok Shop komisyon oranı ne kadar?",
    a: "TikTok Shop'ta komisyon oranı kategoriye ve kampanyalara göre değişir. Güncel oranı TikTok Shop Seller Center panelinizdeki komisyon tablosundan kontrol edip bu araca girmenizi öneririz.",
  },
  {
    q: "Canlı yayın ve video satışlarında komisyon farklı mı?",
    a: "TikTok Shop'ta canlı yayın, video ve vitrin üzerinden gelen siparişler için komisyon oranı farklılaşabilir. Bu araç, girdiğiniz tek bir oranı satış fiyatına uygular; farklı satış kanalları için ayrı hesaplama yapabilirsiniz.",
  },
  {
    q: "Net kazanç hesabına hangi kalemler dahil?",
    a: "Bu araç satış fiyatınızdan komisyon tutarını ve girdiyseniz kargo bedelinizi düşerek net kazancınızı hesaplar. Hizmet bedeli, iade oranı gibi diğer kesintiler dahil değildir; bunları da düşmek isterseniz kargo alanına ekleyebilirsiniz.",
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

export default function TiktokShopKomisyonPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <ToolHero
        title="TikTok Shop Komisyon Hesaplama"
        lead="Satış fiyatını ve komisyon oranını girin; kargo bedelini de eklerseniz net kazancınızı görün."
      />
      <section className="container tool-calc" aria-label="TikTok Shop komisyon hesaplayıcı" data-reveal>
        <MarketplaceKomisyonCalculator
          platform="TikTok Shop"
          panelName="TikTok Shop Seller Center"
          defaultRate="10"
          deco={{ src: "/illustrations/branch.png", width: 160, height: 269 }}
        />
      </section>
      <ToolFaq items={faqs} />
      <ToolBreadcrumb
        items={[
          { label: "Anasayfa", href: "/" },
          { label: "Ücretsiz Araçlar" },
          { label: "TikTok Shop Komisyon Hesaplama" },
        ]}
      />
    </>
  );
}
