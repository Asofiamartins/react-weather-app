import React, { useState } from "react";
import axios from "axios";
import "./SearchForm.css"
import Weather from "./Weather"
import WeatherDetails from "./WeatherDetails"
import Forecast from "./Forecast"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

export default function SearchForm(props){ 
    const [weatherData, setWeatherData] = useState({ready:false});
    const [city, setCity] = useState(props.defaultCity);


    function handleSearch(response){
        setWeatherData({
        ready: true,
        temperature: response.data.main.temp,
        description: response.data.weather[0].description,
        city: response.data.name,
        humidity: response.data.main.humidity,
        wind: response.data.wind.speed,
        tempmax: response.data.main.temp_max,
        tempmin: response.data.main.temp_min,
        date: new Date(response.data.dt * 1000),
        feels: response.data.main.feels_like,
        sunrise: response.data.sys.sunrise * 1000,
        sunset:  response.data.sys.sunset * 1000,
        iconPlant: `img/${response.data.weather[0].icon}.png`,
    });   
     }
      function handleSubmit(event) {
         event.preventDefault();
        search();
     }
     function updateCity(event){
    setCity(event.target.value);
     }
    function search(){
    const apiKey =`7b07bb1f8b7dcb2a54cfc50f9ead4b60`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleSearch);
    }
    
    function showPosition(position){
    const apiKey =`7b07bb1f8b7dcb2a54cfc50f9ead4b60`;
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    
    axios.get(apiUrl).then(handleSearch);
    }
    
    function getPosition(event){
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(showPosition);
    }

    if (weatherData.ready){
        return ( 
            <div>
                <div className="row"> 
                    <div className="col-5" >
                        <Weather data={weatherData}/>
                     </div>
                    <div className="col">
                        <div className="Search">
                            <form className="search-form" onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-7">
                                     <input className="city-input" type="search" placeholder="The weather in..." autoComplete="off" onChange={updateCity}/>
                                    </div>
                                    <div className="col">
                                        <input className="newcity-button" type="submit" value="New city" />
                                        <input className="currentcity-button" id="currentcity-button" type="submit" value="Current City" onClick={getPosition}/>
                                    </div>
                                </div>
                            </form>
                        </div>
                            <WeatherDetails details={weatherData}/>
                            <Forecast city={weatherData.city}/>
                    </div>
                    
                </div>
                
            </div>);

        }
    else{
    search();
    return <Loader
        type="ThreeDots"
        color="#9a5229"
        height={10}
        width={10}
        />}}