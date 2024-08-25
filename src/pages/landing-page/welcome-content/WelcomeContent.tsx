import "./WelcomeContent.css";
import { ReactElement } from "react";

export function WelcomeContent(): ReactElement {
  return (
    <article id="welcome-content">
      <h1 className="header">Discover the Perfect Cocktail</h1>
      <p>Explore our collection of classic and innovative cocktail recipes.</p>
    </article>
  );
}
