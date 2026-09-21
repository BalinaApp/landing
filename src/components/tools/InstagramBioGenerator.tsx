"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { Icon } from "@/components/Icon";

export function InstagramBioGenerator() {
  const [marka, setMarka] = useState("Balina Butik");
  const [urun, setUrun] = useState("keten elbise ve aksesuar");
  const [vurgu, setVurgu] = useState("elde dikim, sınırlı sayıda üretim");
  const [cta, setCta] = useState("Sipariş için linke tıkla");

  const variants = useMemo(() => {
    const m = marka.trim() || "Markanız";
    const u = urun.trim() || "ürünleriniz";
    const v = vurgu.trim();
    const c = cta.trim() || "DM'den ulaşın";
    return [
      `✨ ${m}\n${u} burada\n${v ? `${v} 🌿\n` : ""}👇 ${c}`,
      `${m} 🐚\n${u.charAt(0).toUpperCase()}${u.slice(1)}\n${v ? `${v}\n` : ""}📩 ${c}`,
      `${m} | ${u}\n${v ? `${v} · ` : ""}${c} 👇`,
    ];
  }, [marka, urun, vurgu, cta]);

  return (
    <div className="tool-calc__grid">
      <div className="tool-calc__card">
        <div className="tool-calc__deco-mask">
          <Image className="tool-calc__deco" src="/illustrations/branch.png" alt="" width={160} height={269} />
        </div>

        <div className="tool-field">
          <label htmlFor="ib-marka">
            <Icon name="bag" /> Marka adı
          </label>
          <input id="ib-marka" className="tool-input" value={marka} onChange={(e) => setMarka(e.target.value)} />
        </div>
        <div className="tool-field">
          <label htmlFor="ib-urun">
            <Icon name="image" /> Ne satıyorsunuz?
          </label>
          <input id="ib-urun" className="tool-input" value={urun} onChange={(e) => setUrun(e.target.value)} />
        </div>
        <div className="tool-field">
          <label htmlFor="ib-vurgu">
            <Icon name="sparkles" /> Öne çıkan özellik (opsiyonel)
          </label>
          <input id="ib-vurgu" className="tool-input" value={vurgu} onChange={(e) => setVurgu(e.target.value)} />
        </div>
        <div className="tool-field">
          <label htmlFor="ib-cta">
            <Icon name="send" /> Çağrı metni
          </label>
          <input id="ib-cta" className="tool-input" value={cta} onChange={(e) => setCta(e.target.value)} />
        </div>
      </div>

      <div className="tool-calc__side">
        <div className="tool-result">
          <span className="tool-result__pill">Sonuç</span>
          <div style={{ display: "grid", gap: 14 }}>
            {variants.map((v, i) => (
              <p key={i} style={{ fontSize: 14, lineHeight: 1.6, whiteSpace: "pre-line", color: "var(--dark-ink)" }}>
                {v}
              </p>
            ))}
          </div>
        </div>

        <div className="tool-info-box">
          <h2 className="serif">Etkili bir bio nasıl olmalı?</h2>
          <p>
            Instagram bio'su en fazla 150 karakter alır; ilk satırda ne sattığınızı, ikinci satırda sizi farklı
            kılan özelliği, son satırda ise net bir çağrı (link, DM, sipariş) belirtmek dönüşümü artırır.
          </p>
          <p>
            balinaOS AI Instagram Chat, bio'nuzdaki çağrıdan gelen mesajları otomatik yanıtlar ve stok bilgisiyle
            siparişe dönüştürür.
          </p>
        </div>
      </div>
    </div>
  );
}
