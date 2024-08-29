import { BASE_API, mapRawCocktailToCocktail } from ".";
import { ICocktail, ICocktailData } from "./interfaces";

export async function getRandomCocktail(): Promise<ICocktail> {
  const response = await fetch(`${BASE_API}/random.php`);
  const data: ICocktailData = await response.json();
  const randomCocktailRaw = data.drinks.at(0);
  const cocktail = mapRawCocktailToCocktail(randomCocktailRaw!);
  return cocktail;
}

export async function getCocktailById(id: string): Promise<ICocktail> {
  const response = await fetch(`${BASE_API}/lookup.php?i=${id}`);
  const data: ICocktailData = await response.json();
  const cocktailByIdRaw = data.drinks.at(0);
  const cocktailById = mapRawCocktailToCocktail(cocktailByIdRaw!);
  return cocktailById;
}

export async function getCocktailsBySearch(request: Request): Promise<ICocktail[]> {
  const url = new URL(request.url);

  if (url.searchParams.size === 0) return [];

  console.log(url.searchParams);
  const name = url.searchParams.get("s");
  const response = await fetch(`${BASE_API}/search.php?s=${name}`);
  const data: ICocktailData = await response.json();
  const cocktailsRaw = data.drinks;
  console.log(cocktailsRaw);
  console.log(url);
  return [];
}
