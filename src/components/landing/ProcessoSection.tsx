import { useFadeIn } from "@/hooks/useFadeIn";
import { CreditCard, ListOrdered, Clock, CheckCircle2 } from "lucide-react";

const steps = [
  {
    icon: ListOrdered,
    num: "01",
    title: "Escolha o pacote",
    desc: "Fotos, clips ou os dois. Defina a quantidade e veja o preço cair automaticamente.",
    accent: "bg-primary/10 text-primary",
  },
  {
    icon: CreditCard,
    num: "02",
    title: "Confirme o pagamento",
    desc: "Pix (10% OFF) ou cartão. Confirmado o pagamento, entra na fila.",
    accent: "bg-primary/10 text-primary",
  },
  {
    icon: ListOrdered,
    num: "03",
    title: "Fila de produção",
    desc: "Primeiro a pagar, primeiro a receber. Você recebe a confirmação de entrada na fila.",
    accent: "bg-primary/10 text-primary",
  },
  {
    icon: Clock,
    num: "04",
    title: "Prazo de entrega",
    desc: "1ª prova em até 9 dias úteis após o pagamento. Revise e solicite ajustes.",
    accent: "bg-orange-100 text-orange-600",
    highlight: true,
  },
];

export const ProcessoSection = () => {
  const { ref, visible } = useFadeIn();

  return (
    <section className="section-padding bg-foreground text-white relative overflow-hidden" ref={ref}>
      {/* Glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[300px] bg-primary/8 blur-[100px] pointer-events-none" />

      <div className={`section-container relative z-10 fade-section ${visible ? "visible" : ""}`}>
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <p className="tag-label mb-4">Como funciona</p>
          <h2 className="heading-lg text-white mb-3">
            Do pedido à entrega,{" "}
            <span className="text-primary">sem surpresas</span>
          </h2>
          <p className="text-white/50 text-base sm:text-lg leading-relaxed">
            Simples, transparente e com prazo garantido.
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-4xl mx-auto">
          {/* Desktop: linha horizontal com seta */}
          <div className="hidden md:grid md:grid-cols-4 gap-4 relative mb-4">
            {/* Linha conectora */}
            <div className="absolute top-8 left-[12.5%] right-[12.5%] h-px bg-white/10 z-0" />
            {steps.map((s, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center">
                <div className={`h-16 w-16 rounded-2xl flex items-center justify-center mb-4 border ${
                  s.highlight
                    ? "bg-primary/15 border-primary/30"
                    : "bg-white/[0.04] border-white/10"
                }`}>
                  <s.icon className={`h-7 w-7 ${s.highlight ? "text-primary" : "text-white/60"}`} />
                </div>
                <p className={`text-[10px] font-bold tracking-widest mb-1.5 ${s.highlight ? "text-primary" : "text-white/30"}`}>{s.num}</p>
                <h3 className="font-bold text-white text-sm mb-2">{s.title}</h3>
                <p className="text-xs text-white/45 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          {/* Mobile: vertical */}
          <div className="md:hidden space-y-4">
            {steps.map((s, i) => (
              <div
                key={i}
                className={`rounded-2xl p-5 border flex gap-4 ${
                  s.highlight
                    ? "bg-primary/10 border-primary/25"
                    : "bg-white/[0.04] border-white/10"
                }`}
              >
                <div className={`flex-shrink-0 h-10 w-10 rounded-xl flex items-center justify-center ${
                  s.highlight ? "bg-primary/20" : "bg-white/[0.06]"
                }`}>
                  <s.icon className={`h-5 w-5 ${s.highlight ? "text-primary" : "text-white/50"}`} />
                </div>
                <div>
                  <p className={`text-[10px] font-bold tracking-widest mb-0.5 ${s.highlight ? "text-primary" : "text-white/30"}`}>{s.num}</p>
                  <h3 className="font-bold text-white text-sm mb-1">{s.title}</h3>
                  <p className="text-xs text-white/50 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Destaque do prazo */}
          <div className="mt-10 sm:mt-12 rounded-2xl bg-primary/10 border border-primary/25 p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-5 sm:gap-8 text-center sm:text-left">
            <div className="flex-shrink-0 h-14 w-14 rounded-2xl bg-primary/20 flex items-center justify-center">
              <CheckCircle2 className="h-8 w-8 text-primary" />
            </div>
            <div className="flex-1">
              <p className="text-white font-bold text-base sm:text-lg mb-1">
                Prazo garantido: <span className="text-primary">9 dias úteis</span>
              </p>
              <p className="text-white/50 text-sm leading-relaxed">
                A partir da confirmação do pagamento. <strong className="text-white/70">Dias úteis, não corridos.</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessoSection;
