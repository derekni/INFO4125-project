import React, { useState } from "react";
import "../css/navbar.css";
import UserIcon from "./UserIcon";

const Navbar = () => {
  const [loggedIn, setLoggedIn] = useState(() => {
    const saved = localStorage.getItem("loggedIn");
    const initialValue = JSON.parse(saved);
    return initialValue || false;
  });

  return (
    <div className="Title" style={{ height: 120 }}>
      <a
        href="/"
        style={{
          display: "flex",
          flexDirection: "row",
          verticalAlign: "center",
        }}
        className="Name"
      >
        <img
          src="food.png"
          style={{ height: 60, paddingRight: "15px" }}
          alt="food logo"
        ></img>
        <div
          style={{
            position: "relative",
            top: "50%",
            transform: "translateY(25%)",
          }}
        >
          Cornell Free Food
        </div>
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
            <UserIcon />
          </a>
        )}
      </div>
    </div>
  );
};

export default Navbar;
