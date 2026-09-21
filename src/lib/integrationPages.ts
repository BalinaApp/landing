import type { BrandId } from "@/components/Brand";
import type { IconName } from "@/components/Icon";

export type IntegrationStep = {
  number: string;
  title: string;
  body: string;
  mockup: "connect" | "sync" | "automate";
};

export type IntegrationFeature = { icon: IconName; title: string; desc: string };
export type IntegrationCompareRow = { label: string; withUs: string; withoutUs: string };
export type IntegrationFaqItem = { q: string; a: string };

export type IntegrationPage = {
  slug: string;
  brand: BrandId;
  category: string;
  eyebrow: string;
  title: string;
  lead: string;
  chips: string[];
  overviewTitle: string;
  overview: string;
  steps: IntegrationStep[];
  featuresTitle: string;
  featuresLead: string;
  features: IntegrationFeature[];
  compareTitle: string;
  compareRows: IntegrationCompareRow[];
  faqs: IntegrationFaqItem[];
};

export const integrationPages: Record<string, IntegrationPage> = {
  "hepsiburada-entegrasyonu": {
    slug: "hepsiburada-entegrasyonu",
    brand: "hepsiburada",
    category: "Pazaryeri",
    eyebrow: "Entegrasyonlar / Pazaryeri",
    title: "Hepsiburada Entegrasyonu",
    lead: "Hepsiburada mağazanızı balinaOS'a bağlayın; ürün, stok, sipariş ve fatura süreçlerini tek panelden, gerçek zamanlı yönetin.",
    chips: [
      "Toplu ürün ve stok yönetimi",
      "Gerçek zamanlı sipariş senkronu",
      "Otomatik e-Fatura",
      "Kampanya takibi",
      "Muhasebe entegrasyonu",
      "Detaylı satış raporları",
    ],
    overviewTitle: "balinaOS, Hepsiburada entegrasyonu ile nasıl çalışır?",
    overview:
      "Hepsiburada mağazanıza gelen siparişler dakikalar içinde panelinize yansır. Stok ve fiyat güncellemeleri iki yönlü senkron kalır, e-Fatura otomatik kesilir. Tüm süreci tek panelden takip edersiniz.",
    steps: [
      {
        number: "01",
        title: "Bağlayın",
        body: "Hepsiburada mağaza bilgilerinizi girin, API bağlantısı dakikalar içinde kurulur; teknik bilgi gerekmez.",
        mockup: "connect",
      },
      {
        number: "02",
        title: "Senkronize edin",
        body: "Ürün, stok, fiyat ve sipariş verileri iki yönlü ve gerçek zamanlı olarak eşitlenir; fazla satış riski ortadan kalkar.",
        mockup: "sync",
      },
      {
        number: "03",
        title: "Otomatikleştirin",
        body: "Sipariş onaylandığında e-Fatura otomatik kesilir, kampanyalar ve satış raporları tek panelden izlenir.",
        mockup: "automate",
      },
    ],
    featuresTitle: "Hepsiburada entegrasyonu ile gelen özellikler",
    featuresLead:
      "Ürün, sipariş, fatura, muhasebe ve raporlama süreçlerinizi tek panelden yönetmenizi sağlayan özellikler.",
    features: [
      {
        icon: "bag",
        title: "Ürün yönetimi",
        desc: "Ürünlerinizi toplu yükleyin, varyant ve kategori eşlemesini otomatikleştirin, fiyat ve stok güncellemelerini anında yayınlayın.",
      },
      {
        icon: "truck",
        title: "Sipariş yönetimi",
        desc: "Hepsiburada siparişlerini tek ekranda görün, durumlarını takip edin, kargo sürecini uçtan uca yönetin.",
      },
      {
        icon: "receipt",
        title: "e-Fatura",
        desc: "Sipariş onaylanır onaylanmaz e-Fatura otomatik kesilir ve müşteriye iletilir; elle fatura kesmeye gerek kalmaz.",
      },
      {
        icon: "calc",
        title: "Muhasebe",
        desc: "Satışlarınızı muhasebe yazılımınızla senkron tutun, gelir-gider takibini ve cari mutabakatı kolaylaştırın.",
      },
      {
        icon: "megaphone",
        title: "Kampanya takibi",
        desc: "Hepsiburada kampanyalarına ürünlerinizi dahil edin, performansını tek panelden izleyin.",
      },
      {
        icon: "chart",
        title: "Raporlama",
        desc: "Satış, iade ve performans raporlarını anlık görüntüleyin; kararlarınızı güncel veriyle alın.",
      },
    ],
    compareTitle: "balinaOS ile Hepsiburada yönetimi",
    compareRows: [
      { label: "Sipariş aktarımı", withUs: "Anlık, otomatik senkron", withoutUs: "Manuel kontrol, gecikme riski" },
      { label: "Stok ve fiyat güncelleme", withUs: "Anlık, iki yönlü senkron", withoutUs: "Elle güncelleme, oversell riski" },
      { label: "Toplu ürün yükleme", withUs: "Tek seferde toplu yükleme", withoutUs: "Ürün ürün manuel giriş" },
      { label: "e-Fatura", withUs: "Otomatik kesim ve iletim", withoutUs: "Elle fatura kesme" },
      { label: "Raporlama", withUs: "Tek panelden anlık rapor", withoutUs: "Farklı panellerden manuel toplama" },
    ],
    faqs: [
      {
        q: "Hepsiburada entegrasyonu nasıl kurulur?",
        a: "Hepsiburada mağaza hesabınızın API bilgilerini balinaOS panelinden girmeniz yeterlidir. Bağlantı kurulduktan sonra ürün ve sipariş verileriniz otomatik olarak senkron olmaya başlar.",
      },
      {
        q: "Hangi veriler senkronize edilir?",
        a: "Ürün bilgileri, stok, fiyat, sipariş durumları ve kargo bilgileri iki yönlü olarak senkron tutulur.",
      },
      {
        q: "e-Fatura otomatik mi kesilir?",
        a: "Evet. Sipariş onaylandığında e-Fatura entegrasyonunuza otomatik olarak iletilir; manuel fatura kesme işlemi gerekmez.",
      },
      {
        q: "Kurulum ne kadar sürer?",
        a: "Mağaza bağlantısı genellikle birkaç dakika içinde tamamlanır. Ürün kataloğunuzun büyüklüğüne göre ilk senkron süresi değişebilir.",
      },
      {
        q: "Mevcut Hepsiburada mağazamı bağlayabilir miyim?",
        a: "Evet, aktif bir Hepsiburada satıcı hesabınız varsa mağazanızı doğrudan balinaOS'a bağlayabilirsiniz.",
      },
    ],
  },
};

export function getIntegrationPage(slug: string): IntegrationPage | undefined {
  return integrationPages[slug];
}
