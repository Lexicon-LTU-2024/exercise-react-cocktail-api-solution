import { ImageSize, INGREDIENT, MEASURE } from ".";
import { ICocktail, ICocktailRaw, IIndexable } from "./interfaces";

export function calculateResultPages(results: number, resultPerPage = 10): number {
  return Math.ceil(results / resultPerPage);
}

export function getImageSizeSuffix(size: ImageSize): string {
  switch (size) {
    case ImageSize.Small:
      return "-Small.png";
    case ImageSize.Medium:
      return "-Medium.png";
    case ImageSize.Large:
      return ".png";
  }
}

export const mapRawCocktailToCocktailBlueprint: IIndexable = {
  idDrink: "id",
  strDrink: "name",
  strCategory: "category",
  strAlcoholic: "alcoholic",
  strGlass: "glass",
  strInstructions: "instructions",
  strDrinkThumb: "image",
  dateModified: "dateModified",
};

export function mapRawCocktailToCocktail(rawCocktail: ICocktailRaw): ICocktail {
  const cocktail = {
    id: "",
    name: "",
    category: "",
    alcoholic: "",
    glass: "",
    instructions: "",
    image: "",
    ingredients: [],
    measures: [],
    dateModified: "",
  } as ICocktail;

  Object.keys(rawCocktail).reduce((acc, key) => {
    const value = rawCocktail[key];

    if (value === null) return acc;

    if (key.includes(INGREDIENT)) {
      acc.ingredients.push(value);
      return acc;
    }

    if (key.includes(MEASURE)) {
      acc.measures.push(value);
      return acc;
    }

    const mappedKey = mapRawCocktailToCocktailBlueprint[key];

    if (mappedKey === undefined) return acc;

    acc[mappedKey] = value;
    return acc;
  }, cocktail);

  return cocktail;
}
