import { Route, Routes } from "react-router-dom";

import Home from "./components/Home/Home";
import Footer from "./components/Layouts/Footer";
import Navbar from "./components/Layouts/Navbar";
import Contact from "./components/Contact/Contact";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Cart/Checkout";

import "./styles/app.scss";
import "./styles/navbar.scss";
import "./styles/home.scss";
import "./styles/menu.scss";
import "./styles/footer.scss";
import "./styles/contact.scss";
import "./styles/cart.scss";
import "./styles/checkout.scss";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
        <Route path="/checkout" element={<Checkout></Checkout>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
