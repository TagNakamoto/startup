import React from 'react';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ element, isAuthenticated }) => {
    console.log(isAuthenticated);
    return isAuthenticated ? element : <Navigate to="/" replace />;
};
