import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  const phoneNumber = '573117472236'
  const message = encodeURIComponent('Hola, me interesa conocer más sobre los servicios de René Chisco.')
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Contactar por WhatsApp"
    >
      <div className="relative">
        {/* Pulse animation */}
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75" />
        <div className="absolute inset-0 bg-green-500 rounded-full animate-pulse opacity-50" />
        
        {/* Button */}
        <div className="relative w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group-hover:scale-110">
          <MessageCircle className="w-7 h-7 text-white" />
        </div>
      </div>
    </a>
  )
}

