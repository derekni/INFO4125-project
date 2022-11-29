import React, { useState } from 'react';
import "./design.css";
import EventsTab from "../components/EventsTab.js";
import ProgramsTab from "../components/ProgramsTab.js";
import ArticlesTab from "../components/ArticlesTab.js";
import GroceriesTab from "../components/GroceriesTab.js";



function Resources() {

  const [count, setCount] = useState(1);

  return (
    <div className="Resources">
      <h1 > Resources </h1>

      <div class="tab">
        {/* <button class={count === 0 ? "tablinks active" : "tablinks"} onClick={() => setCount(0)} >Events</button> */}
        <button class={count === 1 ? "tablinks active" : "tablinks"} onClick={() => setCount(1)}>Programs</button>
        <button class={count === 2 ? "tablinks active" : "tablinks"} onClick={() => setCount(2)}>Articles</button>
        <button class={count === 3 ? "tablinks active" : "tablinks"} onClick={() => setCount(3)}>Groceries</button>
      </div>

      <EventsTab currTab={count}> </EventsTab>
      <ProgramsTab currTab={count}> </ProgramsTab>
      <ArticlesTab currTab={count}> </ArticlesTab>
      <GroceriesTab currTab={count}> </GroceriesTab>


    </div >
  );

}
export default Resources;