import { Modal } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";

const ProceedToPay = ({ cartTotal }) => {
  return (
    <div className="proceed-wrapper">
      <p>Total: {cartTotal}</p>
      <Link className="button" to="/stripe-payment">
        Proceed to pay
      </Link>{" "}
    </div>
  );
};

export default ProceedToPay;
