import { Navigate } from 'react-router-dom';
import { useSelectors } from 'hooks/UseSelectors';

export const PrivateRoute = ({ children }) => {
  const { isLoggedIn } = useSelectors();

  if (isLoggedIn) {
    return <Navigate to="/contacts" replace />;
  }
  return children;
};
