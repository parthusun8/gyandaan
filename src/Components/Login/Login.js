import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login">
      <h1>LogIn</h1>
      <form>
        <input type="email" placeholder="Email Id" />
        <input type="password" placeholder="Password" />
      </form>

      <Link to={"/courses"}>
        <button>Login</button>
      </Link>
      <Link to={"/signup"}>
        <span>Sign up instead?</span>
      </Link>
    </div>
  );
}

export default Login;
