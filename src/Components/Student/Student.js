import React, { useState } from "react";
import "./Student.css";
import { db } from "../Firebase/firebase";
import { collection, addDoc, doc, getDoc } from "firebase/firestore";

function Student() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [username, setUsername] = useState("");
  const [teacher, setTeacher] = useState(false);

  async function getData_from_doc_name() {
    const docRef = doc(db, "users", "tloB1vs4wETapr09aqOY");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      //   console.log("Document data:", docSnap.data());
      const userDetails = docSnap.data();
      setEmail(userDetails.email);
      setTeacher(userDetails.isTeacher);
      setFirstName(userDetails.firstName);
      setlastName(userDetails.lastName);
      setUsername(userDetails.username);
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  }
  getData_from_doc_name();

  return (
    <div>
      <ul>
        <li>
          <span>Fisrt Name</span>
          <span>{firstName}</span>
        </li>
        <li>
          <span>Last Name</span>
          <span>{lastName}</span>
        </li>
        <li>
          <span>Email</span>
          <span>{email}</span>
        </li>
        <li>
          <span>Username</span>
          <span>{username}</span>
        </li>
        <li>
          <span>Role</span>
          <span>{teacher ? "Teacher" : "Student"}</span>
        </li>
      </ul>
    </div>
  );
}

export default Student;
