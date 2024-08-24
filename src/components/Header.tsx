import { ReactElement } from "react";
import { Link } from "react-router-dom";

export function Header(): ReactElement {
  return (
    <header>
      <h3>Cocktail API</h3>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/">Search</Link>
      </nav>
    </header>
  );
}
