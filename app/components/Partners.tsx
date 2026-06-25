"use client";

import { useEffect, useRef } from "react";

const partners = [
  { name: "Sonangol", accent: "#F5A623" },
  { name: "UNITEL", accent: "#E8232A" },
  { name: "Chevron", accent: "#1B4FA8" },
  { name: "africell", accent: "#FF6600" },
  { name: "TotalEnergies", accent: "#D31710" },
  { name: "Angola LNG", accent: "#0B1F5C" },
  { name: "Semba", accent: "#2E7D32" },
];

// Duplicar para loop infinito
const ITEMS = [...partners, ...partners, ...partners];

export default function Partners() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let x = 0;
    let raf: number;
    const speed = 0.6;

    const loop = () => {
      x -= speed;
      // Quando passa 1/3, volta ao início (loop perfeito)
      const totalW = track.scrollWidth / 3;
      if (Math.abs(x) >= totalW) x = 0;
      track.style.transform = `translateX(${x}px)`;
      raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);

    // Pausa no hover
    const pause = () => cancelAnimationFrame(raf);
    const resume = () => { raf = requestAnimationFrame(loop); };
    track.addEventListener("mouseenter", pause);
    track.addEventListener("mouseleave", resume);

    return () => {
      cancelAnimationFrame(raf);
      track.removeEventListener("mouseenter", pause);
      track.removeEventListener("mouseleave", resume);
    };
  }, []);

  return (
    <section className="py-0 bg-white overflow-hidden relative">
      {/* Linha topo */}
      <div className="border-t border-blue-100" />

      {/* Label flutuante */}
      <div className="max-w-7xl mx-auto px-8 pt-10 pb-6 flex items-center justify-between">
        <span className="text-blue-900 font-black uppercase text-[10px] tracking-[6px]">
          Parceiros de Confiança
        </span>

        <div className="h-px flex-1 mx-8 bg-blue-100" />

        <span className="text-blue-700 font-black uppercase text-[10px] tracking-[4px]">
          {partners.length} empresas
        </span>
      </div>

      {/* Marquee */}
      <div
        className="relative pb-10"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        }}
      >
        <div
          ref={trackRef}
          className="flex items-center gap-0 will-change-transform"
          style={{ width: "max-content" }}
        >
          {ITEMS.map((p, i) => (
            <div
              key={i}
              className="flex items-center gap-6 px-10 py-3 border-r border-blue-100 cursor-default group"
              style={{ minWidth: "200px" }}
            >
              <span
                className="w-2 h-2 rounded-full flex-shrink-0 opacity-70 group-hover:opacity-100 transition-all duration-300 group-hover:scale-125"
                style={{ background: p.accent }}
              />

              <span className="text-blue-900 font-black text-sm uppercase tracking-wider whitespace-nowrap group-hover:text-blue-700 transition-colors duration-300">
                {p.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="border-b border-blue-100" />
    </section>
  );
}