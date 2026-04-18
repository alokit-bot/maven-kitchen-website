import { useEffect, useState } from "react";
import { List, X, Phone } from "@phosphor-icons/react";
import { BUSINESS } from "../../data/mavenData";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "Menu", href: "#menu" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="site-header"
      className={`fixed top-0 inset-x-0 z-50 bg-[#F8F5F0] border-b transition-colors duration-300 ${
        scrolled ? "border-[#EAE3D9]" : "border-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 py-4 md:py-5 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 group" data-testid="header-logo">
          <div className="flex flex-col leading-none">
            <span className="text-xl md:text-2xl font-serif font-semibold tracking-tight text-[#2A2A2A]">
              MAVEN KITCHEN
            </span>
            <span className="font-kannada text-[11px] md:text-xs text-[#8B5E34] tracking-wide mt-0.5">
              {BUSINESS.nameKannada} · Northeast Indian
            </span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              data-testid={`nav-${n.label.toLowerCase()}`}
              className="text-sm font-medium text-[#2A2A2A] hover:text-[#A94438] transition-colors"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <a
          href={`tel:${BUSINESS.phoneRaw}`}
          data-testid="header-call-button"
          className="hidden md:inline-flex items-center gap-2 bg-[#A94438] text-white px-5 py-2.5 hover:bg-[#8C362A] transition-colors text-sm font-medium"
        >
          <Phone size={16} weight="fill" />
          Call to Order
        </a>

        <button
          className="md:hidden p-2 -mr-2 text-[#2A2A2A]"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          data-testid="mobile-menu-toggle"
        >
          {open ? <X size={24} /> : <List size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#F8F5F0] border-t border-[#EAE3D9]" data-testid="mobile-menu">
          <div className="px-6 py-6 flex flex-col gap-5">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="text-lg font-serif text-[#2A2A2A] hover:text-[#A94438]"
              >
                {n.label}
              </a>
            ))}
            <a
              href={`tel:${BUSINESS.phoneRaw}`}
              className="mt-2 inline-flex items-center gap-2 bg-[#A94438] text-white px-5 py-3 w-fit"
            >
              <Phone size={16} weight="fill" /> Call to Order
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
