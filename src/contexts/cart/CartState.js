import { useReducer } from "react";
import { CartContext } from "./CartContext";
import CartReducer from "./CartReducer";
import { AddToCart, RemoveItem, ShowHideCart } from "./Types";

const CartState = ({ children }) => {
  const initialState = {
    showCart: false,
    cartItems: [],
  };

  const [state, dispatch] = useReducer(CartReducer, initialState);

  const addToCart = (item) => {
    dispatch({ type: AddToCart, payload: item });
  };

  const showHideCart = () => {
    dispatch({ type: ShowHideCart });
  };

  const removeItem = (id) => {
    dispatch({ type: RemoveItem, payload: id });
  };

  return (
    <CartContext.Provider
      value={{
        showCart: state.showCart,
        cartItems: state.cartItems,
        addToCart,
        showHideCart,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartState;
