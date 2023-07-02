import { Route, Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const PrivateRoute = ({ roles, children }) => {
  const { isLoggedIn, permissions, token } = useAuth();

  // If user is not logged in, navigate to login page
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  console.log(token);

  console.log(permissions);
  // If user does not have necessary roles, navigate them accordingly
  if (!roles.some(role => permissions.map(p => p.trim().toUpperCase()).includes(role.trim().toUpperCase()))) {
    
    console.log(permissions);

    if (permissions.map(p => p.trim().toUpperCase()).includes("WORKER")) {
      return <Navigate to="/worker-home" />;
    }
    
    // Navigate to root as default
    return <Navigate to="/" />;
  }

  // If user is logged in and has the necessary role(s), render the children
  return children;
};

export default PrivateRoute;
