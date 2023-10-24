//create functional component

import CheckoutForm from "./CheckoutForm";

const StripePayment = ({ cart, cartTotal }) => {
  console.log("stripepayment");
  return (
    <>
      <CheckoutForm />
    </>
  );
};

export default StripePayment;
