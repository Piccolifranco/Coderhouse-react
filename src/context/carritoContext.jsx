import { useState, createContext } from 'react'

export const carritoContext = createContext({
  cart: [],
  totalQuantity: 0,
  totalPrice: 0
})

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)
  const [totalQuantity, setTotalQuantity] = useState(0)

  const addProduct = (item, quantity) => {
    const productIndex = cart.findIndex(prod => prod.item.id === item.id)

    if (productIndex === -1) {
      setCart(prev => [...prev, { item: { ...item, quantity }, quantity }])
      setTotalQuantity(prev => prev + quantity)
      setTotalPrice(prev => prev + (item.price * quantity))
    } else {
      const updatedCart = [...cart]
      const updatedQuantity = updatedCart[productIndex].quantity + quantity
      updatedCart[productIndex] = { ...updatedCart[productIndex], quantity: updatedQuantity, item: { ...updatedCart[productIndex].item, quantity: updatedQuantity } }

      setCart(updatedCart)
      setTotalQuantity(prev => prev + quantity)
      setTotalPrice(prev => prev + (item.price * quantity))
    }
  }

  const removeProduct = (id) => {
    const deletedProductCart = cart.find(prod => prod.item.id === id)
    const updatedCart = cart.filter(prod => prod.item.id !== id)
    setCart(updatedCart)
    setTotalQuantity(prev => prev - deletedProductCart.quantity)
    setTotalPrice(prev => prev - (deletedProductCart.item.price * deletedProductCart.quantity))
  }

  const clearCart = () => {
    setCart([])
    setTotalPrice(0)
    setTotalQuantity(0)
  }

  const cartItems = cart.map(item => item.item)

  return (
    <carritoContext.Provider value={{ cart: cartItems, addProduct, removeProduct, clearCart, totalPrice, totalQuantity }}>
      {children}
    </carritoContext.Provider>
  )
}
