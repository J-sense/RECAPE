import { useState } from "react";

// import React from "react";
const products = [
  { name: "Product A", id: 1, price: 40 },
  { name: "Product A", id: 2, price: 60 },
  { name: "Product A", id: 3, price: 80 },
];
const App = () => {
  const [cart, setCart] = useState([]);
  const handleCart = (pr) => {
    if (cart.includes(pr)) {
      return alert("Product already exists");
    }

    // Add the product to the cart
    setCart((prev) => [...prev, pr]);
  };
  return (
    <div className="px-28 py-40">
      <h1 className="text-3xl font-bold underline text-center py-10">
        Product List
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 ">
        {products.map((product, index) => (
          <div
            key={index}
            className="border bg-slate-100 shadow-lg p-5 items-start"
          >
            <h1>{product.name}</h1>
            <h3>{product.price}</h3>
            <button
              onClick={() => handleCart(product)}
              className="bg-green-600 px-7 py-2"
            >
              Add To Cart
            </button>
          </div>
        ))}
      </div>
      <div className="py-20">
        <h1> cart items :</h1>
        {cart.length > 0 ? (
          <div>
            {cart.map((item, index) => (
              <h3 key={index}>
                {item.name}-{item.price}
              </h3>
            ))}
          </div>
        ) : (
          <>cart is empty</>
        )}
      </div>
    </div>
  );
};

export default App;
