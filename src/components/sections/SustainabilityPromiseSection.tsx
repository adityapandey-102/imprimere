import CatalogueImage from "@/components/ui/CatalogueImage";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { sustainabilityPillars } from "@/data/catalogue";

export default function SustainabilityPromiseSection() {
  return (
    <section className="section-blend section-space">
      <div className="site-container">
        <div className="grid items-start gap-10 lg:grid-cols-[0.92fr_1.08fr]">
          <ScrollReveal className="space-y-6">
            <span className="eyebrow bg-white/78">Sustainability</span>
            <h2 className="font-serif text-4xl leading-tight text-balance sm:text-5xl">
              Sustainability here is framed as practical replacement, not generic aspiration.
            </h2>
            <p className="text-base leading-8 text-text/72">
              The catalogue speaks directly to single-use plastic pressure,
              compostable pathways, and the need for products that support
              operations while moving brands toward regulatory and environmental
              alignment.
            </p>
            <CatalogueImage
              src="/catalogue/sustainability-panel.png"
              alt="Biodegradable, compostable, and recyclable panel"
              className="min-h-[280px]"
            />
          </ScrollReveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {sustainabilityPillars.map((pillar) => (
              <ScrollReveal
                key={pillar.title}
                className="rounded-[2rem] border border-border bg-white/72 p-6 shadow-warm"
              >
                <p className="text-xs uppercase tracking-[0.18em] text-text/45">
                  Pillar
                </p>
                <h3 className="mt-3 font-serif text-3xl">{pillar.title}</h3>
                <p className="mt-4 text-sm leading-7 text-text/70">
                  {pillar.description}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
