"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const services = [
  {
    title: "Transporte Marítimo",
    category: "Marítimo",
    desc: "Agenciamento de navios, gestão de carga e logística portuária em todos os portos de Angola.",
    img: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?w=600&q=80",
    color: "#0B1F5C",
  },
  {
    title: "Transporte Aéreo",
    category: "Aéreo",
    desc: "Gestão de carga aérea com parceiros internacionais para entrega rápida e segura.",
    img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&q=80",
    color: "#1a3080",
  },
  {
    title: "Transferências de Carga",
    category: "Terrestre",
    desc: "Transporte rodoviário em todo o território angolano com rastreamento em tempo real.",
    img: "https://images.unsplash.com/photo-1519003300449-424ad0405076?w=600&q=80",
    color: "#0d2a6e",
  },
  {
    title: "Armazenagem",
    category: "Armazém",
    desc: "Armazéns climatizados com gestão inteligente de stocks e inventário automatizado.",
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80",
    color: "#122460",
  },
  {
    title: "Desalfandegamento",
    category: "Alfândega",
    desc: "Assessoria e gestão completa de processos aduaneiros e documentação de importação/exportação.",
    img: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=600&q=80",
    color: "#0a1a50",
  },
];

// Triplicamos os items para criar loop infinito real
const TOTAL = services.length;
const CLONED = [...services, ...services, ...services];

