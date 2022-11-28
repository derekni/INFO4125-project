import React from "react";
import EntryBox from "../components/EntryBox.js";
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
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <FoodPosting
        name="Chipotle Burrito"
        date="October 25, 2022"
        time="6:00pm"
        location="Gates Hall Room G01"
        numAvailable="5"
      />
    </div>
  </div>
);

export default Home;
