import { useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Leonardo Fabio Giraldo Lopez",
    role: "CEO",
    image: "/professional-man-in-black-shirt-speaking.jpg",
    quote: "El Doctor Rene es un gran ser humano y muy profesional, contactarlo ha sido de gran mejoría para mi vida y mi relación en mi matrimonio",
  },
  {
    id: 2,
    name: "JulianG",
    role: "Entrepreneur",
    image: "/man-with-glasses-in-black-striped-shirt.jpg",
    quote: "Excelente profesional con vocación de servicio e interés genuino y sincero por el bienestar del otro. Amplia experiencia en Coatching, puntualidad, pulcritud, profesionalismo, y accesibilidad para las citas. Muy satisfecho.",
  },
  {
    id: 3,
    name: "Alejandra María Grajales Castaño",
    role: "Business Owner",
    image: "/woman-and-bearded-man-in-conversation.jpg",
    quote: "Muy especializado, presente, con conversación asertiva lo que logra llevarme a resolver mis situaciones más complejas. Ya son más de 20 años acudiendo a su consulta. Es mi sostén y mi refugio.",
  },
  {
    id: 4,
    name: "Maria Camila",
    role: "Coach",
    image: "/young-man-in-black-shirt-looking-confident.jpg",
    quote: "Excelente profesional, buena disposición y vocación, me ha ayudado mucho en los procesos de mi vida. Super recomendado",
  },
  {
    id: 5,
    name: "J. A.",
    role: "Consultant",
    image: "/woman-smiling-in-professional-setting.jpg",
    quote: "Profesional idóneo y con suficiente experiencia. Además, apasionado con su trabajo.",
  },
  {
    id: 6,
    name: "William García Ramírez",
    role: "Leader",
    image: "/executive-man-in-suit-speaking.jpg",
    quote: "El Dr. Rene Fernando es un profesional que se esmera por el paciente y se entrega a fondo el proceso que se adelante.",
  },
]

const TestimonialCard = ({ testimonial }) => (
  <div className="w-[calc(33.33%-16px)] flex-shrink-0">
    <div className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 shadow-sm transition-all duration-500 hover:shadow-2xl hover:shadow-zinc-950/50">
      <div className="relative h-64 overflow-hidden">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/95 via-zinc-900/40 to-transparent" />

        <div className="absolute left-6 top-6 rounded-full bg-zinc-800/90 p-3 shadow-lg backdrop-blur-sm">
          <Quote className="h-5 w-5 text-white" />
        </div>
      </div>

      <div className="p-6">
        <p className="mb-6 text-base leading-relaxed text-zinc-300">
          "{testimonial.quote}"
        </p>

        <div className="flex items-center gap-4 border-t border-zinc-800 pt-4">
          <div className="h-10 w-10 rounded-full bg-zinc-800" />
          <div>
            <p className="font-semibold text-white">{testimonial.name}</p>
            <p className="text-sm text-zinc-400">{testimonial.role}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const NavigationButton = ({ direction, onClick, disabled }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900 transition-all hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-30"
    aria-label={`${direction} testimonials`}
  >
    {direction === "Previous" ? (
      <ChevronLeft className="h-5 w-5 text-white" />
    ) : (
      <ChevronRight className="h-5 w-5 text-white" />
    )}
  </button>
)

const SectionHeader = () => (
  <div className="mb-12 text-center">
    <div className="mb-4 inline-flex items-center justify-center rounded-full bg-zinc-900 px-4 py-2 border border-zinc-800">
      <Quote className="mr-2 h-4 w-4 text-zinc-400" />
      <span className="text-sm font-medium text-zinc-400">Experiencias Reales</span>
    </div>
    <h2 className="mb-3 font-serif text-4xl font-light tracking-tight text-white md:text-5xl">
      Historias de Transformación
    </h2>
    <p className="mx-auto max-w-2xl text-zinc-400">
      Descubre cómo nuestros pacientes han encontrado bienestar y crecimiento personal
    </p>
  </div>
)

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(testimonials.length - 3, prev + 1))
  }

  const canGoPrevious = currentIndex > 0
  const canGoNext = currentIndex < testimonials.length - 3

  return (
    <section className="relative w-full bg-black py-16 px-4 md:px-8">
      {/* Transición con onda SVG en la parte superior */}
      <div className="absolute top-0 left-0 right-0 -translate-y-full">
        <svg viewBox="0 0 1440 120" className="w-full h-24 fill-black">
          <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,85.3C1248,85,1344,75,1392,69.3L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
        </svg>
      </div>

      {/* Borde naranja decorativo */}
      <div className="absolute top-0 left-0 right-0">
      </div>

      <div className="mx-auto max-w-[1400px]">
        <SectionHeader />

        <div className="mb-8 flex justify-end">
          <div className="flex items-center gap-2">
            <NavigationButton
              direction="Previous"
              onClick={handlePrevious}
              disabled={!canGoPrevious}
            />
            <NavigationButton
              direction="Next"
              onClick={handleNext}
              disabled={!canGoNext}
            />
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div
            className="flex gap-6 transition-transform duration-700 ease-out"
            style={{
              transform: `translateX(-${currentIndex * 33.33}%)`,
            }}
          >
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <button className="rounded-full border border-zinc-800 bg-zinc-900 px-8 py-3 font-medium text-white transition-all hover:bg-zinc-800 hover:shadow-lg">
            Conoce más historias
          </button>
        </div>
      </div>
    </section>
  )
}