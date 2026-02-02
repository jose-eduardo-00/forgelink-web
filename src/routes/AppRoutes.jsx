import { Routes, Route } from "react-router-dom";
import Login from "../screens/auth/login/Login";
import Register from "../screens/auth/register/Register";
import Dashboard from "../screens/Dashboard/Dashboard";
import ForgotPass from "../screens/auth/forgotPass/ForgotPass";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPass />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default AppRoutes;
