// Design system — Tag pill: regra única para toda a aplicação
export type TagVariant = "dourado" | "verde" | "azul" | "neutro";

const PALETTE: Record<TagVariant, { bg: string; text: string; border: string }> = {
  dourado: { bg: "#C79A4218", text: "#C79A42", border: "#C79A4240" },
  verde:   { bg: "#526B5218", text: "#6B8F6B", border: "#526B5240" },
  azul:    { bg: "#006DB218", text: "#4BA3D4", border: "#006DB240" },
  neutro:  { bg: "#EDE5D810", text: "#EDE5D870", border: "#EDE5D820" },
};

// Deriva variante automaticamente a partir do texto da tag
export function tagVariant(tag: string): TagVariant {
  const t = tag.toUpperCase();
  if (t.includes("CARTAZ") || t.includes("ORIGEM") || t.includes("CRIAÇÃO") || t.includes("ATUAL") || t.includes("LEGADO")) return "dourado";
  if (t.includes("SOCIAL")) return "verde";
  if (t.includes("NACIONAL") || t.includes("SESC") || t.includes("INTERNACIONAL")) return "azul";
  return "neutro";
}

interface TagProps {
  label: string;
  variant?: TagVariant;
  pulse?: boolean;
  className?: string;
}

export function Tag({ label, variant = "dourado", pulse, className }: TagProps) {
  const p = PALETTE[variant];
  return (
    <span
      className={`inline-flex items-center gap-1.5 text-[9px] tracking-[0.14em] uppercase px-2.5 py-1 rounded-full font-semibold whitespace-nowrap ${className ?? ""}`}
      style={{
        backgroundColor: p.bg,
        color: p.text,
        border: `1px solid ${p.border}`,
        backdropFilter: "blur(8px)",
      }}
    >
      {pulse && (
        <span
          className="w-1.5 h-1.5 rounded-full animate-pulse shrink-0"
          style={{ backgroundColor: p.text }}
        />
      )}
      {label}
    </span>
  );
}
