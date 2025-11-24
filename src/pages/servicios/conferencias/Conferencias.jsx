import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Users,
  Target,
  Clock,
  Sparkles,
  Award,
  TrendingUp,
  Zap,
  Brain,
  Heart,
  CheckCircle2,
  Calendar,
  MapPin,
  Video,
} from "lucide-react";
import { Button } from "../../../components/ui/button";
import Footer from "../../footer/footer";

const conferencias = [
  {
    id: "liderazgo-consciente",
    title: "Liderazgo Consciente y Transformacional",
    description: "Desarrolla habilidades de liderazgo que inspiran, motivan y generan resultados extraordinarios en tu equipo.",
    duration: "2-3 horas",
    format: "Presencial / Virtual",
    audience: "Ejecutivos, Gerentes, Líderes de Equipo",
    highlights: [
      "Inteligencia emocional aplicada",
      "Comunicación asertiva y efectiva",
      "Gestión de equipos de alto rendimiento",
      "Toma de decisiones estratégicas"
    ],
    href: "/servicios/coaching"
  },
  {
    id: "mentalidad-millonaria",
    title: "Mentalidad Millonaria y Productividad",
    description: "Transforma tu forma de pensar sobre el dinero, el éxito y la productividad para alcanzar tus metas financieras.",
    duration: "2-3 horas",
    format: "Presencial / Virtual",
    audience: "Emprendedores, Empresarios, Profesionales",
    highlights: [
      "Rompe techos mentales limitantes",
      "Estrategias de productividad probadas",
      "Mindset de abundancia",
      "Hábitos de personas exitosas"
    ],
    href: "/servicios/transformacion"
  },
  {
    id: "oratoria-impacto",
    title: "Oratoria de Alto Impacto",
    description: "Domina el arte de hablar en público y comunica tus ideas con confianza, claridad y poder persuasivo.",
    duration: "4-6 horas",
    format: "Presencial / Taller Intensivo",
    audience: "Profesionales, Conferencistas, Vendedores",
    highlights: [
      "Técnicas de persuasión",
      "Control de nervios y ansiedad",
      "Estructura de presentaciones",
      "Storytelling efectivo"
    ],
    href: "/servicios/coaching"
  },
  {
    id: "transformacion-personal",
    title: "Del Cambio a la Transformación Personal",
    description: "Un viaje profundo hacia tu mejor versión, combinando coaching ontológico, PNL y psicología positiva.",
    duration: "3-4 horas",
    format: "Presencial / Virtual",
    audience: "Personas en proceso de cambio",
    highlights: [
      "Autoconocimiento profundo",
      "Gestión emocional",
      "Diseño de plan de vida",
      "Activación de recursos internos"
    ],
    href: "/servicios/transformacion"
  },
  {
    id: "equipos-alto-rendimiento",
    title: "Construyendo Equipos de Alto Rendimiento",
    description: "Metodologías probadas para crear culturas organizacionales que generan resultados excepcionales.",
    duration: "4-8 horas",
    format: "Presencial / Corporativo",
    audience: "Equipos, Organizaciones, Empresas",
    highlights: [
      "Dinámicas de team building",
      "Comunicación efectiva",
      "Resolución de conflictos",
      "Cultura de excelencia"
    ],
    href: "/servicios/conferencias"
  },
  {
    id: "resiliencia-mental",
    title: "Resiliencia Mental y Fortaleza Emocional",
    description: "Desarrolla la capacidad de adaptarte, recuperarte y crecer ante los desafíos y adversidades.",
    duration: "2-3 horas",
    format: "Presencial / Virtual",
    audience: "Todos los niveles",
    highlights: [
      "Gestión del estrés",
      "Mentalidad de crecimiento",
      "Recuperación emocional",
      "Fortalecimiento interno"
    ],
    href: "/servicios/armonizatuvida"
  }
];

