import CatalogueImage from "@/components/ui/CatalogueImage";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { ecosystemCategories } from "@/data/catalogue";

export default function ProductEcosystemSection() {
  return (
    <section id="ecosystem" className="section-blend section-space">
      <div className="site-container">
        <ScrollReveal className="mb-10 max-w-2xl space-y-5">
          <span className="eyebrow bg-white/72">Product Ecosystem</span>
          <h2 className="font-serif text-4xl leading-tight text-balance sm:text-5xl">
            Product families are organized as systems, not disconnected SKUs.
          </h2>
        </ScrollReveal>

        <div className="grid gap-6 lg:grid-cols-2">
          {ecosystemCategories.map((category) => (
            <ScrollReveal
              key={category.title}
              className="overflow-hidden border border-border/80 bg-white/54 shadow-warm"
            >
              <div className="grid gap-0 md:grid-cols-[0.9fr_1.1fr]">
                <CatalogueImage
                  src={category.image}
                  alt={category.title}
                  className="min-h-[260px] rounded-none border-0 shadow-none md:min-h-full"
                  imageClassName="object-contain bg-white p-6"
                />
                <div className="p-6">
                  <p className="text-[0.68rem] uppercase tracking-[0.24em] text-text/45">
                    {category.subtitle}
                  </p>
                  <h3 className="mt-3 font-serif text-3xl">{category.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-text/70">
                    {category.description}
                  </p>
                  <div className="mt-5 space-y-2 text-sm text-text/72">
                    {category.bullets.map((bullet) => (
                      <p key={bullet}>• {bullet}</p>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
