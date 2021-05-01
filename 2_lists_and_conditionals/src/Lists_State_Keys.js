import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Employee from './Employee/Employee';

const App = () => {
    const [doctorsState, setDoctorState] = useState({
        doctors: [
            {
                id: 20123,
                name: 'Gautham',
                age: 28,
                designation: 'Jr. Doctor',
                workLocation: 'Homecare, Koramangala, Bengaluru'
            },
            {
                id: 20124,
                name: 'Sowmya',
                age: 38,
                designation: 'Sr. Doctor',
                workLocation: 'Homecare, Ulsoor, Bengaluru'
            },
            {
                id: 20125,
                name: 'Krishna',
                age: 48,
                designation: 'Sr. Doctor',
                workLocation: 'Homecare, Whitefield, Bengaluru'
            },
        ]
    });
    const [patientsState, setPatientState] = useState({
        patients: [
            "Patient list not yet updated...."
        ]
    });
    const [toggleSate, setToggleState] = useState(true);

    const deleteDoctorListHandler = (doctorIndex) => {
        // const doctors = doctorsState.doctors.slice()
        const doctors = [...doctorsState.doctors]
        doctors.splice(doctorIndex, 1);
        setDoctorState({
            doctors: doctors
        })
    }

    let doctors_patients_list = null;
    if (toggleSate) {
        doctors_patients_list = (
            <div>
                {
                    doctorsState.doctors.map((doctor, index) => {
                        return (
                            <div key={doctor.id}>
                                <Employee
                                    click={() => deleteDoctorListHandler(index)}
                                    employeeId={doctor.id}
                                    employeeName={doctor.name}
                                    employeeAge={doctor.age}
                                    employeeDesignation={doctor.designation}
                                >
                                    {doctor.workLocation}
                                </Employee>
                            </div>
                        )
                    })
                }
            </div>
        )
    } else {
        doctors_patients_list = (
            <div>
                {patientsState.patients}
            </div>
        )
    };

    return (
        <div>
            <div>
                <h3>Homecare Hospitals, Bengaluru</h3>
            </div>
            <div>
                <button type="button" className="btn btn-primary" onClick={() => setToggleState(!toggleSate)}>Toggle Doctors/Patients List</button>
                {doctors_patients_list}
            </div>

        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));