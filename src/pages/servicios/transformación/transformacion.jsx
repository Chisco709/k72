"use client"

import { useState, useEffect } from "react"
import { ArrowRight, Sparkles, Target, TrendingUp, Users, Zap, CheckCircle2, Brain, Heart, Rocket } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TransformacionPage() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const transformationSteps = [
    {
      number: "01",
      title: "Diagnóstico Profundo",
      description:
        "Análisis completo de tu situación actual, identificando patrones, creencias limitantes y áreas de oportunidad.",
      icon: Brain,
      color: "from-cyan-500 to-blue-500",
    },
    {
      number: "02",
      title: "Diseño de Ruta",
      description:
        "Creación de un plan personalizado con objetivos claros, estrategias específicas y métricas de progreso.",
      icon: Target,
      color: "from-blue-500 to-indigo-500",
    },
    {
      number: "03",
      title: "Implementación Activa",
      description: "Ejecución del plan con acompañamiento continuo, ajustes dinámicos y herramientas prácticas.",
      icon: Rocket,
      color: "from-indigo-500 to-purple-500",
    },
    {
      number: "04",
      title: "Consolidación",
      description: "Integración de nuevos hábitos, mentalidad transformada y resultados sostenibles en el tiempo.",
      icon: Sparkles,
      color: "from-purple-500 to-pink-500",
    },
  ]

  const benefits = [
    { icon: Brain, title: "Claridad Mental", description: "Pensamiento estratégico y toma de decisiones efectiva" },
    { icon: Heart, title: "Bienestar Emocional", description: "Gestión emocional y relaciones saludables" },
    { icon: TrendingUp, title: "Crecimiento Profesional", description: "Desarrollo de carrera y liderazgo" },
    { icon: Users, title: "Impacto Social", description: "Influencia positiva en tu entorno" },
    { icon: Zap, title: "Energía Renovada", description: "Vitalidad y motivación constante" },
    { icon: Target, title: "Objetivos Alcanzados", description: "Metas cumplidas y nuevos horizontes" },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Integrated Header - No Traditional Hero */}
      <div className="relative overflow-hidden border-b border-zinc-800">
        {/* Animated Background Grid */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(to right, #3b82f6 1px, transparent 1px),
                             linear-gradient(to bottom, #3b82f6 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
              transform: `translateY(${scrollY * 0.3}px)`,
            }}
          />
        </div>

        {/* Floating Orbs */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000" />

        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <div className="flex items-start justify-between gap-12">
            {/* Left: Title & Intro */}
            <div className="flex-1 space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span className="text-sm font-medium text-cyan-400">Servicios de Transformación</span>
              </div>

              <h1 className="text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent">
                  Transforma
                </span>
                <br />
                <span className="text-white">tu Realidad</span>
              </h1>

              <p className="text-xl text-zinc-400 leading-relaxed max-w-2xl">
                Un proceso integral y personalizado que te lleva desde donde estás hasta donde quieres estar, combinando
                ciencia, estrategia y acompañamiento profesional.
              </p>

              <div className="flex items-center gap-4 pt-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0 px-8 h-14 text-lg group"
                >
                  Iniciar Transformación
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-zinc-700 hover:bg-zinc-900 h-14 px-8 text-lg bg-transparent"
                >
                  Ver Casos de Éxito
                </Button>
              </div>
            </div>

            {/* Right: Stats */}
            <div className="flex-shrink-0 space-y-6">
              <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-2xl p-8 backdrop-blur-sm">
                <div className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  95%
                </div>
                <div className="text-zinc-400 mt-2">Tasa de Éxito</div>
              </div>
              <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-2xl p-8 backdrop-blur-sm">
                <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
                  500+
                </div>
                <div className="text-zinc-400 mt-2">Vidas Transformadas</div>
              </div>
              <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-2xl p-8 backdrop-blur-sm">
                <div className="text-5xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
                  12
                </div>
                <div className="text-zinc-400 mt-2">Semanas Promedio</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Transformation Process */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
                El Proceso de Transformación
              </span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
              Un método probado y estructurado que te guía paso a paso hacia tu mejor versión
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {transformationSteps.map((step, index) => {
              const Icon = step.icon
              return (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-3xl p-10 hover:border-zinc-700 transition-all duration-500 hover:scale-[1.02]"
                >
                  {/* Step Number */}
                  <div className="absolute -top-6 -left-6 w-20 h-20 rounded-2xl bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 flex items-center justify-center">
                    <span className={`text-3xl font-bold bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}>
                      {step.number}
                    </span>
                  </div>

                  {/* Icon */}
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${step.color} p-0.5 mb-6 group-hover:scale-110 transition-transform duration-500`}
                  >
                    <div className="w-full h-full bg-black rounded-2xl flex items-center justify-center">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-zinc-400 leading-relaxed">{step.description}</p>

                  {/* Connecting Line (except last item) */}
                  {index < transformationSteps.length - 1 && index % 2 === 0 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-zinc-700 to-transparent" />
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
                Beneficios de la Transformación
              </span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
              Resultados tangibles y duraderos en todas las áreas de tu vida
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-500 hover:scale-105"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 p-0.5 mb-6 group-hover:scale-110 transition-transform duration-500">
                    <div className="w-full h-full bg-black rounded-xl flex items-center justify-center">
                      <Icon className="w-7 h-7 text-cyan-400" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-zinc-400 leading-relaxed">{benefit.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />

        {/* Decorative Elements */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-8">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  ¿Qué Incluye?
                </span>
              </h2>
              <p className="text-xl text-zinc-400 mb-12 leading-relaxed">
                Un programa completo diseñado para garantizar tu éxito en cada etapa del proceso de transformación.
              </p>

              <div className="space-y-6">
                {[
                  "Sesiones individuales personalizadas",
                  "Evaluaciones psicométricas profesionales",
                  "Plan de acción estratégico detallado",
                  "Herramientas y recursos exclusivos",
                  "Seguimiento continuo y ajustes",
                  "Acceso a comunidad de apoyo",
                  "Material educativo especializado",
                  "Certificado de transformación",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <CheckCircle2 className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-lg text-zinc-300 group-hover:text-white transition-colors">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-3xl p-12 backdrop-blur-sm">
                <div className="space-y-8">
                  <div>
                    <div className="text-sm text-cyan-400 font-medium mb-2">Inversión</div>
                    <div className="text-6xl font-bold text-white mb-2">$2,500</div>
                    <div className="text-zinc-400">Programa completo de 12 semanas</div>
                  </div>

                  <div className="border-t border-zinc-800 pt-8 space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-zinc-400">Sesiones incluidas</span>
                      <span className="text-white font-semibold">12 sesiones</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-zinc-400">Duración por sesión</span>
                      <span className="text-white font-semibold">90 minutos</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-zinc-400">Modalidad</span>
                      <span className="text-white font-semibold">Presencial/Virtual</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-zinc-400">Garantía</span>
                      <span className="text-white font-semibold">30 días</span>
                    </div>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0 h-14 text-lg group">
                    Agendar Consulta Inicial
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>

                  <p className="text-sm text-zinc-500 text-center">Consulta inicial gratuita de 30 minutos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-indigo-500/10" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.15) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
              ¿Listo para Transformar tu Vida?
            </span>
          </h2>
          <p className="text-2xl text-zinc-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            El momento perfecto para comenzar es ahora. Da el primer paso hacia la vida que mereces.
          </p>
          <div className="flex items-center justify-center gap-6">
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0 px-12 h-16 text-xl group"
            >
              Comenzar Ahora
              <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-zinc-700 hover:bg-zinc-900 h-16 px-12 text-xl bg-transparent"
            >
              Más Información
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
