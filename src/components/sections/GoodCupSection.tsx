import CatalogueImage from "@/components/ui/CatalogueImage";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { coldCupSpecs, goodCupBenefits, hotCupSpecs } from "@/data/catalogue";

function SpecTable({
  title,
  description,
  specs,
}: {
  title: string;
  description: string;
  specs: Array<{ size: string; packing: string; coating: string; cbm: string }>;
}) {
  return (
    <div className="border border-border/80 bg-white/54 p-6 shadow-warm">
      <div className="mb-5">
        <p className="text-[0.68rem] uppercase tracking-[0.24em] text-text/45">
          {title}
        </p>
        <p className="mt-3 text-sm leading-7 text-text/70">{description}</p>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead className="text-[0.68rem] uppercase tracking-[0.2em] text-text/45">
            <tr>
              <th className="pb-3 pr-4">Size</th>
              <th className="pb-3 pr-4">Packing</th>
              <th className="pb-3 pr-4">Coating</th>
              <th className="pb-3">CBM</th>
            </tr>
          </thead>
          <tbody>
            {specs.map((row) => (
              <tr key={`${title}-${row.size}`} className="border-t border-border/70">
                <td className="py-3 pr-4 font-medium">{row.size}</td>
                <td className="py-3 pr-4 text-text/70">{row.packing}</td>
                <td className="py-3 pr-4 text-text/70">{row.coating}</td>
                <td className="py-3 text-text/70">{row.cbm}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function GoodCupSection() {
  return (
    <section id="good-cup" className="section-blend section-space">
      <div className="site-container space-y-12">
        <div className="grid items-start gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <ScrollReveal className="space-y-6">
            <span className="eyebrow bg-white/72">Hero Product</span>
            <h2 className="font-serif text-4xl leading-tight text-balance sm:text-5xl">
              The Good Cup is the catalogue&apos;s clearest expression of luxury,
              sustainability, and operational intelligence.
            </h2>
            <p className="text-base leading-8 text-text/72">
              Positioned as a multi-award-winning innovation, The Good Cup
              replaces the traditional lid-heavy cup format with an integrated
              fold top for hot and cold beverage service.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <CatalogueImage
              src="/catalogue/good-cup-collage.png"
              alt="The Good Cup product collage"
              className="min-h-[360px] sm:min-h-[460px]"
            />
          </ScrollReveal>
        </div>

        <div className="grid gap-5 lg:grid-cols-4">
          {goodCupBenefits.map((benefit) => (
            <ScrollReveal
              key={benefit.title}
              className="border border-border/80 bg-white/54 p-6 shadow-warm"
            >
              <p className="text-[0.68rem] uppercase tracking-[0.24em] text-text/45">
                Benefit
              </p>
              <h3 className="mt-3 font-serif text-2xl leading-tight">{benefit.title}</h3>
              <p className="mt-3 text-sm leading-7 text-text/70">
                {benefit.description}
              </p>
            </ScrollReveal>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <ScrollReveal>
            <SpecTable
              title="Calidus"
              description="The hot range fits under most standard coffee machines and is designed to fold, lock, and serve without the guilt of disposable lid waste."
              specs={hotCupSpecs}
            />
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <SpecTable
              title="Frigus"
              description="The cold range uses an additional outer coating technique and a special sippy-lid format that reduces straw dependency and maintains elegance."
              specs={coldCupSpecs}
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
