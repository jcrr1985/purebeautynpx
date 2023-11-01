import {
  Button,
  Card,
  CardActions,
  CardContent,
  CircularProgress,
  Grid,
  Modal,
  Typography,
} from "@mui/material";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { set } from "animejs";
import { useState } from "react";

import axios from "axios";

import Swal from "sweetalert2";
import CongratulationMessage from "./CongratulationsMessage";
import DealButton from "./DealButton";
import ButtonsMoreLess from "./ButtonsMoreLess";

const showPaymentErrorAlert = () => {
  Swal.fire("Oops!", "Payment unsuccessful", "warning");
};

const abortController = new AbortController();

//create functional component
const CheckoutForm = ({ cartTotal, setItemCounters, cart, addToCart }) => {
  console.log("🚀 ~ file: CheckoutForm.jsx:20 ~ CheckoutForm ~ cart:", cart);
  const [showCongrats, setShowCongrats] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(true);
  const handleClose = () => setOpen(false);
  const [showPayment, setShowPayment] = useState(true);
  const [showSucces, setShowSucces] = useState(false);

  const handleSubmitPayment = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: elements.getElement(CardElement),
      });
      if (!error) {
        const { id } = paymentMethod;
        const data = await axios.post("http://localhost:3001/api/checkout", {
          id,
          amount: cartTotal * 100,
          signal: abortController.signal,
          timeout: 10000,
        });

        elements.getElement(CardElement).clear();
        setLoading(false);
        handleClose();
        setShowPayment(false);
        setShowSucces(true);
      }
    } catch (error) {
      console.log(error.message);
      setLoading(false);
      showPaymentErrorAlert();
      setOpen(false);
    }
  };

  return (
    <>
      <p className="text-italianno we-are-happy">
        {" "}
        We are Happy with you purchase! Lets do last steps
      </p>
      {showPayment ? (
        <div className="form-and-items-wrapper">
          <form className="checkout-form--form" onSubmit={handleSubmitPayment}>
            <div className="left">
              <CardElement />
              {/* <!--BUY BUTTON--> */}
              <span>
                {loading ? (
                  <CircularProgress />
                ) : (
                  <button className="checkoutform-button">BUI</button>
                )}
              </span>
            </div>
            {/* ITEMS DE LA DERECHA EN CHECKOUT */}
          </form>

          <div className="items-in-checkout">
            {cart.map((item, index) => (
              <Card
                sx={{
                  display: "flex",
                  alignItems: "center",
                  minWidth: 500,
                  margin: "1rem auto",
                }}
                key={index}
                style={{ marginBottom: "1rem" }}
              >
                <img
                  src={item.imageSrc}
                  alt={item.name}
                  style={{ maxWidth: "100px", marginRight: "1rem" }}
                />
                <CardContent>
                  <Typography variant="body2">Name: {item.name}</Typography>
                  <Typography variant="body2">Qty: {item.quantity}</Typography>
                  <Typography variant="body2">Size: {item.size}</Typography>
                  <Typography variant="body2">Price: {item.price}</Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            ))}
          </div>
        </div>
      ) : (
        showSucces && (
          <CongratulationMessage setItemCounters={setItemCounters} />
        )
      )}
    </>
  );
};

export default CheckoutForm;
