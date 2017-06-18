import React from "react";
import PoemForm from "../components/PoemForm";
import PoemView from "../components/PoemView";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      poem: {
        title: "",
        text: "",
        author: ""
      }
    };
  }

  render() {
    const poem = this.state.poem;
    const { title, text, author } = this.state.poem;

    return (
      <div>
        <h1 className="title">Express your poetic side</h1>

        {!poem.title && <PoemForm />}

        {poem.title && <PoemView title={title} text={text} author={author} />}
      </div>
    );
  }
}

export default Home;
