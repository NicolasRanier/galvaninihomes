import { useState } from "react";
import { AirVent, BedDouble, CookingPot, Images, Mail, MapPin, Wifi, Instagram, X } from "lucide-react";
import { NAV_LINKS, PHOTOS, SITE, type Photo } from "@/config/site";
import { ImageSlot } from "./ImageSlot";
import { Lightbox } from "./Lightbox";
import { MapIllustration } from "./MapIllustration";
import { AirbnbIcon, Logo, WhatsAppIcon } from "./icons";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}

/* ---------------- HERO ---------------- */
export function Hero() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden">
      {/* FOTO PRINCIPAL DA SALA DE ESTAR — ocupa o fundo */}
      <ImageSlot
        photo={PHOTOS.hero}
        eager
        className="absolute inset-0 -z-10"
        imgClassName="object-[center_65%]"
        placeholderClassName="justify-end pb-6 md:justify-center md:pb-4 md:pl-[50%]"
      />
      <div className="hero-fade absolute inset-0 -z-10" aria-hidden="true" />
      <div className="container-site flex min-h-[460px] items-center py-20 md:min-h-[520px]">
        <div className="max-w-md" data-reveal>
          <h1 className="font-display text-5xl leading-[1.05] text-primary md:text-6xl">
            Seu lugar <br /> longe de casa.
          </h1>
          <p className="mt-6 max-w-sm text-lg leading-relaxed text-ink">
            Conforto, praticidade e uma experiência única para sua estadia.
          </p>
          <a href={SITE.airbnbUrl} target="_blank" rel="noopener noreferrer" className="btn-primary mt-8">
            <AirbnbIcon className="h-4 w-4" /> Reservar no Airbnb
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- SOBRE ---------------- */
export function About() {
  return (
    <section id="sobre" className="section">
      <div className="container-narrow grid items-center gap-10 md:grid-cols-2 md:gap-16">
        <div data-reveal>
          <Eyebrow>Sobre</Eyebrow>
          <h2 className="heading-lg mt-3">
            Bem-vindo à <br className="hidden md:block" /> Galvinini Homes
          </h2>
          <p className="mt-5 max-w-sm leading-relaxed text-ink/85">
            Oferecemos um espaço acolhedor, moderno e completamente equipado para que você tenha uma estadia
            incrível, seja a trabalho ou lazer.
          </p>
          <a href="#fotos" className="btn-outline mt-7">
            Saiba mais
          </a>
        </div>
        {/* FOTO DE DESTAQUE DO QUARTO */}
        <div data-reveal className="img-hover overflow-hidden rounded-lg shadow-soft">
          <ImageSlot photo={PHOTOS.about} className="aspect-[16/9] w-full" />
        </div>
      </div>
    </section>
  );
}

