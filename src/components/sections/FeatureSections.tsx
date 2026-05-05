"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import Button from "@/components/ui/Button";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { cn } from "@/lib/utils";

type FeatureShellProps = {
  eyebrow: string;
  title: string;
  description: string;
  reverse?: boolean;
  children: React.ReactNode;
  media: React.ReactNode;
};

function FeatureShell({
  eyebrow,
  title,
  description,
  reverse,
  children,
  media,
}: FeatureShellProps) {
  return (
    <section className="section-blend section-space">
      <div className="site-container">
        <div
          className={cn(
            "grid items-center gap-10 lg:grid-cols-2",
            reverse && "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1",
          )}
        >
          <ScrollReveal className="space-y-6">
            <span className="eyebrow">{eyebrow}</span>
            <h2 className="font-serif text-4xl leading-tight text-balance sm:text-5xl">
              {title}
            </h2>
            <p className="max-w-xl text-base leading-8 text-text/72">{description}</p>
            {children}
          </ScrollReveal>

          <ScrollReveal delay={0.08}>{media}</ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function TemperatureFeature() {
  const [mode, setMode] = useState<"hot" | "cold">("hot");

  return (
    <FeatureShell
      eyebrow="Adaptive Finish"
      title="Switch sensory mood without losing the calm visual language."
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      media={
        <motion.div
          className={cn(
            "rounded-[2rem] p-4 shadow-warm transition-colors duration-500",
            mode === "hot" ? "bg-alt-1" : "bg-alt-2",
          )}
          animate={{ opacity: 1, y: 0 }}
        >
          <ImagePlaceholder
            className="min-h-[420px]"
            label={`Temperature mode ${mode}`}
          />
        </motion.div>
      }
    >
      <div className="flex flex-wrap items-center gap-3">
        {(["hot", "cold"] as const).map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setMode(item)}
            className={cn(
              "rounded-full px-5 py-3 text-sm font-medium transition duration-300",
              mode === item
                ? "bg-accent text-white"
                : "border border-border bg-white/70 text-text/72",
            )}
            data-cursor="expand"
          >
            {item === "hot" ? "Warm Tone" : "Cool Tone"}
          </button>
        ))}
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-[1.75rem] border border-border bg-white/65 p-5">
          <p className="mb-2 text-xs uppercase tracking-[0.18em] text-text/45">
            Current Mode
          </p>
          <p className="font-serif text-3xl">{mode === "hot" ? "Warm" : "Cool"}</p>
        </div>
        <div className="rounded-[1.75rem] border border-border bg-white/65 p-5">
          <p className="mb-2 text-xs uppercase tracking-[0.18em] text-text/45">
            Surface Feel
          </p>
          <p className="text-sm leading-7 text-text/72">
            {mode === "hot"
              ? "Lorem ipsum dolor sit amet, velvety and sunlit."
              : "Lorem ipsum dolor sit amet, crisp and mineral."}
          </p>
        </div>
      </div>
    </FeatureShell>
  );
}

