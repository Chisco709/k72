import { Calendar, ArrowRight, Sparkles, Shield, Clock } from "lucide-react"

const Button = ({ children, className, size, variant, ...props }) => {
  const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50"
  const sizeStyles = size === "lg" ? "px-8 py-3" : "px-4 py-2"
  const variantStyles = variant === "ghost" ? "hover:bg-gray-100" : ""
  
  return (
    <button className={`${baseStyles} ${sizeStyles} ${variantStyles} ${className}`} {...props}>
      {children}
    </button>
  )
}

export default function CTASection() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-white to-zinc-50 py-24 md:py-32">
      {/* Transición con diseño de capas geométricas */}
      <div className="absolute top-0 left-0 right-0 h-40 -translate-y-full overflow-hidden">
        {/* Capa base negra */}
        <div className="absolute inset-0 bg-black" />
        
        {/* Forma geométrica con clip-path */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400"
          style={{
            clipPath: 'polygon(0 0, 100% 0, 100% 60%, 70% 80%, 30% 60%, 0 80%)'
          }}
        />
        
        {/* Segunda capa decorativa */}
        <div 
          className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-white/30"
          style={{
            clipPath: 'polygon(0 20%, 100% 0, 100% 100%, 0 100%)'
          }}
        />
        
        {/* Líneas decorativas flotantes */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-around px-12">
          <div className="w-1 h-24 bg-gradient-to-b from-transparent via-blue-300 to-transparent opacity-60" />
          <div className="w-1 h-32 bg-gradient-to-b from-transparent via-blue-400 to-transparent opacity-80" />
          <div className="w-1 h-20 bg-gradient-to-b from-transparent via-blue-300 to-transparent opacity-60" />
          <div className="w-1 h-28 bg-gradient-to-b from-transparent via-blue-400 to-transparent opacity-70" />
          <div className="w-1 h-24 bg-gradient-to-b from-transparent via-blue-300 to-transparent opacity-60" />
        </div>
      </div>

      {/* Borde superior artístico */}
      <div className="absolute top-0 left-0 right-0 z-20">
        <div className="relative h-3 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600">
          {/* Efecto de brillo */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
        </div>
      </div>

      {/* Elementos decorativos modernos */}
      <div className="absolute top-6 left-0 right-0 z-30">
        <div className="flex justify-center items-center gap-8">
          {/* Hexágono izquierdo */}
          <div className="relative w-12 h-12">
            <div 
              className="absolute inset-0 bg-blue-600 shadow-lg shadow-blue-600/40 animate-pulse"
              style={{
                clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
              }}
            />
          </div>
          
          {/* Rombo central giratorio */}
          <div className="relative w-14 h-14">
            <div 
              className="absolute inset-0 bg-gradient-to-br from-white to-blue-100 border-4 border-blue-600 shadow-xl shadow-blue-600/50 animate-spin"
              style={{
                clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
                animationDuration: '8s'
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-blue-600" />
            </div>
          </div>
          
          {/* Hexágono derecho */}
          <div className="relative w-12 h-12">
            <div 
              className="absolute inset-0 bg-blue-600 shadow-lg shadow-blue-600/40 animate-pulse"
              style={{
                clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                animationDelay: '0.5s'
              }}
            />
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-[1400px] px-4 md:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-square max-w-[550px] mx-auto">
              {/* Animated gradient background */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-[450px] w-[450px] rounded-full bg-gradient-to-br from-blue-900/5 via-transparent to-blue-900/10 blur-3xl animate-pulse" />
              </div>

              {/* Decorative circles with staggered animation */}
              <div className="absolute inset-0 flex items-center justify-center animate-spin" style={{ animationDuration: '20s' }}>
                <div className="h-[420px] w-[420px] rounded-full border border-blue-900/10" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}>
                <div className="h-[320px] w-[320px] rounded-full border-2 border-dashed border-blue-900/20" />
              </div>

              {/* Central icon with glow effect */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative h-[180px] w-[180px] rounded-full bg-gradient-to-br from-blue-900 to-black flex items-center justify-center shadow-2xl">
                  <div className="absolute inset-0 rounded-full bg-blue-900 blur-xl opacity-50" />
                  <Calendar className="relative h-20 w-20 text-white" strokeWidth={1.5} />
                </div>
              </div>

              <div className="absolute bottom-8 -right-4 group">
                <div className="rounded-2xl bg-black px-5 py-3 shadow-xl flex items-center gap-3 hover:scale-105 transition-transform">
                  <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center">
                    <Shield className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-zinc-400 font-medium">100%</div>
                    <div className="text-sm font-bold text-white">Confidencial</div>
                  </div>
                </div>
              </div>

              <div className="absolute top-1/2 -translate-y-1/2 -right-8 group">
                <div className="rounded-2xl bg-gradient-to-br from-blue-900 to-blue-900/80 px-5 py-3 shadow-xl flex items-center gap-3 hover:scale-105 transition-transform">
                  <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center">
                    <Clock className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-zinc-300 font-medium">Respuesta en</div>
                    <div className="text-sm font-bold text-white">24 horas</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-10 order-1 lg:order-2">
            <div className="space-y-6">
             
              <h2 className="text-balance text-5xl font-bold leading-[1.1] tracking-tight text-blue-900 md:text-6xl lg:text-7xl">
                Comienza tu
                <br />
                <span className="relative inline-block">
                  transformación
                  <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 300 12" fill="none">
                    <path
                      d="M2 10C50 5 100 2 150 5C200 8 250 10 298 8"
                      stroke="#1e3a8a"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h2>
              <p className="text-pretty text-xl leading-relaxed text-zinc-600 md:text-2xl max-w-xl">
                No tienes que enfrentar tus desafíos solo. Agenda una sesión y descubre cómo la terapia puede ayudarte.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button
                size="lg"
                className="group h-16 bg-blue-900 px-10 text-lg font-semibold text-white transition-all hover:bg-black hover:shadow-2xl hover:scale-105"
              >
                Agendar consulta
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-2" />
              </Button>
              <Button
                size="lg"
                variant="ghost"
                className="h-16 px-10 text-lg font-semibold text-blue-900 transition-all hover:bg-blue-900/5"
              >
                Conocer más
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-zinc-200">
              <div className="space-y-2">
                <div className="text-4xl font-bold text-blue-900 tracking-tight">500+</div>
                <div className="text-sm text-zinc-600 leading-tight">
                  Pacientes
                  <br />
                  atendidos
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-blue-900 tracking-tight">15+</div>
                <div className="text-sm text-zinc-600 leading-tight">
                  Años de
                  <br />
                  experiencia
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-blue-900 tracking-tight">98%</div>
                <div className="text-sm text-zinc-600 leading-tight">
                  Satisfacción
                  <br />
                  del paciente
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -right-40 top-20 h-80 w-80 rounded-full bg-blue-900/5 blur-3xl" />
      <div className="absolute -left-40 bottom-20 h-80 w-80 rounded-full bg-blue-900/5 blur-3xl" />
    </section>
  )
}