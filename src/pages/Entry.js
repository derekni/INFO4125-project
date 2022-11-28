import React from "react";
import ClaimPackage from '../components/ClaimPackage';
import "./design.css";

const Entry = (props) => (
  <div className="EntryContent">

    <div className="left">
      <div className="ProfileBox">
        <img className="ImageBorder" src="mariana_lowe.jpeg" alt="Mariana Lowe" />
        <h3> Mariana Lowe</h3>
        <h4> ACSU President</h4>
        <p> 25 successful hand-offs!</p>
        <a className="KudosButton" href="\">Give Kudos!</a>
      </div>
    </div>

    <div className="middle">
      <h1 >Chipotle Burritos (3)</h1>
      <img className="ImageBorder" src="chipotle_large.png" alt="chipotle large" />
      <p>
        This is a burrito containing lettuce, meat (steak), and sour cream.
      </p>
      <p>
        <b>Location: </b> Gates Hall 114
      </p>
      <div class="checkbox-grid">
        <h5> Dietary Restrictions:</h5>
        <ul >
          <li><input type="checkbox" name="wheat" value="value1" /><label className="allergy" for="wheat">Wheat</label></li>
          <li><input type="checkbox" name="shellfish" value="value2" /><label className="allergy" for="shellfish">Shellfish</label></li>
          <li><input type="checkbox" name="eggs" value="value3" /><label className="allergy" for="eggs">Eggs</label></li>
          <li><input type="checkbox" name="treenuts" value="value4" /><label className="allergy" for="treenuts">Tree Nuts</label></li>
          <li><input type="checkbox" name="soy" value="value5" /><label className="allergy" for="soy">Soy</label></li>
          <li><input type="checkbox" name="dairy" value="value6" /><label className="allergy" for="dairy">Dairy</label></li>
          <li><input type="checkbox" name="peanuts" value="value7" /><label className="allergy" for="peanuts">Peanuts</label></li>
          <li><input type="checkbox" name="vegetarian" value="value8" /><label className="allergy" for="vegetarian">Vegetarian</label></li>
          <li><input type="checkbox" name="other" value="value8" /><label className="allergy" for="other">Other</label></li>
        </ul>
        <div class="clr"></div>
      </div>
      <div className="Claim">
        <p> <b> Time Left: 1 hr</b></p>
        <a className="ClaimButton" href="\">CLAIM</a>

      </div>



    </div>

    <div className="right">
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


  </div>
);

export default Entry;