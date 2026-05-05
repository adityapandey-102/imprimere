import Image from "next/image";
import { cn } from "@/lib/utils";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

type CatalogueImageProps = {
  alt: string;
  src?: string;
  className?: string;
  imageClassName?: string;
  sizes?: string;
};

export default function CatalogueImage({
  alt,
  src,
  className,
  imageClassName,
  sizes = "(min-width: 1024px) 40vw, 100vw",
}: CatalogueImageProps) {
  if (!src) {
    return <ImagePlaceholder className={className} label={alt} />;
  }

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-[1.5rem] border border-border/80 bg-white shadow-warm",
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        className={cn(
          "object-cover transition-transform duration-500 group-hover:scale-[1.02]",
          imageClassName,
        )}
      />
    </div>
  );
}
