import Link from "next/link";
import BrandLogo from "@/components/ui/BrandLogo";

const footerColumns = [
  {
    title: "Products",
    links: [
      { label: "The Good Cup", href: "#good-cup" },
      { label: "Finezza", href: "#ecosystem" },
      { label: "Ova", href: "#ecosystem" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Consult", href: "#services" },
      { label: "Fulfillment", href: "#services" },
      { label: "Import / Export", href: "#services" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "info@imprimerepack.com", href: "mailto:info@imprimerepack.com" },
      { label: "www.imprimerepack.com", href: "https://www.imprimerepack.com" },
      { label: "@imprimerepack", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border/80 bg-white/58">
      <div className="site-container py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div className="max-w-xl space-y-6">
            <div className="relative h-14 w-[15rem]">
              <BrandLogo />
            </div>
            <p className="max-w-md text-sm leading-7 text-text/68">
              Premium packaging solutions that combine elegance, quality, and
              sustainability with dependable sourcing and refined execution.
            </p>
            <div className="flex items-center gap-4 border-t border-border/70 pt-5">
              <div className="relative h-14 w-14 shrink-0">
                <BrandLogo markOnly />
              </div>
              <p className="text-[0.72rem] uppercase tracking-[0.26em] text-text/58">
                Elegance in every detail.
              </p>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {footerColumns.map((column) => (
              <div key={column.title} className="space-y-4">
                <h3 className="text-[0.72rem] font-medium uppercase tracking-[0.26em] text-text/55">
                  {column.title}
                </h3>
                <ul className="space-y-3 text-sm text-text/68">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="transition hover:opacity-55"
                        data-cursor="expand"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
