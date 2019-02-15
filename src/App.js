import React, { Component } from 'react';
import './App.css';
import Info from './components/info';
import Form from './components/form';
import Weather from './components/weather';

const API_KEY ='3db4b74cb073f031caed13e7b405ff48';

class App extends Component {
  gettingWather = async () => {
   const api_url = await fetch (`https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_KEY}&units=metric`);
   const data = await api_url.json();
   console.log(data);
  }
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
