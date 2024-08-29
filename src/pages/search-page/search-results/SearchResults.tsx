import "./SearchResults.css";

import { ReactElement, useState } from "react";
import { useTypedLoaderData } from "../../../hooks";
import { calculateResultPages, ICocktailResult } from "../../../utilities";
import { SearchResultItem } from "./search-result-item";
import { Button } from "../../../components";
import { Pagination } from "./pagination";

export function SearchResults(): ReactElement {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const cocktailResult = useTypedLoaderData<ICocktailResult>();

  const resultsPerPage = 10;
  const resultPages = calculateResultPages(cocktailResult.count, resultsPerPage);
  const startIndex = (currentPage - 1) * resultsPerPage;
  const endIndex = startIndex + resultsPerPage;

  // Computed cocktails depending on the currentPage
  const cocktails = cocktailResult.drinks.slice(startIndex, endIndex);

  if (cocktailResult.count === 0) {
    return (
      <div id="search-results">
        <p className="empty-list">No search results...</p>
      </div>
    );
  }

  return (
    <div id="search-results">
      <Pagination
        back={() => setCurrentPage((p) => p - 1)}
        currentPage={currentPage}
        next={() => setCurrentPage((p) => p + 1)}
        pages={resultPages}
      />

      {cocktails.map((c) => (
        <SearchResultItem key={c.id} cocktail={c} />
      ))}

      <Pagination
        back={() => setCurrentPage((p) => p - 1)}
        currentPage={currentPage}
        next={() => setCurrentPage((p) => p + 1)}
        pages={resultPages}
      />
    </div>
  );
}
