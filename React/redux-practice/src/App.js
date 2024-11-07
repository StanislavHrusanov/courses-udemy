import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products, { loader as productsLoader } from "./components/Shop/Products";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCartData, sendCartData } from "./store/cartUpdates";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "products",
        element: <Products />,
        loader: productsLoader,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
]);

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);
  return <RouterProvider router={router} />;
}

export default App;
