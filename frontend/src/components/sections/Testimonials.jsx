import Marquee from "react-fast-marquee";
import { Quotes } from "@phosphor-icons/react";
import { TESTIMONIALS } from "../../data/mavenData";

export const Testimonials = () => {
  return (
    <section
      data-testid="testimonials-section"
      className="bg-[#EAE3D9] py-20 md:py-28 grain-overlay overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 mb-10 md:mb-14">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <span className="text-sm uppercase tracking-[0.25em] font-semibold text-[#8B5E34]">
              What Guests Say
            </span>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05] text-[#2A2A2A]">
              Rated 4.6★ by the neighbourhood.
            </h2>
          </div>
        </div>
      </div>

      <Marquee
        speed={40}
        gradient={true}
        gradientColor="rgb(234, 227, 217)"
        gradientWidth={80}
        pauseOnHover
      >
        {TESTIMONIALS.map((t, idx) => (
          <article
            key={`${t.name}-${idx}`}
            data-testid={`testimonial-${idx}`}
            className="mx-6 md:mx-10 max-w-xl md:max-w-2xl flex items-start gap-5 py-2"
          >
            <Quotes
              size={42}
              weight="fill"
              className="text-[#A94438] shrink-0 mt-2"
            />
            <div>
              <p className="font-serif italic text-xl md:text-3xl leading-snug text-[#2A2A2A]">
                "{t.quote}"
              </p>
              <div className="mt-4 flex items-center gap-3 text-sm">
                <span className="font-semibold text-[#2A2A2A]">{t.name}</span>
                <span className="text-[#8B5E34]">·</span>
                <span className="text-[#4A4A4A]">{t.city}</span>
              </div>
            </div>
          </article>
        ))}
      </Marquee>
    </section>
  );
};
