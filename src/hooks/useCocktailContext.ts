import { useContext } from "react";
import { ICocktailContext } from "../utils";
import { CocktailContext } from "../context";

export function useCocktailContext(): ICocktailContext {
  return useContext(CocktailContext);
}
