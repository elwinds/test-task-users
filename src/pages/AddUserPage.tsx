import * as React from "react";
import AddUserForm from "../components/add-user-form/AddUserForm";
import classes from "./Pages.module.scss";

const AddUserPage = () => {
  return (
    <div className={classes.container}>
      <AddUserForm />
    </div>
  );
};

export default AddUserPage;
