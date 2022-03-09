import React from "react";
import "./signup.css";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div className="signup">
      <h1>SignUp</h1>
      <form>
        <input type="text" name="" id="" placeholder="First Name" />
        <input type="text" name="" id="" placeholder="Last Name" />
        <input type="email" placeholder="Email Id" />
        <input type="password" placeholder="Password" />
        <label htmlFor="roles">SELECT ROLE</label>
        <select name="roles" id="roles">
          <option value="" selected="selected">
            -- Select One --
          </option>
          <option value="teacher">Teacher</option>
          <option value="student">Student</option>
        </select>
      </form>

      <Link to={"/courses"}>
        <button>SignUp</button>
      </Link>
      <Link to={"/login"}>
        <span>Log In instead?</span>
      </Link>
    </div>
  );
}

export default SignUp;
