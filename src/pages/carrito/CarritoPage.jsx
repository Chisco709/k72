// src/pages/servicios/coaching/CoachingPage.jsx
import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/ui/button";
import Badge from "../../components/ui/badge";
import { ArrowRight, Heart, Trophy, Mountain, Sparkles, Target } from "lucide-react";

/**
 * CoachingPage — sección de servicios/programas mejorada
 * - Espacios corregidos entre imagen y etiquetas
 * - Microcopy natural (no predecible IA)
 * - Botones llevan a /carrito?programa=id
 * - Accesibilidad básica (alt, aria-labels)
 */

const services = [
  {
    id: "vida",
    title: "Coaching de Vida",
    subtitle: "Viaje al significado",
    description:
      "Proceso personalizado para clarificar propósito, diseñar hábitos sostenibles y consolidar una vida con sentido.",
    icon: Heart,
    duration: "5–10 semanas",
    priceLabel: "Inicia desde",
    price: 450000,
    image: "/reneimage.jpg",
    accent: "from-[#08203b] to-[#0b2b4a]",
  },
  {
    id: "deportivo",
    title: "Coaching Deportivo",
    subtitle: "Enfócate en el rendimiento",
    description:
      "Entrenamiento mental para deportistas, enfoque en rendimiento y recuperación emocional bajo presión.",
    icon: Trophy,
    duration: "Personalizado",
    priceLabel: "Plan a medida",
    price: 0,
    image: "/deportivo.jpg",
    accent: "from-[#1f2937] to-[#0b3b5a]",
  },
  {
    id: "guerrero",
    title: "El Camino del Guerrero",
    subtitle: "Alquimia del carácter",
    description:
      "Retiro experiencial diseñado para trabajar disciplina, presencia y propósito en contacto con la naturaleza.",
    icon: Mountain,
    duration: "1 fin de semana",
    priceLabel: "Cupos limitados",
    price: 1200000,
    image: "/guerrero.jpg",
    accent: "from-[#052023] to-[#123a3f]",
  },
  {
    id: "excelencia",
    title: "Sendero de la Excelencia",
    subtitle: "Habilidades que perduran",
    description:
      "Programa para identificar talentos, fortalecer virtudes y aplicar habilidades al liderazgo cotidiano.",
    icon: Sparkles,
    duration: "8 horas | workshop",
    priceLabel: "Taller",
    price: 350000,
    image: "/excelencia.jpg",
    accent: "from-[#05203b] to-[#1c3f6b]",
  },
  {
    id: "busqueda",
    title: "La Física de la Búsqueda",
    subtitle: "Explora & transforma",
    description:
      "Serie de talleres para la integración emocional, el propósito y prácticas que sostienen bienestar a largo plazo.",
    icon: Target,
    duration: "2 talleres",
    priceLabel: "Talleres",
    price: 680000,
    image: "/busqueda.jpg",
    accent: "from-[#08202b] to-[#1b3b4a]",
  },
];

function formatCOP(n) {
  if (!n) return "";
  return n.toLocaleString("es-CO");
}

export default function CoachingPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="mb-10">
          <Badge className="bg-[#FF9500]/10 text-[#FF9500] border border-[#FF9500]/20 px-3 py-1 rounded-full">
            Servicios
          </Badge>
          <h2 className="mt-4 text-3xl lg:text-4xl font-extrabold tracking-tight">
            Programas diseñados para crecer con propósito
          </h2>
          <p className="mt-3 text-zinc-400 max-w-2xl">
            Ofrecemos procesos presenciales y en línea pensados para resultados reales: claridad, hábitos y progreso
            sostenido.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <article
                key={s.id}
                className="relative rounded-2xl overflow-hidden border border-white/6 bg-gradient-to-tr from-white/[0.01] to-transparent shadow-sm"
                aria-labelledby={`service-${s.id}-title`}
              >
                {/* Imagen */}
                <div className="relative">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-52 sm:h-56 md:h-64 object-cover"
                    loading="lazy"
                  />

                  {/* etiqueta no pegada — espacio consistente */}
                  <span
                    className="absolute left-4 bottom-4 inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm bg-black/50 border border-white/6 text-white shadow"
                    style={{ transform: "translateZ(0)" }}
                  >
                    <TagIcon />
                    Programa
                  </span>

                  {/* precio pequeño en la esquina superior */}
                  <div className="absolute right-4 top-4 inline-flex items-baseline gap-2 px-3 py-1 rounded-full bg-white/6 border border-white/8 text-sm text-white">
                    <span className="text-xs text-zinc-300">{s.priceLabel}</span>
                    {s.price ? (
                      <strong className="ml-1 text-sm text-[#FF9500]">{formatCOP(s.price)}</strong>
                    ) : (
                      <span className="ml-1 text-sm text-zinc-300">Consultar</span>
                    )}
                  </div>
                </div>

                {/* contenido */}
                <div className="p-5 md:p-6 flex flex-col gap-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 id={`service-${s.id}-title`} className="text-lg font-semibold leading-tight">
                        {s.title}
                      </h3>
                      <p className="text-sm text-[#FF9500] mt-1">{s.subtitle}</p>
                    </div>
                    <div className="flex-shrink-0 text-zinc-400 text-sm">{s.duration}</div>
                  </div>

                  <p className="text-sm text-zinc-300 leading-relaxed">{s.description}</p>

                  <div className="mt-auto flex items-center justify-between gap-3">
                    <Link to={`/carrito?programa=${encodeURIComponent(s.id)}`} aria-label={`Comprar ${s.title}`}>
                      <Button
                        size="md"
                        className="flex items-center gap-2 bg-[#FF9500] text-[#08141b] hover:brightness-95 px-4 py-2 rounded-lg"
                      >
                        Comprar
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </Link>

                    <Link to={`/servicios/coaching`} className="text-sm text-zinc-400 hover:text-white">
                      Más detalles
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}

/* Icono usado en la etiqueta — pequeño, neutro y legítimo (evita texturas obvias de IA) */
function TagIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden focusable="false">
      <path d="M3 11.5L11.5 3 21 12.5 12.5 21 3 11.5z" fill="#FF9500" opacity="0.12" />
      <path d="M7.5 7.5a1 1 0 100-2 1 1 0 000 2z" fill="#FF9500" />
    </svg>
  );
}
