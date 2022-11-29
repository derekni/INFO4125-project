import React from "react";

const EventsTab = ({ currTab }) => {
  if (currTab === 0) {
    return (
      <div>
        <p> this is events tab {currTab}</p>
      </div>
    );
  }

};

export default EventsTab;
