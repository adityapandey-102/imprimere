"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import Button from "@/components/ui/Button";
import GlassCard from "@/components/ui/GlassCard";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { cn } from "@/lib/utils";
import { costProfiles } from "@/data/catalogue";

function useAnimatedValue(target: number) {
  const [displayValue, setDisplayValue] = useState(target);

  useEffect(() => {
    let frameId = 0;
    const start = performance.now();
    const initial = displayValue;
    const duration = 600;

    const tick = (time: number) => {
      const progress = Math.min((time - start) / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      setDisplayValue(Math.round(initial + (target - initial) * eased));

      if (progress < 1) {
        frameId = window.requestAnimationFrame(tick);
      }
    };

    frameId = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frameId);
  }, [displayValue, target]);

  return displayValue;
}

export default function CostSavingCalculatorSection() {
  const [activeIndex, setActiveIndex] = useState(2);
  const prefersReducedMotion = useReducedMotion();
  const activeOption = costProfiles[activeIndex];
  const animatedSavings = useAnimatedValue(activeOption.savings);
  const bestIndex = costProfiles.length - 1;

  return (
    <section className="section-blend section-space">
      <div className="site-container">
        <div className="soft-panel grid gap-10 p-6 sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
          <ScrollReveal className="space-y-6">
            <span className="eyebrow bg-white/80">Cost Advantage</span>
            <h2 className="font-serif text-4xl leading-tight text-balance sm:text-5xl">
              Sustainability becomes more persuasive when it also reduces friction and cost.
            </h2>
            <p className="text-base leading-8 text-text/72">
              The catalogue positions The Good Cup and the broader ecosystem around
              fewer accessories, smaller storage needs, and cleaner operational flow.
            </p>
            <GlassCard className="p-5">
              <p className="mb-2 text-xs uppercase tracking-[0.18em] text-text/45">
                Estimated Efficiency Gain
              </p>
              <motion.p
                key={activeOption.name}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-serif text-5xl sm:text-6xl"
              >
                {animatedSavings}%
              </motion.p>
              <p className="mt-3 text-sm leading-7 text-text/70">
                Modeled around {activeOption.drinks.toLowerCase()} and the
                catalogue&apos;s claims on storage, lid removal, and straw reduction.
              </p>
            </GlassCard>
          </ScrollReveal>

          <ScrollReveal delay={0.08} className="space-y-8">
            <GlassCard className="p-6">
              <div className="mb-6 flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-text/45">
                    Scenario
                  </p>
                  <p className="font-serif text-3xl">{activeOption.name}</p>
                </div>
                <span className="rounded-full border border-border bg-alt-2 px-4 py-2 text-xs uppercase tracking-[0.18em] text-text/60">
                  Discrete Scale
                </span>
              </div>
              <input
                type="range"
                min={0}
                max={costProfiles.length - 1}
                step={1}
                value={activeIndex}
                onChange={(event) => setActiveIndex(Number(event.target.value))}
                className="w-full accent-accent"
              />
              <div className="mt-4 grid grid-cols-4 gap-2 text-center text-xs uppercase tracking-[0.16em] text-text/50">
                {costProfiles.map((option) => (
                  <span key={option.name}>{option.name}</span>
                ))}
              </div>
            </GlassCard>

            <div className="grid gap-4 sm:grid-cols-2">
              {costProfiles.map((option, index) => {
                const isBest = index === bestIndex;
                const isActive = index === activeIndex;

                return (
                  <button
                    key={option.name}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={cn(
                      "rounded-[1.25rem] border p-5 text-left backdrop-blur-[20px] transition duration-300 hover:scale-[1.02] hover:shadow-[0_16px_50px_rgba(0,0,0,0.28)]",
                      isActive
                        ? "border-white/20 bg-white/16 shadow-[0_8px_40px_rgba(0,0,0,0.25)]"
                        : "border-white/15 bg-white/10",
                    )}
                    data-cursor="expand"
                  >
                    <div className="mb-4 flex items-start justify-between gap-3">
                      <div>
                        <p className="text-xs uppercase tracking-[0.18em] text-text/45">
                          {option.drinks}
                        </p>
                        <p className="mt-2 font-serif text-3xl">{option.savings}%</p>
                      </div>
                      {isBest ? (
                        <span className="rounded-full bg-accent px-3 py-1 text-[0.65rem] uppercase tracking-[0.18em] text-white">
                          Best Value
                        </span>
                      ) : null}
                    </div>
                    <p className="text-sm leading-7 text-text/70">
                      {option.storage}. {option.operations}.
                    </p>
                  </button>
                );
              })}
            </div>

            <Button variant="glass" href="#contact">Request a custom cost review</Button>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
