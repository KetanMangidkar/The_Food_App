import React from "react";
import Menucard from "./Menucard";
import maggie from "../../reqFiles/maggie.jpeg";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

function Menu() {
  const dispatch = useDispatch();

  const addToCartHandler = (itemNum) => {
    switch (itemNum) {
      case 1:
        dispatch({ type: "cheeseBurgerIncrement" });
        dispatch({ type: "calculatePrice" });
        toast.success("Added To Cart");
        break;
      case 2:
        dispatch({ type: "vegCheeseBurgerIncrement" });
        dispatch({ type: "calculatePrice" });
        toast.success("Added To Cart");
        break;
      case 3:
        dispatch({ type: "burgerWithFriesIncrement" });
        dispatch({ type: "calculatePrice" });
        toast.success("Added To Cart");
        break;

      default:
        dispatch({ type: "cheeseBurgerIncrement" });
        dispatch({ type: "calculatePrice" });
        toast.success("Added To Cart");
        break;
    }
  };

  return (
    <section id="menu">
      <h1>MENU</h1>
      <div>
        <Menucard
          itemNum={1}
          itemSrc={maggie}
          Price={200}
          title="maggie"
          handler={addToCartHandler}
          delay={0.2}
        ></Menucard>
        <Menucard
          itemNum={2} 
          itemSrc={maggie}
          Price={300}
          title="chees  maggie"
          handler={addToCartHandler}
          delay={0.4}
        ></Menucard>
        <Menucard
          itemNum={3}
          itemSrc={maggie}
          Price={600}
          title="chille maggie"
          handler={addToCartHandler}
          delay={0.6}
        ></Menucard>
      </div>
    </section>
  );
}

export default Menu;
