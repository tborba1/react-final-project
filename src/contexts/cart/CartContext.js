//Use the Context API to maintain the Cart state.
//Create a context called CartContext that provides the following values to other components:
// - array of products and their quantities
// - function to add product to cart
// - function to remove product from cart

import { createContext, useState } from "react";

const CartContext = createContext(null);

const CartProvider = (props) => {
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {props.children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
