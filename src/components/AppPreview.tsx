import Image from "next/image";
import { Brand } from "./Brand";
import { Icon } from "./Icon";
import { LogoMark } from "./Logo";
import { Typer } from "./Typer";

const prompts = [
  "Trendyol'daki tüm keten ürünlerin fiyatını %10 düşür",
  "Yeni sezon elbise için 6 ürün görseli ve 1 Reels videosu üret",
  "Bugünkü onaylı siparişlerin e-faturalarını kes",
  "Hepsiburada siparişleri için DHL etiketlerini oluştur",
];

const stats = [
  { label: "Yeni sipariş", value: "48", trend: "+12 dünden" },
  { label: "Yanıtlanan DM", value: "86", trend: "%94 AI ile" },
  { label: "Kesilen fatura", value: "41", trend: "Tümü entegrasyonda" },
  { label: "DHL etiketi", value: "39", trend: "9 dağıtımda" },
];

export function AppPreview() {
  return (
    <section className="container preview" aria-label="balinaOS panel önizlemesi" data-reveal>
      <div className="preview__frame">
        <Image className="preview__deco" src="/illustrations/branch.png" alt="" width={300} height={504} />
        <div className="preview__window">
          <div className="preview__dots" aria-hidden="true">
            <i />
            <i />
            <i />
          </div>

          <div className="preview__grid">
            <aside className="preview__side" aria-hidden="true">
              <span className="logo">
                <LogoMark />
                balinaOS
              </span>

              <div className="side-group">
                <p className="side-group__title">Ana</p>
                <div className="side-item">
                  <Icon name="plus" /> Yeni görev
                </div>
                <div className="side-item">
                  <Icon name="search" /> Ara
                </div>
                <div className="side-item">
                  <Icon name="inbox" /> Gelen kutusu <span className="count">12</span>
                </div>
                <div className="side-item">
                  <Icon name="bag" /> Siparişler <span className="count">48</span>
                </div>
              </div>

              <div className="side-group">
                <p className="side-group__title">Kanallar</p>
                <div className="side-item">
                  <Brand id="trendyol" /> Trendyol
                </div>
                <div className="side-item">
                  <Brand id="hepsiburada" /> Hepsiburada
                </div>
                <div className="side-item">
                  <Brand id="tiktok" /> TikTok Shop
                </div>
                <div className="side-item">
                  <Brand id="instagram" /> Instagram
                </div>
              </div>

              <div className="side-group">
                <p className="side-group__title">AI Stüdyo</p>
                <div className="side-item">
                  <Icon name="image" /> Görseller
                </div>
                <div className="side-item">
                  <Icon name="video" /> Videolar
                </div>
              </div>
            </aside>

            <div className="preview__main">
              <p className="preview__greet serif">
                <span className="dim">Günaydın,</span>
                <br />
                bugün <u>48 yeni sipariş</u> ve <u>12 mesaj</u> var
              </p>

              <div className="prompt">
                <span className="prompt__text">
                  <Typer phrases={prompts} />
                </span>
                <span className="prompt__run" aria-hidden="true">
                  <span>Çalıştır</span> <Icon name="return" />
                </span>
              </div>

              <div className="suggest" aria-hidden="true">
                <span>
                  <Icon name="refresh" /> Stokları eşitle
                </span>
                <span>
                  <Icon name="sparkles" /> Görsel üret
                </span>
                <span>
                  <Icon name="receipt" /> Faturaları kes
                </span>
              </div>

              <div className="stats">
                {stats.map((s) => (
                  <div className="stat" key={s.label}>
                    <p className="stat__label">{s.label}</p>
                    <p className="stat__value">{s.value}</p>
                    <p className="stat__trend">{s.trend}</p>
                  </div>
                ))}
              </div>
            </div>

            <aside className="preview__right" aria-hidden="true">
              <div className="todo">
                <p className="todo__title">Onayınızı bekleyenler</p>
                <div className="todo__item">
                  <span className="todo__dot" />
                  <span>
                    3 iade talebi
                    <small>Trendyol · DHL iade kodu hazır</small>
                  </span>
                </div>
                <div className="todo__item">
                  <span className="todo__dot todo__dot--purple" />
                  <span>
                    Sohbet devri: Deniz K.
                    <small>Instagram · Toptan fiyat soruyor</small>
                  </span>
                </div>
                <div className="todo__item">
                  <span className="todo__dot todo__dot--green" />
                  <span>
                    6 yeni AI görsel
                    <small>Keten Elbise · Yayına hazır</small>
                  </span>
                </div>
              </div>
              <div className="todo">
                <p className="todo__title">Bugün</p>
                <div className="todo__item">
                  <span className="todo__dot todo__dot--purple" />
                  <span>
                    TikTok canlı yayın
                    <small>20:00 · 24 ürün eşlendi</small>
                  </span>
                </div>
                <div className="todo__item">
                  <span className="todo__dot" />
                  <span>
                    DHL toplu teslim
                    <small>16:30 · 39 paket</small>
                  </span>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
