import { Grid, Modal } from "@mui/material";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

//import axios
import axios from "axios";
import { useState } from "react";

//create functional component
const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("You clicked submit.");

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      console.log("Stripe 23 | token generated!", paymentMethod);
      const { id } = paymentMethod;

      const data = await axios.post("http://localhost:3001/api/checkout", {
        id,
        amount: 1000,
      });
      console.log(data);
    } else {
      console.log(error.message);
    }
  };

  const [open, setOpen] = useState(true);
  const handleClose = () => setOpen(false);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <form className="checkout-form--form" onSubmit={handleSubmit}>
        <Grid container spacing={2} justifyContent="center">
          {/* Fila superior */}
          <Grid item xs={12} sm={4}>
            <CardElement />
          </Grid>
        </Grid>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={4}>
            <button
              className="checkout--form-button--buy"
              style={{ width: "100%" }}
            >
              Buy
            </button>
          </Grid>
        </Grid>
      </form>
    </Modal>
  );
};
export default CheckoutForm;
