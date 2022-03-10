import React from "react";
import "./navbar.css";

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

export default Navbar;
