import React, { useState } from "react";
import ReactDOM from 'react-dom';

const ToggleContent = () => {
    const [showText, setShowText] = useState(true);
    return (
        <div className="App">
            <button onClick={() => setShowText(!showText)}>Toggle Text</button>
            {
                showText ? <div>A</div> : <div>B</div>
            }
        </div>
    );
};

export default ToggleContent;