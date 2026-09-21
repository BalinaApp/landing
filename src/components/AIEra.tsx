import Image from "next/image";
import { Icon } from "./Icon";

export function AIEra() {
  return (
    <div className="ai" id="yapay-zeka">
      <div className="dark-head" data-reveal>
        <h2>Yapay zeka çağı için tasarlandı</h2>
        <p>
          Görsel üretin, video hazırlayın, soru sorun, müşterilerinizle konuşun. balinaOS&apos;taki her iş akışı
          yapay zeka ile çalışır, siz sadece isteyin.
        </p>
      </div>

      <div className="ai-grid">
        <div className="ai-card" data-reveal>
          <div className="ai-card__stage" aria-hidden="true">
            <div className="d-box">
              <span className="d-pill">
                <Icon name="sparkles" /> PROMPT
              </span>
              <p style={{ marginTop: 10 }}>Keten elbise, Ege&apos;de taş sokak, akşamüstü ışığı, 4 varyasyon</p>
            </div>
            <div className="d-thumbs">
              <div className="thumb thumb--photo">
                <Image src="/products/linen-dress-studio-1.jpg" alt="" fill sizes="140px" />
              </div>
              <div className="thumb thumb--photo">
                <Image src="/products/linen-dress-coast.jpg" alt="" fill sizes="140px" />
              </div>
              <div className="thumb thumb--photo">
                <Image src="/products/linen-dress-golden-hour.jpg" alt="" fill sizes="140px" />
              </div>
              <span className="thumb thumb--loading" />
            </div>
          </div>
          <h3>AI Görsel</h3>
          <p>Tek bir fotoğraftan, saniyeler içinde markanıza uygun stüdyo kalitesinde ürün görselleri üretin.</p>
        </div>

        <div className="ai-card" data-reveal>
          <div className="ai-card__stage" aria-hidden="true">
            <div className="frames">
              <div className="thumb thumb--photo">
                <Image src="/products/linen-dress-studio-1.jpg" alt="" fill sizes="90px" />
              </div>
              <span className="thumb thumb--loading" />
              <span className="thumb thumb--loading" />
            </div>
            <div className="d-box render">
              <div className="d-done" style={{ fontWeight: 400 }}>
                <span>Reels · 9:16 · 0:15</span>
                <span style={{ color: "var(--dark-muted)" }}>Render</span>
              </div>
              <div className="render__bar">
                <i />
              </div>
            </div>
            <div className="dchips">
              <span>Altyazı</span>
              <span>Müzik</span>
              <span>Seslendirme</span>
              <span>Logo</span>
            </div>
          </div>
          <h3>AI Video</h3>
          <p>Ürün görsellerinizi Reels ve TikTok için altyazılı, müzikli kısa videolara dönüştürün.</p>
        </div>

        <div className="ai-card" data-reveal>
          <div className="ai-card__stage" aria-hidden="true">
            <div className="d-box">Bu elbisenin M bedeni var mı? Yarına yetişir mi?</div>
            <div className="d-box d-box--code">
              <span className="d-pill">
                <Icon name="bot" /> SIPARIS_OLUSTUR
              </span>
              <p style={{ marginTop: 10 }}>
                ürün <b>Keten Elbise · M</b>
                <br />
                stok <b>3 adet</b>
                <br />
                kargo <b>DHL · yarın</b>
              </p>
            </div>
            <div className="d-box d-done">
              Ödeme linki gönderildi
              <span className="check">
                <Icon name="check" />
              </span>
            </div>
          </div>
          <h3>AI Instagram Chat</h3>
          <p>Müşterilerinizle 7/24 konuşan, stok bilen ve sipariş oluşturan balinaOS AI satış asistanı.</p>
        </div>
      </div>
    </div>
  );
}
