import { useFadeIn } from "@/hooks/useFadeIn";
import { MessageCircle, Award, TrendingUp, Store } from "lucide-react";

const WA_URL = "https://wa.me/5511922220202?text=Gostei%20dos%20planos%20para%20an%C3%BAncios%20do%20Instagram%2C%20e%20gostaria%20de%20falar%20sobre!";

const stats = [
  { icon: Award, value: "+5", unit: "anos", label: "em e-commerce" },
  { icon: TrendingUp, value: "+200", unit: "", label: "anúncios criados" },
  { icon: Store, value: "3", unit: "", label: "marketplaces" },
];

const AuthoritySection = () => {
  const { ref, visible } = useFadeIn();

  return (
    <section className="section-padding bg-foreground text-white overflow-hidden relative" ref={ref}>
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 blur-[100px] pointer-events-none" />

      <div className={`section-container relative z-10 fade-section ${visible ? "visible" : ""}`}>
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10 sm:mb-14">
            <p className="tag-label mb-4">Por que eu?</p>
            <h2 className="heading-lg text-white leading-tight">
              Cada imagem resolve um problema de venda.{" "}
              <span className="text-primary">Não "fica bonita".</span>
            </h2>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 sm:gap-5 mb-10 sm:mb-14">
            {stats.map(({ icon: Icon, value, unit, label }) => (
              <div
                key={label}
                className="rounded-2xl bg-white/[0.04] border border-white/10 p-4 sm:p-6 text-center"
              >
                <Icon className="h-5 w-5 text-primary mx-auto mb-3" />
                <p className="text-2xl sm:text-3xl font-black text-white leading-none">
                  {value}
                  {unit && (
                    <span className="text-xs sm:text-sm font-medium text-white/40 ml-1">{unit}</span>
                  )}
                </p>
                <p className="text-[11px] sm:text-xs text-white/40 mt-1.5 font-medium">{label}</p>
              </div>
            ))}
          </div>

          {/* CTA Card */}
          <div className="rounded-2xl bg-gradient-to-r from-primary/15 via-primary/10 to-transparent border border-primary/20 p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-5 sm:gap-8">
            <div className="flex-1 text-center sm:text-left">
              <p className="text-base sm:text-lg font-semibold text-white mb-1">
                Pronto pra vender mais?
              </p>
              <p className="text-sm text-white/40">Conversa rápida, sem compromisso.</p>
            </div>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="flex-shrink-0 w-full sm:w-auto">
              <button className="btn-primary w-full sm:w-auto animate-pulse-soft">
                <MessageCircle className="h-5 w-5" />
                Falar no WhatsApp
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;
