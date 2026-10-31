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
/** Lê a URL de um arquivo de foto enviado. */
const assetUrl = (a: unknown) => (a as { url: string }).url;

/**
 * ============================================================
 *  CONFIGURAÇÃO CENTRAL DO SITE — GALVANINI HOMES
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
  name: "Galvanini Homes",
  // LINK DO ANÚNCIO NO AIRBNB — substitua pelo link real
  airbnbUrl: "https://www.airbnb.com.br/",
  // LINK DO MAPA (Google Maps) — substitua pelo endereço real
  mapUrl: "https://www.google.com/maps",
  contact: {
    whatsappLabel: "(12) 99999-9999",
    whatsappUrl: "https://wa.me/5512999999999",
    instagramLabel: "@galvaninihomes",
    instagramUrl: "https://instagram.com/galvaninihomes",
    email: "contato@galvaninihomes.com",
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
  hero: { src: assetUrl(salaSofa), alt: "Sala de estar da Galvanini Homes", label: "Foto principal — Sala de estar" } as Photo,

  // FOTO DE DESTAQUE DO QUARTO (seção Sobre)
  about: { src: assetUrl(quartoDestaque), alt: "Quarto aconchegante da Galvanini Homes", label: "Foto de destaque — Quarto" } as Photo,

  // GALERIA PRINCIPAL — 5 fotos
  gallery: [
    // FOTO DA COZINHA
    { src: assetUrl(cozinha), alt: "Cozinha completa", label: "Cozinha" },
    // FOTO DA SALA DE ESTAR
    { src: assetUrl(salaSofa2), alt: "Sala de estar", label: "Sala de estar" },
    // FOTO DO QUARTO
    { src: assetUrl(quarto), alt: "Quarto", label: "Quarto" },
    // FOTO DO BANHEIRO
    { src: assetUrl(banheiro), alt: "Banheiro", label: "Banheiro" },
    // FOTO DA VARANDA
    { src: assetUrl(varanda), alt: "Varanda com vista para a natureza", label: "Varanda" },
  ] as Photo[],

  // GALERIA COMPLETA — fotos extras exibidas em "Ver todas as fotos"
  // Adicione ou remova itens à vontade.
  extra: [
    { src: assetUrl(salaTv), alt: "Sala com TV e entrada", label: "Sala de estar" },
    { src: assetUrl(quarto2), alt: "Quarto com ventilador", label: "Quarto" },
    { src: assetUrl(salaSofa), alt: "Sofá da sala", label: "Sala de estar" },
    { src: assetUrl(areaServico), alt: "Área de serviço", label: "Área de serviço" },
  ] as Photo[],
};
