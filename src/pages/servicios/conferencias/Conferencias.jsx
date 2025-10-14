import React from "react";
import Button from "../../../components/ui/button"; // ✅ Ajuste para Vite
import {
  ArrowRight,
  Users,
  Target,
  Clock,
  Sparkles,
  Award,
  TrendingUp,
} from "lucide-react";

export default function ConferenciasPage() {
  return (
    <div className="min-h-screen bg-white text-[#0A1628]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0A1628] via-[#0d1d35] to-[#0A1628] text-white">
        {/* Luces decorativas */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-24 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-24 right-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-32 lg:py-40">
          {/* Encabezado */}
          <div className="flex items-center gap-2 mb-6">
            <div className="h-px w-12 bg-white/40" />
            <span className="text-sm tracking-[0.3em] uppercase text-white/70">
              Conferencias
            </span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-extrabold mb-6 leading-tight">
            Transformación
            <br />
            <span className="text-white/60">a través del</span>
            <br />
            Conocimiento
          </h1>

          <p className="text-xl text-white/80 max-w-2xl mb-12 leading-relaxed">
            Experiencias diseñadas para inspirar, educar y elevar el potencial
            humano en organizaciones y profesionales.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              className="bg-white text-[#0A1628] hover:bg-white/90 transition-all group"
            >
              Solicitar información
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              size="lg"
              className="border border-white/30 text-white hover:bg-white/10 bg-transparent"
            >
              Ver calendario
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { value: "500+", label: "Conferencias realizadas" },
              { value: "15K+", label: "Profesionales impactados" },
              { value: "98%", label: "Satisfacción" },
              { value: "20+", label: "Años de experiencia" },
            ].map((stat, i) => (
              <div
                key={i}
                className="text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="text-4xl lg:text-5xl font-bold text-[#0A1628] mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-zinc-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conferencias principales */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0A1628]/5 mb-6">
              <Sparkles className="h-4 w-4 text-[#0A1628]" />
              <span className="text-sm font-medium">Programas destacados</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Nuestras Conferencias
            </h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              Experiencias transformadoras diseñadas para impulsar el crecimiento
              personal y organizacional.
            </p>
          </div>

          {/* Conferencia 1: Oratoria */}
          <div className="mb-24 group">
            <div className="grid lg:grid-cols-2 gap-14 items-center">
              {/* Texto */}
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A1628] text-white text-xs font-medium mb-6">
                  <Award className="h-3 w-3" />
                  Programa insignia
                </div>

                <h3 className="text-4xl lg:text-5xl font-bold mb-4">
                  Oratoria
                </h3>
                <p className="text-xl text-[#0A1628]/60 mb-4 italic">
                  El Arte de Hablar y Disfrutar
                </p>
                <p className="text-lg text-zinc-700 mb-8 leading-relaxed">
                  Transforma el miedo escénico en confianza y convierte tus ideas
                  en mensajes que inspiran y conectan.
                </p>

                <ul className="space-y-3 mb-8">
                  {[
                    "Superar el miedo escénico y desarrollar confianza",
                    "Dominar la expresión verbal y no verbal",
                    "Construir mensajes memorables",
                    "Conectar con cualquier audiencia",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#0A1628] flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-6 mb-8 text-sm text-zinc-600">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>20 horas</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span>Grupos reducidos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Target className="h-4 w-4" />
                    <span>Práctica intensiva</span>
                  </div>
                </div>

                <Button className="bg-[#0A1628] hover:bg-[#0A1628]/90 group">
                  Más información
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              {/* Tarjeta lateral */}
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-[#0A1628]/10 to-transparent rounded-3xl blur-2xl" />
                <div className="relative bg-gradient-to-br from-[#0A1628] to-[#1a2d4a] rounded-2xl p-10 text-white shadow-xl">
                  <div className="space-y-8">
                    <div>
                      <div className="text-sm text-white/70 mb-2">Dirigido a</div>
                      <p className="text-lg">
                        Profesionales, líderes, docentes y emprendedores
                      </p>
                    </div>
                    <hr className="border-white/20" />
                    <div>
                      <div className="text-sm text-white/70 mb-2">
                        Módulos principales
                      </div>
                      <ul className="space-y-2 text-sm">
                        {[
                          "El Orador: Voz, presencia y emoción",
                          "El Mensaje: Estructura y persuasión",
                          "El Público: Conexión y empatía",
                        ].map((m, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <div className="h-1 w-1 rounded-full bg-white/60" />
                            <span>{m}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <hr className="border-white/20" />
                    <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                      <div className="text-sm text-white/80 mb-2">
                        Resultado esperado
                      </div>
                      <p className="text-base leading-relaxed">
                        Dominio total de la oratoria para comunicar con impacto y
                        autenticidad.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Conferencia 2: Marketing Emocional */}
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Tarjeta lateral */}
            <div className="relative order-2 lg:order-1">
              <div className="absolute -inset-4 bg-gradient-to-br from-zinc-900/10 to-transparent rounded-3xl blur-2xl" />
              <div className="relative bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-2xl p-10 text-white shadow-xl">
                <div className="space-y-8">
                  <div>
                    <div className="text-sm text-white/60 mb-2">Casos de estudio</div>
                    <ul className="space-y-3">
                      {["Disney", "Cirque du Soleil", "Zappos", "Starbucks"].map(
                        (brand, i) => (
                          <li key={i} className="flex items-center gap-3 text-lg">
                            <div className="h-2 w-2 rounded-full bg-white/60" />
                            <span>{brand}</span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                  <hr className="border-white/20" />
                  <div>
                    <div className="text-sm text-white/70 mb-2">Aprenderás a</div>
                    <ul className="space-y-2 text-sm">
                      {[
                        "Diseñar experiencias memorables",
                        "Cultivar cultura organizacional",
                        "Fidelizar clientes auténticamente",
                      ].map((m, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <div className="h-1 w-1 rounded-full bg-white/60" />
                          <span>{m}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <hr className="border-white/20" />
                  <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                    <div className="text-sm text-white/80 mb-2">
                      Impacto organizacional
                    </div>
                    <p className="text-base leading-relaxed">
                      Eleva la calidad del servicio y crea vínculos emocionales
                      duraderos con tus clientes.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Texto */}
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 text-white text-xs font-medium mb-6">
                <TrendingUp className="h-3 w-3" />
                Transformación organizacional
              </div>

              <h3 className="text-4xl lg:text-5xl font-bold mb-4">
                Marketing Emocional
              </h3>
              <p className="text-xl text-[#0A1628]/60 mb-4 italic">
                Gerencia del Detalle y Calidad de la Experiencia
              </p>
              <p className="text-lg text-zinc-700 mb-8 leading-relaxed">
                Descubre cómo las marcas más admiradas diseñan experiencias que
                trascienden productos y crean conexiones emocionales profundas.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  "Diseñar experiencias de calidad que generen lealtad",
                  "Construir cultura corporativa auténtica",
                  "Implementar servicio excepcional",
                  "Crear vínculos emocionales con clientes y colaboradores",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#0A1628] flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-6 mb-8 text-sm text-zinc-600">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  <span>Equipos directivos</span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="h-4 w-4" />
                  <span>Personalizable</span>
                </div>
              </div>

              <Button className="bg-zinc-900 hover:bg-zinc-800 group">
                Más información
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-gradient-to-br from-[#0A1628] via-[#0d1d35] to-[#0A1628] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            ¿Listo para transformar tu organización?
          </h2>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
            Agenda una consulta personalizada y descubre cómo nuestras
            conferencias pueden impulsar el crecimiento de tu equipo.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-[#0A1628] hover:bg-white/90 group"
            >
              Agendar consulta
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              className="border border-white/30 text-white hover:bg-white/10 bg-transparent"
            >
              Descargar brochure
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
