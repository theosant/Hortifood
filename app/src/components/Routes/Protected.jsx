import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../Auth/Context';

export function Protected({ adminOnly = false, children }) {
  const { token, user } = useAuth();

  if (adminOnly && (user && !user.admin)) {
    return <Navigate to="/" replace />;
  }

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
}