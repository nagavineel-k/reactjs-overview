import React, { Component } from 'react';

import Student from './Student/Student';
import './App.css';

class App extends Component {
  state = {
    students: [
      { id: 1, name: 'John', location: 'Hyderabad', age: 14 },
      { id: 2, name: 'Jane', location: 'Bengaluru', age: 15 },
      { id: 3, name: 'Antony', location: 'Chennai', age: 11 },
    ]
  }

  switchNameHandler = (newName) => {
    this.setState({
      students: [
        { id: 1, name: 'John', location: 'Hyderabad', age: 15 },
        { id: 2, name: newName, location: 'Bengaluru', age: 16 },
        { id: 3, name: 'Antony', location: 'Chennai', age: 12 },
      ]
    })
  }

  nameChangeHandler = (event) => {
    this.setState({
      students: [
        { id: 1, name: 'John', location: 'Hyderabad', age: 15 },
        { id: 2, name: event.target.value, location: 'Bengaluru', age: 16 },
        { id: 3, name: 'Antony', location: 'Chennai', age: 12 },
      ]
    })
  }

  toggleHandler = () => {
    console.log('Toggled')
  }
  render() {
    return (
      <div>
        <h3>HomeCare Schools</h3>

        <div>
          <button onClick={() => this.toggleHandler()} className="toggleBtn">Toggle</button>
        </div>

        <div>
          <Student
            id={this.state.students[0].id}
            name={this.state.students[0].name}
            age={this.state.students[0].age}
            location={this.state.students[0].location} />
          <Student
            switchName={() => this.switchNameHandler('Reba')}
            nameChange={this.nameChangeHandler}
            id={this.state.students[1].id}
            name={this.state.students[1].name}
            age={this.state.students[1].age}
            location={this.state.students[1].location} />
          <Student
            id={this.state.students[2].id}
            name={this.state.students[2].name}
            age={this.state.students[2].age}
            location={this.state.students[2].location} />
        </div>


      </div>
    );
  };
};

export default App;