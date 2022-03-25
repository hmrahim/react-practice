import React, { useEffect, useState } from "react";
import SingleProduct from "../SingleProduct/SingleProduct";

const Products = ({cart}) => {
   
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  
  return (
    <div className="row">
        {
            products.map(pd=> <SingleProduct key={pd.id} products={pd} cartNo={cart}></SingleProduct>)
        }
        

    </div>
  )
};

export default Products;
