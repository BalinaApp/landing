"use client";

import { useEffect, useState } from "react";
import { CountrySelect } from "./CountrySelect";
import { Icon } from "./Icon";
import { defaultCountry, formatPhoneForCountry } from "@/lib/countries";

const DEMO_EMAIL = "tozdemir@gmail.com";

export function DemoModal() {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [country, setCountry] = useState(defaultCountry);
  const [phone, setPhone] = useState("");

  useEffect(() => {
    function onClick(e: MouseEvent) {
      const target = (e.target as HTMLElement)?.closest("[data-demo-trigger]");
      if (!target) return;
      e.preventDefault();
      setOpen(true);
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (open) return;
    const t = window.setTimeout(() => {
      setSent(false);
      setName("");
      setEmail("");
      setCompany("");
      setCountry(defaultCountry);
      setPhone("");
    }, 300);
    return () => window.clearTimeout(t);
  }, [open]);

  if (!open) return null;

  function onPhoneChange(raw: string) {
    const digits = raw.replace(/\D/g, "").slice(0, (country.format.match(/#/g) ?? []).length);
    setPhone(formatPhoneForCountry(digits, country.format));
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const subject = `Demo talebi — ${company || name}`;
    const bodyLines = [
      `Ad Soyad: ${name}`,
      `İş e-postası: ${email}`,
      company && `Şirket: ${company}`,
      phone && `Telefon: +${country.dial} ${phone}`,
    ].filter(Boolean);
    const mailto = `mailto:${DEMO_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join("\n"))}`;
    window.location.href = mailto;
    setSent(true);
  }

  return (
    <div className="demo-modal-scrim" onClick={() => setOpen(false)} aria-hidden="false">
      <div
        className="demo-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="demo-modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" className="demo-modal__close" aria-label="Kapat" onClick={() => setOpen(false)}>
          <Icon name="x" />
        </button>

        {sent ? (
          <div className="demo-modal__done">
            <span className="demo-modal__done-icon">
              <Icon name="check-circle" />
            </span>
            <h2 className="serif">E-posta uygulamanız açıldı</h2>
            <p>
              Gönder&apos;e bastığınızda talebiniz {DEMO_EMAIL} adresine ulaşır; ekibimiz size birkaç dakika içinde
              dönüş yapar.
            </p>
            <button type="button" className="btn btn--dark" onClick={() => setOpen(false)}>
              Kapat
            </button>
          </div>
        ) : (
          <>
            <h2 id="demo-modal-title" className="demo-modal__title serif">
              Demo Talep Et
            </h2>
            <p className="demo-modal__lead">Bilgilerinizi bırakın, ekibimiz size birkaç dakika içinde dönüş yapsın.</p>

            <form className="demo-modal__form" onSubmit={submit}>
              <div className="demo-modal__row">
                <label className="demo-modal__field">
                  Ad Soyad
                  <input
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Adınız Soyadınız"
                  />
                </label>
                <label className="demo-modal__field">
                  Şirket
                  <input value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Şirket adınız" />
                </label>
              </div>

              <label className="demo-modal__field">
                İş e-postası
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ornek@sirketiniz.com"
                />
              </label>

              <div className="demo-modal__field">
                <span>Telefon</span>
                <span className="demo-modal__phone">
                  <CountrySelect value={country} onChange={setCountry} />
                  <input
                    type="tel"
                    inputMode="numeric"
                    value={phone}
                    onChange={(e) => onPhoneChange(e.target.value)}
                    placeholder={country.format.replace(/#/g, "5")}
                  />
                </span>
              </div>

              <button type="submit" className="btn btn--dark demo-modal__submit">
                Demo Talep Et
              </button>
              <p className="demo-modal__note">
                Gönder&apos;e bastığınızda e-posta uygulamanız {DEMO_EMAIL} adresine hazır bir talep e-postasıyla
                açılır.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
