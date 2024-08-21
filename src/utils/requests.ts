import { mapRawCocktailToCocktail } from ".";
import { ICocktail, ICocktailData } from "./interfaces";

export async function getRandomCocktail(): Promise<ICocktail> {
  const response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php");
  const data: ICocktailData = await response.json();
  const randomCocktailRaw = data.drinks.at(0);
  const cocktail = mapRawCocktailToCocktail(randomCocktailRaw!);
  return cocktail;
}

export async function getCocktailById(id: string): Promise<ICocktail> {
  const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
  const data: ICocktailData = await response.json();
  const cocktailByIdRaw = data.drinks.at(0);
  const cocktailById = mapRawCocktailToCocktail(cocktailByIdRaw!);
  return cocktailById;
}
