import * as React from "react";
import classes from "./Navbar.module.scss";
import { Link } from "react-router-dom";
import Search from "./search/Search";
import Sorting from "./sorting/Sorting";

const Navbar = () => {
  return (
    <div className={classes.container}>
      <div className={classes.logosorting}>
        <Link className={classes.container__link} to={"/"}>
          <h1 className={classes.container__title}>USERS</h1>
        </Link>
        <Sorting />
      </div>
      <Search />
      <Link to={"/add-user"}>
        <img
          className={classes.container__addUserLogo}
          src={require("../../img/adduser.png")}
          alt="user img"
        />
      </Link>
    </div>
  );
};

export default Navbar;
