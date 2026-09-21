import { existsSync } from "node:fs";
import { join } from "node:path";
import { faqs } from "@/lib/site";
import { AtolyeLogo, KozaLogo, LunaLogo } from "./CustomerLogos";
import { Icon } from "./Icon";
import { Stories, type Story } from "./Stories";

/** Returns the public URL of the first existing file among public/customers/<id>.<ext>. */
function customerMedia(id: string, exts: string[]) {
  const ext = exts.find((e) => existsSync(join(process.cwd(), "public", "customers", `${id}.${e}`)));
  return ext ? `/customers/${id}.${ext}` : undefined;
}

// Placeholder stories — replace quotes, logos and media with real customers before launch.
export const storyData = [
  {
    id: "luna-butik",
    name: "Luna Butik",
    logo: <LunaLogo />,
    quote: "balinaOS ile Instagram'dan gelen soruların çoğunu AI asistan yanıtlıyor, biz yeni koleksiyona odaklanıyoruz.",
    author: "Selin A., Kurucu @ Luna Butik",
  },
  {
    id: "koza-home",
    name: "Koza Home",
    logo: <KozaLogo />,
    quote: "Trendyol ve Hepsiburada stoklarını elle eşitlemeyi bıraktık. Fazla satış ve iptal derdi bitti.",
    author: "Mert Y., Operasyon Müdürü @ Koza Home",
  },
  {
    id: "atolye-34",
    name: "Atölye 34",
    logo: <AtolyeLogo />,
    quote: "Ürün çekimi için stüdyo kiralamıyoruz; görselleri ve Reels videolarını balinaOS üretiyor.",
    author: "Deniz K., Pazarlama @ Atölye 34",
  },
];

export function StoriesSection() {
  const stories: Story[] = storyData.map((s) => ({
    ...s,
    href: "#musteriler",
    poster: customerMedia(s.id, ["jpg", "webp", "png"]),
    video: customerMedia(s.id, ["mp4", "webm"]),
  }));

  return (
    <section className="container stories" id="musteriler" aria-labelledby="stories-title">
      <div className="split-head" data-reveal>
        <h2 id="stories-title" className="split-head__title serif">
          Büyüyen markalar tekrar eden işleri yapay zekaya bırakıyor
        </h2>
        <div className="split-head__side">
          <p>
            Butik mağazalardan çok kanallı markalara kadar e-ticaret ekipleri; sipariş, fatura ve müşteri iletişimini
            balinaOS AI&apos;ya bırakıyor.
          </p>
          <div className="btn-row">
            <a className="btn btn--soft" href="#iletisim">
              Demo İzle
            </a>
            <a className="btn btn--dark" href="#musteriler">
              Başarı Hikayeleri
            </a>
          </div>
        </div>
      </div>
      <div data-reveal>
        <Stories stories={stories} />
      </div>
    </section>
  );
}

export function Faq() {
  return (
    <section className="container faq" id="sss" aria-labelledby="faq-title">
      <div className="faq__grid">
        <div data-reveal>
          <h2 id="faq-title" className="faq__title serif">
            Sıkça sorulan sorular
          </h2>
          <p className="faq__intro">Aradığınızı bulamadınız mı? Ekibimiz size birkaç dakika içinde dönüş yapar.</p>
        </div>
        <div className="faq__list" data-reveal>
          {faqs.map((f) => (
            <details key={f.q} name="faq">
              <summary>
                <h3 style={{ fontSize: "inherit", fontWeight: 400 }}>{f.q}</h3>
                <Icon name="chevron-down" />
              </summary>
              <div className="faq__answer">
                <p>{f.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
