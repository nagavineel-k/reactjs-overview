import React from 'react';
import '../Employee/Employee.css'

const Employee = (props) => {
    return (
        <div style={{ color: 'red' }}>
            <div onClick={props.click}>
                Employee Name        : {props.employeeName} <br></br>
                Employee Age         : {props.employeeAge} <br></br>
                Employee ID          : {props.employeeId} <br></br>
                Employee Designation : {props.employeeDesignation} <br></br>
                Employee WorkLocation: {props.children} <br></br>
            </div>
            <div>
                <input className="inputBackground" placeholder={props.employeeName} type="text" onChange={props.changed} />
            </div>
        </div>
    )
};

export default Employee;