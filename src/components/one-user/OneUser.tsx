import * as React from "react";
import classes from "./OneUser.module.scss";
import { User } from "../../API/API";
import BtnBack from "../UI/BtnBack";

type Props = {
  user?: User;
};

const OneUser: React.FC<Props> = (props) => {
  const { user } = props;

  if (!user) {
    return null;
  }

  return (
    <div className={classes.container}>
      <img className={classes.container__img} src={user.avatar} alt="avatar" />
      <div className={classes.info}>
        <div className={classes.info__text}>
          <span>First name: {user.first_name}</span>
          <span>Last name: {user.last_name}</span>
          <span>E-mail: {user.email}</span>
        </div>
        <BtnBack />
      </div>
    </div>
  );
};

export default OneUser;
