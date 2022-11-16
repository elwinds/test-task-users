import * as React from "react";
import { SortingOptions } from "../components/navbar/sorting/Sorting";

type ISearchingAndSortingContext = {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>> | null;
  sort: SortingOptions;
  setSort: React.Dispatch<React.SetStateAction<SortingOptions>> | null;
};

const defaultValue: ISearchingAndSortingContext = {
  searchQuery: "",
  setSearchQuery: null,
  sort: SortingOptions.Ascending,
  setSort: null,
};

export const SearchingAndSortingContext =
  React.createContext<ISearchingAndSortingContext>(defaultValue);
