import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="contact">
      <motion.form
        initial={{ y: "-100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <h2>Connect On</h2>
        <input type="tect" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Message..." cols="30" rows="10"></textarea>
        <button type="submit">Send</button>
      </motion.form>
    </section>
  );
};

export default Contact;   
