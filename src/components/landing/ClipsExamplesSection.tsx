import { useFadeIn } from "@/hooks/useFadeIn";
import { ChevronRight } from "lucide-react";

const clips = [
  { id: "MsOqZd4xCRI", title: "Exemplo de clip 1" },
  { id: "f-zH7SiECbg", title: "Exemplo de clip 2" },
];

const ClipsExamplesSection = () => {
  const { ref, visible } = useFadeIn();

  return (
    <section className="section-padding bg-background" ref={ref}>
      <div className={`section-container fade-section ${visible ? "visible" : ""}`}>
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3 sm:mb-4">
            Exemplos
          </p>
          <h2 className="heading-lg text-foreground mb-3 sm:mb-4">
            Veja nossos <span className="text-primary">clips</span> em ação
          </h2>
          <p className="text-body">
            Vídeos curtos pensados para parar o scroll e converter.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-8 max-w-3xl mx-auto">
          {clips.map((clip) => (
            <div
              key={clip.id}
              className="relative aspect-[9/16] rounded-2xl overflow-hidden bg-foreground shadow-[var(--shadow-card)] border border-border"
            >
              <iframe
                src={`https://www.youtube.com/embed/${clip.id}?rel=0&modestbranding=1`}
                title={clip.title}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8 sm:mt-10 px-5">
          <a
            href="#pacotes-clips"
            className="inline-flex items-center gap-2 h-12 px-7 rounded-xl bg-primary text-primary-foreground text-sm sm:text-base font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
          >
            Ver pacotes de clips
            <ChevronRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ClipsExamplesSection;
