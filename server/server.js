import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import Stripe from "stripe";

dotenv.config();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY); // Correct Stripe import
const app = express();
const port = process.env.PORT || 3000;

app.use(cors({ origin: process.env.CLIENT_URL || "*", methods: ["GET", "POST"] }));
app.use(express.json());

// ✅ Create a Stripe Checkout Session
app.post("/api/create-checkout-session", async (req, res) => {
  try {
    const { amount, customer_email, customer_name, phone_number } = req.body;

    if (!amount || amount <= 0) {
      return res.status(400).json({ error: "Valid amount is required" });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      customer_email, // Optional
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: { name: "Custom Donation" },
            unit_amount: Math.round(amount * 100), // Convert to cents
          },
          quantity: 1,
        },
      ],
      metadata: { customer_name, phone_number },
      success_url: `${process.env.CLIENT_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.CLIENT_URL}/cancel`,
    });

    res.json({ url: session.url }); // Send Stripe checkout URL
  } catch (error) {
    console.error("Error creating checkout session:", error);
    res.status(500).json({ error: error.message });
  }
});

// ✅ Health check route
app.get("/health", (req, res) => res.status(200).json({ status: "ok" }));

// ✅ Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

// ✅ Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});




// server.js - Place this in your server directory root
// // const express = require('express');
// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import stripe from "stripe";
// // const cors = require('cors');
// // const dotenv = require('dotenv');

// // Stripe setup
// // const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// // Load environment variables
// dotenv.config();

// const app = express();
// const port = process.env.PORT || 3000;

// // Configure CORS
// app.use(
//   cors({
//     origin: process.env.CLIENT_URL || "*",
//     methods: ["GET", "POST"],
//     allowedHeaders: ["Content-Type", "Authorization"],
//   })
// );

// // Middleware
// app.use(express.json());

// // Routes
// app.post("/api/create-payment-intent", async (req, res) => {
//   try {
//     const { amount, customer_email, customer_name, phone_number } = req.body;
//     console.log(req.body);
//     // Validate input
//     if (!amount || amount <= 0) {
//       return res.status(400).json({ error: "Valid amount is required" });
//     }

//     // Create payment intent
//     const paymentIntent = await stripe.paymentIntents.create({
//       amount: Math.round(amount), // Ensure amount is an integer
//       currency: "usd",
//       automatic_payment_methods: {
//         enabled: true,
//       },
//       metadata: {
//         customer_name,
//         phone_number,
//       },
//       receipt_email: customer_email || undefined, // Only set if email is provided
//     });

//     res.json({
//       clientSecret: paymentIntent.client_secret,
//     });
//   } catch (error) {
//     console.error("Error creating payment intent:", error);
//     res.status(500).json({ error: error.message });
//   }
// });

// // Health check route
// app.get("/health", (req, res) => {
//   res.status(200).json({ status: "ok" });
// });

// // Error handling middleware
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).json({ error: "Something went wrong!" });
// });

// // Start server
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
