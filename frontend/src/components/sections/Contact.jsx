import { Phone, MapPin, Clock, ArrowUpRight } from "@phosphor-icons/react";
import { BUSINESS } from "../../data/mavenData";

export const Contact = () => {
  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="bg-[#2A2A2A] text-[#F8F5F0] py-20 md:py-32"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14">
          {/* Heading + statement */}
          <div className="md:col-span-5">
            <span className="text-sm uppercase tracking-[0.25em] font-semibold text-[#E8C170]">
              Visit Us · Ejipura
            </span>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05]">
              Come hungry.
              <br />
              <span className="italic font-normal text-[#E8C170]">
                Leave happy.
              </span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[#EAE3D9]/80 max-w-md">
              Walk-ins welcome. For large groups, give us a call ahead so we
              can keep a table warm for you.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={`tel:${BUSINESS.phoneRaw}`}
                data-testid="contact-call-button"
                className="inline-flex items-center gap-2 bg-[#A94438] text-white px-6 py-3 hover:bg-[#8C362A] transition-colors text-sm font-medium"
              >
                <Phone size={16} weight="fill" />
                {BUSINESS.phone}
              </a>
              <a
                href={BUSINESS.address.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="contact-directions-button"
                className="inline-flex items-center gap-2 border border-[#F8F5F0]/40 text-[#F8F5F0] px-6 py-3 hover:bg-[#F8F5F0] hover:text-[#2A2A2A] transition-colors text-sm font-medium"
              >
                Get Directions
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>

          {/* Info blocks */}
          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10">
            <InfoBlock
              icon={<MapPin size={22} weight="duotone" />}
              label="Address"
              testid="contact-address"
            >
              <p className="text-[#EAE3D9]">{BUSINESS.address.line1}</p>
              <p className="text-[#EAE3D9]">{BUSINESS.address.line2}</p>
              <p className="text-[#EAE3D9]">{BUSINESS.address.city}</p>
              <p className="mt-2 text-[#E8C170] text-sm italic">
                On Ejipura Main Rd, near Koramangala
              </p>
            </InfoBlock>

            <InfoBlock
              icon={<Clock size={22} weight="duotone" />}
              label="Hours"
              testid="contact-hours"
            >
              <p className="text-[#EAE3D9]">Monday – Sunday</p>
              <p className="text-[#EAE3D9]">12:00 PM — 11:00 PM</p>
              <p className="mt-2 text-[#E8C170] text-sm italic">
                Kitchen closes 30 mins before
              </p>
            </InfoBlock>

            <InfoBlock
              icon={<Phone size={22} weight="duotone" />}
              label="Reservations"
              testid="contact-phone"
            >
              <a
                href={`tel:${BUSINESS.phoneRaw}`}
                className="text-[#EAE3D9] hover:text-[#E8C170] transition-colors text-lg font-serif"
              >
                {BUSINESS.phone}
              </a>
              <p className="mt-2 text-[#EAE3D9]/70 text-sm">
                Tap to call — we answer between opening hours.
              </p>
            </InfoBlock>

            <InfoBlock
              icon={<ArrowUpRight size={22} weight="duotone" />}
              label="Order Online"
              testid="contact-delivery"
            >
              <p className="text-[#EAE3D9] mb-3">
                Delivery available via partner platforms.
              </p>
              <div className="flex gap-2">
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  data-testid="contact-swiggy-link"
                  className="px-3 py-1.5 text-xs font-medium bg-[#F8F5F0] text-[#2A2A2A] hover:bg-[#E8C170] transition-colors"
                >
                  Swiggy
                </a>
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  data-testid="contact-zomato-link"
                  className="px-3 py-1.5 text-xs font-medium bg-[#F8F5F0] text-[#2A2A2A] hover:bg-[#E8C170] transition-colors"
                >
                  Zomato
                </a>
              </div>
            </InfoBlock>
          </div>
        </div>

        {/* Map embed */}
        <div className="mt-16 md:mt-20 aspect-[21/9] w-full overflow-hidden border border-[#F8F5F0]/10">
          <iframe
            title="Maven Kitchen location"
            data-testid="contact-map"
            src="https://www.google.com/maps?q=163+Ejipura+Main+Rd+Viveknagar+Further+Extension+Ejipura+Bengaluru+560047&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0, filter: "grayscale(0.2) contrast(0.95)" }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

const InfoBlock = ({ icon, label, children, testid }) => (
  <div data-testid={testid} className="pt-6 border-t border-[#F8F5F0]/15">
    <div className="flex items-center gap-2 text-[#E8C170] mb-4">
      {icon}
      <span className="text-xs uppercase tracking-[0.25em] font-semibold">
        {label}
      </span>
    </div>
    <div className="space-y-0.5">{children}</div>
  </div>
);
