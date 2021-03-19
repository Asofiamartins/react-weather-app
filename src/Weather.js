import React from "react";
import FormattedDate from "./FormattedDate";
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
                <div className="col-4">
                <WeatherTemperature celsius={props.data.temperature}/>
                </div>    
                <div className="col"><h2>{props.data.city}</h2> 
                <FormattedDate date={props.data.date}/>
                </div>
            </div>
            
        </div>
    </div>);
}
