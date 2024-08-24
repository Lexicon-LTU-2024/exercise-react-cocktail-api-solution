import { ReactElement } from "react";
import { CocktailDetails, CocktailImage } from "../components";
import { useTypedLoaderData } from "../hooks";
import { ICocktail } from "../utils";

export default function CocktailInfoPage(): ReactElement {
  const cocktail = useTypedLoaderData<ICocktail>();

  return (
    <main className="cocktail-info-page">
      <div className="cocktail-info-wrapper">
        <CocktailImage />
        <CocktailDetails cocktail={cocktail} />
      </div>
    </main>
  );
}
