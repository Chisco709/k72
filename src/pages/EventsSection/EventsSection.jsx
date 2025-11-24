import { useState, useRef, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const EventsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const scrollRef = useRef(null)

  const navigate = (href) => {
    window.location.href = href
  }

  const events = [
    { id: 1, title: "COACHING", subtitle: "RENE CHISCO", description: "Esto es texto un borrador", image: "/coach.jpg", href: "/servicios/coaching" },
    { id: 2, title: "TALLERES", subtitle: "RENE CHISCO", description: "Este texto es un borrador", image: "/conferencias.jpg", href: "/servicios/conferencias" },
    { id: 3, title: "ARMONIZA TU VIDA", subtitle: "RENE CHISCO", description: "Una Pedagogía para prevenir y enfrentar el estrés", image: "/armoniza.jpg", href: "/servicios/armonizatuvida" },
    { id: 4, title: "DEL CAMBIO A LA TRANSFORMACIÓN", subtitle: "RENE CHISCO", description: "Despierta tu mejor versión", image: "/transformacion.jpg", href: "/inicio-transformacion" },
    { id: 5, title: "DESCUBRE TU MEJOR VERSIÓN", subtitle: "RENE CHISCO", description: "Master mind and body", image: "/Aguila1.jpg", href: "/servicios/mejorversión" },
    { id: 6, title: "LAS PALANCAS DEL PODER PERSONAL", subtitle: "RENE CHISCO", description: "Descubre cómo activar tu fuerza interior", image: "/palancas-poder.jpg", href: "/servicios/palancas" },
    { id: 7, title: "VENCE TU TIMIDEZ", subtitle: "RENE CHISCO", description: "Aprende a expresarte con seguridad", image: "/timidez.jpg", href: "/retos" }
  ]

  const visibleCards = 4

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1 > events.length - visibleCards ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 < 0 ? events.length - visibleCards : prev - 1))
  }

  const goToSlide = (index) => setCurrentSlide(index)

  // Sync indicator for mobile: detect centered card on scroll
  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    const onScroll = () => {
      const children = Array.from(el.children)
      const center = el.scrollLeft + el.offsetWidth / 2
      const idx = children.findIndex((child) => {
        const rect = child.getBoundingClientRect()
        const parentRect = el.getBoundingClientRect()
        const childCenter = rect.left - parentRect.left + rect.width / 2
        return Math.abs(childCenter - el.offsetWidth / 2) < rect.width / 2
      })
      if (idx !== -1) setCurrentSlide(idx)
    }

    el.addEventListener('scroll', onScroll, { passive: true })
    return () => el.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section className="bg-black text-white py-20 px-4 sm:px-6">
      <div className="max-w-[1400px] mx-auto">

        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 sm:mb-16 gap-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-8 space-y-3 sm:space-y-0">
            <h2 className="text-3xl sm:text-5xl font-bold">Programas que liberan</h2>
            <div onClick={() => navigate("/servicios")} className="flex items-center text-gray-400 hover:text-white transition-colors cursor-pointer group">
              <span className="text-base font-medium">Descubre nuestros programas</span>
              <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Arrows (ocultas en móvil) */}
          <div className="hidden sm:flex space-x-3">
            <button onClick={prevSlide} className="w-11 h-11 rounded-full bg-gray-800/80 hover:bg-gray-700 flex items-center justify-center transition-colors" aria-label="Evento anterior">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={nextSlide} className="w-11 h-11 rounded-full bg-gray-800/80 hover:bg-gray-700 flex items-center justify-center transition-colors" aria-label="Siguiente evento">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="relative overflow-hidden">
          <div className="hidden sm:flex transition-transform duration-700 ease-out" style={{ transform: `translateX(-${currentSlide * (100 / visibleCards)}%)` }}>
            {events.map((event) => (
              <div key={event.id} className="w-[25%] flex-shrink-0 px-3 cursor-pointer" onClick={() => navigate(event.href)}>
                <div className="relative h-[460px] rounded-2xl overflow-hidden group">
                  <img src={event.image} alt={event.title} className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-black/70" />
                  <div className="relative z-10 h-full flex flex-col justify-between p-8 text-white">
                    <p className="text-xs font-bold tracking-[0.2em] uppercase opacity-80">{event.subtitle}</p>
                    <div className="space-y-3 text-center">
                      <h3 className="text-xl font-black uppercase leading-snug">{event.title}</h3>
                      <p className="text-sm text-white/90">{event.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Versión móvil mejorada */}
          <div className="sm:hidden relative">
            <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-6 px-4" ref={scrollRef} style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}>
              {events.map((event, idx) => (
                <div key={event.id} className="flex-none min-w-[82%] snap-center first:ml-0 last:mr-2" onClick={() => navigate(event.href)}>
                  <div className="relative h-[440px] rounded-3xl overflow-hidden shadow-2xl active:scale-[0.98] transition-transform duration-200">
                    <img src={event.image} alt={event.title} className="absolute inset-0 w-full h-full object-cover" />
                    {/* Gradiente mejorado para mobile */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />

                    {/* Contenido */}
                    <div className="relative z-10 h-full flex flex-col justify-end p-6 md:p-8 text-white">
                      {/* Badge superior */}
                      <div className="absolute top-5 left-5 bg-blue-600/90 backdrop-blur-sm px-4 py-2 rounded-full">
                        <p className="text-xs font-bold tracking-wider uppercase">{event.subtitle}</p>
                      </div>

                      {/* Contenido inferior */}
                      <div className="space-y-3">
                        <h3 className="text-2xl md:text-3xl font-black uppercase leading-tight tracking-tight">{event.title}</h3>
                        <p className="text-sm md:text-base text-white/90 leading-relaxed">{event.description}</p>

                        {/* Call to action */}
                        <div className="flex items-center gap-2 text-blue-400 font-semibold pt-2">
                          <span>Ver más</span>
                          <ChevronRight className="w-5 h-5" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Indicadores de scroll para mobile */}
            <div className="flex justify-center gap-2 mt-6">
              {events.map((_, index) => (
                <div key={index} className={`h-2 rounded-full transition-all ${currentSlide === index ? 'w-8 bg-white' : 'w-2 bg-gray-600'}`} />
              ))}
            </div>
          </div>
        </div>

        {/* Dots para desktop */}
        <div className="hidden sm:flex justify-center mt-12 space-x-3">
          {[...Array(events.length - visibleCards + 1)].map((_, index) => (
            <button key={index} onClick={() => goToSlide(index)} className={`h-2 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-white w-8' : 'bg-gray-600 hover:bg-gray-400 w-2'}`} aria-label={`Ir al slide ${index + 1}`} />
          ))}
        </div>
      </div>

      <style>{`\n        /* Ocultar scrollbar en todos los navegadores */\n        .overflow-x-auto::-webkit-scrollbar { display: none; }\n      `}</style>
    </section>
  )
}

export default EventsSection
