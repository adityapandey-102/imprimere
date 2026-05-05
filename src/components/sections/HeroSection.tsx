"use client";

import { Check } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import Button from "@/components/ui/Button";
import BrandLogo from "@/components/ui/BrandLogo";
import CatalogueImage from "@/components/ui/CatalogueImage";
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
  "Eco-friendly formats designed around plastic-free and compostable direction",
  "Lower operational cost through integrated lids, tighter storage, and fewer straws",
  "Premium brand execution with print, embossing, and foiling capability",
];

export default function HeroSection() {
  const [previewOpen, setPreviewOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="top" className="relative overflow-hidden pt-28 sm:pt-32">
      <div className="absolute inset-x-0 top-0 -z-10 h-[760px] bg-radial-wash" />
      <div className="site-container section-space">
        <div className="grid items-center gap-14 lg:grid-cols-[0.98fr_1.02fr]">
          <ScrollReveal className="space-y-10">
            <div className="space-y-6">
              <span className="eyebrow">Brand Philosophy</span>
              <div className="relative">
                <div className="pointer-events-none absolute -left-4 -top-8 hidden h-20 w-40 opacity-[0.06] lg:block">
                  <BrandLogo />
                </div>
                <h1 className="max-w-4xl font-serif text-5xl leading-[0.92] text-balance sm:text-6xl lg:text-7xl">
                  {heroWords.map((word, index) => (
                    <motion.span
                      key={`${word}-${index}`}
                      className="mr-[0.24em] inline-block"
                      initial={prefersReducedMotion ? false : { opacity: 0, y: 32 }}
                      animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                      transition={{
                        duration: prefersReducedMotion ? 0 : 0.48,
                        ease: "easeOut",
                        delay: prefersReducedMotion ? 0 : 0.08 + index * 0.05,
                      }}
                    >
                      {word}
                    </motion.span>
                  ))}
                </h1>
              </div>
              <p className="max-w-2xl text-base leading-8 text-text/68 sm:text-lg">
                Imprimere Pack delivers premium packaging solutions that combine
                elegance, quality, and sustainability for hospitality, retail,
                and modern food and beverage brands.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button href="#good-cup">Explore The Good Cup</Button>
              <Button variant="outline" onClick={() => setPreviewOpen(true)}>
                View Brand Position
              </Button>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {valuePoints.map((label, index) => (
                <div
                  key={label}
                  className="border border-border/80 bg-white/50 p-5"
                >
                  <Check className="mb-4 h-4 w-4 text-text" />
                  <p className="mb-3 text-[0.68rem] uppercase tracking-[0.24em] text-text/42">
                    0{index + 1}
                  </p>
                  <p className="text-sm leading-6 text-text/72">{label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal className="relative" delay={0.12}>
            <div className="relative mx-auto max-w-2xl">
              <motion.div
                className="absolute -left-4 top-8 hidden border border-border/80 bg-white/72 p-5 shadow-warm md:block"
                animate={
                  prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: [0, -8, 0] }
                }
                transition={{
                  duration: prefersReducedMotion ? 0 : 6,
                  repeat: prefersReducedMotion ? 0 : Number.POSITIVE_INFINITY,
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

              <CatalogueImage
                src="/brand/hero-cup.png"
                alt="Imprimere Pack branded cup"
                className="min-h-[420px] sm:min-h-[540px]"
              />

              <motion.div
                className="absolute -bottom-7 right-0 max-w-[15rem] border border-border/80 bg-bg/92 p-5 shadow-warm"
                animate={
                  prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: [0, 8, 0] }
                }
                transition={{
                  duration: prefersReducedMotion ? 0 : 5.6,
                  repeat: prefersReducedMotion ? 0 : Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <p className="mb-2 text-[0.68rem] uppercase tracking-[0.24em] text-text/45">
                  Brand Promise
                </p>
                <p className="font-serif text-2xl">Elegance in every detail.</p>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>

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

      <Modal
        open={previewOpen}
        onClose={() => setPreviewOpen(false)}
        title="Brand Position"
      >
        <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
          <CatalogueImage
            src="/catalogue/sustainability-panel.png"
            alt="Biodegradable compostable recyclable panel from the catalogue"
            className="min-h-[280px]"
          />
          <div className="space-y-4">
            <p className="text-[0.72rem] uppercase tracking-[0.26em] text-text/55">
              Imprimere Pack
            </p>
            <p className="text-base leading-8 text-text/72">
              Luxury, sustainability, reliability, and market-ready execution sit
              at the center of the brand identity. The catalogue reinforces this
              through refined packaging systems and hard-to-source product access.
            </p>
            <Button onClick={() => setPreviewOpen(false)}>Close</Button>
          </div>
        </div>
      </Modal>
    </section>
  );
}
