import "./index.css";

import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { CocktailProvider } from "./context";

createRoot(document.getElementById("root")!).render(
  <CocktailProvider>
    <RouterProvider router={router} />
  </CocktailProvider>
);
