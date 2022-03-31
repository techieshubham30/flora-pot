import { createContext, useContext, useReducer } from "react";
import { useProduct } from "./ProductContext";
import { cartReducer } from "../Reducer/cartReducer";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [state, setCart] = useReducer(cartReducer, {
    cart: [],
  });

  return (
    <CartContext.Provider value={{ state, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };
