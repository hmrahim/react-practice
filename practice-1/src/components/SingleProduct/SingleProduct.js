import React from "react";
import Modal from "../Modal/Modal";

const SingleProduct = ({products,cartNo}) => {
    

  return (
    <>
     
        
        <div className="col-md-4 m-3 rounded border">
          <img className="img-fluid" src={products.image} alt="" />
          <h4>{products.title}</h4>
          <div className="d-flex justify-content-around">
              <button className="btn btn-danger m-2">delete</button>
              <button onClick={cartNo} className="btn btn-primary m-2">cart</button>
              {/* <button className="btn btn-info m-2">details</button> */}
            
          </div>
        </div>
      
    </>
  );
};

export default SingleProduct;
