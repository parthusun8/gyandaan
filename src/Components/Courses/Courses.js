import React, { useState } from "react";
import "./Courses.css";
import { Link } from "react-router-dom";
import { db } from "../Firebase/firebase";
import { doc, getDoc } from "firebase/firestore";

function Courses() {
  return (
    <div className="courses">
      <Navbar />
      <div className="search-bar">
        <span>COURSES</span>
        <input type="text" name="" id="search" autoComplete="off" />
      </div>
      <div className="courses-container">
        <Course />
        <Course />
        <Course />
      </div>
    </div>
  );
}

export default Courses;

function Navbar() {
  const [firstName, setFirstName] = useState("");
  async function getData_from_doc_name() {
    const docRef = doc(db, "users", "tloB1vs4wETapr09aqOY");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      //   console.log("Document data:", docSnap.data());
      const userDetails = docSnap.data();
      setFirstName(userDetails.firstName);
      // console.log(firstName);
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  }
  getData_from_doc_name();
  return (
    <div className="nav">
      <h1>GyaanDaan</h1>
      <div className="options">
        <Link to={"/student"}>
          <button className="btn">
            {firstName ? firstName.toUpperCase() : "PROFILE"}
          </button>
        </Link>
        <button className="btn">HISTORY</button>
        <Link to={"/dashboard"}>
          <button className="btn">MYCOURSES</button>
        </Link>
      </div>
    </div>
  );
}

function Course() {
  return (
    <div className="container">
      <div className="course">
        <span>NAME</span>
        <img src="https://img.icons8.com/ios-glyphs/30/000000/star--v1.png" />
      </div>
      <div className="course">
        <span>NAME</span>
        <img src="https://img.icons8.com/ios-glyphs/30/000000/star--v1.png" />
      </div>
      <div className="course">
        <span>NAME</span>
        <img src="https://img.icons8.com/ios-glyphs/30/000000/star--v1.png" />
      </div>
      <div className="course">
        <span>NAME</span>
        <img src="https://img.icons8.com/ios-glyphs/30/000000/star--v1.png" />
      </div>
    </div>
  );
}
