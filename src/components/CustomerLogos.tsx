// Placeholder customer logos drawn in currentColor — swap for real customer SVG logos before launch.

type LogoProps = { className?: string };

export function LunaLogo({ className }: LogoProps) {
  return (
    <svg className={className} viewBox="0 0 176 32" fill="currentColor" role="img" aria-label="Luna Butik">
      <path d="M16 2a14 14 0 1 0 12.2 20.9A11 11 0 0 1 16 2z" />
      <text x="36" y="23" fontSize="20" fontWeight="600" letterSpacing="1.5" fontFamily="var(--font-sans), sans-serif">
        LUNA
      </text>
      <text x="104" y="23" fontSize="20" fontWeight="300" letterSpacing="1.5" fontFamily="var(--font-sans), sans-serif">
        BUTİK
      </text>
    </svg>
  );
}

export function KozaLogo({ className }: LogoProps) {
  return (
    <svg className={className} viewBox="0 0 150 32" fill="currentColor" role="img" aria-label="Koza Home">
      <rect x="1" y="4" width="24" height="24" rx="7" />
      <path d="M8 11v10M8 16l7-5M10 15l5 6" stroke="#000" strokeOpacity=".55" strokeWidth="2.4" strokeLinecap="round" fill="none" />
      <text x="33" y="23.5" fontSize="22" fontStyle="italic" fontFamily="var(--font-serif), serif" letterSpacing="-0.5">
        Koza Home
      </text>
    </svg>
  );
}

export function AtolyeLogo({ className }: LogoProps) {
  return (
    <svg className={className} viewBox="0 0 132 32" fill="currentColor" role="img" aria-label="Atölye 34">
      <path d="M3 27 13 5h4l10 22h-5l-2-5h-10l-2 5zm9-9h6l-3-7z" />
      <text x="33" y="23" fontSize="20" fontWeight="700" letterSpacing="-0.8" fontFamily="var(--font-sans), sans-serif">
        atölye34
      </text>
    </svg>
  );
}

export function NaneLogo({ className }: LogoProps) {
  return (
    <svg className={className} viewBox="0 0 150 32" fill="currentColor" role="img" aria-label="Nane Kozmetik">
      <path d="M13 29C4 22 4 10 13 3c9 7 9 19 0 26zm0-4V8" />
      <text x="30" y="22" fontSize="15" letterSpacing="2.4" fontFamily="ui-monospace, Menlo, monospace">
        NANE/KZMTK
      </text>
    </svg>
  );
}

export function MaviLogo({ className }: LogoProps) {
  return (
    <svg className={className} viewBox="0 0 140 32" fill="currentColor" role="img" aria-label="Mavi Pazar">
      <path d="M2 22c5-6 9-6 14 0s9 6 14 0v5c-5 6-9 6-14 0s-9-6-14 0zM2 12c5-6 9-6 14 0s9 6 14 0v5c-5 6-9 6-14 0s-9-6-14 0z" />
      <text x="38" y="23" fontSize="19" fontWeight="800" letterSpacing="0.6" fontFamily="var(--font-sans), sans-serif">
        MAVİPAZAR
      </text>
    </svg>
  );
}
