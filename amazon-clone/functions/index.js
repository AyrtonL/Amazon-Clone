const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
    "sk_test_51HRLiUHAH4zJnnwf3HGP2vDfluqL3PgMOuRU9ftXLZOQCmGVoet7DbBDwUTHLb0MfpEtzO4aTjSmUHaW4VwEymJX00OiZvWLpZ")

// - API

// - App Config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API Routes
app.get('/', (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;
    
    console.log('Payment Request Received for this amount >>> ', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
      });

    // OK - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
      });
    });

// - Listen Command

exports.api = functions.https.onRequest(app);