import React from 'react';
import './App.css';


export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      fullName: "",
      tasks: [],
      color: ""
    }
  }

  HandleSubmit = (event) => {
    const task = {
      fullName: this.state.fullName,
      IsCompleted: false
    }
    event.preventDefault();

    this.setState({
      tasks: [...this.state.tasks, this.state.fullName],
      fullName: ""
    })
  }

  HandleInputChange = (event) => {
    event.preventDefault()

    this.setState({
      [event.target.name]: event.target.value
    })
  }

  ClickCss = () => {
    this.setState({
      color: "red"
    });
  }

  render() {
    const { fullName } = this.state
    return (
      <div className="App">
        the value is :
        <ul>
          {this.state.tasks.map(item => (
            <li onClick={this.ClickCss}> {item}</li>
          ))}
        </ul>
        <form onSubmit={this.HandleSubmit} >
          <input type="text" value={this.state.fullName} name="fullName" onChange={this.HandleInputChange}></input>
          <button>Add</button>
        </form>
      </div>
    );
  }
}
