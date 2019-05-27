import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {toDoItem: "", toDoList: []}
  }

  handleSubmit(e){
    e.preventDefault(e)
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input type="text" placeholder="Enter a Todo"></input>
          <input type="submit" value="Enter Todo"></input>
        </form>
      </div>
    );
  }
}

export default App;
