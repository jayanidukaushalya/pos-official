import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { DASHBOARD, LOGIN } from "../routes/path";

const Auth = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (window.localStorage.getItem("userId")) {
      navigate(DASHBOARD);
    } else {
      navigate(LOGIN);
    }
  }, []);
  return <Outlet />;
};

export default Auth;
