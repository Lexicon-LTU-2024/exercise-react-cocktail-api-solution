import { ReactElement } from "react";
import { RandomCocktail } from "../components";

export default function LandingPage(): ReactElement {
  return (
    <main id="landing-page" className="g-container">
      <article className="welcome-content">
        <h1 className="header">Discover the Perfect Cocktail</h1>
        <p>Explore our collection of classic and innovative cocktail recipes.</p>
      </article>
      <RandomCocktail />
    </main>
  );
}
