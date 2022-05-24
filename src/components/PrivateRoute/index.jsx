import React from "react";
import { useSelector } from "react-redux";
import { useLocation, Outlet, Navigate } from "react-router-dom";

export function PrivateRoute() {
  const location = useLocation();
  const { authToken } = useSelector((state) => state.auth);
  
  return authToken ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}
