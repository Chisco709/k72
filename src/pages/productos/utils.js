import { BookOpen, Video } from "lucide-react"

const iconLibrary = {
  video: Video,
  book: BookOpen
}

export const normalizeProduct = (product) => {
  const iconKey = typeof product.icon === 'string' ? product.icon.toLowerCase() : null
  const iconComponent = typeof product.icon === 'string'
    ? iconLibrary[iconKey] || BookOpen
    : product.icon || BookOpen

  return {
    ...product,
    icon: iconComponent,
    price: product.price || "$0"
  }
}

