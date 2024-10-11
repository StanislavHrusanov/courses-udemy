import Header from "./components/Header.jsx";
import Meals from "./components/Meals.jsx";
import Cart from "./components/Cart.jsx";
import Checkout from "./components/Checkout.jsx";
import { CartContextProvider } from "./contexts/CartContext.jsx";
import { UserProgressContextProvider } from "./contexts/UserProgressContext.jsx";

function App() {
  return (
    <UserProgressContextProvider>
      <CartContextProvider>
        <Header />
        <Meals />
        <Cart />
        <Checkout />
      </CartContextProvider>
    </UserProgressContextProvider>
  );
}

export default App;
