"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "Sobre Nós", href: "/sobre" },
  {
    label: "Armazens",
    children: [
      { label: "Entrada de Navios", href: "#" },
      { label: "Saída de Navios", href: "#" },
      { label: "Logística Portuária", href: "#" },
    ],
  },
  {
    label: "Frota",
    children: [
      { label: "Gestão de Frota", href: "#" },
      { label: "Abastecimento", href: "#" },
      { label: "Documentação", href: "#" },
    ],
  },
  {
    label: "Despachante",
    children: [
      { label: "ISO 9001", href: "#" },
      { label: "ISPS Code", href: "#" },
      { label: "Conformidade", href: "#" },
    ],
  },

  {
    label: "Petroleo",
    children: [
      { label: "ISO 9001", href: "#" },
      { label: "ISPS Code", href: "#" },
      { label: "Conformidade", href: "#" },
    ],
  },
  { label: "Contactos", href: "/contactos" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isLight = scrolled || mobileOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${isLight ? "bg-white shadow-md" : "bg-transparent"
        }`}
    >
      {/* ── Main bar ── */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-[64px] md:h-[70px] flex items-center justify-between gap-4">

        {/* Logo — cresce proporcionalmente com o viewport */}
        <Link href="/" className="shrink-0 flex items-center">
          <Image
            src="/images/cargocenter.png"
            alt="CargoCenter"
            width={900}
            height={900}
            quality={100}
            className="h-8 sm:h-9 md:h-10 w-auto pointer-events-none select-none"
          />
        </Link>

        {/* Desktop nav — ocupa o espaço disponível, centrado */}
        <nav className="hidden lg:flex flex-1 items-center justify-center gap-0.5">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label} className="relative group">
                <button
                  className={`flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider py-2 px-3 rounded-lg transition-colors duration-300 ${isLight ? "text-gray-700 hover:text-gray-900" : "text-white/85 hover:text-white"
                    }`}
                >
                  {link.label}
                  <ChevronDown
                    size={12}
                    className="transition-transform duration-300 group-hover:rotate-180"
                  />
                </button>
                <div className="absolute left-0 top-full mt-1 w-52 bg-white rounded-xl shadow-2xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0 z-50">
                  {link.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      className="block px-4 py-3 text-[12px] text-gray-600 hover:text-blue-600 hover:bg-gray-50 transition-colors first:rounded-t-xl last:rounded-b-xl font-medium"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href!}
                className={`text-[11px] font-bold uppercase tracking-wider px-3 py-2 rounded-lg transition-colors duration-300 ${isLight ? "text-gray-700 hover:text-gray-900" : "text-white/85 hover:text-white"
                  }`}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Decorative lines — desktop only */}
          <div className="hidden lg:flex flex-col gap-[5px] cursor-pointer p-1">
            <span className={`block w-5 h-0.5 transition-colors duration-300 ${isLight ? "bg-gray-800" : "bg-white"}`} />
            <span className={`block w-5 h-0.5 transition-colors duration-300 ${isLight ? "bg-gray-800" : "bg-white"}`} />
            <span className={`block w-3.5 h-0.5 transition-colors duration-300 ${isLight ? "bg-gray-800" : "bg-white"}`} />
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
            className={`lg:hidden p-1.5 rounded-lg transition-colors duration-300 ${isLight ? "text-gray-800" : "text-white"
              }`}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* ── Mobile menu ── */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${mobileOpen ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0"
          }`}
        style={{ background: "#0B1F5C" }}
      >
        <div className="px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label}>
                <button
                  onClick={() =>
                    setOpenDropdown(openDropdown === link.label ? null : link.label)
                  }
                  className="w-full flex items-center justify-between text-[12px] font-bold uppercase tracking-wider text-white/90 hover:text-white transition-colors py-3 border-b border-white/10"
                >
                  {link.label}
                  <ChevronDown
                    size={13}
                    className={`transition-transform duration-300 ${openDropdown === link.label ? "rotate-180" : ""
                      }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${openDropdown === link.label ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                    }`}
                >
                  <div className="pl-4 py-2 flex flex-col gap-1">
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="text-white/55 text-sm py-1.5 hover:text-white transition-colors"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href!}
                className="text-[12px] font-bold uppercase tracking-wider text-white/90 hover:text-white transition-colors py-3 border-b border-white/10 last:border-0"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            )
          )}
        </div>
      </div>
    </header>
  );
}