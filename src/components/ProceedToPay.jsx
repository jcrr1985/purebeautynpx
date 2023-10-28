import { Modal } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";

const ProceedToPay = ({ cart, cartTotal }) => {
  console.log(
    "🚀 ~ file: ProceedToPay.jsx:7 ~ ProceedToPay ~ cartTotal:",
    cartTotal
  );
  return (
    <div className="proceed-wrapper">
      <p>Total {cartTotal}</p>
      <Link className="button" to="/stripe-payment">
        Proceed to pay!
      </Link>{" "}
      <CheckoutForm cartTotal={cartTotal} />
    </div>
  );
};

export default ProceedToPay;
