import Image from "next/image";
import Link from "next/link";
import { LogoMark } from "./Logo";

type FooterLink = { label: string; href: string; tag?: "new" | "popular" };
type FooterGroup = { title: string; links: FooterLink[] };

// Most targets are placeholders ("#") until the matching pages exist — each one is an internal-link slot for SEO.
const columns: FooterGroup[][] = [
  [
    {
      title: "balinaOS",
      links: [
        { label: "balinaOS Nedir?", href: "#" },
        { label: "balinaOS Nasıl Kullanılır?", href: "#" },
        { label: "AI İçerik Stüdyosu", href: "#ai-studyo" },
        { label: "AI Video Stüdyosu", href: "#yapay-zeka", tag: "new" },
        { label: "AI Instagram Chat", href: "#instagram" },
        { label: "Sipariş Otomasyonu", href: "#ozellikler" },
        { label: "Stok & Fiyat Senkronu", href: "#pazaryerleri" },
        { label: "Fiyatlandırma", href: "#" },
        { label: "Mobil Uygulama", href: "#" },
        { label: "Referans Programı", href: "#" },
      ],
    },
    {
      title: "Medya",
      links: [
        { label: "Trendyol'da Satış Nasıl Yapılır?", href: "/blog/trendyolda-satis-nasil-yapilir" },
        { label: "Hepsiburada'da Mağaza Açmak", href: "/blog/hepsiburadada-magaza-acmak" },
        { label: "TikTok Shop ile Satış Rehberi", href: "/blog/tiktok-shop-ile-satis-rehberi" },
        { label: "e-Fatura ve e-Arşiv Farkı Nedir?", href: "/blog/e-fatura-ve-e-arsiv-farki-nedir" },
        { label: "Instagram DM Otomasyonu Rehberi", href: "/blog/instagram-dm-otomasyonu-rehberi" },
        { label: "AI ile Ürün Fotoğrafı Çekimi", href: "/blog/ai-ile-urun-fotografi-cekimi" },
        { label: "Desi Nedir, Nasıl Hesaplanır?", href: "/blog/desi-nedir-nasil-hesaplanir" },
        { label: "Pazaryeri Komisyon Oranları 2026", href: "/blog/pazaryeri-komisyon-oranlari-2026" },
        { label: "Çok Kanallı Satış Nedir?", href: "/blog/cok-kanalli-satis-nedir" },
        { label: "E-Ticarette Stok Yönetimi", href: "/blog/e-ticarette-stok-yonetimi" },
      ],
    },
  ],
  [
    {
      title: "Şirket",
      links: [
        { label: "Hakkımızda", href: "#" },
        { label: "Müşteriler", href: "#musteriler" },
        { label: "Kariyer", href: "#" },
        { label: "İletişim", href: "#iletisim" },
        { label: "Sizi Arayalım", href: "#iletisim" },
        { label: "Destek Merkezi", href: "#" },
        { label: "Basında Biz", href: "#" },
        { label: "Güncellemeler", href: "#" },
        { label: "Sistem Durumu", href: "#" },
      ],
    },
    {
      title: "Entegrasyonlar",
      links: [
        { label: "Trendyol Entegrasyonu", href: "#pazaryerleri" },
        { label: "Hepsiburada Entegrasyonu", href: "/entegrasyonlar/hepsiburada-entegrasyonu" },
        { label: "TikTok Shop Entegrasyonu", href: "#tiktok" },
        { label: "Instagram AI Chat", href: "#instagram" },
        { label: "e-Fatura Entegrasyonu", href: "#e-fatura" },
        { label: "e-Arşiv Fatura Entegrasyonu", href: "#e-fatura" },
        { label: "DHL Kargo Entegrasyonu", href: "#kargo" },
        { label: "Tüm Entegrasyonlar", href: "#entegrasyonlar" },
      ],
    },
  ],
  [
    {
      title: "Ücretsiz Araçlar",
      links: [
        { label: "Trendyol Komisyon Hesaplama", href: "/araclar/trendyol-komisyon-hesaplama", tag: "popular" },
        { label: "Hepsiburada Komisyon Hesaplama", href: "/araclar/hepsiburada-komisyon-hesaplama" },
        { label: "TikTok Shop Komisyon Hesaplama", href: "/araclar/tiktok-shop-komisyon-hesaplama" },
        { label: "KDV Hesaplama", href: "/araclar/kdv-hesaplama" },
        { label: "Desi Hesaplama", href: "/araclar/desi-hesaplama" },
        { label: "Kargo Ücreti Hesaplama", href: "/araclar/kargo-ucreti-hesaplama" },
        { label: "Kar Marjı Hesaplama", href: "/araclar/kar-marji-hesaplama" },
        { label: "Instagram Hashtag Oluşturucu", href: "/araclar/instagram-hashtag-olusturucu" },
        { label: "Instagram Bio Oluşturucu", href: "/araclar/instagram-bio-olusturucu" },
      ],
    },
  ],
  [
    {
      title: "Müşteri Hikayeleri",
      links: [
        { label: "Luna Butik, Instagram DM'lerinin çoğunu AI ile yanıtlıyor.", href: "/blog" },
        { label: "Koza Home, pazaryerlerinde fazla satışı sıfırladı.", href: "/blog" },
        { label: "Atölye 34, ürün çekimlerini AI Stüdyo'ya taşıdı.", href: "/blog" },
        { label: "Nane Kozmetik, siparişten faturaya akışı otomatikleştirdi.", href: "/blog" },
        { label: "Mavi Pazar, TikTok Shop'ta canlı yayın satışlarını büyüttü.", href: "/blog" },
        { label: "Tekstil markaları balinaOS ile çok kanallı satışa geçti.", href: "/blog" },
        { label: "Kozmetik markaları AI görsellerle katalog yeniledi.", href: "/blog" },
      ],
    },
  ],
];

