import React from "react";
import { useSelector } from "react-redux";
import { useLocation, Outlet, Navigate } from "react-router-dom";

export function PublicRoute() {
  const location = useLocation();
  const { authToken } = useSelector((state) => state.auth);

  return authToken ? (
    <Navigate
      to={`${
        location?.state?.from?.pathname
          ? location?.state?.from?.pathname
          : "/home"
      }`}
      replace
    />
  ) : (
    <Outlet />
  );
}
