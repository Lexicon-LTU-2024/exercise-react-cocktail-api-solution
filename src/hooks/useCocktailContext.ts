import { useContext } from "react";
import { ICocktailContext } from "../utilities";
import { CocktailContext } from "../context";

export function useCocktailContext(): ICocktailContext {
  return useContext(CocktailContext);
}
