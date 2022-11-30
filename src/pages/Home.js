import React from "react";
import FoodPosting from "../components/FoodPosting.js";
import PlusButton from "../components/PlusButton.js";
import SortIcon from "../components/SortIcon.js";
import "../css/home.css";

const Home = () => (
  <div className="Container">
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        height: "24px",
      }}
    >
      <a
        href="/create"
        className="Button"
        style={{
          justifyContent: "space-between",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          width: "128px",
        }}
      >
        Add Post
        <PlusButton />
      </a>
      <a
        href="/"
        className="Button"
        style={{
          justifyContent: "space-between",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          width: "84px",
        }}
      >
        Sort <SortIcon />
      </a>
    </div>
    <a className="noUnderline" href="/entry1">
      <div
        style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <FoodPosting
          name="Chipotle Burrito"
          imageName="chipotle_large.png"
          date="October 25, 2022"
          time="6:00pm"
          location="Gates Hall Room G01"
          numAvailable="5"
        />
      </div>
    </a>

    <a className="noUnderline" href="/entry2">
      <div
        style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <FoodPosting
          name="Japchae"
          imageName="japchae.jpeg"
          date="October 25, 2022"
          time="6:30pm"
          location="Upson MAE Lounge"
          numAvailable="1"
        />
      </div>
    </a>

    <a className="noUnderline" href="/entry3">
      <div
        style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <FoodPosting
          name="Panera Chicken Salad Sandwich"
          imageName="panera.jpeg"
          date="October 25, 2022"
          time="3:00pm"
          location="Duffield Atrium near workday table"
          numAvailable="4"
        />
      </div>
    </a>

    <a className="noUnderline" href="/entry4">
      <div
        style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <FoodPosting
          name="Moe's Tacos and Nachos"
          imageName="moes.jpeg"
          date="October 25, 2022"
          time="4:00pm"
          location="Gates Hall B12"
          numAvailable="6"
        />
      </div>
    </a>
  </div>
);

export default Home;
