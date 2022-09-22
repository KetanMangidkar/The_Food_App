import React from "react";
import { Link } from "react-router-dom";
import maggie from "../../reqFiles/maggie.jpeg";

const CartItem = ({ value, title, img, increment, decrement }) => (
  <div className="cartItem">
    <div>
      <h4>{title}</h4>
      <img src={img} alt="Item" />
    </div>
    <div>
      <button onClick={decrement}>-</button>
      <input type="number" readOnly value={value} />
      <button onClick={increment}>+</button>
    </div>
  </div>
);

const Cart = () => {
  const increment = (item) => {};
  const decrement = (item) => {};

  return (
    <section className="cart">
      <main>
        <CartItem
          title={"maggiee"}
          img={maggie}
          value={0}
          increment={() => increment(1)}
          decrement={() => decrement(1)}
        ></CartItem>

        <CartItem
          title={"maggiee with chees"}
          img={maggie}
          value={0}
          increment={() => increment(2)}
          decrement={() => decrement(2)}
        ></CartItem>

        <CartItem
          title={"maggiee with butter"}
          img={maggie}
          value={0}
          increment={() => increment(3)}
          decrement={() => decrement(3)}
        ></CartItem>

        <article>
          <div>
            <h4>Subtotal</h4>
            <p>₹{2000}</p>
          </div>
          <div>
            <h4>Tax</h4>
            <p>₹{2000 * 0.18}</p>
          </div>
          <div>
            <h4>Shipping Charges</h4>
            <p>₹{200}</p>
          </div>
          <div>
            <h4>Total</h4>
            <p>₹{2000 + 2000 * 0.18 + 200}</p>
          </div>

          <Link to="/checkout">Checkout</Link>

        </article>
      </main>
      
    </section>
  );
};

export default Cart;
