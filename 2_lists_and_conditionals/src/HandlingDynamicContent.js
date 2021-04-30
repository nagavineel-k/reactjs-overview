import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Employee from './Employee/Employee';

const HandlingDynamicContent = (props) => {

    const [employeeState, setEmployeeState] = useState({
        employees: [
            { employeeName: "Gautham", employeeAge: "28", employeeId: "212035", employeeDesignation: "Jr. Doctor" },
            { employeeName: "Keerthana", employeeAge: "38", employeeId: "212036", employeeDesignation: "Sr. Doctor" },
            { employeeName: "Rajesh", employeeAge: "48", employeeId: "212037", employeeDesignation: "Sr. Doctor" }
        ],
    });
    const [patientState, setPatientState] = useState({
        Patients: [
            "Patients List still not updated...."
        ]
    });

    const [toggleEmployeeState, setToggleEmployeeState] = useState(true);

    const switchEmployeeHandler = (newName) => {
        setEmployeeState({
            employees: [
                { employeeName: newName, employeeAge: "29", employeeId: "212035", employeeDesignation: "Jr. Doctor" },
                { employeeName: "Keerthana", employeeAge: "39", employeeId: "212036", employeeDesignation: "Sr. Doctor" },
                { employeeName: "Rajesh", employeeAge: "49", employeeId: "212037", employeeDesignation: "Sr. Doctor" }
            ]
        });
    };

    const nameChangeHandler = (event) => {
        setEmployeeState({
            employees: [
                { employeeName: 'Gautam Kumar K', employeeAge: "29", employeeId: "212035", employeeDesignation: "Jr. Doctor" },
                { employeeName: event.target.value, employeeAge: "39", employeeId: "212036", employeeDesignation: "Sr. Doctor" },
                { employeeName: "Rajesh", employeeAge: "49", employeeId: "212037", employeeDesignation: "Sr. Doctor" }
            ]
        });
    }

    let employees = null;
    if (toggleEmployeeState) {
        employees = (
            <div>
                <Employee
                    click={() => switchEmployeeHandler('Gautam Kumar')}
                    employeeName={employeeState.employees[0].employeeName}
                    employeeAge={employeeState.employees[0].employeeAge}
                    employeeId={employeeState.employees[0].employeeId}
                    employeeDesignation={employeeState.employees[0].employeeDesignation}>
                    Homecare, Halusuru, Bangalore.

                </Employee>

                <br></br>

                <Employee
                    changed={nameChangeHandler}
                    employeeName={employeeState.employees[1].employeeName}
                    employeeAge={employeeState.employees[1].employeeAge}
                    employeeId={employeeState.employees[1].employeeId}
                    employeeDesignation={employeeState.employees[1].employeeDesignation}>
                    Homecare, Electronic City-1, Bangalore.

                </Employee>

                <br></br>

                <Employee
                    employeeName={employeeState.employees[2].employeeName}
                    employeeAge={employeeState.employees[2].employeeAge}
                    employeeId={employeeState.employees[2].employeeId}
                    employeeDesignation={employeeState.employees[2].employeeDesignation}>
                    Homecare, Koramangala, Bangalore.

                </Employee>

                <br></br>
            </div>
        );
    } else {
        employees = (
            <div>
                <h2>Data is not updated....</h2>
            </div>
        )
    }

    return (
        <div>
            <div>
                <h2>Homecare Hospitals, Bangalore</h2>
            </div>
            <div>
                <button type="button" className="btn btn-success" onClick={() => switchEmployeeHandler('Gautam Kumar K')}>Switch Employee</button>
            </div>
            <div>
                <button type="button" className="btn btn-warning" onClick={() => setToggleEmployeeState(!toggleEmployeeState)}>Toggle Handle</button>
                {employees}
            </div>

        </div>
    );
};

ReactDOM.render(<HandlingDynamicContent />, document.getElementById('root'));