import React, { Component } from 'react';
import './App.css';
import Student from './Student/Student';

class App extends Component {
  state = {
    students: [
      { id: 1, name: 'John', location: 'Hyderabad', age: 14 },
      { id: 2, name: 'Jane', location: 'Bengaluru', age: 15 },
      { id: 3, name: 'Antony', location: 'Chennai', age: 11 },
    ],
    showStudents: true
  }

  nameChangeHandler = (event, id) => {
    const studentIndex = this.state.students.findIndex(p => {
      return p.id === id
    })
    const student = { ...this.state.students[studentIndex] }
    student.name = event.target.value;
    const students = [...this.state.students];
    students[studentIndex] = student;

    this.setState({
      students: students
    })
  }

  deleteStudentHandler = (studentIndex) => {
    const newSdtList = [...this.state.students];
    newSdtList.splice(studentIndex, 1);
    this.setState({
      students: newSdtList
    })
  }

  toggleData = () => {
    const tglData = this.state.showStudents;
    this.setState({
      showStudents: !tglData
    })
  }

  render() {
    let sdtList = null;
    if (this.state.showStudents) {
      sdtList = (
        <div>
          {
            this.state.students.map((student, index) => {
              return (
                <Student
                  deleteItem={() => this.deleteStudentHandler(index)}
                  id={student.id}
                  name={student.name}
                  age={student.age}
                  location={student.location}
                  key={student.id}
                  nameChange={(event) => this.nameChangeHandler(event, student.id)} />
              )
            })
          }
        </div>
      )
    } else {
      sdtList = (
        null
      )
    }
    return (
      <div>
        <div>
          <button className="toggleBtn" onClick={() => this.toggleData()}>Toggle</button>
        </div>
        <div>
          {sdtList}
        </div>
      </div>
    );
  };
};
export default App;
