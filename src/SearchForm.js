import React, { useState } from "react";
import axios from "axios";
import "./SearchForm.css"
import Weather from "./Weather"
import WeatherDetails from "./WeatherDetails"
import Forecast from "./Forecast"

export default function SearchForm(props){ 
    const [weatherData, setWeatherData] = useState({ready:false});
    const [city, setCity] = useState(props.defaultCity);


    function handleSearch(response){
        setWeatherData(
        {
        ready: true,
        temperature: response.data.main.temp,
        description: response.data.weather[0].description,
        city: response.data.name,
        humidity: response.data.main.humidity,
        wind: response.data.wind.speed,
        tempmax: response.data.main.temp_max,
        tempmin: response.data.main.temp_min,
        date: newDate(response.data.dt * 1000),
    }
    );   
     }
     function search(){
    const apiKey =`ad04f0e0df090e6f6edccedb580b7fca`;
    let city = {city};
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleSearch);
    }
     
     function handleSubmit(event) {
         event.preventDefaulr();
        search(city);
     }
     function updateCity(event){
         setCity(event.target.value);
     }
    if (weatherData.ready){
        return ( 
            <div>
                <div className="Search">
                    <form className="search-form" onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-7">
                                <input className="city-input" type="search" placeholder="The weather in..." autoComplete="off" onChange={updateCity}/>
                            </div>
                            <div className="col">
                                <input className="newcity-button" type="submit" value="New city" />
                                <input className="currentcity-button" id="currentcity-button" type="submit" value="Current City"/>
                            </div>
                        </div>
                        </form>
                </div>
                <div className="row"> 
                    <div className="col-5" >
                        <Weather data={weatherData}/>
                     </div>
                    <div className="col">
                       <WeatherDetails />
                       <Forecast />
                    </div>
                </div>
            </div>);

        }
    else{
    search();
    return "Loading...";}}