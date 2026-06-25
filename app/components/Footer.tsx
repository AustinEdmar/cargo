import Link from "next/link";
import { Ship, Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";

const quickLinks = ["Sobre Nós", "Serviços", "Agenciamento", "Certificações", "Contactos"];
const services = ["Transporte Marítimo", "Transporte Aéreo", "Transporte Terrestre", "Armazenagem", "Desalfandegamento"];

export default function Footer() {
  return (


    <footer
      className="relative text-white py-16 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, rgba(15,23,42,0.90) 0%, rgba(30,64,175,0.85) 45%, rgba(37,99,235,0.80) 100%), url('/images/aviao.png')",

        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* BG decoration */}

      {/* "linear-gradient(135deg, #0F172A 0%, #1E40AF 45%, #2563EB 100%)", */}
      <div
        className="absolute top-0 left-0 right-0 h-1 bg-white"

      />

      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-96 h-96 rounded-full border border-white" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full border border-white" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">




              <Image
                src="/images/cargocenter.png"
                alt="Support"
                width={900}   // ← maior que os 750px do CSS
                height={900}
                quality={100} // ← garante sem compressão
                className="relative
            
             w-[100px] md:w-[150px] 
             h-auto z-[1] 
             pointer-events-none select-none
            "
              />

            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Especialistas em logística e transitários em Angola. Soluções integradas para o seu negócio crescer.
            </p>
            <div className="flex gap-3">
              {/* {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold transition-colors">
                  <Icon size={15} />
                </a>
              ))} */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-white mb-5 uppercase tracking-wider text-sm">
              Links Rápidos
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l}>
                  <a href="#" className="text-white/50 text-sm hover:text-white transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold/50 group-hover:bg-gold transition-colors" />
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-white mb-5 uppercase tracking-wider text-sm">
              Serviços
            </h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <a href="#" className="text-white/50 text-sm hover:text-white transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold/50 group-hover:bg-gold transition-colors" />
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-white mb-5 uppercase tracking-wider text-sm">
              Contacte-nos
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-white mt-0.5 shrink-0" />
                <span className="text-white/50 text-sm leading-relaxed">
                  Luanda, Angola<br />Rua da Logística, 123
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} className="text-white shrink-0" />
                <a href="tel:+244923851299" className="text-white/50 text-sm hover:text-white transition-colors">
                  +244 923 85 12 99
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} className="text-white shrink-0" />
                <a href="tel:+244928403186" className="text-white/50 text-sm hover:text-white transition-colors">
                  +244 928 40 31 86
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={15} className="text-white shrink-0" />
                <a href="mailto:geral@cargocenter.ao" className="text-white/50 text-sm hover:text-white transition-colors">
                  geral@cargocenter.ao
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-3 text-white/40 text-xs">
          <span>© 2025 Cargo Center Limitada — Todos os Direitos Reservados</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}