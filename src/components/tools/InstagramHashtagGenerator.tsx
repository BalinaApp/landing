"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { Icon } from "@/components/Icon";

const categories = {
  giyim: ["moda", "stil", "outfit", "günlükstil", "yenisezon", "kombinönerisi", "kadıngiyim", "butik"],
  kozmetik: ["cilt bakımı", "makyaj", "güzellik", "skincare", "doğalürün", "makeup", "cildim"],
  aksesuar: ["takı", "aksesuar", "hediyefikri", "elyapımı", "tasarım"],
  ev: ["evdekorasyon", "evstili", "dekorasyon", "mutfak", "evim"],
  genel: ["instaalisveris", "türkiye", "trend", "yeniürün", "indirim", "hediyefikirleri", "kampanya"],
};

type Category = keyof typeof categories;

function slugify(word: string) {
  return word
    .trim()
    .toLocaleLowerCase("tr-TR")
    .replace(/ğ/g, "g")
    .replace(/ü/g, "u")
    .replace(/ş/g, "s")
    .replace(/ı/g, "i")
    .replace(/ö/g, "o")
    .replace(/ç/g, "c")
    .replace(/[^a-z0-9\s]/g, "")
    .split(/\s+/)
    .filter(Boolean);
}

export function InstagramHashtagGenerator() {
  const [keyword, setKeyword] = useState("keten elbise");
  const [category, setCategory] = useState<Category>("giyim");

  const tags = useMemo(() => {
    const words = slugify(keyword);
    if (words.length === 0) return [];
    const joined = words.join("");
    const withCategory = categories[category].map((c) => `${joined}${c.replace(/\s+/g, "")}`);
    const pool = [joined, ...words, ...categories[category], ...withCategory, ...categories.genel];
    return Array.from(new Set(pool.map((t) => `#${t.replace(/\s+/g, "")}`))).slice(0, 24);
  }, [keyword, category]);

  const tagText = tags.join(" ");

  return (
    <div className="tool-calc__grid">
      <div className="tool-calc__card">
        <div className="tool-calc__deco-mask">
          <Image className="tool-calc__deco" src="/illustrations/fish.png" alt="" width={300} height={99} />
        </div>

        <div className="tool-field">
          <label htmlFor="ih-keyword">
            <Icon name="search" /> Ürün / niş kelimesi
          </label>
          <input
            id="ih-keyword"
            className="tool-input"
            placeholder="Örn. keten elbise"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </div>
        <div className="tool-field">
          <label>
            <Icon name="layers" /> Kategori
          </label>
          <div className="tool-toggle" role="group" aria-label="Kategori" style={{ flexWrap: "wrap" }}>
            {(Object.keys(categories) as Category[])
              .filter((c) => c !== "genel")
              .map((c) => (
                <button key={c} type="button" className={category === c ? "is-active" : ""} onClick={() => setCategory(c)}>
                  {c === "giyim" ? "Giyim" : c === "kozmetik" ? "Kozmetik" : c === "aksesuar" ? "Aksesuar" : "Ev & Yaşam"}
                </button>
              ))}
          </div>
        </div>
      </div>

      <div className="tool-calc__side">
        <div className="tool-result">
          <span className="tool-result__pill">Sonuç</span>
          <p style={{ fontSize: 14.5, lineHeight: 1.7, color: "var(--dark-ink)" }}>
            {tags.length > 0 ? tagText : "Bir ürün veya niş kelimesi yazın."}
          </p>
        </div>

        <div className="tool-info-box">
          <h2 className="serif">Etiketler nasıl üretiliyor?</h2>
          <p>
            Yazdığınız ürün adı, seçtiğiniz kategoriye ait yaygın e-ticaret ve moda etiketleriyle birleştirilerek
            hazır bir liste oluşturulur. Bu, sabit bir kalıp aracıdır; gönderi bazında en iyi performansı görmek için
            etiketleri kendi markanıza göre düzenlemenizi öneririz.
          </p>
          <p>
            balinaOS AI Instagram Chat, gönderi ve DM'lerinizdeki soruları ürün kataloğunuza göre otomatik yanıtlar.
          </p>
        </div>
      </div>
    </div>
  );
}
