import Image from "next/image";

const tiles = [
  { src: "/illustrations/whale-mascot-2.png", w: 190, h: 230, offset: 0, caption: undefined },
  { src: "/products/linen-dress-golden-hour.jpg", w: 260, h: 230, offset: 56, caption: "Tek fotoğraftan stüdyo kalitesinde ürün görselleri üretin." },
  { src: "/products/linen-dress-coast.jpg", w: 210, h: 230, offset: 18, caption: undefined },
  { src: "/illustrations/coral.webp", w: 190, h: 230, offset: 84, caption: "Instagram DM'lerinizi 7/24 yapay zekâ yanıtlar." },
  { src: "/products/linen-dress-studio-1.jpg", w: 220, h: 230, offset: 8, caption: undefined },
  { src: "/illustrations/branch.png", w: 170, h: 230, offset: 46, caption: "Pazaryerleri, e-Fatura ve kargo tek panelde." },
] as const;

export function BlogMarquee() {
  const doubled = [...tiles, ...tiles];
  return (
    <div className="blog-marquee" aria-hidden="true">
      <div className="blog-marquee__track">
        {doubled.map((t, i) => (
          <figure key={i} className="blog-marquee__tile" style={{ width: t.w, marginTop: t.offset }}>
            <Image src={t.src} alt="" width={t.w} height={t.h} style={{ width: t.w, height: t.h, objectFit: "cover" }} />
            {t.caption && <figcaption>{t.caption}</figcaption>}
          </figure>
        ))}
      </div>
    </div>
  );
}
