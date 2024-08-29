import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { App } from "./components";
import { getCocktailById, getCocktailsByName, getRandomCocktail } from "./utilities";
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
      <Route
        element={<SearchPage />}
        loader={({ request }) => getCocktailsByName(request)}
        path="/search"
      />
    </Route>
  )
);
