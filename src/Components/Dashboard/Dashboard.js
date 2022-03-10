import React from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div>
      <Navbar />
      <div className="dashboard-container">
        <Banner />
      </div>
    </div>
  );
}

export default Dashboard;

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

function Banner() {
  return (
    <div className="banner">
      <span>Math/Calculus</span>
      <div className="top-right">
        <img src="https://img.icons8.com/ios-glyphs/30/000000/like--v1.png" />
        <img src="https://img.icons8.com/ios-glyphs/30/000000/info--v1.png" />
      </div>
      <div className="bottom-right">
        <img src="https://img.icons8.com/ios-glyphs/30/000000/user--v1.png" />
        <span>Total Students:600</span>
      </div>
    </div>
  );
}
