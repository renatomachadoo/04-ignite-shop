import Link from "next/link";
import { CartButton, CartItemsLength, Header } from "../styles/pages/app";
import { CartContext } from "../contexts/CartContext";
import { useRouter } from "next/router";

import Image from 'next/image'

import logoImg from '../assets/logo.svg'
import { Handbag } from "@phosphor-icons/react";
import { useContextSelector } from "use-context-selector";

export function HeaderComponent(){
  const { pathname } = useRouter()
  const showCartButton = !pathname.includes('success')

  const itemsAmount = useContextSelector(CartContext, (context) => {
    return context.itemsAmount
  })

  const setCartOpen = useContextSelector(CartContext, (context) => {
    return context.setCartOpen
  })
  
  return(
    <Header showCartButton={showCartButton}>
      <Link href="/" prefetch={false}>
        <Image src={logoImg} alt="" />
      </Link>
      {showCartButton && (
        <CartButton onClick={() => setCartOpen(true)}>
          {itemsAmount > 0 && (
            <CartItemsLength>
              {itemsAmount}
            </CartItemsLength>
          )}
          <Handbag size={24} weight="bold" />
        </CartButton>
      )}
    </Header>
  )
}