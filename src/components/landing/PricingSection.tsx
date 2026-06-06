import { useFadeIn } from "@/hooks/useFadeIn";
import { Check, Star, Rocket, MessageCircle } from "lucide-react";

const WA_URL = "https://wa.me/5511922220202?text=Gostei%20dos%20pacotes%20de%20Imagens%2C%20e%20gostaria%20de%20falar%20sobre!";

const plans = [
  {
    name: "Essencial",
    subtitle: "Ideal para começar campanhas",
    price: "447",
    unit: "por anúncio",
    features: [
      "1 anúncio estratégico",
      "Até 5 imagens por anúncio",
      "Fundo neutro e profissional",
      "Tratamento e padronização",
      "Ajustes de luz e cor",
    ],
    pack: null,
    installments: null,
    pix: null,
    highlight: false,
    badge: null,
  },
  {
    name: "Performance",
    subtitle: "Criativos pensados para conversão",
    price: "397",
    unit: "por anúncio",
    pack: "Pacote com 10 anúncios — Total R$ 3.970",
    features: [
      "10 anúncios estratégicos",
      "Até 8 imagens por anúncio",
      "Neutro + Ambientado",
      "Hooks visuais de atração",
      "3 fotos com chamadas estratégicas",
    ],
    installments: "10x de R$ 397 no cartão",
    pix: "10% de desconto no Pix",
    highlight: true,
    badge: "Mais vendido",
  },
  {
    name: "Volume",
    subtitle: "Mais quantidade, melhor custo-benefício",
    price: "347",
    unit: "por anúncio",
    pack: "Pacote com 20 anúncios — Total R$ 6.940",
    features: [
      "20 anúncios estratégicos",
      "Até 8 imagens por anúncio",
      "Tudo do plano Performance",
      "Melhor valor por volume",
      "Ideal para operações em escala",
    ],
    installments: "10x de R$ 694 no cartão",
    pix: "10% de desconto no Pix",
    highlight: false,
    badge: "Melhor valor",
  },
];

const PricingSection = () => {
  const { ref, visible } = useFadeIn();

  return (
    <section id="planos" className="section-padding bg-background" ref={ref}>
      <div className={`section-container fade-section ${visible ? "visible" : ""}`}>
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-10 sm:mb-16 flex flex-col sm:flex-row gap-5 sm:gap-10 sm:items-end">
          <div className="sm:border-r sm:border-border sm:pr-10 flex-shrink-0">
            <p className="text-3xl sm:text-4xl font-light text-primary leading-tight" style={{ fontFamily: 'Montserrat, system-ui, sans-serif' }}>Pacotes de</p>
            <p className="text-4xl sm:text-6xl font-black italic text-primary leading-none" style={{ fontFamily: 'Montserrat, system-ui, sans-serif' }}>Imagens</p>
          </div>
          <div className="flex-1">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground leading-tight" style={{ fontFamily: 'Montserrat, system-ui, sans-serif' }}>
              Você não tem só um anúncio.
              <br />
              <span className="text-primary">Você tem uma vitrine inteira para vender.</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 max-w-5xl mx-auto items-stretch">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative rounded-2xl p-6 sm:p-8 flex flex-col transition-all duration-300 ${
                plan.highlight
                  ? "bg-primary text-white shadow-2xl md:scale-105"
                  : "bg-card border border-border shadow-[var(--shadow-card)] card-hover"
              } ${i === 0 ? "md:order-none" : ""}`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className={`absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-4 py-1 rounded-full text-xs font-bold ${
                  plan.highlight ? "bg-white text-primary" : "bg-primary text-white"
                }`}>
                  {plan.highlight ? <Star className="h-3 w-3 fill-current" /> : <Rocket className="h-3 w-3" />}
                  {plan.badge}
                </div>
              )}

              {/* Plan name */}
              <div className="mb-5">
                <h3 className={`text-lg font-bold mb-1 ${plan.highlight ? "text-white" : "text-foreground"}`} style={{ fontFamily: 'Montserrat, system-ui, sans-serif' }}>
                  {plan.name}
                </h3>
                <p className={`text-sm ${plan.highlight ? "text-white/75" : "text-muted-foreground"}`}>
                  {plan.subtitle}
                </p>
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className={`text-4xl sm:text-5xl font-black ${plan.highlight ? "text-white" : "text-foreground"}`} style={{ fontFamily: 'Montserrat, system-ui, sans-serif' }}>
                    R${plan.price}
                  </span>
                  <span className={`text-sm ${plan.highlight ? "text-white/60" : "text-muted-foreground"}`}>
                    {plan.unit}
                  </span>
                </div>
                {plan.pack && (
                  <p className={`text-xs mt-1.5 font-medium ${plan.highlight ? "text-white/70" : "text-muted-foreground"}`}>
                    {plan.pack}
                  </p>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-2.5 flex-1 mb-6">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2.5">
                    <div className={`flex-shrink-0 mt-0.5 h-4 w-4 rounded-full flex items-center justify-center ${
                      plan.highlight ? "bg-white/20" : "bg-primary/10"
                    }`}>
                      <Check className={`h-2.5 w-2.5 ${plan.highlight ? "text-white" : "text-primary"}`} />
                    </div>
                    <span className={`text-sm ${plan.highlight ? "text-white/85" : "text-muted-foreground"}`}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Payment info */}
              {plan.installments && (
                <div className={`rounded-xl p-3.5 mb-5 ${plan.highlight ? "bg-white/10" : "bg-secondary"}`}>
                  <p className={`text-xs font-semibold mb-0.5 ${plan.highlight ? "text-white/80" : "text-muted-foreground"}`}>
                    {plan.installments}
                  </p>
                  {plan.pix && (
                    <p className={`text-sm font-bold ${plan.highlight ? "text-white" : "text-primary"}`}>
                      ✓ {plan.pix}
                    </p>
                  )}
                </div>
              )}

              {/* CTA */}
              <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="mt-auto">
                <button className={`w-full h-12 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-200 ${
                  plan.highlight
                    ? "bg-white text-primary hover:bg-white/90"
                    : "bg-primary text-white hover:bg-primary/90"
                }`}>
                  <MessageCircle className="h-4 w-4" />
                  Quero este plano
                </button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
