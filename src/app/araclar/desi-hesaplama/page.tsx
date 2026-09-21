import type { Metadata } from "next";
import { DesiCalculator } from "@/components/tools/DesiCalculator";
import { ToolBreadcrumb } from "@/components/tools/ToolBreadcrumb";
import { ToolFaq, type ToolFaqItem } from "@/components/tools/ToolFaq";
import { ToolHero } from "@/components/tools/ToolHero";

const title = "Desi Hesaplama: Ücretsiz Kargo Desi Hesaplayıcı";
const description =
  "Paketinizin en, boy ve yüksekliğini girin; desi değerini ve kargoda esas alınacak ağırlığı anında hesaplayın.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/araclar/desi-hesaplama" },
  openGraph: { title, description, url: "/araclar/desi-hesaplama" },
};

const faqs: ToolFaqItem[] = [
  {
    q: "Desi nedir, nasıl hesaplanır?",
    a: "Desi, kargo firmalarının hacimsel ağırlığı ifade etmek için kullandığı birimdir. Formülü: (En × Boy × Yükseklik cm cinsinden) / 3000. Kargo firmaları genelde bu değer ile paketin gerçek kilogram ağırlığından büyük olanını ücretlendirmede esas alır.",
  },
  {
    q: "Desi mi, kilogram mı esas alınır?",
    a: "Kargo firmaları paketin desi değeri ile gerçek ağırlığını karşılaştırır ve hangisi büyükse o değeri ücretlendirmede kullanır. Hafif ama hacimli paketlerde genelde desi, ağır ve küçük paketlerde ise gerçek ağırlık esas alınır.",
  },
  {
    q: "Desi hesaplamasında ölçüler nasıl alınmalı?",
    a: "Paketin en geniş noktalarından en, boy ve yükseklik santimetre cinsinden ölçülür. Düzensiz şekilli paketlerde her yönün en geniş noktası baz alınmalıdır.",
  },
  {
    q: "Bu hesaplama tüm kargo firmaları için geçerli mi?",
    a: "3000 böleni Türkiye'deki çoğu kargo firmasının kullandığı standart formüldür, ancak bazı firmalar veya anlaşmalı tarifeler farklı bölen kullanabilir. Kesin ücret için kargo firmanızın güncel tarifesini kontrol edin.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function DesiHesaplamaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <ToolHero
        title="Desi Hesaplama"
        lead="Paketinizin ölçülerini girin; kargoda esas alınacak desi değerini ve ağırlığı görün."
      />
      <section className="container tool-calc" aria-label="Desi hesaplayıcı" data-reveal>
        <DesiCalculator />
      </section>
      <ToolFaq items={faqs} />
      <ToolBreadcrumb
        items={[
          { label: "Anasayfa", href: "/" },
          { label: "Ücretsiz Araçlar" },
          { label: "Desi Hesaplama" },
        ]}
      />
    </>
  );
}
