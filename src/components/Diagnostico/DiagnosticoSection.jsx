import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Brain, Heart, Target, Zap, Users, CheckCircle2, TrendingUp } from 'lucide-react'

const categorias = [
  {
    id: 'vision',
    title: 'Visión y Propósito',
    icon: Target,
    description: 'Psicología Positiva: Sentido – Coaching Ontológico: Declaraciones',
    preguntas: [
      'Tengo claridad sobre qué significa para mí "llevar mi vida a otro nivel".',
      'He definido metas concretas que deseo alcanzar en los próximos meses.',
      'Siento que mis metas están alineadas con mis valores más profundos.',
      'Me siento motivado por una visión personal que me inspira.'
    ]
  },
  {
    id: 'emociones',
    title: 'Emociones y Disposición Interna',
    icon: Heart,
    description: 'Psicología Positiva: Emociones Positivas – Coaching Ontológico: Estado de Ánimo',
    preguntas: [
      'Habitualmente experimento emociones que me impulsan a actuar (entusiasmo, curiosidad, esperanza).',
      'Siento que estoy manejando adecuadamente emociones que pueden frenarme (miedo, duda, frustración).',
      'Soy capaz de recuperar energía emocional después de situaciones difíciles.',
      'Me siento emocionalmente preparado para enfrentar cambios importantes.'
    ]
  },
  {
    id: 'lenguaje',
    title: 'Lenguaje y Narrativa Personal',
    icon: Brain,
    description: 'Coaching Ontológico: Juicios, Conversaciones, Narrativa',
    preguntas: [
      'La forma en que hablo de mí mismo refleja confianza en mis capacidades.',
      'Identifico y cuestiono creencias que ya no me sirven.',
      'Estoy dispuesto a cambiar la conversación interna que me limita.',
      'Sueño en grande y me permito hablar de mis metas sin minimizarme.'
    ]
  },
  {
    id: 'fortaleza',
    title: 'Fortaleza y Recursos Personales',
    icon: Zap,
    description: 'Psicología Positiva: Fortalezas, Resiliencia',
    preguntas: [
      'Conozco mis principales fortalezas y sé cómo usarlas a mi favor.',
      'Sé pedir ayuda o apoyo cuando lo necesito.',
      'Tengo hábitos que fortalecen mi bienestar (descanso, ejercicio, autocuidado).',
      'Me considero una persona resiliente ante los desafíos.'
    ]
  },
  {
    id: 'accion',
    title: 'Acción y Compromiso',
    icon: TrendingUp,
    description: 'Coaching Ontológico: Acción – Psicología Positiva: Engagement',
    preguntas: [
      'Tomo acciones concretas y consistentes hacia mis metas.',
      'Cuando me comprometo con algo, cumplo.',
      'Estoy dispuesto a salir de mi zona de confort para avanzar.',
      'Actualmente estoy haciendo cambios reales para mejorar mi vida.'
    ]
  },
  {
    id: 'relaciones',
    title: 'Relaciones y Entorno de Apoyo',
    icon: Users,
    description: 'Psicología Positiva: Relaciones Positivas',
    preguntas: [
      'Me rodeo de personas que apoyan mi crecimiento.',
      'Mantengo conversaciones que me enriquecen y me expanden.',
      'Evito o gestiono relaciones que drenan mi energía.',
      'Tengo modelos o referentes que me inspiran.'
    ]
  },
  {
    id: 'evaluacion',
    title: 'Evaluación Global de Decisión y Preparación',
    icon: CheckCircle2,
    description: 'Compromiso y Preparación',
    preguntas: [
      'Me siento preparado para llevar mi vida a otro nivel.',
      'Estoy dispuesto a asumir la responsabilidad total de mis resultados.',
      'Me encuentro en un momento vital que favorece el cambio.',
      'Estoy decidido a invertir tiempo y energía en mi crecimiento.',
      'No permitiré que mis miedos me detengan.',
      'Estoy listo para comenzar ahora, no "cuando todo esté perfecto".'
    ]
  }
]

