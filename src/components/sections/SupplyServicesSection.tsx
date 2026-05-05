import ScrollReveal from "@/components/ui/ScrollReveal";
import GlassCard from "@/components/ui/GlassCard";
import { services } from "@/data/catalogue";

export default function SupplyServicesSection() {
  return (
    <section id="services" className="section-blend section-space">
      <div className="site-container">
        <ScrollReveal className="mb-10 max-w-2xl space-y-5">
          <span className="eyebrow bg-white/72">Supply & Services</span>
          <h2 className="font-serif text-4xl leading-tight text-balance sm:text-5xl">
            The differentiator is not just supply, but the service architecture around it.
          </h2>
        </ScrollReveal>

        <div className="grid gap-6 lg:grid-cols-3">
          {services.map((service) => (
            <ScrollReveal key={service.title}>
              <GlassCard className="p-6" hover>
              <p className="text-[0.68rem] uppercase tracking-[0.24em] text-text/45">
                Service
              </p>
              <h3 className="mt-3 font-serif text-3xl">{service.title}</h3>
              <p className="mt-4 text-sm leading-7 text-text/70">
                {service.description}
              </p>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
