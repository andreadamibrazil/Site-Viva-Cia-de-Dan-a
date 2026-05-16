"use client";
import { clsx } from "clsx";

export function Logo({ className, inverted }: { className?: string; inverted?: boolean }) {
  const color = inverted ? "#062B4F" : "#C79A42";
  const textColor = inverted ? "#062B4F" : "#EDE5D8";
  return (
    <div className={clsx("flex items-center gap-2", className)}>
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <ellipse cx="18" cy="10" rx="5" ry="5" fill={color} />
        <path
          d="M10 20 Q14 14 18 18 Q22 22 28 16"
          stroke={color}
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M8 28 Q13 22 18 26 Q23 30 28 24"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
      <div>
        <div
          className="font-display font-800 text-xl tracking-widest leading-none"
          style={{ color: color, fontWeight: 800 }}
        >
          VIVÁ
        </div>
        <div
          className="text-[9px] tracking-[0.25em] leading-none mt-0.5"
          style={{ color: textColor, opacity: 0.7 }}
        >
          CIA DE DANÇA
        </div>
      </div>
    </div>
  );
}
