import React from "react";
import { Link } from "react-router-dom";

const PaymentDone = () => {
  return (
    <section className="paymentSucess">
      <main>
        <h1>Order Confirmed</h1>
        <p>
          Order placed sucessfully, You can check your order status given below
        </p>
        <Link to="/orders">Check Status</Link>
      </main>
    </section>
  );
};

export default PaymentDone;
