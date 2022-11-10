import React from "react";

const EntryBox = (props) => {
  var path = '/entry?id=' + props.id;
  return (
    <div><a href={path}> Entry {props.id}</a></div>

  )
};

export default EntryBox;