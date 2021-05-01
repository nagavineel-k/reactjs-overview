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
    return (
        <div>
            <div>
                {employeeState.employees.map((employee, index) => {
                    return (
                        <div key={employee.id}>
                            <Employee
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
