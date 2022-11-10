import React from "react";
import EntryBox from '../components/EntryBox.js';


const Home = () => (
  <div>
    <h1 className="title is-1">This is the Home Page</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida,
      risus at dapibus aliquet, elit quam scelerisque tortor, nec accumsan eros
      nulla interdum justo. Pellentesque dignissim, sapien et congue rutrum,
      lorem tortor dapibus turpis, sit amet vestibulum eros mi et odio.
    </p>
    <h3> <a href="/post/entry/">Create Post</a> </h3>
    <EntryBox id="1" />
    <EntryBox id="2" />
    <EntryBox id="3" />
    <EntryBox id="4" />

  </div>
);

export default Home;