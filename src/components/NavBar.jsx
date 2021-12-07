//function komponenta
//precica rfce
import React from "react";
import { BsCartFill } from "react-icons/bs";

function NavBar() {
  return (
    <div className="navBar">
      <a>My Store</a>
      <div className="cart-items">
        <BsCartFill />
        <p className="cart-num">0</p>
      </div>
    </div>
  );
}

export default NavBar;
