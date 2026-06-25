This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.















//footer1
import Link from "next/link";
import { Ship, Phone, Mail, MapPin } from "lucide-react";

const quickLinks = ["Sobre Nós", "Serviços", "Agenciamento", "Certificações", "Contactos"];
const services = ["Transporte Marítimo", "Transporte Aéreo", "Transporte Terrestre", "Armazenagem", "Desalfandegamento"];

export default function Footer() {
  return (
    <footer
      className="relative text-white py-16 overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #081548 0%, #0B1F5C 100%)",
      }}
    >
      {/* BG decoration */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold via-gold-light to-gold opacity-60" />
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-96 h-96 rounded-full border border-white" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full border border-white" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-10 h-10 bg-gold rounded-xl flex items-center justify-center shadow-lg">
                <Ship size={20} className="text-white" />
              </div>
              <div>
                <div className="font-heading font-bold text-white text-base tracking-wider uppercase leading-none">Cargo</div>
                <div className="font-heading font-bold text-gold text-base tracking-wider uppercase leading-none">Center</div>
              </div>
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
            <h4 className="font-heading font-bold text-gold mb-5 uppercase tracking-wider text-sm">
              Links Rápidos
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l}>
                  <a href="#" className="text-white/50 text-sm hover:text-gold transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold/50 group-hover:bg-gold transition-colors" />
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-gold mb-5 uppercase tracking-wider text-sm">
              Serviços
            </h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <a href="#" className="text-white/50 text-sm hover:text-gold transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold/50 group-hover:bg-gold transition-colors" />
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-gold mb-5 uppercase tracking-wider text-sm">
              Contacte-nos
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-gold mt-0.5 shrink-0" />
                <span className="text-white/50 text-sm leading-relaxed">
                  Luanda, Angola<br />Rua da Logística, 123
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} className="text-gold shrink-0" />
                <a href="tel:+244923851299" className="text-white/50 text-sm hover:text-gold transition-colors">
                  +244 923 85 12 99
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} className="text-gold shrink-0" />
                <a href="tel:+244928403186" className="text-white/50 text-sm hover:text-gold transition-colors">
                  +244 928 40 31 86
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={15} className="text-gold shrink-0" />
                <a href="mailto:geral@cargocenter.ao" className="text-white/50 text-sm hover:text-gold transition-colors">
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
            <a href="#" className="hover:text-gold transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-gold transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}




//Footer 2

import Link from "next/link";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";

const quickLinks = [
  { label: "Sobre Nós", href: "/sobre" },
  { label: "Serviços", href: "#" },
  { label: "Agenciamento", href: "#" },
  { label: "Certificações", href: "#" },
  { label: "Contactos", href: "/contactos" },
];

const services = [
  "Transporte Marítimo",
  "Transporte Aéreo",
  "Transporte Terrestre",
  "Armazenagem",
  "Desalfandegamento",
];

const stats = [
  { value: "15+", label: "Anos de experiência" },
  { value: "2.400+", label: "Cargas entregues" },
  { value: "12", label: "Países cobertos" },
  { value: "98%", label: "Satisfação do cliente" },
];

export default function Footer() {
  return (
    <footer
      className="relative text-white py-16 overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #081548 0%, #0B1F5C 100%)",
      }}>

      {/* Stats bar — linha de números */}
      <div className="border-b border-white/6">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/6">
            {stats.map((s) => (
              <div key={s.label} className="px-8 py-8 text-center">
                <div
                  className="font-black text-white leading-none mb-1"
                  style={{ fontSize: "clamp(28px, 4vw, 42px)", letterSpacing: "-0.03em" }}
                >
                  {s.value}
                </div>
                <div className="text-white/30 text-[11px] uppercase tracking-widest font-bold">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tagline grande */}
      <div className="border-b border-white/6 py-10 md:py-14 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <p
            className="font-black text-white/8 leading-none select-none"
            style={{ fontSize: "clamp(48px, 10vw, 120px)", letterSpacing: "-0.04em", lineHeight: 0.85 }}
          >
            LOGÍSTICA &<br />TRANSITÁRIOS
          </p>
        </div>
      </div>

      {/* Grid principal */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">

          {/* Brand — col 4 */}
          <div className="md:col-span-4">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-6">
              <div className="grid grid-cols-2 gap-[3px] p-2 bg-white/5 rounded-xl w-10 h-10 border border-white/8">
                <div className="bg-gold rounded-[2px]" />
                <div className="bg-gold/50 rounded-[2px]" />
                <div className="bg-gold/50 rounded-[2px]" />
                <div className="bg-gold rounded-[2px]" />
              </div>
              <div className="leading-none">
                <div className="font-black text-white text-sm tracking-widest uppercase">CARGO</div>
                <div className="font-black text-gold text-sm tracking-widest uppercase">CENTER</div>
              </div>
            </div>

            <p className="text-white/30 text-sm leading-relaxed mb-8 max-w-xs">
              Especialistas em logística integrada e agenciamento marítimo em Angola. A sua carga, o nosso compromisso.
            </p>

            {/* Contactos inline */}
            <div className="space-y-3">
              <a href="tel:+244928403186" className="flex items-center gap-3 text-white/30 hover:text-gold text-xs transition-colors group">
                <Phone size={12} className="text-gold" />
                +244 928 40 31 86
              </a>
              <a href="mailto:geral@cargocenter.ao" className="flex items-center gap-3 text-white/30 hover:text-gold text-xs transition-colors">
                <Mail size={12} className="text-gold" />
                geral@cargocenter.ao
              </a>
              <div className="flex items-start gap-3 text-white/30 text-xs">
                <MapPin size={12} className="text-gold mt-0.5 flex-shrink-0" />
                Luanda, Angola — Rua da Logística, 123
              </div>
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden md:block md:col-span-1" />

          {/* Links — col 3 */}
          <div className="md:col-span-3">
            <h4 className="text-white/20 font-black text-[10px] uppercase tracking-[5px] mb-6">
              Navegação
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-white/45 hover:text-white text-sm font-medium transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-3 h-px bg-white/20 group-hover:w-5 group-hover:bg-gold transition-all duration-300" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Serviços — col 4 */}
          <div className="md:col-span-4">
            <h4 className="text-white/20 font-black text-[10px] uppercase tracking-[5px] mb-6">
              Serviços
            </h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="#"
                    className="text-white/45 hover:text-white text-sm font-medium transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-3 h-px bg-white/20 group-hover:w-5 group-hover:bg-gold transition-all duration-300" />
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/6">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <span className="text-white/20 text-[11px] font-medium">
            © 2025 Cargo Center Limitada — Todos os Direitos Reservados
          </span>
          <div className="flex items-center gap-6">
            <a href="#" className="text-white/20 text-[11px] hover:text-white/50 transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-white/20 text-[11px] hover:text-white/50 transition-colors">
              Termos de Uso
            </a>
            <a
              href="#"
              className="flex items-center gap-1.5 text-gold text-[11px] font-black uppercase tracking-widest hover:text-amber-400 transition-colors"
            >
              Voltar ao topo <ArrowUpRight size={11} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}


