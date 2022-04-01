const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item._id !== action.payload._id),
      };

    case "CHANGE_CART_QUANTITY":
      return {
        ...state,
        cart: state.cart.filter((item) =>
          item._id === action.payload._id
            ? (item.qty = action.payload.qty)
            : item.qty
        ),
      };

    default:
      return state;
  }
};

export { cartReducer };
