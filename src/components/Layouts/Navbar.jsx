import React from "react";
import { IoFastFoodSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FiShoppingCart, FiLogIn } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import { motion } from "framer-motion";

function Navbar({ isAuthenticated = false }) {
  return (
    <nav>
      <motion.div initial={{ x: "-100%" }} whileInView={{ x: 0 }}>
        <IoFastFoodSharp></IoFastFoodSharp>
      </motion.div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/contact ">Contact</Link>
        <Link to="/about">About</Link>
        <Link to="/cart">
          <FiShoppingCart></FiShoppingCart>
        </Link>
        <Link to={isAuthenticated ? "/user" : "/login"}>
          {isAuthenticated ? <FaUser></FaUser> : <FiLogIn></FiLogIn>}
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
