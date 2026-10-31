import salaSofa from "@/assets/sala-sofa.jpg.asset.json";
/**
 * ============================================================
 *  CONFIGURAÇÃO CENTRAL DO SITE — GALVININI HOMES
 * ============================================================
 *  Todos os links e caminhos de fotos ficam aqui.
 *
 *  COMO TROCAR UMA FOTO:
 *  1. Coloque a imagem na pasta /public/images/ (ex.: /public/images/cozinha.jpg)
 *  2. Troque o `src: null` correspondente por `src: "/images/cozinha.jpg"`
 *  Enquanto `src` for null, o site mostra um espaço reservado (placeholder).
 * ============================================================
 */

export type Photo = {
  /** Caminho da imagem. null = espaço reservado */
  src: string | null;
  /** Texto alternativo (acessibilidade e SEO) */
  alt: string;
  /** Rótulo exibido no espaço reservado */
  label: string;
};

export const SITE = {
  name: "Galvinini Homes",
  // LINK DO ANÚNCIO NO AIRBNB — substitua pelo link real
  airbnbUrl: "https://www.airbnb.com.br/",
  // LINK DO MAPA (Google Maps) — substitua pelo endereço real
  mapUrl: "https://www.google.com/maps",
  contact: {
    whatsappLabel: "(12) 99999-9999",
    whatsappUrl: "https://wa.me/5512999999999",
    instagramLabel: "@galvininihomes",
    instagramUrl: "https://instagram.com/galvininihomes",
    email: "contato@galvininihomes.com",
  },
};

export const NAV_LINKS = [
  { label: "Sobre", href: "#sobre" },
  { label: "Fotos", href: "#fotos" },
  { label: "Comodidades", href: "#comodidades" },
  { label: "Localização", href: "#localizacao" },
  { label: "Contato", href: "#contato" },
];

export const PHOTOS = {
  // FOTO PRINCIPAL DA SALA DE ESTAR (fundo do topo da página)
  hero: { src: salaSofa.url, alt: "Sala de estar da Galvinini Homes", label: "Foto principal — Sala de estar" } as Photo,

  // FOTO DE DESTAQUE DO QUARTO (seção Sobre)
  about: { src: null, alt: "Quarto aconchegante da Galvinini Homes", label: "Foto de destaque — Quarto" } as Photo,

  // GALERIA PRINCIPAL — 5 fotos
  gallery: [
    // FOTO DA COZINHA
    { src: null, alt: "Cozinha completa", label: "Cozinha" },
    // FOTO DA SALA DE ESTAR
    { src: null, alt: "Sala de estar", label: "Sala de estar" },
    // FOTO DO QUARTO
    { src: null, alt: "Quarto", label: "Quarto" },
    // FOTO DO BANHEIRO
    { src: null, alt: "Banheiro", label: "Banheiro" },
    // FOTO DA VARANDA
    { src: null, alt: "Varanda com vista para a natureza", label: "Varanda" },
  ] as Photo[],

  // GALERIA COMPLETA — fotos extras exibidas em "Ver todas as fotos"
  // Adicione ou remova itens à vontade.
  extra: [
    { src: null, alt: "Foto adicional 1", label: "Foto adicional 1" },
    { src: null, alt: "Foto adicional 2", label: "Foto adicional 2" },
    { src: null, alt: "Foto adicional 3", label: "Foto adicional 3" },
    { src: null, alt: "Foto adicional 4", label: "Foto adicional 4" },
    { src: null, alt: "Foto adicional 5", label: "Foto adicional 5" },
    { src: null, alt: "Foto adicional 6", label: "Foto adicional 6" },
    { src: null, alt: "Foto adicional 7", label: "Foto adicional 7" },
  ] as Photo[],
};
