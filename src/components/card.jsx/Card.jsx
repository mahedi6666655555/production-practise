import React from "react";
import "./Card.css";
const Card = (props) => {
  // console.log(props.product);

  let { img, name, price, ratings, quantity, seller } = props.product;
  return (
    <>
      <div>
        <div className="w-8/12 mt-4 mx-auto">
          <div className=" relative w-[300px] border h-[520px]">
            <img className="p-3" src={img} alt="" />
            <div className="ml-5">
              <h1>{name}</h1>
              <p className="pt-2">price: ${price}</p>

              <p className="mt-6">Manufacturer: {seller}</p>
              <p>Rating: {ratings}</p>
            </div>
              <button className=" w-full py-4 bottom-0 mt-5 absolute bg-orange-400">add to cart</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
