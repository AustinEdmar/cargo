"use client";

import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

export default function Support() {
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadGsap = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 80%",
            once: true,
          },
        }
      );
    };
    loadGsap();
  }, []);

  /* style={{
            background:
              "radial-gradient(circle at 20% 80%, #16D1E8 0%, #2B82EE 25%, transparent 50%), radial-gradient(circle at 85% 45%, #21B8E7 0%, #3785ED 35%, transparent 60%), linear-gradient(135deg, #2418C7 0%, #2B4DEB 50%, #3785ED 100%)",
          }} */
  return (
    <section
      className="relative overflow-hidden"
      style={{
        minHeight: "520px",
        background:
          "radial-gradient(circle at 20% 80%, #16D1E8 0%, #2B82EE 25%, transparent 50%), radial-gradient(circle at 85% 45%, #21B8E7 0%, #3785ED 35%, transparent 60%), linear-gradient(135deg, #2418C7 0%, #2B4DEB 50%, #3785ED 100%)",
      }}
    >
      {/* Diagonal stripe overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 14px)",
        }}
      />

      {/* Watermark text */}
      <div
        className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none select-none"
        style={{ lineHeight: 0.85 }}
      >
        <span
          className="block font-black uppercase text-white/[0.06] whitespace-nowrap"
          style={{
            fontSize: "clamp(80px, 18vw, 220px)",
            letterSpacing: "-0.04em",
            transform: "translateY(15%)",
          }}
        >
          SUPORTE
        </span>
      </div>

      <div
        ref={ctaRef}
        className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 py-24 md:py-32 flex flex-col items-center text-center"
      >
        {/* Eyebrow */}
        <span className="inline-block text-white/60 font-bold text-[11px] uppercase tracking-[6px] mb-6">
          Suporte Dedicado
        </span>

        {/* Headline */}
        <h2
          className="font-black text-white leading-none mb-6"
          style={{
            fontSize: "clamp(40px, 7vw, 88px)",
            letterSpacing: "-0.03em",
          }}
        >
          Estamos sempre{" "}
          <span
            style={{
              WebkitTextStroke: "2px rgba(255,255,255,0.9)",
              color: "transparent",
            }}
          >
            disponíveis.
          </span>
        </h2>

        <p className="text-white/55 text-base leading-relaxed max-w-lg mb-12">
          A nossa equipa de suporte está disponível 24 horas por dia, 7 dias
          por semana, para responder a todas as suas questões logísticas.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
          <button className="flex-1 flex items-center justify-center gap-3 bg-white text-[#0B1F5C] font-black text-sm px-8 py-4 rounded-xl hover:bg-[#0B1F5C] hover:text-white transition-all duration-300 group shadow-xl">
            Enviar Mensagem
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>

          <a
            href="tel:+244928403186"
            className="flex-1 flex items-center justify-center gap-3 bg-white/10 border border-white/25 backdrop-blur-sm text-white font-black text-sm px-8 py-4 rounded-xl hover:bg-white/20 transition-all duration-300 group"
          >
            +244 928 40 31 86
            <ArrowRight
              size={16}
              className="text-white/50 group-hover:text-white group-hover:translate-x-1 transition-all"
            />
          </a>
        </div>

        <p className="text-white/35 text-xs mt-8 font-medium tracking-wide">
          Segunda a Sexta: 08h–18h &nbsp;·&nbsp; Urgências: 24/7
        </p>
      </div>
    </section>
  );
}