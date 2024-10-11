import { createContext } from "react";

const CartContext = createContext({
  items: [],
  addItems: (item) => {},
  removeItems: (id) => {},
});

export function CartContextProvider({ children }) {
  return <CartContext.Provider>{children}</CartContext.Provider>;
}

export default CartContext;
