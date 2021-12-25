import "./App.css";
import NavBar from "./components/NavBar";
import Products from "./components/Products";
import Cart from "./components/Cart";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//https://reactrouter.com/docs/en/v6/getting-started/overview#installation

function App() {
  //const prom = <h3>Cao svima!</h3>;
  // let cartNum = 0;
  //const [state, setstate] = useState(initialState)
  const [cartNum, setCartNum] = useState(0);
  const [cartProducts, setCartProducts] = useState([]);
  const [products] = useState([
    {
      id: 1,
      title: "Chocolate",
      description:
        "Chocolate is a food made from cacao beans. It is used in many desserts like pudding, cakes and candy",
      amount: 0,
    },
    {
      id: 2,
      title: "Lollypop",
      description:
        "Lollipops are available in a number of colors and flavors, particularly fruit flavors.",
      amount: 0,
    },
    {
      id: 3,
      title: "Ice Cream",
      description:
        "Ice cream is a sweetened frozen food typically eaten as a snack or dessert.",
      amount: 0,
    },
  ]);
  function refreshCart() {
    let newProducts = products.filter((prod) => prod.amount > 0);
    setCartProducts(newProducts);
  }
  function addProduct(title, id) {
    console.log("Dodat je proizvod: " + title);
    setCartNum(cartNum + 1);
    //console.log("Broj proizvoda u korpi: " + cartNum);
    products.forEach((prod) => {
      if (prod.id === id) {
        prod.amount++;
      }
      console.log(prod.amount);
    });
    refreshCart();
    // products.map((prod) => {
    //   if (prod.id === id) {
    //     prod.amount++;
    //   }
    //   return dsakldmasl;
    // });
  }
  return (
    <BrowserRouter className="App">
      <NavBar cartNum={cartNum}></NavBar>
      <Routes>
        <Route
          path="/"
          element={<Products products={products} onAdd={addProduct} />}
        />
        <Route path="/cart" element={<Cart products={cartProducts} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
