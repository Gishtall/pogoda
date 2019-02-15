import React, { Component } from 'react';
import './App.css';
import Info from './components/info';
import Form from './components/form';
import Weather from './components/weather';

const API_KEY ='3db4b74cb073f031caed13e7b405ff48';
state={
  temp:undefined,
  city:undefined,
  country:undefined,
  sunrise:undefined,
  sunset:undefined,
  error:undefined,
}
class App extends Component {
  gettingWeather = async (event) => {
    event.preventDefault();
   const city = event.target.elements.city.value;
   const api_url = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
   const data = await api_url.json();
   console.log(data);

   this.setState({
     temp:data.main.temp,
     city:data.name,
     country:data.sys.country,
     sunrise:data.sys.sunrise,
     sunset:data.sys.sunset,
     error:""
   });
  }
  render() {
    return (
      <div>
        <Info />
        <Form weatherMetod={this.gettingWeather}/>
        <Weather />
      </div>
    );
  }
}

export default App;
