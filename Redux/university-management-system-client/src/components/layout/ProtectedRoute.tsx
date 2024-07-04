import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import { accessTokenSelector } from "../../redux/store";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const token = useAppSelector(accessTokenSelector);
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default ProtectedRoute;
