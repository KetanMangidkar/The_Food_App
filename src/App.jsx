import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "./redux/actions/user";
import toast, { Toaster } from "react-hot-toast";

import Home from "./components/Home/Home";
import Footer from "./components/Layouts/Footer";
import Navbar from "./components/Layouts/Navbar";
import Contact from "./components/Contact/Contact";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Cart/Checkout";
import ConfirmOrder from "./components/Cart/ConfirmOrder";
import PaymentDone from "./components/Cart/PaymentDone";
import Login from "./components/Login/Login";
import UserProfile from "./components/UserProfile/UserProfile";
import Orderpage from "./components/Orders/Orderpage";
import OrderDetail from "./components/Orders/OrderDetail";
import Dashboard from "./components/Admin/Dashboard";
import Users from "./components/Admin/Users";
import Allorders from "./components/Admin/Allorders";
import About from "./components/About/About";
import Error from "./components/Layouts/Error";

import "./styles/app.scss";
import "./styles/navbar.scss";
import "./styles/home.scss";
import "./styles/menu.scss";
import "./styles/footer.scss";
import "./styles/contact.scss";
import "./styles/cart.scss";
import "./styles/checkout.scss";
import "./styles/confirmorder.scss";
import "./styles/paymentdone.scss";
import "./styles/login.scss";
import "./styles/userprofile.scss";
import "./styles/table.scss";
import "./styles/orderdetail.scss";
import "./styles/dashboard.scss";
import "./styles/about.scss";
import { ProtectedRoute } from "protected-route-react";
// import ProtectedRoute from "protected-route-react/dist/lib/ProtectedRoute";

function App() {
  const dispatch = useDispatch();
  const { error, messege, user, isAuthenticated } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({
        type: "clearError",
      });
    }
    if (messege) {
      toast.success(messege);
      dispatch({
        type: "clearMessege",
      });
    }
  }, [dispatch, error, messege]);

  return (
    <div className="App">
      <Navbar isAuthenticated={isAuthenticated} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/paymentdone" element={<PaymentDone />} />

        <Route
          path="/login"
          element={
            <ProtectedRoute isAuthenticated={!isAuthenticated} redirect="/user">
              <Login />
            </ProtectedRoute>
          }
        />

        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/user" element={<UserProfile />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/confirmorder" element={<ConfirmOrder />} />
          <Route path="/orders" element={<Orderpage />} />
          <Route path="/order/:id" element={<OrderDetail />} />
        </Route>

        <Route
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated}
              adminRoute={true}
              isAdmin={user && user.role === "admin"}
              redirectAdmin="/user"
            />
          }
        >
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/users" element={<Users />} />
          <Route path="/admin/orders" element={<Allorders />} />
        </Route>

        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
