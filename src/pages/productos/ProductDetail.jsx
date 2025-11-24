import { useEffect, useState } from "react"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import { ArrowLeft, Check, Sparkles, Star, Zap } from "lucide-react"

import { FALLBACK_PRODUCTS } from "./data"
import { normalizeProduct } from "./utils"
import Footer from "../footer/footer"

const findFallbackProduct = (id) => {
  const fallback = FALLBACK_PRODUCTS.find((item) => item.id === id)
  if (!fallback) return null
  return normalizeProduct({ ...fallback, icon: fallback.icon || "book" })
}

const mapApiProduct = (data) =>
  normalizeProduct({
    id: data.slug || String(data.id),
    type: data.type || "Producto",
    title: data.title,
    subtitle: data.subtitle || "",
    description: data.description || "",
    image: data.image || "/coach.jpg",
    price: typeof data.price === "number" ? `$${(data.price / 100).toFixed(0)}` : data.price || "",
    features: data.features || [],
    icon: data.icon || "book",
    color: data.color || "from-cyan-400 via-blue-500 to-cyan-600",
    accentColor: data.accentColor || "blue",
  })

export default function ProductDetail() {
  const { productId } = useParams()
  const location = useLocation()
  const navigate = useNavigate()

  const [product, setProduct] = useState(() => {
    if (location.state?.product) return location.state.product
    if (!productId) return null
    return findFallbackProduct(productId)
  })
  const [loading, setLoading] = useState(!location.state?.product && !product)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!productId || product) {
      setLoading(false)
      return
    }

    const fetchProduct = async () => {
      try {
        setLoading(true)
        setError(null)
        const apiBase = import.meta.env.VITE_API_URL || "http://localhost:4000"
        const response = await fetch(`${apiBase}/api/products/${productId}`)

        if (!response.ok) {
          throw new Error("Producto no encontrado")
        }

        const data = await response.json()
        setProduct(mapApiProduct(data))
      } catch (err) {
        console.error(err)
        setError("No encontramos información para este producto.")
      } finally {
        setLoading(false)
      }
    }

    fetchProduct()
  }, [product, productId])

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="h-12 w-12 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
          <p className="text-sm text-gray-400">Cargando producto...</p>
        </div>
      </div>
    )
  }

  if (!product || error) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center px-6 text-center">
        <div className="max-w-md space-y-6">
          <Sparkles className="h-10 w-10 text-blue-500 mx-auto" />
          <h1 className="text-3xl font-semibold">No encontramos este producto</h1>
          <p className="text-gray-400">
            {error || "Es posible que el enlace haya cambiado o que el producto ya no esté disponible."}
          </p>
          <button
            onClick={() => navigate("/productos")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-colors inline-flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver a productos
          </button>
        </div>
      </div>
    )
  }

  const Icon = product.icon

  return (
    <div className="bg-black text-white min-h-screen pt-32">
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <button
          onClick={() => navigate(-1)}
          className="mb-8 inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Volver
        </button>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-3xl overflow-hidden border border-zinc-900">
            <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-40`} />
            <img src={product.image} alt={product.title} className="relative w-full h-full object-cover" />
            <div className="absolute top-6 left-6 bg-black/70 backdrop-blur px-4 py-2 rounded-full border border-white/10">
              <span className="text-sm font-semibold tracking-[0.2em] uppercase">{product.type}</span>
            </div>
            <div className="absolute bottom-6 right-6 bg-black/70 backdrop-blur px-5 py-3 rounded-full border border-white/10">
              <span className="text-2xl font-black">{product.price}</span>
            </div>
          </div>

          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 px-4 py-2 border border-zinc-800 rounded-full">
              <Icon className="h-5 w-5 text-blue-400" />
              <span className="text-sm tracking-[0.2em] uppercase text-gray-400">Programa certificado</span>
            </div>

            <div>
              <h1 className="text-5xl font-black mb-4 leading-tight">{product.title}</h1>
              <p className="text-xl text-blue-200 font-semibold mb-4">{product.subtitle}</p>
              <p className="text-gray-400 text-lg leading-relaxed">{product.description}</p>
            </div>

            <div className="grid gap-3">
              {product.features?.map((feature, idx) => (
                <div key={`${feature}-${idx}`} className="flex items-start gap-3 p-3 rounded-2xl bg-zinc-900/50 border border-zinc-800">
                  <div className="w-8 h-8 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0">
                    <Check className="h-4 w-4 text-blue-400" />
                  </div>
                  <p className="text-gray-200">{feature}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={() => navigate('/carrito')}
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all"
              >
                <Zap className="w-5 h-5" />
                Añadir al carrito
              </button>
              <button
                onClick={() => navigate('/servicios')}
                className="inline-flex items-center gap-2 border border-zinc-800 px-8 py-4 rounded-full font-semibold text-white hover:bg-zinc-900/70 transition-colors"
              >
                <Star className="w-5 h-5 text-blue-400" />
                Ver más servicios
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

