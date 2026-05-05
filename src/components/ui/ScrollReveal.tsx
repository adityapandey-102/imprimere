"use client";

import { useRef, type ReactNode } from "react";
import { useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
  y?: number;
};

export default function ScrollReveal({
  children,
  className,
  delay = 0,
  once = true,
  y = 40,
}: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useGSAP(
    () => {
      if (!elementRef.current) {
        return;
      }

      if (prefersReducedMotion) {
        gsap.set(elementRef.current, { opacity: 1, y: 0 });
        return;
      }

      gsap.fromTo(
        elementRef.current,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: elementRef.current,
            start: "top 85%",
            once,
          },
        },
      );
    },
    { dependencies: [delay, once, prefersReducedMotion, y], scope: elementRef },
  );

  return (
    <div ref={elementRef} className={cn(className)}>
      {children}
    </div>
  );
}
