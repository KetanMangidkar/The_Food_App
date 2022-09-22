import React from "react";

function Checkout() {
  return (
    <section className="checkout">
      <main>
        <h1>Checkout Details</h1>
        <form>
          <div>
            <label>H.No.</label>
            <input type="text" placeholder="Enter your address" />
          </div>
          <div>
            <label>City</label>
            <input type="text" placeholder="Enter City" />
          </div>
          <div>
            <label>Country</label>
            <select>
              <option value="">Country</option>
              <option value="">India</option>
            </select>
          </div>
          <div>
            <label>State</label>
            <select>
              <option value="">State</option>
              <option value="">Maharashtra</option>
            </select>
          </div>
          <div>
            <label>Pincode</label>
            <input type="number" placeholder="Enter Pincode" />
          </div>
          <div>
            <label>Contact No.</label>
            <input type="number" placeholder="Enter your Contact Number" />
          </div>

          <button type="submit">Confirm Order</button>
        </form>
      </main>
    </section>
  );
}

export default Checkout;
