import React from "react";
import "../pages/design.css";

const EntryMiddle = ({ name, count, imageName, description, location, contains }) => {

  return (
    <div>
      <h1>{name} ({count})</h1>
      <img
        className="SpacedImageBorder"
        src={imageName}
        alt={imageName}
      />
      <p>
        {description}
      </p>
      <br />
      <p>
        <b>Location: </b> {location}
      </p>
      <br />
      <p>
        <b>Contains: </b> {contains}
      </p>
      <br />
      <br />
    </div>
  );

}

export default EntryMiddle;