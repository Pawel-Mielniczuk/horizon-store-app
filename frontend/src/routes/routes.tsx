import { createBrowserRouter } from "react-router-dom";
import { SellPage } from "../pages/SellPage";
import { Home } from "../pages/Home.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/sell",
    element: <SellPage />,
  },
]);
