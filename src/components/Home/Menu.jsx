import React from "react";
import Menucard from "./Menucard";
import maggie from "../../reqFiles/maggie.jpeg";

function Menu() {
  const addtoCartHandler = (itemNum) => {};

  return (
    <section id="menu">
      <h1>MENU</h1>
      <div>
        <Menucard
          itemNum={1}
          itemSrc={maggie}
          Price={200}
          title="maggie"
          handler={addtoCartHandler}
          delay={0.2}
        ></Menucard>
        <Menucard
          itemNum={2}
          itemSrc={maggie}
          Price={300}
          title="chees  maggie"
          handler={addtoCartHandler}
          delay={0.4}
        ></Menucard>
        <Menucard
          itemNum={3}
          itemSrc={maggie}
          Price={600}
          title="chille maggie"
          handler={addtoCartHandler}
          delay={0.6}
        ></Menucard>
      </div>
    </section>
  );
}

export default Menu;
