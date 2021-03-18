import React from "react";
import './Weather.css';
import "./FormattedDate"
export default function Weather(props){
   
    return (
    <div className="weather">
        <div className="weatherDescription">
            <img src="img/01.svg" alt="Monstera Deliciosa"/>
            <p className="text-capitalize">{props.weatherData.description}</p>
        </div>
        <div className="weatherInfo">
            <div className="row">
                <div className="col">
                    <h1>{props.weatherData.temperature}º<span className="units" >C|F</span></h1></div>
                <div className="col"><h2>{props.weatherData.city}</h2><p><FormattedDate date={props.weatherData.date}/> </p></div>
            </div>
        </div>
    </div>);
}
