import React from "react";
//stavljam {} zato sto zelim tacno tu ikonicu
import { BsPlusLg, BsDashLg } from "react-icons/bs";

//za CSS koristimo camelCase notaciju
//interni CSS kao promenljiva
//inline CSS, obavezno {{duple zagrade}}

// function OneProduct(props) {

//DESTRUKTURIRANJE PROPS
function OneProduct({ product, onAdd, inCart }) {
  const stil = { margin: 1 + "em", borderStyle: "dotted" };
  //console.log(props);
  // function onAdd(title) {
  //   console.log("Dodat proizvod: " + title);
  // }
  // if (inCart === 1) {
  //   console.log("uradi nesto");
  // } else {
  //   console.log("uradi nesto drugo");
  // }
  // inCart === 1 ? console.log("uradi nesto") : console.log("uradi nesto drugo");
  return (
    <div className={inCart === 1 ? "card" : "card-cart"} style={stil}>
      <img
        className={inCart === 1 ? "card-img-top" : "card-img-left"}
        src="https:/picsum.photos/200"
        alt="Neka slika"
      />
      <div className="card-body">
        <h3 className="card-title">{product.title}</h3>
        <p className="card-text">{product.description}</p>
      </div>
      {/* <button className="btn" onClick={() => onAdd(product.title)}> */}
      {inCart === 1 ? (
        <>
          <button
            className="btn"
            onClick={() => onAdd(product.title, product.id)}
          >
            <BsPlusLg />
          </button>
          <button className="btn">
            <BsDashLg />
          </button>
        </>
      ) : (
        <h4>Amount: {product.amount}</h4>
      )}
    </div>
  );
}

export default OneProduct;
