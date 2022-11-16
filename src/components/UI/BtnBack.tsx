import * as React from "react";
import classes from "./BtnBack.module.scss";
import { useNavigate } from "react-router-dom";

const BtnBack = () => {
  const navigate = useNavigate();

  const openMainPage = () => {
    navigate("/");
  };
  
  return (
    <button className={classes.btn} onClick={() => openMainPage()}>
      Back to all users
    </button>
  );
};

export default BtnBack;
