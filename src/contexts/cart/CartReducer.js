import { AddToCart, RemoveItem, ShowHideCart } from "./Types";

const CartReducer = (state, action) => {
  switch (action.type) {
    case ShowHideCart: {
      return {
        ...state,
        showCart: !state.showCart,
      };
    }
    case AddToCart:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case RemoveItem:
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};

export default CartReducer;
