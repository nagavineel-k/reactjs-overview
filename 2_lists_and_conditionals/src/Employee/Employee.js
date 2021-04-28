import React from 'react';
import '../Employee/Employee.css';

const Employee = (props) => {
    return (
        <div style={{ color: 'red' }} onClick={props.click}>
            <div>
                Employee Name        : {props.employeeName} <br></br>
                Employee Age         : {props.employeeAge} <br></br>
                Employee ID          : {props.employeeId} <br></br>
                Employee Designation : {props.employeeDesignation} <br></br>
                Employee WorkLocation: {props.children} <br></br>
            </div>
            <div>
                <input className="inputBackground" type="text" placeholder={props.employeeName} onChange={props.changed} />
            </div>
        </div>
    );
};

export default Employee;