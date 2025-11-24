"use client"

import { Button } from "../../components/ui/button"
import { Link } from "react-router-dom"
import { ArrowRight, Brain, Heart, Sparkles, TrendingUp, Zap } from "lucide-react"

export default function ArmonizaTuVidaPage() {
  return (
    <div className="min-h-screen bg-[#000000]">
      <section className="relative min-h-[90vh] overflow-hidden bg-[#000000] text-white">
        {/* Layered geometric background elements */}
        <div className="absolute left-0 top-0 h-[600px] w-[600px] rounded-full bg-white/[0.02] blur-3xl" />
        <div className="absolute right-0 top-20 h-[400px] w-[400px] rounded-full bg-white/[0.03] blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-[500px] w-[500px] rounded-full bg-white/[0.02] blur-3xl" />

        {/* Diagonal lines pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 50px, white 50px, white 51px)",
          }}
        />

        {/* Floating geometric shapes */}
        <div className="absolute left-[10%] top-[20%] h-32 w-32 rotate-45 border border-white/10" />
        <div className="absolute right-[15%] top-[40%] h-24 w-24 rounded-full border border-white/10" />
        <div className="absolute left-[70%] top-[60%] h-20 w-20 rotate-12 border border-white/10" />
        <div className="absolute left-[20%] bottom-[20%] h-16 w-16 rotate-45 bg-white/5" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Left content */}
            <div className="flex flex-col justify-center">
              <div className="mb-8 inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 backdrop-blur-md">
                <Sparkles className="h-4 w-4 text-white" />
                <span className="text-sm font-medium tracking-wide">Pedagogía del Bienestar</span>
              </div>

              <h1 className="mb-6 text-7xl font-bold leading-[0.95] tracking-tight lg:text-8xl">
                Armoniza
                <br />
                <span className="relative inline-block">
                  tu vida
                  <div className="absolute -bottom-2 left-0 h-1 w-full bg-white" />
                </span>
              </h1>

              <p className="mb-10 max-w-lg text-xl leading-relaxed text-white/60 lg:text-2xl">
                Una pedagogía para prevenir y enfrentar el estrés
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Button
                  size="lg"
                  className="group h-14 bg-white px-8 text-base text-[#000000] hover:bg-white/90"
                  asChild
                >
                  <Link to="/carrito">
                    Comenzar ahora
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-14 border-white/20 bg-transparent px-8 text-base text-white hover:bg-white/5"
                  asChild
                >
                  <Link href="#contenido">Ver contenido</Link>
                </Button>
              </div>
            </div>

            {/* Right decorative elements */}
            <div className="relative hidden lg:block">
              <div className="absolute left-0 top-1/2 h-[400px] w-[400px] -translate-y-1/2">
                <div className="absolute inset-0 rounded-full border-2 border-white/10" />
                <div className="absolute inset-8 rounded-full border border-white/10" />
                <div className="absolute inset-16 rounded-full border border-white/10" />
                <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 backdrop-blur-xl" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom decorative border */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-[#000000]" />
        <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-3">
          {[...Array(15)].map((_, i) => (
            <div key={i} className="h-2 w-2 rounded-full bg-[#000000]" />
          ))}
        </div>
      </section>

      <section className="relative border-b border-white/5 bg-zinc-950 py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.02),transparent_60%)]" />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-3">
            {/* Card 1 - Elevated */}
            <div className="group -mt-8 rounded-3xl border border-white/10 bg-[#000000] p-10 transition-all duration-500 hover:border-white/20">
              <div className="mb-6 text-6xl font-bold text-white">20-33%</div>
              <div className="text-base leading-relaxed text-zinc-400">
                de trabajadores en Colombia manifiestan alto nivel de estrés
              </div>
              <div className="mt-6 h-1 w-16 bg-white/20" />
            </div>

            {/* Card 2 - Normal */}
            <div className="group rounded-3xl border border-white/10 bg-[#000000] p-10 transition-all duration-500 hover:border-white/20">
              <div className="mb-6 text-6xl font-bold text-white">450M</div>
              <div className="text-base leading-relaxed text-zinc-400">
                de personas en el mundo sufren al menos un trastorno mental
              </div>
              <div className="mt-6 h-1 w-16 bg-white/20" />
            </div>

            {/* Card 3 - Elevated */}
            <div className="group -mt-8 rounded-3xl border border-white/10 bg-[#000000] p-10 transition-all duration-500 hover:border-white/20">
              <div className="mb-6 text-6xl font-bold text-white">1 de 4</div>
              <div className="text-base leading-relaxed text-zinc-400">
                personas experimenta problemas de salud mental
              </div>
              <div className="mt-6 h-1 w-16 bg-white/20" />
            </div>
          </div>
        </div>

        {/* Decorative border */}
        <div className="absolute bottom-0 left-0 right-0 h-16">
          <svg className="absolute bottom-0 w-full" viewBox="0 0 1200 40" preserveAspectRatio="none">
            <path d="M0,20 Q150,0 300,20 T600,20 T900,20 T1200,20 L1200,40 L0,40 Z" fill="#000000" opacity="0.3" />
            <path d="M0,25 Q150,10 300,25 T600,25 T900,25 T1200,25 L1200,40 L0,40 Z" fill="#000000" opacity="0.5" />
            <path d="M0,30 Q150,20 300,30 T600,30 T900,30 T1200,30 L1200,40 L0,40 Z" fill="#000000" />
          </svg>
        </div>
      </section>

      <section className="relative py-32">
        <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-white/[0.02] to-transparent" />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-12">
            {/* Left side - Title */}
            <div className="lg:col-span-5">
              <div className="sticky top-32">
                <div className="mb-6 inline-block rounded-2xl border border-white/10 bg-white/5 px-6 py-3 backdrop-blur-sm">
                  <span className="text-sm font-medium text-white/60">Fundamentos</span>
                </div>
                <h2 className="text-6xl font-bold text-white lg:text-7xl">
                  ¿Qué es el
                  <br />
                  estrés?
                </h2>
                <div className="mt-8 h-1 w-32 bg-white" />
              </div>
            </div>

            {/* Right side - Content */}
            <div className="lg:col-span-7">
              <div className="space-y-8">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-sm">
                  <p className="text-xl leading-relaxed text-zinc-300">
                    Es una sensación de tensión física o emocional. Puede provenir de cualquier situación o pensamiento
                    que nos hace sentir impotentes, frustrados, furiosos, ansiosos, temerosos, desesperados o
                    angustiados.
                  </p>
                </div>

                <div className="ml-12 rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-sm">
                  <p className="text-xl leading-relaxed text-zinc-300">
                    El estrés es la reacción del cuerpo a un desafío o demanda, es una respuesta natural ante una
                    circunstancia desconocida para el sistema nervioso o para la que no nos sentimos preparados.
                  </p>
                </div>

                <div className="rounded-3xl border border-white/20 bg-[#000000] p-10">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                    <Sparkles className="h-6 w-6 text-white" />
                  </div>
                  <p className="text-lg italic leading-relaxed text-zinc-200">
                    El estrés es el principal problema de salud pública del siglo XXI en el mundo, reduce la
                    productividad y, como consecuencia, la capacidad económica y de desarrollo de cualquier país.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative border */}
        <div className="absolute bottom-0 left-0 right-0 h-20 overflow-hidden">
          <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-8">
            {[...Array(15)].map((_, i) => (
              <div key={i} className="relative">
                <div className="h-12 w-12 rotate-45 border-2 border-[#000000] bg-transparent" />
                <div className="absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-[#000000]" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-zinc-950 py-32">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: "repeating-linear-gradient(-45deg, transparent, transparent 80px, white 80px, white 81px)",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mb-20 text-center">
            <h2 className="mb-6 text-6xl font-bold text-white lg:text-7xl">La solución</h2>
            <div className="mx-auto h-1 w-24 bg-white" />
            <p className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-zinc-400">
              Una alternativa que se ocupa en pensar y diseñar estrategias y herramientas que lleven al orden y el
              equilibrio humano
            </p>
          </div>

          <div className="space-y-8">
            {/* Card 1 - Left aligned */}
            <div className="group ml-0 max-w-2xl rounded-3xl border border-white/10 bg-[#000000] p-12 transition-all duration-500 hover:border-white/20 lg:ml-0">
              <div className="flex items-start gap-8">
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-white text-[#000000]">
                  <Brain className="h-10 w-10" />
                </div>
                <div>
                  <h3 className="mb-4 text-3xl font-bold text-white">Pensamientos</h3>
                  <p className="text-lg leading-relaxed text-zinc-400">
                    Aprende a gestionar y transformar tus patrones de pensamiento para crear una realidad más positiva
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 - Center aligned */}
            <div className="group mx-auto max-w-2xl rounded-3xl border border-white/10 bg-[#000000] p-12 transition-all duration-500 hover:border-white/20">
              <div className="flex items-start gap-8">
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-white text-[#000000]">
                  <Heart className="h-10 w-10" />
                </div>
                <div>
                  <h3 className="mb-4 text-3xl font-bold text-white">Sentimientos</h3>
                  <p className="text-lg leading-relaxed text-zinc-400">
                    Desarrolla inteligencia emocional para comprender y regular tus emociones de manera efectiva
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 - Right aligned */}
            <div className="group ml-auto max-w-2xl rounded-3xl border border-white/10 bg-[#000000] p-12 transition-all duration-500 hover:border-white/20 lg:ml-auto">
              <div className="flex items-start gap-8">
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-white text-[#000000]">
                  <Zap className="h-10 w-10" />
                </div>
                <div>
                  <h3 className="mb-4 text-3xl font-bold text-white">Acciones</h3>
                  <p className="text-lg leading-relaxed text-zinc-400">
                    Implementa hábitos y conductas que te lleven de la supervivencia a la creación consciente
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative border */}
        <div className="absolute bottom-0 left-0 right-0 h-16">
          <div className="absolute bottom-0 left-0 right-0 h-px bg-[#000000]" />
          <div className="absolute bottom-0 left-0 right-0 flex justify-around">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-[#000000]" />
                <div className="h-2 w-2 rounded-full bg-[#000000] opacity-60" />
                <div className="h-1 w-1 rounded-full bg-[#000000] opacity-30" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-32">
        <div className="absolute left-0 top-0 h-full w-1/2 bg-gradient-to-r from-white/[0.02] to-transparent" />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mb-20">
            <h2 className="mb-8 text-6xl font-bold text-white lg:text-7xl">Metodología</h2>
            <div className="h-1 w-32 bg-white" />
          </div>

          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            {/* Left - Description */}
            <div className="space-y-8">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-sm">
                <p className="text-xl leading-relaxed text-zinc-300">
                  Este es un acompañamiento eminentemente conversacional (Coaching), en el cual las personas a partir de
                  preguntas poderosas comparten su historia.
                </p>
              </div>

              <div className="ml-8 rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-sm">
                <p className="text-xl leading-relaxed text-zinc-300">
                  Cada actor protagonista es tratado y orientado de acuerdo a sus condiciones y necesidades
                  particulares, dotándolo de una guía responsable de asistirlo en su etapa de transición de la
                  supervivencia a la creación.
                </p>
              </div>
            </div>

            {/* Right - Steps */}
            <div className="space-y-6">
              <div className="group flex gap-6 rounded-3xl border border-white/10 bg-[#000000] p-8 transition-all duration-500 hover:border-white/20">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white text-[#000000] text-2xl font-bold">
                  1
                </div>
                <div>
                  <h3 className="mb-3 text-xl font-bold text-white">Conversación profunda</h3>
                  <p className="leading-relaxed text-zinc-400">
                    Exploramos tu historia, épocas de estrés, motivaciones y proyectos
                  </p>
                </div>
              </div>

              <div className="group ml-8 flex gap-6 rounded-3xl border border-white/10 bg-[#000000] p-8 transition-all duration-500 hover:border-white/20">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white text-[#000000] text-2xl font-bold">
                  2
                </div>
                <div>
                  <h3 className="mb-3 text-xl font-bold text-white">Experiencias conscientes</h3>
                  <p className="leading-relaxed text-zinc-400">
                    Actividades diseñadas para despertar conciencia y conexión con el presente
                  </p>
                </div>
              </div>

              <div className="group flex gap-6 rounded-3xl border border-white/10 bg-[#000000] p-8 transition-all duration-500 hover:border-white/20">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white text-[#000000] text-2xl font-bold">
                  3
                </div>
                <div>
                  <h3 className="mb-3 text-xl font-bold text-white">Acompañamiento personalizado</h3>
                  <p className="leading-relaxed text-zinc-400">
                    Presencial o virtual, adaptado a tus necesidades específicas
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative border */}
        <div className="absolute bottom-0 left-0 right-0 h-12 overflow-hidden">
          <svg className="absolute bottom-0 w-full" viewBox="0 0 1200 30" preserveAspectRatio="none">
            <path
              d="M0,30 L30,0 L60,30 L90,0 L120,30 L150,0 L180,30 L210,0 L240,30 L270,0 L300,30 L330,0 L360,30 L390,0 L420,30 L450,0 L480,30 L510,0 L540,30 L570,0 L600,30 L630,0 L660,30 L690,0 L720,30 L750,0 L780,30 L810,0 L840,30 L870,0 L900,30 L930,0 L960,30 L990,0 L1020,30 L1050,0 L1080,30 L1110,0 L1140,30 L1170,0 L1200,30 L1200,30 L0,30 Z"
              fill="#000000"
            />
          </svg>
        </div>
      </section>

      <section id="contenido" className="relative bg-zinc-950 py-32">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 80px, white 80px, white 81px), repeating-linear-gradient(90deg, transparent, transparent 80px, white 80px, white 81px)",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mb-20">
            <div className="mb-6 inline-block rounded-2xl border border-white/10 bg-white/5 px-6 py-3 backdrop-blur-sm">
              <span className="text-sm font-medium text-white/60">Programa completo</span>
            </div>
            <h2 className="mb-8 text-6xl font-bold text-white lg:text-7xl">Contenidos</h2>
            <div className="h-1 w-32 bg-white" />
            <p className="mt-8 max-w-2xl text-xl leading-relaxed text-zinc-400">
              Una pedagogía integral que combina psicología, coaching, física cuántica y neurociencias
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { text: "Qué es el estrés, distrés y eustrés", span: "lg:col-span-2" },
              { text: "Factores que activan el estrés", span: "" },
              { text: "Consecuencias del estrés", span: "" },
              { text: "Del Propósito a las Misiones en la vida", span: "lg:col-span-2" },
              { text: "Valores, virtudes, dones y habilidades", span: "lg:col-span-2" },
              { text: "Vocación y Profesión", span: "" },
              { text: "La Inteligencia Emocional", span: "" },
              { text: "Relaciones intrapersonales e interpersonales", span: "lg:col-span-2" },
              { text: "Operar en supervivencia vs creación", span: "lg:col-span-2" },
              { text: "Cómo funcionan la mente y el cerebro", span: "" },
              { text: "El papel de la consciencia y la conciencia", span: "" },
              { text: "Cómo prevenir y controlar el estrés", span: "lg:col-span-2" },
            ].map((item, index) => (
              <div
                key={index}
                className={`group flex items-start gap-4 rounded-3xl border border-white/10 bg-[#000000] p-8 transition-all duration-500 hover:border-white/20 ${item.span}`}
              >
                <div className="mt-1 h-3 w-3 shrink-0 rounded-full bg-white" />
                <span className="text-lg leading-relaxed text-zinc-300">{item.text}</span>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-3xl border border-white/20 bg-[#000000] p-12 text-center">
            <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-white text-[#000000]">
              <TrendingUp className="h-10 w-10" />
            </div>
            <h3 className="mb-3 text-2xl font-bold text-white">Duración flexible</h3>
            <p className="text-lg text-zinc-400">
              De 2 a 30+ horas, adaptado a tus circunstancias y expectativas personales
            </p>
          </div>
        </div>

        {/* Decorative border */}
        <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden">
          <div className="absolute bottom-0 left-0 right-0 flex">
            {[...Array(30)].map((_, i) => (
              <svg key={i} className="h-16 w-10" viewBox="0 0 40 60">
                <polygon points="20,0 40,60 0,60" fill="#000000" opacity={i % 2 === 0 ? "0.8" : "0.4"} />
              </svg>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#000000] py-32 text-white">
        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-white/[0.03] blur-3xl" />
        <div className="absolute right-0 bottom-0 h-[600px] w-[600px] rounded-full bg-white/[0.02] blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 100px, white 100px, white 101px)",
          }}
        />

        <div className="relative mx-auto max-w-5xl px-6">
          <div className="text-center">
            <div className="mb-8 inline-block rounded-2xl border border-white/20 bg-white/5 px-6 py-3 backdrop-blur-sm">
              <span className="text-sm font-medium text-white/60">Comienza tu transformación</span>
            </div>

            <h2 className="mb-8 text-6xl font-bold leading-tight lg:text-7xl">
              Transforma tu
              <br />
              relación con el estrés
            </h2>

            <p className="mb-12 text-2xl font-light text-white/60">
              De la supervivencia a la creación. Del agotamiento al bienestar.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" className="group h-14 bg-white px-8 text-base text-[#000000] hover:bg-white/90" asChild>
                <Link to="/carrito">
                  Agendar sesión
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-14 border-white/20 bg-transparent px-8 text-base text-white hover:bg-white/5"
                asChild
              >
                <Link to="/servicios/coaching">Ver otros servicios</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
