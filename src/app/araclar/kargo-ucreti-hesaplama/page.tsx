import type { Metadata } from "next";
import { KargoUcretiCalculator } from "@/components/tools/KargoUcretiCalculator";
import { ToolBreadcrumb } from "@/components/tools/ToolBreadcrumb";
import { ToolFaq, type ToolFaqItem } from "@/components/tools/ToolFaq";
import { ToolHero } from "@/components/tools/ToolHero";

const title = "Kargo Ücreti Hesaplama: Ücretsiz Hesaplayıcı";
const description =
  "Paketinizin ölçülerini ve kargo firmanızın birim ücretini girin; tahmini kargo ücretinizi anında hesaplayın.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/araclar/kargo-ucreti-hesaplama" },
  openGraph: { title, description, url: "/araclar/kargo-ucreti-hesaplama" },
};

const faqs: ToolFaqItem[] = [
  {
    q: "Kargo ücreti nasıl hesaplanır?",
    a: "Kargo firmaları önce paketin desi değerini ((En × Boy × Yükseklik) / 3000) hesaplar, gerçek ağırlıkla karşılaştırıp büyük olanını esas alır ve bu değeri kendi kg/desi birim ücretiyle çarpıp üzerine sabit bir hizmet bedeli ekler.",
  },
  {
    q: "Birim ücreti nereden öğrenirim?",
    a: "Kg/desi birim ücreti ve sabit hizmet bedeli, anlaştığınız kargo firmasına ve anlaşma koşullarınıza göre değişir. Bu bilgiyi kargo firmanızın size sunduğu tarife tablosundan veya hesap yöneticinizden öğrenebilirsiniz.",
  },
  {
    q: "Bu araç kesin fiyat mı veriyor?",
    a: "Hayır, bu araç yalnızca girdiğiniz değerlerle bir tahmin yapar. Gerçek ücret; bölge, yakıt sürcharge'ı, KDV ve kargo firmanızın güncel tarifesine göre farklılık gösterebilir.",
  },
  {
    q: "Desi mi ağırlık mı daha belirleyici?",
    a: "Hacimli ama hafif paketlerde genelde desi değeri, ağır ve küçük paketlerde ise gerçek ağırlık daha yüksek çıkar ve ücretlendirmede o esas alınır.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function KargoUcretiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <ToolHero
        title="Kargo Ücreti Hesaplama"
        lead="Paketinizin ölçülerini ve kargo firmanızın birim ücretini girin; tahmini tutarı görün."
      />
      <section className="container tool-calc" aria-label="Kargo ücreti hesaplayıcı" data-reveal>
        <KargoUcretiCalculator />
      </section>
      <ToolFaq items={faqs} />
      <ToolBreadcrumb
        items={[
          { label: "Anasayfa", href: "/" },
          { label: "Ücretsiz Araçlar" },
          { label: "Kargo Ücreti Hesaplama" },
        ]}
      />
    </>
  );
}
