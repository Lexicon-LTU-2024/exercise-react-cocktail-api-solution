import { ReactElement, useState } from "react";
import { useTypedLoaderData } from "../../../hooks";
import { calculateResultPages, ICocktail, ICocktailResult } from "../../../utilities";
import { SearchResultItem } from "./search-result-item";
import { Pagination } from "./pagination";

export function SearchResults(): ReactElement {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const cocktailResult: ICocktailResult = useTypedLoaderData<ICocktailResult>();

  const resultsPerPage: number = 10;
  const resultPages: number = calculateResultPages(cocktailResult.count, resultsPerPage);
  const startIndex: number = (currentPage - 1) * resultsPerPage;
  const endIndex: number = startIndex + resultsPerPage;
  const resultsLessOrEqualResultsPerPage: boolean = cocktailResult.count <= resultsPerPage;

  // Computed cocktails depending on the currentPage
  const cocktails: ICocktail[] = cocktailResult.drinks.slice(startIndex, endIndex);

  if (cocktailResult.count === 0) {
    return (
      <div id="search-results">
        <p className="empty-list">No search results...</p>
      </div>
    );
  }

  if (resultsLessOrEqualResultsPerPage === true) {
    return (
      <div id="search-results">
        {cocktails.map((c) => (
          <SearchResultItem key={c.id} cocktail={c} />
        ))}
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
