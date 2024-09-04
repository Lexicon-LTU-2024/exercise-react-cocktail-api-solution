import { lazy, ReactElement, Suspense } from "react";
// import { RandomCocktail } from "./random-cocktail";
import { useMediaQuery } from "usehooks-ts";
import { MIN_TABLET_SIZE } from "../../utilities";
import { WelcomeContent } from "./welcome-content";

const RandomCocktail = lazy(() => import("./random-cocktail/RandomCocktail"));

export function LandingPage(): ReactElement {
  const isTabletSize = useMediaQuery(MIN_TABLET_SIZE);

  return (
    <main id="landing-page" className="g-container">
      {isTabletSize && <WelcomeContent />}
      <Suspense fallback={<div>Loading cocktail...</div>}>
        <RandomCocktail />
      </Suspense>
    </main>
  );
}