export default function Services() {
  // Começamos no meio (índice real = TOTAL, que é a cópia do meio)
  const [active, setActive] = useState(TOTAL);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const titleRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  // Touch/drag state
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const isDragging = useRef(false);

  // Índice real (0..TOTAL-1) para os dots
  const realIndex = ((active % TOTAL) + TOTAL) % TOTAL;

  const goTo = (idx: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActive(idx);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const prev = () => goTo(active - 1);
  const next = () => goTo(active + 1);

  // Quando chegar às pontas, salta para o meio silenciosamente
  useEffect(() => {
    if (active < TOTAL - 2) {
      setTimeout(() => {
        setIsTransitioning(false);
        setActive((prev) => prev + TOTAL);
      }, 510);
    } else if (active >= TOTAL * 2 + 2) {
      setTimeout(() => {
        setIsTransitioning(false);
        setActive((prev) => prev - TOTAL);
      }, 510);
    }
  }, [active]);

  // GSAP title animation
  useEffect(() => {
    const loadGsap = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: titleRef.current, start: "top 80%", once: true },
        }
      );
    };
    loadGsap();
  }, []);

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    isDragging.current = false;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const dx = e.touches[0].clientX - touchStartX.current;
    const dy = e.touches[0].clientY - touchStartY.current;
    // Se movimento horizontal dominante, é swipe — previne scroll
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 10) {
      isDragging.current = true;
      e.preventDefault();
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (isDragging.current && Math.abs(dx) > 40) {
      if (dx < 0) next();
      else prev();
    }
    touchStartX.current = null;
    touchStartY.current = null;
    isDragging.current = false;
  };

  // Mouse drag handlers
  const mouseStartX = useRef<number | null>(null);
  const handleMouseDown = (e: React.MouseEvent) => {
    mouseStartX.current = e.clientX;
  };
  const handleMouseUp = (e: React.MouseEvent) => {
    if (mouseStartX.current === null) return;
    const dx = e.clientX - mouseStartX.current;
    if (Math.abs(dx) > 40) {
      if (dx < 0) next();
      else prev();
    }
    mouseStartX.current = null;
  };

  const getCardStyle = (i: number) => {
    const diff = i - active;
    const absDiff = Math.abs(diff);

    // Mostra até 2 cards de cada lado
    if (absDiff > 2) return { display: "none" };

    const translateX = diff * 210;
    const scale = diff === 0 ? 1 : absDiff === 1 ? 0.82 : 0.67;
    const translateZ = diff === 0 ? 0 : absDiff === 1 ? -100 : -200;
    const opacity = diff === 0 ? 1 : absDiff === 1 ? 0.75 : 0.45;
    const rotateY = diff * -10;
    const zIndex = 10 - absDiff;

    return {
      position: "absolute" as const,
      left: "50%",
      transform: `translateX(calc(-50% + ${translateX}px)) translateZ(${translateZ}px) scale(${scale}) rotateY(${rotateY}deg)`,
      opacity,
      zIndex,
      transition: "all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      cursor: diff !== 0 ? "pointer" : "grab",
      userSelect: "none" as const,
    };
  };

  return (
    <section
      className="relative py-16 md:py-24 overflow-hidden"
      style=
      {{
        backgroundImage: `url("./images/bg-services.png")`
      }}
    //
    >
      {/* Ghost watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span
          className="font-black uppercase text-gray-100"
          style={{ fontSize: "clamp(80px, 20vw, 220px)", letterSpacing: "-0.05em", opacity: 0.6 }}
        >
          SERVIÇOS
        </span>
      </div>

      <div ref={titleRef} className="max-w-7xl mx-auto px-4 text-center mb-12 relative z-10 opacity-0">
        <span
          className="font-bold uppercase tracking-[5px] text-xs"
          style={{
            background:
              "linear-gradient(90deg, #2418C7 0%, #2B4DEB 40%, #3785ED 70%, #16D1E8 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
            color: "transparent",
          }}
        >
          NOSSOS SERVIÇOS
        </span>
        <h2
          className="font-black mt-3 leading-tight"
          style={{
            fontSize: "clamp(28px, 4.5vw, 48px)",
            letterSpacing: "-0.02em",
          }}
        >
          <span
            className="inline-block text-navy"

          >
            Acompanhe todos os nossos serviços
          </span>

          <br />

          <span
            className="inline-block text-navy"

          >
            ao redor de Angola
          </span>
        </h2>
      </div>

      {/* 3D Stage */}
      <div className="relative w-full flex flex-col items-center" style={{ perspective: "1400px", zIndex: 1 }}>
        <p className="text-gray-400 text-xs mb-6 flex items-center gap-2 select-none">
          <span>👆</span> Arraste ou clique nas cards para navegar
        </p>

        <div
          ref={stageRef}
          className="relative w-full flex items-center justify-center select-none"
          style={{ height: "470px", transformStyle: "preserve-3d" }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
        >
          {CLONED.map((svc, i) => (
            <div
              key={i}
              style={getCardStyle(i)}
              onClick={() => {
                const diff = i - active;
                if (diff !== 0 && Math.abs(diff) <= 2) goTo(i);
              }}
              className="w-[260px] md:w-[290px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <div className="relative h-[400px] md:h-[440px]">
                <img
                  src={svc.img}
                  alt={svc.title}
                  draggable={false}
                  className="w-full h-full object-cover pointer-events-none"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(to top, ${svc.color} 0%, ${svc.color}90 35%, transparent 65%)`,
                  }}
                />
                <div className="absolute top-4 left-4">
                  <span
                    className="text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest"
                    style={{
                      background:
                        "radial-gradient(circle at 20% 80%, #16D1E8 0%, #2B82EE 25%, transparent 50%), radial-gradient(circle at 85% 45%, #21B8E7 0%, #3785ED 35%, transparent 60%), linear-gradient(135deg, #2418C7 0%, #2B4DEB 50%, #3785ED 100%)",
                    }}
                  >
                    {svc.category}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3
                    className="font-black text-white text-lg mb-2 uppercase"
                    style={{ letterSpacing: "-0.01em" }}
                  >
                    {svc.title}
                  </h3>
                  {i === active && (
                    <div className="animate-in">
                      <p className="text-white/70 text-xs leading-relaxed mb-4">{svc.desc}</p>
                      <button className="flex items-center gap-2 text-gold font-bold text-xs hover:text-amber-300 transition-colors group">
                        Mais detalhes
                        <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots — apenas TOTAL dots, mapeados ao realIndex */}
        <div className="flex gap-2 mt-8">
          {services.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(TOTAL + i)}
              className={`rounded-full transition-all duration-300 ${i === realIndex ? "w-8 h-2 bg-blue-400" : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
                }`}
            />
          ))}
        </div>

        {/* Arrows */}
        <div className="flex gap-3 mt-5">
          <button
            onClick={prev}
            className="w-11 h-11 rounded-full text-white flex items-center justify-center transition-all shadow-lg hover:scale-110"
            style={{
              background:
                "radial-gradient(circle at 20% 80%, #16D1E8 0%, #2B82EE 25%, transparent 50%), radial-gradient(circle at 85% 45%, #21B8E7 0%, #3785ED 35%, transparent 60%), linear-gradient(135deg, #2418C7 0%, #2B4DEB 50%, #3785ED 100%)",
            }}
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={next}
            className="w-11 h-11 rounded-full text-white flex items-center justify-center transition-all shadow-lg hover:scale-110"
            style={{
              background:
                "radial-gradient(circle at 20% 80%, #16D1E8 0%, #2B82EE 25%, transparent 50%), radial-gradient(circle at 85% 45%, #21B8E7 0%, #3785ED 35%, transparent 60%), linear-gradient(135deg, #2418C7 0%, #2B4DEB 50%, #3785ED 100%)",
            }}
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}