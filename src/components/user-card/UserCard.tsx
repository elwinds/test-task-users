import * as React from "react";
import classes from "./UserCard.module.scss";
import { useNavigate } from "react-router-dom";
import { UsersApi, User } from "../../API/API";

type Props = {
  user: User;
};

const UserCard: React.FC<Props> = (props) => {
  const { id, email, first_name, last_name, avatar } = props.user;

  let navigate = useNavigate();

  const openUserPage = () => {
    navigate(`/${id}`);
  };

  const deleteUser = (id: number) => {
    UsersApi.deleteUser(id).then((res) => {
      alert(`Пользователь ${first_name} ${last_name} удален из базы данных`);
    });
  };

  return (
    <div className={classes.card}>
      <div className={classes.header}>{first_name + " " + last_name}</div>
      <img className={classes.img} src={avatar} alt={first_name + "photo"} />
      <div className={classes.mail}>{email}</div>
      <div className={classes.footer}>
        <button
          className={classes.btn}
          onClick={() => {
            openUserPage();
          }}
        >
          View user
        </button>
        <img
          className={classes.deleteIcon}
          onClick={() => {
            deleteUser(id);
          }}
          src={require("../../img/delete.png")}
          alt="delete user"
        />
      </div>
    </div>
  );
};

export default UserCard;
