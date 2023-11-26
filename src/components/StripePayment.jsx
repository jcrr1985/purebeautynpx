//create functional component

import CheckoutForm from "./CheckoutForm";
import React, { useState } from "react";

import CongratulationsMessage from "./CongratulationsMessage";
const StripePayment = ({
  cartTotal,
  setItemCounters,
  cart,
  addToCart,
  removeFromCart,
}) => {
  const [congratulationOpen, setCongratulationOpen] = useState(false);

  return (
    <>
      <CheckoutForm
        cartTotal={cartTotal}
        setItemCounters={setItemCounters}
        cart={cart}
        removeFromCart={removeFromCart}
      />
      {congratulationOpen && <CongratulationsMessage />}
    </>
  );
};

export default StripePayment;
