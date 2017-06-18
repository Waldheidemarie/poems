import React from "react";
import Poem from "./Poem";

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1 className="title">Express your poetic side</h1>
        <Poem />
      </div>
    );
  }
}

export default Home;
