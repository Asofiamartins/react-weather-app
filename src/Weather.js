import React from "react";

import './Weather.css';
import WeatherTemperature from "./WeatherTemperature";

export default function Weather(props){
   
    return (
    <div className="weather">
        <div className="weatherDescription">
            <img src={props.data.iconPlant} alt={props.data.description}/>
            <p className="text-capitalize">{props.data.description}</p>
        </div>
        <div className="weatherInfo">
            <div className="row">
                <div className="col-03">
                <WeatherTemperature celsius={props.data.temperature}/>
                </div>
                <div class="col align-self-end"><h2>{props.data.city}</h2></div>
             </div>
        </div>
    </div>);
}
