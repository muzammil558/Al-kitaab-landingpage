import "./donation.css";
import { motion } from "framer-motion";
import flower from "/assets/featureFlower.png";
import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';

// Initialize Stripe with your publishable key
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

export default function Donation() {
  // Initialize all form fields with default values
  const [formData, setFormData] = useState({
    amount: '',  // Keep as empty string for controlled input
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    // For amount field, ensure we're storing a string representation
    if (name === 'amount') {
      // Only allow numbers and decimal point
      const numericValue = value.replace(/[^0-9.]/g, '');
      
      // Prevent multiple decimal points
      const parts = numericValue.split('.');
      const sanitizedValue = parts.length > 1 
        ? `${parts[0]}.${parts.slice(1).join('')}` 
        : numericValue;
        
      setFormData(prev => ({
        ...prev,
        [name]: sanitizedValue
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccess(false);

    try {
      // Validate amount
      const amount = parseFloat(formData.amount);
      if (isNaN(amount) || amount <= 0) {
        throw new Error("Please enter a valid donation amount");
      }

      // Create checkout session on backend
      const response = await fetch("http://localhost:3000/api/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: Math.round(amount * 100), // Convert to cents for Stripe
          customer_email: formData.email,
          customer_name: `${formData.firstName} ${formData.lastName}`,
          phone_number: formData.phoneNumber,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to create checkout session");
      }

      const { url } = await response.json(); // Get Stripe Checkout URL

      if (url) {
        window.location.href = url; // Redirect to Stripe Checkout
        setSuccess(true);
      } else {
        throw new Error("Invalid Stripe Checkout URL");
      }
    } catch (error) {
      console.error("Error:", error);
      setError(error.message || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="charityContainer" id="charity">
      <div className="donation-container">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="donation-img"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="donation-content"
        >
          <h1>Charity Begins Here</h1>
          {success && <div className="success-message">Redirecting to payment page...</div>}
          <form onSubmit={handleSubmit}>
            <div className="form-item">
              <label htmlFor="amount">Enter Amount You Wish to Donate</label>
              <input
                type="text" // Changed from number to text
                inputMode="decimal" // Better for mobile keyboards
                id="amount"
                className="amount"
                name="amount"
                placeholder="USD"
                value={formData.amount}
                onChange={handleInputChange}
                required
                aria-label="Donation amount in USD"
              />
            </div>
            <div className="name">
              <div className="form-item">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="Enter First Name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-item">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Enter Last Name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="name">
              <div className="form-item">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-item">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="Enter Phone Number"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <button 
              type="submit" 
              className="donate-button"
              disabled={isLoading}
            >
              {isLoading ? 'Processing...' : 'Donate Now'}
            </button>
          </form>
        </motion.div>
      </div>
      <div>
        <img src={flower} className="donationFlower" alt="flower" />
      </div>
    </div>
  );
}