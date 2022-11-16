import * as React from "react";
import classes from "./Pages.module.scss";
import { UsersApi } from "../API/API";
import Navbar from "../components/navbar/Navbar";
import Pagination from "../components/pagination/Pagination";
import UserList from "../components/user-list/UserList";
import { User } from "../API/API";
import { useUserList } from "../hooks/useUserList";
import { SearchingAndSortingContext } from "../context/SearchingAndSortingContext";

const MainPage = () => {
  const [users, setUsers] = React.useState<User[]>([]);
  const [activePage, setActivePage] = React.useState(1);
  const [countPages, setCountPages] = React.useState(1);

  const { searchQuery, sort } = React.useContext(SearchingAndSortingContext);

  React.useEffect(() => {
    UsersApi.fetchAllUsers(activePage).then((res) => {
      setUsers(res.data.data);
      setCountPages(res.data.total_pages);
    });
  }, [activePage]);

  const filteredUsers = useUserList(users, sort, searchQuery);

  return (
    <div className={classes.container}>
      <Navbar />
      <UserList users={filteredUsers} />
      {!!filteredUsers.length && (
        <Pagination
          activePage={activePage}
          countPages={countPages}
          changePage={setActivePage}
        />
      )}
    </div>
  );
};

export default MainPage;
