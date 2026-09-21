import { siDhl, siInstagram, siShopify, siTiktok, siWhatsapp } from "simple-icons";

export type BrandId =
  | "trendyol"
  | "hepsiburada"
  | "woocommerce"
  | "shopify"
  | "ciceksepeti"
  | "etsy"
  | "bizimhesap"
  | "parasut"
  | "dhl"
  | "efatura"
  | "yurtici"
  | "aras"
  | "surat"
  | "instagram"
  | "whatsapp"
  | "tiktok";

/** Official marks shipped with simple-icons (CC0). */
const officialPaths: Partial<Record<BrandId, string>> = {
  tiktok: siTiktok.path,
  instagram: siInstagram.path,
  whatsapp: siWhatsapp.path,
  dhl: siDhl.path,
  shopify: siShopify.path,
};

/** Official brand colors for the simple-icons marks above (simple-icons ships the path only). */
const officialColors: Partial<Record<BrandId, string>> = {
  shopify: `#${siShopify.hex}`,
};

/**
 * Fallback marks for brands simple-icons doesn't include. Dropping an official logo at
 * public/logos/<id>.png (full-bleed icon) or <id>.svg (wordmark on a white card) replaces these automatically.
 */
const fallbackGlyphs: Record<BrandId, React.ReactNode> = {
  trendyol: "t",
  hepsiburada: "h",
  woocommerce: null,
  shopify: null,
  ciceksepeti: null,
  etsy: null,
  bizimhesap: "BH",
  parasut: "Paraşüt",
  dhl: null,
  efatura: (
    <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 3h9l4 4v14H6z" />
      <path d="M15 3v4h4M9 12h7M9 16h5" />
    </svg>
  ),
  yurtici: "yk",
  aras: (
    <svg viewBox="0 0 24 24" fill="none">
      <path d="M4 18 10.5 5h3L20 18h-3.4l-1.3-2.8H8.7L7.4 18z" fill="#fff" />
      <path d="M9.9 12.6h4.2L12 8z" fill="#e30613" />
    </svg>
  ),
  surat: "SK",
  instagram: null,
  whatsapp: null,
  tiktok: null,
};

export const brandNames: Record<BrandId, string> = {
  trendyol: "Trendyol",
  hepsiburada: "Hepsiburada",
  woocommerce: "WooCommerce",
  shopify: "Shopify",
  ciceksepeti: "Çiçeksepeti",
  etsy: "Etsy",
  bizimhesap: "BizimHesap",
  parasut: "Paraşüt",
  dhl: "DHL Kargo",
  efatura: "e-Fatura",
  yurtici: "Yurtiçi Kargo",
  aras: "Aras Kargo",
  surat: "Sürat Kargo",
  instagram: "Instagram",
  whatsapp: "WhatsApp Business",
  tiktok: "TikTok Shop",
};

/**
 * "icon" = full-bleed square app icon (own background baked in), saved as <id>.png.
 * "logo" = wordmark on a white card, saved as <id>.svg.
 * A static map (not a filesystem check) so this component stays importable from Client Components —
 * update it when adding/removing a file in public/logos/.
 */
type LogoFile = { ext: "png" | "svg"; kind: "icon" | "logo" };

const logoFiles: Partial<Record<BrandId, LogoFile>> = {
  trendyol: { ext: "png", kind: "icon" },
  hepsiburada: { ext: "png", kind: "icon" },
  woocommerce: { ext: "png", kind: "icon" },
  ciceksepeti: { ext: "png", kind: "icon" },
  etsy: { ext: "png", kind: "icon" },
  bizimhesap: { ext: "png", kind: "icon" },
  parasut: { ext: "png", kind: "icon" },
  yurtici: { ext: "png", kind: "icon" },
  aras: { ext: "png", kind: "icon" },
  surat: { ext: "png", kind: "icon" },
};

export function Brand({ id, className }: { id: BrandId; className?: string }) {
  const path = officialPaths[id];
  const logo = !path ? logoFiles[id] : undefined;
  const classes = ["brand", `brand--${id}`, logo && `brand--${logo.kind}`, className].filter(Boolean).join(" ");
  const color = officialColors[id];

  return (
    <span className={classes} aria-hidden="true" style={color ? { background: color } : undefined}>
      {path ? (
        <svg className="brand__mark" viewBox="0 0 24 24">
          <path d={path} />
        </svg>
      ) : logo ? (
        // eslint-disable-next-line @next/next/no-img-element -- tiny static logo, nothing to optimize
        <img src={`/logos/${id}.${logo.ext}`} alt="" />
      ) : (
        fallbackGlyphs[id]
      )}
    </span>
  );
}
