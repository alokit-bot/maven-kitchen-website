import { ForkKnife, Leaf, Star, House } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import { FEATURES } from "../../data/mavenData";

const ICONS = { ForkKnife, Leaf, Star, House };

export const Features = () => {
  return (
    <section
      data-testid="features-section"
      className="bg-[#F8F5F0] py-20 md:py-32 grain-overlay"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="max-w-2xl mb-14 md:mb-20">
          <span className="text-sm uppercase tracking-[0.25em] font-semibold text-[#8B5E34]">
            What Makes Us Special
          </span>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05] text-[#2A2A2A]">
            Cooked with care — and character.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
          {FEATURES.map((f, idx) => {
            const Icon = ICONS[f.icon] || Star;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                data-testid={`feature-${idx}`}
                className="flex flex-col"
              >
                <span className="inline-flex items-center justify-center w-14 h-14 bg-[#A94438] text-white mb-6">
                  <Icon size={26} weight="duotone" />
                </span>
                <div className="font-serif text-xs uppercase tracking-[0.25em] text-[#8B5E34] mb-3">
                  0{idx + 1}
                </div>
                <h3 className="font-serif text-2xl md:text-3xl font-semibold text-[#2A2A2A] leading-tight">
                  {f.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-[#4A4A4A]">
                  {f.body}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
