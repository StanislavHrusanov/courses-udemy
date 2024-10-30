import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/Root";
import Home, { loader as restaurantsLoader } from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [{ index: true, element: <Home />, loader: restaurantsLoader }],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
