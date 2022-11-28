import React from "react";

const FoodPosting = ({ name, date, time, location, numAvailable }) => {
  return (
    <div
      style={{
        height: "250px",
        width: "500px",
        display: "flex",
        flexDirection: "row",
        marginTop: "30px",
        borderRadius: "10px",
        boxShadow: "2px 2px 5px 5px lightgray",
      }}
    >
      <img
        src="chipotle_large.png"
        alt="Chipotle burrito"
        style={{ height: "auto", width: "200px", borderRadius: "10px" }}
      ></img>
      <div
        style={{
          justifyContent: "space-between",
          display: "flex",
          flexDirection: "column",
          padding: "20px",
          fontSize: 16,
          fontFamily: "sans-serif",
          color: "darkslategray",
        }}
      >
        <div style={{ fontSize: 28, fontWeight: "bold" }}>{name}</div>
        <div style={{ fontWeight: "bold" }}>
          Date: <b style={{ fontWeight: "normal" }}>{date}</b> <br />
        </div>
        <div style={{ fontWeight: "bold" }}>
          Time: <b style={{ fontWeight: "normal" }}>{time}</b> <br />
        </div>
        <div style={{ fontWeight: "bold" }}>
          Location: <b style={{ fontWeight: "normal" }}>{location}</b> <br />
        </div>
        <div style={{ fontWeight: "bold" }}>
          Packages available:{" "}
          <b style={{ fontWeight: "normal" }}>{numAvailable} packages </b>
          <br />
        </div>
      </div>
    </div>
  );
};

export default FoodPosting;
