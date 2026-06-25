"use client";

import { useEffect, useRef } from "react";
import { Phone, MessageSquare, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Support() {
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadGsap = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      gsap.fromTo(
        leftRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1, x: 0, duration: 0.9, ease: "power3.out",
          scrollTrigger: { trigger: leftRef.current, start: "top 80%", once: true },
        }
      );
      gsap.fromTo(
        rightRef.current,
        { opacity: 0, x: 50 },
        {
          opacity: 1, x: 0, duration: 0.9, delay: 0.1, ease: "power3.out",
          scrollTrigger: { trigger: rightRef.current, start: "top 80%", once: true },
        }
      );
    };
    loadGsap();
  }, []);

  return (
    <section className="relative overflow-hidden">
      <div className="grid lg:grid-cols-2">

        {/* ── Esquerda ── */}
        <div className="relative flex flex-col justify-center min-h-[420px] md:min-h-[500px] lg:min-h-[520px]">

          {/* Imagem decorativa — esconde em mobile para não cortar o texto */}
          <Image
            src="/images/man.png"
            alt="Support"
            width={900}
            height={900}
            quality={100}
            className="
              hidden sm:block
              absolute right-0 bottom-0
              w-[280px] md:w-[420px] lg:w-[520px] xl:w-[620px]
              h-auto z-[1]
              pointer-events-none select-none
              object-contain object-bottom
            "
          />

          {/* Texto animado */}
          <div
            ref={leftRef}
            className="relative z-10 px-6 sm:px-10 md:px-14 lg:px-16 py-14 md:py-20 max-w-lg"
          >
            <span className="text-blue-500 font-black text-[10px] uppercase tracking-[6px] block mb-5">
              Suporte Dedicado
            </span>

            <h2
              className="font-black text-blue-950 leading-none mb-5"
              style={{
                fontSize: "clamp(32px, 5.5vw, 64px)",
                letterSpacing: "-0.03em",
              }}
            >
              Estamos
              <br />
              sempre
              <br />
              <span style={{ WebkitTextStroke: "2px #0B1F5C", color: "transparent" }}>
                disponíveis.
              </span>
            </h2>

            <p className="text-slate-500 text-sm leading-relaxed max-w-xs sm:max-w-sm">
              A nossa equipa de suporte está disponível 24 horas por dia, 7 dias por semana,
              para responder a todas as suas questões logísticas.
            </p>
          </div>
        </div>

        {/* ── Direita ── */}
        <div
          ref={rightRef}
          className="relative flex flex-col justify-center px-6 sm:px-10 md:px-14 lg:px-16 py-14 md:py-20 overflow-hidden"
          style={{
            background:
              "radial-gradient(circle at 20% 80%, #16D1E8 0%, #2B82EE 25%, transparent 50%), radial-gradient(circle at 85% 45%, #21B8E7 0%, #3785ED 35%, transparent 60%), linear-gradient(135deg, #2418C7 0%, #2B4DEB 50%, #3785ED 100%)",
          }}
        >
          {/* Padrão diagonal */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 1px, transparent 1px, transparent 12px)",
            }}
          />

          <div className="relative z-10 w-full max-w-md mx-auto lg:mx-0">
            <p className="text-white/70 font-bold text-xs sm:text-sm uppercase tracking-widest mb-8">
              Como podemos ajudar?
            </p>

            {/* CTA mensagem */}
            <button className="w-full flex items-center justify-between bg-white text-navy font-black px-5 sm:px-7 py-4 sm:py-5 rounded-2xl mb-4 hover:bg-[#0B1F5C] hover:text-white transition-all duration-300 group shadow-lg">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-amber-100 group-hover:bg-white/10 flex items-center justify-center transition-colors shrink-0">
                  <MessageSquare size={17} className="text-[#0B1F5C] group-hover:text-white transition-colors" />
                </div>
                <div className="text-left">
                  <div className="text-[11px] text-gray-400 group-hover:text-white/50 font-semibold transition-colors">
                    Prefere escrever?
                  </div>
                  <div className="font-black text-[#0B1F5C] group-hover:text-white transition-colors text-sm sm:text-base">
                    Enviar Mensagem
                  </div>
                </div>
              </div>
              <ArrowRight size={17} className="text-gray-300 group-hover:text-white group-hover:translate-x-1 transition-all shrink-0" />
            </button>

            {/* CTA telefone */}
            <button className="w-full flex items-center justify-between bg-white/20 border-2 border-white/30 backdrop-blur-sm text-white font-black px-5 sm:px-7 py-4 sm:py-5 rounded-2xl hover:bg-white/35 transition-all duration-300 group">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
                  <Phone size={17} className="text-white" />
                </div>
                <div className="text-left">
                  <div className="text-[11px] text-white/60 font-semibold">Ligue directamente</div>
                  <div className="font-black text-white text-base sm:text-lg">+244 928 40 31 86</div>
                </div>
              </div>
              <ArrowRight size={17} className="text-white/50 group-hover:text-white group-hover:translate-x-1 transition-all shrink-0" />
            </button>

            {/* Horário */}
            <p className="text-white/50 text-xs mt-6 font-medium">
              Segunda a Sexta: 08h–18h &nbsp;·&nbsp; Urgências: 24/7
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}