import * as React from "react";
import classes from "./Pages.module.scss";
import OneUser from "../components/one-user/OneUser";
import { useParams } from "react-router-dom";
import { User, UsersApi } from "../API/API";
import { useNavigate } from "react-router-dom";

const UserPage = () => {
  const params = useParams<{ id: string }>();

  const [user, setUser] = React.useState<User>();

  const navigate = useNavigate();
  const redirectToNotFoundPage = React.useCallback(() => {
    navigate("/404page");
  }, [navigate]);

  React.useEffect(() => {
    if (params.id) {
      UsersApi.fetchOneUserById(params.id)
        .then((res) => {
          setUser(res.data.data);
        })
        .catch((err) => {
          if (err.response.status === 404) {
            redirectToNotFoundPage();
          }
        });
    }
  }, [params.id, redirectToNotFoundPage]);

  return (
    <div className={classes.container}>
      <OneUser user={user} />
    </div>
  );
};

export default UserPage;
