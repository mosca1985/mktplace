import { MessageCircle } from "lucide-react";

const WA_URL = "https://wa.me/5511922220202?text=Gostei%20dos%20planos%20para%20an%C3%BAncios%20do%20Instagram%2C%20e%20gostaria%20de%20falar%20sobre!";

const FloatingWhatsApp = () => {
  return (
    <>
      {/* Desktop: floating pill */}
      <a
        href={WA_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden sm:flex fixed bottom-7 right-7 z-50 items-center gap-2.5 bg-[#25D366] hover:bg-[#20c05c] text-white font-semibold px-5 py-3.5 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 animate-pulse-soft hover:animate-none hover:-translate-y-0.5"
        style={{ boxShadow: '0 8px 32px rgba(37,211,102,0.35)' }}
      >
        <MessageCircle className="h-5 w-5" />
        <span className="text-sm font-semibold">Falar no WhatsApp</span>
      </a>

      {/* Mobile: bottom bar */}
      <a
        href={WA_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="sm:hidden fixed bottom-0 left-0 right-0 z-50 flex items-center justify-center gap-2.5 bg-[#25D366] active:bg-[#20c05c] text-white font-bold py-4 transition-colors"
        style={{ boxShadow: '0 -4px 24px rgba(0,0,0,0.15)' }}
      >
        <MessageCircle className="h-5 w-5" />
        <span className="text-sm font-bold">Falar no WhatsApp agora</span>
      </a>
    </>
  );
};

export default FloatingWhatsApp;
