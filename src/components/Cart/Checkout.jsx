import React from "react";
import { Country, State } from "country-state-city";

function Checkout() {
  return (
    <section className="checkout">
      <main>
        <h1>Checkout Details</h1>
        <form>
          <div>
            <label>Address</label>
            <input type="text" placeholder="Enter your address" />
          </div>
          <div>
            <label>City</label>
            <input type="text" placeholder="Enter City" />
          </div>
          <div>
            {/* Select country and state by using country-state-city pakage and map in select tag */}
            <label>Country</label>
            <select>
              <option value="">Country</option>
              {Country &&
                Country.getAllCountries().map((i) => (
                  <option value={i.isoCode} key={i.isoCode}>
                    {i.name}
                  </option>
                ))}
            </select>
          </div>
          <div>
            <label>State</label>
            <select>
              <option value="">State</option>
              {State &&
                State.getStatesOfCountry("IN").map((i) => (
                  <option value={i.isoCode} key={i.isoCode}>
                    {i.name}
                  </option>
                ))}
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
