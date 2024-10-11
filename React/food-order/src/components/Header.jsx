import { useContext } from "react";
import logo from "../assets/logo.jpg";
import Button from "./UI/Button";
import CartContext from "../contexts/CartContext.jsx";
import UserProgressContext from "../contexts/UserProgressContext.jsx";

export default function Header() {
  const { items } = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const itemsQuantity = items.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  function handleOpenCart() {
    userProgressCtx.showCart();
  }

  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="A restaurant" />
        <h1>Food Order</h1>
      </div>
      <nav>
        <Button textOnly onClick={handleOpenCart}>
          Cart ({itemsQuantity})
        </Button>
      </nav>
    </header>
  );
}
