import { IHasIngredientsAndMeasures, IIndexable } from "./interfaces";

export function calculateResultPages(results: number, resultPerPage = 10): number {
  return Math.ceil(results / resultPerPage);
}

// There are some weird typings required to make TS happy in this "half-generic" function
export function mapRawToDomain<T extends IIndexable, U extends IIndexable>(
  rawObject: T,
  blueprint: IIndexable,
  ingredientKeyPattern?: string,
  measureKeyPattern?: string
): U {
  const mappedObject: U = {} as U;

  if (ingredientKeyPattern) {
    (mappedObject as unknown as IHasIngredientsAndMeasures).ingredients = [];
  }

  if (measureKeyPattern) {
    (mappedObject as unknown as IHasIngredientsAndMeasures).measures = [];
  }

  Object.keys(rawObject).reduce((acc, key) => {
    const value: any = rawObject[key];

    if (value === null) return acc;

    if (ingredientKeyPattern && key.includes(ingredientKeyPattern)) {
      (acc as unknown as IHasIngredientsAndMeasures).ingredients.push(value);
      return acc;
    }

    if (measureKeyPattern && key.includes(measureKeyPattern)) {
      (acc as unknown as IHasIngredientsAndMeasures).measures.push(value);
      return acc;
    }

    const mappedKey = blueprint[key];
    if (mappedKey === undefined) return acc;

    (acc as IIndexable)[mappedKey] = value;

    return acc;
  }, mappedObject);

  return mappedObject;
}

// ########## Map Blueprints ########## //

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

export const mapRawIngredientToIngredientBlueprint: IIndexable = {
  idIngredient: "id",
  strIngredient: "name",
  strDescription: "description",
  strType: "type",
  strAlcohol: "alcohol",
  strABV: "ABV",
};
