import React, { Component } from 'react';
import BeerFilter from './Components/Filters/Filters'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <BeerFilter/>
      </div>
    );
  }
}

export default App;
