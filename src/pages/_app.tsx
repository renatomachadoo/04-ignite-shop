import { AppProps } from "next/app"
import { globalStyles } from "../styles/global"

import Image from "next/image"

import logoImg from '../assets/logo.svg'
import { Container, Header, CartButton, CartItemsLength, CartDrawer, CartDrawerItem, CartDrawerItemImageWrapper, CartDrawerItems, CartDrawerItemInfo } from "../styles/pages/app"

import { Handbag } from "@phosphor-icons/react"
import { useRouter } from "next/router"
import Link from "next/link"
import { useState } from "react"

import { X } from "@phosphor-icons/react"

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter()
  const [cartOpen, setCartOpen] = useState(false)

  const showCartButton = !pathname.includes('success')

  return (
    <Container>
      <Header showCartButton={showCartButton}>
        <Link href="/" prefetch={false}>
          <Image src={logoImg} alt="" />
        </Link>
        {showCartButton && (
          <CartButton onClick={() => setCartOpen(state => !state)}>
            <CartItemsLength>
              1
            </CartItemsLength>
            <Handbag size={24} weight="bold" />
          </CartButton>
        )}
      </Header>
      <Component {...pageProps} />
      <CartDrawer open={cartOpen}>
        <header>
          <button onClick={() => setCartOpen(false)}>
            <X size={24} />
          </button>
        </header>
        <h3>Sacola de compras</h3>
        <CartDrawerItems>
          <CartDrawerItem>
            <CartDrawerItemImageWrapper>
              <Image width={94} src={logoImg} alt="" />
            </CartDrawerItemImageWrapper>
            <CartDrawerItemInfo>
              <h4>Camiseta Beyond the Limits</h4>
              <p>R$ 79,90</p>
              <button>Remover</button>
            </CartDrawerItemInfo>
          </CartDrawerItem>

          <CartDrawerItem>
            <CartDrawerItemImageWrapper>
              <Image width={94} src={logoImg} alt="" />
            </CartDrawerItemImageWrapper>
            <CartDrawerItemInfo>
              <h4>Camiseta Beyond the Limits</h4>
              <p>R$ 79,90</p>
              <button>Remover</button>
            </CartDrawerItemInfo>
          </CartDrawerItem>

          <CartDrawerItem>
            <CartDrawerItemImageWrapper>
              <Image width={94} src={logoImg} alt="" />
            </CartDrawerItemImageWrapper>
            <CartDrawerItemInfo>
              <h4>Camiseta Beyond the Limits</h4>
              <p>R$ 79,90</p>
              <button>Remover</button>
            </CartDrawerItemInfo>
          </CartDrawerItem>

          <CartDrawerItem>
            <CartDrawerItemImageWrapper>
              <Image width={94} src={logoImg} alt="" />
            </CartDrawerItemImageWrapper>
            <CartDrawerItemInfo>
              <h4>Camiseta Beyond the Limits</h4>
              <p>R$ 79,90</p>
              <button>Remover</button>
            </CartDrawerItemInfo>
          </CartDrawerItem>
        </CartDrawerItems>
        <footer>
          a
        </footer>
      </CartDrawer>
    </Container>
  )
}


