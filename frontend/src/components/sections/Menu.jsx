import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MENU } from "../../data/mavenData";

export const Menu = () => {
  const [active, setActive] = useState(MENU[0].id);
  const current = MENU.find((c) => c.id === active);

  return (
    <section
      id="menu"
      data-testid="menu-section"
      className="relative bg-[#EAE3D9] py-20 md:py-32 grain-overlay"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
          <div>
            <span className="text-sm uppercase tracking-[0.25em] font-semibold text-[#8B5E34]">
              The Menu · A Selection
            </span>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05] text-[#2A2A2A]">
              Highlights from the kitchen.
            </h2>
          </div>
          <p className="md:max-w-sm text-base leading-relaxed text-[#4A4A4A]">
            A small rotating selection. Ask our team for daily specials,
            off-menu chutneys and what's just come in from the hills.
          </p>
        </div>

        {/* Category tabs */}
        <div
          className="flex flex-wrap gap-x-2 gap-y-3 border-b border-[#2A2A2A]/15 pb-4 mb-10 md:mb-14"
          data-testid="menu-categories"
        >
          {MENU.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              data-testid={`menu-tab-${c.id}`}
              className={`relative px-4 py-2 text-sm md:text-base font-medium transition-colors ${
                active === c.id
                  ? "text-[#A94438]"
                  : "text-[#2A2A2A] hover:text-[#A94438]"
              }`}
            >
              {c.category}
              {active === c.id && (
                <motion.span
                  layoutId="menu-tab-underline"
                  className="absolute -bottom-[17px] left-0 right-0 h-[2px] bg-[#A94438]"
                />
              )}
            </button>
          ))}
        </div>

        {/* Items */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-12 gap-10"
          >
            <div className="md:col-span-4">
              <h3 className="font-serif text-3xl md:text-4xl font-semibold text-[#2A2A2A]">
                {current.category}
              </h3>
              <p className="mt-3 text-base text-[#4A4A4A] italic">
                {current.tagline}
              </p>
              <span className="mt-6 inline-block text-xs uppercase tracking-[0.25em] text-[#8B5E34]">
                From ₹{Math.min(...current.items.map((i) => i.price))}
              </span>
            </div>

            <ul
              className="md:col-span-8 space-y-7"
              data-testid={`menu-items-${current.id}`}
            >
              {current.items.map((item, idx) => (
                <li
                  key={item.name}
                  className="group"
                  data-testid={`menu-item-${current.id}-${idx}`}
                >
                  <div className="flex items-baseline">
                    <h4 className="font-serif text-xl md:text-2xl font-medium text-[#2A2A2A] group-hover:text-[#A94438] transition-colors">
                      {item.name}
                    </h4>
                    <span className="menu-leader" />
                    <span className="font-serif text-xl md:text-2xl font-semibold text-[#A94438] shrink-0">
                      ₹{item.price}
                    </span>
                  </div>
                  <p className="mt-2 text-sm md:text-base text-[#4A4A4A] max-w-xl">
                    {item.desc}
                  </p>
                </li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>

        <div className="mt-16 pt-10 border-t border-[#2A2A2A]/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-sm text-[#4A4A4A] max-w-md">
            Menu may rotate with seasonal produce. All prices inclusive of
            applicable taxes. Vegetarian options available across categories.
          </p>
          <a
            href="tel:+918310360483"
            data-testid="menu-call-button"
            className="bg-[#A94438] text-white px-6 py-3 hover:bg-[#8C362A] transition-colors text-sm font-medium"
          >
            Call to Pre-Order →
          </a>
        </div>
      </div>
    </section>
  );
};
