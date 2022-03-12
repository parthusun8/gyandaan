import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../Firebase/firebase";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        //SIGNED IN
        const user = userCredential.user;
        if (user) {
          console.log(user);
        }
      })
      .catch((error) => {
        const errorcode = error.code;
        const errorMessage = error.message;
        alert(errorcode, errorMessage);
      });
  };

  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("Logged In hai");
      navigate("/courses");
    } else {
      console.log("Logout");
    }
  });
  return (
    <div className="login">
      <h1>LogIn</h1>
      <form>
        <input
          type="email"
          placeholder="Email Id"
          autoComplete="off"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          autoComplete="off"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" onClick={signIn}>
          Login
        </button>
      </form>

      <Link to={"/signup"}>
        <span>Sign up instead?</span>
      </Link>
    </div>
  );
}

export default Login;
