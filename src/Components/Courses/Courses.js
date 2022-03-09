import React from "react";
import "./Courses.css";
import { Link } from "react-router-dom";

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
      </div>
    </div>
  );
}

export default Courses;

function Navbar() {
  return (
    <div className="nav">
      <h1>GyaanDaan</h1>
      <div className="options">
        <Link to={"/student"}>
          <button className="btn">PROFILE</button>
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
