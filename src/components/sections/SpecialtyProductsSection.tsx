"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useAnimationFrame } from "framer-motion";
import CatalogueImage from "@/components/ui/CatalogueImage";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { specialtyProducts } from "@/data/catalogue";

const specialtyImages = [
  "/catalogue/good-cup-collage.png",
  "/catalogue/ova-tshirt-bags.png",
  "/catalogue/manual-sealer.png",
  "/catalogue/kraft-napkin.png",
  "/catalogue/sustainability-panel.png",
];

const CARD_WIDTH = 320;
const CARD_GAP = 24;
const CARD_STRIDE = CARD_WIDTH + CARD_GAP;
const SPEED = 0.55;

export default function SpecialtyProductsSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const xRef = useRef(0);
  const pausedRef = useRef(false);

  const [paused, setPaused] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  // Triple clone for infinite illusion
  const items = [...specialtyProducts, ...specialtyProducts, ...specialtyProducts];
  const images = [...specialtyImages, ...specialtyImages, ...specialtyImages];
  const totalWidth = specialtyProducts.length * CARD_STRIDE;

  useEffect(() => {
    pausedRef.current = paused;
  }, [paused]);

  useAnimationFrame(() => {
    if (pausedRef.current) return;
    const track = trackRef.current;
    if (!track) return;

    xRef.current -= SPEED;

    if (xRef.current <= -totalWidth) {
      xRef.current += totalWidth;
    }

    track.style.transform = `translateX(${xRef.current}px)`;

    // optimize active index update
    const idx =
      Math.round(Math.abs(xRef.current) / CARD_STRIDE) %
      specialtyProducts.length;

    if (idx !== activeIndex) {
      setActiveIndex(idx);
    }
  });

  return (
    <section className="section-blend section-space overflow-hidden bg-[#1F1F1F] relative">

      {/* Grain */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E\")",
          opacity: 0.04,
        }}
      />

      {/* Glow */}
      <div
        className="absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(167,167,167,0.06), transparent 70%)",
        }}
      />

      <div className="site-container relative z-10">

        {/* HEADER */}
        <ScrollReveal className="mb-14 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">

          <div className="max-w-xl space-y-4">

            <div className="inline-flex items-center gap-3 rounded-full px-5 py-2 bg-white/10 backdrop-blur-xl border border-white/10">
              <span className="h-1.5 w-1.5 rounded-full bg-[#A7A7A7]" />
              <span className="text-[0.65rem] uppercase tracking-[0.22em] text-[#A7A7A7]">
                Specialty Products
              </span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl text-[#F2F2F2] leading-[1.08]">
              Handpicked categories with lower MOQs, faster access, and stronger{" "}
              <span className="text-[#6D6D6D]">presentation value.</span>
            </h2>
          </div>

          {/* Dots */}
          <div className="flex items-center gap-2">
            {specialtyProducts.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  xRef.current = -(i * CARD_STRIDE);
                  setActiveIndex(i);
                }}
                className="transition-all duration-300"
                style={{
                  width: activeIndex === i ? "28px" : "8px",
                  height: "8px",
                  borderRadius: "999px",
                  background:
                    activeIndex === i
                      ? "rgba(242,242,242,0.9)"
                      : "rgba(255,255,255,0.18)",
                }}
              />
            ))}
          </div>
        </ScrollReveal>
      </div>

      {/* CAROUSEL */}
      <div
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        className="relative"
      >
        {/* fade edges */}
        <div className="absolute left-0 top-0 h-full w-24 z-10 pointer-events-none bg-gradient-to-r from-[#1F1F1F] to-transparent" />
        <div className="absolute right-0 top-0 h-full w-24 z-10 pointer-events-none bg-gradient-to-l from-[#1F1F1F] to-transparent" />

        <div className="overflow-hidden pb-6">
          <div
            ref={trackRef}
            className="flex will-change-transform"
            style={{ gap: `${CARD_GAP}px`, width: "max-content" }}
          >
            {items.map((product, index) => (
              <CarouselCard
                key={`${product.title}-${index}`}
                product={product}
                imageSrc={images[index % specialtyImages.length]}
              />
            ))}
          </div>
        </div>
      </div>

      {/* CTA FIXED */}
      <ScrollReveal className="site-container mt-10 flex justify-center">
        <a
          href="#catalogue"
          className="group inline-flex items-center gap-3 rounded-full px-8 py-3 text-xs uppercase text-white bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 transition"
        >
          View Full Catalogue
          <span className="group-hover:translate-x-1 transition">{">"}</span>
        </a>
      </ScrollReveal>
    </section>
  );
}

/* CARD */
function CarouselCard({
  product,
  imageSrc,
}: {
  product: { title: string; description: string };
  imageSrc: string;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="shrink-0 rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl"
      style={{ width: CARD_WIDTH }}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.35 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      <motion.div
        animate={{ scale: hovered ? 1.05 : 1 }}
        transition={{ duration: 0.4 }}
      >
        <CatalogueImage
          src={imageSrc}
          alt={product.title}
          className="min-h-[220px]"
          imageClassName="object-contain p-5"
        />
      </motion.div>

      <div className="p-5">
        <h3 className="text-xl text-white font-serif">
          {product.title}
        </h3>
        <p className="mt-2 text-sm text-[#6D6D6D]">
          {product.description}
        </p>
      </div>
    </motion.div>
  );
}