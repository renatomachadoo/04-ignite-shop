import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../lib/stripe";

interface CartItem {
  id: string
  name: string
  imageUrl: string
  price: number
  description: string
  defaultPriceId: string
}

interface CreateCheckoutSessionBody {
  lineItems: CartItem[]
}

export default async function handler(req: NextApiRequest, res: NextApiResponse){
  const { lineItems }: CreateCheckoutSessionBody = req.body
  
  if(req.method !== 'POST'){
    return res.status(405).json({ error: 'Method not allowed.'})
  }

  const lineItemsFormatted = lineItems.map(item => {
    if(item.defaultPriceId){
      return {
        price: item.defaultPriceId,
        quantity: 1
      }
    }
  })

  const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`
  const cancelUrl = `${process.env.NEXT_URL}/`

  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: successUrl,
    cancel_url: cancelUrl,
    mode: 'payment',
    line_items: lineItemsFormatted
  })

  return res.status(201).json({
    checkoutUrl: checkoutSession.url
  })
}