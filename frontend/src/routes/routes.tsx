import { createBrowserRouter } from "react-router-dom";
import { ProductsPage } from "../pages/ProductsPage";
import { SellPage } from "../pages/SellPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ProductsPage />,
  },
  {
    path: "/sell",
    element: <SellPage />,
  },
]);
