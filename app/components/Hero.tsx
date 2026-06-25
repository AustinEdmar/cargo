"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, Play, Pause } from "lucide-react";

type SlideMedia =
  | { type: "image"; src: string }
  | { type: "video"; src: string; poster?: string };

interface Slide {
  tag: string;
  line1: string;
  line2: string;
  line3: string;
  sub: string;
  media: SlideMedia;
}

const slides: Slide[] = [
  {
    tag: "Logística & Transitários",
    line1: "SOLUÇÕES",
    line2: "LOGÍSTICAS",
    line3: "DE EXCELÊNCIA",
    sub: "Transporte marítimo, aéreo e terrestre em Angola e no mundo. A sua carga nas mãos certas.",
    media: { type: "video", src: "/videos/maritime.mp4", poster: "/images/maritime-poster.jpg" },
  },
  {
    tag: "Transporte Aéreo",
    line1: "CARGA",
    line2: "AÉREA",
    line3: "RÁPIDA E SEGURA",
    sub: "Gestão de carga aérea com parceiros internacionais. Entrega express para qualquer destino.",
    media: { type: "image", src: "/images/aerea.jpg" },
  },
  {
    tag: "Transporte Terrestre",
    line1: "ROTAS",
    line2: "NACIONAIS",
    line3: "EM TODA ANGOLA",
    sub: "Cobertura total do território angolano com frota própria e rastreamento em tempo real.",
    media: { type: "video", src: "/videos/terrestre.mp4", poster: "/images/terrestre-poster.jpg" },
  },
];

// Renders one background layer (image or video)
function MediaLayer({
  slide,
  videoRef,
}: {
  slide: Slide;
  videoRef?: React.RefObject<HTMLVideoElement | null>;
}) {
  const isVideo = slide.media.type === "video";
  if (isVideo) {
    const vm = slide.media as { type: "video"; src: string; poster?: string };
    return (
      <video
        ref={videoRef}
        key={vm.src}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster={vm.poster}
      >
        <source src={vm.src} type="video/mp4" />
      </video>
    );
  }
  return (
    /* eslint-disable-next-line @next/next/no-img-element */
    <img
      src={slide.media.src}
      alt={slide.tag}
      className="absolute inset-0 w-full h-full object-cover"
    />
  );
}