function StepLoopFeature() {
  const [frame, setFrame] = useState(1);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setFrame((value) => (value % 12) + 1);
    }, 220);

    return () => window.clearInterval(intervalId);
  }, [prefersReducedMotion]);

  return (
    <FeatureShell
      eyebrow="Frame Sequence"
      title="Animate process storytelling through a light 12-step visual loop."
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam quis nostrud exercitation ullamco."
      reverse
      media={
        <div className="soft-panel p-5">
          <div className="relative grid min-h-[420px] place-items-center overflow-hidden rounded-[1.5rem] border border-border bg-white/60">
            {Array.from({ length: 12 }, (_, index) => {
              const isActive = frame === index + 1;
              return (
                <AnimatePresence key={index}>
                  {isActive ? (
                    <motion.div
                      className="absolute inset-0 p-4"
                      initial={prefersReducedMotion ? false : { opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: prefersReducedMotion ? 0 : 0.25 }}
                    >
                      <ImagePlaceholder
                        className="h-full min-h-[360px]"
                        label={`Frame ${index + 1}`}
                      />
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              );
            })}
            <div className="absolute left-5 top-5 rounded-full border border-border bg-white/80 px-4 py-2 text-xs uppercase tracking-[0.18em] text-text/55">
              Step {String(frame).padStart(2, "0")}
            </div>
          </div>
        </div>
      }
    >
      <div className="space-y-4">
        <div className="rounded-[1.75rem] border border-border bg-white/65 p-5">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-xs uppercase tracking-[0.18em] text-text/45">
              Active Frame
            </p>
            <p className="font-serif text-2xl">{String(frame).padStart(2, "0")}</p>
          </div>
          <div className="grid grid-cols-6 gap-2">
            {Array.from({ length: 12 }, (_, index) => {
              const active = index + 1 === frame;
              return (
                <div
                  key={index}
                  className={cn(
                    "h-3 rounded-full transition duration-300",
                    active ? "bg-accent" : "bg-text/10",
                  )}
                />
              );
            })}
          </div>
        </div>
        <Button variant="outline" href="#">
          View Process Notes
        </Button>
      </div>
    </FeatureShell>
  );
}

function CarouselFeature() {
  const slides = useMemo(
    () => ["Editorial View", "Material Detail", "Retail Moment"],
    [],
  );
  const [index, setIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setIndex((value) => (value + 1) % slides.length);
    }, 2600);

    return () => window.clearInterval(intervalId);
  }, [prefersReducedMotion, slides.length]);

  return (
    <FeatureShell
      eyebrow="Crossfade Carousel"
      title="Rotate lifestyle frames automatically with soft opacity-led transitions."
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse."
      media={
        <div className="relative min-h-[460px] overflow-hidden rounded-[2rem] border border-border bg-white/70 p-4 shadow-warm">
          {slides.map((slide, slideIndex) => (
            <motion.div
              key={slide}
              className="absolute inset-4"
              animate={{
                opacity: index === slideIndex ? 1 : 0,
                scale: index === slideIndex ? 1 : 0.98,
              }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.55, ease: "easeOut" }}
            >
              <ImagePlaceholder
                className="h-full min-h-[420px]"
                label={slide}
              />
            </motion.div>
          ))}
          <div className="absolute bottom-8 left-8 rounded-full border border-white/60 bg-white/85 px-4 py-2 text-xs uppercase tracking-[0.18em] text-text/55">
            {slides[index]}
          </div>
        </div>
      }
    >
      <div className="flex flex-wrap gap-3">
        {slides.map((slide, slideIndex) => (
          <button
            key={slide}
            type="button"
            onClick={() => setIndex(slideIndex)}
            className={cn(
              "rounded-full px-4 py-2 text-sm transition duration-300",
              index === slideIndex
                ? "bg-accent text-white"
                : "border border-border bg-white/70 text-text/68",
            )}
            data-cursor="expand"
          >
            {slide}
          </button>
        ))}
      </div>
    </FeatureShell>
  );
}

function BadgeHighlightFeature() {
  const badges = [
    "Spill-proof",
    "Moisture-safe",
    "Retail ready",
    "Low-waste",
  ];
  const [active, setActive] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setActive((value) => (value + 1) % badges.length);
    }, 1800);

    return () => window.clearInterval(intervalId);
  }, [badges.length, prefersReducedMotion]);

  return (
    <FeatureShell
      eyebrow="Performance Badge"
      title="Spotlight product proof points without breaking the soft editorial rhythm."
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident."
      reverse
      media={
        <div className="soft-panel p-5">
          <div className="relative min-h-[420px] overflow-hidden rounded-[1.5rem] border border-border bg-gradient-to-br from-white via-alt-1 to-alt-2">
            <div className="absolute inset-0 p-5">
              <ImagePlaceholder className="h-full min-h-[380px]" label={badges[active]} />
            </div>
            <div className="absolute bottom-8 left-8 rounded-[1.5rem] border border-white/60 bg-white/88 p-5 shadow-warm">
              <p className="mb-2 text-xs uppercase tracking-[0.18em] text-text/45">
                Highlight
              </p>
              <p className="font-serif text-3xl">{badges[active]}</p>
            </div>
          </div>
        </div>
      }
    >
      <div className="flex flex-wrap gap-3">
        {badges.map((badge, badgeIndex) => (
          <motion.button
            key={badge}
            type="button"
            onClick={() => setActive(badgeIndex)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm transition duration-300",
              active === badgeIndex
                ? "border-accent bg-accent text-white"
                : "border-border bg-white/70 text-text/70",
            )}
            animate={
              active === badgeIndex && !prefersReducedMotion
                ? { opacity: [0.85, 1, 0.85], y: [0, -2, 0] }
                : { opacity: 1, y: 0 }
            }
            transition={{
              duration: prefersReducedMotion ? 0 : 1.2,
              repeat:
                active === badgeIndex && !prefersReducedMotion
                  ? Number.POSITIVE_INFINITY
                  : 0,
            }}
            data-cursor="expand"
          >
            {badge}
          </motion.button>
        ))}
      </div>
    </FeatureShell>
  );
}

export default function FeatureSections() {
  return (
    <>
      <TemperatureFeature />
      <StepLoopFeature />
      <CarouselFeature />
      <BadgeHighlightFeature />
    </>
  );
}
