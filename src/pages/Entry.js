import React from "react";
import ClaimPackage from '../components/ClaimPackage';

const Entry = (props) => (
  <div>
    <h1 className="title is-1">This is the Entry {props.id}</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida,
      risus at dapibus aliquet, elit quam scelerisque tortor, nec accumsan eros
      nulla interdum justo. Pellentesque dignissim, sapien et congue rutrum,
      lorem tortor dapibus turpis, sit amet vestibulum eros mi et odio.
    </p>
    <ClaimPackage id={props.id} />

  </div>
);

export default Entry;