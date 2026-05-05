"use client";

import { Check } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import Button from "@/components/ui/Button";
import BrandLogo from "@/components/ui/BrandLogo";
import CatalogueImage from "@/components/ui/CatalogueImage";
import GlassCard from "@/components/ui/GlassCard";
import Modal from "@/components/ui/Modal";
import ScrollReveal from "@/components/ui/ScrollReveal";

const heroWords = ["FORTUNE", "FAVORS", "THE", "BOLD", "IN", "PACKAGING."];

const badgeItems = [
  "THE GOOD CUP",
  "PLASTIC-FREE SYSTEMS",
  "PREMIUM BRANDING",
  "GLOBAL SOURCING",
  "COST-LED SUSTAINABILITY",
];

const valuePoints = [
  {
    label:
      "Eco-friendly formats designed around plastic-free and compostable direction",
    tag: "01",
  },
  {
    label:
      "Lower operational cost through integrated lids, tighter storage, and fewer straws",
    tag: "02",
  },
  {
    label:
      "Premium brand execution with print, embossing, and foiling capability",
    tag: "03",
  },
];

export default function HeroSection() {
  const [previewOpen, setPreviewOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="top" className="relative overflow-hidden pt-28 sm:pt-32">
      
      {/* ===== EXACT BACKGROUND ===== */}
      <div className="absolute inset-x-0 top-0 -z-10 h-[760px] bg-radial-wash" />

      <div className="site-container section-space">
        <div className="grid items-center gap-14 lg:grid-cols-[0.98fr_1.02fr]">

          {/* ===== LEFT ===== */}
          <ScrollReveal className="space-y-10">
            <div className="space-y-8">

              {/* Overline */}
              <div className="inline-flex items-center gap-3 rounded-full px-5 py-2 bg-white/10 backdrop-blur-xl border border-border/60">
                <span className="h-1.5 w-1.5 rounded-full bg-text/60" />
                <span className="text-[0.65rem] uppercase tracking-[0.22em] text-text/60">
                  Brand Philosophy
                </span>
              </div>

              {/* Heading */}
              <div className="relative">
                <div className="pointer-events-none absolute -left-4 -top-8 hidden h-20 w-40 opacity-[0.06] lg:block">
                  <BrandLogo />
                </div>

                <h1 className="max-w-4xl font-serif text-5xl leading-[0.92] text-balance sm:text-6xl lg:text-7xl text-text">
                  {heroWords.map((word, i) => (
                    <motion.span
                      key={i}
                      className="mr-[0.24em] inline-block will-change-transform"
                      initial={
                        prefersReducedMotion
                          ? false
                          : { opacity: 0, y: 60, filter: "blur(6px)" }
                      }
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      transition={{
                        type: "spring",
                        stiffness: 80,
                        damping: 18,
                        delay: 0.1 + i * 0.06,
                      }}
                    >
                      {word}
                    </motion.span>
                  ))}
                </h1>
              </div>

              {/* Subtext */}
              <p className="max-w-2xl text-base leading-8 text-text/68 sm:text-lg">
                Imprimere Pack delivers premium packaging solutions that combine
                elegance, quality, and sustainability for hospitality, retail,
                and modern food and beverage brands.
              </p>

              {/* CTA */}
              <div className="flex flex-col gap-3 sm:flex-row">
                <motion.div
                  whileHover={{ y: -3, scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Button href="#good-cup">Explore The Good Cup</Button>
                </motion.div>

                <motion.div
                  whileHover={{ y: -2, scale: 1.015 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 280 }}
                >
                  <Button variant="glass" onClick={() => setPreviewOpen(true)}>
                    View Brand Position
                  </Button>
                </motion.div>
              </div>

              {/* Value Cards */}
              <div className="grid gap-4 sm:grid-cols-3">
                {valuePoints.map((v) => (
                  <motion.div
                    key={v.tag}
                    whileHover={{
                      y: -6,
                      scale: 1.02,
                      boxShadow: "0 20px 50px rgba(0,0,0,0.25)",
                    }}
                    transition={{ type: "spring", stiffness: 220 }}
                    className="rounded-xl border border-border/60 bg-white/5 p-5 backdrop-blur-md"
                  >
                    <div className="mb-3 flex justify-between">
                      <Check className="h-4 w-4 text-text/70" />
                      <span className="text-xs text-text/40">{v.tag}</span>
                    </div>
                    <p className="text-sm leading-6 text-text/70">
                      {v.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* ===== RIGHT (EXACT ORIGINAL + ENHANCED ANIMATION ONLY) ===== */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <ScrollReveal className="relative" delay={0.12}>
              <div className="relative mx-auto max-w-2xl">
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-x-10 top-12 z-0 h-[28rem] rounded-full opacity-70 blur-3xl"
                  style={{
                    background:
                      "radial-gradient(circle at center, rgba(255,255,255,0.9) 0%, rgba(244,239,231,0.75) 38%, rgba(244,239,231,0) 74%)",
                  }}
                />

                <div
                  aria-hidden
                  className="pointer-events-none absolute left-1/2 top-16 z-0 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full border border-white/20 opacity-70"
                />

                <motion.div
                  className="absolute left-0 top-10 z-30 hidden rounded-2xl border border-white/70 bg-white/78 p-5 shadow-warm backdrop-blur-xl md:block"
                  animate={
                    prefersReducedMotion
                      ? { opacity: 1 }
                      : { opacity: 1, y: [0, -10, 0], scale: [1, 1.02, 1] }
                  }
                  transition={{
                    duration: 7,
                    repeat: prefersReducedMotion ? 0 : Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <p className="mb-2 text-[0.68rem] uppercase tracking-[0.24em] text-text/45">
                    Signature Product
                  </p>
                  <p className="max-w-[12rem] text-sm leading-6 text-text/68">
                    The multi-award-winning cup system with integrated top fold.
                  </p>
                </motion.div>

                <div className="relative z-10 min-h-[450px] sm:min-h-[640px]">
                  <motion.div
                    className="absolute left-[-12%] top-[-4%] h-[31rem] w-[24rem] sm:h-[44rem] sm:w-[33rem]"
                    animate={
                      prefersReducedMotion
                        ? { opacity: 1 }
                        : { y: [0, -8, 0], rotate: [-17, -14, -17] }
                    }
                    transition={{
                      duration: 7.2,
                      repeat: prefersReducedMotion ? 0 : Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <CatalogueImage
                      src="/brand/cup.png"
                      alt="Imprimere Pack branded cup tilted left"
                      transparent
                      className="h-full w-full"
                      imageClassName="mix-blend-multiply [filter:contrast(1.06)_saturate(0.9)_drop-shadow(0_32px_36px_rgba(0,0,0,0.14))]"
                    />
                  </motion.div>

                  <motion.div
                    className="absolute right-[-14%] top-[-16%] z-10 h-[34rem] w-[25rem] sm:h-[47rem] sm:w-[35rem]"
                    animate={
                      prefersReducedMotion
                        ? { opacity: 1 }
                        : { y: [0, -12, 0], rotate: [13, 10, 13] }
                    }
                    transition={{
                      duration: 6.4,
                      repeat: prefersReducedMotion ? 0 : Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <CatalogueImage
                      src="/brand/cup.png"
                      alt="Imprimere Pack branded cup tilted right"
                      transparent
                      className="h-full w-full"
                      imageClassName="mix-blend-multiply [filter:contrast(1.1)_saturate(0.92)_brightness(1.02)_drop-shadow(0_38px_44px_rgba(0,0,0,0.18))]"
                    />
                  </motion.div>

                  <motion.div
                    className="absolute bottom-2 left-[12%] z-20 hidden rounded-full border border-white/70 bg-white/76 px-5 py-3 shadow-[0_18px_35px_rgba(30,30,30,0.12)] backdrop-blur-xl sm:block"
                    animate={
                      prefersReducedMotion
                        ? { opacity: 1 }
                        : { y: [0, 7, 0] }
                    }
                    transition={{
                      duration: 5.8,
                      repeat: prefersReducedMotion ? 0 : Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <p className="text-[0.62rem] uppercase tracking-[0.22em] text-text/48">
                      Plastic-free direction
                    </p>
                  </motion.div>
                </div>

                <motion.div
                  className="absolute -bottom-7 right-0 z-30 max-w-[15rem]"
                  animate={
                    prefersReducedMotion
                      ? { opacity: 1 }
                      : { opacity: 1, y: [0, 8, 0] }
                  }
                  transition={{
                    duration: 5.6,
                    repeat: prefersReducedMotion ? 0 : Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <GlassCard dark className="p-5">
                    <p className="mb-2 text-[0.68rem] uppercase tracking-[0.24em] text-white/55">
                      Brand Promise
                    </p>
                    <p className="font-serif text-2xl text-white">
                      Elegance in every detail.
                    </p>
                  </GlassCard>
                </motion.div>
              </div>
            </ScrollReveal>
          </motion.div>
        </div>

        {/* ===== MARQUEE ===== */}
        <div className="mt-20 overflow-hidden border-y border-border/70 bg-white/42 py-4">
          <div className="marquee-track flex min-w-max items-center gap-4 px-4">
            {[...badgeItems, ...badgeItems].map((item, index) => (
              <div
                key={`${item}-${index}`}
                className="flex items-center gap-4 px-3 text-[0.72rem] uppercase tracking-[0.26em] text-text/58"
              >
                <span>{item}</span>
                <span className="h-1 w-1 rounded-full bg-text/60" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== MODAL ===== */}
      <Modal
        open={previewOpen}
        onClose={() => setPreviewOpen(false)}
        title="Brand Position"
      >
        <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
          <CatalogueImage
            src="/catalogue/sustainability-panel.png"
            alt="panel"
            className="min-h-[280px]"
          />
          <div className="space-y-4">
            <p className="text-[0.72rem] uppercase tracking-[0.26em] text-text/55">
              Imprimere Pack
            </p>
            <p className="text-base leading-8 text-text/72">
              Luxury, sustainability, reliability, and market-ready execution sit
              at the center of the brand identity.
            </p>
            <Button onClick={() => setPreviewOpen(false)}>Close</Button>
          </div>
        </div>
      </Modal>
    </section>
  );
}
