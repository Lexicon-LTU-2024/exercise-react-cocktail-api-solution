import "./CocktailInfoPage.css";

import { ReactElement } from "react";
import { CocktailImage } from "../../components";
import { CocktailDetails } from "./cocktail-details";
import { useTypedLoaderData } from "../../hooks";
import { ICocktail } from "../../utilities";

export default function CocktailInfoPage(): ReactElement {
  const cocktail = useTypedLoaderData<ICocktail>();

  return (
    <main id="cocktail-info-page" className="g-container">
      <h1 className="header">Cocktail Details</h1>
      <CocktailImage alt={cocktail.name} src={cocktail.image} />
      <CocktailDetails cocktail={cocktail} />
    </main>
  );
}
