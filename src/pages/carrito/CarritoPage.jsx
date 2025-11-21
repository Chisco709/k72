import { useState, useEffect } from 'react'
import { useCart } from '../../context/CartContext'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft, CreditCard } from 'lucide-react'

// Productos disponibles
const PRODUCTS = {
  vida: {
    id: "vida",
    title: "Coaching de Vida",
    subtitle: "Viaje al significado",
    price: 450000,
    duration: "5–10 semanas",
    image: "/reneimage.jpg"
  },
  deportivo: {
    id: "deportivo",
    title: "Coaching Deportivo",
    subtitle: "Enfócate en el rendimiento",
    price: 600000,
    duration: "Personalizado",
    image: "/deportivo.jpg"
  },
  guerrero: {
    id: "guerrero",
    title: "El Camino del Guerrero",
    subtitle: "Alquimia del carácter",
    price: 1200000,
    duration: "1 fin de semana",
    image: "/guerrero.jpg"
  },
  excelencia: {
    id: "excelencia",
    title: "Sendero de la Excelencia",
    subtitle: "Habilidades que perduran",
    price: 350000,
    duration: "8 horas | workshop",
    image: "/excelencia.jpg"
  },
  busqueda: {
    id: "busqueda",
    title: "La Física de la Búsqueda",
    subtitle: "Explora & transforma",
    price: 680000,
    duration: "2 talleres",
    image: "/busqueda.jpg"
  }
}

const formatCOP = (n) => {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
  }).format(n)
}

export default function CarritoPage() {
  const { cart, addToCart, removeFromCart, updateQuantity, clearCart, getTotal, getItemCount } = useCart()
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const [showCheckout, setShowCheckout] = useState(false)
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  })

  // CORRECCIÓN: Usar useEffect en lugar de useState
  useEffect(() => {
    const programaId = searchParams.get('programa')
    if (programaId && PRODUCTS[programaId]) {
      addToCart(PRODUCTS[programaId])
    }
  }, [searchParams, addToCart])

  const handleSubmit = (e) => {
    e.preventDefault()
    // Enviar la orden al backend y obtener la URL de WhatsApp para finalizar
    const payload = {
      customer: {
        nombre: formData.nombre,
        email: formData.email,
        telefono: formData.telefono,
        mensaje: formData.mensaje
      },
      items: cart.map(item => ({ id: item.id, title: item.title, quantity: item.quantity, price: item.price })),
      total: getTotal()
    }

    fetch((import.meta.env.VITE_API_URL || '') + '/api/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
      .then(async (res) => {
        if (!res.ok) throw new Error('Error creando la orden')
        return await res.json()
      })
      .then((data) => {
        // Abrir WhatsApp con el mensaje preparado por el backend
        if (data.whatsappUrl) {
          window.open(data.whatsappUrl, '_blank')
        }
        clearCart()
        navigate('/')
      })
      .catch((err) => {
        console.error(err)
        // Fallback: construir mensaje localmente
        const itemsText = cart.map(item => `• ${item.title} (x${item.quantity}) - ${formatCOP(item.price * item.quantity)}`).join('\n')
        const mensaje = `Nueva orden:\n${itemsText}\nTotal: ${formatCOP(getTotal())}\nNombre: ${formData.nombre}`
        const whatsappNumber = '573001234567'
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(mensaje)}`
        window.open(whatsappUrl, '_blank')
        clearCart()
        navigate('/')
      })
  }

  if (cart.length === 0 && !searchParams.get('programa')) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center px-4 pt-32">
        <div className="text-center max-w-md">
          <ShoppingBag className="w-24 h-24 mx-auto text-gray-600 mb-6" />
          <h2 className="text-3xl font-bold mb-4">Tu carrito está vacío</h2>
          <p className="text-gray-400 mb-8">
            Agrega algunos programas para comenzar tu transformación
          </p>
          <button
            onClick={() => navigate('/servicios/coaching')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-colors inline-flex items-center gap-2"
          >
            <ArrowLeft className="w-5 h-5" />
            Ver Programas
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <button
            onClick={() => navigate(-1)}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-4xl font-bold">Carrito de Compras</h1>
          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
            {getItemCount()}
          </span>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Lista de productos */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="bg-gray-900 rounded-2xl p-6 border border-gray-800 hover:border-gray-700 transition-colors"
              >
                <div className="flex gap-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-400 mb-3">{item.subtitle}</p>
                    <p className="text-blue-400 font-semibold">{formatCOP(item.price)}</p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-400 transition-colors h-fit"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
                
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-800">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-8 h-8 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="text-lg font-semibold w-8 text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-8 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <p className="text-xl font-bold">{formatCOP(item.price * item.quantity)}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Resumen y checkout */}
          <div className="lg:col-span-1">
            <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800 sticky top-32">
              <h2 className="text-2xl font-bold mb-6">Resumen</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-400">
                  <span>Subtotal</span>
                  <span>{formatCOP(getTotal())}</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>IVA (0%)</span>
                  <span>{formatCOP(0)}</span>
                </div>
                <div className="border-t border-gray-800 pt-3 flex justify-between text-xl font-bold">
                  <span>Total</span>
                  <span className="text-blue-500">{formatCOP(getTotal())}</span>
                </div>
              </div>

              {!showCheckout ? (
                <button
                  onClick={() => setShowCheckout(true)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  <CreditCard className="w-5 h-5" />
                  Proceder al Pago
                </button>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    placeholder="Nombre completo"
                    required
                    value={formData.nombre}
                    onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500"
                  />
                  <input
                    type="tel"
                    placeholder="Teléfono"
                    required
                    value={formData.telefono}
                    onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500"
                  />
                  <textarea
                    placeholder="Mensaje adicional (opcional)"
                    value={formData.mensaje}
                    onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                    rows={3}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500 resize-none"
                  />
                  <button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-semibold transition-colors"
                  >
                    Enviar Pedido por WhatsApp
                  </button>
                </form>
              )}

              <button
                onClick={clearCart}
                className="w-full mt-4 text-red-500 hover:text-red-400 py-2 text-sm font-medium transition-colors"
              >
                Vaciar carrito
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}