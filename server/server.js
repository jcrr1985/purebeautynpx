require("dotenv").config();
const cors = require("cors");
const Stripe = require("stripe");

const express = require("express");
const app = express();

app.use(express.json());
app.use(cors());

// const stripe  = new Stripe(process.env.STRIPE_SECRET_KEY);

const stripe = new Stripe(
  "sk_test_51NmKBUIyGuUAStfNKhWESNJmDHtswQLwy1ALuX3V4sRD1p3W0ovgapMUjJfYfvR1pSBruLsCugySiXc0u56JbDkT00dLgCIhhV"
);

app.post("/api/checkout", async (req, res) => {
  try {
    console.log(req.body);

    const payment = await stripe.paymentIntents.create({
      amount: req.body.amount,
      currency: "usd",
      description: "Pure Beauty",
      payment_method: req.body.id,
      confirm: true,
    });
    console.log(
      "🚀 ~ SUCCESSFUL PAYMENT: server.js:27 ~ app.post ~ payment:",
      payment
    );
    res.send({ message: "Successful payment" });
  } catch (error) {
    console.log("🚀 ~ file: server.js:33 ~ app.post ~ error:", error);
  }
});

app.listen(3001, () => console.log("Listening on port 3001"));
