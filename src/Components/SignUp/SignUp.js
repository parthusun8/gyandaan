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
  console.log(db);
  let navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function getData_from_doc_name() {
    const docRef = doc(db, "users", "ThvOFqMVFYcPEUTRjnCu");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  }
  // getData_from_doc_name();
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
    try {
      const newDoc = await addDoc(usersCollection, data);
      console.log(newDoc);
    } catch (error) {
      console.log(error);
    }
  }
  addNewDoc();

  const register = async (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        //SIGNED IN
        const user = userCredential.user;
        if (user) {
          console.log("Logged In hai");
          // getData_from_doc_name();
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
