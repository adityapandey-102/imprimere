import Image from "next/image";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  imageClassName?: string;
  markOnly?: boolean;
  priority?: boolean;
};

export default function BrandLogo({
  className,
  imageClassName,
  markOnly = false,
  priority,
}: BrandLogoProps) {
  const src = markOnly
    ? "/brand/logo-circle-mark.png"
    : "/brand/logo-primary-mark.png";

  return (
    <div className={cn("relative block h-full w-full", className)}>
      <Image
        src={src}
        alt={markOnly ? "Imprimere Pack brand mark" : "Imprimere Pack logo"}
        fill
        priority={priority}
        className={cn("object-contain", imageClassName)}
        sizes={markOnly ? "72px" : "240px"}
      />
    </div>
  );
}
