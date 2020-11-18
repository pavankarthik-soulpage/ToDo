import "./App.css";
import React, { Component } from "react";

class CheckList extends Component {
  constructor(props) {
    super(props); // Included the constructor

    this.state = {
      userInput: "",
      list: [],
    };
  }
  // Getting task from user
  changeUserInput(input) {
    this.setState({
      userInput: input,
      key: Date.now(),
    });
  }
  // Adding task to list
  addToList(input) {
    var listArray = this.state.list;
    listArray.push(input);
    this.setState({
      list: listArray,
      userInput: "",
      key: "",
    });
  }
  addTo(input) {
    var listArray = this.state.list;
    console.log(this.state.list);
  }

  /* removeItem=(props)=>{
    const { todoList } = this.state;
    todoList.splice(props, 1);
    this.setState({
        todoList,
    });
    console.log(this.state.todoList)
};
 */

  remove(props) {
    this.setState({ list: this.state.list.splice(props, 1) });
    console.log(this.state.list);
    this.setState({ list: this.state.list });
  }
  render() {
    //console.log(this.state);
    return (
      <div className="App">
        <header>
          <h1> To - Do List</h1>
        </header>
        <input
          /* onKeyPress={(e) => {
            console.log(e.target.value);
            if (e.key === "Enter") {
              this.addToList();
            }
          }} */
          onChange={(e) => this.changeUserInput(e.target.value)}
          placeholder="Enter a task to do"
          value={this.state.userInput}
          type="text"
        />
        <h3>
          <button onClick={(f) => this.addToList(this.state.userInput)}>
            Add Task
          </button>
          <button onClick={(g) => this.addTo(this.state.userInput)}>
            List
          </button>
          <ul>
            {this.state.list.map((val, index) => (
              <li type="1" key={index}>
                {val}

                <button id={this.state.key} onClick={() => this.remove(index)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </h3>
      </div>
    );
  }
}
export default CheckList;
