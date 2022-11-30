import React, { useState } from "react";
import ClaimPackage from "../components/ClaimPackage";
import LeftArrow from "../components/LeftArrow.js";
import EntryRight from "../components/EntryRight.js";
import EntryMiddle from "../components/EntryMiddle.js";
import "./design.css";

const Entry = ({ num }) => {
  const [claiming, setClaiming] = useState(false);

  var middle;
  var right;
  switch (num) {
    case "1":
      middle = (
        <EntryMiddle
          name="Chipotle Burritos"
          count="3"
          imageName="chipotle_large.png"
          description="This is a burrito containing lettuce, meat (steak), and sour cream."
          location="Gates Hall 114"
          contains="Dairy, eggs, soy, and wheat"
        />
      );
      right = (<EntryRight
        name="Mariana Lowe"
        imageName="mariana_lowe.jpeg"
        title="ACSU President"
        numberHandoffs="25"
      />);
      break;
    case "2":
      middle = (<EntryMiddle
        name="Japchae"
        count="1"
        imageName="japchae.jpeg"
        description="This is japchae (korean glass noodles) with stirfried kimchi from Green Castle."
        location="Upson MAE Lounge"
        contains="Eggs, soy, shellfish"
      />);
      right = (<EntryRight
        name="Mariana Lowe"
        imageName="mariana_lowe.jpeg"
        title="ACSU President"
        numberHandoffs="25"
      />);
      break;
    case "3":
      middle = (<EntryMiddle
        name="Panera Chicken Salad Sandwich"
        count="4"
        imageName="panera.jpeg"
        description="This is a sandwich containing lettuce, chicken, and mayonnaise."
        location="Duffield Atrium near workday table"
        contains="Dairy, eggs, soy, and wheat"
      />);
      right = (<EntryRight
        name="Mariana Lowe"
        imageName="mariana_lowe.jpeg"
        title="ACSU President"
        numberHandoffs="25"
      />);
      break;
    case "4":
      middle = (<EntryMiddle
        name="Moe's Tacos"
        count="6"
        imageName="moes.jpeg"
        description="Beef and chicken tacos"
        location="Gates Hall B12"
        contains="Wheat and eggs"
      />);
      right = (<EntryRight
        name="Chase Padilla"
        imageName="chase_padilla.png"
        title="Student"
        numberHandoffs="0"
      />);
      break;
    default:
      middle = (<EntryMiddle
        name="Chipotle Burritos"
        count="3"
        imageName="chipotle_large.png"
        description="This is a burrito containing lettuce, meat (steak), and sour cream."
        location="Gates Hall 114"
        contains="Dairy, eggs, soy, and wheat"
      />);
      right = (<EntryRight
        name="Mariana Lowe"
        imageName="mariana_lowe.jpeg"
        title="ACSU President"
        numberHandoffs="25"
      />);
  }





  return (
    <div>
      <div className="EntryContent">
        <div className="left">
          <a href="/">
            {" "}
            <LeftArrow />{" "}
          </a>

          <a className="noUnderline" href="\entry3">
            <div className="OtherItem">
              <img className="ImageBorder" src="panera.jpeg" alt="panera" />
              <h4> Panera Chicken Salad Sandwich (2)</h4>
              <div className="FoodDesc">
                <p>
                  {" "}
                  This is a sandwich containing lettuce, chicken, and mayonnaise.{" "}
                </p>
                <h5> Location: Duffield Atrium near workday table</h5>
              </div>
            </div>
          </a>

          <a className="noUnderline" href="\entry2">
            <div className="OtherItem">
              <img className="ImageBorder" src="japchae.jpeg" alt="japchae" />
              <h4> Japchae (1)</h4>
              <div className="FoodDesc">
                <p>
                  {" "}
                  This is japchae (korean glass noodles) with stirfried kimchi from Green Castle.{" "}
                </p>
                <h5> Location: Upson MAE Lounge</h5>
              </div>
            </div>
          </a>
        </div>


        <div className="middle">
          {middle}
          <div className="Claim">
            <p>
              {" "}
              <b> Time Left: 1 hr</b>
            </p>
            <button className="ClaimButton" onClick={() => setClaiming(true)}>
              CLAIM
            </button>
          </div>
        </div>

        <div className="right">{right}</div>
      </div>

      <ClaimPackage trigger={claiming} cancel={() => setClaiming(false)} />
    </div >
  );
};

export default Entry;
