import React, { useState } from "react";
import QuantityPicker from "./quantitypicker";
import "./item.css";

const Item = (props) => {
  const [quantity, setQuantity] = useState(1);

  const handleAdd = () => {
    console.log("adding to cart");
  };

  const handleQuantityChange = (val) => {
    console.log("quantity change", val);
    setQuantity(val);
  };

  const getControls = () => {
    return (
      <div className="item-controls">
        <QuantityPicker onChange={handleQuantityChange}></QuantityPicker>
        <button onClick={handleAdd} className="btn btn-sm btn-dark">
          Add to Cart
        </button>
      </div>
    );
  };
  const getTotal = () => {
    let total = props.data.price * quantity;
    return total.toFixed(2);
  };

  return (
    <div className="item">
      <img src={"/images/" + props.data.image} alt="pic"></img>
      <h6>{props.data.title}</h6>

      <label>{getTotal()}</label>
      <label>$ {props.data.price.toFixed(2)}</label>

      {getControls()}
    </div>
  );
};

export default Item;
