"use client";

import { useEffect, useRef, useState } from "react";
import { Icon } from "./Icon";
import { countries, type Country } from "@/lib/countries";

export function CountrySelect({ value, onChange }: { value: Country; onChange: (c: Country) => void }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const rootRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!open) return;
    function onClick(e: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    searchRef.current?.focus();
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const q = query.trim().toLocaleLowerCase("tr");
  const filtered = q
    ? countries.filter((c) => c.name.toLocaleLowerCase("tr").includes(q) || c.dial.includes(q.replace("+", "")))
    : countries;

  return (
    <div className="country-select" ref={rootRef}>
      <button
        type="button"
        className="country-select__trigger"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <img className="country-select__flag" src={value.flagUrl} alt="" width={18} height={13} />
        <span>+{value.dial}</span>
        <Icon name="chevron-down" />
      </button>
      {open && (
        <div className="country-select__panel">
          <input
            ref={searchRef}
            type="text"
            className="country-select__search"
            placeholder="Ülke ara..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <div className="country-select__list" role="listbox">
            {filtered.map((c) => (
              <button
                key={c.iso}
                type="button"
                role="option"
                aria-selected={c.iso === value.iso}
                className={`country-select__option${c.iso === value.iso ? " is-active" : ""}`}
                onClick={() => {
                  onChange(c);
                  setOpen(false);
                  setQuery("");
                }}
              >
                <img className="country-select__flag" src={c.flagUrl} alt="" width={18} height={13} />
                <span className="country-select__name">{c.name}</span>
                <span className="country-select__dial">+{c.dial}</span>
              </button>
            ))}
            {filtered.length === 0 && <p className="country-select__empty">Sonuç bulunamadı</p>}
          </div>
        </div>
      )}
    </div>
  );
}
