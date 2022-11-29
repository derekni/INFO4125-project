import React from "react";

const GroceriesTab = ({ currTab }) => {
  if (currTab === 3) {
    return (
      <div>
        <p> this is Groceries tab {currTab}</p>
      </div>
    );
  }

};

export default GroceriesTab;
