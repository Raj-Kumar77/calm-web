import axios from "axios";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../context/AuthProvider";

const Login = () => {
  const [user, setUser] = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `https://calm-web-backend.vercel.app/api/user/login`,
        { email, password }
      );
      if (data) {
        toast.success("Login successful");
        setUser({
          ...user,
          user: data.user,
          token: data.token,
        });
        localStorage.setItem("userInfo", JSON.stringify(data));
        navigate(location.state || "/");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div
      className="row d-flex justify-content-center align-items-center vh-100"
      style={{ background: "#1C8EF9 " }}
    >
      <div className="col-md-5 border rounded p-5 formm bg-light">
        <form onSubmit={handleSubmit}>
          <h3 className="text-center fw-bolder">Login</h3>

          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Sign in
            </button>
          </div>
          <p className="forgot-password text-right">
            Not registered yet <Link to="/register">Sign up?</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
