import { Deco } from "@/components/Features";

export function IntegrationMockup({
  deco,
  decoClass,
  children,
}: {
  deco?: "shell" | "pebble" | "blob" | "coral" | "whale";
  decoClass?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="fcard__stage integ-mockup">
      {deco && <Deco src={deco} className={decoClass ?? "deco--br"} />}
      {children}
    </div>
  );
}
