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

function formatPct(n: number) {
  return `%${n.toLocaleString("tr-TR", { maximumFractionDigits: 1 })}`;
}

export function KarMarjiCalculator() {
  const [alis, setAlis] = useState("200");
  const [satis, setSatis] = useState("350");

  const { kar, marj, markup } = useMemo(() => {
    const a = toNumber(alis);
    const s = toNumber(satis);
    const k = s - a;
    return {
      kar: k,
      marj: s > 0 ? (k / s) * 100 : 0,
      markup: a > 0 ? (k / a) * 100 : 0,
    };
  }, [alis, satis]);

  return (
    <div className="tool-calc__grid">
      <div className="tool-calc__card">
        <div className="tool-calc__deco-mask">
          <Image className="tool-calc__deco" src="/illustrations/pebble-cluster.png" alt="" width={260} height={117} />
        </div>

        <div className="tool-field">
          <label htmlFor="km-alis">
            <Icon name="box" /> Alış fiyatı (₺)
          </label>
          <input
            id="km-alis"
            className="tool-input"
            inputMode="decimal"
            value={alis}
            onChange={(e) => setAlis(e.target.value)}
          />
        </div>
        <div className="tool-field">
          <label htmlFor="km-satis">
            <Icon name="bag" /> Satış fiyatı (₺)
          </label>
          <input
            id="km-satis"
            className="tool-input"
            inputMode="decimal"
            value={satis}
            onChange={(e) => setSatis(e.target.value)}
          />
        </div>
      </div>

      <div className="tool-calc__side">
        <div className="tool-result">
          <span className="tool-result__pill">Sonuç</span>
          <div className="tool-result__row">
            <span className="tool-result__label">Kâr tutarı</span>
            <span className="tool-result__value">{formatTl(kar)}</span>
          </div>
          <div className="tool-result__row">
            <span className="tool-result__label">Kâr oranı / markup (alışa göre)</span>
            <span className="tool-result__value">{formatPct(markup > -100 ? markup : 0)}</span>
          </div>
          <div className="tool-result__rule" />
          <div className="tool-result__row">
            <span className="tool-result__label">Kâr marjı (satışa göre)</span>
            <span className="tool-result__value tool-result__value--main">{formatPct(marj)}</span>
          </div>
        </div>

        <div className="tool-info-box">
          <h2 className="serif">Kâr marjı ile kâr oranı farkı</h2>
          <p>
            Kâr marjı, kârın satış fiyatına oranıdır: Kâr marjı = (Satış − Alış) / Satış × 100. Kâr oranı (markup)
            ise kârın alış fiyatına oranıdır: Kâr oranı = (Satış − Alış) / Alış × 100. İkisi birbirine karıştırılır
            ama farklı sonuç verir.
          </p>
          <p>
            balinaOS, her siparişin komisyon, kargo ve fatura kesintileri düşüldükten sonraki gerçek net kârını
            otomatik hesaplar; tahmini fiyatlandırma yerine gerçek rakamlarla çalışırsınız.
          </p>
        </div>
      </div>
    </div>
  );
}
