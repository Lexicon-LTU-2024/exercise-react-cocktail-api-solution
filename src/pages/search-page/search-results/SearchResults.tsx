import "./SearchResults.css";

import { ReactElement, useEffect } from "react";
import { useTypedLoaderData } from "../../../hooks";
import { ICocktail } from "../../../utilities";
import { SearchResultItem } from "./search-result-item";

export function SearchResults(): ReactElement {
  const cocktails = useTypedLoaderData<ICocktail[]>();

  if (cocktails.length === 0) {
    return (
      <div id="search-results">
        <p className="empty-list">No search results</p>
      </div>
    );
  }

  useEffect(() => {
    console.log(cocktails);
  }, [cocktails]);

  return (
    <div id="search-results">
      {cocktails.map((c) => (
        <SearchResultItem key={c.id} cocktail={c} />
      ))}
    </div>
  );
}
