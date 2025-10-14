import { Link } from "react-router-dom";


const Button = ({ children, className, ...props }) => (
  <button className={className} {...props}>
    {children}
  </button>
)

export default function CoachingPage() {
  return (
    <main className="min-h-screen bg-white text-black relative overflow-hidden border-4 border-blue-600 rounded-3xl shadow-xl">
      {/* Contenido principal */}
      <div className="container mx-auto px-4 lg:px-24 py-12 relative">
        {/* Encabezado con logo/branding */}
        <div className="relative mb-16">
          <h1 className="text-[8rem] lg:text-[12rem] font-black leading-none tracking-tighter text-black/20 select-none">
            COACHING
          </h1>
          <div className="absolute top-8 left-0 right-0">
            <div className="inline-block bg-blue-600 rounded-3xl px-8 py-4 shadow-2xl">
              <div className="text-white">
                <div className="text-xs font-medium tracking-wider uppercase">RENE CHISCO</div>
                <div className="text-3xl font-bold italic">COACHING</div>
              </div>
            </div>
          </div>
        </div>

        {/* Grid con texto e imagen */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Columna izquierda */}
          <div className="lg:col-span-5 space-y-8">
            <h2 className="text-5xl lg:text-6xl font-bold leading-tight text-balance">
              Guía experta para tu camino
            </h2>

            <p className="text-lg leading-relaxed text-gray-700">
              Logra una transformación duradera en todas las áreas de tu vida. Descubre el apoyo que necesitas para
              alcanzar tus metas y vivir con más con sesiones de estrategia individuales con nuestros coaches expertos
              en resultados.
            </p>

            
<div className="flex flex-col gap-4 pt-4">
  <Link to="/servicios/coaching">
    <Button className="bg-blue-600 hover:bg-blue-600/90 text-white rounded-full px-10 py-7 text-base font-semibold w-full lg:w-auto">
      Coaching
    </Button>
  </Link>
</div>

          </div>

          {/* Columna derecha */}
          <div className="lg:col-span-7 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/segundaimagen.jpg"
                alt="Coaching session"
                className="w-full h-[500px] object-cover"
              />
              {/* Botón de play */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all hover:scale-110 shadow-xl">
                  <div className="w-0 h-0 border-l-[20px] border-l-black border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1"></div>
                </button>
              </div>
            </div>

            {/* Stats flotantes */}
            <div className="absolute -left-8 top-20 lg:block hidden">
              <div className="bg-white rounded-2xl shadow-2xl p-6 w-48 border-4 border-blue-600">
                <div className="text-6xl font-black text-blue-600 mb-2">81%</div>
                <div className="text-sm font-semibold text-black">Gestión mejorada</div>
                <div className="text-xs text-gray-600">del tiempo</div>
              </div>
            </div>

            <div className="absolute -right-8 bottom-20 lg:block hidden">
              <div className="bg-black rounded-2xl shadow-2xl p-6 w-48">
                <div className="text-6xl font-black text-blue-600 mb-2">70%</div>
                <div className="text-sm font-semibold text-white">Mejor rendimiento</div>
                <div className="text-xs text-gray-400">laboral</div>
              </div>
            </div>

            {/* Stats en mobile */}
            <div className="grid grid-cols-2 gap-4 mt-8 lg:hidden">
              <div className="bg-blue-600 rounded-2xl p-6 text-center">
                <div className="text-5xl font-black text-white mb-2">81%</div>
                <div className="text-sm font-semibold text-white">Gestión mejorada</div>
                <div className="text-xs text-white/70">del tiempo</div>
              </div>
              <div className="bg-black rounded-2xl p-6 text-center">
                <div className="text-5xl font-black text-blue-600 mb-2">70%</div>
                <div className="text-sm font-semibold text-white">Mejor rendimiento</div>
                <div className="text-xs text-gray-400">laboral</div>
              </div>
            </div>
          </div>
        </div>

        {/* Texto final */}
        <div className="mt-32 mb-16">
          <div
            className="text-[6rem] lg:text-[10rem] font-black leading-none tracking-tighter text-transparent"
            style={{ WebkitTextStroke: "2px #2563EB" }}
          >
            TRANSFORMA
          </div>
          <div className="text-right text-[6rem] lg:text-[10rem] font-black leading-none tracking-tighter text-blue-600 -mt-8">
            TU VIDA
          </div>
        </div>
      </div>

      



    </main>
  )
}