import { ReactElement } from "react";
import { CocktailImage } from "../../components";
import { CocktailDetails } from "./cocktail-details";
import { useTypedLoaderData } from "../../hooks";
import { ICocktail, MIN_MOBILE_L_SIZE } from "../../utilities";
import { useMediaQuery } from "usehooks-ts";

export function CocktailInfoPage(): ReactElement {
  const cocktail = useTypedLoaderData<ICocktail>();
  const isMobilLSize = useMediaQuery(MIN_MOBILE_L_SIZE);

  return (
    <main id="cocktail-info-page" className="g-container">
      {isMobilLSize ? (
        <h1 className="header">Cocktail Details</h1>
      ) : (
        <h2 className="header">Cocktail Details</h2>
      )}
      <CocktailImage alt={cocktail.name} src={cocktail.image} />
      <CocktailDetails cocktail={cocktail} />
    </main>
  );
}
