import Image from "next/image";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero__inner">
        <h1 id="hero-title" className="hero__title serif">
          E-ticaretinizi
          <br />
          balinaOS AI yönetsin
        </h1>

        <div className="hero__mascot">
          <Image
            src="/illustrations/whale-mascot-2.png"
            alt="balinaOS maskotu: taneli dokulu lacivert balina"
            width={470}
            height={280}
            priority
          />
        </div>

        <p className="hero__lead">
          Türkiye&apos;nin yapay zeka destekli e-ticaret entegrasyon yazılımı: sipariş toplamaktan e-faturaya, DHL
          etiketinden Instagram mesajlarına kadar tekrar eden her işi sizin yerinize yürütür. Ürün görselinizi ve
          videonuzu da siz sadece isteyin, balinaOS AI üretsin.
        </p>

        <div className="hero__cta">
          <a className="btn btn--soft" href="https://app.balinaos.com">
            Ücretsiz Dene
          </a>
          <a className="btn btn--dark" href="#iletisim" data-demo-trigger>
            Demo Talep Et
          </a>
        </div>
      </div>
    </section>
  );
}
