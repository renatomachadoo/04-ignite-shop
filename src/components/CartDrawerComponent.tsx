import {
  CartDrawer,
  CartDrawerItem,
  CartDrawerItemImageWrapper,
  CartDrawerItemInfo,
  CartDrawerItems,
} from '../styles/pages/app'

import Image from 'next/image'

import { X } from '@phosphor-icons/react'
import { CartContext } from '../contexts/CartContext'
import { useContextSelector } from 'use-context-selector'

export function CartDrawerComponent(){
  const itemsAmount = useContextSelector(CartContext, (context) => {
    return context.itemsAmount
  })

  const totalPrice = useContextSelector(CartContext, (context) => {
    return context.totalPrice
  })
  
  const cartItems = useContextSelector(CartContext, (context) => {
    return context.items
  })

  const cartOpen = useContextSelector(CartContext, (context) => {
    return context.cartOpen
  })

  const setCartOpen = useContextSelector(CartContext, (context) => {
    return context.setCartOpen
  })

  const removeItemFromCart = useContextSelector(CartContext, (context) => {
    return context.removeItemFromCart
  })

  const isCreatingCheckoutSession = useContextSelector(CartContext, (context) => {
    return context.isCreatingCheckoutSession
  })

  const handleCreateCheckout = useContextSelector(CartContext, (context) => {
    return context.handleCreateCheckout
  })

  return (
    <CartDrawer open={cartOpen}>
      <header>
        <button onClick={() => setCartOpen(false)}>
          <X size={24} />
        </button>
      </header>
      <h3>Sacola de compras</h3>
      <CartDrawerItems>
        {cartItems.map(product => {
          return(
            <CartDrawerItem key={product.id}>
              <CartDrawerItemImageWrapper>
                <Image width={94} height={94} src={product.imageUrl} alt="" />
              </CartDrawerItemImageWrapper>
              <CartDrawerItemInfo>
                <h4>{product.name}</h4>
                <p>{new Intl.NumberFormat("pt-BR", {style: 'currency', currency: 'BRL'}).format(product.price)}</p>
                <button onClick={() => removeItemFromCart(product.id)}>Remover</button>
              </CartDrawerItemInfo>
            </CartDrawerItem>
          )
        })}
      </CartDrawerItems>
      <footer>
        <ul>
          <li>
            <small>Quantidade</small>
            <small>{itemsAmount} item(s)</small>
          </li>
          <li>
            <small>
              <strong>Valor total</strong>
            </small>
            <span>
              <strong>{new Intl.NumberFormat("pt-BR", {style: 'currency', currency: 'BRL'}).format(totalPrice)}</strong>
            </span>
          </li>
        </ul>
        <button disabled={isCreatingCheckoutSession} onClick={handleCreateCheckout}>Finalizar compra</button>
      </footer>
    </CartDrawer>
  )
}
