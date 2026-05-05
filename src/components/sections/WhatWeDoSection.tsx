import ScrollReveal from "@/components/ui/ScrollReveal";
import GlassCard from "@/components/ui/GlassCard";
import { whatWeDo } from "@/data/catalogue";

export default function WhatWeDoSection() {
  return (
    <section className="section-blend section-space">
      <div className="site-container">
        <ScrollReveal className="mb-10 max-w-2xl space-y-5">
          <span className="eyebrow bg-white/78">What We Do</span>
          <h2 className="font-serif text-4xl leading-tight text-balance sm:text-5xl">
            We supply the packaging, thinking, and network behind modern food and beverage brands.
          </h2>
        </ScrollReveal>

        <div className="grid gap-6 lg:grid-cols-3">
          {whatWeDo.map((item) => (
            <ScrollReveal key={item.title}>
              <GlassCard className="p-6" hover>
              <p className="mb-4 text-xs uppercase tracking-[0.18em] text-text/45">
                Imprimere
              </p>
              <h3 className="font-serif text-3xl">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-text/70">
                {item.description}
              </p>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
