"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { useReducedMotion } from "framer-motion";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import ScrollReveal from "@/components/ui/ScrollReveal";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const columnHeights = ["min-h-[420px]", "min-h-[520px]", "min-h-[460px]"];

export default function SustainabilityColumnsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useGSAP(
    () => {
      const columns = gsap.utils.toArray<HTMLElement>("[data-sustain-column]");

      if (prefersReducedMotion) {
        gsap.set(columns, { opacity: 1, y: 0 });
        return;
      }

      gsap.fromTo(
        columns,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.16,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 78%",
            once: true,
          },
        },
      );
    },
    { dependencies: [prefersReducedMotion], scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className="section-blend section-space">
      <div className="site-container">
        <ScrollReveal className="mb-10 max-w-2xl space-y-5">
          <span className="eyebrow bg-white/78">Sustainability</span>
          <h2 className="font-serif text-4xl leading-tight text-balance sm:text-5xl">
            Material calm backed by visible low-impact choices.
          </h2>
          <p className="text-base leading-8 text-text/72">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-3">
          {columnHeights.map((height, index) => (
            <div key={index} data-sustain-column className="space-y-5">
              <ImagePlaceholder
                className={height}
                label={`Sustainability column ${index + 1}`}
              />
              <div className="rounded-[1.75rem] border border-border bg-white/70 p-5 shadow-warm">
                <p className="mb-2 text-xs uppercase tracking-[0.18em] text-text/45">
                  Pillar 0{index + 1}
                </p>
                <p className="text-sm leading-7 text-text/72">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