export default function ConferenciasPage() {
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.scrollY;
        heroRef.current.style.transform = `translateY(${scrolled * 0.3}px)`;
        heroRef.current.style.opacity = `${Math.max(0, 1 - scrolled / 600)}`;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-black via-zinc-900 to-black">
        <div className="absolute inset-0">
          <div
            className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-white/[0.03] rounded-full blur-[120px] animate-pulse"
            style={{ animationDuration: "8s" }}
          />
          <div
            className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-[100px] animate-pulse"
            style={{ animationDuration: "10s", animationDelay: "2s" }}
          />
        </div>

        <div className="absolute inset-0 opacity-[0.02]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
              backgroundSize: "100px 100px",
            }}
          />
        </div>

        <div className="absolute inset-0 overflow-hidden opacity-[0.08]">
          <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-white/50 to-transparent" />
          <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-white/50 to-transparent" />
        </div>

        <div ref={heroRef} className="relative w-full py-32 flex items-center justify-center text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/[0.08] backdrop-blur-xl border border-white/10 mb-12 animate-fade-in">
              <Sparkles className="h-4 w-4 text-white" />
              <span className="text-xs tracking-[0.25em] uppercase font-light text-white/90">
                Experiencias que Transforman
              </span>
            </div>

            <div className="mb-10 space-y-3">
              <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold leading-[0.95] tracking-tight">
                <span className="block opacity-0 animate-slide-up-refined" style={{ animationDelay: "0.2s" }}>
                  Conferencias
                </span>
                <span
                  className="block text-white/20 text-4xl sm:text-5xl lg:text-6xl opacity-0 animate-slide-up-refined italic font-light mt-2"
                  style={{ animationDelay: "0.4s" }}
                >
                  que
                </span>
                <span className="block opacity-0 animate-slide-up-refined mt-2" style={{ animationDelay: "0.6s" }}>
                  Inspiran
                </span>
              </h1>
            </div>

            <p
              className="text-lg sm:text-xl lg:text-2xl text-white/70 max-w-3xl mx-auto mb-16 font-light leading-relaxed opacity-0 animate-fade-in"
              style={{ animationDelay: "0.8s" }}
            >
              Donde el conocimiento se encuentra con la emoción
              <br className="hidden sm:block" />
              para crear experiencias inolvidables
            </p>

            <div className="flex flex-wrap gap-4 justify-center opacity-0 animate-fade-in" style={{ animationDelay: "1s" }}>
              <Link
                to="/carrito"
                className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-zinc-100 transition-all"
              >
                Solicitar Conferencia
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/servicios"
                className="inline-flex items-center gap-2 border border-white/20 px-8 py-4 rounded-full font-semibold text-white hover:bg-white/10 transition-colors"
              >
                Ver todos los servicios
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-black to-zinc-950">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Users, label: "+500", sublabel: "Conferencias realizadas" },
              { icon: Award, label: "18 años", sublabel: "De experiencia" },
              { icon: MapPin, label: "5 países", sublabel: "Alcance internacional" },
              { icon: TrendingUp, label: "95%", sublabel: "Satisfacción" },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <stat.icon className="h-8 w-8 text-blue-400 mx-auto mb-4" />
                <div className="text-3xl font-bold mb-2">{stat.label}</div>
                <div className="text-sm text-zinc-400 uppercase tracking-wider">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conferencias Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] text-blue-300 uppercase mb-4">Nuestras Conferencias</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Temas que Transforman</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Cada conferencia está diseñada para generar impacto, inspiración y resultados medibles en tu audiencia.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {conferencias.map((conferencia) => (
              <Link
                key={conferencia.id}
                to={conferencia.href}
                className="group relative bg-zinc-950 border border-zinc-900 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                        {conferencia.title}
                      </h3>
                      <p className="text-sm text-zinc-400 leading-relaxed">{conferencia.description}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 text-xs">
                    <div className="flex items-center gap-1 text-zinc-500">
                      <Clock className="h-3 w-3" />
                      {conferencia.duration}
                    </div>
                    <div className="flex items-center gap-1 text-zinc-500">
                      <Video className="h-3 w-3" />
                      {conferencia.format}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-zinc-800">
                    <p className="text-xs text-zinc-500 mb-3">Dirigido a:</p>
                    <p className="text-sm text-zinc-300">{conferencia.audience}</p>
                  </div>

                  <ul className="space-y-2 pt-2">
                    {conferencia.highlights.slice(0, 3).map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-zinc-400">
                        <CheckCircle2 className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 flex items-center gap-2 text-blue-400 font-semibold group-hover:gap-3 transition-all">
                    <span>Conocer más</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-950 via-black to-zinc-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            ¿Listo para transformar tu equipo o evento?
          </h2>
          <p className="text-xl text-zinc-400 mb-10">
            Contáctanos para diseñar una experiencia personalizada que se adapte a las necesidades de tu organización.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/carrito"
              className="inline-flex items-center gap-2 bg-white text-black px-10 py-5 rounded-full font-semibold hover:bg-zinc-100 transition-all text-lg"
            >
              Solicitar Cotización
              <ArrowRight className="h-5 w-5" />
            </Link>
            <a
              href="https://wa.me/573117472236"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/20 px-10 py-5 rounded-full font-semibold text-white hover:bg-white/10 transition-colors text-lg"
            >
              Contactar por WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        @keyframes slide-up-refined {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in {
          from { opacity: 0; } to { opacity: 1; }
        }
        .animate-slide-up-refined {
          animation: slide-up-refined 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-fade-in {
          animation: fade-in 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  );
}
