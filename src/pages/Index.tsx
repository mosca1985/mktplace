import HeroSection from "@/components/landing/HeroSection";
import ProblemSection from "@/components/landing/ProblemSection";
import MethodSection from "@/components/landing/MethodSection";
import ServicosSection from "@/components/landing/ServicosSection";
import ProofSection from "@/components/landing/ProofSection";
import ClipsExamplesSection from "@/components/landing/ClipsExamplesSection";
import AuthoritySection from "@/components/landing/AuthoritySection";
import CalculadoraSection from "@/components/landing/CalculadoraSection";
import ProcessoSection from "@/components/landing/ProcessoSection";
import ScaleSection from "@/components/landing/ScaleSection";
import FinalCTA from "@/components/landing/FinalCTA";
import { MiniCTA } from "@/components/landing/MiniCTA";
import FloatingWhatsApp from "@/components/landing/FloatingWhatsApp";

const Index = () => {
  return (
    <main className="pb-14 sm:pb-0">
      {/* 1. Gancho */}
      <HeroSection />

      {/* 2. Prova visual — portfólio */}
      <ProofSection />

      {/* 3. Exemplos de clips */}
      <ClipsExamplesSection />

      {/* Mobile CTA */}
      <MiniCTA text="Gostou dos resultados?" highlight="Monte seu orçamento →" />

      {/* 4. Dor */}
      <ProblemSection />

      {/* 5. Como funciona o serviço */}
      <MethodSection />

      {/* 6. O que você recebe — explicação dos kits */}
      <ServicosSection />

      {/* 7. Autoridade */}
      <AuthoritySection />

      {/* 8. Calculadora — conversão principal */}
      <CalculadoraSection />

      {/* 9. Processo do pedido à entrega */}
      <ProcessoSection />

      {/* 10. Desconto por volume */}
      <ScaleSection />

      {/* 11. Último empurrão */}
      <FinalCTA />

      <footer className="bg-foreground border-t border-white/10 py-8">
        <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/30">
          <p>© {new Date().getFullYear()} <span className="text-primary font-semibold">Mosca MktPlace</span>. Todos os direitos reservados.</p>
          <p className="hidden sm:block">Fotografias estratégicas para marketplace · SP, Brasil</p>
        </div>
      </footer>

      <FloatingWhatsApp />
    </main>
  );
};

export default Index;
