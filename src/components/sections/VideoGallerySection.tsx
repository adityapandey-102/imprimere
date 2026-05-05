"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import Modal from "@/components/ui/Modal";
import ScrollReveal from "@/components/ui/ScrollReveal";

const videos = [
  "Studio Tour",
  "Material Library",
  "Launch Recap",
  "Packaging Motion",
];

export default function VideoGallerySection() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="section-blend section-space">
      <div className="site-container">
        <ScrollReveal className="mb-10 max-w-2xl space-y-5">
          <span className="eyebrow bg-white/78">Video Gallery</span>
          <h2 className="font-serif text-4xl leading-tight text-balance sm:text-5xl">
            Motion snippets with a soft hover glow and lightbox preview.
          </h2>
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-2">
          {videos.map((video, index) => (
            <motion.button
              key={video}
              type="button"
              onClick={() => setActiveVideo(video)}
              className="group relative overflow-hidden rounded-[2rem] border border-border bg-white/72 p-4 text-left shadow-warm"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.55, delay: index * 0.06 }}
              whileHover={prefersReducedMotion ? undefined : { y: -6 }}
              data-cursor="expand"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,80,42,0.16),transparent_50%)] opacity-0 transition duration-300 group-hover:opacity-100" />
              <ImagePlaceholder className="mb-5 min-h-[280px]" label={video} />
              <p className="text-xs uppercase tracking-[0.18em] text-text/45">Video {index + 1}</p>
              <h3 className="mt-3 font-serif text-3xl">{video}</h3>
            </motion.button>
          ))}
        </div>
      </div>

      <Modal
        open={Boolean(activeVideo)}
        onClose={() => setActiveVideo(null)}
        title={activeVideo ?? "Video Preview"}
      >
        <div className="space-y-5">
          <ImagePlaceholder className="min-h-[320px]" label={activeVideo ?? "Video preview"} />
          <p className="text-base leading-8 text-text/72">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </Modal>
    </section>
  );
}
