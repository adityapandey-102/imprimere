import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  children: ReactNode;
  className?: string;
  href?: string;
  variant?: "primary" | "outline";
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  className,
  href,
  variant = "primary",
  type = "button",
  ...props
}: ButtonProps) {
  const styles = cn(
    "inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3 text-[0.72rem] font-medium uppercase tracking-[0.24em] transition duration-300",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/30",
    variant === "primary"
      ? "bg-accent text-bg hover:-translate-y-0.5 hover:bg-text/90"
      : "border border-border bg-transparent text-text hover:-translate-y-0.5 hover:bg-text/4",
    className,
  );

  if (href) {
    return (
      <Link href={href} className={styles} data-cursor="expand">
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={styles}
      data-cursor="expand"
      {...props}
    >
      {children}
    </button>
  );
}
