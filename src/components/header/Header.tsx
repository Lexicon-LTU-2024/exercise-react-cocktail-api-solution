import "./Header.css";

import { ReactElement } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "usehooks-ts";
import { MIN_TABLET_SIZE } from "../../utilities";

export function Header(): ReactElement {
  const matches = useMediaQuery(MIN_TABLET_SIZE);

  const renderLogo = (): ReactElement => {
    return matches ? (
      <h1 className="logo">
        <Link className="g-link" to="/">
          Cocktail API
        </Link>
      </h1>
    ) : (
      <h3 className="logo">
        <Link className="g-link" to="/">
          Cocktail API
        </Link>
      </h3>
    );
  };

  return (
    <header id="header" className="g-container">
      {renderLogo()}
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
