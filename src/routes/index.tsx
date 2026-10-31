import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { Header } from "@/components/site/Header";
import { About, Amenities, Footer, Gallery, Hero, Location } from "@/components/site/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Galvanini Homes — Hospedagem de temporada" },
      {
        name: "description",
        content: "Conforto, praticidade e uma experiência única para sua estadia. Reserve a Galvanini Homes no Airbnb.",
      },
      { property: "og:title", content: "Galvanini Homes — Seu lugar longe de casa" },
      {
        property: "og:description",
        content: "Hospedagem de temporada aconchegante, moderna e completamente equipada.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  // Animações discretas de entrada
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    els.forEach((el) => io.observe(el));
    document.documentElement.classList.add("js-reveal");
    return () => io.disconnect();
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Gallery />
        <Amenities />
        <Location />
      </main>
      <Footer />
    </>
  );
}
