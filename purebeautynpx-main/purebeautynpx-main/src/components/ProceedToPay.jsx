import React from "react";
import { Link } from "react-router-dom";

const ProceedToPay = ({ cart }) => {
  const total =
    cart.length > 0 ? cart.reduce((total, item) => total + item.price, 0) : 0;

  return (
    <div className="proceed-wrapper">
      <p>Total {total}</p>
      <Link className="button" to="/stripe-payment">
        Proceed to pay!
      </Link>
    </div>
  );
};

export default ProceedToPay;
