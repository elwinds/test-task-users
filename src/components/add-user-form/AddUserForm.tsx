import * as React from "react";
import { NewUser, UsersApi } from "../../API/API";
import BtnBack from "../UI/BtnBack";
import classes from "./AddUserForm.module.scss";

const AddUserForm = () => {
  const [inputsValues, setInputsValues] = React.useState({
    firstname: "",
    lastname: "",
    email: "",
  });

  const postNewUser = (data: NewUser) => {
    UsersApi.addNewUser(data).then(() => {
      alert(
        `Пользователь ${inputsValues.firstname} ${inputsValues.lastname} добавлен в базу данных`
      );
    });
  };

  return (
    <div className={classes.container}>
      <form className={classes.form}>
        <label className={classes.label} htmlFor="first-name">
          Enter your first name
          <input
            className={classes.input}
            id="first-name"
            placeholder="First name"
            value={inputsValues.firstname}
            onChange={(e) => {
              setInputsValues({ ...inputsValues, firstname: e.target.value });
            }}
            required
          />
        </label>
        <label className={classes.label} htmlFor="last-name">
          Enter your last name
          <input
            className={classes.input}
            id="last-name"
            placeholder="Last name"
            value={inputsValues.lastname}
            onChange={(e) => {
              setInputsValues({ ...inputsValues, lastname: e.target.value });
            }}
            required
          />
        </label>
        <label className={classes.label} htmlFor="e-mail">
          Enter your email
          <input
            className={classes.input}
            id="e-mail"
            placeholder="E-mail"
            type="email"
            value={inputsValues.email}
            onChange={(e) => {
              setInputsValues({ ...inputsValues, email: e.target.value });
            }}
            required
          />
        </label>
        <button
          className={classes.btn}
          onClick={(e) => {
            e.preventDefault();
            postNewUser(inputsValues);
          }}
        >
          Add new user
        </button>
      </form>
      <BtnBack />
    </div>
  );
};

export default AddUserForm;
