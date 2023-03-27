import React, { useEffect, useState } from "react";
import Card from "../card.jsx/Card";
import "./Shope.css";
const Shope = () => {
  let [products, setproducts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setproducts(data));
  }, []);

  return (
    <div>
      <div className="container-of-2side">
        <div className="grid grid-cols-3 gap-5 ">
          {products.map((product) => (
            <Card key={product.id} product={product}></Card>
          ))}
        </div>
        <div className="mt-5 text-center text-3xl font-bold">
            Your cart here
        </div>
      </div>
    </div>
  );
};

export default Shope;
