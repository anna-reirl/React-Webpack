import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader'

import 'core-js/stable';
import 'regenerator-runtime/runtime';

class App extends React.Component {
    render() {
        return <div>Hello {this.props.name} </div>;
    }
}

const AppWithHot = hot(module)(App);

var mountNode = document.getElementById("app");
ReactDOM.render(<AppWithHot name='Jane' />, mountNode);

