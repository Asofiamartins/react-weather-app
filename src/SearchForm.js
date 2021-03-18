import React, { useState } from "react";
import axios from "axios";
import "./SearchForm.css"

export default function SearchForm(props){ 
        const [weatherData, setWeatherData] = useState({ready:false});
        function handleSearch(response){
        
        setWeatherData({
        ready: true,
        temperature: response.data.main.temp,
        description: response.data.weather[0].main,
        city: response.data.name,
        humidity: response.data.main.humidity,
        wind: response.data.wind.speed,
        tempmax: response.data.main.temp_max,
        tempmin: response.data.main.temp_min,
        
        date: "Thurday 5"
    });   
     }

    if (weatherData.ready){
        return (
        <div className="Search">
            <p>{weatherData.city} </p>
        <form className="search-form">
        <div className="row">
            <div className="col-7">
                <input className="city-input" type="search" placeholder="The weather in..." autoComplete="off" />
            </div>
            <div className="col">
                <input className="newcity-button" type="submit" value="New city" />
                <input className="currentcity-button" id="currentcity-button" type="submit" value="Current City"/>
            </div>
        </div>
        </form>
    </div>);

    }
    else{
    const apiKey =`ad04f0e0df090e6f6edccedb580b7fca`;
    let city = props.defaultCity;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleSearch);
    }
    return "Loading...";
    
}
