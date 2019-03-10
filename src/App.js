import React, { Component } from 'react';
import './App.css';
import Postform from './components/Postform';
import Posts from './components/Posts';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Postform></Postform>
        <hr></hr>
        <Posts></Posts>
      </div>
    );
  }
}

export default App;
