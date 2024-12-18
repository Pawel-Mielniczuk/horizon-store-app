import { createBrowserRouter } from "react-router-dom";
import { SellPage } from "../pages/SellPage";
import { OrdersPage } from "../pages/OrdersPage.tsx";
import { Home } from "../pages/Home.tsx";
import { AccountPage } from "../pages/AccountPage.tsx";
import { ProductsPage } from "../pages/ProductsPage.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/products",
        element: <ProductsPage />,
      },
      {
        path: "/sell",
        element: <SellPage />,
      },
      {
        path: "/orders",
        element: <OrdersPage />,
      },
      {
        path: "/account",
        element: <AccountPage />,
      },
    ],
  },
]);
