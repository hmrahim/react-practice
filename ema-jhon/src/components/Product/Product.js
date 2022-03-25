import React from "react";
import "./Product.css";

const Product = (props) => {
    const {cart,data,addToDb} = props
  const { name, id, category, price, ratings, quantity, img, seller } =
    props.data;
  return (
    <div className="card">
      <img src={img} alt="" />
      <div className="product-info">
        <p className="product-name">{name}</p>
        <p className="product-price">Price: ${price}</p>
        <p className="seller">Menufecture : {seller}</p>
        <p className="rating">Rating : {ratings}</p>
      </div>

      <button onClick={() => cart(data)} className="cart-btn">Add to cart</button>
    </div>
  );
};

export default Product;
