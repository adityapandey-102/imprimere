"use client";

import { motion, useReducedMotion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";

const sdgItems = [
  "Climate",
  "Materials",
  "Water",
  "Waste",
  "Energy",
  "Equity",
  "Cities",
  "Production",
];

export default function SdgIconsSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="section-blend section-space">
      <div className="site-container">
        <ScrollReveal className="mb-10 max-w-2xl space-y-5">
          <span className="eyebrow bg-white/78">SDG Alignment</span>
          <h2 className="font-serif text-4xl leading-tight text-balance sm:text-5xl">
            Goals translated into a tactile, visual system.
          </h2>
        </ScrollReveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {sdgItems.map((item, index) => (
            <motion.div
              key={item}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                type: prefersReducedMotion ? "tween" : "spring",
                stiffness: 110,
                damping: 16,
                delay: prefersReducedMotion ? 0 : index * 0.05,
              }}
              className="rounded-[1.75rem] border border-border bg-white/72 p-5 shadow-warm"
            >
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-[1.25rem] bg-alt-2">
                <span className="font-serif text-2xl text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="font-serif text-2xl">{item}</h3>
              <p className="mt-3 text-sm leading-7 text-text/70">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
