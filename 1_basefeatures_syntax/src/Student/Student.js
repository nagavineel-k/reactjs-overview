import React from 'react';

const Student = (props) => {
    return (
        <div>
            <div onClick={props.switchName}>
                Student ID: {props.id} <br />
                Student Name: {props.name} <br />
                Student Age: {props.age} <br />
                Student Location: {props.location} <br />
                <input type="text" onChange={props.nameChange} value={props.name} />
                <hr />
            </div>

        </div>
    );
};

export default Student;