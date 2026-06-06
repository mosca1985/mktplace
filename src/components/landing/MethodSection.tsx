import { useFadeIn } from "@/hooks/useFadeIn";
import { Camera, Image, BarChart3, Zap, Palette } from "lucide-react";

const steps = [
  { icon: Camera, num: "01", title: "Neutras", desc: "Fundo limpo e profissional que destaca o produto." },
  { icon: Image, num: "02", title: "Ambientadas", desc: "Cenários que criam desejo e contexto de uso." },
  { icon: BarChart3, num: "03", title: "Infográficos", desc: "Informações visuais que eliminam objeções." },
  { icon: Zap, num: "04", title: "Hooks", desc: "Abertura que para o scroll em menos de 1 segundo." },
  { icon: Palette, num: "05", title: "Branding", desc: "Identidade visual consistente que escala." },
];

const MethodSection = () => {
  const { ref, visible } = useFadeIn();

  return (
    <section id="metodo" className="section-padding bg-background" ref={ref}>
      <div className={`section-container fade-section ${visible ? "visible" : ""}`}>
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <p className="tag-label mb-4">O Método</p>
          <h2 className="heading-lg text-foreground mb-3 sm:mb-4">
            Imagens que <span className="text-primary">vendem!</span>
          </h2>
          <p className="text-body">
            Estrutura visual estratégica que guia o cliente do clique à compra.
          </p>
        </div>

        {/* Mobile: scroll horizontal */}
        <div className="flex overflow-x-auto gap-3 pb-3 -mx-5 px-5 sm:mx-0 sm:px-0 sm:hidden scrollbar-none">
          {steps.map((s, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[160px] rounded-2xl border border-border bg-card p-4 text-center shadow-[var(--shadow-card)]"
            >
              <div className="mx-auto mb-3 h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <s.icon className="h-5 w-5 text-primary" />
              </div>
              <p className="text-[10px] font-bold text-primary/50 mb-0.5 tracking-widest">{s.num}</p>
              <h3 className="font-bold text-foreground text-sm mb-1">{s.title}</h3>
              <p className="text-[11px] text-muted-foreground leading-snug">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Desktop: grid */}
        <div className="hidden sm:grid sm:grid-cols-5 gap-4 lg:gap-6">
          {steps.map((s, i) => (
            <div
              key={i}
              className="group rounded-2xl border border-border bg-card p-5 text-center shadow-[var(--shadow-card)] card-hover"
            >
              <div className="mx-auto mb-4 h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                <s.icon className="h-6 w-6 text-primary" />
              </div>
              <p className="text-[10px] font-bold text-primary/40 mb-1 tracking-widest">{s.num}</p>
              <h3 className="font-bold text-foreground text-sm lg:text-base mb-1.5">{s.title}</h3>
              <p className="text-xs text-muted-foreground leading-snug">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodSection;
