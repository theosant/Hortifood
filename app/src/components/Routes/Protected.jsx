import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../Auth/Context';

export function Protected({ adminOnly = false, children }) {
  const { token, user } = useAuth();

  if (!token) {
    return <Navigate to="/login" replace />;
  } else {
    if (adminOnly && !user.admin) {
      return <Navigate to="/" replace />;
    }
  }

  return children;
}