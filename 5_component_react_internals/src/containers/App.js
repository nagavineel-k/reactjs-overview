import React, { Component } from 'react';
import Cockpit from '../components/Cockpit/Cockpit';
import Students from '../components/Students/Students';
import './App.css';

class App extends Component {
  state = {
    students: [
      { id: 1, name: 'John', location: 'Bengaluru' },
      { id: 2, name: 'Jane', location: 'Hyderabad' },
      { id: 3, name: 'Antony', location: 'Chennai' },
      { id: 4, name: 'Roy', location: 'Kolkata' },
    ],
    showStudents: true
  }

  toggleHandler = () => {
    const tgl = this.state.showStudents;
    this.setState({
      showStudents: !tgl
    })
  }

  deleteStudentHandler = (studentIndex) => {
    const sdtDelList = [...this.state.students];
    sdtDelList.splice(studentIndex, 1);
    this.setState({
      students: sdtDelList
    })
  }

  studentNameChangeHanlder = (event, id) => {
    const studentIndex = this.state.students.findIndex(s => {
      return s.id === id;
    });
    const student = { ...this.state.students[studentIndex] }
    student.name = event.target.value;
    const students = [...this.state.students];
    students[studentIndex] = student;
    this.setState({
      students: students
    })
  }

  render() {
    let sdtDtBgClr = [];
    if (this.state.students.length > 2) {
      sdtDtBgClr.push('lightGray');
    } else {
      sdtDtBgClr.push('lightGreen')
    }

    let sdtData = null;
    if (this.state.showStudents) {
      sdtData = (
        <div>
          <Students
            studentState={this.state.students}
            sdtDtBgClr={sdtDtBgClr}
            deleteStudentHandler={this.deleteStudentHandler}
            studentNameChangeHanlder={this.studentNameChangeHanlder} />
        </div>
      )
    }

    return (
      <div>
        <div>
          <h2>HomeCare Schools</h2>
          <div>
            <Cockpit
              toggleHandler={this.toggleHandler}
              showStudents={this.state.showStudents}
            />
          </div>
          <div>
            {sdtData}
          </div>
        </div>
      </div>
    );
  };
};

export default App;
