import React from "react";
import ClaimPackage from '../components/ClaimPackage';
import "./design.css";
import LeftArrow from "../components/LeftArrow.js"

const Entry = (props) => (
  <div className="EntryContent">

    <div className="left">
      <LeftArrow />
      <div className="OtherItem">
        <img className="ImageBorder" src="chipotle.png" alt="chipotle" />
        <h4> Chipotle Bowls (2)</h4>
        <div className="FoodDesc">
          <p > Fast-food chain offering Mexican fare, including design-your-own burritos, tacos & bowls. </p>
          <h5> Location: Gates Hall 114</h5>

        </div>
      </div>

      <div className="OtherItem">
        <img className="ImageBorder" src="chipotle.png" alt="chipotle" />
        <h4> Chipotle Bowls (2)</h4>
        <div className="FoodDesc">
          <p > Fast-food chain offering Mexican fare, including design-your-own burritos, tacos & bowls. </p>
          <h5> Location: Gates Hall 114</h5>

        </div>
      </div>

    </div>

    <div className="middle">
      <h1 >Chipotle Burritos (3)</h1>
      <img className="SpacedImageBorder" src="chipotle_large.png" alt="chipotle large" />
      <p>
        This is a burrito containing lettuce, meat (steak), and sour cream.
      </p>
      <br />
      <p>
        <b>Location: </b> Gates Hall 114
      </p>
      <br />
      <p>
        <b>Contains: </b> Dairy, eggs, soy, and wheat
      </p>
      <br />
      <br />
      <div className="Claim">
        <p> <b> Time Left: 1 hr</b></p>
        <a className="ClaimButton" href="\">CLAIM</a>

      </div>



    </div>

    <div className="right">
      <div className="ProfileBox">
        <h2> Distributed by:</h2>
        <img className="ImageBorder" src="mariana_lowe.jpeg" alt="Mariana Lowe" />
        <h3> Mariana Lowe</h3>
        <h4> ACSU President</h4>
        <p> 25 successful hand-offs!</p>
        <a className="KudosButton" href="\">Give Kudos!</a>
      </div>


    </div>


  </div>
);

export default Entry;