export default function Hero() {
  // current = slide fully visible; prev = slide fading out
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [transitioning, setTransitioning] = useState(false);
  const [videoPaused, setVideoPaused] = useState(false);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const transitionRef = useRef<NodeJS.Timeout | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const FADE_MS = 1200;
  const SLIDE_MS = 6000;

  const clearTimer = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const startTimer = () => {
    clearTimer();
    intervalRef.current = setInterval(() => advance((c) => (c + 1) % slides.length), SLIDE_MS);
  };

  // Core transition: crossfade from current → next
  const advance = (nextFn: (c: number) => number) => {
    if (transitioning) return;
    setCurrent((c) => {
      const next = nextFn(c);
      if (next === c) return c;
      setPrev(c);
      setTransitioning(true);
      // after fade completes, clean up prev layer
      transitionRef.current = setTimeout(() => {
        setPrev(null);
        setTransitioning(false);
        setVideoPaused(false);
      }, FADE_MS);
      return next;
    });
  };

  const goToIndex = (i: number) => {
    advance(() => i);
    startTimer();
  };

  const goPrev = () => { advance((c) => (c - 1 + slides.length) % slides.length); startTimer(); };
  const goNext = () => { advance((c) => (c + 1) % slides.length); startTimer(); };

  const toggleVideo = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setVideoPaused(false);
    } else {
      videoRef.current.pause();
      setVideoPaused(true);
    }
  };

  // Auto-play video on current slide
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => { });
      setVideoPaused(false);
    }
  }, [current]);

  useEffect(() => {
    startTimer();
    return () => {
      clearTimer();
      if (transitionRef.current) clearTimeout(transitionRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const slide = slides[current];
  const isVideo = slide.media.type === "video";
  const contentFaded = transitioning;

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">

      {/* ── CSS for gradient text (avoids backgroundClip conflict) ── */}
      <style>{`
        .hero-gradient-text {
          background: radial-gradient(circle at 20% 80%, #16D1E8 0%, #2B82EE 25%, transparent 50%),
                      radial-gradient(circle at 85% 45%, #21B8E7 0%, #3785ED 35%, transparent 60%),
                      linear-gradient(135deg, #2418C7 0%, #2B4DEB 50%, #3785ED 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent;
        }
        .hero-gradient-bar {
          background: radial-gradient(circle at 20% 80%, #16D1E8 0%, #2B82EE 25%, transparent 50%),
                      radial-gradient(circle at 85% 45%, #21B8E7 0%, #3785ED 35%, transparent 60%),
                      linear-gradient(135deg, #2418C7 0%, #2B4DEB 50%, #3785ED 100%);
        }
        .hero-gradient-btn {
          background: radial-gradient(circle at 20% 80%, #16D1E8 0%, #2B82EE 25%, transparent 50%),
                      radial-gradient(circle at 85% 45%, #21B8E7 0%, #3785ED 35%, transparent 60%),
                      linear-gradient(135deg, #2418C7 0%, #2B4DEB 50%, #3785ED 100%);
          box-shadow: 0 10px 30px rgba(43,77,235,0.35);
        }
      `}</style>

      {/* ── Background: prev layer (fades OUT) ── */}
      {prev !== null && (
        <div
          className="absolute inset-0"
          style={{
            zIndex: 0,
            opacity: transitioning ? 0 : 1,
            transition: `opacity ${FADE_MS}ms ease-in-out`,
          }}
        >
          <MediaLayer slide={slides[prev]} />
        </div>
      )}

      {/* ── Background: current layer (fades IN) ── */}
      <div
        className="absolute inset-0"
        style={{
          zIndex: 1,
          opacity: transitioning ? 1 : 1,
          transition: `opacity ${FADE_MS}ms ease-in-out`,
        }}
      >
        <MediaLayer slide={slide} videoRef={videoRef} />
      </div>

      {/* ── Overlay gradient ── */}
      <div
        className="absolute inset-0"
        style={{
          zIndex: 2,
          background:
            "linear-gradient(160deg, rgba(18,18,140,0.55) 0%, rgba(25,25,160,0.40) 50%, rgba(8,8,70,0.65) 100%)",
        }}
      />

      {/* ── Main content ── */}
      <div className="relative flex-1 flex items-center" style={{ zIndex: 10 }}>
        <div className="w-full max-w-5xl mx-auto px-5 sm:px-8 md:px-12 pt-28 pb-10">
          <div className="flex flex-col items-center text-center">

            {/* Tag */}
            <div
              className="flex items-center justify-center gap-3 mb-6 sm:mb-8"
              style={{
                opacity: contentFaded ? 0 : 1,
                transform: contentFaded ? "translateY(6px)" : "translateY(0)",
                transition: `opacity ${FADE_MS * 0.6}ms ease-in-out, transform ${FADE_MS * 0.6}ms ease-in-out`,
              }}
            >
              <span className="hero-gradient-bar w-8 h-0.5 rounded-full" />
              <span className="text-white font-black text-[10px] uppercase tracking-[6px]">
                {slide.tag}
              </span>
              <span className="hero-gradient-bar w-8 h-0.5 rounded-full" />
            </div>

            {/* Heading */}
            <h1
              className="font-black text-white leading-none mb-6 sm:mb-8"
              style={{
                fontSize: "clamp(48px, 12vw, 130px)",
                lineHeight: 0.88,
                opacity: contentFaded ? 0 : 1,
                transform: contentFaded ? "translateY(10px)" : "translateY(0)",
                transition: `opacity ${FADE_MS * 0.7}ms ease-in-out, transform ${FADE_MS * 0.7}ms ease-in-out`,
              }}
            >
              {slide.line1}
              <br />
              <span className="text-white">{slide.line2}</span>
              <br />
              {/* Use className-only gradient — no inline backgroundClip conflict */}
              <span
                className="hero-gradient-text font-bold uppercase tracking-[5px]"
                style={{ fontSize: "0.65em" }}
              >
                {slide.line3}
              </span>
            </h1>

            {/* Subtitle */}
            <p
              className="text-white/60 max-w-xl text-sm sm:text-base leading-relaxed mb-8 sm:mb-10"
              style={{
                opacity: contentFaded ? 0 : 1,
                transition: `opacity ${FADE_MS * 0.8}ms ease-in-out`,
              }}
            >
              {slide.sub}
            </p>

            {/* CTAs */}
            <div
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 sm:mb-14"
              style={{
                opacity: contentFaded ? 0 : 1,
                transition: `opacity ${FADE_MS * 0.8}ms ease-in-out`,
              }}
            >
              <button
                className="hero-gradient-btn flex items-center gap-2.5 text-white font-black px-8 py-4 rounded-full text-xs uppercase tracking-widest transition-transform hover:scale-105"
              >
                Os Nossos Serviços <ArrowRight size={14} />
              </button>

              {isVideo && (
                <button
                  onClick={toggleVideo}
                  className="flex items-center gap-3 text-white/60 hover:text-white font-black text-xs uppercase tracking-widest transition-colors group"
                >
                  <span className="w-11 h-11 rounded-full border border-white/25 group-hover:border-white/60 flex items-center justify-center transition-colors">
                    {videoPaused ? (
                      <Play size={13} fill="currentColor" />
                    ) : (
                      <Pause size={13} fill="currentColor" />
                    )}
                  </span>
                  {videoPaused ? "Reproduzir" : "Pausar"}
                </button>
              )}
            </div>

            {/* Dots + counter */}
            <div className="flex items-center justify-center gap-3">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goToIndex(i)}
                  className={`rounded-full transition-all duration-300 ${i === current
                      ? "w-10 h-1.5 bg-blue-500"
                      : "w-1.5 h-1.5 bg-white/25 hover:bg-white/50"
                    }`}
                />
              ))}
              <span className="ml-3 text-white/25 text-[11px] font-bold tabular-nums">
                0{current + 1} / 0{slides.length}
              </span>
            </div>

          </div>
        </div>
      </div>

      {/* ── Arrows ── */}
      <button
        onClick={goPrev}
        className="absolute left-3 md:left-8 top-1/2 -translate-y-1/2 w-10 h-10 md:w-11 md:h-11 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/15 hover:border-white/60 transition-all font-black text-lg"
        style={{ zIndex: 20 }}
      >
        ←
      </button>
      <button
        onClick={goNext}
        className="absolute right-3 md:right-8 top-1/2 -translate-y-1/2 w-10 h-10 md:w-11 md:h-11 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/15 hover:border-white/60 transition-all font-black text-lg"
        style={{ zIndex: 20 }}
      >
        →
      </button>

    </section>
  );
}