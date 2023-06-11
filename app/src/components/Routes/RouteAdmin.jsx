import React, { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
import AuthContext from '../Auth/Context';

const RouteAdmin = ({ component: Component, ...rest }) => {
    const { token } = useContext(AuthContext);

        return token ? (
            <Route {...rest} element={Element} />
          ) : (
            <Navigate to="/login" replace />
          );
}

export default RouteAdmin;