import React from "react";
import { motion } from "framer-motion";
import Menu from "./Menu";

function Home() {
  return (
    <>
      <section className="home">
        <div>
          <motion.h1
            initial={{ y: "-100%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
          >
            The Food App
          </motion.h1>
          <motion.p>Feed yourself more...</motion.p>
        </div>
        <motion.a
          initial={{ x: "-100%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          href="#menu"
        >
          Menu
        </motion.a>
      </section>
      <Menu></Menu>
    </>
  );
}

export default Home;
