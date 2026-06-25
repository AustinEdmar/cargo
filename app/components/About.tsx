"use client";

import { useEffect, useRef } from "react";
import { CheckCircle2, ArrowRight, Phone } from "lucide-react";

const highlights = [
  "Agenciamento de navios certificado",
  "Cobertura em todos os portos de Angola",
  "Parceiros logísticos em 12 países",
  "Frota própria com rastreamento GPS",
];

const stats = [
  { value: "15+", label: "Anos de Experiência" },
  { value: "98%", label: "Satisfação" },
  { value: "12", label: "Países" },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadGsap = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      gsap.fromTo(imgRef.current,
        { opacity: 0, x: -60 },
        {
          opacity: 1, x: 0, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%", once: true }
        }
      );
      gsap.fromTo(contentRef.current,
        { opacity: 0, x: 60 },
        {
          opacity: 1, x: 0, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 70%", once: true }
        }
      );
    };
    loadGsap();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Esquerda — imagens empilhadas */}
          <div ref={imgRef} className="opacity-0 relative">
            {/* Imagem principal */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl" style={{ height: "500px" }}>
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=900&q=85"
                alt="Armazém logístico"
                className="w-full h-full object-cover"
              />
              {/* Gradiente sutil */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent" />
            </div>

            {/* Imagem pequena sobreposta — canto inferior esquerdo */}
            <div className="absolute -bottom-8 -left-6 w-44 h-36 rounded-2xl overflow-hidden border-4 border-white shadow-xl hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?w=400&q=80"
                alt="Porto"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Stats flutuante — canto superior direito */}
            <div
              className="absolute -top-6 -right-6 rounded-2xl shadow-xl px-6 py-5 hidden md:block"
              style={{
                background:
                  "radial-gradient(circle at 20% 80%, #16D1E8 0%, #2B82EE 25%, transparent 50%), radial-gradient(circle at 85% 45%, #21B8E7 0%, #3785ED 35%, transparent 60%), linear-gradient(135deg, #2418C7 0%, #2B4DEB 50%, #3785ED 100%)",
              }}
            >
              <div className="flex gap-6">
                {stats.map((s) => (
                  <div key={s.label} className="text-center">
                    <div
                      className="font-black text-white text-2xl leading-none mb-1"

                    >{s.value}</div>
                    <div className="text-white text-[10px] uppercase tracking-wider font-bold">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Linha decorativa navy */}
            <div
              className="absolute -left-4 top-12 bottom-12 w-1 rounded-full hidden lg:block"
              style={{
                background:
                  "linear-gradient(to bottom, #2418C7, #2B4DEB, #3785ED, #16D1E8)",
              }}
            />
          </div>

          {/* Direita — conteúdo */}
          <div ref={contentRef} className="opacity-0">
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full font-black text-[10px] uppercase tracking-[5px] mb-6"
              style={{
                border: "1px solid rgba(43,77,235,0.2)",
                background: "rgba(43,77,235,0.05)",
                color: "#2B4DEB",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{
                  background:
                    "linear-gradient(135deg, #2418C7 0%, #2B4DEB 30%, #3785ED 60%, #16D1E8 100%)",
                }}
              />
              Sobre a Cargo Center
            </span>

            <h2
              className="font-black text-gray-900 leading-none mb-6"
              style={{ fontSize: "clamp(32px, 4.5vw, 52px)", letterSpacing: "0.4rem" }}
            >
              Provemos serviços
              <br />
              <span
                style={{
                  background:
                    "linear-gradient(90deg, #2418C7 0%, #2B4DEB 40%, #3785ED 70%, #16D1E8 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontFamily: "'Dancing Script', cursive",
                }}
              >

                exclusivos
              </span> de
              <br />
              <span
                style={{
                  background:
                    "linear-gradient(90deg, #2418C7 0%, #2B4DEB 40%, #3785ED 70%, #16D1E8 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontFamily: "'Dancing Script', cursive",
                }}
              >
                Logística
              </span> &amp;
              <br />
              Transportes.
            </h2>

            <p className="text-gray-400 text-base leading-relaxed mb-8"

            >
              Somos especialistas em logística integrada e agenciamento de navios em Angola. Com uma equipa experiente e parceiros internacionais, garantimos que as suas mercadorias chegam ao destino com segurança, eficiência e pontualidade.
            </p>

            {/* Checklist */}
            <ul className="space-y-3 mb-10">
              {highlights.map((h) => (
                <li key={h} className="flex items-center gap-3">
                  <CheckCircle2
                    size={16}
                    className="flex-shrink-0"
                    style={{ color: "#2B4DEB" }}
                  />
                  <span className="text-gray-600 text-sm font-medium">{h}</span>
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <button className="flex items-center gap-2.5 text-white font-black px-7 py-3.5 rounded-full text-xs uppercase tracking-widest transition-all hover:scale-105"
                style={{
                  background:
                    "radial-gradient(circle at 20% 80%, #16D1E8 0%, #2B82EE 25%, transparent 50%), radial-gradient(circle at 85% 45%, #21B8E7 0%, #3785ED 35%, transparent 60%), linear-gradient(135deg, #2418C7 0%, #2B4DEB 50%, #3785ED 100%)",
                  boxShadow: "0 10px 30px rgba(43,77,235,0.35)",
                }}>
                Contactar <ArrowRight size={13} />
              </button>
              <div className="flex items-center gap-3 cursor-pointer group">
                <div className="w-10 h-10 rounded-full bg-navy group-hover:bg-gold flex items-center justify-center transition-colors">
                  <Phone size={14} className="text-white" />
                </div>
                <div>
                  <div className="text-gray-400 text-[10px] font-black uppercase tracking-widest">Ligue já</div>
                  <div className="text-navy font-black text-sm">923 85 12 99</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}