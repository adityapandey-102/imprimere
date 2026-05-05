"use client";

import { motion, useReducedMotion } from "framer-motion";
import Button from "@/components/ui/Button";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import Modal from "@/components/ui/Modal";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { useState } from "react";

export default function BrandStorySection() {
  const [open, setOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="section-blend section-space">
      <div className="site-container">
        <div className="soft-panel grid gap-10 overflow-hidden border-white/55 p-6 sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
          <ScrollReveal className="flex flex-col justify-center gap-6">
            <span className="eyebrow bg-white/80">Brand Story</span>
            <h2 className="font-serif text-4xl leading-tight text-balance sm:text-5xl">
              Quiet craft, circular intent, and a softer way to scale.
            </h2>
            <div className="space-y-4 text-base leading-8 text-text/72">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button onClick={() => setOpen(true)}>Play Story Film</Button>
              <Button variant="outline" href="#">
                Read the Manifesto
              </Button>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <motion.div
              className="relative"
              animate={
                prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: [0, -10, 0] }
              }
              transition={{
                duration: prefersReducedMotion ? 0 : 7,
                repeat: prefersReducedMotion ? 0 : Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="group block w-full text-left"
                data-cursor="expand"
              >
                <ImagePlaceholder
                  className="min-h-[320px] sm:min-h-[420px]"
                  label="Brand story video placeholder"
                />
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/60 bg-white/80 shadow-warm transition duration-300 group-hover:scale-105">
                    <div className="ml-1 h-0 w-0 border-b-[10px] border-l-[16px] border-t-[10px] border-b-transparent border-l-accent border-t-transparent" />
                  </div>
                </div>
              </button>
            </motion.div>
          </ScrollReveal>
        </div>
      </div>

      <Modal open={open} onClose={() => setOpen(false)} title="Story Film Placeholder">
        <div className="space-y-5">
          <ImagePlaceholder className="min-h-[320px]" label="Story video placeholder" />
          <p className="max-w-2xl text-base leading-8 text-text/72">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </Modal>
    </section>
  );
}
