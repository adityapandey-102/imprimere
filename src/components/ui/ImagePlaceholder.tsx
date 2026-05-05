import { cn } from "@/lib/utils";

type ImagePlaceholderProps = {
  className?: string;
  label?: string;
};

export default function ImagePlaceholder({
  className,
  label = "Placeholder Visual",
}: ImagePlaceholderProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[2rem] border border-border bg-gradient-to-br from-white via-alt-1 to-alt-2 shadow-warm",
        className,
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.8),transparent_45%)]" />
      <div className="absolute left-6 top-6 h-16 w-16 rounded-full bg-white/60 blur-md" />
      <div className="absolute bottom-8 right-8 h-24 w-24 rounded-full bg-accent/10 blur-2xl" />
      <div className="relative flex h-full min-h-[280px] flex-col justify-between p-6">
        <span className="eyebrow w-fit bg-white/80 text-[0.62rem] tracking-[0.2em]">
          Eco Visual
        </span>
        <div className="space-y-3">
          <div className="h-3 w-28 rounded-full bg-white/70" />
          <div className="h-3 w-40 rounded-full bg-white/60" />
          <div className="flex items-center justify-between rounded-[1.5rem] border border-white/60 bg-white/55 p-4">
            <div className="space-y-2">
              <div className="h-2.5 w-20 rounded-full bg-text/12" />
              <div className="h-2.5 w-16 rounded-full bg-text/8" />
            </div>
            <div className="h-12 w-12 rounded-full bg-accent/15" />
          </div>
        </div>
      </div>
      <span className="sr-only">{label}</span>
    </div>
  );
}
