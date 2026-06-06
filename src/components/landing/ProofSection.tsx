import { useState, useRef, useCallback } from "react";
import { useFadeIn } from "@/hooks/useFadeIn";
import { ChevronLeft, ChevronRight } from "lucide-react";
import panela2 from "@/assets/panela-branca-2.png";
import panela5 from "@/assets/panela-branca-5.png";
import cafe from "@/assets/portfolio-cafe.jpg";
import panelaAzul from "@/assets/portfolio-panela-azul.jpg";
import potes from "@/assets/portfolio-potes.jpg";
import vinho from "@/assets/portfolio-vinho.jpg";
import lixeiraPreta from "@/assets/portfolio-lixeira-preta.jpg";
import tapioca from "@/assets/portfolio-tapioca.jpg";
import jarra from "@/assets/portfolio-jarra.jpg";
import lixeiraInox from "@/assets/portfolio-lixeira-inox.jpg";

const allImages = [
  { src: panela2, alt: "Panela antiaderente com ovo e legumes", label: "Hook visual" },
  { src: cafe, alt: "Xícaras de café parede dupla", label: "Lifestyle" },
  { src: panelaAzul, alt: "Panela azul em todos os fogões", label: "Comparativo" },
  { src: panela5, alt: "Panela com tampa de vidro", label: "Ambientada" },
  { src: potes, alt: "Potes de vidro organizadores", label: "Composição" },
  { src: vinho, alt: "Taças para diferentes vinhos", label: "Elegância" },
  { src: lixeiraPreta, alt: "Lixeira aço inox preta", label: "Detalhes" },
  { src: tapioca, alt: "Antes e depois tapioqueira", label: "Antes/Depois" },
  { src: jarra, alt: "Jarra para bebidas quentes e frias", label: "Split screen" },
  { src: lixeiraInox, alt: "Lixeira inox uso diário", label: "Ambientação" },
];

const ProofSection = () => {
  const { ref, visible } = useFadeIn();
  const doubled = [...allImages, ...allImages];

  return (
    <section className="section-padding bg-secondary overflow-hidden" ref={ref}>
      <div className={`fade-section ${visible ? "visible" : ""}`}>
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-14 px-5">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Portfólio</p>
          <h2 className="heading-lg text-foreground mb-3 sm:mb-4">
            Resultados reais,<br /> <span className="text-primary">que vendem de verdade</span>
          </h2>
          <p className="text-body">Cada imagem foi estrategicamente criada para converter cliques em vendas.</p>
        </div>

        {/* Mobile: Carousel with arrows */}
        <div className="sm:hidden">
          <MobileCarousel />
        </div>

        {/* Desktop: Marquee */}
        <div className="hidden sm:block relative w-full">
          <div className="flex gap-4 animate-marquee w-max">
            {doubled.map((item, i) => (
              <div
                key={i}
                className="relative flex-shrink-0 w-[280px] md:w-[320px] rounded-2xl overflow-hidden shadow-[var(--shadow-card)] group"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="w-full aspect-[4/5] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                    {item.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quote */}
        <p className="text-center mt-8 sm:mt-14 text-sm sm:text-base text-muted-foreground max-w-lg mx-auto px-5">
          "\"Você não precisa de mais tráfego."
          <br />
          "Precisa de "
          <strong className="text-foreground">mais conversão</strong>
          ".\""
        </p>

        {/* CTA to pricing */}
        <div className="flex justify-center mt-6 sm:mt-8 px-5">
          <a
            href="#planos"
            className="inline-flex items-center gap-2 h-12 px-7 rounded-xl bg-primary text-primary-foreground text-sm sm:text-base font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
          >
            Ver pacotes de imagens
            <ChevronRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

const MobileCarousel = () => {
  const [current, setCurrent] = useState(0);
  const touchStart = useRef(0);
  const touchEnd = useRef(0);
  const total = allImages.length;

  const prev = useCallback(() => setCurrent((c) => (c - 1 + total) % total), [total]);
  const next = useCallback(() => setCurrent((c) => (c + 1) % total), [total]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStart.current = e.targetTouches[0].clientX;
  };
  const onTouchMove = (e: React.TouchEvent) => {
    touchEnd.current = e.targetTouches[0].clientX;
  };
  const onTouchEnd = () => {
    const diff = touchStart.current - touchEnd.current;
    if (Math.abs(diff) > 50) {
      diff > 0 ? next() : prev();
    }
  };

  const item = allImages[current];

  return (
    <div className="px-4">
      {/* Image container */}
      <div
        className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-card)] mx-auto max-w-[340px]"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <img
          src={item.src}
          alt={item.alt}
          className="w-full aspect-[4/5] object-cover transition-opacity duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />

        {/* Label */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <span className="inline-block bg-primary text-primary-foreground text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
            {item.label}
          </span>
        </div>

        {/* Arrow buttons */}
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center shadow-md active:scale-95 transition-transform"
          aria-label="Anterior"
        >
          <ChevronLeft className="h-5 w-5 text-foreground" />
        </button>
        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center shadow-md active:scale-95 transition-transform"
          aria-label="Próximo"
        >
          <ChevronRight className="h-5 w-5 text-foreground" />
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-1.5 mt-4">
        {allImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current ? "w-6 bg-primary" : "w-2 bg-muted-foreground/30"
            }`}
            aria-label={`Foto ${i + 1}`}
          />
        ))}
      </div>

      {/* Counter */}
      <p className="text-center text-xs text-muted-foreground mt-2">
        {current + 1} / {total}
      </p>
    </div>
  );
};

export default ProofSection;
