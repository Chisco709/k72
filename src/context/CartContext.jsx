import { createContext, useContext, useState, useCallback, useMemo } from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])

  const addToCart = useCallback((product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id)
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prevCart, { ...product, quantity: 1 }]
    })
  }, [])

  const removeFromCart = useCallback((productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId))
  }, [])

  const updateQuantity = useCallback((productId, quantity) => {
    setCart(prevCart => {
      if (quantity <= 0) {
        return prevCart.filter(item => item.id !== productId)
      }
      return prevCart.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    })
  }, [])

  const clearCart = useCallback(() => {
    setCart([])
  }, [])

  const getTotal = useCallback(() => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0)
  }, [cart])

  const getItemCount = useCallback(() => {
    return cart.reduce((count, item) => count + item.quantity, 0)
  }, [cart])

  const value = useMemo(() => ({
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotal,
    getItemCount
  }), [cart, addToCart, removeFromCart, updateQuantity, clearCart, getTotal, getItemCount])

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart debe usarse dentro de un CartProvider')
  }
  return context
}