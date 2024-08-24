import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { App } from "./components";
import { getCocktailById, getRandomCocktail } from "./utilities";
import { lazy, Suspense } from "react";
import { LoadingPage } from "./pages";

// In order for lazy import to work, the export from the component must be a default export.
const LazyLandingPage = lazy(() => import("./pages/landing-page/LandingPage"));
const LazyCocktailInfoPage = lazy(() => import("./pages/cocktail-info-page/CocktailInfoPage"));

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route
        element={<Suspense children={<LazyLandingPage />} fallback={<LoadingPage />} />}
        index
        loader={getRandomCocktail}
      />
      <Route
        element={<Suspense children={<LazyCocktailInfoPage />} fallback={<LoadingPage />} />}
        loader={({ params }) => getCocktailById(params.id!)}
        path="cocktail/:id"
      />
    </Route>
  )
);
