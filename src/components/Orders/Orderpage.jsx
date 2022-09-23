import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";

const Orderpage = () => {
  const arr = [1, 2, 3, 4, 5];
  return (
    <section className="tableClass">
      <main>
        <table>
          <thead>
            <tr>
              <th>Order Id</th>
              <th>Status</th>
              <th>Item Quantity</th>
              <th>Amount</th>
              <th>Payment method</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {arr.map((i) => (
              <tr key={i}>
                <td>#7q7h7qfddv</td>
                <td>Processing</td>
                <td>23</td>
                <td>₹{2345}</td>
                <td>COD</td>
                <td>
                  <Link to={`/order/${"asdfg"}`}>
                    <AiOutlineEye></AiOutlineEye>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </section>
  );
};

export default Orderpage;
