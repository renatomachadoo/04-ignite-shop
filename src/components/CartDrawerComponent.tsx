import {
  CartDrawer,
  CartDrawerItem,
  CartDrawerItemImageWrapper,
  CartDrawerItemInfo,
  CartDrawerItems,
} from '../styles/pages/app'

import Image from 'next/image'

import logoImg from '../assets/logo.svg'
import { X } from '@phosphor-icons/react'

interface CartDrawerComponentProps {
  cartOpen: boolean
  setCartOpen: (open: boolean) => void
}

export function CartDrawerComponent({
  cartOpen,
  setCartOpen,
}: CartDrawerComponentProps) {
  return (
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
        <ul>
          <li>
            <small>Quantidade</small>
            <small>3 itens</small>
          </li>
          <li>
            <small>
              <strong>Valor total</strong>
            </small>
            <span>
              <strong>R$ 270,00</strong>
            </span>
          </li>
        </ul>
        <button>Finalizar compra</button>
      </footer>
    </CartDrawer>
  )
}
