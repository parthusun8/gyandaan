import React, { useState } from "react";
import "./signup.css";
import { Link, useNavigate } from "react-router-dom";
import { auth, db } from "../Firebase/firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { collection, addDoc, doc, getDoc } from "firebase/firestore";

function SignUp() {
  // console.log(db);
  let navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [password, setPassword] = useState("");
  const [teacher, setTeacher] = useState(false);

  const data = {
    firstName: "Parth",
    lastName: "Sundarka",
    age: 20,
    email: "test123@gmail.com",
    isTeacher: false,
    username: "parthhhh123",
  };

  async function addNewDoc() {
    const usersCollection = collection(db, "users");
    data.email = email;
    data.isTeacher = teacher;
    data.firstName = firstName;
    data.lastName = lastName;
    data.username = firstName + "45";
    data.age = "20";
    try {
      const newDoc = await addDoc(usersCollection, data);
      console.log(newDoc);
    } catch (error) {
      console.log(error);
    }
  }
  // addNewDoc();

  const register = async (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        //SIGNED IN
        const user = userCredential.user;
        if (user) {
          // console.log("Logged In hai");
          // getData_from_doc_name();
          addNewDoc();
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
      // console.log("Logged In hai");
      navigate("/courses");
    } else {
      // console.log("Logout");
    }
  });

  return (
    <div className="signup">
      <h1>SignUp</h1>
      <form>
        <input
          type="text"
          autoComplete="off"
          name=""
          id=""
          placeholder="First Name"
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
          required
        />
        <input
          type="text"
          autoComplete="off"
          name=""
          id=""
          placeholder="Last Name"
          onChange={(e) => {
            setlastName(e.target.value);
          }}
          required
        />
        <input
          type="email"
          autoComplete="off"
          placeholder="Email Id"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          autoComplete="off"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
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
