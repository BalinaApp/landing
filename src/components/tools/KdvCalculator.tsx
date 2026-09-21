"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { Icon } from "@/components/Icon";
import { ToolSelect } from "@/components/tools/ToolSelect";

const rates = [1, 10, 20];
const rateOptions = rates.map((r) => ({ value: String(r), label: `%${r}` }));

function toNumber(v: string) {
  const n = parseFloat(v.replace(",", "."));
  return Number.isFinite(n) ? n : 0;
}

function formatTl(n: number) {
  return n.toLocaleString("tr-TR", { style: "currency", currency: "TRY", maximumFractionDigits: 2 });
}

export function KdvCalculator() {
  const [amount, setAmount] = useState("1000");
  const [rate, setRate] = useState(20);
  const [mode, setMode] = useState<"haric" | "dahil">("haric");

  const { net, kdv, gross } = useMemo(() => {
    const value = toNumber(amount);
    if (mode === "haric") {
      const kdvTutari = (value * rate) / 100;
      return { net: value, kdv: kdvTutari, gross: value + kdvTutari };
    }
    const netTutar = value / (1 + rate / 100);
    return { net: netTutar, kdv: value - netTutar, gross: value };
  }, [amount, rate, mode]);

  return (
    <div className="tool-calc__grid">
      <div className="tool-calc__card">
        <div className="tool-calc__deco-mask">
          <Image className="tool-calc__deco" src="/illustrations/pebble-cluster.png" alt="" width={260} height={117} />
        </div>

        <div className="tool-field">
          <label>Girdiğiniz tutar</label>
          <div className="tool-toggle" role="group" aria-label="Tutar türü">
            <button type="button" className={mode === "haric" ? "is-active" : ""} onClick={() => setMode("haric")}>
              KDV Hariç
            </button>
            <button type="button" className={mode === "dahil" ? "is-active" : ""} onClick={() => setMode("dahil")}>
              KDV Dahil
            </button>
          </div>
        </div>

        <div className="tool-field">
          <label htmlFor="kdv-amount">
            <Icon name="receipt" /> Tutar (₺)
          </label>
          <input
            id="kdv-amount"
            className="tool-input"
            inputMode="decimal"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <div className="tool-field">
          <label>
            <Icon name="calc" /> KDV oranı
          </label>
          <ToolSelect
            value={String(rate)}
            options={rateOptions}
            onChange={(v) => setRate(Number(v))}
            ariaLabel="KDV oranı"
          />
        </div>
      </div>

      <div className="tool-calc__side">
        <div className="tool-result">
          <span className="tool-result__pill">Sonuç</span>
          <div className="tool-result__row">
            <span className="tool-result__label">KDV Hariç Tutar</span>
            <span className="tool-result__value">{formatTl(net)}</span>
          </div>
          <div className="tool-result__row">
            <span className="tool-result__label">KDV Tutarı (%{rate})</span>
            <span className="tool-result__value">{formatTl(kdv)}</span>
          </div>
          <div className="tool-result__rule" />
          <div className="tool-result__row">
            <span className="tool-result__label">KDV Dahil Tutar</span>
            <span className="tool-result__value tool-result__value--main">{formatTl(gross)}</span>
          </div>
        </div>

        <div className="tool-info-box">
          <h2 className="serif">KDV nasıl hesaplanır?</h2>
          <p>
            KDV hariç tutardan KDV dahil tutara ulaşmak için tutarı KDV oranıyla çarpıp üzerine eklersiniz: KDV
            dahil = KDV hariç × (1 + oran). KDV dahil bir tutardan KDV hariç tutara inmek içinse tutarı (1 + oran)
            değerine bölersiniz.
          </p>
          <p>
            balinaOS, pazaryeri siparişleriniz onaylandığı an faturanızı otomatik keser ve e-Fatura entegrasyonunuza
            iletir; KDV hesabıyla manuel uğraşmadan.
          </p>
        </div>
      </div>
    </div>
  );
}
