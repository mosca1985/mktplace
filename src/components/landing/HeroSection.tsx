import heroMockup from "@/assets/hero-mockup.jpg";

const WA_URL = "https://wa.me/5511922220202?text=Gostei%20dos%20planos%20para%20an%C3%BAncios%20do%20Instagram%2C%20e%20gostaria%20de%20falar%20sobre!";

const HeroSection = () => {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden bg-foreground">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroMockup}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-foreground/95 via-foreground/85 to-foreground/60" />
        <div className="absolute bottom-0 right-0 w-[50vw] h-[50vw] rounded-full bg-primary/15 blur-[100px] pointer-events-none" />
        <div className="absolute top-0 left-0 w-[30vw] h-[30vw] rounded-full bg-primary/8 blur-[80px] pointer-events-none" />
      </div>

      <div className="section-container relative z-10 py-20 sm:py-32 lg:py-36">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="tag-label mb-7 sm:mb-10 animate-fade-in-up" style={{ animationDelay: "0s" }}>
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            Especialista em conversão visual
          </div>

          {/* Headline */}
          <h1 className="heading-xl text-white mb-5 sm:mb-6 animate-fade-in-up" style={{ animationDelay: "0.12s" }}>
            Seu produto não vende.{" "}
            <span className="text-primary">Sua imagem também não.</span>
          </h1>

          {/* Sub */}
          <p className="text-base sm:text-xl text-white/60 max-w-xl mb-10 sm:mb-12 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.22s" }}>
            Imagens e clips estratégicos que transformam anúncios em
            máquinas de conversão no Shopee, Mercado Livre e Amazon.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-in-up" style={{ animationDelay: "0.32s" }}>
            <a href="#calculadora" className="w-full sm:w-auto">
              <button className="btn-primary w-full sm:w-auto animate-pulse-soft">
                Calcular meu orçamento →
              </button>
            </a>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <button className="btn-outline w-full sm:w-auto border-white/25 text-white hover:bg-white/5 hover:border-white/40">
                Falar no WhatsApp
              </button>
            </a>
          </div>

          {/* Social proof */}
          <div className="mt-10 sm:mt-14 flex flex-wrap items-center gap-3 sm:gap-5 animate-fade-in-up" style={{ animationDelay: "0.42s" }}>
            <span className="flex items-center gap-2 text-white/40 text-xs sm:text-sm font-medium">
              <span className="h-1.5 w-1.5 rounded-full bg-primary/70" />
              +200 anúncios otimizados
            </span>
            <span className="h-4 w-px bg-white/15 hidden sm:block" />
            <span className="flex items-center gap-2 text-white/40 text-xs sm:text-sm font-medium">
              <span className="h-1.5 w-1.5 rounded-full bg-primary/70" />
              Shopee · Mercado Livre · Amazon
            </span>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroSection;
