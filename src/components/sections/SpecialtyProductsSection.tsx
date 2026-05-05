import CatalogueImage from "@/components/ui/CatalogueImage";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { specialtyProducts } from "@/data/catalogue";

const specialtyImages = [
  "/catalogue/good-cup-collage.png",
  "/catalogue/ova-tshirt-bags.png",
  "/catalogue/manual-sealer.png",
  "/catalogue/kraft-napkin.png",
  "/catalogue/sustainability-panel.png",
];

export default function SpecialtyProductsSection() {
  return (
    <section className="section-blend section-space overflow-hidden">
      <div className="site-container">
        <ScrollReveal className="mb-10 max-w-2xl space-y-5">
          <span className="eyebrow bg-white/78">Specialty Products</span>
          <h2 className="font-serif text-4xl leading-tight text-balance sm:text-5xl">
            Handpicked categories with lower MOQs, faster access, and stronger presentation value.
          </h2>
        </ScrollReveal>

        <div className="flex gap-6 overflow-x-auto pb-2">
          {specialtyProducts.map((product, index) => (
            <ScrollReveal
              key={product.title}
              className="w-[20rem] shrink-0 rounded-[2rem] border border-border bg-white/72 p-4 shadow-warm"
            >
              <CatalogueImage
                src={specialtyImages[index]}
                alt={product.title}
                className="mb-5 min-h-[220px]"
                imageClassName="object-contain bg-white p-5"
              />
              <h3 className="font-serif text-3xl">{product.title}</h3>
              <p className="mt-3 text-sm leading-7 text-text/70">
                {product.description}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
