"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { integrationAnchors, integrations } from "@/lib/integrations";
import { Brand } from "./Brand";
import { Icon, type IconName } from "./Icon";
import { Logo } from "./Logo";

type MenuLink = { icon: IconName; title: string; desc?: string; href: string };

const productModules: MenuLink[] = [
  { icon: "sparkles", title: "AI İçerik Stüdyosu", desc: "Ürün görseli ve kısa video üretimi", href: "#ai-studyo" },
  { icon: "message", title: "AI Instagram Chat", desc: "DM'leri 7/24 yanıtlayan satış asistanı", href: "#instagram" },
  { icon: "bag", title: "Pazaryeri Entegrasyonu", desc: "AI ile Trendyol ve Hepsiburada tek panelde", href: "#pazaryerleri" },
  { icon: "receipt", title: "E-Fatura & E-Arşiv", desc: "Siparişten faturaya AI ile otomatik akış", href: "#e-fatura" },
  { icon: "truck", title: "Kargo Yönetimi", desc: "AI ile DHL etiket, takip ve iade süreçleri", href: "#kargo" },
];

const productCapabilities: MenuLink[] = [
  { icon: "refresh", title: "Stok & Fiyat Senkronu", desc: "Tüm kanallarda anlık ve kurallı", href: "#pazaryerleri" },
  { icon: "zap", title: "Sipariş Otomasyonu", desc: "Onay, fatura ve etiket tek adımda", href: "#ozellikler" },
  { icon: "bot", title: "AI Ajanlar", desc: "Bir sonraki adımı sizin için hazırlar", href: "#yapay-zeka" },
  { icon: "chart", title: "Raporlama", desc: "Kanal bazlı satış ve karlılık", href: "#ozellikler" },
  { icon: "video", title: "TikTok Shop Satışları", desc: "Videodan ve canlı yayından sipariş", href: "#tiktok" },
];

const solutionsTeam: MenuLink[] = [
  { icon: "bag", title: "E-ticaret ekipleri", href: "#ozellikler" },
  { icon: "megaphone", title: "Pazarlama", href: "#yapay-zeka" },
  { icon: "box", title: "Operasyon & Depo", href: "#kargo" },
  { icon: "calc", title: "Muhasebe", href: "#e-fatura" },
  { icon: "headset", title: "Müşteri hizmetleri", href: "#instagram" },
];

const solutionsStage: MenuLink[] = [
  { icon: "leaf", title: "Yeni başlayanlar", href: "#sss" },
  { icon: "rocket", title: "Büyüyen markalar", href: "#musteriler" },
  { icon: "building", title: "Kurumsal", href: "#iletisim" },
];

const resourceDiscover: MenuLink[] = [
  { icon: "layers", title: "Sıkça sorulan sorular", href: "#sss" },
  { icon: "headset", title: "Destek merkezi", href: "#iletisim" },
];

const resourceTools: MenuLink[] = [
  { icon: "calc", title: "Trendyol Komisyon Hesaplama", href: "/araclar/trendyol-komisyon-hesaplama" },
  { icon: "calc", title: "Hepsiburada Komisyon Hesaplama", href: "/araclar/hepsiburada-komisyon-hesaplama" },
  { icon: "calc", title: "TikTok Shop Komisyon Hesaplama", href: "/araclar/tiktok-shop-komisyon-hesaplama" },
  { icon: "receipt", title: "KDV Hesaplama", href: "/araclar/kdv-hesaplama" },
  { icon: "truck", title: "Desi Hesaplama", href: "/araclar/desi-hesaplama" },
  { icon: "truck", title: "Kargo Ücreti Hesaplama", href: "/araclar/kargo-ucreti-hesaplama" },
  { icon: "chart", title: "Kâr Marjı Hesaplama", href: "/araclar/kar-marji-hesaplama" },
  { icon: "message", title: "Instagram Hashtag Oluşturucu", href: "/araclar/instagram-hashtag-olusturucu" },
  { icon: "message", title: "Instagram Bio Oluşturucu", href: "/araclar/instagram-bio-olusturucu" },
];

