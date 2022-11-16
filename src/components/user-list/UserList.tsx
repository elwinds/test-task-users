import * as React from "react";
import classes from "./UserList.module.scss";
import UserCard from "../user-card/UserCard";
import { User } from "../../API/API";

type Props = {
  users: User[];
};

const UserList: React.FC<Props> = (props) => {
  const { users } = props;

  return (
    <div className={classes.container}>
      {users.length > 0 ? (
        users.map((item) => {
          return <UserCard key={item.id} user={item} />;
        })
      ) : (
        <div className={classes.container__text}>USERS NOT FOUND</div>
      )}
    </div>
  );
};

export default UserList;
