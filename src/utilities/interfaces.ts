export interface ICocktail extends IIndexable, IHasIngredientsAndMeasures {
  id: string;
  name: string;
  category: string;
  alcoholic: string;
  glass: string;
  instructions: string;
  image: string;
  dateModified: string;
}

export interface ICocktailContext {
  addToFavorites: (cocktail: ICocktail) => void;
  checkIfExistsInFavorites: (cocktailId: string) => boolean;
  favorites: ICocktail[];
  removeFromFavorites: (cocktailId: string) => void;
}

export interface ICocktailData {
  drinks: ICocktailRaw[];
}

export interface ICocktailRaw extends IIndexable {
  idDrink: string;
  strDrink: string;
  strCategory: string;
  strAlcoholic: string;
  strGlass: string;
  strInstructions: string;
  strDrinkThumb: string;
  strIngredient1: string | null;
  strIngredient2: string | null;
  strIngredient3: string | null;
  strIngredient4: string | null;
  strIngredient5: string | null;
  strIngredient6: string | null;
  strIngredient7: string | null;
  strIngredient8: string | null;
  strIngredient9: string | null;
  strIngredient10: string | null;
  strIngredient11: string | null;
  strIngredient12: string | null;
  strIngredient13: string | null;
  strIngredient14: string | null;
  strIngredient15: string | null;
  strMeasure1: string | null;
  strMeasure2: string | null;
  strMeasure3: string | null;
  strMeasure4: string | null;
  strMeasure5: string | null;
  strMeasure6: string | null;
  strMeasure7: string | null;
  strMeasure8: string | null;
  strMeasure9: string | null;
  strMeasure10: string | null;
  strMeasure11: string | null;
  strMeasure12: string | null;
  strMeasure13: string | null;
  strMeasure14: string | null;
  strMeasure15: string | null;
  dateModified: string;
}

export interface ICocktailResult {
  count: number;
  drinks: ICocktail[];
}

export interface IIndexable {
  [key: string]: any;
}

export interface IIngredient {}

export interface IHasIngredientsAndMeasures {
  ingredients: string[];
  measures: string[];
}
