import { Link } from "react-router-dom"
import { Button } from "../../../components/ui/button"
import Badge from "../../../components/ui/badge"
import { ArrowRight, Heart, Trophy, Mountain, Sparkles, Target } from "lucide-react"

export default function CoachingPage() {
  const services = [
    {
      id: "vida",
      title: "Coaching de Vida",
      subtitle: "Viaje al Significado",
      description:
        "Un proceso de entrenamiento personalizado que cierra la brecha entre lo que eres hoy y lo que puedes llegar a ser.",
      icon: Heart,
      duration: "25 horas | 5-10 semanas",
      features: [
        "Proceso confidencial y profundo",
        "Diseño de Plan de Vida",
        "Transformación de creencias limitantes",
        "Desarrollo de competencias emocionales",
      ],
      color: "from-blue-950 to-slate-900",
    },
    {
      id: "deportivo",
      title: "Coaching Deportivo",
      subtitle: "Alto Rendimiento",
      description:
        "Despierta el potencial del deportista, impulsando su autoconfianza y enfoque mediante el aprendizaje interior.",
      icon: Trophy,
      duration: "Personalizado según objetivos",
      features: [
        "Trabajo con deportistas y equipos",
        "Gestión emocional del rendimiento",
        "El Juego Interior del deportista",
        "Dirección por Valores (DPV)",
      ],
      color: "from-slate-900 to-blue-950",
    },
    {
      id: "guerrero",
      title: "El Camino del Guerrero",
      subtitle: "Alquimia del Ser",
      description:
        "Una experiencia inmersiva para equilibrar cuerpo, mente y espíritu, enfrentando el ego y descubriendo tu propósito.",
      icon: Mountain,
      duration: "8 horas | Máx. 20 personas",
      features: [
        "Conexión con el presente",
        "Autoconocimiento profundo",
        "Desarrollo de virtudes personales",
        "Prácticas en la naturaleza",
      ],
      color: "from-blue-950 to-slate-900",
    },
    {
      id: "excelencia",
      title: "El Sendero de la Excelencia",
      subtitle: "El éxito tiene una antesala",
      description:
        "Descubre tus talentos esenciales y aprende a proyectarlos para alcanzar una vida más plena y consciente.",
      icon: Sparkles,
      duration: "8 horas | Máx. 20 personas",
      features: [
        "Identificación de fortalezas",
        "Desarrollo de competencias blandas",
        "Liderazgo desde la virtud",
        "Práctica guiada en entorno natural",
      ],
      color: "from-slate-900 to-blue-950",
    },
    {
      id: "busqueda",
      title: "La Física de la Búsqueda",
      subtitle: "Transformación y Propósito",
      description:
        "Un viaje de autodescubrimiento inspirado en ‘Comer, Rezar y Amar’. Fusión de ciencia, espiritualidad y coaching.",
      icon: Target,
      duration: "2 talleres | 6-8 horas cada uno",
      features: [
        "Física Cuántica aplicada",
        "Coaching Ontológico",
        "Programación Neurolingüística",
        "Psicología de la Felicidad",
      ],
      color: "from-blue-950 to-slate-900",
    },
  ]

  return (
    <main className="min-h-screen bg-black text-white">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-zinc-900">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/30 via-black to-black" />
        <div className="relative max-w-6xl mx-auto px-6 py-24 lg:py-32 animate-fade-in">
          <Badge className="mb-6 bg-blue-950/40 text-blue-200 border border-blue-900/60">
            Servicios de Coaching
          </Badge>

          <h1 className="text-5xl lg:text-7xl font-semibold tracking-tight mb-6 leading-tight">
            Transforma tu{" "}
            <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-white bg-clip-text text-transparent">
              Potencial en Realidad
            </span>
          </h1>

          <p className="text-lg text-zinc-400 leading-relaxed mb-10 max-w-2xl">
            Entrenamientos personalizados para el desarrollo integral del potencial humano. Coaching Ontológico
            diseñado para evolucionar tu vida.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              className="flex items-center justify-center gap-2 bg-white text-black font-medium hover:bg-zinc-200 transition-all"
            >
              Agendar Consulta
              <ArrowRight className="h-4 w-4" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-zinc-700 text-white hover:bg-zinc-900 bg-transparent"
            >
              Ver Testimonios
            </Button>
          </div>

          {/* luces suaves decorativas */}
          <div className="absolute top-32 right-16 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-16 right-32 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
        </div>
      </section>

      {/* SERVICES */}
      <section className="max-w-6xl mx-auto px-6 py-24 space-y-16">
        <header className="text-center space-y-4">
          <h2 className="text-4xl lg:text-5xl font-semibold text-white">Nuestros Programas</h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Cada programa está cuidadosamente diseñado para guiarte en tu camino hacia la plenitud y la excelencia.
          </p>
        </header>

        <div className="grid gap-12">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <article
                key={service.id}
                className="group relative bg-gradient-to-br from-zinc-950 to-black border border-zinc-900 rounded-3xl overflow-hidden hover:shadow-[0_0_30px_-10px_rgba(59,130,246,0.4)] transition-all duration-700"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-700`}
                />
                <div className="relative p-10 lg:p-12 flex flex-col lg:flex-row gap-10">
                  <div className="lg:w-1/3">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-950/40 border border-blue-900/50 mb-6 group-hover:scale-110 transition-transform duration-500">
                      <Icon className="w-8 h-8 text-blue-400" />
                    </div>
                    <h3 className="text-3xl font-semibold mb-1">{service.title}</h3>
                    <p className="text-blue-400 font-medium mb-4">{service.subtitle}</p>
                    <p className="text-sm text-zinc-500 mb-6">{service.duration}</p>
                    <Link to={`/carrito?programa=${service.id}`}>
                      <Button
                        variant="outline"
                        className="flex items-center justify-center gap-2 border-zinc-700 text-white hover:bg-zinc-900 transition-all"
                      >
                        Comprar Programa
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>

                  <div className="lg:w-2/3 lg:border-l lg:border-zinc-800 lg:pl-10">
                    <p className="text-lg text-zinc-300 leading-relaxed mb-6">{service.description}</p>
                    <ul className="grid sm:grid-cols-2 gap-3">
                      {service.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 p-3 rounded-lg bg-zinc-900/40 border border-zinc-800/50 hover:bg-zinc-900/60 transition-colors"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2" />
                          <span className="text-sm text-zinc-400">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </section>
    </main>
  )
}
