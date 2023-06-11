import React, { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../Auth/Context';

const RouteAdmin = ({ component: Component, ...rest }) => {
    const { token } = useAuth();

        return token ? (
            <Route {...rest} element={Element} />
          ) : (
            <Navigate to="/login" replace />
          );
}

export default RouteAdmin;