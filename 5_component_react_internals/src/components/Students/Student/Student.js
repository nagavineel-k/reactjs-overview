import React from 'react';
import './Student.css';

const Student = (props) => {
    return (
        <div>
            <div className={props.sdtDtBgClr.join(' ')}>
                <div style={{ float: 'left' }}>
                    Student Id: {props.id} <br />
                    Student Name: {props.name} <br />
                    Student Location: {props.location} <br />
                    <input type="text" onChange={props.chngItem} placeholder={props.name} />
                </div>
                <div style={{ float: 'right' }}>
                    <button className="deleteBtn" onClick={props.delItem}>Delete</button>
                </div>
                <br /><br /><br /><br />
            </div> <hr />
        </div>
    );
};

export default Student;