"use client";

import { motion, useReducedMotion } from "framer-motion";

const awards = [
  "Circular Packaging Award",
  "Retail Experience Honoree",
  "Sustainable Craft Selection",
];

export default function AwardSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="section-blend section-space">
      <div className="site-container">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.7, ease: "easeOut" }}
            className="soft-panel p-6 sm:p-8"
          >
            <span className="eyebrow bg-white/80">Awards</span>
            <h2 className="mt-6 font-serif text-4xl leading-tight text-balance sm:text-5xl">
              Celebrating responsible design with a premium finish.
            </h2>
          </motion.div>

          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.7, ease: "easeOut", delay: 0.08 }}
            className="space-y-4"
          >
            {awards.map((award, index) => (
              <div
                key={award}
                className="rounded-[2rem] border border-border bg-white/72 p-6 shadow-warm"
              >
                <p className="mb-3 text-xs uppercase tracking-[0.18em] text-text/45">
                  20{24 + index}
                </p>
                <h3 className="font-serif text-3xl">{award}</h3>
                <p className="mt-3 text-sm leading-7 text-text/70">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
                  eiusmod tempor incididunt.
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
