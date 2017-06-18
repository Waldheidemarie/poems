import React from "react";

class Poem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      text: "your art goes here",
      author: "",
      showPoem: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;
    const id = event.target.id;

    this.setState(() => {
      return {
        [id]: value
      };
    });
  }

  handleSubmit() {
    this.setState(() => {
      return {
        showPoem: !this.state.showPoem
      };
    });
  }

  handleReset() {
    this.setState(() => {
      return {
        title: "",
        text: "your art goes here",
        author: "",
        showPoem: false
      };
    });
  }

  render() {
    const { title, text, author, showPoem } = this.state;

    return (
      <div>

        {!showPoem &&
          <form onSubmit={this.handleSubmit} id="poem-form" className="form">
            <label>
              Title :
            </label>
            <input
              id="title"
              type="text"
              placeholder="what is it called?"
              value={title}
              autoComplete="off"
              className="poem-title"
              onChange={this.handleChange}
            />
            <label>
              Poem :
            </label>
            <textarea
              id="text"
              form="poem-form"
              value={text}
              autoComplete="off"
              className="poem-text"
              onChange={this.handleChange}
            />
            <label>
              Author :
            </label>
            <input
              id="author"
              type="text"
              placeholder="who are you?"
              value={author}
              autoComplete="off"
              className="poem-author"
              onChange={this.handleChange}
            />
            <button
              className="button"
              type="submit"
              onSubmit={this.handleSubmit}
            >
              Submit
            </button>
          </form>}

        {showPoem &&
          <div>
            <p className="poem">
              <h1>{title}</h1>
              <p>{text}</p>
              by {author}
            </p>
            <div className="poemOptions">
              <button className="button" onClick={this.handleReset}>
                Reset
              </button>
              <button className="button" onClick={this.handleSubmit}>
                Edit
              </button>
            </div>
          </div>}

      </div>
    );
  }
}

export default Poem;
