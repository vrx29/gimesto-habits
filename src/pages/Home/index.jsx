import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../features/auth/authSlice";

export function Home() {
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={() => dispatch(logout())}>Log out</button>
    </div>
  );
}
