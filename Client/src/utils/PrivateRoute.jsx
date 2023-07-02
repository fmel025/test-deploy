import { Route, Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const PrivateRoute = ({ roles, children }) => {
  const { isLoggedIn, permissions } = useAuth();

  if (!isLoggedIn()) {
    return <Navigate to="/login" />;
  }

  if (permissions && !roles.some((r) => permissions.includes(r))) {
    if (!permissions.includes("WORKER")) {
      return <Navigate to="/" />;
    }

    return <Navigate to="/private/home" />;
  }

  return children;
};

export default PrivateRoute;
