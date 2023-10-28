//create functional component

import CheckoutForm from "./CheckoutForm";
import React, { useState } from "react";

import CongratulationsMessage from "./CongratulationsMessage";
const StripePayment = ({ cartTotal }) => {
  const [congratulationOpen, setCongratulationOpen] = useState(false);

  return (
    <>
      <CheckoutForm
        cartTotal={cartTotal}
        setCongratulationOpen={setCongratulationOpen}
      />
      {congratulationOpen && <CongratulationsMessage />}
    </>
  );
};

export default StripePayment;
