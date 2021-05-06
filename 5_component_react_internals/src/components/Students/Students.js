import React from 'react';
import Student from './Student/Student';

const Students = (props) => props.studentState.map((sdt, index) => {
    return (
        <Student
            sdtDtBgClr={props.sdtDtBgClr}
            id={sdt.id}
            name={sdt.name}
            location={sdt.location}
            key={sdt.id}
            chngItem={(event) => props.studentNameChangeHanlder(event, sdt.id)}
            delItem={() => props.deleteStudentHandler(index)}
        />
    )
})

export default Students;