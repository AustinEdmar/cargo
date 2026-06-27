
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
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const loadGsap = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      // Parallax leve no vídeo
      if (videoRef.current) {
        gsap.to(videoRef.current, {
          yPercent: 15,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }

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
    >
      {/* ── VIDEO BACKGROUND ── */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-110"
          style={{ transformOrigin: "center center" }}
        >
          {/*
            Troque estas src por vídeos ".
          */}
          <source
            src="/videos/maritime.mp4" type="video/mp4"
          />
          {/* fallback */}
          <source
            src="https://videos.pexels.com/video-files/852395/852395-hd_1920_1080_30fps.mp4"
            type="video/mp4"
          />
        </video>

        {/* Overlay em gradiente escuro — estilo Awwwards */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(3,6,20,0.78) 0%, rgba(5,10,35,0.72) 50%, rgba(3,6,20,0.85) 100%)",
          }}
        />

        {/* Grain / noise texture sutil */}
        <div
          className="absolute inset-0 opacity-[0.045] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
            backgroundSize: "128px 128px",
            mixBlendMode: "overlay",
          }}
        />

        {/* Vignette radial nas bordas */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 45%, rgba(3,6,20,0.65) 100%)",
          }}
        />
      </div>

      {/* Glow orbs — mantidos mas reduzidos para não competir com o vídeo */}
      <div className="absolute top-0 left-1/4 w-72 h-72 rounded-full bg-[#21B8E7]/6 blur-3xl pointer-events-none z-[1]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-blue-500/5 blur-3xl pointer-events-none z-[1]" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/60 bg-blue-500/10 backdrop-blur-sm text-xs font-bold mb-5 uppercase tracking-widest">
            <span className="font-bold uppercase tracking-[5px] text-xs text-white/90">
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
          <svg
            className="hidden md:block absolute top-[15px] left-[18%] right-[18%] w-[64%] h-24 overflow-visible"
            viewBox="0 0 1000 120"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#21B8E7" />
                <stop offset="50%" stopColor="#3785ED" />
                <stop offset="100%" stopColor="#16D1E8" />
              </linearGradient>
            </defs>

            <path
              d="M0,60
       C120,20 220,20 340,60
       S560,100 680,60
       S900,20 1000,60"
              fill="none"
              stroke="url(#waveGradient)"
              strokeWidth="3"
              strokeDasharray="6 10"
              strokeLinecap="round"
            />
          </svg>

          {steps.map((step, i) => (
            <div
              key={i}
              ref={(el) => { if (el) stepsRef.current[i] = el; }}
              className="text-center opacity-0"
            >
              <div className="relative inline-block mb-7">
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
                      "linear-gradient(135deg, #21B8E7 0%, #21B8E7 30%, #3785ED 60%, #21B8E7 85%, #16D1E8 100%)",
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
              <p className="text-white text-xs leading-relaxed max-w-[220px] mx-auto">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}