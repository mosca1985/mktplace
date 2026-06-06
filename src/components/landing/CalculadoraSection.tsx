import { useState, useMemo } from "react";
import { useFadeIn } from "@/hooks/useFadeIn";
import { MessageCircle, Plus, Minus, Camera, Video, Zap, TrendingDown } from "lucide-react";

// ── Precificação (mínimo 3 unidades) ─────────────────────────────────────────
const MIN_QTY = 3;

const ANCHORS: Record<string, [number, number][]> = {
  "Essencial Fotos": [[3, 447], [10, 397], [20, 347]],
  "Essencial Clip":  [[3, 489], [5,  489], [10, 389]],
};

const PRICE_FLOOR: Record<string, number> = {
  "Essencial Fotos": 347,
  "Essencial Clip":  389,
};

function progressiveUnit(name: string, qty: number): number {
  const anchors = ANCHORS[name];
  if (!anchors || qty < MIN_QTY) return anchors?.[0][1] ?? 0;
  if (qty >= anchors[anchors.length - 1][0]) return anchors[anchors.length - 1][1];
  if (qty <= anchors[0][0]) return anchors[0][1];
  for (let i = 0; i < anchors.length - 1; i++) {
    const [q1, p1] = anchors[i];
    const [q2, p2] = anchors[i + 1];
    if (qty >= q1 && qty <= q2) {
      if (qty === q1) return p1;
      if (qty === q2) return p2;
      const t = (qty - q1) / (q2 - q1);
      const raw = p1 + t * (p2 - p1);
      const rounded = Math.round(raw / 10) * 10;
      return Math.max(rounded, PRICE_FLOOR[name]);
    }
  }
  return anchors[anchors.length - 1][1];
}

