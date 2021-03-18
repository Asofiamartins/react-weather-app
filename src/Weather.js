import React from "react";

import './Weather.css';








export default function Weather(weatherData){

   
    return (
    <div className="weather">
        <div className="weatherDescription">
            <img src="img/01.svg" alt="Monstera Deliciosa"/>
            <p className="text-capitalize">{weatherData.description}</p>
        </div>
        <div className="weatherInfo">
            <div className="row">
                <div className="col">
                    <h1>{weatherData.temperature}º<span className="units" >C|F</span></h1></div>
                <div className="col"><h2>{weatherData.city}</h2><p>Last update at {weatherData.date} </p></div>
            </div>
        </div>
    </div>);
}
