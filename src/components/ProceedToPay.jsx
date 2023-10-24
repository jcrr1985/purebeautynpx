import { Modal } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";

const ProceedToPay = ({ cart }) => {
  const total =
    cart.length > 0 ? cart.reduce((total, item) => total + item.price, 0) : 0;

  return (
    <div className="proceed-wrapper">
      <p>Total {total}</p>
      <Link className="button" to="/stripe-payment">
        Proceed to pay!
      </Link>{" "}
      <CheckoutForm />
    </div>
  );
};

export default ProceedToPay;
