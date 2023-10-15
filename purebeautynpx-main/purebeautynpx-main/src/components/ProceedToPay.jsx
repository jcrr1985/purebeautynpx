import React from "react";

const ProceedToPay = ({ cart }) => {
  const total =
    cart.length > 0 ? cart.reduce((total, item) => total + item.price, 0) : 0;

  return (
    <div className="proceed-wrapper">
      <p>Total {total}</p>
      <button className="button">Proceed to pay</button>
    </div>
  );
};

export default ProceedToPay;
