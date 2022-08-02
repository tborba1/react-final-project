//Use the Context API to maintain the Cart state.
//Create a context called CartContext that provides the following values to other components:
// - array of products and their quantities
// - function to add product to cart
// - function to remove product from cart

import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../contexts/CartReducer";

const CartContext = createContext(null);

const CartProvider = (props) => {
  const [state, dispatch] = useReducer(cartReducer, {
    cart: [],
  });

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {props.children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };

export const CartState = () => {
  return useContext(CartContext);
};
