import { BASE_API, mapRawCocktailToCocktail } from ".";
import { ICocktail, ICocktailData, ICocktailResult } from "./interfaces";

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

export async function getCocktailsByName(request: Request): Promise<ICocktailResult> {
  const url = new URL(request.url);

  if (url.searchParams.size === 0) return { count: 0, drinks: [] };

  const name = url.searchParams.get("s"); // Value for the name query parameter
  const response = await fetch(`${BASE_API}/search.php?s=${name}`);
  const data: ICocktailData = await response.json();

  if (data.drinks === null) return { count: 0, drinks: [] };

  const cocktails = data.drinks.map((c) => mapRawCocktailToCocktail(c));

  return { count: data.drinks.length, drinks: cocktails };
}
