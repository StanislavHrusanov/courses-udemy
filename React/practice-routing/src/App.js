import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/Root";
import Home, { loader as homeLoader } from "./pages/Home";
import Restaurants, { loader as restaurantsLoader } from "./pages/Restaurants";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home />, loader: homeLoader },
      {
        path: "restaurants",
        element: <Restaurants />,
        loader: restaurantsLoader,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
