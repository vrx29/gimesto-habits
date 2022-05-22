import { Route, Routes } from "react-router-dom";
import { Home, Login, Signup } from "./pages";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<div>Error 404 page not found</div>} />
      </Routes>
    </>
  );
}

export default App;