function fmt(v: number) {
  return v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function getTier(name: string, qty: number): { label: string; color: string } | null {
  if (name === "Essencial Fotos") {
    if (qty >= 20) return { label: "🚀 Pacote Volume", color: "text-violet-600" };
    if (qty >= 10) return { label: "🔥 Pacote Performance", color: "text-primary" };
  }
  if (name === "Essencial Clip") {
    if (qty >= 10) return { label: "🚀 Pacote Volume", color: "text-violet-600" };
    if (qty >= 5)  return { label: "🔥 Pacote Performance", color: "text-primary" };
  }
  return null;
}

function buildWAMessage(fotos: number, clips: number, total: number, unitFoto: number, unitClip: number, pix: boolean): string {
  const lines: string[] = ["Olá! Fiz meu orçamento no site e quero fechar:"];
  if (fotos > 0) {
    const tier = getTier("Essencial Fotos", fotos);
    lines.push(`📸 ${fotos} anúncios de FOTOS — ${fmt(unitFoto)}/un → Total ${fmt(unitFoto * fotos)}${tier ? ` (${tier.label})` : ""}`);
  }
  if (clips > 0) {
    const tier = getTier("Essencial Clip", clips);
    lines.push(`🎬 ${clips} CLIPS — ${fmt(unitClip)}/un → Total ${fmt(unitClip * clips)}${tier ? ` (${tier.label})` : ""}`);
  }
  if (pix) lines.push("💰 Pagamento via Pix (10% de desconto)");
  lines.push(`✅ TOTAL: ${fmt(total)}`);
  lines.push("Pode me confirmar o prazo e iniciar meu pedido?");
  return encodeURIComponent(lines.join("\n"));
}

// ── Contador ──────────────────────────────────────────────────────────────────
const Counter = ({ value, onChange, min = MIN_QTY, max = 50 }: {
  value: number; onChange: (v: number) => void; min?: number; max?: number;
}) => (
  <div className="flex items-center gap-2">
    <button
      onClick={() => onChange(Math.max(min, value - 1))}
      disabled={value <= min}
      className="h-9 w-9 rounded-xl border border-border bg-secondary flex items-center justify-center hover:bg-primary/10 hover:border-primary/30 transition-all active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed"
    >
      <Minus className="h-3.5 w-3.5" />
    </button>
    <span className="w-10 text-center text-lg font-black tabular-nums">
      {value}
    </span>
    <button
      onClick={() => onChange(Math.min(max, value + 1))}
      className="h-9 w-9 rounded-xl border border-border bg-secondary flex items-center justify-center hover:bg-primary/10 hover:border-primary/30 transition-all active:scale-95"
    >
      <Plus className="h-3.5 w-3.5" />
    </button>
  </div>
);

// ── Barra de progresso ────────────────────────────────────────────────────────
function TierProgress({ name, qty }: { name: string; qty: number }) {
  const anchors = ANCHORS[name];
  if (!anchors) return null;
  const lastAnchor = anchors[anchors.length - 1];
  if (qty >= lastAnchor[0]) return null;
  const next = anchors.find(([q]) => q > qty);
  if (!next) return null;
  const prev = [...anchors].reverse().find(([q]) => q <= qty) ?? anchors[0];
  const pct = Math.round(((qty - prev[0]) / (next[0] - prev[0])) * 100);
  const faltam = next[0] - qty;
  return (
    <div className="mt-2.5">
      <div className="flex justify-between text-[10px] text-muted-foreground mb-1">
        <span>+ {faltam} para próximo desconto</span>
        <span className="text-primary font-semibold">{fmt(next[1])}/un</span>
      </div>
      <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
        <div className="h-full rounded-full bg-primary transition-all duration-300" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

// ── Componente principal ──────────────────────────────────────────────────────
export const CalculadoraSection = () => {
  const { ref, visible } = useFadeIn();
  const [fotosOn, setFotosOn] = useState(false);
  const [clipsOn, setClipsOn] = useState(false);
  const [fotos, setFotos] = useState(MIN_QTY);
  const [clips, setClips] = useState(MIN_QTY);
  const [pixMode, setPixMode] = useState(false);

  const unitFoto = useMemo(() => fotosOn ? progressiveUnit("Essencial Fotos", fotos) : 0, [fotos, fotosOn]);
  const unitClip = useMemo(() => clipsOn ? progressiveUnit("Essencial Clip", clips) : 0, [clips, clipsOn]);

  const subtotalFotos = fotosOn ? unitFoto * fotos : 0;
  const subtotalClips = clipsOn ? unitClip * clips : 0;
  const subtotal = subtotalFotos + subtotalClips;
  const pixDesconto = pixMode ? subtotal * 0.1 : 0;
  const total = subtotal - pixDesconto;

  const baseFoto = fotosOn ? ANCHORS["Essencial Fotos"][0][1] * fotos : 0;
  const baseClip = clipsOn ? ANCHORS["Essencial Clip"][0][1] * clips : 0;
  const base = baseFoto + baseClip;
  const economiaPct = base > 0 ? Math.round(((base - subtotal) / base) * 100) : 0;
  const economia = Math.max(0, base - subtotal);

  const tierF = fotosOn ? getTier("Essencial Fotos", fotos) : null;
  const tierC = clipsOn ? getTier("Essencial Clip", clips) : null;
  const temServico = fotosOn || clipsOn;

  const waMsg = buildWAMessage(fotosOn ? fotos : 0, clipsOn ? clips : 0, total, unitFoto, unitClip, pixMode);
  const waUrl = `https://wa.me/5511922220202?text=${waMsg}`;

  return (
    <section id="calculadora" className="section-padding bg-secondary" ref={ref}>
      <div className={`section-container fade-section ${visible ? "visible" : ""}`}>
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <p className="tag-label mb-4">Calculadora</p>
          <h2 className="heading-lg text-foreground mb-3">
            Monte seu orçamento{" "}
            <span className="text-primary">agora mesmo</span>
          </h2>
          <p className="text-body">
            Pacote mínimo de <strong>3 anúncios</strong>. Quanto mais você adiciona, menor o preço por unidade.
          </p>
        </div>

        <div className="max-w-3xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">

          {/* ── Seletor esquerdo ── */}
          <div className="space-y-4">

            {/* Toggle Fotos */}
            <ServiceCard
              active={fotosOn}
              onToggle={() => setFotosOn(!fotosOn)}
              icon={<Camera className="h-5 w-5 text-primary" />}
              title="Anúncios de Fotos"
              desc="Até 8 imagens por anúncio"
              qty={fotos}
              onQtyChange={setFotos}
              unit={unitFoto}
              subtotal={subtotalFotos}
              tier={tierF}
              name="Essencial Fotos"
            />

            {/* Toggle Clips */}
            <ServiceCard
              active={clipsOn}
              onToggle={() => setClipsOn(!clipsOn)}
              icon={<Video className="h-5 w-5 text-primary" />}
              title="Clips de Vídeo"
              desc="Até 30s, otimizado para ads"
              qty={clips}
              onQtyChange={setClips}
              unit={unitClip}
              subtotal={subtotalClips}
              tier={tierC}
              name="Essencial Clip"
            />

            {/* Mínimo label */}
            <div className="flex items-center gap-2 px-1">
              <div className="h-px flex-1 bg-border" />
              <span className="text-[11px] text-muted-foreground font-medium">Mínimo 3 anúncios por serviço</span>
              <div className="h-px flex-1 bg-border" />
            </div>

            {/* Pix toggle */}
            <button
              onClick={() => setPixMode(!pixMode)}
              className={`w-full rounded-2xl border p-4 flex items-center justify-between transition-all duration-200 ${
                pixMode ? "border-emerald-400/40 bg-emerald-50" : "border-border bg-card hover:border-primary/30"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`h-9 w-9 rounded-xl flex items-center justify-center text-lg ${pixMode ? "bg-emerald-100" : "bg-secondary"}`}>
                  💰
                </div>
                <div className="text-left">
                  <p className={`text-sm font-bold ${pixMode ? "text-emerald-700" : "text-foreground"}`}>
                    Pagar no Pix
                  </p>
                  <p className={`text-xs ${pixMode ? "text-emerald-600" : "text-muted-foreground"}`}>
                    10% de desconto no total
                  </p>
                </div>
              </div>
              <div className={`h-6 w-11 rounded-full transition-colors ${pixMode ? "bg-emerald-500" : "bg-border"}`}>
                <div className={`h-5 w-5 rounded-full bg-white mt-0.5 shadow transition-transform ${pixMode ? "translate-x-5" : "translate-x-0.5"}`} />
              </div>
            </button>
          </div>

          {/* ── Resumo direito ── */}
          <div className="rounded-2xl border-2 border-primary/20 bg-card p-6 sm:p-8 flex flex-col" style={{ boxShadow: 'var(--shadow-glow)' }}>
            <p className="text-xs font-bold uppercase tracking-widest text-primary/60 mb-5">Seu orçamento</p>

            {!temServico ? (
              <div className="flex-1 flex flex-col items-center justify-center text-center py-8">
                <div className="h-14 w-14 rounded-2xl bg-secondary flex items-center justify-center mb-3">
                  <Zap className="h-7 w-7 text-muted-foreground/40" />
                </div>
                <p className="text-sm text-muted-foreground">Ative fotos ou clips<br />para montar seu orçamento</p>
              </div>
            ) : (
              <div className="flex-1 space-y-3">
                {fotosOn && (
                  <div className="flex justify-between items-center py-2.5 border-b border-border">
                    <div>
                      <p className="text-sm font-medium text-foreground">{fotos} anúncio{fotos > 1 ? "s" : ""} de fotos</p>
                      <p className="text-xs text-primary font-semibold">{fmt(unitFoto)}/un</p>
                    </div>
                    <p className="font-black text-foreground">{fmt(subtotalFotos)}</p>
                  </div>
                )}
                {clipsOn && (
                  <div className="flex justify-between items-center py-2.5 border-b border-border">
                    <div>
                      <p className="text-sm font-medium text-foreground">{clips} clip{clips > 1 ? "s" : ""}</p>
                      <p className="text-xs text-primary font-semibold">{fmt(unitClip)}/un</p>
                    </div>
                    <p className="font-black text-foreground">{fmt(subtotalClips)}</p>
                  </div>
                )}

                {economia > 0 && economiaPct > 0 && (
                  <div className="flex items-center justify-between py-2 px-3 rounded-xl bg-primary/5 border border-primary/15">
                    <div className="flex items-center gap-1.5">
                      <TrendingDown className="h-3.5 w-3.5 text-primary" />
                      <span className="text-xs font-semibold text-primary">Economia por volume ({economiaPct}% OFF)</span>
                    </div>
                    <span className="text-xs font-bold text-primary">- {fmt(economia)}</span>
                  </div>
                )}

                {pixMode && (
                  <div className="flex items-center justify-between py-2 px-3 rounded-xl bg-emerald-50 border border-emerald-200">
                    <span className="text-xs font-semibold text-emerald-700">✓ Desconto Pix (10%)</span>
                    <span className="text-xs font-bold text-emerald-700">- {fmt(pixDesconto)}</span>
                  </div>
                )}

                <div className="pt-3 mt-2">
                  <div className="flex items-end justify-between mb-1">
                    <span className="text-xs text-muted-foreground uppercase tracking-wider font-medium">Total a pagar</span>
                    {pixMode && <span className="text-xs text-muted-foreground line-through">{fmt(subtotal)}</span>}
                  </div>
                  <p className="text-4xl sm:text-5xl font-black text-primary leading-none">
                    {fmt(total)}
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">
                    1ª prova em até <strong>9 dias úteis</strong> após pagamento
                  </p>
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="mt-6 pt-5 border-t border-border">
              <a
                href={temServico ? waUrl : "#"}
                target={temServico ? "_blank" : "_self"}
                rel="noopener noreferrer"
                onClick={(e) => { if (!temServico) e.preventDefault(); }}
                className={`w-full flex items-center justify-center gap-2.5 h-14 rounded-2xl font-bold text-base transition-all duration-200 ${
                  !temServico
                    ? "bg-secondary text-muted-foreground cursor-not-allowed"
                    : "bg-primary text-white animate-pulse-soft hover:opacity-90"
                }`}
              >
                <MessageCircle className="h-5 w-5" />
                {!temServico ? "Selecione os serviços" : "Enviar orçamento no WhatsApp"}
              </a>
              {temServico && (
                <p className="text-center text-xs text-muted-foreground mt-2.5">
                  O resumo completo vai direto no WhatsApp ✓
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ── Card de serviço ───────────────────────────────────────────────────────────
function ServiceCard({
  active, onToggle, icon, title, desc,
  qty, onQtyChange, unit, subtotal, tier, name,
}: {
  active: boolean; onToggle: () => void;
  icon: React.ReactNode; title: string; desc: string;
  qty: number; onQtyChange: (v: number) => void;
  unit: number; subtotal: number;
  tier: { label: string; color: string } | null;
  name: string;
}) {
  return (
    <div className={`rounded-2xl border transition-all duration-200 shadow-[var(--shadow-card)] ${
      active ? "border-primary/30 bg-card" : "border-border bg-card opacity-70"
    }`}>
      {/* Header — clicável para ativar */}
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-5 sm:p-6 text-left"
      >
        <div className="flex items-center gap-3">
          <div className={`h-10 w-10 rounded-xl flex items-center justify-center transition-colors ${active ? "bg-primary/10" : "bg-secondary"}`}>
            {icon}
          </div>
          <div>
            <p className="font-bold text-foreground text-sm">{title}</p>
            <p className="text-xs text-muted-foreground">{desc}</p>
          </div>
        </div>
        {/* Toggle switch */}
        <div className={`h-6 w-11 rounded-full transition-colors flex-shrink-0 ${active ? "bg-primary" : "bg-border"}`}>
          <div className={`h-5 w-5 rounded-full bg-white mt-0.5 shadow transition-transform ${active ? "translate-x-5" : "translate-x-0.5"}`} />
        </div>
      </button>

      {/* Body — só aparece quando ativo */}
      {active && (
        <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 border-t border-border">
          <div className="flex items-center justify-between mt-4">
            <div>
              <p className="text-xs text-muted-foreground mb-0.5">Quantidade</p>
              <p className="text-[10px] text-primary/70 font-medium">mín. 3 anúncios</p>
            </div>
            <Counter value={qty} onChange={onQtyChange} />
          </div>

          <div className="flex items-center justify-between mt-3 pt-3 border-t border-border">
            <span className="text-sm text-muted-foreground">
              {qty}× <span className="text-primary font-bold">{fmt(unit)}</span>
            </span>
            <span className="font-black text-foreground">{fmt(subtotal)}</span>
          </div>

          {tier && <p className={`text-xs font-semibold mt-1.5 ${tier.color}`}>{tier.label}</p>}
          <TierProgress name={name} qty={qty} />
        </div>
      )}
    </div>
  );
}

// ── Barra de progresso de tier ────────────────────────────────────────────────

export default CalculadoraSection;
