import "./SearchPage.css";

import { FormEventHandler, ReactElement, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { SearchInput } from "./search-input";
import { Button } from "../../components";
import { useMediaQuery } from "usehooks-ts";
import { MIN_MOBILE_L_SIZE } from "../../utilities";
import { SearchResults } from "./search-results";

export function SearchPage(): ReactElement {
  const [searchParams, setSearchParams] = useSearchParams();
  const [name, setName] = useState<string>(searchParams.get("s") || "");
  const isMobilLSize = useMediaQuery(MIN_MOBILE_L_SIZE);

  const handleOnUpdateNameValue = (newValue: string) => {
    setName(newValue);
  };

  const handleOnSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setSearchParams({ s: name }); // This will automatically revalidate my loader function as it's tied to the route, including the query (search) params.
  };

  return (
    <main id="search-page" className="g-container">
      {isMobilLSize ? <h1>Search Cocktails</h1> : <h2>Search Cocktails</h2>}
      <form className="search-form" onSubmit={handleOnSubmit}>
        <SearchInput
          name="name"
          placeholder="Search cocktail by name"
          type="text"
          updateValue={handleOnUpdateNameValue}
          value={name}
        />
        <Button type="submit">Search</Button>
      </form>
      <SearchResults />
    </main>
  );
}
