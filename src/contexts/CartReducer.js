export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADDITEM":
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
    case "DELITEM":
      return {
        ...state,
        cart: state.cart.filter((c) => c.id !== action.payload.id),
      };
    default:
      return state;
  }
};
