import type { BrandId } from "@/components/Brand";

export type Integration = { id: BrandId; name: string; category: string; desc: string; soon?: boolean };

// Order and soon/live status mirror the Figma grid exactly (node 27:1166), row by row.
// Shared by the Integrations section and the header's Entegrasyonlar mega menu so the two never drift apart.
export const integrations: Integration[] = [
  { id: "woocommerce", name: "WooCommerce", category: "Pazaryeri", desc: "WordPress mağazanızı bağlayın, ürün ve sipariş verinizi senkron tutun." },
  { id: "shopify", name: "Shopify", category: "Pazaryeri", desc: "Shopify mağazanızı bağlayın, ürün ve sipariş verinizi senkron tutun." },
  { id: "trendyol", name: "Trendyol", category: "Pazaryeri", desc: "Ürün, stok, fiyat, sipariş ve iade süreçlerini çift yönlü senkron tutun." },
  { id: "hepsiburada", name: "Hepsiburada", category: "Pazaryeri", desc: "Listeleme, sipariş toplama ve fatura yükleme işlemlerini otomatikleştirin." },
  { id: "ciceksepeti", name: "Çiçeksepeti", category: "Pazaryeri · Yakında", desc: "Pazaryeri entegrasyonu yol haritamızda.", soon: true },
  { id: "etsy", name: "Etsy", category: "Pazaryeri", desc: "Etsy mağazanızı bağlayın, ürün ve sipariş verinizi senkron tutun." },
  { id: "bizimhesap", name: "BizimHesap", category: "Muhasebe", desc: "Fatura ve muhasebe kayıtlarınızı otomatik senkron tutun." },
  { id: "parasut", name: "Paraşüt", category: "Muhasebe", desc: "Fatura ve muhasebe kayıtlarınızı otomatik senkron tutun." },
  { id: "dhl", name: "DHL Kargo", category: "Lojistik", desc: "Etiket oluşturma, gönderi takibi ve iade kodlarını otomatik yönetin." },
  { id: "yurtici", name: "Yurtiçi Kargo", category: "Lojistik · Yakında", desc: "Kargo entegrasyonu yol haritamızda.", soon: true },
  { id: "aras", name: "Aras Kargo", category: "Lojistik · Yakında", desc: "Kargo entegrasyonu yol haritamızda.", soon: true },
  { id: "surat", name: "Sürat Kargo", category: "Lojistik · Yakında", desc: "Kargo entegrasyonu yol haritamızda.", soon: true },
  { id: "instagram", name: "Instagram", category: "AI Chat", desc: "DM'leri yapay zeka ile yanıtlayın, sohbetten doğrudan sipariş oluşturun." },
  { id: "whatsapp", name: "WhatsApp Business", category: "AI Chat · Yakında", desc: "AI satış asistanı WhatsApp'a geliyor.", soon: true },
  { id: "tiktok", name: "TikTok Shop", category: "Sosyal ticaret", desc: "Katalog senkronu, video ve canlı yayın siparişlerini tek akışta toplayın." },
];

// Anchors for platforms that have a dedicated section elsewhere on the page; everything else
// jumps to the Entegrasyonlar grid itself. Shared by the mega menu and the Integrations grid.
export const integrationAnchors: Partial<Record<BrandId, string>> = {
  trendyol: "#pazaryerleri",
  hepsiburada: "#pazaryerleri",
  tiktok: "#tiktok",
  instagram: "#instagram",
  dhl: "#kargo",
  whatsapp: "#instagram",
};
