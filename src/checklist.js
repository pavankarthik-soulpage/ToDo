import React from "react";
import App from "./App";
class checklist extends React.Component {
  constructor(props) {
    super(props); // Included the constructor

    this.state = {
      userInput: "",
      list: [],
    };
  }

  render() {
    return (
      <div className="To - Do - List">
        <input
          onChange={(e) => this.changeUserInput(e.target.value)}
          placeholder="Enter a task to do"
          value={this.state.userInput}
          type="text"
        />
        <button type="submit">Add</button>
      </div>
    );
  }
}
