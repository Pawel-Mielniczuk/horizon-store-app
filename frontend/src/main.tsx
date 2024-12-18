import { StrictMode } from "react";
import { RouterProvider } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "./apollo.config";
import { createRoot } from "react-dom/client";
import { router } from "./routes/routes.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApolloProvider client={apolloClient}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </StrictMode>,
);