/* ---------------- GALERIA ---------------- */
export function Gallery() {
  const all: Photo[] = [...PHOTOS.gallery, ...PHOTOS.extra];
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  return (
    <section id="fotos" className="pb-16 md:pb-20">
      <div className="container-site text-center" data-reveal>
        <Eyebrow>Fotos</Eyebrow>
        <h2 className="heading-lg mt-2">Conheça o espaço</h2>
      </div>

      <ul className="gallery-track container-site mt-8" data-reveal>
        {PHOTOS.gallery.map((photo, i) => (
          <li key={photo.alt} className="gallery-item">
            <button
              onClick={() => setLightbox(i)}
              aria-label={`Ampliar foto: ${photo.label}`}
              className="img-hover block w-full overflow-hidden rounded-md"
            >
              <ImageSlot photo={photo} className="aspect-square w-full" />
            </button>
          </li>
        ))}
      </ul>

      <div className="mt-6 text-center">
        <button onClick={() => setShowAll(true)} className="btn-outline btn-sm">
          <Images className="h-4 w-4" /> Ver todas as fotos
        </button>
      </div>

      {showAll && (
        <div role="dialog" aria-modal="true" aria-label="Todas as fotos" className="fixed inset-0 z-[55] overflow-y-auto bg-background animate-in fade-in duration-300">
          <div className="container-site py-6">
            <div className="flex items-center justify-between">
              <div>
                <Eyebrow>Galeria completa</Eyebrow>
                <h2 className="heading-lg mt-1">Todas as fotos</h2>
              </div>
              <button aria-label="Fechar galeria" onClick={() => setShowAll(false)} className="btn-outline h-11 w-11 p-0">
                <X className="h-5 w-5" />
              </button>
            </div>
            <ul className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
              {all.map((photo, i) => (
                <li key={photo.alt} className={i === 0 ? "col-span-2 row-span-2" : ""}>
                  <button
                    onClick={() => setLightbox(i)}
                    aria-label={`Ampliar foto: ${photo.label}`}
                    className="img-hover block h-full w-full overflow-hidden rounded-md"
                  >
                    <ImageSlot photo={photo} className="aspect-[4/3] h-full w-full" />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      <Lightbox photos={all} index={lightbox} onClose={() => setLightbox(null)} onChange={setLightbox} />
    </section>
  );
}

/* ---------------- COMODIDADES ---------------- */
const AMENITIES = [
  { icon: Wifi, title: "Wi-Fi rápido", text: "Internet de alta velocidade" },
  { icon: BedDouble, title: "Quartos confortáveis", text: "Camas confortáveis e roupa de cama inclusa" },
  { icon: CookingPot, title: "Cozinha completa", text: "Utensílios e eletrodomésticos à sua disposição" },
  { icon: AirVent, title: "Ar-condicionado", text: "Ambientes climatizados para seu conforto" },
  { icon: MapPin, title: "Ótima localização", text: "Próximo a mercados, restaurantes e atrações" },
];

export function Amenities() {
  return (
    <section id="comodidades" className="pb-12 md:pb-14">
      <div className="container-site text-center" data-reveal>
        <Eyebrow>Comodidades</Eyebrow>
        <h2 className="heading-lg mt-2">Tudo que você precisa</h2>
      </div>
      <ul className="container-site mt-10 grid grid-cols-2 gap-y-10 sm:grid-cols-3 lg:grid-cols-5" data-reveal>
        {AMENITIES.map(({ icon: Icon, title, text }) => (
          <li key={title} className="amenity">
            <Icon className="mx-auto h-7 w-7 text-primary" strokeWidth={1.4} />
            <h3 className="mt-4 text-sm font-semibold text-ink">{title}</h3>
            <p className="mx-auto mt-2 max-w-[170px] text-xs leading-relaxed text-ink/75">{text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

/* ---------------- LOCALIZAÇÃO ---------------- */
export function Location() {
  return (
    <section id="localizacao" className="pb-4">
      <div className="container-site" data-reveal>
        <div className="grid items-center gap-8 overflow-hidden rounded-xl bg-sand p-6 md:grid-cols-2 md:p-4 md:pl-12">
          <div className="md:py-4">
            <Eyebrow>Localização</Eyebrow>
            <h2 className="heading-md mt-2">Localização estratégica</h2>
            <p className="mt-3 text-sm text-ink/80">Fácil acesso e perto de tudo que você precisa.</p>
            <a href={SITE.mapUrl} target="_blank" rel="noopener noreferrer" className="btn-outline btn-sm mt-5">
              <MapPin className="h-4 w-4" /> Ver no mapa
            </a>
          </div>
          <div className="h-44 overflow-hidden rounded-lg md:h-36">
            <MapIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */
export function Footer() {
  const { contact } = SITE;
  return (
    <footer id="contato" className="mt-4 bg-cream pt-12">
      <div className="container-site grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1.2fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 text-sm text-ink">Sua casa, onde você estiver.</p>
        </div>
        <nav aria-label="Rodapé">
          <h3 className="footer-title">Navegação</h3>
          <ul className="mt-3 space-y-1.5">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="footer-link">{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <h3 className="footer-title">Contato</h3>
          <ul className="mt-3 space-y-3 text-sm">
            <li>
              <a href={contact.whatsappUrl} target="_blank" rel="noopener noreferrer" className="footer-link inline-flex items-center gap-2">
                <WhatsAppIcon className="h-4 w-4" /> {contact.whatsappLabel}
              </a>
            </li>
            <li>
              <a href={contact.instagramUrl} target="_blank" rel="noopener noreferrer" className="footer-link inline-flex items-center gap-2">
                <Instagram className="h-4 w-4" strokeWidth={1.6} /> {contact.instagramLabel}
              </a>
            </li>
            <li>
              <a href={`mailto:${contact.email}`} className="footer-link inline-flex items-center gap-2 break-all">
                <Mail className="h-4 w-4 shrink-0" strokeWidth={1.6} /> {contact.email}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="footer-title">Reserve agora</h3>
          <p className="mt-3 text-sm leading-relaxed text-ink/85">
            Faça já sua reserva pelo Airbnb e garanta sua estadia.
          </p>
          <a href={SITE.airbnbUrl} target="_blank" rel="noopener noreferrer" className="btn-primary mt-4">
            <AirbnbIcon className="h-4 w-4" /> Reservar no Airbnb
          </a>
        </div>
      </div>
      <p className="mt-10 border-t border-border py-5 text-center text-xs text-ink/70">
        © 2024 Galvinini Homes. Todos os direitos reservados.
      </p>
    </footer>
  );
}
