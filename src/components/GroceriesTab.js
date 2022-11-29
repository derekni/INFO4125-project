import React from "react";
import "../css/tabcontent.css";
import ExternalLink from "./ExternalLink";

const GroceriesTab = ({ currTab }) => {
  if (currTab === 3) {
    return (
      <div className="TabContent">
        <p className="Desc"> Searching for discount/ accessible <b>grocery stores</b> on Cornell’s campus and in the Ithaca area? Check out the local grocery stores below.</p>

        <div className="Entry">
          <div className="Text">
            <h3> Anabel's Grocery <a href="https://www.anabelsgrocery.org/" > <ExternalLink /></a></h3>
            <p> <b>Location: </b> Anabel Taylor Hall Room 127, 548 College Ave, Ithaca, NY 14853</p>
            <br />
            <p>Anabel's Grocery is a student-run grocery store on dedicated to providing fresh, nutritious, and affordable food to all Cornell students. </p>
          </div>
          <div className="Image">
            <img src="anabels.png" alt="anabels" />
          </div>
        </div>

        <div className="Entry">
          <div className="Text">
            <h3> Aldi <a href="https://www.aldi.us/?utm_source=google&utm_medium=sem&utm_campaign=brand&utm_term=aldi&gclid=Cj0KCQiA1ZGcBhCoARIsAGQ0kkrWcMhGy1bF0SeWl5fBRrrpecZSii0xzC7XjPwbg_6K7yrDohNvzakaAuh6EALw_wcB&gclsrc=aw.ds" > <ExternalLink /></a></h3>
            <p> <b>Location: </b>  505 3rd St, Ithaca, NY 14850</p>
            <br />
            <p>Aldi is a Grocery Chain based in Essen, Germany that is dedicated to providing customers with quality food at everyday low prices. </p>
          </div>
          <div className="Image">
            <img src="aldi.png" alt="aldi" />
          </div>
        </div>

        <div className="Entry">
          <div className="Text">
            <h3> Maines Food & Party Warehouse<a href="https://www.mainesfood.net/" > <ExternalLink /></a></h3>
            <p> <b>Location: </b> 100 Commercial Ave, Ithaca, NY 14850</p>
            <br />
            <p>Maines Food & Party Warehouse is a discount grocery that offers
              that allows you to buy products by the case/ in smaller retail sizes. </p>
          </div>
          <div className="Image">
            <img src="maines.png" alt="maines" />
          </div>
        </div>


        <div className="Entry">
          <div className="Text">
            <h3> Walmart <a href="https://www.walmart.com/store/5240-ithaca-ny" > <ExternalLink /></a></h3>
            <p> <b>Location: </b>  135 Fairgrounds Memorial Pkwy, Ithaca, NY 14850</p>
            <br />
            <p>Walmart is a retail chain located across the United States that offers a variety of goods, including groceries, at an affordable price. </p>
          </div>
          <div className="Image">
            <img src="walmart.png" alt="walmart" />
          </div>
        </div>

      </div>
    );
  }

};

export default GroceriesTab;
