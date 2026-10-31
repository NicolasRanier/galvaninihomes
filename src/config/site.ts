import salaTv from "@/assets/sala-tv.jpg.asset.json";
import salaSofa2 from "@/assets/sala-sofa-2.jpg.asset.json";
import quarto from "@/assets/quarto.jpg.asset.json";
import quarto2 from "@/assets/quarto-2.jpg.asset.json";
import quartoDestaque from "@/assets/quarto-destaque.jpg.asset.json";
import cozinha from "@/assets/cozinha.jpg.asset.json";
import varanda from "@/assets/varanda.jpg.asset.json";
import areaServico from "@/assets/area-servico.jpg.asset.json";
import banheiro from "@/assets/banheiro.jpg.asset.json";
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
  about: { src: quartoDestaque.url, alt: "Quarto aconchegante da Galvinini Homes", label: "Foto de destaque — Quarto" } as Photo,

  // GALERIA PRINCIPAL — 5 fotos
  gallery: [
    // FOTO DA COZINHA
    { src: cozinha.url, alt: "Cozinha completa", label: "Cozinha" },
    // FOTO DA SALA DE ESTAR
    { src: salaSofa2.url, alt: "Sala de estar", label: "Sala de estar" },
    // FOTO DO QUARTO
    { src: quarto.url, alt: "Quarto", label: "Quarto" },
    // FOTO DO BANHEIRO
    { src: banheiro.url, alt: "Banheiro", label: "Banheiro" },
    // FOTO DA VARANDA
    { src: varanda.url, alt: "Varanda com vista para a natureza", label: "Varanda" },
  ] as Photo[],

  // GALERIA COMPLETA — fotos extras exibidas em "Ver todas as fotos"
  // Adicione ou remova itens à vontade.
  extra: [
    { src: salaTv.url, alt: "Sala com TV e entrada", label: "Sala de estar" },
    { src: quarto2.url, alt: "Quarto com ventilador", label: "Quarto" },
    { src: salaSofa.url, alt: "Sofá da sala", label: "Sala de estar" },
    { src: areaServico.url, alt: "Área de serviço", label: "Área de serviço" },
  ] as Photo[],
};
