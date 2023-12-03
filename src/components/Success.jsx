import React, { useEffect } from 'react'

function Success({ setCartTotal, setCart }) {
  useEffect(() => {
    setCartTotal(0)
    setCart([])
  }, [setCartTotal])

  return (
    <div>
      <h1>Payment Successful!</h1>
      <p>Thank you for your purchase.</p>
    </div>
  )
}

export default Success
