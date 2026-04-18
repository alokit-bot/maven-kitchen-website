import { InstagramLogo, FacebookLogo, Phone } from "@phosphor-icons/react";
import { BUSINESS } from "../../data/mavenData";

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer
      data-testid="site-footer"
      className="bg-[#1E1E1E] text-[#EAE3D9] border-t border-[#F8F5F0]/10"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 py-14 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div className="col-span-2">
            <h3 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight text-[#F8F5F0]">
              MAVEN KITCHEN
            </h3>
            <p className="font-kannada text-sm text-[#E8C170] mt-1">
              {BUSINESS.nameKannada}
            </p>
            <p className="mt-5 max-w-sm text-sm text-[#EAE3D9]/70 leading-relaxed">
              A neighbourhood kitchen in Ejipura serving authentic Northeast
              Indian cuisine — momos, thukpa, smoked meats and more.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                data-testid="footer-instagram"
                aria-label="Instagram"
                className="w-10 h-10 inline-flex items-center justify-center border border-[#F8F5F0]/20 hover:bg-[#A94438] hover:border-[#A94438] transition-colors"
              >
                <InstagramLogo size={18} />
              </a>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                data-testid="footer-facebook"
                aria-label="Facebook"
                className="w-10 h-10 inline-flex items-center justify-center border border-[#F8F5F0]/20 hover:bg-[#A94438] hover:border-[#A94438] transition-colors"
              >
                <FacebookLogo size={18} />
              </a>
              <a
                href={`tel:${BUSINESS.phoneRaw}`}
                data-testid="footer-phone"
                aria-label="Call"
                className="w-10 h-10 inline-flex items-center justify-center border border-[#F8F5F0]/20 hover:bg-[#A94438] hover:border-[#A94438] transition-colors"
              >
                <Phone size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#E8C170] font-semibold mb-5">
              Explore
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#home" className="hover:text-[#E8C170] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#E8C170] transition-colors">
                  Menu
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#E8C170] transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#E8C170] transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#E8C170] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#E8C170] font-semibold mb-5">
              Visit
            </h4>
            <address className="not-italic text-sm space-y-2 text-[#EAE3D9]/80">
              <div>{BUSINESS.address.line1}</div>
              <div>{BUSINESS.address.line2}</div>
              <div>{BUSINESS.address.city}</div>
              <div className="pt-2">
                <a
                  href={`tel:${BUSINESS.phoneRaw}`}
                  className="text-[#F8F5F0] hover:text-[#E8C170] transition-colors"
                >
                  {BUSINESS.phone}
                </a>
              </div>
              <div className="text-[#E8C170] italic pt-1">
                {BUSINESS.hours}
              </div>
            </address>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-[#F8F5F0]/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-[#EAE3D9]/50">
          <div>
            © {year} Maven Kitchen. All rights reserved. Crafted with care in Bengaluru.
          </div>
          <div className="flex gap-6">
            <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-[#E8C170]">
              Privacy
            </a>
            <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-[#E8C170]">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
