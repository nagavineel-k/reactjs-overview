import React from 'react';
import './Student.css';

const Student = (props) => {
    return (
        <div>
            <div>
                <div style={{ float: 'left' }}>
                    Student ID: {props.id} <br />
                    Student Name: {props.name} <br />
                    Student Age: {props.age} <br />
                    Student Location: {props.location} <br />
                    <input type="text" onChange={props.nameChange} value={props.name} /> <br />

                </div>
                <div style={{ float: 'right' }}>
                    <button className="deleteBtn" onClick={props.deleteItem}>Delete</button>
                </div>
            </div>

            <br /><br /><br /><br /><br /><br />
            <div>
                <hr />
            </div>
        </div>
    );
};

export default Student;