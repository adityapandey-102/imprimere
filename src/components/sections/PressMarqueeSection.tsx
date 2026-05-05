const pressItemsTop = [
  "Monocle",
  "Dezeen",
  "Wallpaper*",
  "Kinfolk",
  "Fast Company",
  "Design Milk",
];

const pressItemsBottom = [
  "Surface",
  "Frame",
  "Domus",
  "Azure",
  "Sight Unseen",
  "It’s Nice That",
];

function PressRow({
  items,
  reverse,
}: {
  items: string[];
  reverse?: boolean;
}) {
  return (
    <div className="overflow-hidden rounded-full border border-border bg-white/60 py-4 shadow-warm">
      <div
        className={reverse ? "marquee-track-reverse flex min-w-max gap-4 px-4" : "marquee-track flex min-w-max gap-4 px-4"}
      >
        {[...items, ...items].map((item, index) => (
          <div
            key={`${item}-${index}`}
            className="flex items-center gap-4 px-4 text-sm uppercase tracking-[0.24em] text-text/55"
          >
            <span>{item}</span>
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function PressMarqueeSection() {
  return (
    <section className="section-blend section-space">
      <div className="site-container space-y-6">
        <div className="max-w-xl space-y-4">
          <span className="eyebrow bg-white/78">Press</span>
          <h2 className="font-serif text-4xl leading-tight text-balance sm:text-5xl">
            A moving wall of editorial recognition.
          </h2>
        </div>
        <PressRow items={pressItemsTop} />
        <PressRow items={pressItemsBottom} reverse />
      </div>
    </section>
  );
}
