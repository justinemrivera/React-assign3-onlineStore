import React, { useEffect, useState } from "react";
import Item from "./item";
import "./catalog.css";
import ItemService from "../services/itemService";

const Catalog = () => {
  //state variables
  let [products, setProducts] = useState([]);

  //logic (fns)
  const retreiveCatalog = () => {
    let service = new ItemService();
    let cat = service.getCatalog();
    setProducts(cat);
    console.log(cat);
  };
  //effects
  useEffect(() => {
    retreiveCatalog();
  }, []); //[] added to sensure logic will be called only ONE TIME

  //return
  return (
    <div className="catalog-page">
      <h3>Gold and Gold Plated Jewelry</h3>
      <h6>Currently we have {products.length} new items</h6>
      <div className="item-container">
        {products.map((prod) => (
          <Item key={prod._id} data={prod}></Item>
        ))}
      </div>
    </div>
  );
};
export default Catalog;
