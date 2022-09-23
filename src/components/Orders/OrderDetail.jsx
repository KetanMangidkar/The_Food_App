import React from "react";

const OrderDetail = () => {
  return (
    <section className="orderDetail">
      <main>
        <h1>Order Details</h1>
        <div>
          <h1>Shipping</h1>
          <p>
            <b>Address</b>
            {"Vardhaman nagar Dhule"}
          </p>
        </div>

        <div>
          <h1>Contact</h1>
          <p>
            <b>Name</b>
            {"ketan"}
          </p>
          <p>
            <b>Contact No.</b>
            {1234567890}
          </p>
        </div>

        <div>
          <h1>Status</h1>
          <p>
            <b>Order Status</b>
            {"Processing"}
          </p>
          <p>
            <b>Placed at</b>
            {"09-10-2022"}
          </p>
          <p>
            <b>Delivered at</b>
            {"09-10-2023 "}
          </p>
        </div>

        <div>
          <h1>Payment</h1>
          <p>
            <b>Payment Method </b>
            {"COD"}
          </p>
          <p>
            <b>Payment Reference</b>#{"wegv456784"}
          </p>
          <p>
            <b>Paid at</b>
            {"09-10-2023 "}
          </p>
        </div>

        <div>
          <h1>Amount</h1>
          <p>
            <b>Items Total </b>₹{123456}
          </p>
          <p>
            <b>Shipping Charges </b>₹{200}
          </p>
          <p>
            <b>Tax </b>₹{345}
          </p>
          <p>
            <b>Total Amount</b>₹{124009}
          </p>
        </div>

        <article>
          <h1>Orderd Items</h1>

          <div>
            <h4>maggie</h4>
            <div>
              <span>{12}</span> x <span>{123}</span>
            </div>
          </div>

          <div>
            <h4>Chees maggie</h4>
            <div>
              <span>{12}</span> x <span>{123}</span>
            </div>
          </div>

          <div>
            <h4>maggie Chille</h4>
            <div>
              <span>{12}</span> x <span>{123}</span>
            </div>
          </div>

          <div>
            <h4>Butter maggie</h4>
            <div>
              <span>{12}</span> x <span>{123}</span>
            </div>
          </div>

          <div>
            <h4 style={{ fontWeight: 800 }}>Sub Total </h4>
            <div style={{ fontWeight: 800 }}>₹{45678}</div>
          </div>
          
        </article>
      </main>
    </section>
  );
};

export default OrderDetail;
