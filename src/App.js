import React, {Component} from 'react';
import Main from './Components/Main/Main'
import './App.css';
import Card from './Components/Card/Card'

class App extends Component {
    render() {
        return (
            <div className="App">
                <Main/>
                <Card/>
            </div>
        );
    }
}

export default App;
