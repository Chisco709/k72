import React, { useEffect, useRef } from "react"
import { Button } from "../../../components/ui/button"
import { ArrowRight, Sparkles, Target, Zap, TrendingUp, Award, Users, Brain, Heart, Rocket } from "lucide-react"

export default function MejorVersionPage() {
  const scrollRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = document.querySelectorAll(".fade-in-section")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Integrated Header with Content - No Traditional Hero */}
      <div className="relative">
        {/* Animated Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0a0a0a_1px,transparent_1px),linear-gradient(to_bottom,#0a0a0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

        <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20">
          {/* Floating Badge */}
          <div className="fade-in-section inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 mb-8">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-cyan-400 font-medium">Transformación Personal</span>
          </div>

          {/* Split Layout - Title and Intro */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left: Massive Title */}
            <div className="fade-in-section">
              <h1 className="text-7xl lg:text-8xl xl:text-9xl font-black leading-[0.9] tracking-tighter">
                TU
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600">
                  MEJOR
                </span>
                <span className="block">VERSIÓN</span>
              </h1>

              {/* Decorative Element */}
              <div className="mt-8 flex items-center gap-4">
                <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full" />
                <div className="h-1 w-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full" />
                <div className="h-1 w-8 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full" />
              </div>
            </div>

            {/* Right: Intro Content */}
            <div className="fade-in-section lg:pt-12 space-y-6">
              <p className="text-2xl text-zinc-300 leading-relaxed">
                No se trata de cambiar quién eres, sino de{" "}
                <span className="text-cyan-400 font-semibold">descubrir todo lo que puedes llegar a ser</span>.
              </p>
              <p className="text-lg text-zinc-400 leading-relaxed">
                Un proceso de transformación profunda que te llevará desde donde estás ahora hasta la versión más
                auténtica, poderosa y realizada de ti mismo.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0 text-lg px-8 h-14 group"
                >
                  Comenzar Ahora
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-zinc-700 hover:border-cyan-500 hover:bg-cyan-500/10 text-lg px-8 h-14 bg-transparent"
                >
                  Ver Programas
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar - Integrated Seamlessly */}
      <div className="fade-in-section border-y border-zinc-800 bg-zinc-950/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "1000+", label: "Vidas Transformadas" },
              { number: "95%", label: "Tasa de Éxito" },
              { number: "15+", label: "Años de Experiencia" },
              { number: "4.9/5", label: "Satisfacción" },
            ].map((stat, i) => (
              <div key={i} className="text-center group cursor-pointer">
                <div className="text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 group-hover:from-cyan-300 group-hover:to-blue-500 transition-all">
                  {stat.number}
                </div>
                <div className="text-sm text-zinc-400 mt-2 group-hover:text-zinc-300 transition-colors">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* The Journey - Non-Traditional Layout */}
      <div className="relative py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="fade-in-section text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-black mb-6">
              El Viaje de{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                Transformación
              </span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
              Un proceso estructurado pero personalizado que se adapta a tu ritmo y necesidades únicas
            </p>
          </div>

          {/* Asymmetric Journey Steps */}
          <div className="space-y-24">
            {/* Step 1 - Left Aligned */}
            <div className="fade-in-section grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="relative p-8 rounded-3xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 backdrop-blur-sm group hover:border-cyan-500/40 transition-all">
                  <div className="absolute -top-6 -left-6 w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-2xl font-black shadow-lg shadow-cyan-500/50">
                    01
                  </div>
                  <Brain className="w-12 h-12 text-cyan-400 mb-4" />
                  <h3 className="text-3xl font-bold mb-4">Autoconocimiento Profundo</h3>
                  <p className="text-zinc-400 leading-relaxed">
                    Descubre quién eres realmente, más allá de las máscaras sociales y las expectativas externas.
                    Identifica tus valores, fortalezas y áreas de crecimiento.
                  </p>
                </div>
              </div>
              <div className="order-1 lg:order-2 flex justify-center">
                <div className="w-64 h-64 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-600/20 blur-3xl" />
              </div>
            </div>

            {/* Step 2 - Right Aligned */}
            <div className="fade-in-section grid lg:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center">
                <div className="w-64 h-64 rounded-full bg-gradient-to-br from-blue-500/20 to-indigo-600/20 blur-3xl" />
              </div>
              <div>
                <div className="relative p-8 rounded-3xl bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border border-blue-500/20 backdrop-blur-sm group hover:border-blue-500/40 transition-all">
                  <div className="absolute -top-6 -right-6 w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-2xl font-black shadow-lg shadow-blue-500/50">
                    02
                  </div>
                  <Target className="w-12 h-12 text-blue-400 mb-4" />
                  <h3 className="text-3xl font-bold mb-4">Visión Clara del Futuro</h3>
                  <p className="text-zinc-400 leading-relaxed">
                    Define con precisión quién quieres ser y qué quieres lograr. Crea una visión inspiradora que te
                    motive a levantarte cada día con propósito.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 - Left Aligned */}
            <div className="fade-in-section grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="relative p-8 rounded-3xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 backdrop-blur-sm group hover:border-indigo-500/40 transition-all">
                  <div className="absolute -top-6 -left-6 w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-2xl font-black shadow-lg shadow-indigo-500/50">
                    03
                  </div>
                  <Zap className="w-12 h-12 text-indigo-400 mb-4" />
                  <h3 className="text-3xl font-bold mb-4">Plan de Acción Estratégico</h3>
                  <p className="text-zinc-400 leading-relaxed">
                    Diseña un plan concreto y realista que te lleve desde donde estás hasta donde quieres estar. Paso a
                    paso, con metas alcanzables y medibles.
                  </p>
                </div>
              </div>
              <div className="order-1 lg:order-2 flex justify-center">
                <div className="w-64 h-64 rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-600/20 blur-3xl" />
              </div>
            </div>

            {/* Step 4 - Right Aligned */}
            <div className="fade-in-section grid lg:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center">
                <div className="w-64 h-64 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-600/20 blur-3xl" />
              </div>
              <div>
                <div className="relative p-8 rounded-3xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 backdrop-blur-sm group hover:border-purple-500/40 transition-all">
                  <div className="absolute -top-6 -right-6 w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-2xl font-black shadow-lg shadow-purple-500/50">
                    04
                  </div>
                  <Rocket className="w-12 h-12 text-purple-400 mb-4" />
                  <h3 className="text-3xl font-bold mb-4">Implementación y Crecimiento</h3>
                  <p className="text-zinc-400 leading-relaxed">
                    Ejecuta tu plan con acompañamiento constante. Supera obstáculos, celebra victorias y ajusta el rumbo
                    cuando sea necesario hasta alcanzar tu mejor versión.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Grid - Creative Layout */}
      <div className="relative py-32 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="fade-in-section text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-black mb-6">
              Lo Que{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Lograrás</span>
            </h2>
          </div>

          {/* Bento Grid Style */}
          <div className="fade-in-section grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Heart,
                title: "Confianza Inquebrantable",
                desc: "Desarrolla una autoestima sólida basada en el autoconocimiento real",
              },
              {
                icon: TrendingUp,
                title: "Crecimiento Continuo",
                desc: "Establece hábitos que te impulsen hacia adelante cada día",
              },
              {
                icon: Award,
                title: "Logros Significativos",
                desc: "Alcanza metas que realmente importan para tu vida",
              },
              {
                icon: Users,
                title: "Relaciones Auténticas",
                desc: "Conecta genuinamente con las personas que te rodean",
              },
              { icon: Brain, title: "Claridad Mental", desc: "Toma decisiones con seguridad y propósito" },
              { icon: Sparkles, title: "Vida con Propósito", desc: "Descubre y vive alineado con tu misión personal" },
            ].map((benefit, i) => (
              <div
                key={i}
                className={`p-8 rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 hover:border-cyan-500/50 transition-all group cursor-pointer ${
                  i === 0 ? "md:col-span-2 lg:col-span-1" : ""
                } ${i === 5 ? "md:col-span-2 lg:col-span-1" : ""}`}
              >
                <benefit.icon className="w-10 h-10 text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">{benefit.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA - Integrated Design */}
      <div className="relative py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="fade-in-section space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-cyan-400 font-medium">El Momento es Ahora</span>
            </div>

            <h2 className="text-5xl lg:text-7xl font-black leading-tight">
              ¿Listo para Convertirte en tu{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                Mejor Versión
              </span>
              ?
            </h2>

            <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
              No esperes el momento perfecto. El momento perfecto es cuando decides actuar.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0 text-lg px-12 h-16 group shadow-lg shadow-cyan-500/25"
              >
                Agendar Sesión Inicial
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-zinc-700 hover:border-cyan-500 hover:bg-cyan-500/10 text-lg px-12 h-16 bg-transparent"
              >
                Conocer Más
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-12 flex flex-wrap justify-center gap-8 text-sm text-zinc-500">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-cyan-500" />
                <span>Sin compromiso inicial</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500" />
                <span>Primera sesión gratuita</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-indigo-500" />
                <span>Resultados garantizados</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .fade-in-section {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1),
                      transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .fade-in-section.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  )
}
