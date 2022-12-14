import React from 'react';
import {CardElement, useElements, useStripe} from '@stripe/react-stripe-js';
import styles from './checkout.module.css'

const cardStyle = {
    style: {
      base: {
        color: "white",
        fontFamily: 'Arial, sans-serif',
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "white"
        }
      },
      invalid: {
        fontFamily: 'Arial, sans-serif',
        color: "#fa755a",
        iconColor: "#fa755a"
      }
    }
};


const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const handleSubmit = (e) => {
        e.preventDefault()
        const { paymentMethod } = stripe.createPaymentMethod({
            type : "card",
            card : elements.getElement(CardElement)
        })
    }
    return (
      <form className={styles.card} onSubmit={handleSubmit}>
        <CardElement options={cardStyle} />
        <button>Submit</button>
      </form>
    );
};

export default CheckoutForm;