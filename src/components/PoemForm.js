import React from "react";

class PoemForm extends React.Component {
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} id="poem-form" className="form">
          <label>
            Title :{" "}
          </label>
          <input
            id="title"
            type="text"
            // value=""
            autoComplete="off"
            className="poem-title"
          />
          <label>
            Poem :{" "}
          </label>
          <textarea
            id="text"
            form="poem-form"
            // value=""
            autoComplete="off"
            className="poem-text"
          />
          <label>
            Author :{" "}
          </label>
          <input
            id="author"
            type="text"
            // value=""
            autoComplete="off"
            className="poem-author"
          />
          <button className="button" type="submit">Submit</button>
        </form>

      </div>
    );
  }
}

export default PoemForm;
