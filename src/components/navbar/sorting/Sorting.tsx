import * as React from "react";
import { SearchingAndSortingContext } from "../../../context/SearchingAndSortingContext";
import classes from "./Sorting.module.scss";

const enum SortingOptions {
  Ascending = "A-Z",
  Descending = "Z-A",
}

const Sorting = () => {
  const { sort, setSort } = React.useContext(SearchingAndSortingContext);

  return (
    <div
      className={classes.container}
      onClick={() => {
        sort === SortingOptions.Ascending && setSort
          ? setSort(SortingOptions.Descending)
          : setSort?.(SortingOptions.Ascending);
      }}
    >
      {sort}
      <img
        className={classes.container__arrow}
        src={require("../../../img/arrow.png")}
        alt="arrow img"
      />
    </div>
  );
};

export { SortingOptions };

export default Sorting;
