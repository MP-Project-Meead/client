import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "./CheckoutForm";
import { useParams } from "react-router-dom";

export const stripePromise = loadStripe(
  "pk_test_51KEqvQK5nnFdlwxvrSCIJUpyVvOl3nsw8VDc75FYd56Fo5waPzL3RKGT258YQQS9rb6Op6IQUaswgEKmfDX8BM3I004NyjUFX7"
);

const Payment = () => {
    const id = useParams().id;
//   const projectId = useParams().projectId;
//   const donate = useParams().donate;
//   const packageId = useParams().packageId;

  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BASE_URL}/create-payment-intent`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="App">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm
          id={id}
          />
        </Elements>
      )}
    </div>
  );
};

export default Payment;
