import { useFadeIn } from "@/hooks/useFadeIn";
import { Package, Rocket, MessageCircle } from "lucide-react";

const WA_URL = "https://wa.me/5511922220202?text=Tenho+mais+de+10+produtos+e+quero+um+desconto+especial!";

const ScaleSection = () => {
  const { ref, visible } = useFadeIn();

  return (
    <section className="section-padding bg-secondary" ref={ref}>
      <div className={`section-container fade-section ${visible ? "visible" : ""}`}>
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <p className="tag-label mb-4">Escala</p>
          <h2 className="heading-lg text-foreground mb-3 sm:mb-4">
            Mais produtos,{" "}
            <span className="text-primary">mais economia!</span>
          </h2>
          <p className="text-body">Volume maior, desconto maior.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-2xl mx-auto mb-8">
          {[
            { icon: Package, pct: "-15%", label: "10+ produtos", desc: "Lojistas em crescimento" },
            { icon: Rocket, pct: "-25%", label: "20+ produtos", desc: "Operação em escala" },
          ].map((item, i) => (
            <div
              key={i}
              className="group rounded-2xl border border-border bg-card p-6 sm:p-8 text-center shadow-[var(--shadow-card)] card-hover"
            >
              <div className="mx-auto mb-4 h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <p className="text-4xl sm:text-5xl font-black text-primary mb-1">
                {item.pct}
              </p>
              <p className="text-base font-bold text-foreground mb-1">
                {item.label}
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <a href={WA_URL} target="_blank" rel="noopener noreferrer">
            <button className="btn-primary">
              <MessageCircle className="h-5 w-5" />
              Quero o desconto por volume
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ScaleSection;
