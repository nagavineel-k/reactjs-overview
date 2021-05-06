import React from 'react';
import './Cockpit.css';

const Cockpit = (props) => {
    return (
        <div>
            <button className="toggleBtn" onClick={() => props.toggleHandler()}>
                Toggle &nbsp;
              <span>({props.showStudents === true ? 'Show' : 'Hide'})</span>
            </button>
        </div>
    );
};

export default Cockpit;