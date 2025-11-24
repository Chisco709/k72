import { Link } from "react-router-dom"
import { ArrowRight, CalendarDays, Check, Sparkles, Users, Zap } from "lucide-react"

import Footer from "../footer/footer"

const serviceFamilies = [
  {
    id: "coaching",
    title: "Coaching Individual",
    description: "Procesos personalizados que combinan neurociencias, PNL y psicología aplicada para una transformación integral.",
    pill: "1:1",
    href: "/servicios/coaching",
    highlights: [
      "Diseño de plan de vida",
      "Cierre de brechas mentales",
      "Acompañamiento confidencial"
    ]
  },
  {
    id: "talleres",
    title: "Conferencias y Talleres",
    description: "Experiencias inmersivas para equipos que necesitan energía, foco y habilidades comunicacionales de alto impacto.",
    pill: "Equipos",
    href: "/servicios/conferencias",
    highlights: [
      "Formatos presenciales y virtuales",
      "Diseño a la medida",
      "Activaciones experienciales"
    ]
  },
  {
    id: "armoniza",
    title: "Armoniza tu Vida",
    description: "Metodología propia que integra cuerpo, mente y espíritu para prevenir el estrés y reconectar con la calma.",
    pill: "Mindfulness",
    href: "/servicios/armonizatuvida",
    highlights: [
      "Rutinas neuro-emocionales",
      "Gestión del estrés",
      "Guías descargables"
    ]
  },
  {
    id: "transformacion",
    title: "Transformación Profunda",
    description: "Programas estratégicos para organizaciones que desean construir culturas de alto rendimiento y liderazgo consciente.",
    pill: "Empresas",
    href: "/servicios/transformacion",
    highlights: [
      "Mentoría ejecutiva",
      "Dirección por valores",
      "Planes de intervención"
    ]
  }
]

const featuredPrograms = [
  {
    title: "Del cambio a la transformación",
    summary: "Una hoja de ruta para pasar del deseo a la acción medible.",
    href: "/servicios/transformacion",
    tag: "Programa insignia"
  },
  {
    title: "Descubre tu mejor versión",
    summary: "Estrategias mentales y emocionales para elevar tu estándar diario.",
    href: "/servicios/mejorversión",
    tag: "Experiencia premium"
  },
  {
    title: "Las palancas del poder personal",
    summary: "Activa virtudes y hábitos que multiplican tu liderazgo.",
    href: "/servicios/palancas",
    tag: "Retos guiados"
  }
]

export default function ServiciosPage() {
  return (
    <div className="bg-black text-white min-h-screen pt-32">
      <section className="relative overflow-hidden border-b border-zinc-900">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-black to-black" />
        <div className="relative max-w-6xl mx-auto px-6 py-24 space-y-10">
          <div className="inline-flex items-center gap-3 px-4 py-2 border border-zinc-800 rounded-full bg-black/40 backdrop-blur">
            <Sparkles className="h-4 w-4 text-blue-400" />
            <span className="text-xs tracking-[0.25em] uppercase text-zinc-400">Portafolio integral</span>
          </div>
          <div className="space-y-6 max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-black leading-tight">
              Donde el coaching se convierte en{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-white bg-clip-text text-transparent">
                resultados reales
              </span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-400">
              Diseñamos experiencias humanas que combinan ciencia, pedagogía y arte para desbloquear nuevas versiones de ti, de tu equipo y de tu organización.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/carrito?programa=vida"
              className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-zinc-100 transition-all"
            >
              Reservar sesión
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/retos"
              className="inline-flex items-center gap-2 border border-zinc-800 px-8 py-4 rounded-full font-semibold text-white hover:bg-zinc-900/70 transition-colors"
            >
              Explorar retos
            </Link>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 pt-6">
            {[
              { icon: Users, label: "+2.500 personas acompañadas" },
              { icon: CalendarDays, label: "18 años de práctica clínica" },
              { icon: Zap, label: "Programas en 5 países" }
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3 text-zinc-400">
                <item.icon className="h-5 w-5 text-blue-400" />
                <span className="text-sm uppercase tracking-[0.2em]">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20 space-y-16">
        <header className="text-center space-y-3">
          <p className="text-xs tracking-[0.3em] text-blue-300 uppercase">Servicios principales</p>
          <h2 className="text-4xl font-bold">Diseñados para cada etapa de tu proceso</h2>
          <p className="text-zinc-400 max-w-3xl mx-auto">
            Cada servicio tiene metodologías, métricas y equipos especializados para asegurar una experiencia transformadora de principio a fin.
          </p>
        </header>

        <div className="grid gap-10 md:grid-cols-2">
          {serviceFamilies.map((service) => (
            <article
              key={service.id}
              className="relative border border-zinc-900 rounded-3xl p-8 bg-gradient-to-br from-zinc-950 to-black hover:border-blue-500/40 transition-all group"
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-xs uppercase tracking-[0.3em] text-zinc-500">{service.pill}</span>
                  <span className="w-2 h-2 rounded-full bg-blue-500" />
                </div>
                <h3 className="text-3xl font-semibold">{service.title}</h3>
                <p className="text-zinc-400 text-base">{service.description}</p>
                <ul className="space-y-2 pt-4">
                  {service.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-center gap-3 text-sm text-zinc-300">
                      <Check className="h-4 w-4 text-blue-400" />
                      {highlight}
                    </li>
                  ))}
                </ul>
                <Link
                  to={service.href}
                  className="inline-flex items-center gap-2 text-blue-400 mt-6 font-semibold hover:gap-3 transition-all"
                >
                  Ver servicio
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-zinc-900 bg-gradient-to-b from-black to-blue-950/10">
        <div className="max-w-6xl mx-auto px-6 py-20 space-y-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-blue-200">Programas destacados</p>
              <h2 className="text-4xl font-bold mt-2">Recorridos que cambian historias</h2>
            </div>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-white bg-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-500 transition-colors"
            >
              Ver casos reales
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-4">
            {featuredPrograms.map((program) => (
              <div
                key={program.title}
                className="group border border-zinc-900 rounded-2xl px-6 py-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4 hover:border-blue-500/40 transition-colors"
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-blue-300">{program.tag}</p>
                  <h3 className="text-2xl font-semibold mt-2">{program.title}</h3>
                  <p className="text-zinc-400 mt-1">{program.summary}</p>
                </div>
                <Link
                  to={program.href}
                  className="inline-flex items-center gap-2 text-blue-400 font-semibold"
                >
                  Explorar
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

