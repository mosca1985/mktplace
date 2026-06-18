import { useFadeIn } from "@/hooks/useFadeIn";
import { TrendingDown, Eye, Users, AlertTriangle } from "lucide-react";

const problems = [
  {
    icon: TrendingDown,
    title: "Poucos cliques",
    desc: "Anúncios invisíveis numa vitrine lotada de concorrentes.",
  },
  {
    icon: Eye,
    title: "Produto ignorado",
    desc: "O cliente rola o feed e nem percebe que você existe.",
  },
  {
    icon: Users,
    title: "Concorrente parece melhor",
    desc: "Não por ser melhor — apenas por ter imagem mais profissional.",
  },
  {
    icon: AlertTriangle,
    title: "Diferencial invisível",
    desc: "Seu produto é bom, mas a foto não comunica isso.",
  },
];

const ProblemSection = () => {
  const { ref, visible } = useFadeIn();

  return (
    <section className="section-padding bg-secondary" ref={ref}>
      <div className={`section-container fade-section ${visible ? "visible" : ""}`}>
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <p className="tag-label mb-4">O Problema</p>
          <h2 className="heading-lg text-foreground mb-3 sm:mb-4">
            Você está perdendo vendas{" "}
            <span className="text-primary">todos os dias!</span>
          </h2>
          <p className="text-body">
            Imagem fraca = cliente no concorrente. Simples assim.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 max-w-3xl mx-auto">
          {problems.map((p, i) => (
            <div
              key={i}
              className="group flex items-start gap-4 rounded-2xl bg-card border border-border p-5 sm:p-6 shadow-[var(--shadow-card)] card-hover"
            >
              <div className="flex-shrink-0 h-10 w-10 rounded-xl bg-destructive/10 flex items-center justify-center group-hover:bg-destructive/15 transition-colors">
                <p.icon className="h-5 w-5 text-destructive" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-sm sm:text-base mb-1">
                  {p.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
