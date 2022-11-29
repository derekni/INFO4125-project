import React from "react";

const ArticlesTab = ({ currTab }) => {
  if (currTab === 2) {
    return (
      <div>
        <p> this is articles tab {currTab}</p>
      </div>
    );
  }

};

export default ArticlesTab;
