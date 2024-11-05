import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/Root";
import Home, { loader as homeLoader } from "./pages/Home";
import Restaurants, { loader as restaurantsLoader } from "./pages/Restaurants";
import Details, { loader as detailsLoader } from "./pages/Details";
import Edit, { action as editRestaurantAction } from "./pages/Edit";
import Register,{action as regiserAction} from "./pages/Register";
import Login from "./pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home />, loader: homeLoader },
      {
        path: "restaurants",
        children: [
          {
            index: true,
            element: <Restaurants />,
            loader: restaurantsLoader,
          },
          {
            path: ":restaurantId",
            id: "restaurant-details",
            loader: detailsLoader,
            children: [
              {
                index: true,
                element: <Details />,
              },
              {
                path: "edit",
                element: <Edit />,
                action: editRestaurantAction,
              },
            ],
          },
        ],
      },
      {
        path: "register",
        element: <Register />,
        action:regiserAction
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
