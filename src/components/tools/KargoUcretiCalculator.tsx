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

export function KargoUcretiCalculator() {
  const [en, setEn] = useState("30");
  const [boy, setBoy] = useState("40");
  const [yukseklik, setYukseklik] = useState("20");
  const [agirlik, setAgirlik] = useState("");
  const [birimUcret, setBirimUcret] = useState("18");
  const [sabitUcret, setSabitUcret] = useState("15");

  const { desi, esas, toplam } = useMemo(() => {
    const d = (toNumber(en) * toNumber(boy) * toNumber(yukseklik)) / 3000;
    const w = toNumber(agirlik);
    const e = Math.max(d, w);
    const t = e * toNumber(birimUcret) + toNumber(sabitUcret);
    return { desi: d, esas: e, toplam: t };
  }, [en, boy, yukseklik, agirlik, birimUcret, sabitUcret]);

  return (
    <div className="tool-calc__grid">
      <div className="tool-calc__card">
        <div className="tool-calc__deco-mask">
          <Image className="tool-calc__deco" src="/illustrations/coral.webp" alt="" width={200} height={161} />
        </div>

        <div className="tool-field">
          <label htmlFor="ku-en">
            <Icon name="box" /> En × Boy × Yükseklik (cm)
          </label>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
            <input id="ku-en" className="tool-input" inputMode="decimal" value={en} onChange={(e) => setEn(e.target.value)} />
            <input className="tool-input" inputMode="decimal" value={boy} onChange={(e) => setBoy(e.target.value)} />
            <input className="tool-input" inputMode="decimal" value={yukseklik} onChange={(e) => setYukseklik(e.target.value)} />
          </div>
        </div>
        <div className="tool-field">
          <label htmlFor="ku-agirlik">
            <Icon name="truck" /> Gerçek ağırlık (kg, opsiyonel)
          </label>
          <input
            id="ku-agirlik"
            className="tool-input"
            inputMode="decimal"
            placeholder="Örn. 4.5"
            value={agirlik}
            onChange={(e) => setAgirlik(e.target.value)}
          />
        </div>
        <div className="tool-field">
          <label htmlFor="ku-birim">
            <Icon name="calc" /> Kargo firmanızın kg/desi birim ücreti (₺)
          </label>
          <input
            id="ku-birim"
            className="tool-input"
            inputMode="decimal"
            value={birimUcret}
            onChange={(e) => setBirimUcret(e.target.value)}
          />
        </div>
        <div className="tool-field">
          <label htmlFor="ku-sabit">
            <Icon name="receipt" /> Sabit hizmet bedeli (₺, opsiyonel)
          </label>
          <input
            id="ku-sabit"
            className="tool-input"
            inputMode="decimal"
            value={sabitUcret}
            onChange={(e) => setSabitUcret(e.target.value)}
          />
        </div>
      </div>

      <div className="tool-calc__side">
        <div className="tool-result">
          <span className="tool-result__pill">Sonuç</span>
          <div className="tool-result__row">
            <span className="tool-result__label">Desi değeri</span>
            <span className="tool-result__value">{desi.toLocaleString("tr-TR", { maximumFractionDigits: 2 })}</span>
          </div>
          <div className="tool-result__row">
            <span className="tool-result__label">Esas alınan (desi/kg)</span>
            <span className="tool-result__value">{esas.toLocaleString("tr-TR", { maximumFractionDigits: 2 })}</span>
          </div>
          <div className="tool-result__rule" />
          <div className="tool-result__row">
            <span className="tool-result__label">Tahmini kargo ücreti</span>
            <span className="tool-result__value tool-result__value--main">{formatTl(toplam)}</span>
          </div>
        </div>

        <div className="tool-info-box">
          <h2 className="serif">Kargo ücreti nasıl tahmin edilir?</h2>
          <p>
            Kargo firmaları, paketin desi değeri ile gerçek ağırlığından büyük olanını esas alıp kendi kg/desi birim
            ücretiyle çarpar, üzerine sabit bir hizmet bedeli ekler. Bu araç, sizin girdiğiniz birim ücret ve sabit
            bedelle aynı hesabı yapar; kesin tutar için kargo firmanızın güncel tarifesini kullanın.
          </p>
          <p>
            balinaOS, DHL gönderileriniz için etiketi otomatik oluşturur; kargo ücretini de sipariş bazında raporunuza
            işler.
          </p>
        </div>
      </div>
    </div>
  );
}
