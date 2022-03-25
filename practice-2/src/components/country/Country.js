import React from "react";
import "./Country.css";

const Country = (props) => {
  return (
    <div className="box2">
        <img src={props.img} alt="" />
      <div >
        <h1>Name:{props.name} </h1>
        <h4>Capital:{props.capital} </h4>
        <p>
          <strong>Populaton:{props.population} </strong>
        </p>
      </div>
    </div>
  );
};

export default Country;
