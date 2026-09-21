import { Brand } from "@/components/Brand";
import { Icon } from "@/components/Icon";
import { IntegrationMockup } from "@/components/integrations/IntegrationMockup";
import type { IntegrationPage } from "@/lib/integrationPages";

function ConnectMockup({ brand, name }: { brand: IntegrationPage["brand"]; name: string }) {
  return (
    <IntegrationMockup deco="shell" decoClass="deco--br">
      <p className="m-label">Mağaza bağlantısı</p>
      <div className="chips">
        <span className="chip">
          <Brand id={brand} className="brand--sm" /> {name}
        </span>
      </div>
      <div className="m-card m-row">
        <span>
          <span className="m-title" style={{ display: "block" }}>
            API bağlantısı
          </span>
          <span className="m-sub">Mağaza doğrulandı</span>
        </span>
        <span className="status status--ok">
          <Icon name="check-circle" /> Bağlandı
        </span>
      </div>
    </IntegrationMockup>
  );
}

function SyncMockup() {
  return (
    <IntegrationMockup deco="pebble" decoClass="deco--br">
      <div className="m-card">
        <div className="m-row" style={{ marginBottom: 12 }}>
          <span className="m-title">Keten Gömlek</span>
          <span className="badge badge--purple">Canlı</span>
        </div>
        <div className="m-kv">
          <span className="k">Stok</span>
          <span className="v">18 adet</span>
          <span className="badge">Güncel</span>
          <span className="k">Fiyat</span>
          <span className="v">₺429</span>
          <span className="badge badge--orange">Senkron</span>
        </div>
      </div>
    </IntegrationMockup>
  );
}

function AutomateMockup({ name }: { name: string }) {
  return (
    <IntegrationMockup>
      <div className="tl">
        <div className="tl__row">
          <span className="tl__time">09:12</span>
          <span className="tl__dot" />
          <div className="m-card">
            <p className="m-title">{name} siparişi</p>
            <p className="m-sub">#HB-30124 · Onaylandı</p>
          </div>
        </div>
        <div className="tl__row">
          <span className="tl__time">09:12</span>
          <span className="tl__dot" />
          <div className="m-card">
            <p className="m-title">e-Fatura</p>
            <p className="m-sub">Kesildi · Entegrasyona iletildi</p>
          </div>
        </div>
        <div className="tl__row">
          <span className="tl__time">09:13</span>
          <span className="tl__dot tl__dot--pending" />
          <div className="m-card">
            <p className="m-title">Kargo etiketi</p>
            <p className="m-sub">Oluşturuluyor…</p>
          </div>
        </div>
      </div>
    </IntegrationMockup>
  );
}

export function IntegrationSteps({ page }: { page: IntegrationPage }) {
  const name = page.title.replace(" Entegrasyonu", "");

  return (
    <section className="container integ-steps" aria-label={page.overviewTitle} data-reveal>
      <h2 className="integ-steps__title serif">{page.overviewTitle}</h2>
      <p className="integ-steps__lead">{page.overview}</p>

      <div className="integ-steps__list">
        {page.steps.map((step, i) => (
          <div key={step.number} className={`integ-step ${i % 2 === 1 ? "integ-step--reverse" : ""}`}>
            <div className="integ-step__copy">
              <span className="integ-step__number">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </div>
            <div className="integ-step__visual">
              <article className="fcard fcard--bare">
                {step.mockup === "connect" ? (
                  <ConnectMockup brand={page.brand} name={name} />
                ) : step.mockup === "automate" ? (
                  <AutomateMockup name={name} />
                ) : (
                  <SyncMockup />
                )}
              </article>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
