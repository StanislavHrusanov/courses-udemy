import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products, { loader as productsLoader } from "./components/Shop/Products";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "products",
        children: [
          { index: true, element: <Products />, loader: productsLoader },
        ],
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
