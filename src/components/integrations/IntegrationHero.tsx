import Link from "next/link";
import { Brand } from "@/components/Brand";
import { Icon } from "@/components/Icon";
import { IntegrationMockup } from "@/components/integrations/IntegrationMockup";
import type { IntegrationPage } from "@/lib/integrationPages";

export function IntegrationHero({ page }: { page: IntegrationPage }) {
  return (
    <section className="container integ-hero" aria-labelledby="integ-title" data-reveal>
      <div className="integ-hero__grid">
        <div className="integ-hero__copy">
          <p className="integ-hero__eyebrow">
            <Icon name="layers" /> {page.eyebrow}
          </p>
          <h1 id="integ-title" className="integ-hero__title serif">
            {page.title}
          </h1>
          <p className="integ-hero__lead">{page.lead}</p>

          <ul className="integ-hero__chips">
            {page.chips.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>

          <div className="btn-row integ-hero__actions">
            <Link className="btn btn--dark" href="https://app.balinaos.com">
              Ücretsiz Dene
            </Link>
            <Link className="btn btn--soft" href="/#entegrasyonlar">
              Diğer entegrasyonlar
            </Link>
          </div>
        </div>

        <div className="integ-hero__visual">
          <article className="fcard">
            <IntegrationMockup deco="pebble" decoClass="deco--br">
              <div className="chips">
                <span className="chip">
                  <Brand id={page.brand} className="brand--sm" /> {page.title.replace(" Entegrasyonu", "")}
                </span>
              </div>
              <div className="m-card">
                <div className="m-row" style={{ marginBottom: 12 }}>
                  <span className="m-title">Seramik Kupa Seti</span>
                  <span className="badge badge--purple">Canlı</span>
                </div>
                <div className="m-kv">
                  <span className="k">Stok</span>
                  <span className="v">24 adet</span>
                  <span className="badge">Güncel</span>
                  <span className="k">Fiyat</span>
                  <span className="v">₺349</span>
                  <span className="badge badge--orange">Senkron</span>
                </div>
              </div>
            </IntegrationMockup>
            <h3>Tek panelden yönetim</h3>
            <p>Stok, fiyat ve sipariş verileriniz {page.title.replace(" Entegrasyonu", "")} ile anlık senkron kalır.</p>
          </article>
        </div>
      </div>
    </section>
  );
}
