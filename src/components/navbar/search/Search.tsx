import * as React from "react";
import { SearchingAndSortingContext } from "../../../context/SearchingAndSortingContext";
import classes from "./Search.module.scss";

const Search = () => {
  const { searchQuery, setSearchQuery } = React.useContext(SearchingAndSortingContext);

  return (
    <div className={classes.searchContainer}>
      <input
        value={searchQuery}
        placeholder="Search"
        onChange={(e) => setSearchQuery?.(e.target.value)}
        className={classes.searchContainer__input}
      />
    </div>
  );
};

export default Search;
