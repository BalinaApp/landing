export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingMinutes: number;
  category: string;
  body: BlogBlock[];
  relatedLink: { label: string; href: string };
};

export const blogPosts: BlogPost[] = [
  {
    slug: "trendyolda-satis-nasil-yapilir",
    title: "Trendyol'da Satış Nasıl Yapılır?",
    excerpt: "Mağaza açmaktan ilk ürününüzü yayına almaya kadar Trendyol'da satışa başlama sürecinin adımları.",
    date: "2026-01-12",
    readingMinutes: 6,
    category: "Pazaryerleri",
    relatedLink: { label: "Trendyol Komisyon Hesaplama", href: "/araclar/trendyol-komisyon-hesaplama" },
    body: [
      {
        type: "p",
        text: "Trendyol, Türkiye'nin en çok ziyaret edilen pazaryerlerinden biri ve pek çok marka için ilk satış kanalı oluyor. Mağaza açma süreci nispeten hızlı, ancak doğru hazırlanmadan başlarsanız ürün onayı ve ilk satış arasında gereksiz zaman kaybedebilirsiniz.",
      },
      { type: "h2", text: "1. Satıcı başvurusu ve gerekli belgeler" },
      {
        type: "p",
        text: "Trendyol Partner üzerinden başvuru yaparken vergi levhası, imza sirküleri ve şirket bilgileriniz istenir. Şahıs şirketi, limited veya anonim şirket olarak başvurabilirsiniz; belgeleriniz eksiksizse onay süreci genelde birkaç iş günü sürer.",
      },
      { type: "h2", text: "2. Kategori ve komisyon oranınızı öğrenin" },
      {
        type: "p",
        text: "Her ürün kategorisinin kendi komisyon oranı vardır ve bu oranlar zamanla güncellenebilir. Ürün fiyatlandırması yapmadan önce kategorinize ait güncel oranı Partner panelinizden kontrol edin; net kazancınızı görmek için komisyon ve kargo bedelini birlikte hesaplamanız gerekir.",
      },
      { type: "h2", text: "3. Ürün yükleme ve içerik kalitesi" },
      {
        type: "p",
        text: "Trendyol, ürün başlığı, açıklama, görsel kalitesi ve kategori-özellik eşleşmesine göre ürünlerinizi sıralar. Net, arka planı temiz ve farklı açılardan çekilmiş görseller; eksiksiz doldurulmuş varyant (renk, beden) bilgisi arama sonuçlarında görünürlüğünüzü doğrudan etkiler.",
      },
      { type: "h2", text: "4. Sipariş, iade ve performans metrikleri" },
      {
        type: "ul",
        items: [
          "Sipariş onaylama ve kargoya verme süreniz mağaza puanınızı etkiler",
          "İptal ve iade oranınız düşük tutulduğunda vitrin sıralamanız iyileşir",
          "Müşteri sorularına hızlı yanıt, mağaza güven puanını yükseltir",
        ],
      },
      {
        type: "p",
        text: "Tek bir kanalda satış yapıyorsanız süreç elle yönetilebilir; ancak birden fazla pazaryerinde birden satıyorsanız stok, fiyat ve sipariş verisini elle senkron tutmak hızla sürdürülemez hale gelir. balinaOS, Trendyol siparişlerinizi diğer kanallarınızla aynı panelde toplayıp faturanızı ve kargo etiketinizi otomatik oluşturur.",
      },
    ],
  },
  {
    slug: "hepsiburadada-magaza-acmak",
    title: "Hepsiburada'da Mağaza Açmak",
    excerpt: "Hepsiburada Merchant başvurusu, ürün onay süreci ve yeni satıcıların sık yaptığı hatalar.",
    date: "2026-01-19",
    readingMinutes: 5,
    category: "Pazaryerleri",
    relatedLink: { label: "Hepsiburada Komisyon Hesaplama", href: "/araclar/hepsiburada-komisyon-hesaplama" },
    body: [
      {
        type: "p",
        text: "Hepsiburada, geniş kategori yelpazesi ve kurumsal alıcı kitlesiyle özellikle elektronik, ev yaşam ve moda kategorilerinde güçlü bir satış kanalı. Mağaza açma süreci Hepsiburada Merchant paneli üzerinden yürütülür.",
      },
      { type: "h2", text: "Başvuru ve entegrasyon seçenekleri" },
      {
        type: "p",
        text: "Başvuru sonrası şirket ve vergi bilgilerinizi onaylattıktan sonra ürünlerinizi panelden manuel girebilir veya bir entegratör üzerinden toplu yükleyebilirsiniz. Az sayıda SKU'nuz varsa manuel giriş yeterli olabilir; yüz veya binlerce üründe entegrasyon şart hâline gelir.",
      },
      { type: "h2", text: "Ürün onayı neye göre yapılır?" },
      {
        type: "p",
        text: "Hepsiburada, ürün açıklamalarının kategori şablonuna uygunluğunu, görsel kalitesini ve barkod/GTIN bilgisinin doğruluğunu kontrol eder. Eksik veya hatalı barkod bilgisi, onay sürecinde en sık karşılaşılan gecikme nedenidir.",
      },
      { type: "h2", text: "Yeni satıcıların sık yaptığı hatalar" },
      {
        type: "ul",
        items: [
          "Stok miktarını güncel tutmamak, iptal oranını artırır",
          "Kargo süresini gerçekçi girmemek, teslimat performansını düşürür",
          "Kategori komisyon oranını hesaba katmadan fiyatlandırma yapmak",
        ],
      },
      {
        type: "p",
        text: "balinaOS ile Hepsiburada'daki ürün, stok ve sipariş verinizi diğer kanallarınızla aynı anda senkron tutabilir; her siparişin komisyon ve kargo dahil gerçek net kârını otomatik görebilirsiniz.",
      },
    ],
  },
  {
    slug: "tiktok-shop-ile-satis-rehberi",
    title: "TikTok Shop ile Satış Rehberi",
    excerpt: "TikTok Shop Seller Center kaydından video ve canlı yayın satışlarına kadar bilmeniz gerekenler.",
    date: "2026-01-26",
    readingMinutes: 6,
    category: "Sosyal Ticaret",
    relatedLink: { label: "TikTok Shop Komisyon Hesaplama", href: "/araclar/tiktok-shop-komisyon-hesaplama" },
    body: [
      {
        type: "p",
        text: "TikTok Shop, ürünleri doğrudan video içeriği ve canlı yayınlar üzerinden satışa dönüştüren bir sosyal ticaret kanalı. Geleneksel pazaryerlerinden farkı, keşfin arama yerine içerik akışı üzerinden gerçekleşmesi.",
      },
      { type: "h2", text: "Seller Center'a kayıt ve katalog kurulumu" },
      {
        type: "p",
        text: "TikTok Shop Seller Center üzerinden başvurduktan sonra ürün kataloğunuzu yüklersiniz. Ürün görselleri kadar kısa video içerikleri de burada belirleyici; statik bir ürün fotoğrafı yerine ürünü kullanımda gösteren dikey videolar dönüşüm oranını gözle görülür şekilde artırır.",
      },
      { type: "h2", text: "Video, vitrin ve canlı yayından satış" },
      {
        type: "ul",
        items: [
          "Vitrin (showcase): profilinize eklenen ürünler, organik ziyaretten satışa döner",
          "Video etiketleme: mevcut içeriklerinize ürün etiketi ekleyerek izleyiciyi sepete yönlendirirsiniz",
          "Canlı yayın: gerçek zamanlı soru-cevap ve sınırlı süreli teklif dönüşümü artırır",
        ],
      },
      { type: "h2", text: "İçerik üretimini sürdürülebilir kılmak" },
      {
        type: "p",
        text: "Düzenli video üretimi, tek başına en çok zaman alan iş kalemlerinden biri. Ürün fotoğraflarınızdan otomatik kısa video üretmek, bu yükü önemli ölçüde azaltır; balinaOS AI Video Stüdyosu ürün görsellerinizi altyazılı, müzikli Reels ve TikTok videolarına dönüştürür.",
      },
      {
        type: "p",
        text: "Satış tarafında ise TikTok Shop siparişlerinizin diğer kanallarınızla aynı stok ve fatura akışına dahil olması gerekir; balinaOS bu akışı tek panelde birleştirir.",
      },
    ],
  },
  {
    slug: "e-fatura-ve-e-arsiv-farki-nedir",
    title: "e-Fatura ve e-Arşiv Farkı Nedir?",
    excerpt: "Hangi durumda e-Fatura, hangi durumda e-Arşiv fatura kesilir? Mükellefiyet ve entegrasyon gereksinimleri.",
    date: "2026-02-02",
    readingMinutes: 5,
    category: "e-Fatura",
    relatedLink: { label: "e-Fatura entegrasyonunu keşfedin", href: "/#e-fatura" },
    body: [
      {
        type: "p",
        text: "E-ticarette en sık karışan konulardan biri e-Fatura ile e-Arşiv fatura arasındaki fark. İkisi de elektronik ortamda düzenlenir, ancak kime kesildiğine göre değişir.",
      },
      { type: "h2", text: "e-Fatura nedir?" },
      {
        type: "p",
        text: "e-Fatura, GİB'in e-Fatura sistemine kayıtlı mükellefler arasında düzenlenen elektronik faturadır. Alıcı da e-Fatura mükellefiyse fatura doğrudan onun sistemine iletilir.",
      },
      { type: "h2", text: "e-Arşiv fatura nedir?" },
      {
        type: "p",
        text: "Alıcı e-Fatura mükellefi değilse (örneğin bireysel bir tüketiciyse) fatura e-Arşiv olarak kesilir. E-ticarette pazaryerlerinden gelen siparişlerin büyük çoğunluğu bireysel müşterilere gittiği için e-Arşiv fatura hacmi genelde daha yüksektir.",
      },
      { type: "h2", text: "Kimler mükellef olmak zorunda?" },
      {
        type: "p",
        text: "e-Fatura ve e-Arşiv mükellefiyeti; yıllık ciro eşiği, sektör ve bazı özel durumlara göre belirlenir. Eşikler ve istisnalar zaman zaman güncellendiği için kesin mükellefiyet durumunuzu güncel mevzuat veya mali müşavirinizle teyit etmeniz önemlidir.",
      },
      { type: "h2", text: "Pazaryeri satışlarında fatura akışı" },
      {
        type: "p",
        text: "Bir sipariş onaylandığında alıcı tipine göre doğru fatura türünün otomatik seçilmesi, elle takip edilmesi en zor süreçlerden biridir. balinaOS, sipariş onaylandığı an doğru fatura türünü otomatik oluşturup e-Fatura entegrasyonunuza iletir ve fatura bilgisini ilgili pazaryerine geri gönderir.",
      },
    ],
  },
  {
    slug: "instagram-dm-otomasyonu-rehberi",
    title: "Instagram DM Otomasyonu Rehberi",
    excerpt: "Instagram DM'lerini otomatikleştirirken nelere dikkat etmeli, AI asistan ne zaman devreye girmeli?",
    date: "2026-02-09",
    readingMinutes: 6,
    category: "Sosyal Ticaret",
    relatedLink: { label: "AI Instagram Chat'i keşfedin", href: "/#instagram" },
    body: [
      {
        type: "p",
        text: "Instagram, özellikle moda, kozmetik ve el yapımı ürün satan markalar için en yoğun satış öncesi iletişim kanalı. DM hacmi arttıkça manuel yanıtlama sürdürülemez hale gelir; burada otomasyon devreye girer.",
      },
      { type: "h2", text: "Otomasyonun sınırlarını bilmek" },
      {
        type: "p",
        text: "Meta'nın platform kuralları, otomatik yanıtların kullanıcıyı yanıltmamasını ve gerektiğinde bir insana devredilebilmesini şart koşar. İyi kurulmuş bir DM otomasyonu, sık sorulan soruları (beden, stok, kargo süresi) anında yanıtlarken karmaşık veya şikayet içeren mesajları ekibe devretmelidir.",
      },
      { type: "h2", text: "Hangi sorular otomatikleştirilmeli?" },
      {
        type: "ul",
        items: [
          "Stok ve beden/renk uygunluğu soruları",
          "Kargo süresi ve teslimat bilgisi",
          "Fiyat ve ödeme seçenekleri",
          "Sipariş durumu takibi",
        ],
      },
      { type: "h2", text: "İnsana devir ne zaman gerekir?" },
      {
        type: "p",
        text: "Toptan satış talepleri, şikayetler, iade anlaşmazlıkları ve markaya özgü istisnai durumlar bir insanın bağlamı görmesini gerektirir. İyi bir sistem, sohbetin tüm geçmişiyle birlikte ekibe devredilmesini sağlar; müşteri baştan anlatmak zorunda kalmaz.",
      },
      {
        type: "p",
        text: "balinaOS AI Instagram Chat, ürün kataloğunuz ve stok bilgilerinizle eğitilir, sık sorulan soruları 7/24 yanıtlar ve gerektiğinde sohbeti bağlamıyla birlikte ekibinize devreder.",
      },
    ],
  },
  {
    slug: "ai-ile-urun-fotografi-cekimi",
    title: "AI ile Ürün Fotoğrafı Çekimi",
    excerpt: "Stüdyo kiralamadan, tek bir ürün fotoğrafından çok sahneli görseller üretmenin pratik yolu.",
    date: "2026-02-16",
    readingMinutes: 5,
    category: "Yapay Zeka",
    relatedLink: { label: "AI İçerik Stüdyosu'nu keşfedin", href: "/#ai-studyo" },
    body: [
      {
        type: "p",
        text: "Geleneksel ürün fotoğrafçılığı; stüdyo kiralama, ekipman, fotoğrafçı ve düzenleme süreciyle hem maliyetli hem yavaştır. Özellikle sık ürün çeşidi değişen markalar için bu süreç büyümenin önünde bir darboğaz haline gelebilir.",
      },
      { type: "h2", text: "AI görsel üretimi nasıl çalışır?" },
      {
        type: "p",
        text: "Tek bir ürün fotoğrafı yükleyerek farklı arka plan, ışık ve sahne kombinasyonlarında yeni görseller üretilir. Model, ürünün formunu ve dokusunu koruyarak sahneyi değiştirir; aynı üründen mermer zeminde, doğal ışıkta veya renkli arka planda varyasyonlar elde edilebilir.",
      },
      { type: "h2", text: "İyi bir prompt nasıl yazılır?" },
      {
        type: "ul",
        items: [
          "Ürünü değil sahneyi tarif edin: \"krem şişe, yumuşak gölge, minimal sahne\"",
          "Işık yönünü belirtin: akşamüstü ışığı, stüdyo ışığı, doğal gün ışığı gibi",
          "Marka renklerinizle uyumlu zemin ve doku tercih edin",
        ],
      },
      { type: "h2", text: "Nerede dikkatli olmalı?" },
      {
        type: "p",
        text: "AI ile üretilen görseller hâlâ gözden geçirme gerektirir; ürünün gerçek rengini ve detaylarını yanıltacak sonuçlar filtrelenmeli, pazaryerlerinin görsel kurallarına (ölçü, arka plan) uygun şekilde kırpılmalıdır.",
      },
      {
        type: "p",
        text: "balinaOS AI İçerik Stüdyosu, tek bir ürün fotoğrafından stüdyo kalitesinde görseller üretir ve her pazaryerinin ölçü kuralına göre otomatik kırpıp isimlendirir.",
      },
    ],
  },
  {
    slug: "desi-nedir-nasil-hesaplanir",
    title: "Desi Nedir, Nasıl Hesaplanır?",
    excerpt: "Kargo faturanızın arkasındaki formül: desi hesaplama mantığı ve paketleme optimizasyonu ipuçları.",
    date: "2026-02-23",
    readingMinutes: 4,
    category: "Kargo",
    relatedLink: { label: "Desi Hesaplama Aracı", href: "/araclar/desi-hesaplama" },
    body: [
      {
        type: "p",
        text: "Kargo faturanızda beklediğinizden yüksek bir tutar gördüyseniz, sebebi genelde ürünün gerçek ağırlığı değil desi değeridir. Desi, paketin hacimsel ağırlığını ifade eder ve kargo firmaları ücretlendirmede bu iki değerden büyük olanını esas alır.",
      },
      { type: "h2", text: "Desi formülü" },
      {
        type: "p",
        text: "Desi = (En × Boy × Yükseklik, cm cinsinden) / 3000. Örneğin 30×40×20 cm ölçülerindeki bir paketin desi değeri (30×40×20)/3000 = 8 desi'dir. Paket 3 kg'dan hafifse bile kargo ücreti 8 desi üzerinden hesaplanır.",
      },
      { type: "h2", text: "Paketleme optimizasyonu ile ücreti düşürmek" },
      {
        type: "ul",
        items: [
          "Ürüne uygun en küçük kutuyu kullanın; boş hacim doğrudan desiyi artırır",
          "Şişirilebilir dolgu yerine ürüne oturan, ince koruma malzemeleri tercih edin",
          "Birden fazla ürünü tek kutuda birleştirmek, ayrı ayrı göndermekten genelde daha ucuzdur",
        ],
      },
      {
        type: "p",
        text: "Kendi ölçülerinizle hızlı hesap yapmak isterseniz balinaOS'un ücretsiz Desi Hesaplama aracını kullanabilirsiniz; balinaOS'a bağlandığınızda ise DHL gönderileriniz için etiket otomatik oluşturulur, desi hesabıyla siz uğraşmazsınız.",
      },
    ],
  },
  {
    slug: "pazaryeri-komisyon-oranlari-2026",
    title: "Pazaryeri Komisyon Oranları 2026",
    excerpt: "Komisyon oranları neye göre değişir, fiyatlandırma yaparken hangi kalemleri hesaba katmalısınız?",
    date: "2026-03-02",
    readingMinutes: 6,
    category: "Pazaryerleri",
    relatedLink: { label: "Komisyon Hesaplama Araçları", href: "/araclar/trendyol-komisyon-hesaplama" },
    body: [
      {
        type: "p",
        text: "Pazaryeri komisyon oranları sabit bir sayı değil; kategoriye, bazen alt kategoriye ve zaman içindeki güncellemelere göre değişir. Bu yazıda net bir oran listesi vermek yerine, oranları nasıl takip etmeniz ve fiyatlandırmanıza nasıl yansıtmanız gerektiğini anlatıyoruz.",
      },
      { type: "h2", text: "Komisyon neyi kapsar, neyi kapsamaz?" },
      {
        type: "p",
        text: "Komisyon oranı yalnızca pazaryerinin satıştan aldığı payı ifade eder. Kargo bedeli, hizmet bedeli, reklam/vitrin harcamaları ve iade süreç maliyetleri genelde ayrı kalemlerdir ve net kârınızı hesaplarken bunları da düşmeniz gerekir.",
      },
      { type: "h2", text: "Oranlar neden kategoriye göre değişir?" },
      {
        type: "p",
        text: "Yüksek hacimli ve düşük ortalama sepetli kategoriler (ör. temel giyim) ile düşük hacimli, yüksek ortalama sepetli kategoriler (ör. elektronik) farklı komisyon mantığıyla fiyatlandırılır. Aynı pazaryerinde bile kategoriden kategoriye 2-3 kat fark görebilirsiniz.",
      },
      { type: "h2", text: "Güncel oranı nereden takip etmeli?" },
      {
        type: "ul",
        items: [
          "Trendyol Partner, Hepsiburada Merchant, TikTok Shop Seller Center panellerindeki komisyon tabloları",
          "Kategori bazlı hakediş raporlarınız (gerçekleşen kesintiyi doğrulamak için)",
          "Pazaryerinin satıcılara yönelik resmi duyuru kanalları",
        ],
      },
      {
        type: "p",
        text: "Fiyatlandırma yaparken güncel oranı elle takip etmek yerine, komisyon hesaplama araçlarımızla (Trendyol, Hepsiburada, TikTok Shop) hızlıca net kazancınızı görebilirsiniz. balinaOS'a bağlandığınızda ise her siparişin gerçek net kârı, komisyon ve kargo dahil otomatik hesaplanır.",
      },
    ],
  },
  {
    slug: "cok-kanalli-satis-nedir",
    title: "Çok Kanallı Satış Nedir?",
    excerpt: "Tek pazaryerinden çok kanallı satışa geçişte karşılaşacağınız avantajlar ve zorluklar.",
    date: "2026-03-09",
    readingMinutes: 5,
    category: "Strateji",
    relatedLink: { label: "Pazaryeri entegrasyonlarını keşfedin", href: "/#pazaryerleri" },
    body: [
      {
        type: "p",
        text: "Çok kanallı satış (omnichannel), bir markanın ürünlerini birden fazla pazaryeri, sosyal medya ve kendi web sitesi üzerinden eş zamanlı satması anlamına gelir. Tek kanalda büyümenin bir tavanı vardır; çok kanallı satış bu tavanı kaldırır ama operasyonel karmaşıklığı da artırır.",
      },
      { type: "h2", text: "Neden birden fazla kanalda satmalı?" },
      {
        type: "ul",
        items: [
          "Her pazaryerinin kendi müşteri kitlesi ve arama trafiği vardır",
          "Tek kanala bağımlılık, o kanalın komisyon veya politika değişikliklerine karşı sizi kırılgan yapar",
          "TikTok Shop gibi kanallar, diğerlerinin yakalayamadığı genç ve keşif odaklı bir kitleye ulaşır",
        ],
      },
      { type: "h2", text: "Çok kanallı satışın zorlukları" },
      {
        type: "p",
        text: "En büyük zorluk, stok ve fiyat verisinin tüm kanallarda tutarlı kalmasıdır. Bir kanalda satılan ürünün stoğu diğerlerinde anında düşmezse fazla satış (oversell) riski doğar; bu da iptal, müşteri memnuniyetsizliği ve mağaza puanı kaybı demektir.",
      },
      { type: "h2", text: "Başlarken dikkat edilmesi gerekenler" },
      {
        type: "p",
        text: "Yeni bir kanala geçmeden önce ürün kataloğunuzun o kanalın kategori yapısına uygun olduğundan emin olun. Stok senkronunu ve sipariş toplama akışını elle değil otomatik bir sistemle kurmak, ikinci kanalı eklerken değil ilk kanaldan itibaren doğru bir alışkanlıktır.",
      },
      {
        type: "p",
        text: "balinaOS, Trendyol, Hepsiburada, TikTok Shop ve Instagram'daki satışlarınızı tek panelde toplar; bir kanalda satılan ürünün stoğu diğer tüm kanallarda anında düşer.",
      },
    ],
  },
  {
    slug: "e-ticarette-stok-yonetimi",
    title: "E-Ticarette Stok Yönetimi",
    excerpt: "Fazla satışı ve ölü stoğu önlemek için e-ticarette stok yönetiminin temel prensipleri.",
    date: "2026-03-16",
    readingMinutes: 6,
    category: "Operasyon",
    relatedLink: { label: "Stok & Fiyat Senkronu'nu keşfedin", href: "/#pazaryerleri" },
    body: [
      {
        type: "p",
        text: "Stok yönetimi, e-ticarette en çok göz ardı edilen ama en pahalıya patlayan operasyonel konulardan biri. Yetersiz stok satış kaybına, fazla stok ise sermayenizin raflarda kilitli kalmasına yol açar.",
      },
      { type: "h2", text: "Yaygın stok hataları" },
      {
        type: "ul",
        items: [
          "Kanallar arası senkronsuzluk yüzünden fazla satış (oversell) yapmak",
          "Yavaş hareket eden ürünlerde aşırı stok tutmak",
          "Güvenlik stoğu belirlememek, talep dalgalanmasında stok tükenmesi yaşamak",
        ],
      },
      { type: "h2", text: "ABC analizi ile önceliklendirme" },
      {
        type: "p",
        text: "Ürünlerinizi satış hacmine göre A (en çok satan, yakın takip), B (orta) ve C (az satan, gevşek takip) gruplarına ayırmak, sınırlı zamanınızı doğru ürünlere odaklamanızı sağlar. A grubu ürünlerde stok tükenmesi, C grubuna göre çok daha maliyetlidir.",
      },
      { type: "h2", text: "Güvenlik stoğu ve yeniden sipariş noktası" },
      {
        type: "p",
        text: "Tedarik süreniz ne kadar uzunsa, güvenlik stoğunuz o kadar yüksek olmalı. Ortalama günlük satış hızınızı ve tedarik süresini bilerek bir yeniden sipariş noktası belirlemek, hem stok tükenmesini hem de gereksiz fazla stoğu önler.",
      },
      {
        type: "p",
        text: "Çok kanallı satıyorsanız bu hesapları elle takip etmek hızla imkansız hale gelir. balinaOS, tüm kanallarınızdaki stok hareketlerini tek yerden gösterir; bir kanalda satılan ürünün stoğu diğer tüm kanallarda anında güncellenir.",
      },
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}

export function slugifyHeading(text: string) {
  return text
    .toLocaleLowerCase("tr-TR")
    .replace(/ğ/g, "g")
    .replace(/ü/g, "u")
    .replace(/ş/g, "s")
    .replace(/ı/g, "i")
    .replace(/ö/g, "o")
    .replace(/ç/g, "c")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

export function getToc(post: BlogPost) {
  return post.body
    .filter((b): b is Extract<BlogBlock, { type: "h2" }> => b.type === "h2")
    .map((b) => ({ id: slugifyHeading(b.text), text: b.text }));
}
