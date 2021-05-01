import React, { useState } from "react";
import ReactDOM from "react-dom";

import Employee from "./Employee";

const App = () => {
    const [employeeState, setEmployeeState] = useState({
        employees: [
            { id: 1, name: "John", designation: "Teacher" },
            { id: 2, name: "Sara", designation: "Doctor" },
            { id: 3, name: "William", designation: "Driver" }
        ]
    });
    const deleteEmployeeHandler = employeeIndex => {
        const employees = [...employeeState.employees];
        employees.splice(employeeIndex, 1);
        setEmployeeState({
            employees: employees
        });
    };
    return (
        <div>
            <div>
                {employeeState.employees.map((employee, index) => {
                    return (
                        <div key={employee.id}>
                            <Employee
                                deleteItem={() => deleteEmployeeHandler(index)}
                                id={employee.id}
                                name={employee.name}
                                designation={employee.designation}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
