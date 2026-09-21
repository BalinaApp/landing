import type { Metadata } from "next";
import { InstagramHashtagGenerator } from "@/components/tools/InstagramHashtagGenerator";
import { ToolBreadcrumb } from "@/components/tools/ToolBreadcrumb";
import { ToolFaq, type ToolFaqItem } from "@/components/tools/ToolFaq";
import { ToolHero } from "@/components/tools/ToolHero";

const title = "Instagram Hashtag Oluşturucu: Ücretsiz Araç";
const description =
  "Ürün veya niş kelimenizi girin; kategorinize uygun, hazır bir Instagram hashtag listesi oluşturun.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/araclar/instagram-hashtag-olusturucu" },
  openGraph: { title, description, url: "/araclar/instagram-hashtag-olusturucu" },
};

const faqs: ToolFaqItem[] = [
  {
    q: "Bu araç yapay zeka mı kullanıyor?",
    a: "Hayır. Bu araç, yazdığınız kelimeyi seçtiğiniz kategoriye ait hazır etiket kalıplarıyla birleştiren basit bir üretici aracıdır. Sonuçları kendi markanıza göre düzenlemenizi öneririz.",
  },
  {
    q: "Bir gönderide kaç hashtag kullanmalıyım?",
    a: "Instagram en fazla 30 hashtag'e izin verir; genel öneri, gönderinizle doğrudan ilgili 8-15 arası etiket kullanmaktır. Çok sayıda alakasız etiket, erişimi artırmak yerine azaltabilir.",
  },
  {
    q: "Hangi kategoriler destekleniyor?",
    a: "Şu anda Giyim, Kozmetik, Aksesuar ve Ev & Yaşam kategorileri için hazır etiket kalıpları bulunuyor. Her kategori, kendi nişine özgü etiketlerle genel e-ticaret etiketlerini birleştirir.",
  },
  {
    q: "Etiketleri her gönderide aynen kullanabilir miyim?",
    a: "Kullanabilirsiniz, ancak Instagram'ın algoritması tekrar eden aynı etiket bloklarını spam olarak değerlendirebilir. Gönderiden gönderiye birkaç etiketi değiştirmenizi öneririz.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function InstagramHashtagPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <ToolHero
        title="Instagram Hashtag Oluşturucu"
        lead="Ürün veya niş kelimenizi yazın, kategorinizi seçin; hazır etiket listesini kopyalayın."
      />
      <section className="container tool-calc" aria-label="Instagram hashtag oluşturucu" data-reveal>
        <InstagramHashtagGenerator />
      </section>
      <ToolFaq items={faqs} />
      <ToolBreadcrumb
        items={[
          { label: "Anasayfa", href: "/" },
          { label: "Ücretsiz Araçlar" },
          { label: "Instagram Hashtag Oluşturucu" },
        ]}
      />
    </>
  );
}
