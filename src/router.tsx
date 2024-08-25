import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { App } from "./components";
import { getCocktailById, getRandomCocktail } from "./utilities";
import { LandingPage, CocktailInfoPage, SearchPage } from "./pages";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />} path="/">
      <Route element={<LandingPage />} index loader={getRandomCocktail} />
      <Route
        element={<CocktailInfoPage />}
        loader={({ params }) => getCocktailById(params.id!)}
        path="cocktail/:id"
      />
      <Route element={<SearchPage />} path="/search" />
    </Route>
  )
);
