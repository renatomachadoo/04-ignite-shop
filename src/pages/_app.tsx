import { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'

import Image from 'next/image'

import logoImg from '../assets/logo.svg'
import {
  Container,
  Header,
  CartButton,
  CartItemsLength,
} from '../styles/pages/app'

import { Handbag } from '@phosphor-icons/react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { CartDrawerComponent } from '../components/CartDrawerComponent'
import { useState } from 'react'

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
            <CartButton onClick={() => setCartOpen((state) => !state)}>
              <CartItemsLength>1</CartItemsLength>
              <Handbag size={24} weight="bold" />
            </CartButton>
          )}
        </Header>
        <Component {...pageProps} />
        <CartDrawerComponent cartOpen={cartOpen} setCartOpen={setCartOpen} />
      </Container>
  )
}
