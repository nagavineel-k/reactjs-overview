import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    const [toggleState, setToggleState] = useState(true);

    let toggledScreen = null;
    if (toggleState) {
        toggledScreen = (
            <div>
                <p>1st Screen</p>
            </div>
        );
    } else {
        toggledScreen = (
            <div>
                <p>2nd Screen</p>
            </div>
        )
    }

    return (
        <div>
            <button onClick={() => setToggleState(!toggleState)}>Toggle</button>
            {toggledScreen}
        </div>

    );
};

export default App;
