import { Star, Phone, ArrowDown } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import { BUSINESS, HERO_IMAGE } from "../../data/mavenData";

export const Hero = () => {
  return (
    <section
      id="home"
      data-testid="hero-section"
      className="relative min-h-[100svh] w-full overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt="A steaming bowl of thukpa beside hand-folded momos"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/25" />
      </div>

      {/* Eyebrow ribbon */}
      <div className="absolute top-24 md:top-28 left-0 right-0 z-10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 flex items-center gap-4">
          <span className="h-px w-12 md:w-24 bg-[#EAE3D9]/60" />
          <span className="text-xs md:text-sm uppercase tracking-[0.35em] text-[#EAE3D9]/90 font-medium">
            Ejipura · Bengaluru · Since Day One
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 min-h-[100svh] flex items-center pt-32 pb-16">
        <div className="max-w-4xl">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 mb-8"
            data-testid="hero-rating-badge"
          >
            <Star size={16} weight="fill" className="text-[#E8C170]" />
            <span className="text-sm text-white font-medium">
              {BUSINESS.rating}★ · {BUSINESS.reviews.toLocaleString()}+ reviews on Google
            </span>
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-semibold tracking-tighter leading-[0.95] text-white"
          >
            Flavors of the <em className="text-[#E8C170] not-italic font-serif font-normal italic">Northeast,</em>
            <br />
            right here in <span className="underline decoration-[#A94438] decoration-4 underline-offset-[8px]">Bengaluru.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-8 max-w-xl text-lg md:text-xl leading-relaxed text-[#EAE3D9]"
          >
            Hand-folded momos, slow-simmered thukpa and smoked meats from
            Nagaland, Manipur and Mizoram — cooked the way they've been cooked for generations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <a
              href={`tel:${BUSINESS.phoneRaw}`}
              data-testid="hero-order-button"
              className="inline-flex items-center justify-center gap-2 bg-[#A94438] text-white px-8 py-4 hover:bg-[#8C362A] transition-colors text-base font-medium"
            >
              <Phone size={18} weight="fill" />
              Order Now
            </a>
            <a
              href="#menu"
              data-testid="hero-menu-button"
              className="inline-flex items-center justify-center gap-2 border border-white text-white px-8 py-4 hover:bg-white hover:text-[#2A2A2A] transition-colors text-base font-medium"
            >
              View Menu
              <ArrowDown size={18} />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom meta bar */}
      <div className="absolute bottom-0 inset-x-0 z-10 border-t border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 py-4 flex flex-wrap items-center justify-between gap-3 text-xs md:text-sm text-[#EAE3D9]">
          <span>{BUSINESS.hours}</span>
          <span className="hidden md:inline">Ejipura Main Rd, near Koramangala</span>
          <span>Dine-in · Takeaway · Delivery</span>
        </div>
      </div>
    </section>
  );
};
