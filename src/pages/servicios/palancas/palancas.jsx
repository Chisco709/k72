import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { Zap, Brain, Heart, Target, Compass, Flame } from "lucide-react"

export default function PalancasPage() {
  const navigate = useNavigate()
  const [hoveredPalanca, setHoveredPalanca] = useState(null)

  const palancas = [
    {
      id: 1,
      title: "Claridad Mental",
      description:
        "Desarrolla la capacidad de ver tus objetivos con precisión y elimina el ruido mental que te distrae.",
      icon: Brain,
      color: "from-blue-500 to-cyan-500",
      accent: "bg-blue-500/10"
    },
    {
      id: 2,
      title: "Autodisciplina",
      description: "Cultiva la fuerza interior para mantener compromiso con tus metas incluso cuando es difícil.",
      icon: Zap,
      color: "from-purple-500 to-pink-500",
      accent: "bg-purple-500/10"
    },
    {
      id: 3,
      title: "Inteligencia Emocional",
      description: "Domina tus emociones y desarrolla la capacidad de gestionar relaciones de forma efectiva.",
      icon: Heart,
      color: "from-rose-500 to-orange-500",
      accent: "bg-rose-500/10"
    },
    {
      id: 4,
      title: "Visión Estratégica",
      description: "Define rutas claras hacia tus objetivos y adapta tu estrategia con inteligencia.",
      icon: Target,
      color: "from-emerald-500 to-teal-500",
      accent: "bg-emerald-500/10"
    },
    {
      id: 5,
      title: "Resiliencia",
      description: "Desarrolla la capacidad de levantarte después de cada obstáculo más fuerte que antes.",
      icon: Flame,
      color: "from-amber-500 to-red-500",
      accent: "bg-amber-500/10"
    },
    {
      id: 6,
      title: "Conexión Auténtica",
      description: "Cultiva relaciones profundas y significativas que alimenten tu crecimiento personal.",
      icon: Compass,
      color: "from-indigo-500 to-blue-500",
      accent: "bg-indigo-500/10"
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Integrated Header Section */}
      <div className="relative overflow-hidden pt-32 md:pt-36 pb-16 px-4 sm:px-6 lg:px-8 mt-16">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto mb-16">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="mb-12 text-center">
              <p className="text-lg sm:text-xl lg:text-2xl font-light text-white/80 leading-relaxed max-w-3xl mx-auto italic">
                En cada persona habita un poder tan inmenso que, cuando aprende a canalizarlo con propósito y
                disciplina, tiene la capacidad de transformar no solo su vida, sino también la realidad que lo rodea.
                Este es el viaje que te invitamos a recorrer:{" "}
                <span className="font-semibold text-white">
                  descubrir y activar tu verdadero potencial para alcanzar.
                </span>
              </p>
            </div>

            <div className="inline-flex items-center justify-center w-full mb-8">
              <div className="h-px flex-grow bg-gradient-to-r from-transparent to-white/30"></div>
              <span className="mx-6 text-xs font-semibold text-white/60 uppercase tracking-widest">Poder Personal</span>
              <div className="h-px flex-grow bg-gradient-to-l from-transparent to-white/30"></div>
            </div>

            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tight text-center">
              <span className="block">Las Palancas</span>
              <span className="block text-4xl sm:text-6xl lg:text-7xl font-bold text-white/70 mt-2">
                del Poder Personal
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed text-center">
              Seis herramientas fundamentales que transforman el potencial en realidad y activan tu verdadero poder.
            </p>
          </motion.div>
        </div>

        <div className="relative h-px bg-gradient-to-r from-transparent via-white/20 to-transparent max-w-4xl mx-auto"></div>
      </div>

      {/* Palancas Grid */}
      <div className="relative px-4 sm:px-6 lg:px-8 py-20 max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {palancas.map((palanca, index) => {
            const IconComponent = palanca.icon
            return (
              <motion.div
                key={palanca.id}
                variants={itemVariants}
                onMouseEnter={() => setHoveredPalanca(palanca.id)}
                onMouseLeave={() => setHoveredPalanca(null)}
                className="group relative"
              >
                <div
                  className={`absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 rounded-2xl blur-2xl transition-all duration-500`}
                ></div>

                <div
                  className={`relative h-full p-8 rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-500 bg-white/5 backdrop-blur-sm hover:bg-white/10`}
                >
                  {/* Number indicator */}
                  <div className="absolute top-6 right-6 text-4xl font-black text-white/20 group-hover:text-white/40 transition-colors">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div
                    className={`mb-6 inline-flex p-4 rounded-xl bg-white/10 border border-white/20 group-hover:bg-white/20 transition-all duration-300`}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-white transition-colors">
                    {palanca.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed text-sm group-hover:text-white/80 transition-colors">
                    {palanca.description}
                  </p>

                  <div className="absolute bottom-0 left-0 h-1 bg-white w-0 group-hover:w-full transition-all duration-500 rounded-b-2xl"></div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>

      {/* Integration Section */}
      <div className="relative px-4 sm:px-6 lg:px-8 py-20 max-w-4xl mx-auto">
        <div className="relative h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-16"></div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        >
          {[
            { label: "Herramientas Prácticas", value: "50+" },
            { label: "Transformación Comprobada", value: "30 días" },
            { label: "Impacto Medible", value: "360°" },
          ].map((item, index) => (
            <div key={index} className="py-8">
              <div className="text-4xl sm:text-5xl font-black text-white mb-2">{item.value}</div>
              <p className="text-white/60 font-medium">{item.label}</p>
            </div>
          ))}
        </motion.div>

        <div className="relative h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mt-16"></div>
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative px-4 sm:px-6 lg:px-8 py-16 text-center max-w-2xl mx-auto"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Activa Tu Poder Personal</h2>
        <p className="text-white/60 mb-8 leading-relaxed">
          Accede a un programa completo que te enseña a integrar estas palancas de forma estratégica para lograr
          transformación duradera.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/servicios/coaching')}
          className="group relative px-10 py-4 rounded-xl font-bold text-black overflow-hidden"
        >
          <div className="absolute inset-0 bg-white group-hover:bg-white/90 transition-all duration-300"></div>
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-black/10 blur-xl transition-opacity duration-300"></div>
          <span className="relative">Comenzar Transformación</span>
        </motion.button>
      </motion.div>
    </div>
  )
}
