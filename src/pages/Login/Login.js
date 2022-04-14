import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./login.css";

const Login = () => {
  const {setAuth } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "adarshbalika@gmail.com",
    password: "adarshbalika",
  });

  const loginHandler = async () => {
    try {
      setAuth({
        isAuthenticated: false,
        token: "",
      });

      const response = await axios.post("/api/auth/login", {
        email: formData.email,
        password: formData.password,
      });

      localStorage.setItem("TOKEN", response.data.encodedToken);
      

      setAuth((user) => ({
        ...user,
        isAuthenticated: true,
        token: response.data.encodedToken,
      }));

      navigate("/");
    } catch (errors) {
      console.log(errors);
    }
  };

  
  return (
    <div className="login-container">
      <h1 className="login-title">LOGIN</h1>
      <form className="display-flex-column">
        <input
          type="email"
          className="form-field"
          placeholder="Enter your email here"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <input
          type="password"
          className="form-field"
          placeholder="Enter your password here"
          required
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
        <button className="login-btn" onClick={e=>{
            e.preventDefault();
            loginHandler();
        }}>
          LOGIN
        </button>
        <p>
          Not registered yet?<Link to="/signup" className="signup-link">Create your account</Link>
        </p>
      </form>
    </div>
  );
};

export { Login };
