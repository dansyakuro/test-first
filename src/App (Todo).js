import React, { Component } from 'react';
import './App.css';
import "./Box.css";

class App extends Component {
  state = {
    todoList : []
  }

  changeHandler = event => {
    const { value } = event.target
    this.setState ({
      todoList : value
    })
  }

  clickHandler = event => {
    //agar tidak terpengaruh aksi dari event bawaan
    event.preventDefault();
    console.log("Bisa Jalan")
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
        <label>Todo List</label>
        <input 
          type="text"
          value={this.state.todoList}
          name="todoList"
          onChange={this.changeHandler}
          className="custom-input"
        />
        <button 
          className="custom-button"
          onClick={this.clickHandler}
        >Add Todo List</button>
          <h6> {this.state.todoList} </h6>
          <div className="box-container">
            Box
          </div>
        </header>
      </div>
    );
  }
}

export default App;
