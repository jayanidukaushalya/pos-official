import { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { LOGIN } from "../routes/path";

const Root = () => {
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Root");
    navigate(LOGIN);
  }, []);

  return <Outlet />;
};

export default Root;
