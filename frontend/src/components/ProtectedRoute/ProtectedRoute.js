import { useSelector } from "react-redux";
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {
  const userTag = useSelector((state) => state.userTag);
  return userTag ? children : <Navigate to="/create-user-tag" />;
}

export default ProtectedRoute;