export default function DiagnosticoSection() {
  const [currentCategoria, setCurrentCategoria] = useState(0)
  const [respuestas, setRespuestas] = useState({})
  const [mostrarResultado, setMostrarResultado] = useState(false)
  const [puntajeTotal, setPuntajeTotal] = useState(0)

  const handleRespuesta = (categoriaId, preguntaIndex, valor) => {
    const key = `${categoriaId}-${preguntaIndex}`
    setRespuestas(prev => ({ ...prev, [key]: valor }))
  }

  const calcularPuntaje = () => {
    let total = 0
    categorias.forEach(categoria => {
      categoria.preguntas.forEach((_, index) => {
        const key = `${categoria.id}-${index}`
        total += respuestas[key] || 0
      })
    })
    return total
  }

  const handleSiguiente = () => {
    if (currentCategoria < categorias.length - 1) {
      setCurrentCategoria(prev => prev + 1)
    } else {
      const puntaje = calcularPuntaje()
      setPuntajeTotal(puntaje)
      setMostrarResultado(true)
    }
  }

  const handleAnterior = () => {
    if (currentCategoria > 0) {
      setCurrentCategoria(prev => prev - 1)
    }
  }

  const categoriaActual = categorias[currentCategoria]
  const Icon = categoriaActual.icon

  const getInterpretacion = (puntaje) => {
    if (puntaje >= 120) {
      return {
        nivel: 'Compromiso muy alto',
        mensaje: 'Estás listo para avanzar con fuerza. Tienes la claridad, motivación y recursos necesarios para llevar tu vida a otro nivel.',
        color: 'text-green-400',
        bgColor: 'bg-green-500/10',
        borderColor: 'border-green-500/30'
      }
    } else if (puntaje >= 90) {
      return {
        nivel: 'Compromiso moderado',
        mensaje: 'Hay claridad, pero necesitas reforzar algunas áreas. Con el apoyo adecuado, puedes acelerar tu transformación.',
        color: 'text-blue-400',
        bgColor: 'bg-blue-500/10',
        borderColor: 'border-blue-500/30'
      }
    } else if (puntaje >= 60) {
      return {
        nivel: 'Bajo compromiso',
        mensaje: 'Hay deseos, pero falta estructura interna o externa. Es momento de trabajar en claridad, emociones y visión.',
        color: 'text-yellow-400',
        bgColor: 'bg-yellow-500/10',
        borderColor: 'border-yellow-500/30'
      }
    } else {
      return {
        nivel: 'Muy bajo compromiso',
        mensaje: 'Es momento de trabajar en claridad, emociones y visión antes de lanzarte a grandes cambios. El apoyo profesional puede ser clave.',
        color: 'text-orange-400',
        bgColor: 'bg-orange-500/10',
        borderColor: 'border-orange-500/30'
      }
    }
  }

  if (mostrarResultado) {
    const interpretacion = getInterpretacion(puntajeTotal)
    const totalPreguntas = categorias.reduce((acc, cat) => acc + cat.preguntas.length, 0)
    const maxPuntaje = totalPreguntas * 5

    return (
      <section className="py-20 px-6 bg-gradient-to-br from-blue-950 via-black to-zinc-950">
        <div className="max-w-4xl mx-auto">
          <div className={`${interpretacion.bgColor} ${interpretacion.borderColor} border-2 rounded-3xl p-8 md:p-12 text-center`}>
            <div className="mb-8">
              <div className="text-6xl font-black mb-4">{puntajeTotal}</div>
              <div className="text-zinc-400 mb-2">de {maxPuntaje} puntos posibles</div>
              <div className={`text-2xl font-bold ${interpretacion.color} mb-4`}>
                {interpretacion.nivel}
              </div>
            </div>

            <p className="text-lg text-zinc-300 mb-8 leading-relaxed">
              {interpretacion.mensaje}
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/servicios/coaching"
                className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-zinc-100 transition-all"
              >
                Explorar Servicios
                <ArrowRight className="h-4 w-4" />
              </Link>
              <button
                onClick={() => {
                  setMostrarResultado(false)
                  setCurrentCategoria(0)
                  setRespuestas({})
                  setPuntajeTotal(0)
                }}
                className="inline-flex items-center gap-2 border border-white/20 px-8 py-4 rounded-full font-semibold text-white hover:bg-white/10 transition-colors"
              >
                Volver a realizar
              </button>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-blue-950 via-black to-zinc-950">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Descubre en menos de 10 minutos
          </h2>
          <p className="text-xl text-zinc-400 mb-2">
            qué tan dispuesto estás para crecer exponencialmente
          </p>
          <p className="text-zinc-500 max-w-2xl mx-auto">
            Este diagnóstico está diseñado para ayudarte a identificar tus fortalezas y las áreas en las que tu vida está necesitando con urgencia unos ajustes para poder avanzar hacia la conquista de tus sueños.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-zinc-400 mb-2">
            <span>Categoría {currentCategoria + 1} de {categorias.length}</span>
            <span>{Math.round(((currentCategoria + 1) / categorias.length) * 100)}%</span>
          </div>
          <div className="w-full bg-zinc-800 rounded-full h-2">
            <div
              className="bg-blue-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentCategoria + 1) / categorias.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Categoria Card */}
        <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-8 mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
              <Icon className="h-6 w-6 text-blue-400" />
            </div>
            <div>
              <h3 className="text-2xl font-bold">{categoriaActual.title}</h3>
              <p className="text-sm text-zinc-500">{categoriaActual.description}</p>
            </div>
          </div>

          <div className="space-y-6">
            {categoriaActual.preguntas.map((pregunta, index) => {
              const key = `${categoriaActual.id}-${index}`
              const valorActual = respuestas[key] || 0

              return (
                <div key={index} className="space-y-3">
                  <p className="text-zinc-300 font-medium">{pregunta}</p>
                  <div className="flex gap-2 flex-wrap">
                    {[1, 2, 3, 4, 5].map((valor) => (
                      <button
                        key={valor}
                        onClick={() => handleRespuesta(categoriaActual.id, index, valor)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                          valorActual === valor
                            ? 'bg-blue-500 text-white'
                            : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'
                        }`}
                      >
                        {valor === 1 && 'Totalmente en desacuerdo'}
                        {valor === 2 && 'En desacuerdo'}
                        {valor === 3 && 'Neutral'}
                        {valor === 4 && 'De acuerdo'}
                        {valor === 5 && 'Totalmente de acuerdo'}
                      </button>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between">
          <button
            onClick={handleAnterior}
            disabled={currentCategoria === 0}
            className="px-6 py-3 rounded-full border border-zinc-800 text-zinc-400 hover:bg-zinc-900 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Anterior
          </button>
          <button
            onClick={handleSiguiente}
            className="px-6 py-3 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors font-semibold"
          >
            {currentCategoria === categorias.length - 1 ? 'Ver Resultados' : 'Siguiente'}
          </button>
        </div>
      </div>
    </section>
  )
}

