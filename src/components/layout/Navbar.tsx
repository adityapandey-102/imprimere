"use client";

import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";
import BrandLogo from "@/components/ui/BrandLogo";
import GlassCard from "@/components/ui/GlassCard";

const navigationItems = [
  { label: "Philosophy", href: "#top" },
  { label: "Good Cup", href: "#good-cup" },
  { label: "Ecosystem", href: "#ecosystem" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="site-container pt-4">
        <GlassCard
          glass
          className={cn(
            "rounded-full px-5 sm:px-7",
            scrolled ? "bg-white/14 shadow-[0_12px_36px_rgba(31,31,31,0.16)]" : "bg-white/10"
          )}
        >
          <div className="flex h-20 items-center justify-between gap-6">
            <Link
              href="/"
              className="relative block h-14 w-[15rem] shrink-0"
              data-cursor="expand"
              onClick={() => setMobileOpen(false)}
            >
              <BrandLogo priority imageClassName="mix-blend-multiply" />
            </Link>

            <nav className="hidden items-center gap-8 lg:flex">
              {navigationItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-[0.72rem] uppercase tracking-[0.26em] text-text/78 transition hover:opacity-55"
                  data-cursor="expand"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:block">
              <Button href="#contact">Request Proposal</Button>
            </div>

            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/80 bg-white/80 lg:hidden"
              onClick={() => setMobileOpen((value) => !value)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              data-cursor="expand"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </GlassCard>
      </div>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            className="fixed inset-0 z-40 bg-text/12 backdrop-blur-sm lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
            onClick={() => setMobileOpen(false)}
          >
            <motion.aside
              className="ml-auto flex h-full w-full max-w-sm flex-col border-l border-white/12 bg-black/40 px-8 pb-8 pt-28 shadow-warm backdrop-blur-[24px]"
              initial={prefersReducedMotion ? false : { opacity: 0, x: 32 }}
              animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
              exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, x: 16 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.25, ease: "easeOut" }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="space-y-5">
                {navigationItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="block border-b border-white/12 pb-4 text-sm uppercase tracking-[0.22em] text-white/82"
                    onClick={() => setMobileOpen(false)}
                    data-cursor="expand"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <div className="mt-auto pt-8">
                <Button href="#contact">Request Proposal</Button>
              </div>
            </motion.aside>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
