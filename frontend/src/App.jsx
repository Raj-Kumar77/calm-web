import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import "swiper/css";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { useAuth } from "./context/AuthProvider";
import TryFree from "./pages/TryFree";

function App() {
  const [user, setUser] = useAuth();
  console.log(user);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/sign-in" element={<Login />} />
      <Route path="/try-free" element={user?.token ? <TryFree /> : <Login />} />
    </Routes>
  );
}

export default App;
