import React, { useState } from "react";
import ClaimPackage from "../components/ClaimPackage";
import LeftArrow from "../components/LeftArrow.js";
import EntryRight from "../components/EntryRight.js";
import EntryMiddle from "../components/EntryMiddle.js";
import "./design.css";


const Entry = ({ num }) => {
  const [claiming, setClaiming] = useState(false);

  var middle;

  switch (num) {
    case "1":
      middle = (<EntryMiddle
        name="Chipotle Burritos"
        count="3"
        imageName="chipotle_large.png"
        description="This is a burrito containing lettuce, meat (steak), and sour cream."
        location="Gates Hall 114"
        contains="Dairy, eggs, soy, and wheat"
      />)
      break;
    case "2":
      middle = (<EntryMiddle
        name="Japchae"
        count="1"
        imageName="japchae.jpeg"
        description="This is japchae (korean glass noodles) with stirfried kimchi from Green Castle."
        location="Upson MAE Lounge"
        contains="Eggs, soy, shellfish"
      />)
      break;
    case "3":
      middle = (<EntryMiddle
        name="Panera Chicken Salad Sandwich"
        count="4"
        imageName="panera.jpeg"
        description="This is a sandwich containing lettuce, chicken, and mayonnaise."
        location="Duffield Atrium near workday table"
        contains="Dairy, eggs, soy, and wheat"
      />)
      break;
    case "4":
      middle = (<EntryMiddle
        name="Moe's Tacos and Nachos"
        count="6"
        imageName="moes.jpeg"
        description="Beef and chicken tacos"
        location="Gates Hall B12"
        contains="Wheat and eggs"
      />)
      break;
    default:
      middle = (<EntryMiddle
        name="Chipotle Burritos"
        count="3"
        imageName="chipotle_large.png"
        description="This is a burrito containing lettuce, meat (steak), and sour cream."
        location="Gates Hall 114"
        contains="Dairy, eggs, soy, and wheat"
      />)
  }


  if (num === "2") {

  }

  var right = (<EntryRight
    name="Mariana Lowe"
    imageName="mariana_lowe.jpeg"
    title="ACSU President"
    numberHandoffs="25"
  />);

  return (
    <div>
      <div className="EntryContent">
        <div className="left">
          <a href="/">
            {" "}
            <LeftArrow />{" "}
          </a>
          <div className="OtherItem">
            <img className="ImageBorder" src="chipotle.png" alt="chipotle" />
            <h4> Chipotle Bowls (2)</h4>
            <div className="FoodDesc">
              <p>
                {" "}
                Fast-food chain offering Mexican fare, including design-your-own
                burritos, tacos & bowls.{" "}
              </p>
              <h5> Location: Gates Hall 114</h5>
            </div>
          </div>

          <div className="OtherItem">
            <img className="ImageBorder" src="chipotle.png" alt="chipotle" />
            <h4> Chipotle Bowls (2)</h4>
            <div className="FoodDesc">
              <p>
                {" "}
                Fast-food chain offering Mexican fare, including design-your-own
                burritos, tacos & bowls.{" "}
              </p>
              <h5> Location: Gates Hall 114</h5>
            </div>
          </div>
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

        <div className="right">
          {right}
        </div>
      </div>

      <ClaimPackage trigger={claiming} cancel={() => setClaiming(false)} />
    </div>
  );
};

export default Entry;
