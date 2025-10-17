import { useNavigate } from 'react-router-dom'
import { ArrowRight, Calendar, Target, Zap, Users, TrendingUp, CheckCircle2 } from 'lucide-react'

export default function RetosPage() {
  const navigate = useNavigate()

  const challenges = [
    {
      id: 1,
      title: "Crea Tu Sistema de Éxito",
      duration: "30 días",
      description: "Transforma tu mentalidad y construye hábitos que te llevarán al éxito profesional y personal.",
      color: "from-blue-600 to-cyan-500",
      accentColor: "text-cyan-400",
      bgColor: "bg-gradient-to-br from-blue-950 via-blue-900 to-cyan-900",
      features: ["Metodología probada", "Seguimiento diario", "Resultados medibles"],
      cta: "¿Estás listo para el cambio?",
      spots: "Cupos limitados",
    },
    {
      id: 2,
      title: "Aprende a Ser Feliz",
      duration: "30 días",
      description: "Descubre las claves de la felicidad genuina y aprende a cultivar bienestar emocional duradero.",
      color: "from-cyan-500 to-teal-400",
      accentColor: "text-teal-400",
      bgColor: "bg-gradient-to-br from-cyan-950 via-teal-900 to-cyan-900",
      features: ["Psicología positiva", "Ejercicios prácticos", "Comunidad de apoyo"],
      cta: "Comienza tu transformación",
      spots: "Inscripciones abiertas",
    },
    {
      id: 3,
      title: "Desafía Tu Potencial",
      duration: "30 días",
      description: "Rompe tus límites y descubre de qué eres realmente capaz cuando te comprometes con tu crecimiento.",
      color: "from-green-500 to-emerald-400",
      accentColor: "text-green-400",
      bgColor: "bg-gradient-to-br from-gray-900 via-green-950 to-emerald-950",
      features: ["Coaching personalizado", "Metas alcanzables", "Transformación real"],
      cta: "Acepta el desafío",
      spots: "Últimos cupos",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-black to-cyan-950" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(59,130,246,0.15),transparent_50%)]" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8">
            <Zap className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-medium text-white/90">Programas de Transformación</span>
          </div>

          {/* Main Title */}
          <h1 className="text-7xl md:text-9xl font-black mb-6 leading-none">
            <span className="block text-white">RETOS</span>
            <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
              30 DÍAS
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto mb-12 leading-relaxed">
            Transforma tu mentalidad, transforma tu destino.
            <br />
            Desafíate a cambiar tu vida en solo 30 días.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => document.getElementById('retos-section').scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:shadow-cyan-500/40 hover:scale-105 inline-flex items-center gap-2"
            >
              Explorar Retos
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => window.open('https://wa.me/573117472236', '_blank')}
              className="border-2 border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 backdrop-blur-sm text-white px-8 py-6 text-lg font-semibold rounded-xl transition-all duration-300"
            >
              Más Información
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto mt-20">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                30
              </div>
              <div className="text-sm text-white/60 font-medium">Días de Transformación</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent mb-2">
                3
              </div>
              <div className="text-sm text-white/60 font-medium">Retos Disponibles</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-teal-400 to-green-400 bg-clip-text text-transparent mb-2">
                100%
              </div>
              <div className="text-sm text-white/60 font-medium">Compromiso Total</div>
            </div>
          </div>
        </div>

        {/* Decorative Border */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
      </section>

      {/* Challenges Section */}
      <section id="retos-section" className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              Elige Tu{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Desafío</span>
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Cada reto está diseñado para transformar un aspecto clave de tu vida en 30 días
            </p>
          </div>

          {/* Challenges Grid */}
          <div className="space-y-12">
            {challenges.map((challenge, index) => (
              <div
                key={challenge.id}
                className={`group relative rounded-3xl overflow-hidden transition-all duration-500 hover:scale-[1.02] ${
                  index % 2 === 0 ? "ml-0 mr-auto" : "ml-auto mr-0"
                } max-w-5xl`}
              >
                {/* Background */}
                <div className={`absolute inset-0 ${challenge.bgColor} opacity-90`} />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05),transparent_70%)]" />

                {/* Border Glow */}
                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${challenge.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}
                />

                {/* Content */}
                <div className="relative p-12 md:p-16">
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                    {/* Left Content */}
                    <div className="flex-1">
                      {/* Badge */}
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/20 border border-red-500/30 backdrop-blur-sm mb-6">
                        <Target className="w-4 h-4 text-red-400" />
                        <span className="text-sm font-bold text-red-400">{challenge.spots}</span>
                      </div>

                      {/* Title */}
                      <h3 className="text-4xl md:text-5xl font-black mb-4 leading-tight">{challenge.title}</h3>

                      {/* Duration */}
                      <div className="flex items-center gap-2 mb-6">
                        <Calendar className={`w-5 h-5 ${challenge.accentColor}`} />
                        <span className={`text-lg font-bold ${challenge.accentColor}`}>{challenge.duration}</span>
                      </div>

                      {/* Description */}
                      <p className="text-lg text-white/70 mb-8 leading-relaxed max-w-xl">{challenge.description}</p>

                      {/* Features */}
                      <div className="flex flex-wrap gap-3 mb-8">
                        {challenge.features.map((feature, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
                          >
                            <CheckCircle2 className={`w-4 h-4 ${challenge.accentColor}`} />
                            <span className="text-sm font-medium text-white/90">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* CTA Text */}
                      <p className="text-xl font-bold text-white mb-6">{challenge.cta}</p>

                      {/* Button */}
                      <button
                        onClick={() => window.open('https://wa.me/573117472236', '_blank')}
                        className={`bg-gradient-to-r ${challenge.color} hover:shadow-lg hover:shadow-current/25 text-white px-8 py-6 text-lg font-bold rounded-xl transition-all duration-300 hover:scale-105 inline-flex items-center gap-2`}
                      >
                        Inscribirme Ahora
                        <ArrowRight className="w-5 h-5" />
                      </button>
                    </div>

                    {/* Right - Large Number */}
                    <div className="hidden md:block">
                      <div
                        className={`text-[12rem] font-black leading-none opacity-20 bg-gradient-to-br ${challenge.color} bg-clip-text text-transparent`}
                      >
                        30
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Border */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${challenge.color}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why 30 Days Section */}
      <section className="py-24 px-6 relative">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-3xl p-12 md:p-16 border border-white/10">
            <h2 className="text-4xl md:text-5xl font-black mb-8 text-center">
              ¿Por Qué{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">30 Días</span>?
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">Hábitos Sólidos</h3>
                <p className="text-white/60 leading-relaxed">
                  30 días es el tiempo ideal para formar nuevos hábitos que perduren
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-teal-500/20 border border-cyan-500/30 flex items-center justify-center">
                  <Target className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">Resultados Visibles</h3>
                <p className="text-white/60 leading-relaxed">
                  Tiempo suficiente para ver cambios reales y medibles en tu vida
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-teal-500/20 to-green-500/20 border border-teal-500/30 flex items-center justify-center">
                  <Users className="w-8 h-8 text-teal-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">Compromiso Alcanzable</h3>
                <p className="text-white/60 leading-relaxed">
                  Un período manejable que mantiene tu motivación y enfoque
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
            Transforma Tu Mentalidad,
            <br />
            <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Transforma Tu Destino
            </span>
          </h2>

          <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed">
            El cambio que buscas está a solo 30 días de distancia. ¿Estás listo para dar el primer paso?
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/servicios/coaching')}
              className="bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-700 hover:to-emerald-600 text-white px-10 py-7 text-lg font-bold rounded-xl shadow-lg shadow-green-500/25 transition-all duration-300 hover:shadow-green-500/40 hover:scale-105 inline-flex items-center justify-center gap-2"
            >
              Comenzar Mi Transformación
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Contact Info */}
          <div className="mt-12 pt-12 border-t border-white/10">
            <p className="text-white/60 mb-4">¿Tienes preguntas? Contáctanos</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm">
              <a
                href="https://wa.me/573117472236"
                className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                +57 311 7472236
              </a>
              <span className="hidden sm:block text-white/30">•</span>
              <a
                href="https://instagram.com/coachrenechisco"
                className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                @coachrenechisco
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Decorative Bottom Border */}
      <div className="h-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-green-500" />
    </div>
  )
}