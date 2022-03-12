import React, { useState } from "react";
import "./signup.css";
import { Link } from "react-router-dom";
import { auth } from "../Firebase/firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
// import { createUserWithEmailAndPassword } from "firebase/auth";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        //SIGNED IN
        const user = userCredential.user;
        if (user) {
          alert("Registered");
        }
      })
      .catch((error) => {
        const errorcode = error.code;
        const errorMessage = error.message;
        alert(errorcode, errorMessage);
      });
  };

  return (
    <div className="signup">
      <h1>SignUp</h1>
      <form>
        <input
          type="text"
          name=""
          id=""
          placeholder="First Name"
          autoComplete="off"
          required
        />
        <input
          type="text"
          name=""
          id=""
          placeholder="Last Name"
          autoComplete="off"
          required
        />
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
        <label htmlFor="roles">SELECT ROLE</label>
        <select name="roles" id="roles">
          <option value="" selected="selected">
            -- Select One --
          </option>
          <option value="teacher">Teacher</option>
          <option value="student">Student</option>
        </select>
        <button onClick={register}>SignUp</button>
      </form>

      <Link to={"/login"}>
        <span>Log In instead?</span>
      </Link>
    </div>
  );
}

export default SignUp;
