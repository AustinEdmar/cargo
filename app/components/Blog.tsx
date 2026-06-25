"use client";

import { useEffect, useRef } from "react";
import { ArrowUpRight, Clock } from "lucide-react";

const posts = [
  {
    title: "Como a digitalização portuária está a mudar Angola para sempre",
    date: "12 Mar 2024",
    readTime: "6 min",
    desc: "A revolução tecnológica nos portos de Luanda e Lobito abre uma nova era para o comércio marítimo. Descubra o que está a mudar e o que ainda falta fazer.",
    img: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?w=900&q=85",
    cat: "Tecnologia",
    featured: true,
  },
  {
    title: "Top 5 vantagens de terceirizar a logística da sua empresa",
    date: "28 Fev 2024",
    readTime: "4 min",
    desc: "Redução de custos, foco no negócio e acesso a especialistas. Saiba porque as empresas estão a optar pela externalização.",
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80",
    cat: "Logística",
    featured: false,
  },
  {
    title: "Guia prático de importação e exportação em Angola",
    date: "15 Jan 2024",
    readTime: "8 min",
    desc: "Documentação, prazos, custos e tudo o que precisa saber sobre comércio internacional a partir de Angola.",
    img: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=600&q=80",
    cat: "Alfândega",
    featured: false,
  },
];

const GRADIENT =
  "radial-gradient(circle at 20% 80%, #16D1E8 0%, #2B82EE 25%, transparent 50%), radial-gradient(circle at 85% 45%, #21B8E7 0%, #3785ED 35%, transparent 60%), linear-gradient(135deg, #2418C7 0%, #2B4DEB 50%, #3785ED 100%)";

export default function Blog() {
  const sectionRef = useRef<HTMLElement>(null);
  const featuredRef = useRef<HTMLDivElement>(null);
  const sideRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const loadGsap = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      gsap.fromTo(
        featuredRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1, y: 0, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%", once: true },
        }
      );
      gsap.fromTo(
        sideRef.current,
        { opacity: 0, x: 40 },
        {
          opacity: 1, x: 0, duration: 0.7, stagger: 0.15, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 70%", once: true },
        }
      );
    };
    loadGsap();
  }, []);

  const featured = posts[0];
  const side = posts.slice(1);

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-28 overflow-hidden"
      style={{ background: "#ffffff" }}
    >
      {/* Gradient utility classes */}
      <style>{`
        .blog-gradient-bg { background: ${GRADIENT}; }
        .blog-gradient-text {
          background: ${GRADIENT};
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent;
        }
        .blog-gradient-link { color: #2B4DEB; }
        .blog-gradient-link:hover { color: #16D1E8; }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* Header */}
        <div className="flex items-end justify-between mb-14 border-b border-gray-100 pb-6">
          <div>
            <span className="blog-gradient-text font-black text-[10px] uppercase tracking-[6px] block mb-2">
              Actualidades
            </span>
            <h2
              className="blog-gradient-text hidden md:block font-black uppercase"
              style={{ fontSize: "clamp(32px, 5vw, 56px)", letterSpacing: "-0.03em" }}
            >
              Diário Cargo
            </h2>
          </div>
          <a
            href="#"
            className="hidden md:flex items-center gap-2 text-xs font-black uppercase tracking-widest text-gray-400 hover:text-gray-900 transition-colors group"
            style={{ textDecoration: "none" }}
          >
            Ver todos
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Grid magazine */}
        <div className="grid lg:grid-cols-[1fr_380px] gap-6 lg:gap-8">

          {/* Featured */}
          <div
            ref={featuredRef}
            className="opacity-0 group relative rounded-3xl overflow-hidden cursor-pointer"
            style={{ minHeight: "520px" }}
          >
            <img
              src={featured.img}
              alt={featured.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to top, rgba(15,23,42,0.95) 0%, rgba(15,23,42,0.5) 50%, transparent 75%)" }}
            />

            <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end">
              <div className="flex items-center gap-3 mb-4">
                <span className="blog-gradient-bg text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
                  {featured.cat}
                </span>
                <span className="text-white/50 text-xs flex items-center gap-1">
                  <Clock size={11} /> {featured.readTime} de leitura
                </span>
              </div>

              <h3
                className="font-black text-white leading-tight mb-4"
                style={{ fontSize: "clamp(22px, 3vw, 34px)", letterSpacing: "-0.02em" }}
              >
                {featured.title}
              </h3>

              <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-lg">
                {featured.desc}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-white/40 text-xs font-semibold">{featured.date}</span>
                <div className="blog-gradient-bg w-10 h-10 rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
                  <ArrowUpRight size={16} className="text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* Coluna lateral */}
          <div className="flex flex-col gap-6">
            {side.map((post, i) => (
              <div
                key={i}
                ref={(el) => { if (el) sideRef.current[i] = el; }}
                className="opacity-0 group rounded-2xl overflow-hidden border border-gray-100 bg-white cursor-pointer flex-1"
                style={{ transition: "border-color 0.3s, box-shadow 0.3s" }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = "rgba(43,77,235,0.25)";
                  e.currentTarget.style.boxShadow = "0 10px 40px rgba(0,0,0,0.08)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = "";
                  e.currentTarget.style.boxShadow = "";
                }}
              >
                <div className="overflow-hidden h-44 relative">
                  <img
                    src={post.img}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <span className="blog-gradient-bg absolute top-3 left-3 text-white text-[9px] font-black px-2.5 py-1 rounded-full uppercase tracking-widest">
                    {post.cat}
                  </span>
                </div>

                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-gray-300 text-[11px] font-bold">{post.date}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-200" />
                    <span className="text-gray-300 text-[11px] flex items-center gap-1">
                      <Clock size={10} /> {post.readTime}
                    </span>
                  </div>
                  <h3
                    className="font-black text-gray-900 text-base leading-snug mb-2"
                    style={{ letterSpacing: "-0.01em" }}
                  >
                    {post.title}
                  </h3>
                  <p className="text-gray-400 text-xs leading-relaxed line-clamp-2">
                    {post.desc}
                  </p>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="blog-gradient-text text-[10px] font-black uppercase tracking-widest">
                      Ler artigo
                    </span>
                    <ArrowUpRight
                      size={13}
                      className="transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      style={{ color: "#2B4DEB" }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}