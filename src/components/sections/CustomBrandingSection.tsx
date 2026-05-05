import Button from "@/components/ui/Button";
import BrandLogo from "@/components/ui/BrandLogo";
import CatalogueImage from "@/components/ui/CatalogueImage";
import GlassCard from "@/components/ui/GlassCard";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { customizationFeatures } from "@/data/catalogue";

export default function CustomBrandingSection() {
  return (
    <section className="section-blend section-space">
      <div className="site-container">
        <div className="soft-panel grid items-center gap-10 p-6 sm:p-8 lg:grid-cols-[1.1fr_0.9fr] lg:p-12">
          <ScrollReveal className="space-y-6">
            <span className="eyebrow bg-white/78">Imprint Your Brand</span>
            <h2 className="font-serif text-4xl leading-tight text-balance sm:text-5xl">
              Turn sustainable packaging into a luxury brand asset.
            </h2>
            <p className="text-base leading-8 text-text/72">
              The catalogue leans hard into imprinting, colour continuity, and
              premium finishing across cups, napkins, sealing lids, and specialty
              formats.
            </p>
            <div className="space-y-3 text-sm text-text/72">
              {customizationFeatures.map((feature) => (
                <p key={feature}>• {feature}</p>
              ))}
            </div>
            <Button href="#contact">Request branded samples</Button>
          </ScrollReveal>

          <ScrollReveal delay={0.08} className="grid gap-4 sm:grid-cols-2">
            <CatalogueImage
              src="/catalogue/ova-colors.png"
              alt="Catalogue colour options"
              className="min-h-[220px]"
              imageClassName="object-contain bg-white p-4"
            />
            <GlassCard className="p-6" hover>
              <div className="relative mb-5 h-12 w-12">
                <BrandLogo markOnly />
              </div>
              <p className="text-[0.68rem] uppercase tracking-[0.24em] text-text/45">
                Premium Finish
              </p>
              <h3 className="mt-3 font-serif text-3xl">Emboss. Foil. Match.</h3>
              <p className="mt-4 text-sm leading-7 text-text/70">
                Reduced MOQs across multiple product families make premium
                execution easier to pilot and easier to scale.
              </p>
            </GlassCard>
            <GlassCard className="p-6 sm:col-span-2" dark>
              <p className="text-[0.68rem] uppercase tracking-[0.24em] text-text/45">
                Branding Capability
              </p>
              <p className="mt-3 font-serif text-4xl text-balance text-white">
                Multi-colour print, logo continuity, and tactile finish details
                across the ecosystem.
              </p>
            </GlassCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
