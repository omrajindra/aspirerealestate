import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Offer from "./pages/Offer.js";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import ForgetPassword from "./pages/ForgetPassword";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Offer" element={<Offer />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/ForgetPassword" element={<ForgetPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
