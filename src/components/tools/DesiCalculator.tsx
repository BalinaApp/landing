"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { Icon } from "@/components/Icon";

function toNumber(v: string) {
  const n = parseFloat(v.replace(",", "."));
  return Number.isFinite(n) && n >= 0 ? n : 0;
}

export function DesiCalculator() {
  const [en, setEn] = useState("30");
  const [boy, setBoy] = useState("40");
  const [yukseklik, setYukseklik] = useState("20");
  const [agirlik, setAgirlik] = useState("");

  const { desi, kg, esas } = useMemo(() => {
    const d = (toNumber(en) * toNumber(boy) * toNumber(yukseklik)) / 3000;
    const w = toNumber(agirlik);
    return { desi: d, kg: w, esas: Math.max(d, w) };
  }, [en, boy, yukseklik, agirlik]);

  return (
    <div className="tool-calc__grid">
      <div className="tool-calc__card">
        <div className="tool-calc__deco-mask">
          <Image className="tool-calc__deco" src="/illustrations/branch.png" alt="" width={160} height={269} />
        </div>

        <div className="tool-field">
          <label htmlFor="desi-en">
            <Icon name="box" /> En (cm)
          </label>
          <input id="desi-en" className="tool-input" inputMode="decimal" value={en} onChange={(e) => setEn(e.target.value)} />
        </div>
        <div className="tool-field">
          <label htmlFor="desi-boy">
            <Icon name="box" /> Boy (cm)
          </label>
          <input id="desi-boy" className="tool-input" inputMode="decimal" value={boy} onChange={(e) => setBoy(e.target.value)} />
        </div>
        <div className="tool-field">
          <label htmlFor="desi-yukseklik">
            <Icon name="box" /> Yükseklik (cm)
          </label>
          <input
            id="desi-yukseklik"
            className="tool-input"
            inputMode="decimal"
            value={yukseklik}
            onChange={(e) => setYukseklik(e.target.value)}
          />
        </div>
        <div className="tool-field">
          <label htmlFor="desi-agirlik">
            <Icon name="truck" /> Gerçek ağırlık (kg, opsiyonel)
          </label>
          <input
            id="desi-agirlik"
            className="tool-input"
            inputMode="decimal"
            placeholder="Örn. 4.5"
            value={agirlik}
            onChange={(e) => setAgirlik(e.target.value)}
          />
        </div>
      </div>

      <div className="tool-calc__side">
        <div className="tool-result">
          <span className="tool-result__pill">Sonuç</span>
          <div className="tool-result__row">
            <span className="tool-result__label">Desi Değeri</span>
            <span className="tool-result__value tool-result__value--main">{desi.toLocaleString("tr-TR", { maximumFractionDigits: 2 })}</span>
          </div>
          <div className="tool-result__rule" />
          <div className="tool-result__row">
            <span className="tool-result__label">Girdiğiniz ağırlık</span>
            <span className="tool-result__value">{kg ? `${kg.toLocaleString("tr-TR")} kg` : "Girilmedi"}</span>
          </div>
          <div className="tool-result__row">
            <span className="tool-result__label">Kargoda esas alınacak</span>
            <span className="tool-result__value">
              {esas.toLocaleString("tr-TR", { maximumFractionDigits: 2 })} {kg ? "kg/desi" : "desi"}
            </span>
          </div>
        </div>

        <div className="tool-info-box">
          <h2 className="serif">Desi formülü</h2>
          <p>
            Desi = (En × Boy × Yükseklik) / 3000. Kargo firmaları, paketin desi değeri ile gerçek kilogram
            ağırlığından büyük olanını ücretlendirmede esas alır. Bu yüzden hacimli ama hafif paketler bile yüksek
            ücretlendirilebilir.
          </p>
          <p>
            balinaOS ile DHL gönderileriniz için etiket otomatik oluşturulur; desi hesaplamasıyla siz uğraşmadan doğru
            tarife otomatik uygulanır.
          </p>
        </div>
      </div>
    </div>
  );
}
