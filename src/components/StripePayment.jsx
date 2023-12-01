//create functional component

import CheckoutForm from './CheckoutForm'
import React, { useState } from 'react'

import CongratulationsMessage from './CongratulationsMessage'
const StripePayment = ({
  cartTotal,
  setItemCounters,
  cart,
  removeFromCart,
  setCart,
}) => {
  const [congratulationOpen, setCongratulationOpen] = useState(false)

  return (
    <>
      <CheckoutForm
        cartTotal={cartTotal}
        setItemCounters={setItemCounters}
        cart={cart}
        removeFromCart={removeFromCart}
        setCart={setCart}
      />
      {congratulationOpen && <CongratulationsMessage />}
    </>
  )
}

export default StripePayment
