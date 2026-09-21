export const site = {
  name: "balinaOS",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.balinaos.com",
  title: "balinaOS: Yapay Zeka Destekli E-Ticaret Entegrasyon Yazılımı",
  shortTitle: "balinaOS",
  description:
    "balinaOS, Trendyol, Hepsiburada ve TikTok siparişlerinizi toplayan, e-faturanızı kesen, DHL etiketinizi basan ve Instagram DM'lerinizi yanıtlayan yapay zeka destekli e-ticaret entegrasyon yazılımıdır. Ürün görselleri ile videolarınızı da sizin için üretir; tek yapmanız gereken sormak.",
  keywords: [
    "e-ticaret entegrasyon yazılımı",
    "yapay zeka e-ticaret",
    "AI copilot",
    "e-ticaret entegrasyonu",
    "pazaryeri entegrasyonu",
    "Trendyol entegrasyonu",
    "Hepsiburada entegrasyonu",
    "TikTok Shop entegrasyonu",
    "e-fatura entegrasyonu",
    "e-arşiv fatura",
    "DHL kargo entegrasyonu",
    "Instagram AI chat",
    "Instagram DM otomasyonu",
    "AI ürün görseli",
    "AI video oluşturma",
    "stok senkronizasyonu",
  ],
  locale: "tr_TR",
} as const;

export type FaqItem = { q: string; a: string };

export const faqs: FaqItem[] = [
  {
    q: "balinaOS hangi kanallarla entegre çalışıyor?",
    a: "balinaOS; Trendyol, Hepsiburada ve TikTok Shop pazaryerleri, Instagram mesajları, e-Fatura / e-Arşiv ve DHL kargo ile entegre çalışır. Ürün, stok, fiyat, sipariş, fatura ve kargo verileri tek panelde senkron tutulur.",
  },
  {
    q: "AI Instagram Chat müşterilerime nasıl yanıt veriyor?",
    a: "AI asistan, ürün kataloğunuz, stok bilgileriniz ve mağaza kurallarınızla eğitilir. Instagram DM'lerine 7/24 yanıt verir, beden ve stok sorularını cevaplar, ödeme linki gönderir ve gerektiğinde sohbeti bağlamıyla birlikte ekibinize devreder.",
  },
  {
    q: "AI ile ürün görseli ve video nasıl oluşturuluyor?",
    a: "Tek bir ürün fotoğrafı yüklemeniz yeterli. balinaOS stüdyo kalitesinde arka planlar, farklı sahneler ve Reels/TikTok için dikey videolar üretir; her pazaryerinin ölçü kurallarına göre otomatik kırpar.",
  },
  {
    q: "E-fatura kesimi otomatik mi?",
    a: "Evet. Pazaryerinden gelen sipariş onaylandığında e-Fatura veya e-Arşiv faturası otomatik oluşturulur, e-Fatura entegrasyonunuza iletilir ve fatura bilgisi ilgili pazaryerine geri gönderilir.",
  },
  {
    q: "Kurulum ne kadar sürer, teknik bilgi gerekir mi?",
    a: "Hayır. Mağaza API bilgilerinizi girerek kanallarınızı panelden bağlarsınız; ürün eşleştirme ve kategori önerileri yapay zeka tarafından yapılır.",
  },
];
