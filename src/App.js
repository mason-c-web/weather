import './App.css';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

function App() {

  const [temp, setTemp] = useState();
  const [pants, setPants] = useState(false)
   function getUserInfo (){
    getLocation()

  return axios.get('https://api.open-meteo.com/v1/forecast?latitude=47.62&longitude=-122.36&current_weather=true&temperature_unit=fahrenheit').then(res=>{
  console.log(res.data.current_weather.temperature)
  return res.data.current_weather.temperature
  })


}

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    console.log("Geolocation is not supported by this browser.")
  }
}

function showPosition(position) {
 console.log( "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude)
}
useEffect(()=>{
   getUserInfo().then(data =>{
     setTemp(data)
   }
    )

},[])

  return (
    <div className="App">    <h1>DO you need pants.com</h1>

      {temp>40?
       <div>{temp}</div>
       :
       <div> you dont need  pants</div>
      }

    </div>
  );
}
//
export default App;
