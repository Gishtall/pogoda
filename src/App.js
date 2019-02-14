import React, { Component } from 'react';
import './App.css';
import Info from './components/info';
import Form from './components/form';
import Weather from './components/weather';

class App extends Component {
  render() {
    return (
      <div>
        <Info />
        <Form />
        <Weather />
      </div>
    );
  }
}

export default App;
