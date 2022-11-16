import * as React from "react";
import BtnBack from "../components/UI/BtnBack";
import classes from "./Pages.module.scss";

const PageNotFound = () => {
  return (
    <div className={classes.pageNotFound}>
      <span className={classes.pageNotFound__text}>PAGE NOT FOUND.</span>
      <BtnBack />
    </div>
  );
};

export default PageNotFound;
