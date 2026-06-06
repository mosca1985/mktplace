import { MessageCircle, ArrowRight } from "lucide-react";

const WA_URL = "https://wa.me/5511922220202?text=Gostei%20dos%20planos%20para%20an%C3%BAncios%20do%20Instagram%2C%20e%20gostaria%20de%20falar%20sobre!";

interface MiniCTAProps {
  text: string;
  highlight: string;
}

export const MiniCTA = ({ text, highlight }: MiniCTAProps) => {
  return (
    <div className="sm:hidden px-5 py-3">
      <a
        href={WA_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-4 rounded-2xl px-5 py-4 bg-foreground border border-white/8 transition-all duration-300 active:scale-[0.98] hover:border-primary/30 shadow-lg"
      >
        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary flex items-center justify-center animate-pulse-soft group-hover:animate-none">
          <MessageCircle className="h-4.5 w-4.5 text-white" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-xs text-white/40 leading-snug">{text}</p>
          <p className="text-sm font-bold text-primary leading-snug">{highlight}</p>
        </div>
        <ArrowRight className="h-4 w-4 text-white/25 group-hover:text-primary transition-colors flex-shrink-0" />
      </a>
    </div>
  );
};

export default MiniCTA;
