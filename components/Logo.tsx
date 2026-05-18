"use client";
import Image from "next/image";
import { clsx } from "clsx";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function Logo({ className, size = "md" }: LogoProps) {
  const dims = {
    sm: { h: "h-9",  w: 100, px: 40 },
    md: { h: "h-11", w: 130, px: 52 },
    lg: { h: "h-14", w: 160, px: 64 },
  }[size];

  return (
    <div className={clsx("flex items-center", className)}>
      <Image
        src="/logobranco.png"
        alt="Vivá Cia de Dança"
        width={dims.w}
        height={dims.px}
        className={clsx(dims.h, "w-auto object-contain")}
        priority
      />
    </div>
  );
}
