import type { Metadata } from "next";
import { KdvCalculator } from "@/components/tools/KdvCalculator";
import { ToolBreadcrumb } from "@/components/tools/ToolBreadcrumb";
import { ToolFaq, type ToolFaqItem } from "@/components/tools/ToolFaq";
import { ToolHero } from "@/components/tools/ToolHero";

const title = "KDV Hesaplama: Ücretsiz KDV Hesaplayıcı";
const description =
  "KDV dahil veya KDV hariç tutardan anında KDV tutarını hesaplayın. %1, %10 ve %20 oranlarıyla çalışan ücretsiz KDV hesaplama aracı.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/araclar/kdv-hesaplama" },
  openGraph: { title, description, url: "/araclar/kdv-hesaplama" },
};

const faqs: ToolFaqItem[] = [
  {
    q: "KDV dahil ve KDV hariç tutar arasındaki fark nedir?",
    a: "KDV hariç tutar, verginin eklenmediği net satış bedelidir. KDV dahil tutar ise bu net bedele KDV'nin eklenmiş halidir; müşterinin ödediği toplam tutardır.",
  },
  {
    q: "KDV tutarını nasıl hesaplarım?",
    a: "KDV hariç bir tutardan KDV dahil tutara gitmek için tutarı KDV oranıyla çarpıp üzerine eklersiniz. KDV dahil bir tutardan KDV hariç tutara gitmek için tutarı (1 + KDV oranı) değerine bölersiniz. Bu araç her iki yönü de otomatik hesaplar.",
  },
  {
    q: "Türkiye'de güncel KDV oranları nedir?",
    a: "Türkiye'de yaygın olarak kullanılan KDV oranları %1, %10 ve %20'dir. Ürün ve hizmet kategorisine göre oran değişebilir; faturalandırma öncesi güncel oranı mali müşavirinizle teyit etmenizi öneririz.",
  },
  {
    q: "Bu hesaplama aracı resmi bir belge yerine geçer mi?",
    a: "Hayır. Bu araç yalnızca hızlı bir tahmin sunar; resmi fatura, beyanname veya muhasebe kaydı için kullanılamaz.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function KdvHesaplamaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <ToolHero
        title="KDV Hesaplama"
        lead="Tutarınızı girin, KDV dahil veya KDV hariç hesaplamayı saniyeler içinde görün."
      />
      <section className="container tool-calc" aria-label="KDV hesaplayıcı" data-reveal>
        <KdvCalculator />
      </section>
      <ToolFaq items={faqs} />
      <ToolBreadcrumb
        items={[
          { label: "Anasayfa", href: "/" },
          { label: "Ücretsiz Araçlar" },
          { label: "KDV Hesaplama" },
        ]}
      />
    </>
  );
}
