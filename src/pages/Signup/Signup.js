import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import "./signup.css";

const Signup = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();

  const [value, setValue] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const signUpHandler = async () => {
    try {
      setAuth({
        isAuthenticated: false,
        token: "",
      });

      const response = await axios.post("/api/auth/signup", {
        name: value.name,
        email: value.email,
        password: value.password,
        confirmPassword: value.confirmPassword,
      });

      localStorage.setItem("TOKEN", response.data.encodedToken);

      setAuth((user) => ({
        ...user,
        isAuthenticated: true,
        token: response.data.encodedToken,
      }));

      navigate("/login");
    } catch (errors) {
      console.log(errors);
    }
  };
  return (
    <div className="signup-container">
      <h1 className="signup-title">SIGN UP</h1>
      <form className="display-flex-column">
        <div className="display-flex-row">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-field"
            placeholder="Enter your name"
            value={value.name}
            onChange={(e) => {
              setValue({ ...value, name: e.target.value });
            }}
          />
        </div>

        <div className="display-flex-row">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-field"
            placeholder="shubham@gmail.com"
            value={value.email}
            onChange={(e) => {
              setValue({ ...value, email: e.target.value });
            }}
          />
        </div>
        <div className="display-flex-row">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-field"
            placeholder="Enter new password"
            value={value.password}
            onChange={(e) => {
              setValue({ ...value, password: e.target.value });
            }}
          />
        </div>
        <div className="display-flex-row">
          <label className="form-label">Confirm Password</label>
          <input
            type="password"
            className="form-field"
            placeholder="Re-type your password"
            value={value.confirmPassword}
            onChange={(e) => {
              setValue({ ...value, confirmPassword: e.target.value });
            }}
          />
        </div>

        <button className="register-btn" onClick={e=>{
            e.preventDefault();
            signUpHandler();
        }}>Register</button>
        <p>
          Already registered ?
          <Link to="/login" className="login-link">
            Login here
          </Link>
        </p>
      </form>
    </div>
  );
};

export { Signup };
