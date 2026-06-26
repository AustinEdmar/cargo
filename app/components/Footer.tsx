import { Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";

const quickLinks = ["Sobre Nós", "Serviços", "Agenciamento", "Certificações", "Contactos"];
const services = [
  "Transporte Marítimo",
  "Transporte Aéreo",
  "Transporte Terrestre",
  "Armazenagem",
  "Desalfandegamento",
];
const projects = [
  "Projectos em Destaque",
  "Logística Industrial",
  "Desenvolvimento Local",
  "Infra-Aeroportuária",
  "Rotas de Transporte",
];

export default function Footer() {
  return (
    <footer className="relative bg-[#0B1220] text-white overflow-hidden">
      {/* Top white accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-white/10" />

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-14">

          {/* Brand col */}


          <div className="md:col-span-1">
            <div className="mb-5">
              <Image
                src="/images/cargocenter.png"
                alt="Cargo Center"
                width={900}
                height={900}
                quality={100}
                className="h-20 sm:h-9 md:h-18 w-auto pointer-events-none select-none"
              />
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-6">
              Especialistas em logística e transitários em Angola. Soluções
              integradas para o seu negócio crescer.
            </p>
            {/* Social icons placeholder */}
            <div className="flex gap-2">
              {["f", "in", "𝕏", "▶", "◻"].map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-white/40 text-[10px] font-bold hover:border-white/50 hover:text-white transition-all"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-white text-[10px] uppercase tracking-[4px] mb-5">
              Empresa
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l}>
                  <a
                    href="#"
                    className="text-white/40 text-sm hover:text-white transition-colors"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white text-[10px] uppercase tracking-[4px] mb-5">
              Serviços
            </h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="#"
                    className="text-white/40 text-sm hover:text-white transition-colors"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h4 className="font-bold text-white text-[10px] uppercase tracking-[4px] mb-5">
              Projectos
            </h4>
            <ul className="space-y-2.5">
              {projects.map((p) => (
                <li key={p}>
                  <a
                    href="#"
                    className="text-white/40 text-sm hover:text-white transition-colors"
                  >
                    {p}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white text-[10px] uppercase tracking-[4px] mb-5">
              Contacto
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-white/40 mt-0.5 shrink-0" />
                <span className="text-white/40 text-sm leading-relaxed">
                  Luanda, Angola
                  <br />
                  Rua da Logística, 123
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={13} className="text-white/40 shrink-0" />
                <a
                  href="tel:+244923851299"
                  className="text-white/40 text-sm hover:text-white transition-colors"
                >
                  +244 923 85 12 99
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={13} className="text-white/40 shrink-0" />
                <a
                  href="tel:+244928403186"
                  className="text-white/40 text-sm hover:text-white transition-colors"
                >
                  +244 928 40 31 86
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={13} className="text-white/40 shrink-0" />
                <a
                  href="mailto:geral@cargocenter.ao"
                  className="text-white/40 text-sm hover:text-white transition-colors"
                >
                  geral@cargocenter.ao
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 pt-8 flex flex-col md:flex-row items-center justify-between gap-3 text-white/30 text-xs">
          <span>© 2025 Cargo Center Limitada — Todos os Direitos Reservados</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Política de Cookies
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>

      {/* Giant watermark brand — ARQORA signature */}
      <div
        className="relative z-0 overflow-hidden select-none pointer-events-none"
        style={{ marginTop: "-20px" }}
      >
        <span
          className="block font-black uppercase text-white/[0.04] text-center whitespace-nowrap leading-none"
          style={{
            fontSize: "clamp(72px, 20vw, 220px)",
            letterSpacing: "-0.04em",
            transform: "translateY(8%)",
          }}
        >
          CARGO CENTER
        </span>
      </div>
    </footer>
  );
}