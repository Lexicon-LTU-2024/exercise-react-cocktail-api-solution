import { ReactElement } from "react";
import { Link } from "react-router-dom";

export function Header(): ReactElement {
  return (
    <header id="header" className="g-container">
      <h1 className="logo">
        <Link className="g-link" to="/">
          Cocktail API
        </Link>
      </h1>
      <nav className="navbar">
        <Link className="g-link" to="/">
          Home
        </Link>
        <Link className="g-link" to="/search">
          Search
        </Link>
      </nav>
    </header>
  );
}
