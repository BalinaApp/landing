import { ImageResponse } from "next/og";

export const alt = "balinaOS: Yapay zeka destekli e-ticaret entegrasyon yazılımı";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const channels = ["Trendyol", "Hepsiburada", "TikTok Shop", "Instagram AI", "e-Fatura", "DHL"];

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#f9f9f8",
          color: "#111110",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <svg width="56" height="56" viewBox="0 0 32 32">
            <rect width="32" height="32" rx="8" fill="#111110" />
            <path
              d="M16 25.5c0-4.6-1.4-8-4.8-10C8.3 13.8 6.7 11 7.1 7.2c2.9.9 6 2.6 7.6 5.5.5.9.9 1.1 1.3 1.1s.8-.2 1.3-1.1c1.6-2.9 4.7-4.6 7.6-5.5.4 3.8-1.2 6.6-4.1 8.3-3.4 2-4.8 5.4-4.8 10z"
              fill="#f9f9f8"
            />
          </svg>
          <span style={{ fontSize: 44, letterSpacing: -1.5 }}>balinaOS</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontSize: 92, lineHeight: 1, letterSpacing: -4 }}>E-ticaretinizi</span>
          <span style={{ fontSize: 92, lineHeight: 1.05, letterSpacing: -4 }}>balinaOS yönetsin</span>
        </div>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          {channels.map((c) => (
            <span
              key={c}
              style={{
                padding: "12px 22px",
                borderRadius: 999,
                background: c === "Instagram AI" ? "#ef7437" : "#ebeae7",
                color: c === "Instagram AI" ? "#fff" : "#2b2a28",
                fontSize: 26,
              }}
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    ),
    size
  );
}
