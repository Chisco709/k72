export default function Testimonials() {
  return (
    <section className="bg-white border-t border-gray-200 py-20">
      <div className="container mx-auto px-4 lg:px-24">
        {/* Título */}
        <h2 className="text-center text-4xl lg:text-5xl font-bold text-black mb-16">
          Lo que dicen nuestros clientes
        </h2>

        {/* Grid de testimonios */}
        <div className="grid gap-12 md:grid-cols-3">
          {/* Testimonio 1 */}
          <div className="flex flex-col items-center text-center p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg transition">
            <p className="text-lg text-gray-700 italic mb-6">
              "Gracias al coaching, ahora tengo claridad en mis metas y confianza para alcanzarlas."
            </p>
            <img
              src="/persona.jpg"
              alt="Cliente feliz"
              className="w-16 h-16 rounded-full object-cover border-2 border-[#FF9500] mb-4"
            />
            <h3 className="font-semibold text-black">María López</h3>
            <span className="text-sm text-gray-500">Emprendedora</span>
          </div>

          {/* Testimonio 2 */}
          <div className="flex flex-col items-center text-center p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg transition">
            <p className="text-lg text-gray-700 italic mb-6">
              "Las sesiones transformaron mi forma de ver los problemas y encontrar soluciones."
            </p>
            <img
              src="/persona.jpg"
              alt="Cliente feliz"
              className="w-16 h-16 rounded-full object-cover border-2 border-[#FF9500] mb-4"
            />
            <h3 className="font-semibold text-black">Carlos Ramírez</h3>
            <span className="text-sm text-gray-500">Gerente de proyectos</span>
          </div>

          {/* Testimonio 3 */}
          <div className="flex flex-col items-center text-center p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg transition">
            <p className="text-lg text-gray-700 italic mb-6">
              "Es un antes y un después en mi vida profesional y personal."
            </p>
            <img
              src="/persona.jpg"
              alt="Cliente feliz"
              className="w-16 h-16 rounded-full object-cover border-2 border-[#FF9500] mb-4"
            />
            <h3 className="font-semibold text-black">Laura Gómez</h3>
            <span className="text-sm text-gray-500">Consultora</span>
          </div>
        </div>
      </div>
    </section>
  )
}
