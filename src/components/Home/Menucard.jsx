import React from "react";
import { motion } from "framer-motion";

function Menucard({ itemNum, itemSrc, Price, title, handler ,delay=0}) {
  return (
    <motion.div
      className="menuCard"
      initial={{ x: "-100%", opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ delay, }}
    >
      <div>Item{itemNum}</div>
      <main>
        <img src={itemSrc} alt={itemNum} />
        <h5>₹{Price}</h5>
        <p>{title}</p>
        <button onClick={() => handler(itemNum)}>Add to cart</button>
      </main>
    </motion.div>
  );
}

export default Menucard;
