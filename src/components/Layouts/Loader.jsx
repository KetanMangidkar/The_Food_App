import React from "react";
import { IoFastFoodSharp } from "react-icons/io5";
import { motion } from "framer-motion";

const Loader = () => {
  const options = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
    transition: {
      erase: "linear",
      repeat: "Infinity",
      repeatType: "reverse",
    },
  };
  return (
    <div className="loader">
      <IoFastFoodSharp />
      <div>
        <motion.p {...options}>Loading...</motion.p>
      </div>
    </div>
  );
};

export default Loader;
