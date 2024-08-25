import "./LandingPage.css";

import { ReactElement } from "react";
import { RandomCocktail } from "./random-cocktail";
import { useMediaQuery } from "usehooks-ts";
import { MIN_TABLET_SIZE } from "../../utilities";
import { WelcomeContent } from "./welcome-content";

export function LandingPage(): ReactElement {
  const minTabletSize = useMediaQuery(MIN_TABLET_SIZE);

  return (
    <main id="landing-page" className="g-container">
      {minTabletSize && <WelcomeContent />}
      <RandomCocktail />
    </main>
  );
}
