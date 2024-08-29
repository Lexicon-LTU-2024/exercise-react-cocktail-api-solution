import { ReactElement } from "react";

interface ISearchListProps {
  isLoading?: boolean;
}

export function SearchList({ isLoading }: ISearchListProps): ReactElement {
  return <section id="search-list"></section>;
}