function MenuColumn({
  heading,
  links,
  onNavigate,
  twoCol,
}: {
  heading: string;
  links: MenuLink[];
  onNavigate: () => void;
  twoCol?: boolean;
}) {
  return (
    <div className={twoCol ? "mega__col mega__col--wide" : "mega__col"}>
      <p className="mega__heading">{heading}</p>
      <ul className={twoCol ? "mega__list--2col" : undefined}>
        {links.map((l) => (
          <li key={l.title}>
            <a className="mega__link" href={l.href} onClick={onNavigate}>
              <span className="mega__icon">
                <Icon name={l.icon} />
              </span>
              <span>
                <span className="mega__title">{l.title}</span>
                {l.desc && <span className="mega__desc">{l.desc}</span>}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Every tile from the Entegrasyonlar section, mirrored 1:1 so the mega menu never drifts from it. */
function IntegrationsGrid({ onNavigate }: { onNavigate: () => void }) {
  return (
    <ul className="mega__platforms">
      {integrations.map((item) =>
        item.soon ? (
          <li key={item.id}>
            <span className="mega__platform mega__platform--soon" aria-disabled="true">
              <Brand id={item.id} className="brand--sm" />
              <span>{item.name}</span>
              <em>Yakında</em>
            </span>
          </li>
        ) : (
          <li key={item.id}>
            <a
              className="mega__platform"
              href={integrationAnchors[item.id] ?? "#entegrasyonlar"}
              onClick={onNavigate}
            >
              <Brand id={item.id} className="brand--sm" />
              <span>{item.name}</span>
            </a>
          </li>
        ),
      )}
    </ul>
  );
}

type MenuId = "product" | "solutions" | "integrations" | "resources";

export function Header() {
  const [open, setOpen] = useState<MenuId | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [overDark, setOverDark] = useState(false);
  const closeTimer = useRef<number | undefined>(undefined);
  const headerRef = useRef<HTMLElement>(null);

  const closeAll = useCallback(() => {
    setOpen(null);
    setMobileOpen(false);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      // Switches the header/mega menu to a dark tint whenever a .dark section (Entegrasyonlar,
      // Yapay zeka) is the thing actually sitting behind the sticky bar, so it never renders a
      // light glass panel over a dark background.
      const navH = headerRef.current?.offsetHeight ?? 72;
      let dark = false;
      document.querySelectorAll<HTMLElement>(".dark").forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top <= navH && r.bottom >= navH) dark = true;
      });
      setOverDark(dark);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && closeAll();
    const onClick = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) setOpen(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
    };
  }, [closeAll]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  const isDesktop = () => window.matchMedia("(min-width: 961px)").matches;

  const hoverOpen = (id: MenuId) => {
    if (!isDesktop()) return;
    window.clearTimeout(closeTimer.current);
    setOpen(id);
  };

  const hoverClose = () => {
    if (!isDesktop()) return;
    closeTimer.current = window.setTimeout(() => setOpen(null), 140);
  };

  const triggerProps = (id: MenuId) => ({
    type: "button" as const,
    className: "nav__link",
    "aria-expanded": open === id,
    "aria-controls": `menu-${id}`,
    // On desktop hover already opened the menu, so a click should not immediately close it.
    onClick: () => setOpen((cur) => (cur === id && !isDesktop() ? null : id)),
  });

  const headerClass = [
    "header",
    scrolled && "is-scrolled",
    mobileOpen && "is-menu-open",
    // The mobile menu paints its own light panel over the whole viewport, so whatever .dark
    // section happens to be scrolled behind it shouldn't flip the header's own colors while open.
    overDark && !mobileOpen && "is-dark",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <header ref={headerRef} className={headerClass}>
      <span className="header__blur" aria-hidden="true" />
      <div className="container nav">
        <Logo />

        <nav className="nav__menu" aria-label="Ana menü" id="main-menu">
          <div
            className={`nav__item${open === "product" ? " is-open" : ""}`}
            onMouseEnter={() => hoverOpen("product")}
            onMouseLeave={() => hoverClose()}
          >
            <button {...triggerProps("product")}>
              Ürünler <Icon name="chevron-down" />
            </button>
            <div className="mega mega--product" id="menu-product" inert={open !== "product"}>
              <div className="mega__panel">
                <MenuColumn heading="Modüller" links={productModules} onNavigate={closeAll} />
                <MenuColumn heading="Yetenekler" links={productCapabilities} onNavigate={closeAll} />
                <a className="mega__feature" href="#yapay-zeka" onClick={closeAll}>
                  <span className="mega__feature-art" aria-hidden="true">
                    <span className="mini-shot">
                      <span className="mini-shot__photo">
                        <Image src="/products/linen-dress-studio-1.jpg" alt="" fill sizes="60px" />
                      </span>
                      <span className="mini-shot__photo">
                        <Image src="/products/linen-dress-coast.jpg" alt="" fill sizes="60px" />
                      </span>
                      <span className="mini-shot__photo">
                        <Image src="/products/linen-dress-golden-hour.jpg" alt="" fill sizes="60px" />
                      </span>
                      <b />
                    </span>
                  </span>
                  <span className="mega__feature-title">
                    Yeni: AI Video Stüdyosu
                    <span className="arrow">
                      <Icon name="chevron-right" className="arrow__idle" />
                      <Icon name="arrow-right" className="arrow__hover" />
                    </span>
                  </span>
                  <p>Ürün fotoğraflarınızdan dakikalar içinde Reels ve TikTok videoları üretin.</p>
                </a>
              </div>
            </div>
          </div>

          <div
            className={`nav__item${open === "solutions" ? " is-open" : ""}`}
            onMouseEnter={() => hoverOpen("solutions")}
            onMouseLeave={() => hoverClose()}
          >
            <button {...triggerProps("solutions")}>
              Çözümler <Icon name="chevron-down" />
            </button>
            <div className="mega mega--solutions" id="menu-solutions" inert={open !== "solutions"}>
              <div className="mega__panel">
                <MenuColumn heading="Ekibe göre" links={solutionsTeam} onNavigate={closeAll} />
                <MenuColumn heading="Ölçeğe göre" links={solutionsStage} onNavigate={closeAll} />
              </div>
            </div>
          </div>

          <div
            className={`nav__item${open === "integrations" ? " is-open" : ""}`}
            onMouseEnter={() => hoverOpen("integrations")}
            onMouseLeave={() => hoverClose()}
          >
            <button {...triggerProps("integrations")}>
              Entegrasyonlar <Icon name="chevron-down" />
            </button>
            <div className="mega mega--integrations" id="menu-integrations" inert={open !== "integrations"}>
              <div className="mega__panel">
                <IntegrationsGrid onNavigate={closeAll} />
              </div>
            </div>
          </div>

          <div
            className={`nav__item${open === "resources" ? " is-open" : ""}`}
            onMouseEnter={() => hoverOpen("resources")}
            onMouseLeave={() => hoverClose()}
          >
            <button {...triggerProps("resources")}>
              Kaynaklar <Icon name="chevron-down" />
            </button>
            <div className="mega mega--solutions" id="menu-resources" inert={open !== "resources"}>
              <div className="mega__panel">
                <MenuColumn heading="Keşfet" links={resourceDiscover} onNavigate={closeAll} />
                <MenuColumn heading="Ücretsiz Araçlar" links={resourceTools} onNavigate={closeAll} twoCol />
              </div>
            </div>
          </div>
        </nav>

        <div className="nav__actions">
          <a className="btn btn--ghost btn--sm nav__login" href="https://app.balinaos.com">
            Giriş Yap
          </a>
          <a className="btn btn--soft btn--sm" href="https://app.balinaos.com">
            Ücretsiz Dene
          </a>
          <button
            type="button"
            className="nav__burger"
            aria-label={mobileOpen ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={mobileOpen}
            aria-controls="main-menu"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <Icon name={mobileOpen ? "x" : "menu"} />
          </button>
        </div>
      </div>
    </header>
  );
}
