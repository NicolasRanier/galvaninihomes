import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, SITE } from "@/config/site";
import { AirbnbIcon, Logo } from "./icons";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-background/95 backdrop-blur transition-shadow duration-300 ${scrolled ? "shadow-soft" : ""}`}
    >
      <div className="container-site relative flex h-[72px] items-center justify-between gap-6">
        <span className="w-11 sm:hidden" aria-hidden="true" />
        <a
          href="#inicio"
          aria-label="Galvanini Homes — início"
          className="absolute left-1/2 -translate-x-1/2 sm:static sm:translate-x-0"
        >
          <Logo />
        </a>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="nav-link">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href={SITE.airbnbUrl} target="_blank" rel="noopener noreferrer" className="btn-primary hidden sm:inline-flex">
          <AirbnbIcon className="h-4 w-4" /> Reservar no Airbnb
        </a>

        <button
          className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-md text-ink lg:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav aria-label="Menu móvel" className="border-t border-border bg-background lg:hidden animate-in slide-in-from-top-2 fade-in duration-200">
          <ul className="container-site flex flex-col py-4">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="block py-3 text-base text-ink">
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-3">
              <a href={SITE.airbnbUrl} target="_blank" rel="noopener noreferrer" className="btn-primary w-full">
                <AirbnbIcon className="h-4 w-4" /> Reservar no Airbnb
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
