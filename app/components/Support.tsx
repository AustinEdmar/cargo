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

      // FIX 1: animação da esquerda não afecta a imagem — a imagem fica fora do leftRef
      gsap.fromTo(
        leftRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: leftRef.current, start: "top 80%", once: true },
        }
      );

      gsap.fromTo(
        rightRef.current,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.9,
          delay: 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: rightRef.current, start: "top 80%", once: true },
        }
      );
    };
    loadGsap();
  }, []);

  return (
    <section className="relative overflow-hidden" style={{ minHeight: "400px" }}>
      <div className="grid lg:grid-cols-2 min-h-[400px]">

        {/* Esquerda — fundo branco */}
        {/* FIX 2: a secção wrapper é o container de posicionamento;
                   leftRef só cobre o conteúdo de texto, não a imagem */}

        {/* className="relative text-white py-16 overflow-hidden"
      style={{
        backgroundImage: `url("./images/bg-footer.png")`
      }} */}
        <div
          className="relative flex flex-col justify-center overflow-hidden"
        >

          {/* FIX 3: Imagem fora do leftRef — não herda opacity:0 do GSAP.
                     z-index: 1 garante que fica acima do fundo mas abaixo do texto (z-10) */}
          <Image
            src="/images/man.png"
            alt="Support"
            width={900}   // ← maior que os 750px do CSS
            height={900}
            quality={100} // ← garante sem compressão
            className="absolute right-[-80px] bottom-[-50px] w-[500px] md:w-[750px] h-auto z-[1] pointer-events-none select-none
            "
          />

          {/* FIX 4: div de gradiente vazia removida — estava a sobrepor a imagem */}

          {/* Conteúdo de texto — animado pelo GSAP */}
          <div
            ref={leftRef}
            className="relative z-10 px-8 md:px-16 py-16 md:py-20"
          >
            <span className="text-blue-400 font-black text-[10px] uppercase tracking-[6px] block mb-6">
              Suporte Dedicado
            </span>

            <h2
              className="font-black text-blue-950 leading-none mb-6"
              style={{
                fontSize: "clamp(36px, 5.5vw, 64px)",
                letterSpacing: "-0.03em",
              }}
            >
              Estamos
              <br />
              sempre
              <br />
              <span
                style={{
                  WebkitTextStroke: "2px #0B1F5C",
                  color: "transparent",
                }}
              >
                disponíveis.
              </span>
            </h2>

            <p className="text-slate-600 text-sm leading-relaxed max-w-sm">
              A nossa equipa de suporte está disponível 24 horas por dia, 7 dias por
              semana, para responder a todas as suas questões logísticas.
            </p>
          </div>
        </div>

        {/* Direita — Gold */}
        {/* style={{
  background:
    "radial-gradient(circle at 20% 80%, #16D1E8 0%, #2B82EE 25%, transparent 50%), radial-gradient(circle at 85% 45%, #21B8E7 0%, #3785ED 35%, transparent 60%), linear-gradient(135deg, #2418C7 0%, #2B4DEB 50%, #3785ED 100%)",
}} */}
        {/* FIX 5: opacity-0 removido da className — o GSAP define o estado inicial via fromTo */}
        <div
          ref={rightRef}
          className="relative flex flex-col justify-center px-8 md:px-16 py-16 md:py-20 overflow-hidden"
          style={{
            background:
              "radial-gradient(circle at 20% 80%, #16D1E8 0%, #2B82EE 25%, transparent 50%), radial-gradient(circle at 85% 45%, #21B8E7 0%, #3785ED 35%, transparent 60%), linear-gradient(135deg, #2418C7 0%, #2B4DEB 50%, #3785ED 100%)",
          }}
        >
          {/* Pattern diagonal de fundo */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 1px, transparent 1px, transparent 12px)",
            }}
          />

          <div className="relative z-10">
            <p className="text-white/70 font-bold text-sm uppercase tracking-widest mb-10">
              Como podemos ajudar?
            </p>

            {/* CTA principal */}
            <button className="w-full flex items-center justify-between bg-white text-navy font-black text-base px-7 py-5 rounded-2xl mb-4 hover:bg-[#0B1F5C] hover:text-white transition-all duration-300 group shadow-lg">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-100 group-hover:bg-white/10 flex items-center justify-center transition-colors">
                  <MessageSquare size={18} className="text-[#0B1F5C] group-hover:text-white transition-colors" />
                </div>
                <div className="text-left">
                  <div className="text-xs text-gray-400 group-hover:text-white/50 font-semibold transition-colors">
                    Prefere escrever?
                  </div>
                  <div className="font-black text-[#0B1F5C] group-hover:text-white transition-colors">
                    Enviar Mensagem
                  </div>
                </div>
              </div>
              <ArrowRight
                size={18}
                className="text-gray-300 group-hover:text-white group-hover:translate-x-1 transition-all"
              />
            </button>

            {/* CTA telefone */}
            <button className="w-full flex items-center justify-between bg-white/20 border-2 border-white/30 backdrop-blur-sm text-white font-black text-base px-7 py-5 rounded-2xl hover:bg-white/35 transition-all duration-300 group">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center">
                  <Phone size={18} className="text-white" />
                </div>
                <div className="text-left">
                  <div className="text-xs text-white/60 font-semibold">Ligue directamente</div>
                  <div className="font-black text-white text-lg">+244 928 40 31 86</div>
                </div>
              </div>
              <ArrowRight
                size={18}
                className="text-white/50 group-hover:text-white group-hover:translate-x-1 transition-all"
              />
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