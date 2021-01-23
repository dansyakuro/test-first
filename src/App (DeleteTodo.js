import React, { Component } from 'react';
import './App.css';
import "./Box.css";

class App extends Component {
  state = {
    todoList : [],
    inputValue : ""
  }

  changeHandler = event => {
    const { value } = event.target
    this.setState ({
      inputValue : value
    })
  }

  clickHandler = (event, value) => {
    event.preventDefault();
    this.setState ({
      todoList : [...this.state.todoList, value],
      inputValue : ""
    })
  }

  clickDeleteHandler = valueList => {
    //filter untuk menghapus dalam array jika kondisi true
    const newTodoList = this.state.todoList.filter(list => {
      return list !== valueList;
    })

    this.setState({
      todoList : newTodoList
    })
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
        <label>Todo List</label>
        <input 
          type="text"
          value={this.state.inputValue}
          name="inputValue"
          onChange={this.changeHandler}
          className="custom-input"
        />
        <button 
          className="custom-button"
          onClick={e => this.clickHandler(e, this.state.inputValue)}
        > Add Todo List</button>
          <div className="box-container">
            {this.state.todoList.map((list, index) => {
              return (
              <div key={index + list} className="box-content">
                <p>{list}</p>
                <button onClick={() => this.clickDeleteHandler(list)}>X</button>
              </div>
              )
            })}
          </div>
        </header>
      </div>
    );
  }
}

export default App;
