"use client"

import axios from "axios";
import { ReactNode, useCallback, useState } from "react";
import { createContext} from "use-context-selector"

interface CartItem {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  description: string;
  defaultPriceId: string;
}

interface CartProviderProps {
  children: ReactNode
}

interface CartContextType {
  items: CartItem[]
  itemsAmount: number
  totalPrice: number
  cartOpen: boolean
  isCreatingCheckoutSession: boolean
  setCartOpen: (open: boolean) => void
  addItemToCart: (product: CartItem) => void
  removeItemFromCart: (id: string) => void
  handleCreateCheckout: () => Promise<void>
}

export const CartContext = createContext({} as CartContextType)

export function CartProvider({ children }: CartProviderProps) {
  const [cartOpen, setCartOpen] = useState(false)
  const [items, setItems] = useState<CartItem[]>([])
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)

  const itemsAmount = items.length
  const totalPrice = items.reduce(
    (totalPrice, currentValue) => totalPrice + currentValue.price,
    0,
  );

  const addItemToCart = useCallback(({ id, imageUrl, name, price, defaultPriceId, description }: CartItem) => {
    const itemAlreadyInCart = items.find(item => item.id === id)

    if(itemAlreadyInCart){
      return alert("Este item já está no carrinho!")
    }
    
    const newItem = {
      id,
      imageUrl,
      name,
      price,
      defaultPriceId,
      description,
    }

    setItems(state => [...state, newItem])
  }, [items])

  const removeItemFromCart = useCallback((id: string) => {
    const newItemsList = items.filter((item) => item.id !== id)
    setItems(newItemsList)
  }, [items])

  const handleCreateCheckout = useCallback(async () => {
    if(isCreatingCheckoutSession){
      return
    }

    try {
      setIsCreatingCheckoutSession(true)

      const response = await axios.post('/api/checkout', {
        lineItems: items
      })

      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl
    } catch (error) {
      setIsCreatingCheckoutSession(false)
      alert('Falha ao redirecionar ao checkout!')
    }
  }, [items, isCreatingCheckoutSession])

  return (
    <CartContext.Provider
      value={{
        items,
        itemsAmount,
        totalPrice,
        isCreatingCheckoutSession,
        cartOpen,
        setCartOpen,
        addItemToCart,
        removeItemFromCart,
        handleCreateCheckout
      }}
    >
      {children}
    </CartContext.Provider>
  )
}