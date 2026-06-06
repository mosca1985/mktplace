import { useFadeIn } from "@/hooks/useFadeIn";
import { MessageCircle, Clock, Shield } from "lucide-react";

const WA_URL = "https://wa.me/5511922220202?text=Gostei%20dos%20planos%20para%20an%C3%BAncios%20do%20Instagram%2C%20e%20gostaria%20de%20falar%20sobre!";

const FinalCTA = () => {
  const { ref, visible } = useFadeIn();

  return (
    <section className="py-16 sm:py-28 bg-foreground text-white relative overflow-hidden" ref={ref}>
      {/* Glow bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-primary/15 blur-[80px] pointer-events-none" />

      <div className={`section-container relative z-10 fade-section ${visible ? "visible" : ""}`}>
        <div className="max-w-2xl mx-auto text-center">
          <p className="tag-label mb-6 mx-auto w-fit">Vamos começar?</p>

          <h2 className="heading-lg text-white mb-4 sm:mb-6 leading-tight">
            Transforme seus anúncios em{" "}
            <span className="text-primary">vendas reais</span>
          </h2>

          <p className="text-sm sm:text-base text-white/50 mb-8 sm:mb-10 max-w-md mx-auto leading-relaxed">
            Estratégia direto no WhatsApp. Sem formulários, sem espera, sem
            enrolação.
          </p>

          <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="inline-block mb-6">
            <button className="btn-primary animate-pulse-soft text-lg px-10 h-16">
              <MessageCircle className="h-6 w-6" />
              Falar no WhatsApp agora
            </button>
          </a>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 text-white/30 text-xs sm:text-sm font-medium">
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" />
              Resposta em até 2h
            </span>
            <span className="flex items-center gap-1.5">
              <Shield className="h-3.5 w-3.5" />
              Sem compromisso
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
