import * as React from "react";
import { User } from "../API/API";
import { SortingOptions } from "../components/navbar/sorting/Sorting";

export const useUserList = (
  users: User[],
  sort: SortingOptions,
  searchQuery: string
) => {
  const sortedUsers = React.useMemo(() => {
    return sort === SortingOptions.Ascending
      ? users.sort((prev, next) => {
          if (prev.first_name < next.first_name) return -1;
          if (prev.first_name > next.first_name) return 1;
          return 0;
        })
      : users.sort((prev, next) => {
          if (prev.first_name > next.first_name) return -1;
          if (prev.first_name < next.first_name) return 1;
          return 0;
        });
  }, [sort, users]);

  const filteredUsers = React.useMemo(() => {
    if (!searchQuery) {
      return sortedUsers;
    }

    return sortedUsers.filter((item) => {
      return item.last_name.toLowerCase().match(searchQuery.toLowerCase());
    });
  }, [searchQuery, sortedUsers]);

  return filteredUsers;
};
