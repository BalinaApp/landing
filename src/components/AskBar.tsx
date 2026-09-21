"use client";

import { useEffect, useRef, useState } from "react";
import { Icon } from "./Icon";

type Msg = { role: "user" | "assistant"; text: string };

// Static demo replies — there's no real AI backend behind this bar yet.
const suggestions = [
  {
    q: "Trendyol entegrasyonunu nasıl bağlarım?",
    a: "Mağaza API bilgilerinizi panelden girerek birkaç dakikada bağlayabilirsiniz; ürün, stok ve sipariş eşleştirmesini yapay zeka yapar.",
  },
  {
    q: "e-Fatura nasıl otomatik kesilir?",
    a: "Pazaryerinden gelen sipariş onaylandığı an e-Fatura veya e-Arşiv faturası otomatik oluşturulur ve e-Fatura entegrasyonunuza iletilir.",
  },
  {
    q: "Demo nasıl talep ederim?",
    a: "Sayfanın altındaki \"Demo Talep Et\" butonuna tıklayın veya merhaba@balinaos.com adresine yazın, ekibimiz size birkaç dakika içinde dönüş yapar.",
  },
];

export function AskBar() {
  const [open, setOpen] = useState(false);
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");
  const [messages, setMessages] = useState<Msg[]>([]);
  const [thinking, setThinking] = useState(false);
  const [overDark, setOverDark] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [nearFooter, setNearFooter] = useState(false);
  const dockRef = useRef<HTMLDivElement>(null);
  const lastY = useRef(0);

  // The expanded panel's input has no onBlur (it unmounts on close before ever firing one),
  // so "focused" would otherwise stay stuck true forever after the first open — keeping the
  // dock wide even after closing. Closing always clears it explicitly.
  useEffect(() => {
    if (!open) setFocused(false);
  }, [open]);

  useEffect(() => {
    lastY.current = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      const delta = y - lastY.current;
      // Slides the dock away on a fast downward scroll and brings it right back on the
      // smallest upward nudge, so it never blocks content while reading down the page.
      if (delta > 4) setHidden(true);
      else if (delta < -2 || y < 40) setHidden(false);
      lastY.current = y;

      // Mirrors the header's own light/dark swap: tint the bar to match whatever .dark
      // section is actually sitting behind it, so it never renders a light glass pill
      // over a dark background.
      const dock = dockRef.current;
      if (!dock) return;
      const r = dock.getBoundingClientRect();
      const mid = r.top + r.height / 2;
      let dark = false;
      document.querySelectorAll<HTMLElement>(".dark").forEach((el) => {
        const dr = el.getBoundingClientRect();
        if (dr.top <= mid && dr.bottom >= mid) dark = true;
      });
      setOverDark(dark);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // The bar has no business floating over the footer's own CTA/disclaimer — once that section
  // comes into view, it disappears outright rather than just sliding out of the way.
  useEffect(() => {
    const footer = document.querySelector("footer.footer");
    if (!footer) return;
    const io = new IntersectionObserver(([entry]) => setNearFooter(entry.isIntersecting), {
      rootMargin: "0px 0px -10% 0px",
    });
    io.observe(footer);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (nearFooter) setOpen(false);
  }, [nearFooter]);

  function send(text: string) {
    const q = text.trim();
    if (!q || thinking) return;
    setMessages((m) => [...m, { role: "user", text: q }]);
    setValue("");
    setOpen(true);
    setThinking(true);
    const matched = suggestions.find((s) => s.q === q);
    window.setTimeout(() => {
      setThinking(false);
      setMessages((m) => [
        ...m,
        {
          role: "assistant",
          text: matched
            ? matched.a
            : "Selam! balinaOS hakkında size nasıl yardımcı olabilirim? Aşağıdakilerden birini seçebilir ya da kendi sorunuzu yazabilirsiniz.",
        },
      ]);
    }, 900);
  }

  const active = focused || open;
  const dockClass = [
    "ask-dock",
    overDark && "is-dark",
    active && "is-active",
    (nearFooter || (hidden && !open)) && "is-hidden",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      {open && <div className="ask-scrim" onClick={() => setOpen(false)} aria-hidden="true" />}
      <div ref={dockRef} className={dockClass}>
        {open ? (
          <div className="ask-panel" role="dialog" aria-label="balinaOS asistanı">
            <div className="ask-panel__header">
              <span className="ask-panel__title">balinaOS Asistanı</span>
              <button type="button" className="ask-panel__close" aria-label="Kapat" onClick={() => setOpen(false)}>
                <Icon name="x" />
              </button>
            </div>

            <div className="ask-panel__body">
              {messages.map((m, i) => (
                <p key={i} className={`ask-msg ask-msg--${m.role}`}>
                  {m.text}
                </p>
              ))}
              {thinking && (
                <div className="ask-typing" role="status" aria-label="balinaOS yazıyor">
                  <i />
                  <i />
                  <i />
                </div>
              )}
            </div>

            {messages.length === 0 && !thinking && (
              <div className="ask-panel__footer">
                <div className="ask-panel__intro">
                  <h3>balinaOS hakkında konuşalım</h3>
                  <p>Bir soru sorun, yanıtı hemen görün.</p>
                </div>
                <div className="ask-panel__suggestions">
                  {suggestions.map((s) => (
                    <button key={s.q} type="button" className="ask-suggestion" onClick={() => send(s.q)}>
                      {s.q}
                      <Icon name="arrow-up-right" className="ask-suggestion__icon" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            <form
              className="ask-panel__form"
              onSubmit={(e) => {
                e.preventDefault();
                send(value);
              }}
            >
              <input
                className="ask-panel__input"
                placeholder="Ne öğrenmek istersiniz?"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                aria-label="balinaOS asistanına sorun"
                autoFocus
              />
              <button type="submit" className="ask-panel__send" aria-label="Gönder" disabled={!value.trim()}>
                <Icon name="send" />
              </button>
            </form>
            <p className="ask-panel__powered">balinaOS ile çalışır</p>
          </div>
        ) : (
          <form
            className="ask-bar"
            onSubmit={(e) => {
              e.preventDefault();
              send(value);
            }}
          >
            <span className="ask-bar__glow" aria-hidden="true" />
            <input
              className="ask-bar__input"
              placeholder="Ne öğrenmek istersiniz?"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onFocus={() => {
                setFocused(true);
                setOpen(true);
              }}
              onBlur={() => setFocused(false)}
              aria-label="balinaOS asistanına sorun"
            />
            <button type="submit" className="ask-bar__send" aria-label="Gönder" disabled={!value.trim()}>
              <Icon name="send" />
            </button>
          </form>
        )}
      </div>
    </>
  );
}
