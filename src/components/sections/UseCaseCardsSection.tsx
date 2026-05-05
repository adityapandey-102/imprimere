"use client";

import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const useCases = [
  {
    title: "Boutique Retail",
    tone: "Warm Showcase",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
  },
  {
    title: "Hospitality Spaces",
    tone: "Calm Experience",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam quis nostrud.",
  },
  {
    title: "Signature Packaging",
    tone: "Circular Details",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit.",
  },
];

export default function UseCaseCardsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<Array<HTMLElement | null>>([]);
  const prefersReducedMotion = useReducedMotion();

  useGSAP(
    () => {
      const cards = cardRefs.current.filter(Boolean) as HTMLElement[];

      if (cards.length === 0) {
        return;
      }

      if (prefersReducedMotion) {
        gsap.set(cards, { opacity: 1, y: 0 });
        return;
      }

      gsap.fromTo(
        cards,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.14,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 72%",
            once: true,
          },
        },
      );
    },
    { dependencies: [prefersReducedMotion], scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className="section-space">
      <div className="site-container">
        <ScrollReveal className="mb-10 max-w-2xl space-y-5">
          <span className="eyebrow bg-white/78">Use Cases</span>
          <h2 className="font-serif text-4xl leading-tight text-balance sm:text-5xl">
            Foundational layouts for premium eco narratives.
          </h2>
          <p className="text-base leading-8 text-text/72">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </ScrollReveal>

        <div className="grid gap-6 lg:grid-cols-3">
          {useCases.map((card, index) => (
            <motion.article
              key={card.title}
              ref={(element) => {
                cardRefs.current[index] = element;
              }}
              className="group rounded-[2rem] border border-border bg-white/75 p-5 shadow-warm"
              whileHover={prefersReducedMotion ? undefined : { scale: 1.015, y: -8 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <ImagePlaceholder className="mb-6 min-h-[220px]" label={card.title} />
              <div className="space-y-4">
                <p className="text-xs uppercase tracking-[0.2em] text-text/48">
                  {card.tone}
                </p>
                <h3 className="font-serif text-3xl">{card.title}</h3>
                <p className="text-sm leading-7 text-text/70">
                  {card.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
