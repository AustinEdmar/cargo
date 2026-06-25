"use client";

import { useEffect, useRef } from "react";

const steps = [
  {
    num: "01",
    title: "Recepção da Encomenda",
    desc: "O cliente submete os detalhes da carga e destino. A nossa equipa analisa e prepara a melhor solução logística.",
    img: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?w=300&q=80",
  },
  {
    num: "02",
    title: "Planeamento e Routing",
    desc: "Definimos a rota mais eficiente, seleccionamos os parceiros de transporte e preparamos toda a documentação.",
    img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=300&q=80",
  },
  {
    num: "03",
    title: "Entrega e Confirmação",
    desc: "A carga é entregue no destino com rastreamento em tempo real e confirmação de recepção ao cliente.",
    img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=300&q=80",
  },
];

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const stepsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const loadGsap = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      gsap.fromTo(
        stepsRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            once: true,
          },
        }
      );
    };
    loadGsap();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-28 relative overflow-hidden"
      style={{
        backgroundImage: `url("./images/bg-process.png")`
      }}
    >
      {/* BG texture */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div
          className="absolute inset-0"

        />
      </div>

      {/* Glow orbs */}
      <div className="absolute top-0 left-1/4 w-72 h-72 rounded-full bg-gold/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500 text-xs text-blue-500 font-bold mb-5 uppercase tracking-widest">
            <span
              className="font-bold uppercase tracking-[5px] text-xs text-white"

            >
              NOSSOS PROCESSOS DE ACTIVIDADES
            </span>
          </span>
          <h2
            className="font-black text-white mt-3 leading-tight"
            style={{ fontSize: "clamp(28px, 5vw, 48px)", letterSpacing: "-0.02em" }}
          >
            Como funciona o nosso sistema
            <br />
            de transporte logístico
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Dashed connector line */}
          <div
            className="hidden md:block absolute top-[72px] left-[22%] right-[22%] h-px"
            // background:
            //   "linear-gradient(135deg, #2418C7 0%, #2B4DEB 30%, #3785ED 60%, #21B8E7 85%, #16D1E8 100%)",
            style={{
              background:
                "repeating-linear-gradient(to right, rgba(245,166,35,0.7) 0, rgba(245,166,35,0.7) 10px, transparent 10px, transparent 22px)",
            }}
          />

          {steps.map((step, i) => (
            <div
              key={i}
              ref={(el) => { if (el) stepsRef.current[i] = el; }}
              className="text-center opacity-0"
            >
              <div className="relative inline-block mb-7">
                {/* Circle image */}
                <div
                  className="w-36 h-36 rounded-full overflow-hidden mx-auto shadow-2xl"
                  style={{
                    border: "4px solid #21B8E7",
                    boxShadow: "0 0 30px rgba(33,184,231,0.35)",
                  }}
                >
                  <img
                    src={step.img}
                    alt={step.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Number badge */}
                <div
                  className="absolute -top-3 -right-1 w-11 h-11 rounded-full flex items-center justify-center font-black text-white text-sm shadow-lg"
                  style={{
                    background:
                      "linear-gradient(135deg, #2418C7 0%, #2B4DEB 30%, #3785ED 60%, #21B8E7 85%, #16D1E8 100%)",
                    border: "2px solid rgba(255,255,255,0.25)",
                    boxShadow: "0 8px 25px rgba(43,77,235,0.35)",
                  }}
                >
                  {step.num}
                </div>
              </div>
              <h3 className="text-white font-black text-base mb-3 uppercase tracking-wide">
                {step.title}
              </h3>
              <p className="text-white/55 text-xs leading-relaxed max-w-[220px] mx-auto">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}