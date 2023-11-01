//create functional component

import CheckoutForm from "./CheckoutForm";
import React, { useState } from "react";

import CongratulationsMessage from "./CongratulationsMessage";
const StripePayment = ({ cartTotal, setItemCounters, cart, addToCart }) => {
  const [congratulationOpen, setCongratulationOpen] = useState(false);

  return (
    <>
      <CheckoutForm
        cartTotal={cartTotal}
        setCongratulationOpen={setCongratulationOpen}
        setItemCounters={setItemCounters}
        cart={cart}
        addToCart={addToCart}
      />
      {congratulationOpen && <CongratulationsMessage />}
    </>
  );
};

export default StripePayment;
