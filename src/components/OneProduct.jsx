import React from "react";
//stavljam {} zato sto zelim tacno tu ikonicu
import { BsPlusLg, BsDashLg } from "react-icons/bs";

//za CSS koristimo camelCase notaciju
//interni CSS kao promenljiva
//inline CSS, obavezno {{duple zagrade}}

// function OneProduct(props) {

//DESTRUKTURIRANJE PROPS
function OneProduct({ product, onAdd }) {
  const stil = { margin: 1 + "em", borderStyle: "dotted" };
  //console.log(props);
  // function onAdd(title) {
  //   console.log("Dodat proizvod: " + title);
  // }
  return (
    <div className="card" style={stil}>
      <img
        className="card-img-top"
        src="https:/picsum.photos/200"
        alt="Neka slika"
      />
      <div className="card-body">
        <h3 className="card-title">{product.title}</h3>
        <p className="card-text">{product.description}</p>
      </div>
      {/* <button className="btn" onClick={() => onAdd(product.title)}> */}
      <button className="btn" onClick={() => onAdd(product.title)}>
        <BsPlusLg />
      </button>
      <button className="btn">
        <BsDashLg />
      </button>
    </div>
  );
}

export default OneProduct;
