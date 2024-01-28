import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`http://localhost:5000/api/user/register`, {
        name,
        email,
        password,
      });
      if (data) {
        toast.success("Registration Successfully");
        navigate("/sign-in");
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
          <h3 className="text-center fw-bolder">Sign Up</h3>
          <div className="mb-3">
            <label>Full name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
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
              Sign Up
            </button>
          </div>
          <p className="forgot-password text-right">
            Already registered <Link to="/sign-in">Sign in?</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
