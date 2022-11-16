import React from "react";
import "./navbar.css";

const Navbar = ({ loggedIn }) => {
  return (
    <div className="Title" style={{ height: 120 }}>
      <a href="/">
        <img src="food.png" style={{ height: 60 }} alt="food logo"></img>
      </a>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <a href="/" className="Option">
          Home
        </a>
        <a href="/resources" className="Option">
          Resources
        </a>
        {!loggedIn && (
          <a href="/login" className="Login">
            Login
          </a>
        )}
        {loggedIn && (
          <a href="/profile" className="Option">
            Profile
          </a>
        )}
      </div>
    </div>
    // <nav>
    //   <ul>
    //     <li>
    //       <Link to="/">Home</Link>
    //     </li>
    //     <li>
    //       <Link to="/resources">More Resources</Link>
    //     </li>
    //     <li>
    //       <Link to="/login">Login</Link>
    //     </li>
    //     <li>
    //       <Link to="/profile">Profile</Link>
    //     </li>
    //   </ul>
    // </nav>
  );
};

export default Navbar;
