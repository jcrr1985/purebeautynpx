import { Modal } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";
import DealButton from "./DealButton";

const ProceedToPay = ({ cartTotal }) => {
  return (
    <div className="proceed-wrapper">
      <p>Total: {cartTotal}</p>
      <Link to="/stripe-payment">
        <DealButton message="Place Order" />
      </Link>{" "}
    </div>
  );
};

export default ProceedToPay;
