import React from "react";
import "../css/tabcontent.css";
import ExternalLink from "./ExternalLink";

const ProgramsTab = ({ currTab }) => {
  if (currTab === 1) {
    return (
      <div className="TabContent">
        <p className="Desc"> Are you looking for <b>programs</b> that offer free food and additional necessary resources on Cornell’s campus and in Ithaca overall? Check out the programs below!</p>

        <div className="Entry">
          <div className="Text">
            <h3> Loaves And Fishes Of Tompkins County <a href="https://loaves.org/" > <ExternalLink /></a></h3>
            <p>"Loaves and Fishes of Tompkins County provides a place for free meals, hospitality, companionship and advocacy for those in need, regardless of their faith, beliefs, or circumstances." The organization serves approximately 140 meals daily and 2,700 meals monthly. </p>
          </div>
          <div className="Image">
            <img src="loavesAndFishes.png" alt="loaves and fishes logo" />
          </div>
        </div>


        <div className="Entry">
          <div className="Text">
            <h3> Ithaca Kitchen Cupboard <a href="https://www.facebook.com/ithacakitchencupboard/" > <ExternalLink /></a></h3>
            <p>Ithaca Kitchen Cupboard Food Pantry is dedicated to providing both emergency and supplementary food to Ithacan Citizens. The organization provides 3 days of meals daily to local families in need. The organization distributes food from 1-3 pm on Fridays, on the third week of every month.  </p>
          </div>
          <div className="Image">
            <img src="ithacaKitchenCupboard.png" alt="loaves and fishes logo" />
          </div>
        </div>

        <div className="Entry">
          <div className="Text">
            <h3> The Cornell Food Pantry<a href="https://scl.cornell.edu/residential-life/dining/about-dining/food-security/cornell-food-pantry" > <ExternalLink /></a></h3>
            <p>"Ithaca Kitchen Cupboard Food Pantry is dedicated to providing both emergency and supplementary food to Ithacan Citizens. The organization provides 3 days of meals daily to local families in need. The organization distributes food from 1-3 pm on Fridays, on the third week of every month.  </p>
          </div>
          <div className="Image">
            <img src="cornellFoodPantry.jpeg" alt="loaves and fishes logo" />
          </div>
        </div>


        <div className="Entry">
          <div className="Text">
            <h3> Tompkins Community Action <a href="https://tcaction.org/" > <ExternalLink /></a></h3>
            <p>"Tompkins Community Action is a non-profit Community Action organization, that strives to help people overcome poverty through comprehensive programming. The organization collaborates with individuals/lorganizations to provide Housing Services, Energy Services and other programs to low-income individuals in Tompkins County. </p>
          </div>
          <div className="Image">
            <img src="tompkinsCommunityAction.png" alt="loaves and fishes logo" />
          </div>
        </div>

      </div>
    );
  }

};

export default ProgramsTab;
