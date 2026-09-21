import { Brand } from "./Brand";
import { Icon } from "./Icon";
import { integrations } from "@/lib/integrations";

export function Integrations() {
  return (
    <div id="entegrasyonlar">
      <div className="dark-head" data-reveal>
        <h2>Tüm satış kanallarınız, tek panelde</h2>
        <p>
          Pazaryerlerini, sosyal ticareti, e-faturayı ve kargoyu dakikalar içinde bağlayın. balinaOS veriyi her yöne
          senkron tutar.
        </p>
      </div>

      <ul className="int-grid" data-reveal aria-label="Entegrasyonlar">
        {integrations.map((item) =>
          item.soon ? (
            <div key={item.id} className="int-tile int-tile--soon" aria-label={`${item.name}, ${item.category}`}>
              <Brand id={item.id} />
              <span className="int-soon">Yakında</span>
              <span className="int-tip" role="tooltip">
                <strong>{item.name}</strong>
                <span>{item.desc}</span>
                <em>{item.category}</em>
              </span>
            </div>
          ) : (
            <div key={item.id} className="int-tile" aria-label={`${item.name}, ${item.category}`}>
              <Brand id={item.id} />
              <span className="int-tip" role="tooltip">
                <strong>{item.name}</strong>
                <span>{item.desc}</span>
                <em>{item.category}</em>
              </span>
            </div>
          ),
        )}
        <li className="int-feature">
          <span className="int-feature__icon">
            <Icon name="code" />
          </span>
          <div className="int-feature__copy">
            <p className="int-feature__title">balinaOS API</p>
            <p className="int-feature__desc">
              Açık API ve webhook&apos;larla kendi sistemlerinizi bağlayın, bütün entegrasyonları tek yerden yönetin.
            </p>
          </div>
        </li>
      </ul>

      <div className="int-cols">
        <div className="int-col" data-reveal>
          <h3>Pazaryerleri</h3>
          <p>Trendyol ve Hepsiburada. Ürün, stok, fiyat ve siparişler iki yönlü, gerçek zamanlı senkron.</p>
        </div>
        <div className="int-col" data-reveal>
          <h3>Sosyal ticaret</h3>
          <p>Instagram ve TikTok Shop. DM&apos;lerden, videolardan ve canlı yayınlardan gelen satışlar tek akışta.</p>
        </div>
        <div className="int-col" data-reveal>
          <h3>Fatura ve kargo</h3>
          <p>e-Fatura, e-Arşiv ve DHL. Sipariş onaylandığı an fatura kesilsin, etiket basılsın.</p>
        </div>
      </div>
    </div>
  );
}
