import { useContext } from "react";
import logo from "../assets/logo.jpg";
import Button from "./UI/Button";
import CartContext from "../contexts/CartContext.jsx";

export default function Header() {
  const { items } = useContext(CartContext);
  const itemsQuantity = items.reduce((total, item) => {
    return total + item.quantity;
  }, 0);
  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="A restaurant" />
        <h1>Food Order</h1>
      </div>
      <nav>
        <Button textOnly>Cart ({itemsQuantity})</Button>
      </nav>
    </header>
  );
}
