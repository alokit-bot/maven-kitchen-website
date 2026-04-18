import { motion } from "framer-motion";
import { Star } from "@phosphor-icons/react";

export const About = () => {
  return (
    <section
      id="about"
      data-testid="about-section"
      className="relative bg-[#F8F5F0] py-20 md:py-32 grain-overlay"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          {/* Left: image stack */}
          <div className="md:col-span-5 relative">
            <div className="img-zoom aspect-[4/5] overflow-hidden">
              <img
                src="https://static.prod-images.emergentagent.com/jobs/2ca94d15-7db3-42a6-806d-66b720c1764b/images/587cad32b111d210a566de329b2dfcadf3f2811349767364b2030c3ec374a6c0.png"
                alt="Rustic interior of Maven Kitchen"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="hidden md:block absolute -bottom-10 -right-10 w-48 h-60 img-zoom overflow-hidden border-8 border-[#F8F5F0]">
              <img
                src="https://static.prod-images.emergentagent.com/jobs/2ca94d15-7db3-42a6-806d-66b720c1764b/images/8b778d4b796059d2e18fb692fcc4b7a0916b9cdb5c82b08e4615dd0da907b128.png"
                alt="Chef hand-folding momos"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: copy */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="md:col-span-7 md:pl-8"
          >
            <span className="text-sm uppercase tracking-[0.25em] font-semibold text-[#8B5E34]">
              Our Kitchen · Our Story
            </span>
            <h2 className="mt-5 font-serif text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05] text-[#2A2A2A]">
              A neighbourhood kitchen with roots in the hills.
            </h2>

            <div className="mt-8 space-y-6 text-lg leading-relaxed text-[#4A4A4A] max-w-2xl">
              <p>
                Maven Kitchen brings the bold, aromatic flavours of Northeast
                India to the streets of Ejipura. Our kitchen honours the
                culinary traditions of Nagaland, Manipur, Mizoram, Assam and
                Meghalaya — with axone-rich pork stews, smoked meats, fiery
                chutneys and delicate hand-folded momos.
              </p>
              <p>
                It started with a simple idea: cook the food we grew up on,
                exactly how grandmothers cook it. No shortcuts, no softening
                of the spice, no fusion that hides what makes these dishes
                special. Just honest plates, generous portions, and a room
                that feels like home.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-6 md:gap-10 pt-8 border-t border-[#EAE3D9]">
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="font-serif text-4xl font-semibold text-[#A94438]">4.6</span>
                  <Star size={18} weight="fill" className="text-[#E8C170]" />
                </div>
                <span className="text-xs uppercase tracking-[0.2em] text-[#4A4A4A] mt-1 block">
                  Google Rating
                </span>
              </div>
              <div>
                <div className="font-serif text-4xl font-semibold text-[#A94438]">1,200+</div>
                <span className="text-xs uppercase tracking-[0.2em] text-[#4A4A4A] mt-1 block">
                  Reviews
                </span>
              </div>
              <div>
                <div className="font-serif text-4xl font-semibold text-[#A94438]">5</div>
                <span className="text-xs uppercase tracking-[0.2em] text-[#4A4A4A] mt-1 block">
                  NE Cuisines
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