function Tag({ type }: { type: NonNullable<FooterLink["tag"]> }) {
  return <span className={`ftag ftag--${type}`}>{type === "new" ? "YENİ" : "POPÜLER"}</span>;
}

// Geçici: proje şu an tek sayfa (sadece anasayfa) olarak yayınlanıyor, bu yüzden diğer
// sayfalara yönlendiren footer alanları (Ücretsiz Araçlar dahil) tamamen gizli.
// Sayfalar tekrar açıldığında `columns`'u olduğu gibi render etmek için bu filtreyi kaldır.
const visibleColumns: typeof columns = [];

export function Footer() {
  return (
    <footer className="footer">
      {visibleColumns.length > 0 && (
        <div className="container footer__links">
          {visibleColumns.map((groups, ci) => (
            <div className="footer__col" key={ci}>
              {groups.map((group) => (
                <nav key={group.title} aria-label={group.title}>
                  <p className="footer__title">{group.title}</p>
                  <ul>
                    {group.links.map((l) => (
                      <li key={l.label}>
                        <a href={l.href}>{l.label}</a>
                        {l.tag && <Tag type={l.tag} />}
                      </li>
                    ))}
                  </ul>
                </nav>
              ))}
            </div>
          ))}
        </div>
      )}

      <div className="footer__band" id="iletisim">
        <div className="container footer__band-inner">
          <Image
            className="footer__whale"
            src="/illustrations/whale-mascot-2.png"
            alt=""
            width={923}
            height={549}
            aria-hidden="true"
          />
          <div className="footer__band-copy">
            <Link href="/" className="footer__brand" aria-label="balinaOS ana sayfa">
              <LogoMark className="footer__mark" />
              balinaOS
            </Link>
            <h2 className="footer__cta-title serif">Dalışa hazır mısınız?</h2>
            <p className="footer__tagline">
              Kanallarınızı bağlayın, tekrar eden işleri balinaOS AI&apos;ya bırakın. Kurulumda ekibimiz yanınızda.
            </p>
            <div className="btn-row footer__cta-actions">
              <a className="btn btn--dark" href="mailto:tozdemir@gmail.com?subject=Demo%20talebi" data-demo-trigger>
                Demo Talep Et
              </a>
              <a className="btn btn--light" href="https://app.balinaos.com">
                Ücretsiz Dene
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container footer__disclaimer">
        <div className="footer__rule" aria-hidden="true" />
        <p className="footer__about">
          balinaOS, Türkiye&apos;deki e-ticaret markaları için geliştirilen yapay zeka destekli bir e-ticaret
          entegrasyon yazılımıdır. Pazaryerlerini, e-Fatura sistemlerini, kargo firmalarını ve sosyal medya
          kanallarını tek bir panelde birleştirir.
        </p>
        <p className="footer__about">
          Trendyol, Hepsiburada ve TikTok Shop gibi pazaryerlerindeki ürün, stok, fiyat ve sipariş verilerini eş
          zamanlı tutar; sipariş onaylandığı anda e-Fatura veya e-Arşiv faturasını otomatik keser ve kargo etiketini
          oluşturur.
        </p>
        <p className="footer__about">
          Yapay zeka katmanı Instagram mesajlarını yanıtlar, ürün görselleri ile Reels ve TikTok videoları üretir.
          Amacımız, e-ticaret ekiplerinin tekrar eden operasyonel işlerle değil; ürünle, markayla ve müşteriyle
          uğraşmasını sağlamak.
        </p>
        <p className="footer__about">
          balinaOS&apos;u Türkiye&apos;deki e-ticaret ekiplerinin günlük ihtiyaçlarına göre sürekli geliştiriyoruz;
          entegrasyon kurulumundan sonra da destek ekibimiz yanınızda olmaya devam eder.
        </p>
      </div>

      <div className="container footer__bottom">
        <div className="footer__rule" aria-hidden="true" />
        <p className="footer__copy">© {new Date().getFullYear()} balinaOS. Tüm hakları saklıdır.</p>
      </div>
    </footer>
  );
}
