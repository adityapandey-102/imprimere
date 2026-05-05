"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import Button from "@/components/ui/Button";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { cn } from "@/lib/utils";

const caseStudies = Array.from({ length: 15 }, (_, index) => ({
  id: index + 1,
  title: `Case Study ${String(index + 1).padStart(2, "0")}`,
  category: index % 2 === 0 ? "Retail" : "Packaging",
}));

export default function CaseStudiesCarouselSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((value) => (value + 1) % caseStudies.length);
    }, 2600);

    return () => window.clearInterval(intervalId);
  }, [prefersReducedMotion]);

  const handleDragEnd = (_event: MouseEvent | TouchEvent | PointerEvent, info: { offset: { x: number } }) => {
    if (info.offset.x < -40) {
      setActiveIndex((value) => (value + 1) % caseStudies.length);
    } else if (info.offset.x > 40) {
      setActiveIndex((value) => (value - 1 + caseStudies.length) % caseStudies.length);
    }
  };

  return (
    <section className="section-blend section-space overflow-hidden">
      <div className="site-container">
        <ScrollReveal className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl space-y-5">
            <span className="eyebrow bg-white/78">Case Studies</span>
            <h2 className="font-serif text-4xl leading-tight text-balance sm:text-5xl">
              A living archive of premium, lower-impact launches.
            </h2>
          </div>
          <Button variant="outline" href="#">
            Explore All 15
          </Button>
        </ScrollReveal>

        <motion.div
          className="cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.08}
          onDragEnd={handleDragEnd}
        >
          <div className="flex justify-center gap-4 sm:gap-6">
            {caseStudies.map((study, index) => {
              const distance = Math.abs(index - activeIndex);
              const wrappedDistance = Math.min(
                distance,
                caseStudies.length - distance,
              );
              const isActive = index === activeIndex;

              return (
                <motion.article
                  key={study.id}
                  animate={{
                    opacity: wrappedDistance > 2 ? 0.35 : isActive ? 1 : 0.68,
                    scale: isActive ? 1 : wrappedDistance === 1 ? 0.92 : 0.84,
                    y: isActive ? 0 : wrappedDistance === 1 ? 20 : 36,
                  }}
                  transition={{ duration: prefersReducedMotion ? 0 : 0.45, ease: "easeOut" }}
                  className={cn(
                    "w-[82vw] max-w-[22rem] shrink-0 rounded-[2rem] border border-border bg-white/72 p-4 shadow-warm sm:w-[22rem]",
                    !isActive && "pointer-events-none",
                  )}
                >
                  <ImagePlaceholder className="mb-5 min-h-[320px]" label={study.title} />
                  <p className="text-xs uppercase tracking-[0.18em] text-text/45">
                    {study.category}
                  </p>
                  <h3 className="mt-3 font-serif text-3xl">{study.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-text/70">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </motion.article>
              );
            })}
          </div>
        </motion.div>

        <div className="mt-8 flex justify-center gap-2">
          {caseStudies.map((study, index) => (
            <button
              key={study.id}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={cn(
                "h-2.5 rounded-full transition-all duration-300",
                activeIndex === index ? "w-10 bg-accent" : "w-2.5 bg-text/14",
              )}
              aria-label={`Go to ${study.title}`}
              data-cursor="expand"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
