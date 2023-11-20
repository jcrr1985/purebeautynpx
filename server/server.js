require('dotenv').config();
const cors = require('cors');
const Stripe = require('stripe');

const express = require('express');
const app = express();

app.use(express.json());
app.use(cors());
app.post('/api/checkout', async (req, res) => {
  try {
    const { id, amount, dataForm } = req.body;
    console.log('🚀 ~ file: server.js:23 ~ app.post ~ data', dataForm);
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: 'USD',
      description: 'Pure Beauty',
      payment_method: id,
      confirm: true,
      return_url: 'http://localhost:3000/success',
    });
    console.log('🚀 ~ SUCCESSFUL PAYMENT', payment);
    res.send({ message: 'Successful payment' });
  } catch (error) {
    console.log('🚀 ~ app.post ~ error:', error);
  }
});

const privateKey =
  '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';

app.listen(3001, () => console.log('Listening on port 3001'));

const stripe = new Stripe(privateKey);
