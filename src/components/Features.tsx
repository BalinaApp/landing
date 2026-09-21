import Image from "next/image";
import { Brand } from "./Brand";
import { FeatureTabs, type FeatureTab } from "./FeatureTabs";
import { Icon } from "./Icon";
import { StatusCycle } from "./StatusCycle";

function Card({ title, text, children }: { title: string; text: string; children: React.ReactNode }) {
  return (
    <article className="fcard">
      <div className="fcard__stage" aria-hidden="true">
        {children}
      </div>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}

export function Deco({ src, className }: { src: "shell" | "pebble" | "blob" | "coral" | "whale"; className: string }) {
  const asset = {
    shell: { file: "fish.png", size: [300, 99] },
    pebble: { file: "pebble-cluster.png", size: [260, 117] },
    blob: { file: "branch.png", size: [160, 269] },
    coral: { file: "coral.webp", size: [200, 161] },
    whale: { file: "whale-mascot-2.png", size: [460, 274] },
  }[src];
  return (
    <Image className={`deco ${className}`} src={`/illustrations/${asset.file}`} alt="" width={asset.size[0]} height={asset.size[1]} />
  );
}

/* ---------------------------------------------------------------- 01 AI */
const aiStudio = (
  <>
    <Card
      title="Ürün görseli üretin"
      text="Tek bir ürün fotoğrafından pazaryeri ve sosyal medyaya hazır, stüdyo kalitesinde görseller elde edin."
    >
      <Deco src="shell" className="deco--br" />
      <p className="m-label">AI Görsel</p>
      <div className="chips">
        <span className="chip">Mermer zemin</span>
        <span className="chip">Gün ışığı</span>
      </div>
      <div className="m-card">
        <p className="m-sub">Krem şişe, yumuşak gölge, minimal sahne</p>
        <div className="thumbs" style={{ marginTop: 10 }}>
          <div className="thumb thumb--photo">
            <Image src="/products/marble-product-1.jpg" alt="" fill sizes="120px" />
          </div>
          <div className="thumb thumb--photo">
            <Image src="/products/marble-product-2.jpg" alt="" fill sizes="120px" />
          </div>
          <span className="thumb thumb--loading" />
        </div>
      </div>
    </Card>

    <Card
      title="Kısa video oluşturun"
      text="Ürün görsellerinizden Reels ve TikTok için hareketli, altyazılı dikey videolar hazırlayın."
    >
      <Deco src="blob" className="deco--tr" />
      <div className="split-row">
        <div className="phone">
          <div className="phone__play">
            <span>
              <Icon name="play" />
            </span>
          </div>
          <div className="phone__caption">
            <i />
            <i />
          </div>
        </div>
        <div className="stack">
          <div className="m-card">
            <p className="m-title">Sahne 1</p>
            <p className="m-sub">Açılış · 0:03</p>
          </div>
          <div className="m-card">
            <p className="m-title">Sahne 2</p>
            <p className="m-sub">Ürün detayı · 0:06</p>
          </div>
          <div className="m-card">
            <div className="m-row">
              <p className="m-title">Render</p>
              <span className="m-sub">%72</span>
            </div>
            <div className="progress" style={{ marginTop: 8 }}>
              <i style={{ width: "72%" }} />
            </div>
          </div>
        </div>
      </div>
    </Card>

    <Card
      title="Her kanal için doğru format"
      text="Görselleri her pazaryerinin ölçü kurallarına göre otomatik kırpın, isimlendirin ve yükleyin."
    >
      <Deco src="blob" className="deco--tr" />
      <div className="m-card m-row">
        <span className="m-title">Trendyol · 1200×1800</span>
        <span className="status status--ok">
          <Icon name="check-circle" /> Hazır
        </span>
      </div>
      <div className="m-card m-row">
        <span className="m-title">Reels · 1080×1920</span>
        <span className="status status--ok">
          <Icon name="check-circle" /> Hazır
        </span>
      </div>
      <div className="m-card m-row">
        <span className="m-title">TikTok · 1080×1920</span>
        <StatusCycle
          stages={[
            { icon: "clock", label: "İşleniyor", tone: "status--warn" },
            { icon: "check-circle", label: "Hazır", tone: "status--ok" },
          ]}
          interval={2200}
        />
      </div>
      <div className="m-card m-row">
        <span className="m-title">Hepsiburada · 1500²</span>
        <StatusCycle
          stages={[
            { icon: "clock", label: "Sırada", tone: "status--muted" },
            { icon: "clock", label: "İşleniyor", tone: "status--warn" },
            { icon: "check-circle", label: "Hazır", tone: "status--ok" },
          ]}
          interval={1900}
        />
      </div>
    </Card>
  </>
);

/* ---------------------------------------------------------- 02 Instagram */
const instagram = (
  <>
    <Card
      title="DM'leri 7/24 yanıtlayın"
      text="AI asistan kataloğunuzu ve stoklarınızı bilir; beden, renk ve kargo sorularını saniyeler içinde yanıtlar."
    >
      <Deco src="coral" className="deco--bl" />
      <p className="m-label">Instagram DM</p>
      <div className="chat">
        <div className="bubble bubble--in">Merhaba, keten elbisenin M bedeni var mı?</div>
        <div className="bubble bubble--out">
          <span className="bubble__tag">
            <Icon name="sparkles" /> balinaOS AI
          </span>
          Evet! M bedende 3 adet kaldı. Bej ve siyah renkleri mevcut.
        </div>
        <div className="bubble bubble--in">Bej olsun, kapıda ödeme var mı?</div>
        <div className="typing">
          <i />
          <i />
          <i />
        </div>
      </div>
    </Card>

    <Card
      title="Sohbetten siparişe"
      text="Ürünü sepete ekler, ödeme linkini gönderir ve siparişi otomatik olarak panelinize düşürür."
    >
      <Deco src="pebble" className="deco--br" />
      <div className="m-card">
        <div className="m-row" style={{ justifyContent: "flex-start" }}>
          <span className="avatar">EY</span>
          <span>
            <span className="m-title" style={{ display: "block" }}>
              @ece.yilmaz
            </span>
            <span className="m-sub">Instagram · 2 dk önce</span>
          </span>
        </div>
        <div className="m-kv" style={{ marginTop: 14 }}>
          <span className="k">Ürün</span>
          <span className="v">Keten Elbise</span>
          <span className="badge">Bej · M</span>
          <span className="k">Tutar</span>
          <span className="v">₺1.249</span>
          <span className="badge">Kargo dahil</span>
          <span className="k">Ödeme</span>
          <span className="v">Link</span>
          <span className="badge badge--green">Gönderildi</span>
        </div>
      </div>
    </Card>

    <Card
      title="Satış fırsatını puanlayın"
      text="Satın almaya en yakın müşterileri tespit eder; gerektiğinde sohbeti bağlamıyla ekibinize devreder."
    >
      <Deco src="blob" className="deco--r" />
      <div className="m-row" style={{ alignItems: "flex-end" }}>
        <span>
          <span className="avatar avatar--purple" style={{ marginBottom: 6 }}>
            DK
          </span>
          <span className="m-title">Deniz Kaya</span>
        </span>
        <span style={{ textAlign: "right" }}>
          <span className="m-sub" style={{ display: "block" }}>
            Skor
          </span>
          <span style={{ fontSize: 20, fontWeight: 500 }}>92</span>
        </span>
      </div>
      <div className="m-card bars">
        <div className="bar-row">
          <span>Niyet</span>
          <span className="bar">
            <i style={{ width: "38%" }} />
          </span>
          <span>38</span>
        </div>
        <div className="bar-row">
          <span>Ürün ilgisi</span>
          <span className="bar">
            <i style={{ width: "31%" }} />
          </span>
          <span>31</span>
        </div>
        <div className="bar-row">
          <span>Etkileşim</span>
          <span className="bar">
            <i style={{ width: "23%" }} />
          </span>
          <span>23</span>
        </div>
      </div>
      <span className="badge badge--dark" style={{ justifySelf: "start", alignSelf: "flex-start" }}>
        <Icon name="users" /> Ekibe devredildi
      </span>
    </Card>
  </>
);

/* -------------------------------------------------------- 03 Marketplaces */
const marketplaces = (
  <>
    <Card
      title="Ürünleri tek tıkla listeleyin"
      text="Kategori, özellik ve varyant eşleştirmesini yapay zeka yapar; ürünleriniz iki pazaryerinde birden yayında."
    >
      <Deco src="shell" className="deco--br" />
      <p className="m-label m-label--orange">Ürün aktarımı</p>
      <div className="chips">
        <span className="chip">
          <Brand id="trendyol" /> Trendyol
        </span>
        <span className="chip">
          <Brand id="hepsiburada" /> Hepsiburada
        </span>
      </div>
      <div className="m-card m-row">
        <span>
          <span className="m-title" style={{ display: "block" }}>
            Keten Gömlek
          </span>
          <span className="m-sub">12 varyant</span>
        </span>
        <span className="badge badge--orange">Eşleşme %96</span>
      </div>
      <div className="m-card m-row">
        <span>
          <span className="m-title" style={{ display: "block" }}>
            Deri Cüzdan
          </span>
          <span className="m-sub">4 varyant</span>
        </span>
        <span className="badge">Kategori önerildi</span>
      </div>
    </Card>

    <Card
      title="Stok ve fiyat senkronu"
      text="Bir kanalda satılan ürünün stoğunu AI tüm kanallarda anında düşürür; fiyat kurallarınızı otomatik uygular."
    >
      <Deco src="pebble" className="deco--br" />
      <div className="m-card">
        <div className="m-row" style={{ marginBottom: 12 }}>
          <span className="m-title">Seramik Kupa</span>
          <span className="badge badge--purple">Canlı</span>
        </div>
        <div className="m-kv">
          <span className="k">Trendyol</span>
          <span className="v">24 adet</span>
          <span className="badge">Güncel</span>
          <span className="k">Hepsiburada</span>
          <span className="v">24 adet</span>
          <span className="badge">Güncel</span>
          <span className="k">TikTok</span>
          <span className="v">24 adet</span>
          <span className="badge">Güncel</span>
          <span className="k">Fiyat</span>
          <span className="v">₺349</span>
          <span className="badge badge--orange">+%8 kural</span>
        </div>
      </div>
    </Card>

    <Card
      title="Siparişler tek akışta"
      text="Sipariş gelir; AI faturayı keser, kargo etiketini basar. Hepsi siz daha paneli açmadan tamamlanır."
    >
      <div className="tl">
        <div className="tl__row">
          <span className="tl__time">09:12</span>
          <span className="tl__dot" />
          <div className="m-card">
            <p className="m-title">Trendyol siparişi</p>
            <p className="m-sub">#TY-48213 · Onaylandı</p>
          </div>
        </div>
        <div className="tl__row">
          <span className="tl__time">09:12</span>
          <span className="tl__dot" />
          <div className="m-card">
            <p className="m-title">e-Arşiv fatura</p>
            <p className="m-sub">Kesildi · Entegrasyona iletildi</p>
          </div>
        </div>
        <div className="tl__row">
          <span className="tl__time">09:13</span>
          <span className="tl__dot tl__dot--pending" />
          <div className="m-card">
            <p className="m-title">DHL etiketi</p>
            <p className="m-sub">Oluşturuluyor…</p>
          </div>
        </div>
      </div>
    </Card>
  </>
);

/* ------------------------------------------------------------- 04 TikTok */
const tiktok = (
  <>
    <Card
      title="Katalog senkronu"
      text="Ürün kataloğunuzu TikTok Shop'a aktarın; AI stok, fiyat ve varyantları diğer kanallarla eş zamanlı tutar."
    >
      <Deco src="blob" className="deco--bl-flat" />
      <div className="m-card">
        <div className="m-row" style={{ justifyContent: "flex-start", gap: 12 }}>
          <Brand id="tiktok" className="brand--sm" />
          <span>
            <span className="m-title" style={{ display: "block" }}>
              TikTok Shop
            </span>
            <span className="m-sub">142 / 160 ürün eşlendi</span>
          </span>
        </div>
        <div className="progress" style={{ marginTop: 12 }}>
          <i style={{ width: "89%" }} />
        </div>
      </div>
      <div className="m-card m-row">
        <span className="m-title">Varyant eşleme</span>
        <span className="status status--ok">
          <Icon name="check-circle" /> Tamam
        </span>
      </div>
      <div className="m-card m-row">
        <span className="m-title">18 ürün · görsel eksik</span>
        <span className="status status--warn">
          <Icon name="sparkles" /> AI üretiyor
        </span>
      </div>
    </Card>

    <Card
      title="Videodan satışa"
      text="Videolarınıza ürün etiketleyin; izleyici sepete eklediğinde sipariş doğrudan balinaOS'a düşsün."
    >
      <Deco src="shell" className="deco--br" />
      <div className="split-row">
        <div className="phone">
          <div className="phone__tag">
            <b>Keten Elbise</b>₺1.249 · Sepete ekle
          </div>
        </div>
        <div className="stack">
          <div className="m-card">
            <p className="m-sub">Görüntülenme</p>
            <p className="m-title" style={{ fontSize: 18 }}>
              48,2 B
            </p>
          </div>
          <div className="m-card">
            <p className="m-sub">Sepete ekleme</p>
            <p className="m-title" style={{ fontSize: 18 }}>
              1.318
            </p>
          </div>
          <div className="m-card">
            <p className="m-sub">Sipariş</p>
            <p className="m-title" style={{ fontSize: 18 }}>
              214
            </p>
          </div>
        </div>
      </div>
    </Card>

    <Card
      title="Canlı yayın siparişleri"
      text="Canlı yayında gelen siparişleri AI gerçek zamanlı toplar, stoktan düşer ve kargo sırasına alır."
    >
      <Deco src="coral" className="deco--bl" />
      <p className="m-label m-label--red">Canlı · 1.204 izleyici</p>
      <div className="m-card m-row">
        <span>
          <span className="m-title" style={{ display: "block" }}>
            #TT-9921
          </span>
          <span className="m-sub">2 ürün · ₺2.180</span>
        </span>
        <span className="badge badge--orange">Yeni</span>
      </div>
      <div className="m-card m-row">
        <span>
          <span className="m-title" style={{ display: "block" }}>
            #TT-9920
          </span>
          <span className="m-sub">1 ürün · ₺649</span>
        </span>
        <span className="badge">Faturalandı</span>
      </div>
      <div className="m-card m-row">
        <span>
          <span className="m-title" style={{ display: "block" }}>
            #TT-9918
          </span>
          <span className="m-sub">3 ürün · ₺3.420</span>
        </span>
        <span className="badge badge--green">Kargoda</span>
      </div>
    </Card>
  </>
);

/* ----------------------------------------------------------- 05 e-Fatura */
const efatura = (
  <>
    <Card
      title="Otomatik e-Fatura ve e-Arşiv"
      text="Sipariş onaylandığı an AI faturanızı keser, e-Fatura entegrasyonunuza iletir ve pazaryerine otomatik yükler."
    >
      <Deco src="pebble" className="deco--br" />
      <div className="m-card">
        <div className="doc-head">
          <span className="m-title">e-Arşiv Fatura</span>
          <Brand id="efatura" className="brand--xs" />
        </div>
        <div className="m-kv" style={{ gridTemplateColumns: "auto 1fr" }}>
          <span className="k">No</span>
          <span className="v">BLN2026000412</span>
          <span className="k">Alıcı</span>
          <span className="v">Ayşe D.</span>
          <span className="k">KDV</span>
          <span className="v">%20</span>
          <span className="k">Toplam</span>
          <span className="v">₺1.249,00</span>
        </div>
        <span className="status status--ok" style={{ marginTop: 10 }}>
          <Icon name="check-circle" /> Entegrasyona iletildi
        </span>
      </div>
    </Card>

    <Card
      title="Anlık fatura durumu"
      text="Onaylanan, bekleyen ve reddedilen faturaları tek listede görün; hatalı olanlar için AI'dan çözüm önerisi alın."
    >
      <Deco src="blob" className="deco--tr" />
      <div className="m-card m-row">
        <span className="m-title">BLN…0412</span>
        <span className="status status--ok">
          <Icon name="check-circle" /> Onaylandı
        </span>
      </div>
      <div className="m-card m-row">
        <span className="m-title">BLN…0411</span>
        <span className="status status--warn">
          <Icon name="alert" /> VKN hatalı
        </span>
      </div>
      <div className="m-card m-row">
        <span className="m-title">BLN…0398</span>
        <span className="status status--muted">
          <Icon name="undo" /> İade faturası
        </span>
      </div>
    </Card>

    <Card
      title="Mutabakat ve raporlar"
      text="Pazaryeri hakedişleri ile kesilen faturaları AI otomatik eşleştirir, ay sonunu dakikalar içinde kapatırsınız."
    >
      <Deco src="shell" className="deco--tl" />
      <div className="m-card">
        <p className="m-sub">Eylül · kesilen fatura</p>
        <p style={{ fontSize: 24, letterSpacing: "-0.02em", marginTop: 2 }}>1.284</p>
        <div className="minichart">
          <i style={{ height: "40%" }} />
          <i style={{ height: "55%" }} />
          <i style={{ height: "48%" }} />
          <i style={{ height: "70%" }} />
          <i style={{ height: "62%" }} />
          <i className="on" style={{ height: "92%" }} />
          <i style={{ height: "30%" }} />
        </div>
      </div>
      <div className="m-card m-row">
        <span className="m-title">Hakediş eşleşmesi</span>
        <span className="badge badge--green">%99,4</span>
      </div>
    </Card>
  </>
);

/* -------------------------------------------------------------- 06 Kargo */
const kargo = (
  <>
    <Card
      title="Etiketi otomatik oluşturun"
      text="AI desiyi hesaplar, DHL gönderisini açar ve etiketi yazıcınıza gönderir. Tek tek kopyala-yapıştır yok."
    >
      <Deco src="pebble" className="deco--br" />
      <div className="m-card">
        <div className="doc-head">
          <span className="m-title">Gönderi etiketi</span>
          <Brand id="dhl" className="brand--xs" />
        </div>
        <p className="m-sub">Alıcı: Kadıköy, İstanbul</p>
        <div className="barcode" />
        <div className="m-row">
          <span className="m-sub">Desi 2 · 1 koli</span>
          <span className="status status--ok">
            <Icon name="check-circle" /> Hazır
          </span>
        </div>
      </div>
      <div className="m-card m-row" style={{ marginTop: 8 }}>
        <span>
          <span className="m-title" style={{ display: "block" }}>#TY-48190</span>
          <span className="m-sub">Adres hatalı · mahalle bilgisi eksik</span>
        </span>
        <span className="status status--warn">
          <Icon name="alert" /> Kontrol gerekli
        </span>
      </div>
    </Card>

    <Card
      title="Müşteriye takip bildirimi"
      text="Kargo her adım ilerlediğinde müşteriniz bilgilendirilir; Instagram'dan gelen siparişlere AI DM ile haber verir."
    >
      <div className="tl">
        <div className="tl__row">
          <span className="tl__time">Pzt</span>
          <span className="tl__dot" />
          <div className="m-card">
            <p className="m-title">Kargoya verildi</p>
            <p className="m-sub">DHL · İstanbul</p>
          </div>
        </div>
        <div className="tl__row">
          <span className="tl__time">Sal</span>
          <span className="tl__dot" />
          <div className="m-card">
            <p className="m-title">Transfer merkezinde</p>
            <p className="m-sub">DM ile bildirildi</p>
          </div>
        </div>
        <div className="tl__row">
          <span className="tl__time">Çar</span>
          <span className="tl__dot tl__dot--pending" />
          <div className="m-card">
            <p className="m-title">Dağıtımda</p>
            <p className="m-sub">Tahmini 14:00–18:00</p>
          </div>
        </div>
      </div>
    </Card>

    <Card
      title="İadeleri sorunsuz yönetin"
      text="AI iade kodunu üretir, ürün depoya ulaştığında stoğa ekler ve iade faturasını keser."
    >
      <Deco src="coral" className="deco--bl" />
      <div className="m-card m-row">
        <span>
          <span className="m-title" style={{ display: "block" }}>
            #TY-48102
          </span>
          <span className="m-sub">İade kodu oluşturuldu</span>
        </span>
        <Icon name="check-circle" className="status--ok" />
      </div>
      <div className="m-card m-row">
        <span>
          <span className="m-title" style={{ display: "block" }}>
            #HB-22871
          </span>
          <span className="m-sub">Depoya ulaştı · stoğa eklendi</span>
        </span>
        <Icon name="check-circle" className="status--ok" />
      </div>
      <div className="m-card m-row">
        <span>
          <span className="m-title" style={{ display: "block" }}>
            #TT-9870
          </span>
          <span className="m-sub">İade faturası kesiliyor</span>
        </span>
        <Icon name="clock" className="status--warn" />
      </div>
    </Card>
  </>
);

const tabs: FeatureTab[] = [
  {
    id: "ai-studyo",
    label: "AI İçerik Stüdyosu",
    desc: "Ürün görsellerinizi ve videolarınızı yapay zeka ile üretin.",
    panel: aiStudio,
  },
  {
    id: "instagram",
    label: "AI Instagram Chat",
    desc: "DM'leri 7/24 yanıtlayan yapay zeka satış asistanı.",
    panel: instagram,
  },
  {
    id: "pazaryerleri",
    label: "Pazaryerleri",
    desc: "AI; ürün, stok ve sipariş verinizi tek yerden eşitler.",
    panel: marketplaces,
  },
  {
    id: "tiktok",
    label: "Sosyal Ticaret",
    desc: "Video ve canlı yayından gelen siparişleri AI sizin için toplar.",
    panel: tiktok,
  },
  {
    id: "e-fatura",
    label: "E-Fatura",
    desc: "Sipariş onaylanınca faturanızı AI otomatik kessin.",
    panel: efatura,
  },
  {
    id: "kargo",
    label: "Kargo Entegrasyonu",
    desc: "Etiket, takip ve iade süreçlerini AI sizin için otomatikleştirir.",
    panel: kargo,
  },
];

export function Features() {
  return (
    <section className="container features" id="ozellikler" aria-labelledby="features-title">
      <div className="split-head" data-reveal>
        <h2 id="features-title" className="split-head__title serif">
          Siz büyütün,
          <br />
          balinaOS AI yürütsün
        </h2>
        <div className="split-head__side">
          <p>
            Siparişten faturaya, DM&apos;den kargoya kadar tekrar eden her işi yapay zeka üstlenir. Ekibiniz, zaten
            kullandığı kanalların içinde çalışmaya devam eder.
          </p>
          <div className="btn-row">
            <a className="btn btn--soft" href="https://app.balinaos.com">
              Ücretsiz Dene
            </a>
          </div>
        </div>
      </div>

      <FeatureTabs tabs={tabs} />
    </section>
  );
}
