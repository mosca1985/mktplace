import { useFadeIn } from "@/hooks/useFadeIn";
import { Check, Camera, Video, ChevronRight } from "lucide-react";

const fotos = [
  "Fundo neutro profissional",
  "Foto ambientada (cenário de uso)",
  "Hook visual (para o scroll)",
  "Infográfico com benefícios",
  "Comparativo / detalhes do produto",
  "Imagem com chamada de texto",
  "Split screen ou antes e depois",
  "Variação de ângulo ou acabamento",
];

const clips = [
  "Roteiro estratégico incluso",
  "Hook de abertura (primeiros 3s)",
  "Apresentação do produto em movimento",
  "Trilha sonora licenciada",
  "Edição otimizada para retenção",
  "Legenda e texto animado",
  "Formato para Reels, TikTok e Ads",
  "Otimizado para loop automático",
];

export const ServicosSection = () => {
  const { ref, visible } = useFadeIn();

  return (
    <section className="section-padding bg-background" ref={ref}>
      <div className={`section-container fade-section ${visible ? "visible" : ""}`}>

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <p className="tag-label mb-4">O que você recebe</p>
          <h2 className="heading-lg text-foreground mb-3">
            Dois serviços,{" "}
            <span className="text-primary">um objetivo:</span>
            <br />vender mais
          </h2>
          <p className="text-body">
            Cada kit é pensado estrategicamente para converter — não apenas para "ficar bonito".
          </p>
        </div>

        {/* Duas colunas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 max-w-4xl mx-auto mb-10 sm:mb-14">

          {/* Kit Imagens */}
          <div className="rounded-2xl border border-border bg-card shadow-[var(--shadow-card)] overflow-hidden">
            {/* Header do card */}
            <div className="bg-foreground px-6 py-5 flex items-center gap-4">
              <div className="h-12 w-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Camera className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-white font-extrabold text-lg leading-tight">Kit de Imagens</p>
                <p className="text-white/50 text-sm mt-0.5">8 fotos estratégicas por produto</p>
              </div>
            </div>

            {/* Itens */}
            <div className="p-6">
              <ul className="space-y-3">
                {fotos.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-sm text-foreground leading-snug">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-5 border-t border-border">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Para <strong className="text-foreground">Shopee, Mercado Livre e Amazon</strong>.
                </p>
              </div>
            </div>
          </div>

          {/* Kit Clips */}
          <div className="rounded-2xl border border-primary/30 bg-card shadow-[var(--shadow-glow)] overflow-hidden">
            {/* Header do card */}
            <div className="bg-primary px-6 py-5 flex items-center gap-4">
              <div className="h-12 w-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                <Video className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-white font-extrabold text-lg leading-tight">Kit de Clips</p>
                <p className="text-white/70 text-sm mt-0.5">Vídeo de até 30s por produto</p>
              </div>
            </div>

            {/* Itens */}
            <div className="p-6">
              <ul className="space-y-3">
                {clips.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-sm text-foreground leading-snug">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-5 border-t border-border">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Para <strong className="text-foreground">Reels, TikTok e anúncios pagos</strong>. Para o scroll em 3s.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA para calculadora */}
        <div className="flex flex-col items-center gap-3">
          <a
            href="#calculadora"
            className="btn-primary animate-pulse-soft"
          >
            Calcule agora o seu pacote
            <ChevronRight className="h-5 w-5" />
          </a>
          <p className="text-xs text-muted-foreground">Mínimo 3 anúncios · Desconto automático por volume</p>
        </div>

      </div>
    </section>
  );
};

export default ServicosSection;
