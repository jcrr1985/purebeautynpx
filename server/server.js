require("dotenv").config();
const cors = require("cors");
const Stripe = require("stripe");

const express = require("express");
const app = express();

app.use(express.json());
app.use(cors());
app.post("/api/checkout", async (req, res) => {
  try {
    const { id, amount } = req.body;
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "USD",
      description: "Pure Beauty",
      payment_method: id,
      confirm: true,
      return_url: "http://localhost:3000/success",
    });
    console.log("🚀 ~ SUCCESSFUL PAYMENT", payment);
    res.send({ message: "Successful payment" });
  } catch (error) {
    console.log("🚀 ~ file: server.js:33 ~ app.post ~ error:", error);
  }
});

const privateKey = `${process.env.STRIPE_PRIVATE_API_KEY}`;

app.listen(3001, () => console.log("Listening on port 3001"));

console.log(
  "🚀 ~ file: server.js:36 ~ process.env.STRIPE_PRIVATE_API_KEY:",
  privateKey
);
const stripe = new Stripe(privateKey);
