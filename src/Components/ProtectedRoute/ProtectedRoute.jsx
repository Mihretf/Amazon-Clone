import React, { useContext, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { DataContext } from '../DataProvider/DataProvider';

const ProtectedRoute = ({ children, msg }) => {
  const navigate = useNavigate();
  const location = useLocation(); // Get the current path
  const [{ user }] = useContext(DataContext);

  useEffect(() => {
    if (!user) {
      // Redirect to login with the intended path
      navigate("/auth", {
        state: { msg, redirectTo: location.pathname }, // Include redirectTo
      });
    }
  }, [user, navigate, location, msg]);

  // Render children only if the user is authenticated
  return user ? children : null;
};

export default ProtectedRoute;
