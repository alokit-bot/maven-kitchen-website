import { motion } from "framer-motion";
import { GALLERY } from "../../data/mavenData";

export const Gallery = () => {
  return (
    <section
      id="gallery"
      data-testid="gallery-section"
      className="bg-[#F8F5F0] py-20 md:py-32"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
          <div className="max-w-2xl">
            <span className="text-sm uppercase tracking-[0.25em] font-semibold text-[#8B5E34]">
              Inside Maven Kitchen
            </span>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05] text-[#2A2A2A]">
              A few honest frames.
            </h2>
          </div>
          <p className="md:max-w-xs text-base leading-relaxed text-[#4A4A4A]">
            The room, the hands, the plates. Tag us
            <span className="font-serif italic"> @mavenkitchen </span>
            and we might just feature you.
          </p>
        </div>

        {/* Bento-style tetris grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 auto-rows-[220px] md:auto-rows-[280px] gap-4 md:gap-6">
          {GALLERY.map((g, idx) => (
            <motion.figure
              key={g.url}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: idx * 0.06 }}
              className={`relative img-zoom overflow-hidden col-span-1 ${g.span}`}
              data-testid={`gallery-image-${idx}`}
            >
              <img
                src={g.url}
                alt={g.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <figcaption className="absolute inset-x-0 bottom-0 p-4 text-xs text-white bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity">
                {g.alt}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
};
