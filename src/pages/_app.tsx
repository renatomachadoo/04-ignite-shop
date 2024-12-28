import { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'

import {
  Container,
} from '../styles/pages/app'

import { CartDrawerComponent } from '../components/CartDrawerComponent'
import { CartProvider } from '../contexts/CartContext'
import { HeaderComponent } from '../components/Header'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
      <CartProvider>
        <Container>
          <HeaderComponent/>
          <Component {...pageProps} />
          <CartDrawerComponent/>
        </Container>
      </CartProvider>
  )
}
