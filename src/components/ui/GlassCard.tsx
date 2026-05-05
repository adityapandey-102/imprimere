import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

type GlassCardProps<T extends ElementType = "div"> = {
  as?: T;
  children: ReactNode;
  className?: string;
  dark?: boolean;
  hover?: boolean;
  glass?: boolean;
};

export default function GlassCard<T extends ElementType = "div">({
  as,
  children,
  className,
  dark = false,
  hover = false,
  glass = false,
}: GlassCardProps<T>) {
  const Component = as ?? "div";

  return (
    <Component
      className={cn(
        "relative overflow-hidden rounded-[1.25rem] border",
        dark
          ? "border-[#2f2f2f] bg-[#1f1f1f] text-white shadow-[0_12px_32px_rgba(0,0,0,0.22)]"
          : glass
            ? "border-white/15 bg-white/12 shadow-[0_8px_40px_rgba(0,0,0,0.2)] backdrop-blur-[18px] supports-[backdrop-filter]:backdrop-blur-[18px]"
            : "border-border/80 bg-white/72 shadow-[0_10px_28px_rgba(31,31,31,0.08)]",
        glass &&
          "before:pointer-events-none before:absolute before:inset-0 before:bg-[linear-gradient(180deg,rgba(255,255,255,0.14),rgba(255,255,255,0.02))] before:content-['']",
        hover &&
          "transition duration-300 hover:scale-[1.01] hover:shadow-[0_18px_36px_rgba(31,31,31,0.12)]",
        className,
      )}
    >
      <div className="relative z-[1]">{children}</div>
    </Component>
  );
}
