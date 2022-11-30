import React from "react";
import "../pages/design.css";

const EntryRight = ({ name, imageName, title, numberHandoffs }) => {
  return (
    < div className="ProfileBox" >
      <h2> Distributed by:</h2>
      <img
        className="ImageBorder"
        src="mariana_lowe.jpeg"
        alt="mariana_lowe.jpeg"
      />
      <h3> {name}</h3>
      <h4> {title}</h4>
      <p> {numberHandoffs} successful hand-offs!</p>
      <a className="KudosButton" href="\">
        Give Kudos!
      </a>
    </div >
  );

}


export default EntryRight;