import { GetStaticProps } from "next"
import Image from "next/image"
import Link from "next/link"
import Head from "next/head"

import { stripe } from "../lib/stripe"

import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'

import { AddToCartButton, HomeContainer, Product } from "../styles/pages/home"

import Stripe from "stripe"

import { Handbag } from "@phosphor-icons/react"
import { CartContext } from "../contexts/CartContext"
import { useContextSelector } from "use-context-selector"

interface HomeProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
    description: string;
    defaultPriceId: string;
  }[]
}

export default function Home({ products }: HomeProps){
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48
    }
  })

  const addItemToCart = useContextSelector(CartContext, (context) => {
    return context.addItemToCart
  })

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      <HomeContainer ref={sliderRef} className="keen-slider">
        {products && products.map(product => {
          return(
            <Link href={`/product/${product.id}`} key={product.id} prefetch={false}>
              <Product className="keen-slider__slide">
                <Image src={product.imageUrl} width={520} height={480} alt=""/>
                <footer>
                  <div>
                    <strong>{product.name}</strong>
                    <span>{new Intl.NumberFormat("pt-BR", {style: 'currency', currency: 'BRL'}).format(product.price)}</span>
                  </div>
                  <AddToCartButton 
                    onClick={(event) => {
                      event.preventDefault()
                      addItemToCart(product)
                    }}
                  >
                    <Handbag size={32} weight="bold" />
                  </AddToCartButton>
                </footer>
              </Product>
            </Link>
          )
        })}
      </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async() => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })
  
  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: Number(price.unit_amount / 100),
      defaultPriceId: price.id,
      description: product.description
    }
  })

  return {
    props: {
      products
    },
    revalidate: 60 * 60 * 2, // 2 hours
  }
}