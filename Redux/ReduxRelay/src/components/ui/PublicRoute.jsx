import { Navigate, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const PublicRoute = ({ children }) => {
  const isLoggedIn = useAuth();
  const navigate = useNavigate();
  return isLoggedIn ? <Navigate to={"/inbox"} /> : children;
};

export default PublicRoute;
