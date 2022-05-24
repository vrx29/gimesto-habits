import { Route, Routes } from "react-router-dom";
import { PrivateRoute, PublicRoute } from "./components";
import { Home, Landing, Login, Signup } from "./pages";

function App() {
  return (
    <>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/home" element={<Home />} />
        </Route>
        <Route path="*" element={<div>Error 404 page not found</div>} />
      </Routes>
    </>
  );
}

export default App;
