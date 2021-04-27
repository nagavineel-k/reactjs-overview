# reactjs-overview


Concept of ReactJS
/***************************************************************/

npm install -g create-react-app
npx create-react-app my-first-app
cd my-first-app
npm start

/***************************************************************/

a) Using Class Component :-
--------------------------

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
    render() {
        return (
            <div>
                React app Using class componenet
            </div>
        );
    };
};

ReactDOM.render(<App />, document.getElementById('root'));

b) Using Functional Component :-
--------------------------------

import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    return (
        <div>
            React app Using Function componenet
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));

/***************************************************************************/