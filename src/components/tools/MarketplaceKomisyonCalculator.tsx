"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { Icon } from "@/components/Icon";

function toNumber(v: string) {
  const n = parseFloat(v.replace(",", "."));
  return Number.isFinite(n) && n >= 0 ? n : 0;
}

function formatTl(n: number) {
  return n.toLocaleString("tr-TR", { style: "currency", currency: "TRY", maximumFractionDigits: 2 });
}

export function MarketplaceKomisyonCalculator({
  platform,
  panelName,
  defaultRate,
  deco,
}: {
  platform: string;
  panelName: string;
  defaultRate: string;
  deco: { src: string; width: number; height: number };
}) {
  const [fiyat, setFiyat] = useState("500");
  const [oran, setOran] = useState(defaultRate);
  const [kargo, setKargo] = useState("");

  const { komisyon, kargoTutari, net } = useMemo(() => {
    const f = toNumber(fiyat);
    const k = (f * toNumber(oran)) / 100;
    const kg = toNumber(kargo);
    return { komisyon: k, kargoTutari: kg, net: f - k - kg };
  }, [fiyat, oran, kargo]);

  return (
    <div className="tool-calc__grid">
      <div className="tool-calc__card">
        <div className="tool-calc__deco-mask">
          <Image className="tool-calc__deco" src={deco.src} alt="" width={deco.width} height={deco.height} />
        </div>

        <div className="tool-field">
          <label htmlFor="mk-fiyat">
            <Icon name="bag" /> Satış fiyatı (₺)
          </label>
          <input
            id="mk-fiyat"
            className="tool-input"
            inputMode="decimal"
            value={fiyat}
            onChange={(e) => setFiyat(e.target.value)}
          />
        </div>
        <div className="tool-field">
          <label htmlFor="mk-oran">
            <Icon name="calc" /> Komisyon oranı (%)
          </label>
          <input
            id="mk-oran"
            className="tool-input"
            inputMode="decimal"
            value={oran}
            onChange={(e) => setOran(e.target.value)}
          />
        </div>
        <div className="tool-field">
          <label htmlFor="mk-kargo">
            <Icon name="truck" /> Kargo bedeliniz (₺, opsiyonel)
          </label>
          <input
            id="mk-kargo"
            className="tool-input"
            inputMode="decimal"
            placeholder="Örn. 45"
            value={kargo}
            onChange={(e) => setKargo(e.target.value)}
          />
        </div>
      </div>

      <div className="tool-calc__side">
        <div className="tool-result">
          <span className="tool-result__pill">Sonuç</span>
          <div className="tool-result__row">
            <span className="tool-result__label">Komisyon tutarı</span>
            <span className="tool-result__value">{formatTl(komisyon)}</span>
          </div>
          {kargoTutari > 0 && (
            <div className="tool-result__row">
              <span className="tool-result__label">Kargo bedeli</span>
              <span className="tool-result__value">{formatTl(kargoTutari)}</span>
            </div>
          )}
          <div className="tool-result__rule" />
          <div className="tool-result__row">
            <span className="tool-result__label">Net kazancınız</span>
            <span className="tool-result__value tool-result__value--main">{formatTl(net)}</span>
          </div>
        </div>

        <div className="tool-info-box">
          <h2 className="serif">Komisyon nasıl hesaplanır?</h2>
          <p>
            Komisyon tutarı = Satış fiyatı × Komisyon oranı. Net kazanç ise satış fiyatından komisyon tutarını ve
            varsa kargo bedelinizi düştüğünüzde kalan tutardır. Kategoriye göre oran değiştiği için güncel oranı
            {" "}
            {panelName} panelinizden kontrol etmenizi öneririz.
          </p>
          <p>
            balinaOS, {platform} siparişlerinizi, stoklarınızı ve faturalarınızı tek panelde toplar; her siparişin
            gerçek net kârını komisyon ve kargo dahil otomatik hesaplar.
          </p>
        </div>
      </div>
    </div>
  );
}
