import { ReactElement } from "react";
import { RandomCocktail } from "../components";

export default function LandingPage(): ReactElement {
  return (
    <main className="landing-page">
      <RandomCocktail />
    </main>
  );
}
