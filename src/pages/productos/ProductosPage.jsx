import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { BookOpen, Video, Star, Check, ArrowRight, Sparkles, TrendingUp, Target, Zap } from "lucide-react"

// Components
import "../../index.css"

export default function ProductosPage() {
  const navigate = useNavigate()
  const [hoveredProduct, setHoveredProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [products, setProducts] = useState([
    {
      id: 1,
      type: "Curso Virtual",
      title: "Del Cambio a la Transformación Personal",
      subtitle: "Coaching de Vida con René Chisco",
      description:
        "Un emocionante programa de coaching de vida que te guiará a través de un viaje reflexivo y empoderador para alcanzar tu máximo potencial y lograr una transformación personal significativa.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-zIMy5TR9toRFdmNXjUQCy1wg4uPzF7.png",
      price: "$197",
      features: [
        "Autoexploración profunda",
        "Gestión efectiva del cambio",
        "Establecimiento de objetivos claros",
        "Construcción de mentalidad positiva",
        "Herramientas y estrategias prácticas",
        "Acceso de por vida",
      ],
      icon: Video,
      color: "from-blue-500 via-cyan-400 to-blue-600",
      accentColor: "blue",
    },
    {
      id: 2,
      type: "Libro Digital",
      title: "Rompe el Libreto",
      subtitle: "Conquista Tu Mejor Versión",
      description:
        "Un proceso sistematizado de estrategias y técnicas compartidas con éxito durante los últimos diez años. Una guía soportada en los aportes de la Física Cuántica, Neurociencias, Psicología, PNL y Coaching.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-zIMy5TR9toRFdmNXjUQCy1wg4uPzF7.png",
      price: "$47",
      features: [
        "Manual para vivir tus mejores días",
        "Estrategias probadas por 10 años",
        "Basado en investigación científica",
        "Técnicas de PNL y Coaching",
        "Desafío a la zona de confort",
        "Formato digital descargable",
      ],
      icon: BookOpen,
      color: "from-cyan-400 via-blue-500 to-cyan-600",
      accentColor: "cyan",
    },
    {
      id: 3,
      type: "Libro Digital",
      title: "El Muro",
      subtitle: "17 Pasos Para Alcanzar La Vida De Tus Sueños",
      description:
        "Descubre qué significa estar detrás del muro y cómo cruzarlo. Una guía transformadora que te llevará de la supervivencia a vivir con propósito, pasión y maestría en cada área de tu vida.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-fjuUPpmQi9XhjJ0bN1xAYLSn5TCYXm.png",
      price: "$47",
      features: [
        "17 pasos prácticos y accionables",
        "De la supervivencia al propósito",
        "Encuentra tu pasión y maestría",
        "Construye una vida íntegra",
        "Filosofía de vida basada en principios",
        "Formato digital descargable",
      ],
      icon: BookOpen,
      color: "from-blue-600 via-indigo-500 to-blue-500",
      accentColor: "indigo",
    },
  ])

  // Fetch products from backend API
  useEffect(() => {
    const fetchProducts = async () => {
      const api = 'http://localhost:4000/api/products'

      try {
        setLoading(true)
        setError(null)
        
        const response = await fetch(api)
        if (!response.ok) {
          throw new Error(`Error al cargar productos: ${response.status}`)
        }
        
        const data = await response.json()
        const mapped = data.map(p => ({
          id: p.id,
          type: p.type || 'Producto',
          title: p.title,
          subtitle: p.subtitle || '',
          description: p.description || '',
          image: p.image,
          price: `$${(p.price / 100).toFixed(0)}`,
          features: p.features || [],
          icon: BookOpen,
          color: p.color || 'from-cyan-400 via-blue-500 to-cyan-600',
          accentColor: p.accentColor || 'blue'
        }))
        
        setProducts(mapped)
      } catch (err) {
        console.error('Error:', err)
        setError('No se pudieron cargar los productos. Por favor, intente más tarde.')
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  const journeySteps = [
    {
      icon: Target,
      title: "Descubre",
      description: "Identifica tus metas y fortalezas ocultas",
      color: "text-cyan-400",
    },
    {
      icon: TrendingUp,
      title: "Transforma",
      description: "Supera barreras y abraza el cambio",
      color: "text-blue-400",
    },
    {
      icon: Sparkles,
      title: "Alcanza",
      description: "Logra tu máximo potencial",
      color: "text-indigo-400",
    },
  ]

  const scrollToProducts = () => {
    document.getElementById('productos-section')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative pt-32 md:pt-40 pb-24 md:pb-32">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-black to-cyan-950" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/30 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/30 rounded-full blur-[120px] animate-pulse" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-400/40 rounded-full mb-8 animate-fade-in backdrop-blur-sm">
              <Sparkles className="w-5 h-5 text-cyan-400 animate-pulse" />
              <span className="text-sm font-medium bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Productos de Transformación Personal
              </span>
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-none tracking-tight">
              <span className="block text-white">Transforma</span>
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent animate-gradient">
                Tu Vida
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-zinc-300 mb-12 leading-relaxed max-w-3xl mx-auto font-light">
              Descubre las herramientas que han ayudado a{" "}
              <span className="text-cyan-400 font-semibold">miles de personas</span> a alcanzar su máximo potencial y
              vivir la vida que siempre soñaron
            </p>

            <div className="flex flex-wrap gap-6 justify-center">
              <button
                onClick={() => navigate('/servicios/coaching')}
                className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-10 py-7 text-lg font-bold shadow-2xl shadow-blue-500/50 hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 rounded-lg inline-flex items-center gap-2"
              >
                <Zap className="w-6 h-6" />
                Comenzar Ahora
              </button>
              <button
                onClick={scrollToProducts}
                className="border-2 border-cyan-500/50 hover:bg-cyan-500/10 bg-transparent text-white px-10 py-7 text-lg font-bold backdrop-blur-sm hover:border-cyan-400 transition-all duration-300 rounded-lg inline-flex items-center gap-2"
              >
                Ver Productos
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        <div className="absolute top-20 left-10 w-20 h-20 border-2 border-blue-500/30 rounded-full animate-float" />
        <div className="absolute bottom-20 right-10 w-16 h-16 border-2 border-cyan-500/30 rounded-lg animate-float-delayed" />
      </section>

      {/* Journey Steps Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              Tu Viaje de{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Transformación
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {journeySteps.map((step, index) => {
                const Icon = step.icon
                return (
                  <div key={index} className="relative group" style={{ animationDelay: `${index * 200}ms` }}>
                    <div className="relative bg-zinc-950/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-500 hover:scale-105">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Icon className={`w-8 h-8 ${step.color}`} />
                      </div>
                      <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                      <p className="text-zinc-400 leading-relaxed">{step.description}</p>

                      {/* Step number */}
                      <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
                        <span className="text-lg font-bold text-cyan-400">{index + 1}</span>
                      </div>
                    </div>

                    {/* Connecting line (except for last item) */}
                    {index < journeySteps.length - 1 && (
                      <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-500/50 to-transparent" />
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section id="productos-section" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              Nuestros{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
                Productos
              </span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Cada producto está diseñado para guiarte en tu camino hacia el crecimiento personal y la transformación
            </p>
          </div>

          {loading ? (
            <div className="flex justify-center items-center min-h-[400px]">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          ) : error ? (
            <div className="text-center p-8 bg-red-500/10 border border-red-500/20 rounded-lg">
              <p className="text-red-400">{error}</p>
              <button 
                onClick={() => window.location.reload()}
                className="mt-4 px-4 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-lg transition-colors"
              >
                Intentar de nuevo
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {products.map((product, index) => {
                const Icon = product.icon
                return (
                  <div
                    key={product.id}
                    className="group relative"
                    onMouseEnter={() => setHoveredProduct(product.id)}
                    onMouseLeave={() => setHoveredProduct(null)}
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="relative bg-zinc-950 border border-zinc-800 rounded-3xl overflow-hidden h-full transition-all duration-500 hover:border-blue-400/50 hover:shadow-2xl hover:shadow-blue-500/30 hover:-translate-y-2">
                      {/* Product Image */}
                      <div className="relative h-72 overflow-hidden">
                        <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-30`} />
                        <img
                          src={product.image}
                          alt={product.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent" />

                        {/* Type Badge */}
                        <div className="absolute top-4 left-4">
                          <div className="flex items-center gap-2 px-4 py-2 bg-black/90 backdrop-blur-md border border-cyan-400/40 rounded-full">
                            <Icon className="w-5 h-5 text-cyan-400" />
                            <span className="text-sm font-bold text-cyan-300">{product.type}</span>
                          </div>
                        </div>

                        <div className="absolute top-4 right-4">
                          <div className={`px-5 py-2.5 bg-gradient-to-r ${product.color} rounded-full shadow-lg`}>
                            <span className="text-xl font-black text-white">{product.price}</span>
                          </div>
                        </div>

                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <Sparkles className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 text-cyan-400 animate-pulse" />
                        </div>
                      </div>

                      {/* Product Content */}
                      <div className="p-8">
                        <h3 className="text-3xl font-black mb-3 group-hover:text-cyan-400 transition-colors">
                          {product.title}
                        </h3>
                        <p className="text-base text-blue-400 font-semibold mb-4">{product.subtitle}</p>
                        <p className="text-zinc-400 mb-8 leading-relaxed text-base">{product.description}</p>

                        {/* Features List */}
                        <div className="space-y-3 mb-8">
                          {product.features.map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-3 group/item">
                              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform">
                                <Check className="w-4 h-4 text-cyan-400" />
                              </div>
                              <span className="text-sm text-zinc-300 group-hover/item:text-white transition-colors">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>

                        <button
                          onClick={() => navigate(`/productos/${product.id}`)}
                          className={`w-full bg-gradient-to-r ${product.color} hover:shadow-2xl hover:shadow-blue-500/50 text-white font-bold text-lg py-6 transition-all duration-300 hover:scale-105 rounded-lg inline-flex items-center justify-center gap-2`}
                        >
                          Ver Detalles
                        </button>
                      </div>

                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none`}
                      />
                    </div>

                    <div
                      className={`absolute -inset-2 bg-gradient-to-br ${product.color} rounded-3xl opacity-0 group-hover:opacity-30 blur-2xl transition-opacity duration-500 -z-10`}
                    />
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-black to-cyan-950" />
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/20 rounded-full blur-[150px] animate-pulse" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/40 rounded-full mb-8 backdrop-blur-sm">
              <Star className="w-5 h-5 text-cyan-400 animate-pulse" />
              <span className="text-sm font-medium text-cyan-300">Miles de vidas transformadas</span>
            </div>

            <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
              <span className="block text-white">¿Listo Para</span>
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
                Transformar Tu Vida?
              </span>
            </h2>

            <p className="text-xl md:text-2xl text-zinc-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Únete a la comunidad de personas que han decidido tomar control de su destino y crear la vida que siempre
              soñaron
            </p>

            <button
              onClick={() => navigate('/servicios/coaching')}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-12 py-8 text-xl font-black shadow-2xl shadow-blue-500/50 hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-110 rounded-lg inline-flex items-center gap-3"
            >
              <Zap className="w-7 h-7" />
              Comenzar Mi Transformación
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}